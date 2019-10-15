if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(function() {
		console.log('Registration worked, Youre good to go!');
	})
	.catch(function() {
		console.log('Registration failed!, WOMP WOMP');
	});
}
