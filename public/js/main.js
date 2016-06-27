/*@author:Shubhangi Asgola
 * @Created On:23 June, 2016
 * @Description:This is the first file loaded from index.html
 * It requires all the required files  and initialized app.js
 * which in turn initializes router.js*/
requirejs.config({
    paths: {
        'text' : '../assets/libs/text',
        'css' : '../styles/require-css',
        'jquery' : '../assets/libs/jquery.min',
        'underscore' : '../assets/libs/underscore-min',
        'backbone' : '../assets/libs/backbone'
    },
    shim : {
        'backbone' : {
            deps : ['underscore', 'jquery'],
            exports : 'Backbone'
        },
        'underscore' : {
            exports : '_'
        },
        'text' : {
            deps : ['underscore']
        }
    }
});

require([
    'app',
    'css!./../styles/style.css',
    'css!../assets/font-awesome/css/font-awesome.min.css',
    'css!../styles/bootstrap.min.css'
], function(App) {
    App.initialize();
});