const express = require('express');
const app = express();
const session  = require('express-session');

//connect DB
require('./app/config/config.db');

//view engine
app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


//Middleware session
const isLoggedIn = require('./app/middleware/middleware.isLoggedIn');

app.use(require('./app/routes/route.client'));

app.use(isLoggedIn);

//app.use('/home', require('./app/routes/route.client'))

app.use('/book', require('./app/routes/route.book'));
app.use('/category', require('./app/routes/route.category'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

