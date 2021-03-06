var deckRoutes = require('./routes/decks');
var gameRoutes = require('./routes/games');
var userRoutes = require('./routes/user');
var path = require('path');

module.exports = (app, db) => {
    userRoutes(app, db);
    deckRoutes(app, db);
    gameRoutes(app, db);

    // Let client handle wrong routes
    app.get('*', (req, res) => {
        const publicPath = path.resolve(__dirname, '../public');
        res.sendFile(publicPath + '/index.html');
    });
};
