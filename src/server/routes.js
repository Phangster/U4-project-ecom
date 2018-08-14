const userLogin = require('./controllers/userLogin')

module.exports = (app) => {

    app.post('/api/submit-new-user', userLogin.postNewUser);

    // app.post('/api/submit-login', userLogin.postUserLogin);

}