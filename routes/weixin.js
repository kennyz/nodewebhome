

var wechat = require('wechat');
var config = {
  token: 'kongwunettoken',
  appid: 'wxf0cfc7b2fff37378',
  encodingAESKey: 'JJWD7ZHAl28PoF7GvE9WqBzw6bJkbScRaSTOAcMmgvB'
};


exports.list = function(req, res){
        res.reply({
                         content: 'text object',
                         type: 'text'
                    });
  	//res.send("respond with a weixin resource");
};
