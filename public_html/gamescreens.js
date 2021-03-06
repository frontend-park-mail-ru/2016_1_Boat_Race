var $page = $('#page'),
currentScreen = 'main';

function showScoreBoardScreen() {
	
	hideMainScreen(); 
	currentScreen = 'scoreboard';
	$page.html(scoreboardTmpl()); 
	$page.find('.js-back').on('click', showMainScreen);
}

function hideScoreBoardScreen() {
	
	$page.find('.js-back').off('click', showMainScreen)
}

function showGameScreen() {
	
	hideMainScreen(); 
	currentScreen = 'game';
	$page.html(gameTmpl()); 
	$page.find('.js-back').on('click', showMainScreen);
}

function hideGameScreen() {
	
	$page.find('.js-back').off('click', showMainScreen)
}

function showLoginScreen() {
	
	hideMainScreen(); 
	currentScreen = 'login';
	$page.html(loginTmpl()); 
	$page.find('.js-back').on('click', showMainScreen);
}

function hideLoginScreen() {
	
	$page.find('.js-back').off('click', showMainScreen)
}

function showMainScreen() {

	if (currentScreen === 'scoreboard') {
		hideScoreboardScreen();
	} else if (currentScreen === 'game') {
		hideGameScreen();
	} else if (currentScreen === 'login') {
		hideLoginScreen();
	}
	currentScreen = 'main';
	$page.html(mainTmpl());
	$page.find('.js-scoreboard').on('click', showScoreBoardScreen);
	$page.find('.js-start-game').on('click', showGameScreen);
	$page.find('.js-login').on('click', showLoginScreen);
}

function hideMainScreen() {

	$page.find('.js-scoreboard').off('click', showScoreBoardScreen);
	$page.find('.js-start-game').off('click', showGameScreen);
	$page.find('.js-login').off('click', showLoginScreen);
}
