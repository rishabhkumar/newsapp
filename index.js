const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const hb = require('express-handlebars');
const path = require('path');


// Setting view engine as Handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hb({defaultLayout: 'main', layoutsDir: path.join(__dirname, 'views', 'layouts')}));
app.set('view engine', 'handlebars');

require('./api/routes')(app);

app.listen(port, (req, res) => {
	console.log(`Server listening. . .`);
})

