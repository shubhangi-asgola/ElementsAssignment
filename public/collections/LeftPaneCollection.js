/*@author:Shubhangi Asgola
 * @Created On:25 June, 2016 */
define(['backbone','../models/LeftPaneModel'],
    function(Backbone, LeftPaneModel){
        var UserCollection = Backbone.Collection.extend({
            model : LeftPaneModel
        });
    return UserCollection;
});