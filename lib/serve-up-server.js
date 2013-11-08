var http = require('http'),
    fs = require('fs')

module.exports.createServer = function(options) {
  var httpServer = http.createServer(function(req, res) {
    
    var filePath = options.root + req.url

    if(fs.existsSync(filePath)) {
      fs.createReadStream(filePath).pipe(res)
    } else if(req.url.charAt(req.url.length - 1) === '/' && fs.existsSync(filePath + req.url + options.defaultPage)) {
      fs.createReadStream(filePath + options.defaultPage).pipe(res) 
    } else if(req.url.charAt(req.url.length -1) === '/' && options.listDir) {
    } else {
      // display 404
    }

  }).listen(options.port)
}

