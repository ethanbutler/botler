var http = require('http')
var Tweets = require('./gettweets')
var Markov = require('markov')

http.createServer(function(req, res){
  Tweets.getTweets(function(tweets){
    var markov = Markov(1)
    markov.seed(tweets, function(){
      var key = m.pick()
      var text = m.fill(key,12).join(' ')
      res.writeHead(200, {'Content-Type': 'text/plain'})
      res.end(text)
    })
  })
})
