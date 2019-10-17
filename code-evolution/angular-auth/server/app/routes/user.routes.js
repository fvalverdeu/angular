module.exports = (app) => {
    const user = require('../controllers/user.controller.js');

    // Registrar nuevo user.
    app.post('/users', user.create);

    // Obtener users.
    app.get('/users', user.findAll);

    // Obtener user por email.
    app.get('/users/:email', user.findOne);

    // Actualizar user por email.
    app.put('/users/:email', user.update);

    // Eliminar user por email.
    app.delete('/users/:email', user.delete);

    // Restablecer contraseña.
    app.post('/users/getpassword', user.getPassword);
    
    // Restablecer contraseña.
    app.post('/users/login', user.login);
}