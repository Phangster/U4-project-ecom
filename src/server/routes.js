const userController = require('./controllers/userController')

module.exports = (app) => {

    app.post('/api/submit-new-user', userController.postNewUser);

    app.post('/api/submit-login', userController.postUserLogin);

    app.post('/api/login-check', userController.loginCheck);

}