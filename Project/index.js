// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// }).listen(8080);

// console.log("hello world");

// const http = require("http");
// const fs = require("fs");

// const port = 8080;




//Solution without .html at the end
// const pages = {
//   "/": "index.html",
//   "/about": "about.html",
//   "/contact-me": "contact-me.html",
// };

// const server = http.createServer(function (req, res) {
//   const url = req.url;
//   const page = pages[url] || "404.html";
//   fs.readFile(page, (err, data) => {
//     if (err) {
//       res.writeHead(404, { "Content-Type": "text/html" });
//       return res.end("404 Not Found");
//     }
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(data);
//     return res.end();
//   });
// });
// server.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

//W3School Solution must use .html at end
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
