/*@author:Shubhangi Asgola
 * @Created On:23 June, 2016
 * @Description:This file contains all the routes.*/
define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    var AppRouter = Backbone.Router.extend({

    });

    var initialize = function() {
        var router = new AppRouter();
        require(['views/LeftPaneView'], function(LeftPaneView){
            var leftPaneView = new LeftPaneView({el:'#let-pane'})
        });
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});