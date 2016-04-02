const Twitter = require('twitter')
const config = require('./config.json')

const client = new Twitter({
	consumer_key: config.consumer_key,
	consumer_secret: config.consumer_secret,
	access_token_key: config.access_token_key,
	access_token_secret: config.access_token_secret
})

function getTweets(callback) {
	var tweetsConcat = ''
	client.get('statuses/user_timeline',
		function(error, tweets, response) {
			if(error) throw error
			tweets.forEach(function(tweet, index, array){
				tweetsConcat += tweet.text+' '
			})
			tweetsConcat = tweetsConcat.replace(/@[a-z0-9_-]+:*/gi,'')
			tweetsConcat = tweetsConcat.replace(/RT/g,'')
			tweetsConcat = tweetsConcat.replace(/http[.*]+\w/gi,'')
			tweetsConcat = tweetsConcat.replace(/[^a-zA-Z]/gi,' ')
			callback( tweetsConcat )
		}
	)
}

exports.getTweets = getTweets
