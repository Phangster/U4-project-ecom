const userController = require('./controllers/userController');
const itemController = require('./controllers/itemController');
const userItemController = require('./controllers/UserItemController');


module.exports = (app) => {

    app.post('/api/submit-new-user', userController.postNewUser);

    app.post('/api/submit-login', userController.postUserLogin);

    app.post('/api/login-check', userController.loginCheck);

    app.get('/api/get-items', itemController.getItems);

    app.post('/api/adding-to-cart', userItemController.addingToCart);

    app.get('/api/view-cart-items', userItemController.viewCartItems);


}