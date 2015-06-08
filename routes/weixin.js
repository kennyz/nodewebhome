
var express = require('express');
var router = express.Router();

var wechat = require('wechat');
var config = {
  token: 'kongwunettoken',
  appid: 'wxf0cfc7b2fff37378',
  encodingAESKey: 'JJWD7ZHAl28PoF7GvE9WqBzw6bJkbScRaSTOAcMmgvB'
};


router.use(function (req, res, next) {
  next();
});

router.all('/wechat', wechat(config, function (req, res, next) {

  var message = req.weixin;
  if (message.FromUserName === 'diaosi') {

    res.reply('hehe');
  }
  else {
    res.reply([
      {
        title: '测试标题',
        description: '描述',
        picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
        url: 'http://nodeapi.cloudfoundry.com/'
      }
    ]);
  }

}));

module.exports = router;
