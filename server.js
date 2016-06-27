/**
 * Created by Shubhangi on 23/06/16.
 */
var express=require('express'),
    http = require('http');
var app=express();

app.set('port', process.env.PORT || 5001);

app.use('/',express.static('public'));
var data=require('./data');
app.get('/data/',function(req,res){
    res.status(200).send(data);
});

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
console.log(app.get('port'));
