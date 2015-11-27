Router.route('/', {
	name: 'home',
	template: 'home'
});

Router.route('/setup', {
	name: 'setup',
	template: 'setup'
});

Router.route('/accelerometer', {
	name: 'accelerometer',
	template: 'accelerometer'
});

Router.route('/camera', {
	name: 'camera',
	template: 'camera'
});

Router.route('/geolocation', {
	name: 'geolocation',
	template: 'geolocation'
});	

Router.route('/about', {
	name: 'about',
	template: 'about'
});

Router.route('/viewPhoto', {
	name: 'viewPhoto',
	template: 'viewPhoto'
});

Router.route('/finishedApp', {
	name: 'finishedApp',
	template: 'finishedApp'
});