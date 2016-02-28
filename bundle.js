(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _jsGame = require('./js/Game');

var _jsGame2 = _interopRequireDefault(_jsGame);

// in pixels
var WIDTH = 256;
var HEIGHT = 960;
// in cell units
var UNIVERSE_LENGTH = 13;
var UNIVERSE_HEIGHT = 25;

var DIMENSION = {

	UNIVERSE_LENGTH: 13,
	UNIVERSE_HEIGHT: 25,
	CELL_LENGTH: 256 / UNIVERSE_LENGTH,
	CELL_HEIGHT: 960 / UNIVERSE_HEIGHT

};

var canvas = document.getElementById('universe');
var ctx = canvas.getContext('2d');

var games = [new _jsGame2['default']({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas: canvas,
	context: ctx,
	DIMENSION: DIMENSION,
	speed: 20,
	plan: ["xxx xxx xxx", "kkk kkk kkk", "xxx xxx kkk", "kkk kkk ptB", "kkk xxx ptB", "kkk ptB kkk", "kkk xxx kkk", "kkk kkk kkk", "xxx xxx kkk", "kkk kkk kkk", "kkk xxx ptW", "kkk kkk kkk", "ptW xxx kkk", "kkk kkk kkk", "xxx xxx kkk", "kkk kkk kkk", "kkk xxx ptB", "kkk kkk kkk", "kkk ptB kkk"]
})];

function chooseGame(num) {
	// games[num].drawGrid();
	games[num].iniSetUp();
	games[num].draw();
	// games[num].play();
}

chooseGame(0);

},{"./js/Game":3}],2:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Obj2 = require('./Obj');

var _Obj3 = _interopRequireDefault(_Obj2);

var Character = (function (_Obj) {
  _inherits(Character, _Obj);

  function Character(state, options) {
    _classCallCheck(this, Character);

    _get(Object.getPrototypeOf(Character.prototype), "constructor", this).call(this, options);
    this.state = state;
    this.currY = this.convertPixel(options).y; //in pixel; Y DECREASES
    this.currX = this.convertPixel(options).x;
    this.options = options;
  }

  // function convertOptionsToPixel(options){
  //   var H_BLOCKS = 14;
  //   var H_DIMENTION = 256;
  //   var V_BLOCKS = 25;
  //   var V_DIMENTION = 960;
  //   var gridPixel.x = options.x * (H_DIMENTION / H_BLOCKS);
  //   var gridPixel.y = (options.y+1) * (V_DIMENTION / V_BLOCKS);
  //   return gridPixel;
  // }

  _createClass(Character, [{
    key: "initializeCharacter",
    value: function initializeCharacter(ctx) {
      //only able to access 'this' on the outside

      var x = this.currX;
      var y = this.currY;
      var imageObj = new Image();
      imageObj.onload = function () {

        ctx.drawImage(imageObj, x, y);
      };
      imageObj.src = "./images/Black2.png";

      // ctx.beginPath();

      // ctx.arc(120, 900, 17, 0, Math.PI*2, true);//character size
      // ctx.fillStyle = "#0095DD";
      // ctx.fill();
      // ctx.closePath();
    }
  }, {
    key: "rebornCharacter",
    value: function rebornCharacter(ctx) {
      var self = this;
      var bx = this.currX;
      var by = this.currY;

      setTimeout(function () {
        self.clear(ctx, bx, by);
        var x = self.convertPixel(self.options).x;
        var y = self.convertPixel(self.options).y;
        self.currX = x;
        self.currY = y;
        var imageObj = new Image();
        imageObj.onload = function () {

          ctx.drawImage(imageObj, x, y);
        };
        imageObj.src = "./images/Black2.png";
      }, 50);
    }
  }, {
    key: "log",
    value: function log() {
      console.log("doing");
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      // console.log("drawing..");

      this.clear(ctx, this.currX, this.currY);

      var dy = -1;
      this.currY += dy;

      var x = this.currX;
      var y = this.currY;
      var imageObj = new Image();
      imageObj.onload = function () {

        ctx.drawImage(imageObj, x, y);
      };
      imageObj.src = "./images/Black2.png";
    }

    // setInterval(draw ,20);//check every 20ms

  }, {
    key: "convertPixel",
    value: function convertPixel(counter) {
      // var H_BLOCKS = 14;
      // var H_DIMENTION = 256;
      // var V_BLOCKS = 25;
      // var V_DIMENTION = 960;
      var gridPixel = {
        x: counter.GridX * (this.H_DIMENTION / this.H_BLOCKS),
        y: counter.GridY * (this.V_DIMENTION / this.V_BLOCKS)
      };
      return gridPixel;
    }
  }, {
    key: "checkCollision",
    value: function checkCollision(stillE, movingE, portals, items) {
      var collisionType;

      // //loop through every object in the map
      // for(var i = 0; i < portals.length; i++){
      //   var pixel = this.convertPixel(portals[i]);//in pixel
      //   if((this.currY == pixel.y) && (this.currX == pixel.x)){
      //     this.clear();
      //     collsionType = "portals";
      //     currX = portals[i+1].GridX;//in grid
      //     currY = portals[i+1].GridY;
      //     var imageObj = new Image();
      //     imageObj.onload = function() {

      //       ctx.drawImage(imageObj, x, y);

      //     };
      //     imageObj.src = "./images/Star2.png";

      //     // ctx.beginPath();
      //     // ctx.arc(currX + 9.14, currY, 17, 0, Math.PI*2, true);//portal size
      //     // ctx.fillStyle = "#0095DD";
      //     // ctx.fill();
      //     // ctx.closePath();
      //   }
      // }

      for (var i = 0; i < stillE.length; i++) {
        var pixel = this.convertPixel(stillE[i]); //in pixel
        // console.log(pixel.y);
        // if(this.currY > i.y && this.currY < i.y - 38.4 && (currX > i.x && currX < i.x + 18.28){
        if (this.currY < pixel.y) {
          // collsionType = "stillE";
          document.reload();
        }
      }

      for (var i = 0; i < movingE.length; i++) {
        var pixel = this.convertPixel(movingE[i]); //in pixel
        // if(this.currY > i.y && this.currY < i.y - 38.4 && (currX > i.x && currX < i.x + 18.28){
        if (this.currY == pixel.y && this.currX == pixel.x) {
          document.reload();
        }
      }

      for (var i = 0; i < items.length; i++) {
        var pixel = this.convertPixel(items[i]); //in pixel
        if (this.currY == pixel.y && this.currX == pixel.x) {
          itemCollected++;
          console.log(itemCollected);
        }
      }
    }

    // setInterval(checkCollision ,20);//check every 20ms
    // document.addEventListener("keydown", changeState);

  }, {
    key: "changeState",
    value: function changeState(e) {
      //register a event listener
      var key = e.keyCode ? e.keyCode : e.which;
      if (key == 38) {
        console.log("You Pressed the fking Space");
        switch (state) {
          case 0:
            state++;
            console.log("White");
            break;
          case 1:
            state--;
            console.log("Black");
            break;
        }
      }
    }
  }]);

  return Character;
})(_Obj3["default"]);

module.exports = Character;

},{"./Obj":4}],3:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Character = require('./Character');

var _Character2 = _interopRequireDefault(_Character);

var _Obj = require('./Obj');

var _Obj2 = _interopRequireDefault(_Obj);

var _Portal = require('./Portal');

var _Portal2 = _interopRequireDefault(_Portal);

// import Enemy from ./Character.js;

