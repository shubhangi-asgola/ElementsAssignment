/**
 * Created by Shubhangi on 25/06/16.
 */
define(['backbone','underscore','jquery',
        'text!../../templates/RightTopPane.html'],
    function(Backbone,_,$,RightTopPane){
        var RightTopView = Backbone.View.extend({
            template : _.template(RightTopPane),

            el : '<div style="display: inline-block; margin: 5px;"></div>',

            events : {
                "click .remove" : "removeView"
            },

            initialize : function(a) {
                this.parent = a.parent;
                this.model = a.model;
                this.model.on('destroy',this.remove, this);
            },

            render:function(model){
                this.$el.append(this.template({"data":this.model}));
                return this.$el;
            },

            removeView : function(){
                this.model.trigger('destroy');
            }
        });
    return RightTopView;
    });