const path = require('path');
const g = require(path.join('..', 'config.js'));


function routes(app) {

	

	//Setting routes
	app.get('/', (req, res) => {
		// console.log(g.title);
		res.render('home', g);
	})


}


module.exports = routes;


