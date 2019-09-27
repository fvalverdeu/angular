module.exports = (app) => {
    const special = require('../controllers/specialController');

    app.get('/specials', special.findAll);
}