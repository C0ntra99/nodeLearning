var http = require('http');
var formidable = require('formidable');
var fs = require('fs');


http.createServer(function (req, res) {
    if (req.url == '/upload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            var oldPath = files.filetoupload.path;
            var newPath = files.filetoupload.name;
            fs.rename(oldPath, newPath, function(err) {
                if (err) throw err;
                res.write("File Uploaded");
                res.end();
            });
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="upload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);