var http = require('http')
var Tweets = require('./gettweets')
var Markov = require('markov')

http.createServer(function(req, res){
  Tweets.getTweets(function(tweets){
    var markov = Markov(3)
    markov.seed(tweets, function(){
      var key = markov.pick()
      var text = markov.fill(key,8).join(' ')
      res.writeHead(200, {'Content-Type': 'text/plain'})
      res.end(text)
    })
  })
}).listen(process.env.PORT || 3000)
