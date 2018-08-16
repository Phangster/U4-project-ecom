const userController = require('./controllers/userController');
const itemController = require('./controllers/itemController');

module.exports = (app) => {

    app.post('/api/submit-new-user', userController.postNewUser);

    app.post('/api/submit-login', userController.postUserLogin);

    app.post('/api/login-check', userController.loginCheck);

    app.get('/api/get-items', itemController.getItems);


}