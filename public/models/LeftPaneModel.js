/*@author:Shubhangi Asgola
 * @Created On:25 May, 2016
 * @Description:User Model*/
define(['backbone'], function(Backbone){
    var LeftPaneModel = Backbone.Model.extend({
        defaults : {
            "name" : "",
            "count" : 0
        },

        destroy : function(){
            console.log('destroy model and remove view');
        }
    });
    return LeftPaneModel;
});