var Game = (function () {
	// set up instance variables

	function Game(options) {
		_classCallCheck(this, Game);

		this.canvas = options.canvas;
		this.ctx = options.context;
		this.DIMENSION = options.DIMENSION;
		this.universeElem = document.getElementById('universe');
		this.speed = options.speed;
		this.plan = options.plan;
		this.Grid = [];
		this.portalsB = [];
		this.portalsW = [];
		this.items = [];
		this.movingE = [];
		this.stillE = [];
		this.character = new _Character2['default'](0, { GridX: 5, GridY: 23 });
		this.point = 0;
		this.win = false;
		this.H_BLOCKS = 13;
		this.H_DIMENTION = 256;
		this.H = this.H_DIMENSION / this.H_BLOCKS;
		this.V_BLOCKS = 25;
		this.V_DIMENTION = 960;
		this.V = this.V_DIMENSION / this.V_BLOCKS;
		this.intervalID = 0;
		this.nowptB;
		this.nowptW;
	}

	// initial set up

	_createClass(Game, [{
		key: 'iniSetUp',
		value: function iniSetUp() {
			// // Note: using bind to pass the class' context to the callbacks
			// // not sure if this can be improved.
			// // this.universeElem.addEventListener('click', loopCells.bindthis());
			// // when user click, start the game
			var self = this;
			document.getElementById('start').addEventListener('click', function () {
				self.play();
			});

			console.log(this.plan);
			this.parse(this.plan);

			this.character.initializeCharacter(this.ctx);

			this.nowptB = this.portalsB.length - 1;
			this.nowptW = this.portalsW.length - 1;

			// draw(this.Grid) {

			// }
		}
	}, {
		key: 'parse',
		value: function parse(plan) {
			// let grid = [];

			for (var i = 0; i < plan.length; i++) {
				var array = plan[i].split(" ");

				for (var j = 0; j < array.length; j++) {
					if (array[j] == "xxx") {
						this.stillE.push(new _Obj2['default']({ GridX: 1 + 3 * j + j, GridY: i }));
					} else if (array[j] == "moe") {
						this.Enemies.push(new movingE({}));
					} else if (array[j] == "ptW") {
						this.portalsW.push(new _Portal2['default'](1, { GridX: 1 + 3 * j + j, GridY: i }));
					} else if (array[j] == "ptB") {
						this.portalsB.push(new _Portal2['default'](0, { GridX: 1 + 3 * j + j, GridY: i }));
					}
				}
			}

			// return grid;
		}
	}, {
		key: 'play',
		value: function play() {
			// remove god mode
			// this.universeElem.removeEventListener('click', loopCells);
			// game loop
			// console.log(this.speed);

			var self = this;

			this.intervalID = setInterval(function () {
				self.character.draw(self.ctx);
				self.checkCollision();
			}, 20);

			// setInterval(this.character.checkCollision(this.portals,this.enemies,this.items), this.speed);
			// document.addEventListener("keydown", this.character.changeState)
		}
	}, {
		key: 'logging',
		value: function logging() {
			console.log("logging");
		}

		// draw grid
	}, {
		key: 'drawGrid',
		value: function drawGrid() {
			this.ctx.strokeStyle = '#777';
			this.ctx.lineWidth = 1;
			// vertical lines
			for (var i = 1; i < this.DIMENSION.UNIVERSE_LENGTH; i++) {
				this.ctx.beginPath();
				this.ctx.moveTo(this.DIMENSION.CELL_LENGTH * i, 0);
				this.ctx.lineTo(this.DIMENSION.CELL_LENGTH * i, this.DIMENSION.UNIVERSE_HEIGHT * this.DIMENSION.CELL_HEIGHT);
				this.ctx.stroke();
			}
			// horizontal lines
			for (var i = 1; i < this.DIMENSION.UNIVERSE_HEIGHT; i++) {
				this.ctx.beginPath();
				this.ctx.moveTo(0, this.DIMENSION.CELL_HEIGHT * i);
				this.ctx.lineTo(this.DIMENSION.UNIVERSE_LENGTH * this.DIMENSION.CELL_LENGTH, this.DIMENSION.CELL_HEIGHT * i);
				this.ctx.stroke();
			}
		}
	}, {
		key: 'draw',
		value: function draw() {
			var _this = this;

			console.log(this.portalsB);
			console.log(this.portalsW);
			//draw static stuff	
			// console.log(this.Grid);
			var ctx = this.ctx;
			var xshift = this.DIMENSION.CELL_LENGTH;
			var yshift = this.DIMENSION.CELL_HEIGHT;

			var _loop = function () {
				var x = _this.stillE[i].GridX;
				var y = _this.stillE[i].GridY;

				imageObj = new Image();

				imageObj.onload = function () {

					ctx.drawImage(this, x * xshift, y * yshift);
				};
				imageObj.src = "./images/Obstacle.png";

				// this.ctx.fillRect(,,3*this.DIMENSION.CELL_LENGTH,this.DIMENSION.CELL_HEIGHT);
			};

			for (var i = 0; i < this.stillE.length; i++) {
				var imageObj;

				_loop();
			}

			var _loop2 = function () {
				var x = _this.portalsB[i].GridX;
				var y = _this.portalsB[i].GridY;
				if (_this.portalsB[i].state == 0) {
					imageObj = new Image();

					imageObj.onload = function () {

						ctx.drawImage(this, x * xshift, y * yshift);
					};
					imageObj.src = "./images/potB.png";
				}
			};

			for (var i = 0; i < this.portalsB.length; i++) {
				var imageObj;

				_loop2();
			}

			var _loop3 = function () {
				var x = _this.portalsW[i].GridX;
				var y = _this.portalsW[i].GridY;
				if (_this.portalsW[i].state == 0) {
					imageObj = new Image();

					imageObj.onload = function () {

						ctx.drawImage(this, x * xshift, y * yshift);
					};
					imageObj.src = "./images/potW.png";
				}
			};

			for (var i = 0; i < this.portalsW.length; i++) {
				var imageObj;

				_loop3();
			}
		}

		// for (var i=0;i<this.portals.length;i++) {
		// 	ctx.fillStyle="#FF0000";
		// 	this.ctx.fillRect(i*CELL_LENGTH,i*CELL_HEIGHT,3*CELL_LENGTH,CELL_HEIGHT);
		// }

		// for (var i=0;i<this.portals.length;i++) {
		// 	ctx.fillStyle="blue";
		// 	this.ctx.fillRect(i*CELL_LENGTH,i*CELL_HEIGHT,3*CELL_LENGTH,CELL_HEIGHT);
		// }

		// for (var i=0;i<this.portals.length;i++) {
		// 	ctx.fillStyle="yellow";
		// 	this.ctx.fillRect(i*CELL_LENGTH,i*CELL_HEIGHT,3*CELL_LENGTH,CELL_HEIGHT);
		// }

	}, {
		key: 'checkCollision',
		value: function checkCollision() {
			// var collisionType;

			// //loop through every object in the map
			console.log(this.portalsB[this.nowptB]);

			var pixel = convertPixel(this.portalsB[this.nowptB]); //in pixel
			console.log(pixel.x);
			console.log(this.character.currX);
			if (this.character.currY < pixel.y && Math.abs(this.character.currX - pixel.x) < 10) {
				console.log("chuan");
				this.character.clear(this.ctx, 60, 60);
				this.nowptB--;

				pixel = convertPixel(this.protalsB[nowptB]);
				this.character.currX = pixel.x; //in grid
				this.character.currY = pixel.y;
				var imageObj = new Image();
				imageObj.onload = function () {

					ctx.drawImage(this, pixel.x, pixel.y);
				};
				imageObj.src = "./images/Black2.png";

				// ctx.beginPath();
				// ctx.arc(currX + 9.14, currY, 17, 0, Math.PI*2, true);//portal size
				// ctx.fillStyle = "#0095DD";
				// ctx.fill();
				// ctx.closePath();
			} else if (this.character.currY < pixel.y) {
					this.nowptB--;
					// this.nowptB= (this.nowptB+this.portalsB.length-1)%this.portalsB.length;
				}

			// for (var i = 0; i < this.portalsW.length; i++) {
			// 	var pixel = convertPixel(this.portalsW[i]);//in pixel
			// 	if ((this.character.currY == pixel.y) && (this.character.currX == pixel.x) && (this.portalsW[i].state == this.character.state)) {
			// 		this.character.clear(this.ctx, pixel.x, pixel.y);
			// 		collsionType = "portals";
			// 		pixel = convertPixel(this.protalsW[i - 1]);
			// 		this.character.currX = pixel.x//in grid
			// 		this.character.currY = pixel.y;
			// 		var imageObj = new Image();
			// 		imageObj.onload = function() {

			// 			ctx.drawImage(this, pixel.x, pixel.y);

			// 		};
			// 		imageObj.src = "./images/Black2.png";

			// 		// ctx.beginPath();
			// 		// ctx.arc(currX + 9.14, currY, 17, 0, Math.PI*2, true);//portal size
			// 		// ctx.fillStyle = "#0095DD";
			// 		// ctx.fill();
			// 		// ctx.closePath();
			// 	}
			// }

			for (var i = 0; i < this.stillE.length; i++) {
				var pixel = convertPixel(this.stillE[i]); //in pixel
				// console.log(pixel.y);
				// if(this.currY > i.y && this.currY < i.y - 38.4 && (currX > i.x && currX < i.x + 18.28){
				if (this.character.currY < pixel.y + 38.4) {
					// collsionType = "stillE";
					clearInterval(this.intervalID);
					this.character.rebornCharacter(this.ctx);
					console.log("i am executed");
					return;
				}
			}

			// for (var i = 0; i < this.movingE.length; i++) {
			// 	var pixel = convertPixel(this.movingE[i]);//in pixel
			// 	// if(this.currY > i.y && this.currY < i.y - 38.4 && (currX > i.x && currX < i.x + 18.28){
			// 	if ((this.character.currY < pixel.y) && (this.currX == pixel.x)) {
			// 		document.reload();

			// 	}
			// }

			// for (var i = 0; i < this.items.length; i++) {
			// 	var pixel = convertPixel(this.items[i]);//in pixel
			// 	if ((this.currY < pixel.y) && (this.currX == pixel.x)) {
			// 		this.point++;
			// 		console.log(this.point);
			// 	}
			// }
		}
	}]);

	return Game;
})();

function convertPixel(counter) {
	var H_BLOCKS = 13;
	var H_DIMENTION = 256;
	var V_BLOCKS = 25;
	var V_DIMENTION = 960;
	var gridPixel = {
		x: counter.GridX * (H_DIMENTION / H_BLOCKS),
		y: counter.GridY * (V_DIMENTION / V_BLOCKS)
	};
	return gridPixel;
}

// Private methods
// --------------------

// Loop over the cells
function loopCells(e) {
	var universeElem = document.getElementById('universe');
	var pageX = e.pageX - universeElem.offsetLeft;
	var pageY = e.pageY - universeElem.offsetTop;

	for (var i = 0; i < this.universe.height; i++) {
		for (var j = 0; j < this.universe.length; j++) {
			var cell = this.universe.cells[i][j];
			handleClick(this, cell, pageX, pageY);
		}
	}
}

// give life or death to the cell clicked.
// Note: because loopCells is a callback which has the class context
// bound to it, this function which is called in the callback doesn't get the
// context implicitly, so I must pass it. Doesn't feel clean...
// function handleClick(self, cell, pageX, pageY){
// 	if (pageX > cell.x && pageX < cell.x+self.universe.cellLength &&
// 				pageY > cell.y && pageY < cell.y+self.universe.cellHeight ) {
// 		changeCells(self, cell);
// 	}
// }

// 1 step = 1 generation
function step() {}

/*
*	pass the cell through the 4 rules. 
	Note: cells should not update here, since altering 1 before you can
	analyze the others will cause erroneous outcomes.
*/
function transitions(self, cell, cellsToChange) {
	var uniLength = self.universe.length;
	var uniHeight = self.universe.height;
	var neighboursAlive = 0;
	// Go through the neighbours of each cell.
	for (var i = 0; i < 8; i++) {
		var neighbourID = cell.neighbours[i];
		if (neighbourID >= uniLength * uniHeight || neighbourID < 0) continue;
		var neighbour = getCellById(self, neighbourID);
		if (neighbour.state === 1) neighboursAlive++;
	}
	if (cell.state === 1) {
		// ze life rules
		// -------------------
		// 1) Any live cell with fewer than two live neighbours dies, as
		// if caused by under-population.
		// 2) Any live cell with two or three live neighbours lives on to
		// the next generation.
		if (neighboursAlive < 2) cellsToChange.push(cell.id);
		// 3) Any live cell with more than three live neighbours dies, as if
		// by overcrowding.
		else if (neighboursAlive > 3) cellsToChange.push(cell.id);
	} else {
		// 4) Any dead cell with exactly three live neighbours becomes a
		// live cell, as if by reproduction.
		if (neighboursAlive === 3) cellsToChange.push(cell.id);
	}
}

function changeCells(self, cell) {
	self.ctx.fillStyle = cell.state ? 'white' : '#333';
	self.ctx.fillRect(cell.x + 1, cell.y + 1, self.universe.cellLength - 2, self.universe.cellHeight - 2);
	cell.state = cell.state ? 0 : 1;
}

function getCellById(self, id) {
	var row = Math.floor(id / self.universe.length);
	var column = id % self.universe.length;
	return self.universe.cells[row][column];
}

