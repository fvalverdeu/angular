module.exports = (app) => {
    const special = require('../controllers/specialController');
    const jwt = require('jsonwebtoken');
    
    //middleware
    function verifyToken (req, res, next) {
        if(!req.headers.authorization) {
            return res.status(401).send('Unathorized request');
        }
        let token = req.headers.authorization.split(' ')[1];
        if (token === 'null') {
            return res.status(401).send('Unathorized request');
        }
        let payload = jwt.verify(token, 'secretKey');
        if(!payload) {
            return res.status(401).send('Unathorized request');
        }
        req.userId = payload.subject;
        next();
    }

    app.get('/specials', verifyToken, special.findAll);
}