const express = require('express');
const app = express();
const session  = require('express-session');

//connect DB
require('./app/config/config.db');

//view engine
app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public')); //to make pictures in public folder dir static



const isLoggedIn = require('./app/middleware/middleware.isLoggedIn'); //For Middleware session

app.use(require('./app/routes/route.client')); 

app.use(isLoggedIn); //using middleware session here to check login condition before other pages can be visited

//app.use('/home', require('./app/routes/route.client')) //not sure if this line is correct for /home page

app.use('/book', require('./app/routes/route.book'));
app.use('/category', require('./app/routes/route.category'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

