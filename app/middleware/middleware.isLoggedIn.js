
const isLoggedIn = (req, res) => {
    const { name, email, password } = req.body;

    console.log(`LOGIN DETAILS: Name: ${name}, Email: ${email}, PW: ${password}`)

    if(name == 'test' && email == 'test@test.com' && password == 'password') {       
        console.log("SUCCESSFUL LOGIN")
        //next();
        res.redirect('/home');

    } else{
        console.log("Wrong CREDENTIALS, Enter again!")
        res.redirect('/');
    }
}

module.exports = isLoggedIn;
