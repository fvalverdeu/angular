module.exports = (app) => {
    const event = require('../controllers/eventController.js');

    app.get('/events', event.findAll);
}