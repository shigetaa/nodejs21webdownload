# Node.js WEBページをダウンロード
以下プログラム download-node.js を作成して
簡易的なダウンロードができます。
```javascript
// ダウンロード元URL
var url = "http://localhost/";
//保存先パス
var savepath = "localhost.html";

var http = require('http');
var fs = require('fs');
var outfile = fs.createWriteStream(savepath);

//非同期でURLからファイルをダウンロード
http.get(url, function (res) {
	res.pipe(outfile);
	res.on('end', function () {
		outfile.close();
		console.log('OK');
	})
});
```
以下のコマンドを実行
```bash
$ node download-node.js
```