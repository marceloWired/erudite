const { Router } = require('express');
const routes = Router();
const userController = require('./controllers/userController')

routes.get('/', (req, res) => {
    return res.json({ "message": "Hello world" })
})

routes.post('/register', userController.store);

module.exports = routes;