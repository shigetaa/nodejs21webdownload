# Node.js WEBページをダウンロード
以下プログラム download-node.js を作成して
簡易的なダウンロードができます。
```javascript
webdownload(
	"http://localhost/",
	"localhost.html",
	function () { console.log("Download OK"); }
);

/**
 * 
 * @param {String} url ダウンロード元URL
 * @param {String} savepath 保存先パス
 * @param {Function} callback ダウンロード完了後に実行する処理関数
 */
function webdownload(url, savepath, callback) {
	var http = require('http');
	var fs = require('fs');
	var outfile = fs.createWriteStream(savepath);
	//非同期でURLからファイルをダウンロード
	http.get(url, function (res) {
		res.pipe(outfile);
		res.on('end', function () {
			outfile.close();
			callback();
		});
	});
}
```
以下のコマンドを実行するとダウンロードできます。
```bash
$ node download-node.js
```
## request モジュールを使用してみる
上記の様に関数を作成しなくても、便利なモジュールがありました。
request モジュールです、これを使うと、より簡潔にダウンロード処理を記述する事ができます。
npm を使って、request モジュールをインストールしてみます。
```bash
$ npm i request
```
インストールができたら download-request-node.js ファイルを作成してみます。
```javascript
var request = require('request');
var fs = require('fs');
// ダウンロード元URL
var url = "http://localhost/";
// 保存先パス
var savepath = "localhost.html";
// ダウンロード
request(url).pipe(fs.createWriteStream(savepath));
```
以下のコマンドを実行するとダウンロードできます。
```bash
$ node download-request-node.js
```