module.exports = Game;

},{"./Character":2,"./Obj":4,"./Portal":5}],4:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Obj = (function () {
		function Obj(options) {
				_classCallCheck(this, Obj);

				this.GridX = options.GridX;
				this.GridY = options.GridY;
				// this.state = state;//0 is a color0, 1 is color1
				this.H_BLOCKS = 13;
				this.H_DIMENTION = 256;
				this.V_BLOCKS = 25;
				this.V_DIMENTION = 960;
		}

		//  convertPixel(counter) {
		//   var x = counter.GridX * (this.H_DIMENTION / this.H_BLOCKS);
		//   console.log("xis"+x);
		//   var gridPixel = {
		// 	  x: counter.GridX * (this.H_DIMENTION / this.H_BLOCKS),
		// 	  y: (counter.GridY + 1) * (this.V_DIMENTION / this.V_BLOCKS)
		//   }
		//    return gridPixel;
		// }

		_createClass(Obj, [{
				key: "clear",
				value: function clear(ctx, x, y) {
						// console.log(this.H_DIMENTION / this.H_BLOCKS);
						// // console.log(this.GridX);
						// var x = this.GridX * (this.H_DIMENTION / this.H_BLOCKS);
						// var y = (this.GridY) * (this.V_DIMENTION / this.V_BLOCKS);
						// console.log("x is "+ x);
						// console.log("y is " + y);

						// ctx.clearRect(x,y, 3 * (this.H_DIMENTION / this.H_BLOCKS), 1+(this.V_DIMENTION / this.V_BLOCKS));
						ctx.clearRect(x, y, 60, 50);
				}
		}]);

		return Obj;
})();

