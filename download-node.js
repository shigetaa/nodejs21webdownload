webdownload(
	"http://localhost/",
	"localhost.html",
	function () { console.log("Download OK"); }
);

/**
 * ダウンロード関数
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