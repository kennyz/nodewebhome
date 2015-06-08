
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var remotedata = require('./routes/remotedata');

var wechat = require('wechat');
var config = {
  token: 'kongwunettoken',
  appid: 'wxf0cfc7b2fff37378',
  encodingAESKey: 'JJWD7ZHAl28PoF7GvE9WqBzw6bJkbScRaSTOAcMmgvB'
};
var weixin = require('./routes/weixin');

var http = require('http');
var path = require('path');

var app = express();

var app_title = "Kongwu";

// all environments
app.set('port', process.env.PORT || 80);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.use('/wechat', wechat(config, function (req, res, next) {
  // 微信输入信息都在req.weixin上
  //   var message = req.weixin;
  //   
}));

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/weixin', weixin.list);
app.get('/remotedata/getscore',remotedata.getscore);
app.get('/remotedata',remotedata.list);


var about = require('./routes/about');
app.get('/about', about.about);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
