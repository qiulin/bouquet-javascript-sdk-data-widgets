this["squid_api"] = this["squid_api"] || {};
this["squid_api"]["template"] = this["squid_api"]["template"] || {};

this["squid_api"]["template"]["squid_api_datatable_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class='sq-loading' style='position:absolute; width:100%; top:40%; z-index: 1;'>\r\n	<div class=\"spinner\">\r\n	<div class=\"rect5\"></div>\r\n	<div class=\"rect4\"></div>\r\n	<div class=\"rect3\"></div>\r\n	<div class=\"rect2\"></div>\r\n	<div class=\"rect1\"></div>\r\n	<div class=\"rect2\"></div>\r\n	<div class=\"rect3\"></div>\r\n	<div class=\"rect4\"></div>\r\n	<div class=\"rect5\"></div>\r\n	</div>\r\n</div>\r\n<table class=\"sq-table\">\r\n	<thead>\r\n		<tr></tr>\r\n	</thead>\r\n	<tbody></tbody>\r\n</table>\r\n";
  });

this["squid_api"]["template"]["squid_api_dimension_selector_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <select class=\"sq-select form-control\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.multiple), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.options), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </select>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "multiple";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n            <option value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n                ";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n            </option>\r\n        ";
  return buffer;
  }
function program5(depth0,data) {
  
  
  return "selected";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n    <!-- just display filter name -->\r\n    <label>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</label>\r\n    <span>-</span>\r\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selAvailable), {hash:{},inverse:self.program(7, program7, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_displaytype_selector_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    	<li data-content=\"";
  if (helper = helpers.view) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.view); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isActive), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><i class=\"fa ";
  if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " fa-2x\"></i></li>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "class=\"active\"";
  }

  buffer += "<ul class=\"widget-selector\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.options), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_domain_selector_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <select class=\"sq-select form-control\">\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.options), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </select>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n            <option value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n                ";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n            </option>\r\n        ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "selected";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n    <!-- just display filter name -->\r\n    <label>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</label>\r\n    <span>-</span>\r\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selAvailable), {hash:{},inverse:self.program(5, program5, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_kpi_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n	<div class='sq-kpi'>\r\n		<span class=\"value\" style=\"font-size: large;\">";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span><span class=\"unit\">";
  if (helper = helpers.unit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.unit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n	    <span class=\"name\">\r\n	        ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n	    </span>\r\n	</div>\r\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.done), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "\r\n  		No Data\r\n  	";
  }

function program6(depth0,data) {
  
  
  return "\r\n  		Computing\r\n  	";
  }

  stack1 = helpers['if'].call(depth0, depth0, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["squid_api"]["template"]["squid_api_metric_selector_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <select class=\"sq-select form-control\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.multiple), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.options), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</select>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "multiple";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n            <option value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n                ";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n        </option>\n    ";
  return buffer;
  }
function program5(depth0,data) {
  
  
  return "selected";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n    <!-- just display filter name -->\r\n    <label>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</label>\r\n    <span>-</span>\r\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selAvailable), {hash:{},inverse:self.program(7, program7, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_project_selector_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <select class=\"sq-select form-control\">\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.options), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </select>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n            <option value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n                ";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n            </option>\r\n        ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "selected";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n    <!-- just display filter name -->\r\n    <label>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</label>\r\n    <span>-</span>\r\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selAvailable), {hash:{},inverse:self.program(5, program5, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_timeseries_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class='sq-loading' style='position:absolute; width:100%; top:40%; z-index: 1;'>\n	<div class=\"spinner\">\n	<div class=\"rect5\"></div>\n	<div class=\"rect4\"></div>\n	<div class=\"rect3\"></div>\n	<div class=\"rect2\"></div>\n	<div class=\"rect1\"></div>\n	<div class=\"rect2\"></div>\n	<div class=\"rect3\"></div>\n	<div class=\"rect4\"></div>\n	<div class=\"rect5\"></div>\n	</div>\n</div>\n<div id=\"chart_container\">\n	<div id=\"chart\"></div>\n	<div id=\"legend_container\">\n		<div id=\"smoother\" title=\"Smoothing\"></div>\n		<div id=\"legend\"></div>\n	</div>\n	 <form id=\"offset_form\" class=\"toggler\">\n                <input type=\"radio\" name=\"offset\" id=\"lines\" value=\"lines\" checked>\n                <label class=\"lines\" for=\"lines\">lines</label>\n                <input type=\"radio\" name=\"offset\" id=\"stack\" value=\"stack\">\n                <label class=\"stack\" for=\"stack\">stack</label>\n				<input type=\"radio\" name=\"offset\" id=\"bar\" value=\"bar\">\n				<label class=\"bar\" for=\"bar\">bar</label>\n        </form>\n	<div id=\"slider\"></div>\n</div>\n";
  });
(function (root, factory) {
    root.squid_api.view.DataTableView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    View = Backbone.View.extend( {

        template : null,

        maxRowsPerPage : 10000,

        format : null,

        initialize : function(options) {
            if (this.model) {
                this.listenTo(this.model, 'change', this.render);
            }

            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = squid_api.template.squid_api_datatable_widget;
            }
            if (options.maxRowsPerPage) {
                this.maxRowsPerPage = options.maxRowsPerPage;
            }
            if (options.format) {
                this.format = options.format;
            } else {
                // default number formatter
                if (d3) {
                    this.format = d3.format(",.f");
                } else {
                    this.format = function(f){
                        return f;
                    };
                }
            }
        },

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },
        
        /**
         * see : http://stackoverflow.com/questions/10966440/recreating-a-removed-view-in-backbone-js
         */
        remove: function() {
            this.undelegateEvents();
            this.$el.empty();
            this.stopListening();
            return this;
        },

        dataTableInsert : function(data) {

            var globalID;

            if (this.$el.attr("id")) {
                globalID = "#" + this.$el.attr('id');
            } else {
                console.log("No ID assigned to DOM element for Data Table");
            }

            d3.select(globalID + " tbody").selectAll("tr").remove();

            // header
            var th = d3.select(globalID + " thead tr").selectAll("th")
                .data(data.results.cols)
                .enter().append("th")
                .text(function(d) {
                    return d.name;
                });

            // Rows
            var tr = d3.select(globalID + " tbody").selectAll("tr")
                .data(data.results.rows)
                .enter().append("tr");

            // Cells
            var td = tr.selectAll("td")
                .data(function(d) {
                    return d.v;
                })
                .enter().append("td")
                .text(function(d) {
                    return d;
                });
        },

        render : function() {
            var jsonData, data, rowIdx, colIdx, row, rows, v, analysis;

            var me = this;

            this.$el.html(this.template());

            if (!this.model.isDone()) {
                // running
                if (this.model.get("status") == "RUNNING") {
                    $(".sq-loading").show();
                }
            } else if (this.model.get("error")) {
                // error
                $(".sq-loading").hide();
            } else {
                // display
                this.display();

                $(".sq-loading").hide();
            }

            return this;
        },
        
        display : function() {
            var analysis = this.model;

            // Use the first analyses array
            if (analysis.get("analyses")) {
              analysis = analysis.get("analyses")[0];
            }

            var jsonData = analysis.toJSON();
            if (jsonData.results) {
                // apply paging and number formatting
                data = {};
                data.done = this.model.isDone();
                data.results = {"cols" : jsonData.results.cols, "rows" : []};
                rows = jsonData.results.rows;
                for (rowIdx = 0; (rowIdx<rows.length && rowIdx<this.maxRowsPerPage); rowIdx++) {
                    row = rows[rowIdx];
                    newRow = {v:[]};
                    for (colIdx = 0; colIdx<jsonData.results.cols.length; colIdx++) {
                        v = row.v[colIdx];
                        if (jsonData.results.cols[colIdx].dataType == "NUMBER") {
                            v = this.format(v);
                        }
                        newRow.v.push(v);
                    }
                    data.results.rows.push(newRow);
                }
                
                // build the html datatable
                this.dataTableInsert(data);
                // Initiate the Data Table after render
                this.$el.find(".sq-table").DataTable();
            }
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.DimensionSelector = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_dimension_selector_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        template : null,
        dimensions : null,
        dimensionIdList : null,
        dimensionIndex: null,

        initialize: function(options) {
            var me = this;

            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }

            if (options.dimensionIdList) {
                this.dimensionIdList = options.dimensionIdList;
            }

            if (options.dimensionIndex !== null) {
                this.dimensionIndex = options.dimensionIndex;
            }

            this.model.on('change', function() {
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

                for (i = 0; i < oid.length; i++) {
                    selected.push($(oid[i]).val());
                }
                
                var analysis = null;
                if (this.model.get("analyses")) {
                    // If instance of array
                    if (this.model.get("analyses")[0]) {
                        analysis = this.model.get("analyses")[0];
                    }
                } else {
                    analysis = this.model;
                }

                if (analysis) {
                    if (this.dimensionIndex !== null) {
                        if (selected.length > 0) {
                            analysis.setDimensionId(selected[0], this.dimensionIndex);
                        }
                    } else {
                        analysis.setDimensionIds(selected);
                    }
                }
            }
        },

        render: function() {
            var isMultiple = true;

            if (this.dimensionIndex !== null) {
                isMultiple = false;
            }

            var jsonData = {"selAvailable" : true, "options" : [], "multiple" : isMultiple};
            
            // iterate through all domains dimensions
            var domain = squid_api.utils.find(squid_api.model.project.get("domains"), "oid", squid_api.domainId);
            if (domain) {
                if (domain.dimensions) {
                    var dimensions = [];
                    var dims = domain.dimensions;
                    for (var i=0; i<dims.length; i++){
                        var dim = dims[i];
                        if (this.dimensionIdList) {
                            // insert and sort
                            var idx = this.dimensionIdList.indexOf(dim.oid);
                            if (idx >= 0) {
                                dimensions[idx] = dim;
                            }
                        } else {
                            // default unordered behavior
                            dimensions.push(dim);
                        }
                    }
                    
                    for (var dimIdx=0; dimIdx<dimensions.length; dimIdx++) {
                        var dimension = dimensions[dimIdx];
                        // check if selected
                        var selected = this.isSelected(dimension);
                        
                        // add to the list
                        var option = {"label" : dimension.name, "value" : dimension.oid, "selected" : selected};
                        jsonData.options.push(option);
                    }
                }
            }

            var html = this.template(jsonData);
            this.$el.html(html);
            this.$el.show();

            // Initialize plugin
            var selector = this.$el.find("select");
            if (isMultiple) {
                selector.multiselect();
            }

            return this;
        },
        
        isSelected : function(dim) {
            var selected = false;

            var dimensions = this.model.get("dimensions");
            if (!dimensions && (this.model.get("analyses"))) {
                // multi-analysis case
                dimensions = this.model.get("analyses")[0].get("dimensions");
            }

            if (dimensions) {
                if (this.dimensionIndex !== null) {
                    if (dim.oid == dimensions[this.dimensionIndex].dimensionId) {
                        selected = true;
                    }
                } else {
                    for (var j=0; j<dimensions.length; j++) {
                        if (dim.oid == dimensions[j].dimensionId) {
                            selected = true;
                        }
                    }
                }
            }
            return selected;
        }

    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.DisplayTypeSelectorView = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_displaytype_selector_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({

        template : null,
        renderTo : null,
        defaultWidget : null,
        currentView : null,
        currentViewName : null,
        currentSelectionName : null,
    
        initialize: function(options) {
    
            var me = this;
    
            // Store template
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }
    
            // Store Widget Render to element
            if (options.renderTo) {
                this.renderTo = options.renderTo;
            }
    
            if (options.defaultWidget) {
                this.defaultWidget = options.defaultWidget;
            }
            
            if (this.model) {
                this.model.on('change', this.render, this);
            }
    
            this.render();
        },
    
        setModel: function(model) {
            this.model = model;
            this.initialize();
        },
    
        events: {
            "click li": "changeWidget"
        },
    
        changeWidget: function(item){
            this.currentSelectionName = item.currentTarget.dataset.content;
            this.render();
        },
    
        render: function() {
            if (!this.model.isDone()) {
                // running
                if (this.model.get("status") == "RUNNING") {
                    $(".sq-loading").show();
                }
            } else if (this.model.get("error")) {
                // error
                $(".sq-loading").hide();
            } else {
                this.display();
            }
        },
        
        addCompatibleView : function(list, name) {
            // check it is available
            if (squid_api.view[name]) {
                list.push(name);
            }
        },
        
        display: function() {
            var me = this;
            
            // compute the view types compatible with the analysis
            var dimensions = this.model.get("dimensions");
            var compatibleViews = [];
            
            this.addCompatibleView(compatibleViews, "DataTableView");
            if (dimensions && (dimensions.length>0)) {
                this.addCompatibleView(compatibleViews, "BarChartView");
                if (dimensions.length>1) {
                    this.addCompatibleView(compatibleViews, "FlowChartView");
                }
                var hasDateDimension = false;
                var cols = this.model.get("results").cols;
                for (var idx=0; idx < cols.length; idx++) {
                    if (cols[idx].dataType == "DATE") {
                        hasDateDimension = true;
                    }
                }
                if (hasDateDimension) {
                    this.addCompatibleView(compatibleViews, "TimeSeriesView");
                }
            }
       
            // compute the current selected view
            var viewName;
            if (!this.currentSelectionName) {
                this.currentSelectionName = this.defaultWidget;
            }
            if (compatibleViews.indexOf(this.currentSelectionName)>-1) {
                viewName = this.currentSelectionName;
            } else {
                viewName = "DataTableView";
                this.currentSelectionName = viewName;
            }
            
            // display the Widget
            if (!this.currentViewName || (viewName != this.currentViewName)) {
                // update the view
                this.currentViewName = viewName;
                if (this.currentView) {
                    // dispose previous view
                    this.currentView.remove();
                }
                // create the new view
                if (viewName == "DataTableView") {
                    this.currentView = new squid_api.view.DataTableView ({
                        el : me.renderTo,
                        model : analysis
                    });
                } else if (viewName == "TimeSeriesView") {
                    this.currentView = new squid_api.view.TimeSeriesView ({
                        el : me.renderTo,
                        model : analysis
                    });
                }
                this.currentView.render();
            }
            
            // display the view selector
            var data = {"options" : []};
            for (idx2 = 0; idx2<compatibleViews.length; idx2++) {
                var view2 = compatibleViews[idx2];
                var icon;
                if (view2 == "DataTableView") {
                    icon = "fa-table";
                } else if (view2 == "TimeSeriesView") {
                    icon = "fa-line-chart";
                } else if (view2 == "BarChartView") {
                    icon = "fa-bar-chart";
                }
                var isActive = false;
                if (view2 == this.currentViewName) {
                    isActive = true;
                }
                data.options.push({"view" : view2, "icon" : icon, "isActive" : isActive});
            }
            var html = this.template(data);
            this.$el.html(html);
    
            return this;
        }
    });

    return View;

}));

(function (root, factory) {
    root.squid_api.view.DomainSelector = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_domain_selector_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        template : null,

        initialize: function(options) {
            var me = this;

            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }

            // init the domains
            this.model = squid_api.model.project;
            this.model.on("change", this.render, this);
        },

        events: {
            "change .sq-select": function(event) {
                var selectedOid = event.target.value;
                // update the current domain
                squid_api.setDomainId(selectedOid);
            }
        },

        render: function() {
            var domain, domains, jsonData = {"selAvailable" : true, "options" : [{"label" : "Select Domain", "value" : "", "selected" : false}]};

            // get the domains from the project;
            domains = this.model.get("domains");
            if (domains) {
                for (var i=0; i<domains.length; i++) {
                    domain = domains[i];
                    var selected = false;
                    if (domain.oid == squid_api.domainId) {
                        selected = true;
                    }

                    var displayed = true;
                    // do not display domains with no dimensions
                    if (!domain.dimensions) {
                        displayed = false;
                    }

                    if (displayed) {
                        var option = {"label" : domain.name, "value" : domain.oid, "selected" : selected};
                        jsonData.options.push(option);
                    }
                }
            }

            var html = this.template(jsonData);
            this.$el.html(html);
            this.$el.show();

            // Initialize plugin
            this.$el.find("select");

            return this;
        }

    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.KPIView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    View = Backbone.View.extend( {

        template : null,
        
        format : null,

        initialize : function(options) {
            if (this.model) {
                this.model.on('change', this.render, this);
            }
            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = squid_api.template.squid_api_kpi_widget;
            }
            if (options.format) {
                this.format = options.format;
            } else {
                // default number formatter
                if (d3) {
                    this.format = d3.format(",.1f");
                } else {
                    this.format = function(f){
                        return f;
                    };
                }
            }
        },

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },

        render : function() {
            var jsonData, results, values;
            if (this.model.isDone()) {
                jsonData = {};
                jsonData.done = true;
                results = this.model.get("results");
                if (results) {
                    if (results.rows.length == 1) {
                        values = results.rows[0].v;
                        if (values.length == 2) {
                            jsonData.value = this.format((values[1] / values[0]) * 100);
                            jsonData.unit = "%";
                            jsonData.name = results.cols[1].lname;
                        }
                    } 
                }
            }
            var tableContent = this.$el;
            var tableHTML = this.template(jsonData);
            tableContent.html(tableHTML);
            return this;
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.MetricSelectorView = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_metric_selector_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        template : null,
        metrics : null,
        metricIdList : null,
        metricIndex: null,

        initialize: function(options) {
            var me = this;

            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }

            if (options.metricIdList) {
                this.metricIdList = options.metricIdList;
            }

            if (options.metricIndex !== null) {
                this.metricIndex = options.metricIndex;
            }

            this.model.on('change', function() {
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

                for (i = 0; i < oid.length; i++) {
                    selected.push($(oid[i]).val());
                }

                var analysis = null;
                if (this.model.get("analyses")) {
                    // If instance of array
                    if (this.model.get("analyses")[0]) {
                        analysis = this.model.get("analyses")[0];
                    }
                } else {
                    analysis = this.model;
                }

                if (analysis) {
                    if (this.metricIndex) {
                        if (selected.length > 0) {
                            analysis.setMetricId(selected[0], this.metricIndex);
                        }
                    } else {
                        analysis.setMetricIds(selected);
                    }
                }
            }
        },

        render: function() {
            var isMultiple = true;

            if (this.metricIndex !== null) {
                isMultiple = false;
            }

            var jsonData = {"selAvailable" : true, "options" : [{"label" : "", "value" : "", "selected" : false}], "multiple" : isMultiple};
            
            // iterate through all domains metrics
            var domain = squid_api.utils.find(squid_api.model.project.get("domains"), "oid", squid_api.domainId);
            if (domain) {
                var metrics = domain.metrics;
                if (metrics) {
                    for (var idx=0; idx<metrics.length; idx++) {
                        var metric = metrics[idx];
                        // check if selected
                        var selected = this.isSelected(metric);
                        
                        // add to the list
                        var option = {"label" : metric.name, "value" : metric.oid, "selected" : selected};
                        jsonData.options.push(option);
                    }
                }
            }

            var html = this.template(jsonData);
            this.$el.html(html);
            this.$el.show();

            // Initialize plugin
            var selector = this.$el.find("select");
            if (isMultiple) {
                selector.multiselect();
            }

            return this;
        },
        
        isSelected : function(item) {
            var selected = false;

            /* See if we can obtain the metrics.
            If not check for a multi analysis array */

            var metrics = this.model.get("metrics");

            if (!metrics && (this.model.get("analyses"))) {
                metrics = this.model.get("analyses")[0].get("metrics");
            }

            if (metrics) {
                for (var j=0; j<metrics.length; j++) {
                    if (item.oid == metrics[j].metricId) {
                        selected = true;
                    }
                }
            }
            return selected;
        }

    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.ProjectSelector = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_project_selector_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        template : null,

        initialize: function(options) {
            var me = this;

            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }

            // init the projects
            this.model.on("reset sync", this.render, this);
        },

        events: {
            "change .sq-select": function(event) {
                var selectedOid = event.target.value;
                // update the current project
                squid_api.setProjectId(selectedOid);
            }
        },

        render: function() {
            // display

            var project, jsonData = {"selAvailable" : true, "options" : [{"label" : "Select Project", "value" : "", "selected" : false}]};

            for (var i=0; i<this.model.size(); i++) {
                project = this.model.at(i);
                if (project) {
                    var selected = false;
                    if (project.get("oid") == squid_api.projectId) {
                        selected = true;
                    }

                    var displayed = true;

                    // do not display projects with no domains
                    if (!project.get("domains")) {
                        displayed = false;
                    }

                    if (displayed) {
                        var option = {"label" : project.get("name"), "value" : project.get("oid"), "selected" : selected};
                        jsonData.options.push(option);
                    }
                }
            }

            var html = this.template(jsonData);
            this.$el.html(html);
            this.$el.show();

            // Initialize plugin
            this.$el.find("select");

            return this;
        }

    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.TimeSeriesView = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_timeseries_widget);
}(this, function (Backbone, squid_api) {

    View = Backbone.View.extend({

        template : null,
        dataToDisplay : 10000,
        format : null,

        initialize : function(options) {
            
            if (this.model) {
                this.listenTo(this.model, 'change:status', this.update);
                this.listenTo(this.model, 'change:error', this.render);
            }

            if (options.dataToDisplay) {
                this.dataToDisplay = options.dataToDisplay;
            }

            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = squid_api.template.squid_api_timeseries_widget;
            }

            if (options.format) {
                this.format = options.format;
            }

            // Resize
            $(window).on("resize", _.bind(this.resize(),this));
        },

        resize : function() {
            var resizing = true;
            return function() {
                if (this.resizing) {
                    window.clearTimeout(resizing);
                }
                this.resizing = window.setTimeout(_.bind(this.render,this), 100);
            };
        },

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },
        
        /**
         * see : http://stackoverflow.com/questions/10966440/recreating-a-removed-view-in-backbone-js
         */
        remove: function() {
            this.undelegateEvents();
            this.$el.empty();
            this.stopListening();
            $(window).off("resize");
            return this;
        },

        update : function() {

            if (!this.model.isDone()) {
                // running
                if (this.model.get("status") == "RUNNING") {
                    $(".sq-loading").show();
                }
            } else if (this.model.get("error")) {
                // error
                $(".sq-loading").hide();
            }

            this.render();
        },

        seriesColorAssignment : function(serie) {
            var p = d3.scale.category10();
            var color=p.range()[serie];
            return color;
        },

        seriesDataValues : function(dateIndex, metricIndex, modelData) {
            var series = [];
            var value, date;
            var serie;
            var currentSerieName = null;
            var serieName = "Date";
            
            for (var i=0; (i<modelData.length); i++) {
                value = modelData[i].v;
                date = moment(value[dateIndex]);
                
                // deal with series
                if (dateIndex>0) {
                    serieName = value[dateIndex-1];
                }
                if ((currentSerieName === null) || (serieName != currentSerieName)) {
                    currentSerieName = serieName;
                    // create a new serie
                    serie = {};
                    serie.color = this.seriesColorAssignment(series.length);
                    serie.name = currentSerieName;
                    serie.data = [];
                    series.push(serie);
                }
                
                if (date.isValid()) {
                    var object = {};
                    // Convert date value into unix
                    object.x = date.unix();
                    object.y = parseFloat(value[metricIndex]);
                    serie.data.push(object);
                } else {
                    console.debug("Invalid date : "+value[dateIndex]);
                }
            }
            
            // sort series data
            for (var j=0; j<series.length; j++) {
                series[j].data = this.sortDateValues(series[j].data);
            }
            return series;
        },

        getData: function() {
            var data, analysis;

            analysis = this.model;
            // Use the first analyses array
            if (analysis.get("analyses")) {
                analysis = analysis.get("analyses")[0];
            }

            data = analysis.toJSON();
            data.done = this.model.isDone();

            return data;
        },

        sortDateValues : function(dates) {
            dates.sort(function(a,b){
                return (a.x - b.x);
            });
            return dates;
        },

        render : function() {

            var me = this;

            var data = this.getData();

            if (data.done) {
                
                // Print Template
                this.$el.html(this.template());
                
                var dateColumnIndex=0; 
                while (data.results.cols[dateColumnIndex].dataType != "DATE") {
                    dateColumnIndex++;
                }

                // Time Series [Series Data]
                var series = this.seriesDataValues(dateColumnIndex, dateColumnIndex+1, data.results.rows);

                if (series.length>0 && (series[0].data.length>0)) {
                    var tempWidth = $(window).width() - 50;

                    // Time Series Chart
                    var graph = new Rickshaw.Graph({
                        element: document.getElementById("chart"),
                        width: tempWidth,
                        height: 400,
                        renderer: 'line',
                        series: series
                    });

                    graph.render();

                    var hoverDetail = new Rickshaw.Graph.HoverDetail( {
                        graph: graph,
                        xFormatter: function(x) { return "Date: " + moment.utc(x, 'X').format('YYYY-MM-DD');},
                        yFormatter: function(y) { return Math.floor(y); }
                    });

                    var legend = new Rickshaw.Graph.Legend( {
                        graph: graph,
                        element: document.getElementById('legend')
                    });

                    var xAxis = new Rickshaw.Graph.Axis.Time( {
                        graph: graph
                    });

                    var yAxis = new Rickshaw.Graph.Axis.Y( {
                        graph: graph
                    });

                    var slider = new Rickshaw.Graph.RangeSlider({
                        graph: graph,
                        element: document.querySelector('#slider')
                    });

                    var offsetForm = document.getElementById('offset_form');

                    // Change chart type on button change
                    offsetForm.addEventListener('change', function(e) {
                        var offsetMode = e.target.value;

                        if (offsetMode == 'lines') {
                            graph.setRenderer('line');
                            graph.offset = 'zero';
                        } else if (offsetMode == 'stack') {
                            graph.setRenderer('stack');
                            graph.offset = offsetMode;
                        } else if (offsetMode == 'bar') {
                            graph.setRenderer('bar');
                            graph.offset = offsetMode;
                        }

                        graph.render();

                    }, false);

                    yAxis.render();
                    xAxis.render();


                } else {
                    this.$el.html("<div class='bad-data'>Time Series incompatible, please choose another</span>");
                }
                $(".sq-loading").hide();
                return this;
            }
        }
    });

    return View;
}));
