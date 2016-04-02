var http = require('http')
var Tweets = require('./gettweets')
var Markov = require('markov')

http.createServer(function(req, res){
  Tweets.getTweets(function(tweets){
    var markov = Markov(6)
    markov.seed(tweets, function(){
      var key = markov.pick()
      var text = markov.fill(key,2).join(' ')
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify({
        text: text
      }))
    })
  })
}).listen(process.env.PORT || 3000)
