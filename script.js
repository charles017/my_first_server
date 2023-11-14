let http = require("http")                                          // load / import 'http' and store functionality in variable http


let ourApp = http.createServer(function(req, res){                  // node's http object is equivalent to browser's document object
res.end("Hello!, and welcome to our website.")
  })              
ourApp.listen(3000)                                                 // listen to incoming request - equivalent to addEventListener
