/**
 * Created by Shubhangi on 25/06/16.
 */
define(['underscore','backbone','jquery',
    '../../collections/LeftPaneCollection',
    '../views/RightBottomView',
    'text!../../templates/RightBottomPane.html'],
    function(_,Backbone,$,LeftPaneCollection,RightBottomView,RightBottomPane){
    var RightBottomViewInitializer = Backbone.View.extend({

        template : _.template('<div style="margin-bottom:15px; padding:10px; background-color: #269abc;"><span style="padding: 0 145px 0 15px;width: 200px;">What is Added</span><span id="col2">HTML Element</span></div>'),

        initialize : function(){
            var self = this;
            this.collection = new LeftPaneCollection();
            this.collection.on('add',this.render,this);
            this.$el.html(this.template());
        },

        render : function(model){
            this.model = model;
            var rightBottomView = new RightBottomView({model:model,parent:this});
            this.$el.append(rightBottomView.render());
        }
    });
    return RightBottomViewInitializer;
});