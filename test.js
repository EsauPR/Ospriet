var Twitter = require('twitter');

var client = new Twitter({
	consumer_key: 'uymIadowXuMHniuIoQB1hMYJs',
	consumer_secret: '8JksFf4kLVY44DaIZRhZdcE6v4nNthQEM1JlTahpggzSOkw1zw',
	access_token_key: '708098440283049984-HwlnrcrWnp2psIrDHy334kXqG9S00aW',
	access_token_secret: 'jQVpXRyjepoWyF8cydFUV6WjNtItZGgfzAWK59bHMqUXl'
});

var params = {screen_name: 'EsauOpr'};
const params = {
	user_id: '708098440283049984',
	count: 200, 
};

client.get('statuses/user_timeline', params, function(error, tweets, response) {
	if (!error) {
		console.log(tweets);
	}
});