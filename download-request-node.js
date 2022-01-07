var request = require('request');
var fs = require('fs');
// ダウンロード元URL
var url = "http://localhost/";
// 保存先パス
var savepath = "localhost.html";
// ダウンロード
request(url).pipe(fs.createWriteStream(savepath));