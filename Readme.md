iBook Store

You will find here, how the website should work. 

Basically, I'm trying the specific user (after matching condition) after login be able to access other tabs

127.0.0.1:3000/ => Welcome page with login form
 - No other pages from Nav bar should be accessible
 - Author tab - haven't created so IGNORE it, also, register for new user

After successful login, redirect to:
127.0.0.1:3000/home 
 - Home page contains both books and category list
 - If login wrong credentials, redirect to '/'
 - After login should be able to access all tabs

 127.0.0.1:3000/book
 - Book list
 - One issue here: whenever I open book/create or the pop up(alert) to create new book, but cancel the creation of new book, in book list, it creates empty book (you will just see the picture without book title) - same for category creation 

 127.0.0.1:3000/category
 - Category list

------------------------------------------------------------------------------------------

Ignore user files. This is for later use. 
- model.user.js
- controller.user.js
- route.user.js
