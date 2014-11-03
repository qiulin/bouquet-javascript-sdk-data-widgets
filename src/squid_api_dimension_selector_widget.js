(function (root, factory) {
    root.squid_api.view.DimensionSelector = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_dimension_selector_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        template : null,
        dimensions : [],
        dimensionIdList : null,

        initialize: function(options) {
            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }

            if (options.dimensionIdList) {
                this.dimensionIdList = options.dimensionIdList;
            }

            var me = this;
            squid_api.model.project.on('change', function(model) {
                // get the dimensions from the api

                var domainId, domain;

                /* See if we can obtain the domain's.
                If not check for a multi analysis array */

                domains = me.model.get("domains");

                if (!domains) {
                    domains = me.model.get("analyses")[0].get("domains");
                }

                domain = squid_api.utils.find(model.get("domains"), "oid", domains[0].domainId);

                var dims = domain.dimensions;

                // filter categorical dimensions
                for (var i=0; i<dims.length; i++){
                    var dim = dims[i];
                    if (dim.type == "CATEGORICAL") {
                        if (me.dimensionIdList) {
                            // insert and sort
                            var idx = me.dimensionIdList.indexOf(dim.oid);
                            if (idx >= 0) {
                                me.dimensions[idx] = dim;
                            }
                        } else {
                            // default unordered behavior
                            me.dimensions.push(dim);
                        }
                    }
                }
                me.render();
            });
        },

        setModel: function(model) {
            this.model = model;
            this.initialize();
        },

        events: {
            "change": function(event) {
                var oid = this.$el.find("select option:selected");
                var selected = [];

                $(oid).each(function(index, metric){
                    selected.push($(this).val());
                });

                if (this.model.get("analyses")) {
                    // If instance of array
                    if (this.model.get("analyses")[0]) {
                        this.model.get("analyses")[0].setDimensionIds(selected);
                    } else {
                        this.model.get("analyses").setDimensionIds(selected);
                    }
                } else {
                    this.model.setDimensionIds(selected);
                }
            }
        },

        render: function() {
            // display

            var jsonData = {"selAvailable" : true, "options" : []};

            for (var i=0; i<this.dimensions.length; i++) {
                var dim = this.dimensions[i];
                if (dim) {
                    var selected = false;

                    /* See if we can obtain the dimensions.
                    If not check for a multi analysis array */

                    var dimensions = this.model.get("dimensions");

                    if (!dimensions) {
                        dimensions = this.model.get("analyses")[0].get("dimensions");
                    }

                    if (dim.oid == dimensions[0].dimensionId) {
                        selected = true;
                    }

                    var option = {"label" : dim.name, "value" : dim.oid, "selected" : selected};
                    jsonData.options.push(option);
                }
            }

            var html = this.template(jsonData);
            this.$el.html(html);
            this.$el.show();

            // Initialize plugin
            this.$el.find("select").multiselect();

            return this;
        }

    });

    return View;
}));
