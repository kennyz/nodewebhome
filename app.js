
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var remotedata = require('./routes/remotedata');

var wechat = require('wechat');
var config = {
  token: 'TOKEN',
  appid: 'XXXX',
  encodingAESKey: 'XXXXX'
};
var local_config = require('./local_config');
var weixin = require('./routes/weixin');

var http = require('http');
var path = require('path');

var app = express();

var app_title = "Kongwu";

// all environments
app.set('port', process.env.PORT || 80);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//app.use(express.logger('dev'));
//app.use(express.bodyParser());
//app.use(express.methodOverride());
//app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.use(express.query());
app.use('/wechat22', weixin);

app.use('/wechat', wechat(local_config, function (req, res, next) {
  var message = req.weixin;
  if (message.FromUserName === 'diaosi') {

    res.reply('hehe');
  }
  else {
    res.reply([
      {
        title: '你来我家接我吧',
        description: '这是女神与高富帅之间的对话',
        picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
        url: 'http://nodeapi.cloudfoundry.com/'
      }
    ]);
  }

}));


app.get('/', routes.index);
app.get('/users', user.list);
//app.get('/weixin', weixin.list);
app.get('/remotedata/getscore',remotedata.getscore);
app.get('/remotedata',remotedata.list);


var about = require('./routes/about');
app.get('/about', about.about);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
