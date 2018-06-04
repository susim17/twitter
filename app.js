var Twitter = require('twitter');
var client = new Twitter({
  //consumer_key: process.env.TWITTER_CONSUMER_KEY,
  //consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  //access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  //access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,

  consumer_key:'RP57gxOUiDeTq0JSAPWf4oQ9n',
  consumer_secret:'SYScTBa0C1eUz0NrGn2YkkAFhvOhOwvRCbcidVOQKgOHpWnLpI',
  access_token_key:'1002004607722192903-Cd271PhLxtMxwZGtix8CGiCaJpGvRF',
  access_token_secret:'hFXN570qoTfj38mnuW8elHqBKF3pOpviK6r10uasAGk6J',
});

// Load your image
var data = require('fs').readFileSync('./images/martini.jpg');

client.post('media/upload', {media: data}, function(error, media, response) {
  if (!error) {
    var status = {
      status: 'I am a tweet',
      media_ids: media.media_id_string // Pass the media id string
    }
    client.post('statuses/update', status, function(error, tweet, response) {
      if (!error) {
        console.log(tweet);
      }
    });
  }
});
