/**
 * Created by Shubhangi on 25/06/16.
 */
define(['underscore','backbone','jquery',
        'text!../../templates/RightBottomPane.html'],
    function(_,Backbone,$,RightBottomPane){
    var RightBottomView = Backbone.View.extend({

        template :_.template(RightBottomPane),
        el : '<div style="padding: 10px">',

        events : {
            "click .plus" : "addElement",
            "click .minus" : "subElement"
        },

        initialize : function(a){
            var self = this;
            this.parent = a.parent;
            this.model = a.model;
            this.model.on('destroy',function(){
                self.remove();
            },this);
        },

        render : function(model){
            this.$el.append(this.template({"element":this.model}));
            return this.$el;
        },

        addElement : function(){
            var count = this.model.attributes.count++ + 1;
            $('#count1-'+this.model.id)[0].textContent = '(' + count + ')';
            $('#count2-'+this.model.id)[0].textContent = '(' + count + ')';
            this.model.attributes.count = this.model.attributes.count++;
            this.parent.collection.remove(this.model);
            this.parent.collection.add(this.model);
        },

        subElement : function(){
            var count = this.model.attributes.count-- - 1;
            $('#count1-'+this.model.id)[0].textContent = '(' + count + ')';
            $('#count2-'+this.model.id)[0].textContent = '(' + count + ')';
            this.remove();
        }
    });
    return RightBottomView;
});