/*@author:Shubhangi Asgola
 * @Created On:23 June, 2016
 * @Description:This file initializes router.js*/
define([
    'jquery',
    'underscore',
    'backbone',
    'router'
], function($, _, Backbone, Router) {
    var initialize = function() {
        Router.initialize();
    };
    return {
        initialize: initialize
    };
});