# Ethan Botler :computer:

This is a simple Node application to generate Markov chain generated approximations of how I talk.

There are two branches: `twitter` and `cheating`.

### Twitter

This pulls in my recent tweets to use as the seed for the Markov chain. Right now, it's very shitty.

### Cheating

For the seed, we're usin' a text file that contains things I – in an admirable act of self-awareness – wrote myself.

## Response

Approximations are returned a JSON object with just a `text` property – this is for use in my company's Slack channel, where the accompanying bot has a shittily Photoshopped version of me with a T-800 eye.

#### Why is `node_modules` being tracked?

Because I'm also deploying this to Heroku and I'm too scared to add it to the `.gitignore.`

I'm bad at programming.
