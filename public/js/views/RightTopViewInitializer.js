/**
 * Created by Shubhangi on 25/06/16.
 */
define(['backbone','underscore','jquery',
        '../../collections/LeftPaneCollection',
        '../views/RightTopView',
        'text!../../templates/RightTopPane.html'],
    function(Backbone,_,$,LeftPaneCollection,RightTopView,RightTopPane){
        var RightTopViewInitializer = Backbone.View.extend({

            template : _.template('<div id="right-top" style="margin-bottom: 15px; padding: 10px; background-color: #8cbcae"></div><div id="right-bottom-view"></div>'),

            el : '#right-pane',

            initialize : function() {
                this.collection = new LeftPaneCollection();
                this.collection.on('add', this.render, this);
                this.$el.html(this.template());
            },

            render:function(model){
                this.model = model;
                var rightTopView = new RightTopView({model:model, parent:this});
                $('#right-top').append(rightTopView.render());
            }
        });
        return RightTopViewInitializer;
    });