module.exports = Obj;

},{}],5:[function(require,module,exports){
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Obj2 = require('./Obj');

var _Obj3 = _interopRequireDefault(_Obj2);

var Portal = (function (_Obj) {
  _inherits(Portal, _Obj);

  function Portal(state, options) {
    _classCallCheck(this, Portal);

    _get(Object.getPrototypeOf(Portal.prototype), 'constructor', this).call(this, options);
    this.state = state;
  }

  return Portal;
})(_Obj3['default']);

module.exports = Portal;

},{"./Obj":4}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGlhbnRhbmcvcHJvZy9wb3J0YWwvYXBwLmpzIiwiL1VzZXJzL2RpYW50YW5nL3Byb2cvcG9ydGFsL2pzL0NoYXJhY3Rlci5qcyIsIi9Vc2Vycy9kaWFudGFuZy9wcm9nL3BvcnRhbC9qcy9HYW1lLmpzIiwiL1VzZXJzL2RpYW50YW5nL3Byb2cvcG9ydGFsL2pzL09iai5qcyIsIi9Vc2Vycy9kaWFudGFuZy9wcm9nL3BvcnRhbC9qcy9Qb3J0YWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O3NCQ0FpQixXQUFXOzs7OztBQUc1QixJQUFNLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDbEIsSUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDOztBQUVuQixJQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDM0IsSUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDOztBQUUzQixJQUFNLFNBQVMsR0FBRzs7QUFFakIsZ0JBQWUsRUFBRSxFQUFFO0FBQ25CLGdCQUFlLEVBQUMsRUFBRTtBQUNsQixZQUFXLEVBQUUsR0FBRyxHQUFDLGVBQWU7QUFDaEMsWUFBVyxFQUFFLEdBQUcsR0FBQyxlQUFlOztDQUVoQyxDQUFBOztBQUVELElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDakQsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFbEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyx3QkFBUzs7O0FBR3JCLE9BQU0sRUFBTixNQUFNO0FBQ04sUUFBTyxFQUFFLEdBQUc7QUFDWixVQUFTLEVBQVQsU0FBUztBQUNULE1BQUssRUFBRSxFQUFFO0FBQ1QsS0FBSSxFQUFFLENBQUMsYUFBYSxFQUNuQixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEs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QUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDOzs7OztHQUt0Qzs7O1NBSUksZUFBQyxJQUFJLEVBQUU7OztBQUdYLFFBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFFO0FBQzlCLFFBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRy9CLFNBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFFO0FBQy9CLFNBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRTtBQUNyQixVQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztNQUd4RCxNQUVJLElBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRTtBQUMxQixVQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO01BRW5DLE1BQ0ksSUFBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxFQUFFO0FBQzFCLFVBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHdCQUFXLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztNQUM5RCxNQUVJLElBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRTtBQUMxQixVQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyx3QkFBWSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7TUFDL0Q7S0FDRDtJQUVEOzs7R0FHRDs7O1NBS0csZ0JBQUU7Ozs7OztBQU1MLE9BQUksSUFBSSxHQUFHLElBQUksQ0FBQzs7QUFFaEIsT0FBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUMsWUFBVztBQUN4QyxRQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUIsUUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3RCLEVBQUUsRUFBRSxDQUFDLENBQUM7Ozs7R0FLUDs7O1NBRU0sbUJBQUc7QUFDVCxVQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0dBQ3ZCOzs7OztTQUdPLG9CQUFHO0FBQ1YsT0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO0FBQzlCLE9BQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQzs7QUFFdkIsUUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUMsRUFBRSxFQUFDO0FBQ3JELFFBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDckIsUUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hELFFBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFDLENBQUMsRUFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUM1RCxRQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCOztBQUVELFFBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUUsRUFBQztBQUNyRCxRQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ3JCLFFBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRCxRQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFDeEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0IsUUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQjtHQUNEOzs7U0FFRyxnQkFBRzs7O0FBQ04sVUFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDM0IsVUFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7OztBQUczQixPQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQ25CLE9BQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO0FBQ3hDLE9BQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDOzs7QUFHdkMsUUFBSSxDQUFDLEdBQUcsTUFBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQzdCLFFBQUksQ0FBQyxHQUFHLE1BQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7QUFFekIsWUFBUSxHQUFHLElBQUksS0FBSyxFQUFFOztBQUMxQixZQUFRLENBQUMsTUFBTSxHQUFHLFlBQVc7O0FBRTVCLFFBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0tBRTVDLENBQUM7QUFDRixZQUFRLENBQUMsR0FBRyxHQUFHLHVCQUF1QixDQUFDOzs7OztBQVZ4QyxRQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFJeEMsUUFBUTs7O0lBVVo7OztBQUlBLFFBQUksQ0FBQyxHQUFHLE1BQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUMvQixRQUFJLENBQUMsR0FBRyxNQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDL0IsUUFBSSxNQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFFO0FBQzVCLGFBQVEsR0FBRyxJQUFJLEtBQUssRUFBRTs7QUFDMUIsYUFBUSxDQUFDLE1BQU0sR0FBRyxZQUFXOztBQUU1QixTQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztNQUU1QyxDQUFDO0FBQ0YsYUFBUSxDQUFDLEdBQUcsR0FBRyxtQkFBbUIsQ0FBQztLQUNuQzs7O0FBWEYsUUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBSXpDLFFBQVE7OztJQVFiOzs7QUFJQyxRQUFJLENBQUMsR0FBRyxNQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDL0IsUUFBSSxDQUFDLEdBQUcsTUFBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQy9CLFFBQUksTUFBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTtBQUM1QixhQUFRLEdBQUcsSUFBSSxLQUFLLEVBQUU7O0FBQzFCLGFBQVEsQ0FBQyxNQUFNLEdBQUcsWUFBVzs7QUFFNUIsU0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7TUFFNUMsQ0FBQztBQUNGLGFBQVEsQ0FBQyxHQUFHLEdBQUcsbUJBQW1CLENBQUM7S0FDbkM7OztBQVhGLFFBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUl6QyxRQUFROzs7SUFVYjtHQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBd0JZLDBCQUFHOzs7O0FBSWhCLFVBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7QUFFdEMsT0FBSSxLQUFLLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDckQsVUFBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckIsVUFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xDLE9BQUcsQUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxJQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFDLEVBQUUsQUFBQyxFQUFFO0FBQ3JGLFdBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEIsUUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUM7QUFDeEMsUUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOztBQUVkLFNBQUssR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3pDLFFBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUE7QUFDOUIsUUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUMvQixRQUFJLFFBQVEsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0FBQzNCLFlBQVEsQ0FBQyxNQUFNLEdBQUcsWUFBVzs7QUFFM0IsUUFBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FFdkMsQ0FBQztBQUNGLFlBQVEsQ0FBQyxHQUFHLEdBQUcscUJBQXFCLENBQUM7Ozs7Ozs7SUFRdEMsTUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDeEMsU0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOztLQUVkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCSCxRQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDNUMsUUFBSSxLQUFLLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O0FBR3pDLFFBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUksS0FBSyxDQUFDLENBQUMsR0FBQyxJQUFJLEFBQUMsRUFBRTs7QUFFMUMsa0JBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDL0IsU0FBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDLFlBQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDN0IsWUFBTztLQUNQO0lBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRDs7O1FBclRJLElBQUk7OztBQTZUVixTQUFTLFlBQVksQ0FBQyxPQUFPLEVBQUM7QUFDMUIsS0FBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLEtBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQztBQUN0QixLQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbEIsS0FBSSxXQUFXLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLEtBQUksU0FBUyxHQUFHO0FBQ2xCLEdBQUMsRUFBRSxPQUFPLENBQUMsS0FBSyxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUEsQUFBQztBQUMzQyxHQUFDLEVBQUUsQUFBQyxPQUFPLENBQUMsS0FBSyxJQUFLLFdBQVcsR0FBRyxRQUFRLENBQUEsQUFBQztFQUMxQyxDQUFBO0FBQ0QsUUFBTyxTQUFTLENBQUM7Q0FDcEI7Ozs7OztBQU9ELFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRTtBQUNyQixLQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3ZELEtBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQztBQUM5QyxLQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUM7O0FBRTdDLE1BQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztBQUMzQyxPQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7QUFDekMsT0FBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckMsY0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQ3RDO0VBQ0Q7Q0FDRDs7Ozs7Ozs7Ozs7Ozs7QUFjRCxTQUFTLElBQUksR0FBRSxFQUdkOzs7Ozs7O0FBT0QsU0FBUyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7QUFDL0MsS0FBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFDckMsS0FBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFDckMsS0FBSSxlQUFlLEdBQUcsQ0FBQyxDQUFDOztBQUV4QixNQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDO0FBQ3RCLE1BQUksV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckMsTUFBSSxXQUFXLElBQUksU0FBUyxHQUFDLFNBQVMsSUFBSSxXQUFXLEdBQUUsQ0FBQyxFQUFFLFNBQVM7QUFDbkUsTUFBSSxTQUFTLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztBQUMvQyxNQUFJLFNBQVMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFLGVBQWUsRUFBRSxDQUFDO0VBQzdDO0FBQ0QsS0FBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBQzs7Ozs7OztBQU9wQixNQUFJLGVBQWUsR0FBRyxDQUFDLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7OztPQUdoRCxJQUFJLGVBQWUsR0FBRyxDQUFDLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDMUQsTUFDSTs7O0FBR0osTUFBSSxlQUFlLEtBQUssQ0FBQyxFQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ3ZEO0NBQ0Q7O0FBRUQsU0FBUyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRTtBQUNoQyxLQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxBQUFDLElBQUksQ0FBQyxLQUFLLEdBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUNyRCxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFDLENBQUMsRUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFELEtBQUksQ0FBQyxLQUFLLEdBQUcsQUFBQyxJQUFJLENBQUMsS0FBSyxHQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDbEM7O0FBRUQsU0FBUyxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUM5QixLQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzlDLEtBQUksTUFBTSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUN2QyxRQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQ3hDOztBQUdELE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOzs7Ozs7Ozs7SUNwYWhCLEdBQUc7QUFDSSxXQURQLEdBQUcsQ0FDSyxPQUFPLEVBQUM7MEJBRGhCLEdBQUc7O0FBRUwsUUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO0FBQzNCLFFBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQzs7QUFFOUIsUUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDaEIsUUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7QUFDdkIsUUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbkIsUUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7R0FFeEI7Ozs7Ozs7Ozs7OztlQVZHLEdBQUc7O1dBeUJGLGVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUU7Ozs7Ozs7OztBQVNkLFNBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDNUI7OztTQW5DRyxHQUFHOzs7QUFzQ1QsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7b0JDdENMLE9BQU87Ozs7SUFFakIsTUFBTTtZQUFOLE1BQU07O0FBQ0MsV0FEUCxNQUFNLENBQ0UsS0FBSyxFQUFDLE9BQU8sRUFBQzswQkFEdEIsTUFBTTs7QUFFUiwrQkFGRSxNQUFNLDZDQUVGLE9BQU8sRUFBRTtBQUNmLFFBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0dBQ3BCOztTQUpHLE1BQU07OztBQVNaLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBHYW1lIGZyb20gJy4vanMvR2FtZSc7XG5cbi8vIGluIHBpeGVsc1xuY29uc3QgV0lEVEggPSAyNTY7XG5jb25zdCBIRUlHSFQgPSA5NjA7XG4vLyBpbiBjZWxsIHVuaXRzXG5jb25zdCBVTklWRVJTRV9MRU5HVEggPSAxMztcbmNvbnN0IFVOSVZFUlNFX0hFSUdIVCA9IDI1O1xuXG5jb25zdCBESU1FTlNJT04gPSB7XG5cdFxuXHRVTklWRVJTRV9MRU5HVEg6IDEzLFxuXHRVTklWRVJTRV9IRUlHSFQ6MjUsXG5cdENFTExfTEVOR1RIOiAyNTYvVU5JVkVSU0VfTEVOR1RILFxuXHRDRUxMX0hFSUdIVDogOTYwL1VOSVZFUlNFX0hFSUdIVFxuXG59XG5cbnZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdmVyc2UnKTtcbnZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxudmFyIGdhbWVzID0gW25ldyBHYW1lKHtcblx0Ly8gZW5oYW5jZWQgb2JqZWN0IGxpdGVyYWxzXG5cdC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuXHRjYW52YXMsXG5cdGNvbnRleHQ6IGN0eCxcblx0RElNRU5TSU9OLFxuXHRzcGVlZDogMjAsXG5cdHBsYW46IFtcInh4eCB4eHggeHh4XCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwieHh4IHh4eCBra2tcIixcblx0XHRcImtrayBra2sgcHRCXCIsXG5cdFx0XCJra2sgeHh4IHB0QlwiLFxuXHRcdFwia2trIHB0QiBra2tcIixcblx0XHRcImtrayB4eHgga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwieHh4IHh4eCBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IHB0V1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInB0VyB4eHgga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwieHh4IHh4eCBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IHB0QlwiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBwdEIga2trXCJdXG59KSwgXTtcblxuXG5cbmZ1bmN0aW9uIGNob29zZUdhbWUobnVtKSB7XG5cdC8vIGdhbWVzW251bV0uZHJhd0dyaWQoKTtcblx0Z2FtZXNbbnVtXS5pbmlTZXRVcCgpO1xuXHRnYW1lc1tudW1dLmRyYXcoKTtcblx0Ly8gZ2FtZXNbbnVtXS5wbGF5KCk7XG59XG5cblxuY2hvb3NlR2FtZSgwKTtcblxuXG5cbiIsImltcG9ydCBPYmogZnJvbSAnLi9PYmonO1xuXG5jbGFzcyBDaGFyYWN0ZXIgZXh0ZW5kcyBPYmp7XG4gIGNvbnN0cnVjdG9yKHN0YXRlLG9wdGlvbnMpe1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLmN1cnJZID0gdGhpcy5jb252ZXJ0UGl4ZWwob3B0aW9ucykueTsvL2luIHBpeGVsOyBZIERFQ1JFQVNFU1xuICAgIHRoaXMuY3VyclggPSB0aGlzLmNvbnZlcnRQaXhlbChvcHRpb25zKS54O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICAvLyBmdW5jdGlvbiBjb252ZXJ0T3B0aW9uc1RvUGl4ZWwob3B0aW9ucyl7XG4gIC8vICAgdmFyIEhfQkxPQ0tTID0gMTQ7XG4gIC8vICAgdmFyIEhfRElNRU5USU9OID0gMjU2O1xuICAvLyAgIHZhciBWX0JMT0NLUyA9IDI1O1xuICAvLyAgIHZhciBWX0RJTUVOVElPTiA9IDk2MDtcbiAgLy8gICB2YXIgZ3JpZFBpeGVsLnggPSBvcHRpb25zLnggKiAoSF9ESU1FTlRJT04gLyBIX0JMT0NLUyk7XG4gIC8vICAgdmFyIGdyaWRQaXhlbC55ID0gKG9wdGlvbnMueSsxKSAqIChWX0RJTUVOVElPTiAvIFZfQkxPQ0tTKTtcbiAgLy8gICByZXR1cm4gZ3JpZFBpeGVsO1xuICAvLyB9XG5cbiBpbml0aWFsaXplQ2hhcmFjdGVyKGN0eCl7XG4gLy9vbmx5IGFibGUgdG8gYWNjZXNzICd0aGlzJyBvbiB0aGUgb3V0c2lkZVxuIFxuICAgXG4gICAgIHZhciB4ID0gdGhpcy5jdXJyWCA7XG4gICAgIHZhciB5ID0gdGhpcy5jdXJyWSA7XG4gICAgIHZhciBpbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xuICAgICBpbWFnZU9iai5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2VPYmosIHgsIHkpO1xuXG4gICAgIH07XG4gICAgIGltYWdlT2JqLnNyYyA9IFwiLi9pbWFnZXMvQmxhY2syLnBuZ1wiO1xuXG4gICAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgLy8gY3R4LmFyYygxMjAsIDkwMCwgMTcsIDAsIE1hdGguUEkqMiwgdHJ1ZSk7Ly9jaGFyYWN0ZXIgc2l6ZVxuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICAvLyBjdHguZmlsbCgpO1xuICAgIC8vIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIHJlYm9ybkNoYXJhY3RlciAoY3R4KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBieCA9IHRoaXMuY3Vyclg7XG4gICAgdmFyIGJ5ID0gdGhpcy5jdXJyWTtcbiAgXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuY2xlYXIoY3R4LCBieCwgYnkpO1xuICAgICAgdmFyIHggPSBzZWxmLmNvbnZlcnRQaXhlbChzZWxmLm9wdGlvbnMpLng7XG4gICAgICB2YXIgeSA9IHNlbGYuY29udmVydFBpeGVsKHNlbGYub3B0aW9ucykueTtcbiAgICAgIHNlbGYuY3VyclggPSB4O1xuICAgICAgc2VsZi5jdXJyWSA9IHk7XG4gICAgICB2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltYWdlT2JqLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2VPYmosIHgsIHkpO1xuXG4gICAgICB9O1xuICAgICAgaW1hZ2VPYmouc3JjID0gXCIuL2ltYWdlcy9CbGFjazIucG5nXCI7XG4gICAgfSwgNTApO1xuICB9XG5cbiAgbG9nKCkge1xuICAgIGNvbnNvbGUubG9nKFwiZG9pbmdcIik7XG4gIH1cblxuICAgZHJhdyhjdHgpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZHJhd2luZy4uXCIpO1xuXG4gICAgXG4gICAgdGhpcy5jbGVhcihjdHgsdGhpcy5jdXJyWCx0aGlzLmN1cnJZKTtcbiAgICBcbiAgICB2YXIgZHkgPSAtMTtcbiAgICB0aGlzLmN1cnJZICs9IGR5O1xuXG4gICAgdmFyIHggPSB0aGlzLmN1cnJYO1xuICAgIHZhciB5ID0gdGhpcy5jdXJyWTtcbiAgICB2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZU9iai5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZU9iaiwgeCwgeSk7XG5cbiAgICB9O1xuICAgIGltYWdlT2JqLnNyYyA9IFwiLi9pbWFnZXMvQmxhY2syLnBuZ1wiO1xuXG4gIH1cblxuICAvLyBzZXRJbnRlcnZhbChkcmF3ICwyMCk7Ly9jaGVjayBldmVyeSAyMG1zXG5cbiAgIGNvbnZlcnRQaXhlbChjb3VudGVyKXtcbiAgICAvLyB2YXIgSF9CTE9DS1MgPSAxNDtcbiAgICAvLyB2YXIgSF9ESU1FTlRJT04gPSAyNTY7XG4gICAgLy8gdmFyIFZfQkxPQ0tTID0gMjU7XG4gICAgLy8gdmFyIFZfRElNRU5USU9OID0gOTYwO1xuICAgIHZhciBncmlkUGl4ZWwgPSB7XG4gICAgICB4OiBjb3VudGVyLkdyaWRYICogKHRoaXMuSF9ESU1FTlRJT04gLyB0aGlzLkhfQkxPQ0tTKSxcbiAgICAgIHk6IChjb3VudGVyLkdyaWRZKSAqICh0aGlzLlZfRElNRU5USU9OIC8gdGhpcy5WX0JMT0NLUylcbiAgICB9XG4gICAgcmV0dXJuIGdyaWRQaXhlbDtcbiAgfVxuXG5cbiAgIGNoZWNrQ29sbGlzaW9uKHN0aWxsRSxtb3ZpbmdFLHBvcnRhbHMsaXRlbXMpe1xuICAgIHZhciBjb2xsaXNpb25UeXBlO1xuXG4gICAgLy8gLy9sb29wIHRocm91Z2ggZXZlcnkgb2JqZWN0IGluIHRoZSBtYXBcbiAgICAvLyBmb3IodmFyIGkgPSAwOyBpIDwgcG9ydGFscy5sZW5ndGg7IGkrKyl7XG4gICAgLy8gICB2YXIgcGl4ZWwgPSB0aGlzLmNvbnZlcnRQaXhlbChwb3J0YWxzW2ldKTsvL2luIHBpeGVsXG4gICAgLy8gICBpZigodGhpcy5jdXJyWSA9PSBwaXhlbC55KSAmJiAodGhpcy5jdXJyWCA9PSBwaXhlbC54KSl7XG4gICAgLy8gICAgIHRoaXMuY2xlYXIoKTtcbiAgICAvLyAgICAgY29sbHNpb25UeXBlID0gXCJwb3J0YWxzXCI7XG4gICAgLy8gICAgIGN1cnJYID0gcG9ydGFsc1tpKzFdLkdyaWRYOy8vaW4gZ3JpZFxuICAgIC8vICAgICBjdXJyWSA9IHBvcnRhbHNbaSsxXS5HcmlkWTtcbiAgICAvLyAgICAgdmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG4gICAgLy8gICAgIGltYWdlT2JqLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZU9iaiwgeCwgeSk7XG5cbiAgICAvLyAgICAgfTtcbiAgICAvLyAgICAgaW1hZ2VPYmouc3JjID0gXCIuL2ltYWdlcy9TdGFyMi5wbmdcIjtcblxuXG4gICAgLy8gICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyAgICAgLy8gY3R4LmFyYyhjdXJyWCArIDkuMTQsIGN1cnJZLCAxNywgMCwgTWF0aC5QSSoyLCB0cnVlKTsvL3BvcnRhbCBzaXplXG4gICAgLy8gICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICAvLyAgICAgLy8gY3R4LmZpbGwoKTtcbiAgICAvLyAgICAgLy8gY3R4LmNsb3NlUGF0aCgpO1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzdGlsbEUubGVuZ3RoOyBpKyspe1xuICAgICAgdmFyIHBpeGVsID0gdGhpcy5jb252ZXJ0UGl4ZWwoc3RpbGxFW2ldKTsvL2luIHBpeGVsXG4gICAgICAvLyBjb25zb2xlLmxvZyhwaXhlbC55KTtcbiAgICAgIC8vIGlmKHRoaXMuY3VyclkgPiBpLnkgJiYgdGhpcy5jdXJyWSA8IGkueSAtIDM4LjQgJiYgKGN1cnJYID4gaS54ICYmIGN1cnJYIDwgaS54ICsgMTguMjgpe1xuICAgICAgaWYodGhpcy5jdXJyWSA8IHBpeGVsLnkpe1xuICAgICAgICAvLyBjb2xsc2lvblR5cGUgPSBcInN0aWxsRVwiO1xuICAgICAgICBkb2N1bWVudC5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vdmluZ0UubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwaXhlbCA9IHRoaXMuY29udmVydFBpeGVsKG1vdmluZ0VbaV0pOy8vaW4gcGl4ZWxcbiAgICAgIC8vIGlmKHRoaXMuY3VyclkgPiBpLnkgJiYgdGhpcy5jdXJyWSA8IGkueSAtIDM4LjQgJiYgKGN1cnJYID4gaS54ICYmIGN1cnJYIDwgaS54ICsgMTguMjgpe1xuICAgICAgaWYgKCh0aGlzLmN1cnJZID09IHBpeGVsLnkpICYmICh0aGlzLmN1cnJYID09IHBpeGVsLngpKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbG9hZCgpO1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKXtcbiAgICAgIHZhciBwaXhlbCA9IHRoaXMuY29udmVydFBpeGVsKGl0ZW1zW2ldKTsvL2luIHBpeGVsXG4gICAgICBpZigodGhpcy5jdXJyWSA9PSBwaXhlbC55KSAmJiAodGhpcy5jdXJyWCA9PSBwaXhlbC54KSl7XG4gICAgICAgIGl0ZW1Db2xsZWN0ZWQgKys7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1Db2xsZWN0ZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHNldEludGVydmFsKGNoZWNrQ29sbGlzaW9uICwyMCk7Ly9jaGVjayBldmVyeSAyMG1zXG4gIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNoYW5nZVN0YXRlKTtcblxuXG4gICBjaGFuZ2VTdGF0ZShlKXtcbiAgICAvL3JlZ2lzdGVyIGEgZXZlbnQgbGlzdGVuZXJcbiAgICB2YXIga2V5ID0gZS5rZXlDb2RlID8gZS5rZXlDb2RlIDogZS53aGljaDtcbiAgICBpZiAoa2V5ID09IDM4KSB7XG4gICAgICBjb25zb2xlLmxvZyhcIllvdSBQcmVzc2VkIHRoZSBma2luZyBTcGFjZVwiKTtcbiAgICAgIHN3aXRjaChzdGF0ZSl7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBzdGF0ZSsrO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2hpdGVcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBzdGF0ZS0tO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQmxhY2tcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyO1xuIiwiaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlcic7XG5pbXBvcnQgT2JqIGZyb20gJy4vT2JqJztcbmltcG9ydCBQb3J0YWwgZnJvbSAnLi9Qb3J0YWwnO1xuLy8gaW1wb3J0IEVuZW15IGZyb20gLi9DaGFyYWN0ZXIuanM7XG5cblxuXG5jbGFzcyBHYW1lIHtcblx0Ly8gc2V0IHVwIGluc3RhbmNlIHZhcmlhYmxlc1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zKXtcblx0XHR0aGlzLmNhbnZhcyA9IG9wdGlvbnMuY2FudmFzO1xuXHRcdHRoaXMuY3R4ID0gb3B0aW9ucy5jb250ZXh0O1xuXHRcdHRoaXMuRElNRU5TSU9OID0gb3B0aW9ucy5ESU1FTlNJT047XG5cdFx0dGhpcy51bml2ZXJzZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdmVyc2UnKTtcblx0XHR0aGlzLnNwZWVkID0gb3B0aW9ucy5zcGVlZDtcblx0XHR0aGlzLnBsYW4gPSBvcHRpb25zLnBsYW47XG5cdFx0dGhpcy5HcmlkID0gW107XG5cdFx0dGhpcy5wb3J0YWxzQiA9IFtdO1xuXHRcdHRoaXMucG9ydGFsc1cgPSBbXTtcblx0XHR0aGlzLml0ZW1zID0gW107XG5cdFx0dGhpcy5tb3ZpbmdFID0gW107XG5cdFx0dGhpcy5zdGlsbEUgPSBbXTtcblx0XHR0aGlzLmNoYXJhY3RlciA9IG5ldyBDaGFyYWN0ZXIoMCx7R3JpZFg6NSxHcmlkWToyM30pO1xuXHRcdHRoaXMucG9pbnQgPSAwO1xuXHRcdHRoaXMud2luID0gZmFsc2U7XG5cdFx0dGhpcy5IX0JMT0NLUyA9IDEzO1xuXHRcdHRoaXMuSF9ESU1FTlRJT04gPSAyNTY7XG5cdFx0dGhpcy5IID0gdGhpcy5IX0RJTUVOU0lPTiAvIHRoaXMuSF9CTE9DS1M7XG5cdFx0dGhpcy5WX0JMT0NLUyA9IDI1O1xuXHRcdHRoaXMuVl9ESU1FTlRJT04gPSA5NjA7XG5cdFx0dGhpcy5WID0gdGhpcy5WX0RJTUVOU0lPTiAvIHRoaXMuVl9CTE9DS1M7XG5cdFx0dGhpcy5pbnRlcnZhbElEID0gMDtcblx0XHR0aGlzLm5vd3B0Qjtcblx0XHR0aGlzLm5vd3B0VztcblxuXHR9XG5cblx0Ly8gaW5pdGlhbCBzZXQgdXBcblx0aW5pU2V0VXAoKSB7XG5cdFx0Ly8gLy8gTm90ZTogdXNpbmcgYmluZCB0byBwYXNzIHRoZSBjbGFzcycgY29udGV4dCB0byB0aGUgY2FsbGJhY2tzXG5cdFx0Ly8gLy8gbm90IHN1cmUgaWYgdGhpcyBjYW4gYmUgaW1wcm92ZWQuXG5cdFx0Ly8gLy8gdGhpcy51bml2ZXJzZUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb29wQ2VsbHMuYmluZHRoaXMoKSk7XG5cdFx0Ly8gLy8gd2hlbiB1c2VyIGNsaWNrLCBzdGFydCB0aGUgZ2FtZVxuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpXG5cdFx0XHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2VsZi5wbGF5KCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc29sZS5sb2codGhpcy5wbGFuKTtcblx0XHRcdHRoaXMucGFyc2UodGhpcy5wbGFuKTtcblxuXHRcdFx0dGhpcy5jaGFyYWN0ZXIuaW5pdGlhbGl6ZUNoYXJhY3Rlcih0aGlzLmN0eCk7XG5cblx0XHRcdHRoaXMubm93cHRCID0gdGhpcy5wb3J0YWxzQi5sZW5ndGgtMTtcblx0XHRcdHRoaXMubm93cHRXID0gdGhpcy5wb3J0YWxzVy5sZW5ndGgtMTtcblxuXHRcdFx0Ly8gZHJhdyh0aGlzLkdyaWQpIHtcblxuXHRcdFx0Ly8gfVxuXHR9XG5cblxuXG5cdHBhcnNlKHBsYW4pIHtcblx0XHQvLyBsZXQgZ3JpZCA9IFtdO1xuXG5cdFx0Zm9yKHZhciBpPTA7aTxwbGFuLmxlbmd0aDtpKyspIHtcblx0XHRcdGxldCBhcnJheSA9IHBsYW5baV0uc3BsaXQoXCIgXCIpO1xuXG5cdFxuXHRcdFx0Zm9yKHZhciBqPTA7ajxhcnJheS5sZW5ndGg7aisrKSB7XG5cdFx0XHRcdGlmKGFycmF5W2pdID09IFwieHh4XCIpIHtcblx0XHRcdFx0XHR0aGlzLnN0aWxsRS5wdXNoKG5ldyBPYmooeyBHcmlkWDogMSszKmoraiwgR3JpZFk6IGkgfSkpO1xuXHRcdFx0XHRcdFxuXG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGVsc2UgaWYoYXJyYXlbal0gPT0gXCJtb2VcIikge1xuXHRcdFx0XHRcdHRoaXMuRW5lbWllcy5wdXNoKG5ldyBtb3ZpbmdFKHt9KSk7XG5cblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmKGFycmF5W2pdID09IFwicHRXXCIpIHtcblx0XHRcdFx0XHR0aGlzLnBvcnRhbHNXLnB1c2gobmV3IFBvcnRhbCgxLCB7IEdyaWRYOiAxKzMqaitqLCBHcmlkWTppfSkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZWxzZSBpZihhcnJheVtqXSA9PSBcInB0QlwiKSB7XG5cdFx0XHRcdFx0dGhpcy5wb3J0YWxzQi5wdXNoKG5ldyBQb3J0YWwgKDAsIHsgR3JpZFg6IDErMypqK2osIEdyaWRZOml9KSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcblx0XHR9XG5cblx0XHQvLyByZXR1cm4gZ3JpZDtcblx0fVxuXG5cblxuXG5cdHBsYXkoKXtcblx0XHQvLyByZW1vdmUgZ29kIG1vZGVcblx0XHQvLyB0aGlzLnVuaXZlcnNlRWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGxvb3BDZWxscyk7XG5cdFx0Ly8gZ2FtZSBsb29wXG5cdFx0Ly8gY29uc29sZS5sb2codGhpcy5zcGVlZCk7XG5cblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHR0aGlzLmludGVydmFsSUQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRcdHNlbGYuY2hhcmFjdGVyLmRyYXcoc2VsZi5jdHgpO1xuXHRcdFx0c2VsZi5jaGVja0NvbGxpc2lvbigpO1xuXHRcdH0sIDIwKTtcblx0XG5cdFx0Ly8gc2V0SW50ZXJ2YWwodGhpcy5jaGFyYWN0ZXIuY2hlY2tDb2xsaXNpb24odGhpcy5wb3J0YWxzLHRoaXMuZW5lbWllcyx0aGlzLml0ZW1zKSwgdGhpcy5zcGVlZCk7XG5cdFx0Ly8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5jaGFyYWN0ZXIuY2hhbmdlU3RhdGUpXG5cblx0fVxuXG5cdGxvZ2dpbmcoKSB7XG5cdFx0Y29uc29sZS5sb2coXCJsb2dnaW5nXCIpO1xuXHR9XG5cblx0Ly8gZHJhdyBncmlkXG5cdGRyYXdHcmlkKCkge1xuXHRcdHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyM3NzcnO1xuXHRcdHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XG5cdFx0Ly8gdmVydGljYWwgbGluZXNcblx0XHRmb3IgKGxldCBpID0gMTsgaTx0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9MRU5HVEg7IGkrKyl7XG5cdFx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcblx0XHRcdHRoaXMuY3R4Lm1vdmVUbyh0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCppLDApO1xuXHRcdFx0dGhpcy5jdHgubGluZVRvKHRoaXMuRElNRU5TSU9OLkNFTExfTEVOR1RIKmksIFxuXHRcdFx0XHR0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9IRUlHSFQqdGhpcy5ESU1FTlNJT04uQ0VMTF9IRUlHSFQpO1xuXHRcdFx0dGhpcy5jdHguc3Ryb2tlKCk7XG5cdFx0fVxuXHRcdC8vIGhvcml6b250YWwgbGluZXNcblx0XHRmb3IgKGxldCBpID0gMTsgaTx0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9IRUlHSFQ7IGkrKyl7XG5cdFx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcblx0XHRcdHRoaXMuY3R4Lm1vdmVUbygwLHRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUKmkpO1xuXHRcdFx0dGhpcy5jdHgubGluZVRvKHRoaXMuRElNRU5TSU9OLlVOSVZFUlNFX0xFTkdUSCp0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCwgXG5cdFx0XHRcdHRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUKmkpO1xuXHRcdFx0dGhpcy5jdHguc3Ryb2tlKCk7XG5cdFx0fVxuXHR9XG5cblx0ZHJhdygpIHtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnBvcnRhbHNCKTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnBvcnRhbHNXKTtcblx0XHQvL2RyYXcgc3RhdGljIHN0dWZmXHRcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLkdyaWQpO1xuXHRcdHZhciBjdHggPSB0aGlzLmN0eDtcblx0XHR2YXIgeHNoaWZ0ID0gdGhpcy5ESU1FTlNJT04uQ0VMTF9MRU5HVEg7XG5cdFx0dmFyIHlzaGlmdCA9IHRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0aWxsRS5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IHggPSB0aGlzLnN0aWxsRVtpXS5HcmlkWDtcblx0XHRcdGxldCB5ID0gdGhpcy5zdGlsbEVbaV0uR3JpZFk7XG5cblx0XHRcdHZhciBpbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0aW1hZ2VPYmoub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0Y3R4LmRyYXdJbWFnZSh0aGlzLCB4ICogeHNoaWZ0LCB5ICogeXNoaWZ0KTtcblxuXHRcdFx0fTtcblx0XHRcdGltYWdlT2JqLnNyYyA9IFwiLi9pbWFnZXMvT2JzdGFjbGUucG5nXCI7XG5cblx0XHRcdC8vIHRoaXMuY3R4LmZpbGxSZWN0KCwsMyp0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCx0aGlzLkRJTUVOU0lPTi5DRUxMX0hFSUdIVCk7XG5cblx0XHR9XG5cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wb3J0YWxzQi5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IHggPSB0aGlzLnBvcnRhbHNCW2ldLkdyaWRYO1xuXHRcdFx0bGV0IHkgPSB0aGlzLnBvcnRhbHNCW2ldLkdyaWRZO1xuXHRcdFx0aWYgKHRoaXMucG9ydGFsc0JbaV0uc3RhdGUgPT0gMCkge1xuXHRcdFx0XHR2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcblx0XHRcdFx0aW1hZ2VPYmoub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0XHRjdHguZHJhd0ltYWdlKHRoaXMsIHggKiB4c2hpZnQsIHkgKiB5c2hpZnQpO1xuXG5cdFx0XHRcdH07XG5cdFx0XHRcdGltYWdlT2JqLnNyYyA9IFwiLi9pbWFnZXMvcG90Qi5wbmdcIjtcblx0XHRcdH1cblx0XHR9XG5cblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvcnRhbHNXLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCB4ID0gdGhpcy5wb3J0YWxzV1tpXS5HcmlkWDtcblx0XHRcdFx0bGV0IHkgPSB0aGlzLnBvcnRhbHNXW2ldLkdyaWRZO1xuXHRcdFx0XHRpZiAodGhpcy5wb3J0YWxzV1tpXS5zdGF0ZSA9PSAwKSB7XG5cdFx0XHRcdFx0dmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG5cdFx0XHRcdFx0aW1hZ2VPYmoub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0XHRcdGN0eC5kcmF3SW1hZ2UodGhpcywgeCAqIHhzaGlmdCwgeSAqIHlzaGlmdCk7XG5cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdGltYWdlT2JqLnNyYyA9IFwiLi9pbWFnZXMvcG90Vy5wbmdcIjtcblx0XHRcdFx0fVxuXG5cblx0XHRcdH1cblxuXHRcdH1cblx0XG5cblxuXG5cdFx0XG5cblxuXG5cdFx0Ly8gZm9yICh2YXIgaT0wO2k8dGhpcy5wb3J0YWxzLmxlbmd0aDtpKyspIHtcblx0XHQvLyBcdGN0eC5maWxsU3R5bGU9XCIjRkYwMDAwXCI7XG5cdFx0Ly8gXHR0aGlzLmN0eC5maWxsUmVjdChpKkNFTExfTEVOR1RILGkqQ0VMTF9IRUlHSFQsMypDRUxMX0xFTkdUSCxDRUxMX0hFSUdIVCk7XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gZm9yICh2YXIgaT0wO2k8dGhpcy5wb3J0YWxzLmxlbmd0aDtpKyspIHtcblx0XHQvLyBcdGN0eC5maWxsU3R5bGU9XCJibHVlXCI7XG5cdFx0Ly8gXHR0aGlzLmN0eC5maWxsUmVjdChpKkNFTExfTEVOR1RILGkqQ0VMTF9IRUlHSFQsMypDRUxMX0xFTkdUSCxDRUxMX0hFSUdIVCk7XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gZm9yICh2YXIgaT0wO2k8dGhpcy5wb3J0YWxzLmxlbmd0aDtpKyspIHtcblx0XHQvLyBcdGN0eC5maWxsU3R5bGU9XCJ5ZWxsb3dcIjtcblx0XHQvLyBcdHRoaXMuY3R4LmZpbGxSZWN0KGkqQ0VMTF9MRU5HVEgsaSpDRUxMX0hFSUdIVCwzKkNFTExfTEVOR1RILENFTExfSEVJR0hUKTtcblx0XHQvLyB9XG5cblx0Y2hlY2tDb2xsaXNpb24oKSB7XG5cdFx0Ly8gdmFyIGNvbGxpc2lvblR5cGU7XG5cblx0XHQvLyAvL2xvb3AgdGhyb3VnaCBldmVyeSBvYmplY3QgaW4gdGhlIG1hcFxuXHRcdGNvbnNvbGUubG9nKHRoaXMucG9ydGFsc0JbdGhpcy5ub3dwdEJdKTtcblx0XHRcblx0XHQgIHZhciBwaXhlbCA9IGNvbnZlcnRQaXhlbCh0aGlzLnBvcnRhbHNCW3RoaXMubm93cHRCXSk7Ly9pbiBwaXhlbFxuXHRcdCAgY29uc29sZS5sb2cocGl4ZWwueCk7XG5cdFx0ICBjb25zb2xlLmxvZyh0aGlzLmNoYXJhY3Rlci5jdXJyWCk7XG5cdFx0ICBpZigodGhpcy5jaGFyYWN0ZXIuY3VyclkgPCBwaXhlbC55KSAmJiAoTWF0aC5hYnModGhpcy5jaGFyYWN0ZXIuY3VyclggLSBwaXhlbC54KTwxMCkgKXtcblx0XHRcdCAgY29uc29sZS5sb2coXCJjaHVhblwiKTtcblx0XHQgICAgdGhpcy5jaGFyYWN0ZXIuY2xlYXIodGhpcy5jdHgsNjAsNjApO1xuXHRcdFx0dGhpcy5ub3dwdEItLTtcblx0XG5cdFx0XHRwaXhlbCA9IGNvbnZlcnRQaXhlbCh0aGlzLnByb3RhbHNCW25vd3B0Ql0pO1xuXHRcdCAgICB0aGlzLmNoYXJhY3Rlci5jdXJyWCA9IHBpeGVsLngvL2luIGdyaWRcblx0XHQgICAgdGhpcy5jaGFyYWN0ZXIuY3VyclkgPSBwaXhlbC55O1xuXHRcdCAgICB2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcblx0XHQgICAgaW1hZ2VPYmoub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cblx0XHQgICAgICBjdHguZHJhd0ltYWdlKHRoaXMsIHBpeGVsLngsIHBpeGVsLnkpO1xuXG5cdFx0ICAgIH07XG5cdFx0ICAgIGltYWdlT2JqLnNyYyA9IFwiLi9pbWFnZXMvQmxhY2syLnBuZ1wiO1xuXG5cblx0XHQgICAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuXHRcdCAgICAvLyBjdHguYXJjKGN1cnJYICsgOS4xNCwgY3VyclksIDE3LCAwLCBNYXRoLlBJKjIsIHRydWUpOy8vcG9ydGFsIHNpemVcblx0XHQgICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTVERFwiO1xuXHRcdCAgICAvLyBjdHguZmlsbCgpO1xuXHRcdCAgICAvLyBjdHguY2xvc2VQYXRoKCk7XG5cdFx0ICB9XG5cdFx0ICBlbHNlIGlmICh0aGlzLmNoYXJhY3Rlci5jdXJyWSA8IHBpeGVsLnkpIHtcblx0XHRcdCAgdGhpcy5ub3dwdEItLTtcblx0XHRcdCAgLy8gdGhpcy5ub3dwdEI9ICh0aGlzLm5vd3B0Qit0aGlzLnBvcnRhbHNCLmxlbmd0aC0xKSV0aGlzLnBvcnRhbHNCLmxlbmd0aDtcblx0XHQgIH1cblxuXHRcdC8vIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wb3J0YWxzVy5sZW5ndGg7IGkrKykge1xuXHRcdC8vIFx0dmFyIHBpeGVsID0gY29udmVydFBpeGVsKHRoaXMucG9ydGFsc1dbaV0pOy8vaW4gcGl4ZWxcblx0XHQvLyBcdGlmICgodGhpcy5jaGFyYWN0ZXIuY3VyclkgPT0gcGl4ZWwueSkgJiYgKHRoaXMuY2hhcmFjdGVyLmN1cnJYID09IHBpeGVsLngpICYmICh0aGlzLnBvcnRhbHNXW2ldLnN0YXRlID09IHRoaXMuY2hhcmFjdGVyLnN0YXRlKSkge1xuXHRcdC8vIFx0XHR0aGlzLmNoYXJhY3Rlci5jbGVhcih0aGlzLmN0eCwgcGl4ZWwueCwgcGl4ZWwueSk7XG5cdFx0Ly8gXHRcdGNvbGxzaW9uVHlwZSA9IFwicG9ydGFsc1wiO1xuXHRcdC8vIFx0XHRwaXhlbCA9IGNvbnZlcnRQaXhlbCh0aGlzLnByb3RhbHNXW2kgLSAxXSk7XG5cdFx0Ly8gXHRcdHRoaXMuY2hhcmFjdGVyLmN1cnJYID0gcGl4ZWwueC8vaW4gZ3JpZFxuXHRcdC8vIFx0XHR0aGlzLmNoYXJhY3Rlci5jdXJyWSA9IHBpeGVsLnk7XG5cdFx0Ly8gXHRcdHZhciBpbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xuXHRcdC8vIFx0XHRpbWFnZU9iai5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuXHRcdC8vIFx0XHRcdGN0eC5kcmF3SW1hZ2UodGhpcywgcGl4ZWwueCwgcGl4ZWwueSk7XG5cblx0XHQvLyBcdFx0fTtcblx0XHQvLyBcdFx0aW1hZ2VPYmouc3JjID0gXCIuL2ltYWdlcy9CbGFjazIucG5nXCI7XG5cblxuXHRcdC8vIFx0XHQvLyBjdHguYmVnaW5QYXRoKCk7XG5cdFx0Ly8gXHRcdC8vIGN0eC5hcmMoY3VyclggKyA5LjE0LCBjdXJyWSwgMTcsIDAsIE1hdGguUEkqMiwgdHJ1ZSk7Ly9wb3J0YWwgc2l6ZVxuXHRcdC8vIFx0XHQvLyBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG5cdFx0Ly8gXHRcdC8vIGN0eC5maWxsKCk7XG5cdFx0Ly8gXHRcdC8vIGN0eC5jbG9zZVBhdGgoKTtcblx0XHQvLyBcdH1cblx0XHQvLyB9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RpbGxFLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcGl4ZWwgPSBjb252ZXJ0UGl4ZWwodGhpcy5zdGlsbEVbaV0pOy8vaW4gcGl4ZWxcblx0XHRcdC8vIGNvbnNvbGUubG9nKHBpeGVsLnkpO1xuXHRcdFx0Ly8gaWYodGhpcy5jdXJyWSA+IGkueSAmJiB0aGlzLmN1cnJZIDwgaS55IC0gMzguNCAmJiAoY3VyclggPiBpLnggJiYgY3VyclggPCBpLnggKyAxOC4yOCl7XG5cdFx0XHRpZiAodGhpcy5jaGFyYWN0ZXIuY3VyclkgPCAocGl4ZWwueSszOC40KSkge1xuXHRcdFx0XHQvLyBjb2xsc2lvblR5cGUgPSBcInN0aWxsRVwiO1xuXHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJRCk7XG5cdFx0XHRcdHRoaXMuY2hhcmFjdGVyLnJlYm9ybkNoYXJhY3Rlcih0aGlzLmN0eCk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiaSBhbSBleGVjdXRlZFwiKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tb3ZpbmdFLmxlbmd0aDsgaSsrKSB7XG5cdFx0Ly8gXHR2YXIgcGl4ZWwgPSBjb252ZXJ0UGl4ZWwodGhpcy5tb3ZpbmdFW2ldKTsvL2luIHBpeGVsXG5cdFx0Ly8gXHQvLyBpZih0aGlzLmN1cnJZID4gaS55ICYmIHRoaXMuY3VyclkgPCBpLnkgLSAzOC40ICYmIChjdXJyWCA+IGkueCAmJiBjdXJyWCA8IGkueCArIDE4LjI4KXtcblx0XHQvLyBcdGlmICgodGhpcy5jaGFyYWN0ZXIuY3VyclkgPCBwaXhlbC55KSAmJiAodGhpcy5jdXJyWCA9PSBwaXhlbC54KSkge1xuXHRcdC8vIFx0XHRkb2N1bWVudC5yZWxvYWQoKTtcblxuXHRcdC8vIFx0fVxuXHRcdC8vIH1cblxuXG5cdFx0Ly8gZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0Ly8gXHR2YXIgcGl4ZWwgPSBjb252ZXJ0UGl4ZWwodGhpcy5pdGVtc1tpXSk7Ly9pbiBwaXhlbFxuXHRcdC8vIFx0aWYgKCh0aGlzLmN1cnJZIDwgcGl4ZWwueSkgJiYgKHRoaXMuY3VyclggPT0gcGl4ZWwueCkpIHtcblx0XHQvLyBcdFx0dGhpcy5wb2ludCsrO1xuXHRcdC8vIFx0XHRjb25zb2xlLmxvZyh0aGlzLnBvaW50KTtcblx0XHQvLyBcdH1cblx0XHQvLyB9XG5cdH1cblxuXG59XG5cblxuXG5cbmZ1bmN0aW9uIGNvbnZlcnRQaXhlbChjb3VudGVyKXtcbiAgICB2YXIgSF9CTE9DS1MgPSAxMztcbiAgICB2YXIgSF9ESU1FTlRJT04gPSAyNTY7XG4gICAgdmFyIFZfQkxPQ0tTID0gMjU7XG4gICAgdmFyIFZfRElNRU5USU9OID0gOTYwO1xuICAgIHZhciBncmlkUGl4ZWwgPSB7XG5cdFx0eDogY291bnRlci5HcmlkWCAqIChIX0RJTUVOVElPTiAvIEhfQkxPQ0tTKSxcblx0XHR5OiAoY291bnRlci5HcmlkWSkgKiAoVl9ESU1FTlRJT04gLyBWX0JMT0NLUylcbiAgICB9XG4gICAgcmV0dXJuIGdyaWRQaXhlbDtcbn1cblxuXG4vLyBQcml2YXRlIG1ldGhvZHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIExvb3Agb3ZlciB0aGUgY2VsbHNcbmZ1bmN0aW9uIGxvb3BDZWxscyhlKSB7XG5cdHZhciB1bml2ZXJzZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdmVyc2UnKTtcblx0dmFyIHBhZ2VYID0gZS5wYWdlWCAtIHVuaXZlcnNlRWxlbS5vZmZzZXRMZWZ0O1xuXHR2YXIgcGFnZVkgPSBlLnBhZ2VZIC0gdW5pdmVyc2VFbGVtLm9mZnNldFRvcDtcblxuXHRmb3IgKGxldCBpID0gMDsgaTx0aGlzLnVuaXZlcnNlLmhlaWdodDsgaSsrKXtcblx0XHRmb3IgKGxldCBqPTA7IGo8dGhpcy51bml2ZXJzZS5sZW5ndGg7IGorKyl7XG5cdFx0XHRsZXQgY2VsbCA9IHRoaXMudW5pdmVyc2UuY2VsbHNbaV1bal07XG5cdFx0XHRoYW5kbGVDbGljayh0aGlzLCBjZWxsLCBwYWdlWCwgcGFnZVkpO1xuXHRcdH1cblx0fVxufVxuXG4vLyBnaXZlIGxpZmUgb3IgZGVhdGggdG8gdGhlIGNlbGwgY2xpY2tlZC5cbi8vIE5vdGU6IGJlY2F1c2UgbG9vcENlbGxzIGlzIGEgY2FsbGJhY2sgd2hpY2ggaGFzIHRoZSBjbGFzcyBjb250ZXh0XG4vLyBib3VuZCB0byBpdCwgdGhpcyBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgaW4gdGhlIGNhbGxiYWNrIGRvZXNuJ3QgZ2V0IHRoZVxuLy8gY29udGV4dCBpbXBsaWNpdGx5LCBzbyBJIG11c3QgcGFzcyBpdC4gRG9lc24ndCBmZWVsIGNsZWFuLi4uXG4vLyBmdW5jdGlvbiBoYW5kbGVDbGljayhzZWxmLCBjZWxsLCBwYWdlWCwgcGFnZVkpe1xuLy8gXHRpZiAocGFnZVggPiBjZWxsLnggJiYgcGFnZVggPCBjZWxsLngrc2VsZi51bml2ZXJzZS5jZWxsTGVuZ3RoICYmXG4vLyBcdFx0XHRcdHBhZ2VZID4gY2VsbC55ICYmIHBhZ2VZIDwgY2VsbC55K3NlbGYudW5pdmVyc2UuY2VsbEhlaWdodCApIHtcbi8vIFx0XHRjaGFuZ2VDZWxscyhzZWxmLCBjZWxsKTtcbi8vIFx0fVxuLy8gfVxuXG4vLyAxIHN0ZXAgPSAxIGdlbmVyYXRpb25cbmZ1bmN0aW9uIHN0ZXAoKXtcblxuXHRcbn1cblxuLypcbipcdHBhc3MgdGhlIGNlbGwgdGhyb3VnaCB0aGUgNCBydWxlcy4gXG5cdE5vdGU6IGNlbGxzIHNob3VsZCBub3QgdXBkYXRlIGhlcmUsIHNpbmNlIGFsdGVyaW5nIDEgYmVmb3JlIHlvdSBjYW5cblx0YW5hbHl6ZSB0aGUgb3RoZXJzIHdpbGwgY2F1c2UgZXJyb25lb3VzIG91dGNvbWVzLlxuKi9cbmZ1bmN0aW9uIHRyYW5zaXRpb25zKHNlbGYsIGNlbGwsIGNlbGxzVG9DaGFuZ2UpIHtcblx0dmFyIHVuaUxlbmd0aCA9IHNlbGYudW5pdmVyc2UubGVuZ3RoO1xuXHR2YXIgdW5pSGVpZ2h0ID0gc2VsZi51bml2ZXJzZS5oZWlnaHQ7XG5cdHZhciBuZWlnaGJvdXJzQWxpdmUgPSAwO1xuXHQvLyBHbyB0aHJvdWdoIHRoZSBuZWlnaGJvdXJzIG9mIGVhY2ggY2VsbC5cblx0Zm9yIChsZXQgaT0wOyBpPDg7IGkrKyl7XG5cdFx0bGV0IG5laWdoYm91cklEID0gY2VsbC5uZWlnaGJvdXJzW2ldO1xuXHRcdGlmIChuZWlnaGJvdXJJRCA+PSB1bmlMZW5ndGgqdW5pSGVpZ2h0IHx8IG5laWdoYm91cklEIDwwKSBjb250aW51ZTtcblx0XHRsZXQgbmVpZ2hib3VyID0gZ2V0Q2VsbEJ5SWQoc2VsZiwgbmVpZ2hib3VySUQpO1xuXHRcdGlmIChuZWlnaGJvdXIuc3RhdGUgPT09IDEpIG5laWdoYm91cnNBbGl2ZSsrO1xuXHR9XG5cdGlmIChjZWxsLnN0YXRlID09PSAxKXtcblx0XHQvLyB6ZSBsaWZlIHJ1bGVzXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIDEpIEFueSBsaXZlIGNlbGwgd2l0aCBmZXdlciB0aGFuIHR3byBsaXZlIG5laWdoYm91cnMgZGllcywgYXMgXG5cdFx0Ly8gaWYgY2F1c2VkIGJ5IHVuZGVyLXBvcHVsYXRpb24uXG5cdFx0Ly8gMikgQW55IGxpdmUgY2VsbCB3aXRoIHR3byBvciB0aHJlZSBsaXZlIG5laWdoYm91cnMgbGl2ZXMgb24gdG8gXG5cdFx0Ly8gdGhlIG5leHQgZ2VuZXJhdGlvbi5cblx0XHRpZiAobmVpZ2hib3Vyc0FsaXZlIDwgMikgY2VsbHNUb0NoYW5nZS5wdXNoKGNlbGwuaWQpO1xuXHRcdC8vIDMpIEFueSBsaXZlIGNlbGwgd2l0aCBtb3JlIHRoYW4gdGhyZWUgbGl2ZSBuZWlnaGJvdXJzIGRpZXMsIGFzIGlmIFxuXHRcdC8vIGJ5IG92ZXJjcm93ZGluZy5cblx0XHRlbHNlIGlmIChuZWlnaGJvdXJzQWxpdmUgPiAzKSBjZWxsc1RvQ2hhbmdlLnB1c2goY2VsbC5pZCk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gNCkgQW55IGRlYWQgY2VsbCB3aXRoIGV4YWN0bHkgdGhyZWUgbGl2ZSBuZWlnaGJvdXJzIGJlY29tZXMgYSBcblx0XHQvLyBsaXZlIGNlbGwsIGFzIGlmIGJ5IHJlcHJvZHVjdGlvbi5cblx0XHRpZiAobmVpZ2hib3Vyc0FsaXZlID09PSAzKSBjZWxsc1RvQ2hhbmdlLnB1c2goY2VsbC5pZCk7XG5cdH1cbn0gXG5cbmZ1bmN0aW9uIGNoYW5nZUNlbGxzKHNlbGYsIGNlbGwpIHtcblx0c2VsZi5jdHguZmlsbFN0eWxlID0gKGNlbGwuc3RhdGUpID8gJ3doaXRlJyA6ICcjMzMzJztcblx0c2VsZi5jdHguZmlsbFJlY3QoY2VsbC54KzEsIGNlbGwueSsxLCBcblx0XHRcdHNlbGYudW5pdmVyc2UuY2VsbExlbmd0aC0yLCBzZWxmLnVuaXZlcnNlLmNlbGxIZWlnaHQtMik7XG5cdGNlbGwuc3RhdGUgPSAoY2VsbC5zdGF0ZSkgPyAwIDogMTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2VsbEJ5SWQoc2VsZiwgaWQpIHtcblx0bGV0IHJvdyA9IE1hdGguZmxvb3IoaWQvc2VsZi51bml2ZXJzZS5sZW5ndGgpO1xuXHRsZXQgY29sdW1uID0gaWQgJSBzZWxmLnVuaXZlcnNlLmxlbmd0aDtcblx0cmV0dXJuIHNlbGYudW5pdmVyc2UuY2VsbHNbcm93XVtjb2x1bW5dO1xufSBcblxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7IiwiY2xhc3MgT2Jqe1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKXtcbiAgICB0aGlzLkdyaWRYID0gb3B0aW9ucy5HcmlkWDtcbiAgICB0aGlzLkdyaWRZID0gb3B0aW9ucy5HcmlkWTtcbiAgICAvLyB0aGlzLnN0YXRlID0gc3RhdGU7Ly8wIGlzIGEgY29sb3IwLCAxIGlzIGNvbG9yMVxuXHR0aGlzLkhfQkxPQ0tTID0gMTM7XG4gICAgdGhpcy5IX0RJTUVOVElPTiA9IDI1NjtcbiAgICB0aGlzLlZfQkxPQ0tTID0gMjU7XG4gICAgdGhpcy5WX0RJTUVOVElPTiA9IDk2MDtcblxuICB9XG5cblxuXG5cbiAvLyAgY29udmVydFBpeGVsKGNvdW50ZXIpIHtcblx0Ly8gICB2YXIgeCA9IGNvdW50ZXIuR3JpZFggKiAodGhpcy5IX0RJTUVOVElPTiAvIHRoaXMuSF9CTE9DS1MpO1xuXHQvLyAgIGNvbnNvbGUubG9nKFwieGlzXCIreCk7XG5cdC8vICAgdmFyIGdyaWRQaXhlbCA9IHtcblx0Ly8gXHQgIHg6IGNvdW50ZXIuR3JpZFggKiAodGhpcy5IX0RJTUVOVElPTiAvIHRoaXMuSF9CTE9DS1MpLFxuXHQvLyBcdCAgeTogKGNvdW50ZXIuR3JpZFkgKyAxKSAqICh0aGlzLlZfRElNRU5USU9OIC8gdGhpcy5WX0JMT0NLUylcblx0Ly8gICB9XG4gLy8gICAgcmV0dXJuIGdyaWRQaXhlbDtcblx0Ly8gfVxuXG5cdCBjbGVhcihjdHgseCx5KSB7XG5cdFx0IC8vIGNvbnNvbGUubG9nKHRoaXMuSF9ESU1FTlRJT04gLyB0aGlzLkhfQkxPQ0tTKTtcblx0XHQgLy8gLy8gY29uc29sZS5sb2codGhpcy5HcmlkWCk7XG5cdFx0IC8vIHZhciB4ID0gdGhpcy5HcmlkWCAqICh0aGlzLkhfRElNRU5USU9OIC8gdGhpcy5IX0JMT0NLUyk7XG5cdFx0IC8vIHZhciB5ID0gKHRoaXMuR3JpZFkpICogKHRoaXMuVl9ESU1FTlRJT04gLyB0aGlzLlZfQkxPQ0tTKTtcblx0XHQgLy8gY29uc29sZS5sb2coXCJ4IGlzIFwiKyB4KTtcblx0XHQgLy8gY29uc29sZS5sb2coXCJ5IGlzIFwiICsgeSk7XG5cblx0ICAvLyBjdHguY2xlYXJSZWN0KHgseSwgMyAqICh0aGlzLkhfRElNRU5USU9OIC8gdGhpcy5IX0JMT0NLUyksIDErKHRoaXMuVl9ESU1FTlRJT04gLyB0aGlzLlZfQkxPQ0tTKSk7XG5cdFx0IGN0eC5jbGVhclJlY3QoeCwgeSwgNjAsIDUwKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9iajtcbiIsImltcG9ydCBPYmogZnJvbSAnLi9PYmonO1xuXG5jbGFzcyBQb3J0YWwgZXh0ZW5kcyBPYmp7XG4gIGNvbnN0cnVjdG9yKHN0YXRlLG9wdGlvbnMpe1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgfVxufVxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBQb3J0YWw7XG4iXX0=
