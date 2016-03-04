define([
    'backbone'
], function(
    Backbone
){

    var Router = Backbone.Router.extend({
        routes: {
            'scoreboard': 'scoreboardAction',
            'game': 'gameAction',
            'login': 'loginAction',
            '*default': 'defaultActions'
        },
        defaultActions: function () {
            showMainScreen();
        },
        scoreboardAction: function () {
            showScoreBoardScreen();
        },
        gameAction: function () {
            showGameScreen();
        },
        loginAction: function () {
            showLoginScreen();
        }
    });

    return new Router();
});
