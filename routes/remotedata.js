
/*
 * GET users listing.
 */

exports.list = function(req, res){
	var arr = {'shop':'kenny','id':1};
	res.send(JSON.stringify(arr));
};

exports.getscore = function(req, res){
	var arr = {'1233':10,'1244':20};
	var shop_id = req.query['shop'];
	var jsoncallback = req.query['jsoncallback'];
	console.log(shop_id);
	if(shop_id in arr) {
		//res.send(JSON.stringify(arr[shop_id]));
		var score_var = {"score":arr[shop_id]};
		res.send(jsoncallback+'('+JSON.stringify(score_var)+');');
	}
	else
		res.send(jsoncallback+'('+'{"score":NULL}'+');');

};