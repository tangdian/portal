import Game from './js/Game';

// in pixels
const WIDTH = 256;
const HEIGHT = 960;
// in cell units
const UNIVERSE_LENGTH = 13;
const UNIVERSE_HEIGHT = 25;

const DIMENSION = {
	
	UNIVERSE_LENGTH: 13,
	UNIVERSE_HEIGHT:25,
	CELL_LENGTH: 256/UNIVERSE_LENGTH,
	CELL_HEIGHT: 960/UNIVERSE_HEIGHT

}

var canvas = document.getElementById('universe');
var ctx = canvas.getContext('2d');

var games = [new Game({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas,
	context: ctx,
	DIMENSION,
	speed: 20,
	plan: ["xxx xxx xxx",
		"kkk kkk kkk",
		"xxx xxx kkk",
		"kkk kkk kkk",
		"kkk xxx xxx",
		"kkk kkk kkk",
		"kkk xxx kkk"]
}), ];



function chooseGame(num) {
	games[num].drawGrid();
	games[num].iniSetUp();
	games[num].draw();
}


chooseGame(0);



