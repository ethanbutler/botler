var http = require('http')
var fs = require('fs')
var Markov = require('markov')

http.createServer(function(req, res){
  fs.readFile('./ethan.txt', 'utf8', function(err, data){
    if(err) throw err
    var markov = new Markov(1)
    markov.seed(data, function(){
      var key = markov.pick()
      var text = markov.fill(key,10).join(' ')
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(text)
    })
  })
}).listen(process.env.PORT || 3000)
