/*Created By Shubhangi on 25th June, 2016
* Desc: This file is responsible for showing the left Pane*/
define(['backbone','underscore','jquery',
        'text!../../templates/LeftPane.html',
        '../../collections/LeftPaneCollection',
        '../views/RightTopViewInitializer',
        "../views/RightBottomViewInitializer"],
    function(Backbone,_,$,LeftPane,LeftPaneCollection,RightTopViewInitializer,RightBottomViewInitializer){
   var LeftPaneView = Backbone.View.extend({
       template1: _.template('<span style="color: #2a6496">Element</span><span style="float:right;">Clear<i class="fa fa-times clear" style="color: red" aria-hidden="true"></i></span><br> <input id="filter" type="text" placeholder="Search" style="width: 200px;margin: 6px;"><br>'),
       template2: _.template(LeftPane),

       events : {
            "click .select-element" : "selectElement",
            "keyup" : "filterFunction",
            "click .clear" : "clearAll"
       },

       initialize: function(){
           var self = this;
           this.counter1 = 0;
           this.counter2 = 0;
           this.$el.html(this.template1);
           $.ajax({
               url:'/data/',
               method:'GET',
               success:function(data) {
                   self.data = data;
                   self.collection = new LeftPaneCollection(self.data);
                   self.render();
               },
               error:function(error){
                   console.log(error.responseText);
               }
           });
       },

       render: function(){
           var self = this;
           this.$el.append('<div id="outer-div"></div>');
           this.collection.forEach(function(element){
              $('#outer-div').append(self.template2({"ele":element}));
           });
       },

       filterFunction : function(){
           var name = event.target.value;
           if(name != ''){
               var model = this.collection.where({"name" : name});
               $('#outer-div').html('');
               $('#outer-div').append(this.template2({"ele":model[0]}));
           }
           else{
               this.render();
           }
       },

       selectElement : function(){
           var model;
           var name = $(event.target).attr('value');
           model = this.collection.where({"name":name})[0];
           if(event.target.checked){
               model.attributes.count = 1;

               $('#count1-'+model.id)[0].textContent = '(' + 1 + ')';

               if(!this.rightTopViewInitializer || this.counter1==0){
                   this.counter1 = 1;
                   this.rightTopViewInitializer = new RightTopViewInitializer({model:model, el:"#right-pane"});
                   this.rightTopViewInitializer.collection.add(model);
               }
               else{
                   this.rightTopViewInitializer.collection.add(model);
               }

               if(!this.rightBottomViewInitializer || this.counter2 == 0){
                   this.counter2 = 1;
                   this.rightBottomViewInitializer = new RightBottomViewInitializer({model:model, el:"#right-bottom-view"});
                   this.rightBottomViewInitializer.collection.add(model);
               }

               else
                   this.rightBottomViewInitializer.collection.add(model);
           }
           else{
               $('#count1-'+model.id)[0].textContent = '(' + 0 + ')';
               model.trigger('destroy');
               this.counter1 = 0;
               this.counter2 = 0;
           }
       },

       clearAll : function(){
           this.counter1 = 0;
           this.counter2 = 0;
           this.collection.forEach(function(ele){
               $('#count1-'+ele.id)[0].textContent = '(' + 0 + ')';
               $('.select-element')[ele.id-1].checked = false;
               ele.trigger('destroy');
           });
       }
   });
    return LeftPaneView;
});