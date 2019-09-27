const User = require('../models/user.model.js');
var serverResponse = require('../models/response.model.js');
//const jwt = require('jwt');
const jwt = require('jsonwebtoken');

// Register a new User.
exports.create = (req, res) => {
    // Validate request
    if(!req.body.email) {
        return res.status(400).send({
            message: "User at not empty email."
        });
    }

    // Create a User
    const user = new User({
        email: req.body.email || "User", 
        password: req.body.password,
        name: req.body.name
    });
    

    // Save User in the database
    user.save()
    .then(data => {
        if(data){
            response = new serverResponse(true, "User register succesfull.")
        }
        let payload = { subject: data._id }
        let token = jwt.sign(payload, 'secretKey')
        //res.send(response);
        res.send({token});
    }).catch(err => {
        response = new serverResponse(false, "Error at register user.")
        res.status(500).send(response);
    });
};

// Get all users.
exports.findAll = (req, res) => {
    User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error to get all users."
        })
    })
};

// Find one user by email.
exports.findOne = (req, res) => {
    User.find({ 'email': req.params.email} )
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "Not found user with email " + req.params.email
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Error at find user by email " + req.params.email
            });
        }
        return res.status(500).send({
            message: "Error to get user by email email " + req.params.email
        });
    });
};

// Update user by email.
exports.update = (req, res) => {
    if(!req.body.email) {
        return res.status(400).send({
            message: "El email del user no puede estar vacío."
        });
    }
    
    User.updateOne({ email: req.params.email }, {
        password: req.body.password,
        name: req.body.name
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "No se encuentra el user con email " + req.params.email
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Error: no se encuentra el user con email " + req.params.email
            });
        }
        return res.status(500).send({
            message: "Error al actualizar los datos del user con email " + req.params.email
        });
    });
};

// Eliminar user por email.
exports.delete = (req, res) => {
    User.deleteOne({email: req.params.email}).exec()
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "User not found with id " + req.params.email
            });
        }
        res.send({message: "User deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + req.params.email
            });                
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.email
        });
    });
};

//Recuperar contraseña
exports.getPassword = (req, res) => {
    User.find({ email: req.body.email} )
    .then(user => {
        if(user.length == 0) {
            return res.status(404).send(response = new serverResponse(false, "Not found user with email "  + req.body.email));
        } else {
            res.send(response = new serverResponse(true, "Hemos enviado un email al email indicado para restablecer su contraseña."));
        }
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send(response = new serverResponse(false, "Not found user with email "  + req.body.email));
        }
        return res.status(500).send(response = new serverResponse(false, "Not found user with email "  + req.body.email));
    });
};


// Iniciar sesión.
exports.login = (req, res) => {
    User.find({ email: req.body.email, password: req.body.password } )
    .then(user => {
        if(user.length == 0) {
            console.log(user)
            console.log(req.body)
            return res.status(404).send(response = new serverResponse(false, "El email o la contraseña no son válidos. Intente de nuevo."));
        } else {
            console.log(user)
            console.log(req.body)
            let payload = { subject: user._id }
            let token = jwt.sign(payload, 'secretKey')
            res.send({token});
        }
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send(response = new serverResponse(false, "Error al validar el acceso para el user con email "  + req.body.email));
        }
        return res.status(500).send(response = new serverResponse(false, "Error al validar el acceso para el user con email "  + req.body.email));
    });
};
