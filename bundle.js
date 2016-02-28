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
	plan: ["xxx xxx xxx", "kkk kkk kkk", "xxx xxx kkk", "kkk kkk kkk", "kkk xxx xxx", "kkk kkk kkk", "kkk xxx kkk", "kkk kkk kkk", "xxx xxx kkk", "kkk kkk kkk", "kkk xxx xxx", "kkk kkk kkk", "kkk xxx kkk", "kkk kkk kkk", "xxx xxx kkk", "kkk kkk kkk", "kkk xxx xxx", "kkk kkk kkk", "kkk ptB kkk"]
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
      console.log("drawing..");

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

var _PortalJs = require('./Portal.js');

var _PortalJs2 = _interopRequireDefault(_PortalJs);

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
		this.portals = [];
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
						this.stillE.push(new _Obj2['default']({ GridX: j, GridY: i }));
					} else if (array[j] == "moe") {
						this.Enemies.push(new movingE({}));
					} else if (array[j] == "ptW") {
						this.portals.push(new _PortalJs2['default'](1, { GrixX: j, GridY: i }));
					}

					// else if(array[j] == "ptB") {
					// 	this.portals.push(new Portal(0, { GridX: j, GridY:i} ));
					// }
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

					ctx.drawImage(imageObj, (1 + 3 * x + x) * xshift, y * yshift);
				};
				imageObj.src = "./images/Obstacle.png";

				// this.ctx.fillRect(,,3*this.DIMENSION.CELL_LENGTH,this.DIMENSION.CELL_HEIGHT);
			};

			for (var i = 0; i < this.stillE.length; i++) {
				var imageObj;

				_loop();
			}

			var _loop2 = function () {
				var x = _this.portals[i].GridX;
				var y = _this.portals[i].GridY;
				if (portals[i].state == 0) {
					imageObj = new Image();

					imageObj.onload = function () {

						ctx.drawImage(imageObj, (1 + 3 * x + x) * xshift, y * yshift);
					};
					imageObj.src = "./images/potB.png";
				} else {
					imageObj = new Image();

					imageObj.onload = function () {

						ctx.drawImage(imageObj, (1 + 3 * x + x) * xshift, y * yshift);
					};
					imageObj.src = "./images/potB.png";
				}
			};

			for (var i = 0; i < this.portals.length; i++) {
				var imageObj;
				var imageObj;

				_loop2();
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
			// for(var i = 0; i < portals.length; i++){
			//   var pixel = convertPixel(portals[i]);//in pixel
			//   if((this.currY == pixel.y) && (this.currX == pixel.x) && (this.portals[i].state==this.character.state)){
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

			for (var i = 0; i < this.movingE.length; i++) {
				var pixel = convertPixel(this.movingE[i]); //in pixel
				// if(this.currY > i.y && this.currY < i.y - 38.4 && (currX > i.x && currX < i.x + 18.28){
				if (this.character.currY < pixel.y && this.currX == pixel.x) {
					document.reload();
				}
			}

			for (var i = 0; i < this.items.length; i++) {
				var pixel = convertPixel(this.items[i]); //in pixel
				if (this.currY < pixel.y && this.currX == pixel.x) {
					this.point++;
					console.log(this.point);
				}
			}
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

},{"./Character":2,"./Obj":4,"./Portal.js":5}],4:[function(require,module,exports){
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
						console.log("x is " + x);
						console.log("y is " + y);

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

},{"./Obj":4}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGlhbnRhbmcvcHJvZy9wb3J0YWwvYXBwLmpzIiwiL1VzZXJzL2RpYW50YW5nL3Byb2cvcG9ydGFsL2pzL0NoYXJhY3Rlci5qcyIsIi9Vc2Vycy9kaWFudGFuZy9wcm9nL3BvcnRhbC9qcy9HYW1lLmpzIiwiL1VzZXJzL2RpYW50YW5nL3Byb2cvcG9ydGFsL2pzL09iai5qcyIsIi9Vc2Vycy9kaWFudGFuZy9wcm9nL3BvcnRhbC9qcy9Qb3J0YWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O3NCQ0FpQixXQUFXOzs7OztBQUc1QixJQUFNLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDbEIsSUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDOztBQUVuQixJQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDM0IsSUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDOztBQUUzQixJQUFNLFNBQVMsR0FBRzs7QUFFakIsZ0JBQWUsRUFBRSxFQUFFO0FBQ25CLGdCQUFlLEVBQUMsRUFBRTtBQUNsQixZQUFXLEVBQUUsR0FBRyxHQUFDLGVBQWU7QUFDaEMsWUFBVyxFQUFFLEdBQUcsR0FBQyxlQUFlOztDQUVoQyxDQUFBOztBQUVELElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDakQsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFbEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyx3QkFBUzs7O0FBR3JCLE9BQU0sRUFBTixNQUFNO0FBQ04sUUFBTyxFQUFFLEdBQUc7QUFDWixVQUFTLEVBQVQsU0FBUztBQUNULE1BQUssRUFBRSxFQUFFO0FBQ1QsS0FBSSxFQUFFLENBQUMsYUFBYSxFQUNuQixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEs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QUFPLEdBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEIsYUFBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7OztBQUd6QixTQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQzVCOzs7U0FuQ0csR0FBRzs7O0FBc0NULE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7O29CQ3RDTCxPQUFPOzs7O0lBRWpCLE1BQU07WUFBTixNQUFNOztBQUNDLFdBRFAsTUFBTSxDQUNFLEtBQUssRUFBQyxPQUFPLEVBQUM7MEJBRHRCLE1BQU07O0FBRVIsK0JBRkUsTUFBTSw2Q0FFRixPQUFPLEVBQUU7QUFDZixRQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztHQUNwQjs7U0FKRyxNQUFNIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBHYW1lIGZyb20gJy4vanMvR2FtZSc7XG5cbi8vIGluIHBpeGVsc1xuY29uc3QgV0lEVEggPSAyNTY7XG5jb25zdCBIRUlHSFQgPSA5NjA7XG4vLyBpbiBjZWxsIHVuaXRzXG5jb25zdCBVTklWRVJTRV9MRU5HVEggPSAxMztcbmNvbnN0IFVOSVZFUlNFX0hFSUdIVCA9IDI1O1xuXG5jb25zdCBESU1FTlNJT04gPSB7XG5cdFxuXHRVTklWRVJTRV9MRU5HVEg6IDEzLFxuXHRVTklWRVJTRV9IRUlHSFQ6MjUsXG5cdENFTExfTEVOR1RIOiAyNTYvVU5JVkVSU0VfTEVOR1RILFxuXHRDRUxMX0hFSUdIVDogOTYwL1VOSVZFUlNFX0hFSUdIVFxuXG59XG5cbnZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdmVyc2UnKTtcbnZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxudmFyIGdhbWVzID0gW25ldyBHYW1lKHtcblx0Ly8gZW5oYW5jZWQgb2JqZWN0IGxpdGVyYWxzXG5cdC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuXHRjYW52YXMsXG5cdGNvbnRleHQ6IGN0eCxcblx0RElNRU5TSU9OLFxuXHRzcGVlZDogMjAsXG5cdHBsYW46IFtcInh4eCB4eHggeHh4XCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwieHh4IHh4eCBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IHh4eFwiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayB4eHgga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwieHh4IHh4eCBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IHh4eFwiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayB4eHgga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwieHh4IHh4eCBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IHh4eFwiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBwdEIga2trXCJdXG59KSwgXTtcblxuXG5cbmZ1bmN0aW9uIGNob29zZUdhbWUobnVtKSB7XG5cdC8vIGdhbWVzW251bV0uZHJhd0dyaWQoKTtcblx0Z2FtZXNbbnVtXS5pbmlTZXRVcCgpO1xuXHRnYW1lc1tudW1dLmRyYXcoKTtcblx0Ly8gZ2FtZXNbbnVtXS5wbGF5KCk7XG59XG5cblxuY2hvb3NlR2FtZSgwKTtcblxuXG5cbiIsImltcG9ydCBPYmogZnJvbSAnLi9PYmonO1xuXG5jbGFzcyBDaGFyYWN0ZXIgZXh0ZW5kcyBPYmp7XG4gIGNvbnN0cnVjdG9yKHN0YXRlLG9wdGlvbnMpe1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLmN1cnJZID0gdGhpcy5jb252ZXJ0UGl4ZWwob3B0aW9ucykueTsvL2luIHBpeGVsOyBZIERFQ1JFQVNFU1xuICAgIHRoaXMuY3VyclggPSB0aGlzLmNvbnZlcnRQaXhlbChvcHRpb25zKS54O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICAvLyBmdW5jdGlvbiBjb252ZXJ0T3B0aW9uc1RvUGl4ZWwob3B0aW9ucyl7XG4gIC8vICAgdmFyIEhfQkxPQ0tTID0gMTQ7XG4gIC8vICAgdmFyIEhfRElNRU5USU9OID0gMjU2O1xuICAvLyAgIHZhciBWX0JMT0NLUyA9IDI1O1xuICAvLyAgIHZhciBWX0RJTUVOVElPTiA9IDk2MDtcbiAgLy8gICB2YXIgZ3JpZFBpeGVsLnggPSBvcHRpb25zLnggKiAoSF9ESU1FTlRJT04gLyBIX0JMT0NLUyk7XG4gIC8vICAgdmFyIGdyaWRQaXhlbC55ID0gKG9wdGlvbnMueSsxKSAqIChWX0RJTUVOVElPTiAvIFZfQkxPQ0tTKTtcbiAgLy8gICByZXR1cm4gZ3JpZFBpeGVsO1xuICAvLyB9XG5cbiBpbml0aWFsaXplQ2hhcmFjdGVyKGN0eCl7XG4gLy9vbmx5IGFibGUgdG8gYWNjZXNzICd0aGlzJyBvbiB0aGUgb3V0c2lkZVxuIFxuICAgXG4gICAgIHZhciB4ID0gdGhpcy5jdXJyWCA7XG4gICAgIHZhciB5ID0gdGhpcy5jdXJyWSA7XG4gICAgIHZhciBpbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xuICAgICBpbWFnZU9iai5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2VPYmosIHgsIHkpO1xuXG4gICAgIH07XG4gICAgIGltYWdlT2JqLnNyYyA9IFwiLi9pbWFnZXMvQmxhY2syLnBuZ1wiO1xuXG4gICAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgLy8gY3R4LmFyYygxMjAsIDkwMCwgMTcsIDAsIE1hdGguUEkqMiwgdHJ1ZSk7Ly9jaGFyYWN0ZXIgc2l6ZVxuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICAvLyBjdHguZmlsbCgpO1xuICAgIC8vIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIHJlYm9ybkNoYXJhY3RlciAoY3R4KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBieCA9IHRoaXMuY3Vyclg7XG4gICAgdmFyIGJ5ID0gdGhpcy5jdXJyWTtcbiAgXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuY2xlYXIoY3R4LCBieCwgYnkpO1xuICAgICAgdmFyIHggPSBzZWxmLmNvbnZlcnRQaXhlbChzZWxmLm9wdGlvbnMpLng7XG4gICAgICB2YXIgeSA9IHNlbGYuY29udmVydFBpeGVsKHNlbGYub3B0aW9ucykueTtcbiAgICAgIHNlbGYuY3VyclggPSB4O1xuICAgICAgc2VsZi5jdXJyWSA9IHk7XG4gICAgICB2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltYWdlT2JqLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2VPYmosIHgsIHkpO1xuXG4gICAgICB9O1xuICAgICAgaW1hZ2VPYmouc3JjID0gXCIuL2ltYWdlcy9CbGFjazIucG5nXCI7XG4gICAgfSwgNTApO1xuICB9XG5cbiAgbG9nKCkge1xuICAgIGNvbnNvbGUubG9nKFwiZG9pbmdcIik7XG4gIH1cblxuICAgZHJhdyhjdHgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZHJhd2luZy4uXCIpO1xuXG4gICAgXG4gICAgdGhpcy5jbGVhcihjdHgsdGhpcy5jdXJyWCx0aGlzLmN1cnJZKTtcbiAgICBcbiAgICB2YXIgZHkgPSAtMTtcbiAgICB0aGlzLmN1cnJZICs9IGR5O1xuXG4gICAgdmFyIHggPSB0aGlzLmN1cnJYO1xuICAgIHZhciB5ID0gdGhpcy5jdXJyWTtcbiAgICB2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZU9iai5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZU9iaiwgeCwgeSk7XG5cbiAgICB9O1xuICAgIGltYWdlT2JqLnNyYyA9IFwiLi9pbWFnZXMvQmxhY2syLnBuZ1wiO1xuXG4gIH1cblxuICAvLyBzZXRJbnRlcnZhbChkcmF3ICwyMCk7Ly9jaGVjayBldmVyeSAyMG1zXG5cbiAgIGNvbnZlcnRQaXhlbChjb3VudGVyKXtcbiAgICAvLyB2YXIgSF9CTE9DS1MgPSAxNDtcbiAgICAvLyB2YXIgSF9ESU1FTlRJT04gPSAyNTY7XG4gICAgLy8gdmFyIFZfQkxPQ0tTID0gMjU7XG4gICAgLy8gdmFyIFZfRElNRU5USU9OID0gOTYwO1xuICAgIHZhciBncmlkUGl4ZWwgPSB7XG4gICAgICB4OiBjb3VudGVyLkdyaWRYICogKHRoaXMuSF9ESU1FTlRJT04gLyB0aGlzLkhfQkxPQ0tTKSxcbiAgICAgIHk6IChjb3VudGVyLkdyaWRZKSAqICh0aGlzLlZfRElNRU5USU9OIC8gdGhpcy5WX0JMT0NLUylcbiAgICB9XG4gICAgcmV0dXJuIGdyaWRQaXhlbDtcbiAgfVxuXG5cbiAgIGNoZWNrQ29sbGlzaW9uKHN0aWxsRSxtb3ZpbmdFLHBvcnRhbHMsaXRlbXMpe1xuICAgIHZhciBjb2xsaXNpb25UeXBlO1xuXG4gICAgLy8gLy9sb29wIHRocm91Z2ggZXZlcnkgb2JqZWN0IGluIHRoZSBtYXBcbiAgICAvLyBmb3IodmFyIGkgPSAwOyBpIDwgcG9ydGFscy5sZW5ndGg7IGkrKyl7XG4gICAgLy8gICB2YXIgcGl4ZWwgPSB0aGlzLmNvbnZlcnRQaXhlbChwb3J0YWxzW2ldKTsvL2luIHBpeGVsXG4gICAgLy8gICBpZigodGhpcy5jdXJyWSA9PSBwaXhlbC55KSAmJiAodGhpcy5jdXJyWCA9PSBwaXhlbC54KSl7XG4gICAgLy8gICAgIHRoaXMuY2xlYXIoKTtcbiAgICAvLyAgICAgY29sbHNpb25UeXBlID0gXCJwb3J0YWxzXCI7XG4gICAgLy8gICAgIGN1cnJYID0gcG9ydGFsc1tpKzFdLkdyaWRYOy8vaW4gZ3JpZFxuICAgIC8vICAgICBjdXJyWSA9IHBvcnRhbHNbaSsxXS5HcmlkWTtcbiAgICAvLyAgICAgdmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG4gICAgLy8gICAgIGltYWdlT2JqLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZU9iaiwgeCwgeSk7XG5cbiAgICAvLyAgICAgfTtcbiAgICAvLyAgICAgaW1hZ2VPYmouc3JjID0gXCIuL2ltYWdlcy9TdGFyMi5wbmdcIjtcblxuXG4gICAgLy8gICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyAgICAgLy8gY3R4LmFyYyhjdXJyWCArIDkuMTQsIGN1cnJZLCAxNywgMCwgTWF0aC5QSSoyLCB0cnVlKTsvL3BvcnRhbCBzaXplXG4gICAgLy8gICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICAvLyAgICAgLy8gY3R4LmZpbGwoKTtcbiAgICAvLyAgICAgLy8gY3R4LmNsb3NlUGF0aCgpO1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzdGlsbEUubGVuZ3RoOyBpKyspe1xuICAgICAgdmFyIHBpeGVsID0gdGhpcy5jb252ZXJ0UGl4ZWwoc3RpbGxFW2ldKTsvL2luIHBpeGVsXG4gICAgICAvLyBjb25zb2xlLmxvZyhwaXhlbC55KTtcbiAgICAgIC8vIGlmKHRoaXMuY3VyclkgPiBpLnkgJiYgdGhpcy5jdXJyWSA8IGkueSAtIDM4LjQgJiYgKGN1cnJYID4gaS54ICYmIGN1cnJYIDwgaS54ICsgMTguMjgpe1xuICAgICAgaWYodGhpcy5jdXJyWSA8IHBpeGVsLnkpe1xuICAgICAgICAvLyBjb2xsc2lvblR5cGUgPSBcInN0aWxsRVwiO1xuICAgICAgICBkb2N1bWVudC5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vdmluZ0UubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwaXhlbCA9IHRoaXMuY29udmVydFBpeGVsKG1vdmluZ0VbaV0pOy8vaW4gcGl4ZWxcbiAgICAgIC8vIGlmKHRoaXMuY3VyclkgPiBpLnkgJiYgdGhpcy5jdXJyWSA8IGkueSAtIDM4LjQgJiYgKGN1cnJYID4gaS54ICYmIGN1cnJYIDwgaS54ICsgMTguMjgpe1xuICAgICAgaWYgKCh0aGlzLmN1cnJZID09IHBpeGVsLnkpICYmICh0aGlzLmN1cnJYID09IHBpeGVsLngpKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbG9hZCgpO1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKXtcbiAgICAgIHZhciBwaXhlbCA9IHRoaXMuY29udmVydFBpeGVsKGl0ZW1zW2ldKTsvL2luIHBpeGVsXG4gICAgICBpZigodGhpcy5jdXJyWSA9PSBwaXhlbC55KSAmJiAodGhpcy5jdXJyWCA9PSBwaXhlbC54KSl7XG4gICAgICAgIGl0ZW1Db2xsZWN0ZWQgKys7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1Db2xsZWN0ZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHNldEludGVydmFsKGNoZWNrQ29sbGlzaW9uICwyMCk7Ly9jaGVjayBldmVyeSAyMG1zXG4gIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNoYW5nZVN0YXRlKTtcblxuXG4gICBjaGFuZ2VTdGF0ZShlKXtcbiAgICAvL3JlZ2lzdGVyIGEgZXZlbnQgbGlzdGVuZXJcbiAgICB2YXIga2V5ID0gZS5rZXlDb2RlID8gZS5rZXlDb2RlIDogZS53aGljaDtcbiAgICBpZiAoa2V5ID09IDM4KSB7XG4gICAgICBjb25zb2xlLmxvZyhcIllvdSBQcmVzc2VkIHRoZSBma2luZyBTcGFjZVwiKTtcbiAgICAgIHN3aXRjaChzdGF0ZSl7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBzdGF0ZSsrO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2hpdGVcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBzdGF0ZS0tO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQmxhY2tcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyO1xuIiwiaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlcic7XG5pbXBvcnQgT2JqIGZyb20gJy4vT2JqJztcbmltcG9ydCBQb3J0YWwgZnJvbSAnLi9Qb3J0YWwuanMnO1xuLy8gaW1wb3J0IEVuZW15IGZyb20gLi9DaGFyYWN0ZXIuanM7XG5cblxuXG5jbGFzcyBHYW1lIHtcblx0Ly8gc2V0IHVwIGluc3RhbmNlIHZhcmlhYmxlc1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zKXtcblx0XHR0aGlzLmNhbnZhcyA9IG9wdGlvbnMuY2FudmFzO1xuXHRcdHRoaXMuY3R4ID0gb3B0aW9ucy5jb250ZXh0O1xuXHRcdHRoaXMuRElNRU5TSU9OID0gb3B0aW9ucy5ESU1FTlNJT047XG5cdFx0dGhpcy51bml2ZXJzZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdmVyc2UnKTtcblx0XHR0aGlzLnNwZWVkID0gb3B0aW9ucy5zcGVlZDtcblx0XHR0aGlzLnBsYW4gPSBvcHRpb25zLnBsYW47XG5cdFx0dGhpcy5HcmlkID0gW107XG5cdFx0dGhpcy5wb3J0YWxzID0gW107XG5cdFx0dGhpcy5pdGVtcyA9IFtdO1xuXHRcdHRoaXMubW92aW5nRSA9IFtdO1xuXHRcdHRoaXMuc3RpbGxFID0gW107XG5cdFx0dGhpcy5jaGFyYWN0ZXIgPSBuZXcgQ2hhcmFjdGVyKDAse0dyaWRYOjUsR3JpZFk6MjN9KTtcblx0XHR0aGlzLnBvaW50ID0gMDtcblx0XHR0aGlzLndpbiA9IGZhbHNlO1xuXHRcdHRoaXMuSF9CTE9DS1MgPSAxMztcblx0XHR0aGlzLkhfRElNRU5USU9OID0gMjU2O1xuXHRcdHRoaXMuSCA9IHRoaXMuSF9ESU1FTlNJT04gLyB0aGlzLkhfQkxPQ0tTO1xuXHRcdHRoaXMuVl9CTE9DS1MgPSAyNTtcblx0XHR0aGlzLlZfRElNRU5USU9OID0gOTYwO1xuXHRcdHRoaXMuViA9IHRoaXMuVl9ESU1FTlNJT04gLyB0aGlzLlZfQkxPQ0tTO1xuXHRcdHRoaXMuaW50ZXJ2YWxJRCA9IDA7XG5cblx0fVxuXG5cdC8vIGluaXRpYWwgc2V0IHVwXG5cdGluaVNldFVwKCkge1xuXHRcdC8vIC8vIE5vdGU6IHVzaW5nIGJpbmQgdG8gcGFzcyB0aGUgY2xhc3MnIGNvbnRleHQgdG8gdGhlIGNhbGxiYWNrc1xuXHRcdC8vIC8vIG5vdCBzdXJlIGlmIHRoaXMgY2FuIGJlIGltcHJvdmVkLlxuXHRcdC8vIC8vIHRoaXMudW5pdmVyc2VFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9vcENlbGxzLmJpbmR0aGlzKCkpO1xuXHRcdC8vIC8vIHdoZW4gdXNlciBjbGljaywgc3RhcnQgdGhlIGdhbWVcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKVxuXHRcdFx0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHNlbGYucGxheSgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGNvbnNvbGUubG9nKHRoaXMucGxhbik7XG5cdFx0XHR0aGlzLnBhcnNlKHRoaXMucGxhbik7XG5cblx0XHRcdHRoaXMuY2hhcmFjdGVyLmluaXRpYWxpemVDaGFyYWN0ZXIodGhpcy5jdHgpO1xuXG5cdFx0XHQvLyBkcmF3KHRoaXMuR3JpZCkge1xuXG5cdFx0XHQvLyB9XG5cdH1cblxuXG5cblx0cGFyc2UocGxhbikge1xuXHRcdC8vIGxldCBncmlkID0gW107XG5cblx0XHRmb3IodmFyIGk9MDtpPHBsYW4ubGVuZ3RoO2krKykge1xuXHRcdFx0bGV0IGFycmF5ID0gcGxhbltpXS5zcGxpdChcIiBcIik7XG5cblx0XG5cdFx0XHRmb3IodmFyIGo9MDtqPGFycmF5Lmxlbmd0aDtqKyspIHtcblx0XHRcdFx0aWYoYXJyYXlbal0gPT0gXCJ4eHhcIikge1xuXHRcdFx0XHRcdHRoaXMuc3RpbGxFLnB1c2gobmV3IE9iaih7IEdyaWRYOiBqLCBHcmlkWTogaSB9KSk7XG5cdFx0XHRcdFx0XG5cblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0ZWxzZSBpZihhcnJheVtqXSA9PSBcIm1vZVwiKSB7XG5cdFx0XHRcdFx0dGhpcy5FbmVtaWVzLnB1c2gobmV3IG1vdmluZ0Uoe30pKTtcblxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYoYXJyYXlbal0gPT0gXCJwdFdcIikge1xuXHRcdFx0XHRcdHRoaXMucG9ydGFscy5wdXNoKG5ldyBQb3J0YWwoMSwgeyBHcml4WDogaiwgR3JpZFk6aX0pKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGVsc2UgaWYoYXJyYXlbal0gPT0gXCJwdEJcIikge1xuXHRcdFx0XHQvLyBcdHRoaXMucG9ydGFscy5wdXNoKG5ldyBQb3J0YWwoMCwgeyBHcmlkWDogaiwgR3JpZFk6aX0gKSk7XG5cdFx0XHRcdC8vIH1cblx0XHRcdH1cblx0XHRcblx0XHR9XG5cblx0XHQvLyByZXR1cm4gZ3JpZDtcblx0fVxuXG5cblxuXG5cdHBsYXkoKXtcblx0XHQvLyByZW1vdmUgZ29kIG1vZGVcblx0XHQvLyB0aGlzLnVuaXZlcnNlRWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGxvb3BDZWxscyk7XG5cdFx0Ly8gZ2FtZSBsb29wXG5cdFx0Ly8gY29uc29sZS5sb2codGhpcy5zcGVlZCk7XG5cblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHR0aGlzLmludGVydmFsSUQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRcdHNlbGYuY2hhcmFjdGVyLmRyYXcoc2VsZi5jdHgpO1xuXHRcdFx0c2VsZi5jaGVja0NvbGxpc2lvbigpO1xuXHRcdH0sIDIwKTtcblx0XG5cdFx0Ly8gc2V0SW50ZXJ2YWwodGhpcy5jaGFyYWN0ZXIuY2hlY2tDb2xsaXNpb24odGhpcy5wb3J0YWxzLHRoaXMuZW5lbWllcyx0aGlzLml0ZW1zKSwgdGhpcy5zcGVlZCk7XG5cdFx0Ly8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5jaGFyYWN0ZXIuY2hhbmdlU3RhdGUpXG5cblx0fVxuXG5cdGxvZ2dpbmcoKSB7XG5cdFx0Y29uc29sZS5sb2coXCJsb2dnaW5nXCIpO1xuXHR9XG5cblx0Ly8gZHJhdyBncmlkXG5cdGRyYXdHcmlkKCkge1xuXHRcdHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyM3NzcnO1xuXHRcdHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XG5cdFx0Ly8gdmVydGljYWwgbGluZXNcblx0XHRmb3IgKGxldCBpID0gMTsgaTx0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9MRU5HVEg7IGkrKyl7XG5cdFx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcblx0XHRcdHRoaXMuY3R4Lm1vdmVUbyh0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCppLDApO1xuXHRcdFx0dGhpcy5jdHgubGluZVRvKHRoaXMuRElNRU5TSU9OLkNFTExfTEVOR1RIKmksIFxuXHRcdFx0XHR0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9IRUlHSFQqdGhpcy5ESU1FTlNJT04uQ0VMTF9IRUlHSFQpO1xuXHRcdFx0dGhpcy5jdHguc3Ryb2tlKCk7XG5cdFx0fVxuXHRcdC8vIGhvcml6b250YWwgbGluZXNcblx0XHRmb3IgKGxldCBpID0gMTsgaTx0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9IRUlHSFQ7IGkrKyl7XG5cdFx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcblx0XHRcdHRoaXMuY3R4Lm1vdmVUbygwLHRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUKmkpO1xuXHRcdFx0dGhpcy5jdHgubGluZVRvKHRoaXMuRElNRU5TSU9OLlVOSVZFUlNFX0xFTkdUSCp0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCwgXG5cdFx0XHRcdHRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUKmkpO1xuXHRcdFx0dGhpcy5jdHguc3Ryb2tlKCk7XG5cdFx0fVxuXHR9XG5cblx0ZHJhdygpIHtcblx0XHQvL2RyYXcgc3RhdGljIHN0dWZmXHRcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLkdyaWQpO1xuXHRcdHZhciBjdHggPSB0aGlzLmN0eDtcblx0XHR2YXIgeHNoaWZ0ID0gdGhpcy5ESU1FTlNJT04uQ0VMTF9MRU5HVEg7XG5cdFx0dmFyIHlzaGlmdCA9IHRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUO1xuXG5cdFx0Zm9yKHZhciBpPTA7aTx0aGlzLnN0aWxsRS5sZW5ndGg7aSsrKSB7XG5cdFx0XHRsZXQgeCA9IHRoaXMuc3RpbGxFW2ldLkdyaWRYO1xuXHRcdFx0bGV0IHkgPSB0aGlzLnN0aWxsRVtpXS5HcmlkWTtcblxuXHRcdFx0dmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG5cdFx0XHRpbWFnZU9iai5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRjdHguZHJhd0ltYWdlKGltYWdlT2JqLCAoMSArIDMgKiB4ICsgeCkgKiB4c2hpZnQsIHkgKiB5c2hpZnQpO1xuXG5cdFx0XHR9O1xuXHRcdFx0aW1hZ2VPYmouc3JjID0gXCIuL2ltYWdlcy9PYnN0YWNsZS5wbmdcIjtcblxuXHRcdFx0Ly8gdGhpcy5jdHguZmlsbFJlY3QoLCwzKnRoaXMuRElNRU5TSU9OLkNFTExfTEVOR1RILHRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUKTtcblxuXHRcdFx0fVxuXG5cblx0XHRcdGZvciAodmFyIGk9MDtpPHRoaXMucG9ydGFscy5sZW5ndGg7aSsrKSB7XG5cdFx0XHRcdGxldCB4ID0gdGhpcy5wb3J0YWxzW2ldLkdyaWRYO1xuXHRcdFx0XHRsZXQgeSA9IHRoaXMucG9ydGFsc1tpXS5HcmlkWTtcblx0XHRcdFx0aWYocG9ydGFsc1tpXS5zdGF0ZSA9PSAwKSB7XG5cdFx0XHRcdFx0dmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG5cdFx0XHRcdFx0aW1hZ2VPYmoub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0XHRcdGN0eC5kcmF3SW1hZ2UoaW1hZ2VPYmosICgxICsgMyAqIHggKyB4KSAqIHhzaGlmdCwgeSAqIHlzaGlmdCk7XG5cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdGltYWdlT2JqLnNyYyA9IFwiLi9pbWFnZXMvcG90Qi5wbmdcIjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHZhciBpbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0XHRcdGltYWdlT2JqLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0XHRjdHguZHJhd0ltYWdlKGltYWdlT2JqLCAoMSArIDMgKiB4ICsgeCkgKiB4c2hpZnQsIHkgKiB5c2hpZnQpO1xuXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRpbWFnZU9iai5zcmMgPSBcIi4vaW1hZ2VzL3BvdEIucG5nXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0fVxuXG5cblxuXHRcdH1cblxuXG5cblx0XHQvLyBmb3IgKHZhciBpPTA7aTx0aGlzLnBvcnRhbHMubGVuZ3RoO2krKykge1xuXHRcdC8vIFx0Y3R4LmZpbGxTdHlsZT1cIiNGRjAwMDBcIjtcblx0XHQvLyBcdHRoaXMuY3R4LmZpbGxSZWN0KGkqQ0VMTF9MRU5HVEgsaSpDRUxMX0hFSUdIVCwzKkNFTExfTEVOR1RILENFTExfSEVJR0hUKTtcblx0XHQvLyB9XG5cblx0XHQvLyBmb3IgKHZhciBpPTA7aTx0aGlzLnBvcnRhbHMubGVuZ3RoO2krKykge1xuXHRcdC8vIFx0Y3R4LmZpbGxTdHlsZT1cImJsdWVcIjtcblx0XHQvLyBcdHRoaXMuY3R4LmZpbGxSZWN0KGkqQ0VMTF9MRU5HVEgsaSpDRUxMX0hFSUdIVCwzKkNFTExfTEVOR1RILENFTExfSEVJR0hUKTtcblx0XHQvLyB9XG5cblx0XHQvLyBmb3IgKHZhciBpPTA7aTx0aGlzLnBvcnRhbHMubGVuZ3RoO2krKykge1xuXHRcdC8vIFx0Y3R4LmZpbGxTdHlsZT1cInllbGxvd1wiO1xuXHRcdC8vIFx0dGhpcy5jdHguZmlsbFJlY3QoaSpDRUxMX0xFTkdUSCxpKkNFTExfSEVJR0hULDMqQ0VMTF9MRU5HVEgsQ0VMTF9IRUlHSFQpO1xuXHRcdC8vIH1cblxuXHRjaGVja0NvbGxpc2lvbigpIHtcblx0XHQvLyB2YXIgY29sbGlzaW9uVHlwZTtcblxuXHRcdC8vIC8vbG9vcCB0aHJvdWdoIGV2ZXJ5IG9iamVjdCBpbiB0aGUgbWFwXG5cdFx0Ly8gZm9yKHZhciBpID0gMDsgaSA8IHBvcnRhbHMubGVuZ3RoOyBpKyspe1xuXHRcdC8vICAgdmFyIHBpeGVsID0gY29udmVydFBpeGVsKHBvcnRhbHNbaV0pOy8vaW4gcGl4ZWxcblx0XHQvLyAgIGlmKCh0aGlzLmN1cnJZID09IHBpeGVsLnkpICYmICh0aGlzLmN1cnJYID09IHBpeGVsLngpICYmICh0aGlzLnBvcnRhbHNbaV0uc3RhdGU9PXRoaXMuY2hhcmFjdGVyLnN0YXRlKSl7XG5cdFx0Ly8gICAgIHRoaXMuY2xlYXIoKTtcblx0XHQvLyAgICAgY29sbHNpb25UeXBlID0gXCJwb3J0YWxzXCI7XG5cdFx0Ly8gICAgIGN1cnJYID0gcG9ydGFsc1tpKzFdLkdyaWRYOy8vaW4gZ3JpZFxuXHRcdC8vICAgICBjdXJyWSA9IHBvcnRhbHNbaSsxXS5HcmlkWTtcblx0XHQvLyAgICAgdmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG5cdFx0Ly8gICAgIGltYWdlT2JqLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0Ly8gICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZU9iaiwgeCwgeSk7XG5cblx0XHQvLyAgICAgfTtcblx0XHQvLyAgICAgaW1hZ2VPYmouc3JjID0gXCIuL2ltYWdlcy9TdGFyMi5wbmdcIjtcblxuXG5cdFx0Ly8gICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcblx0XHQvLyAgICAgLy8gY3R4LmFyYyhjdXJyWCArIDkuMTQsIGN1cnJZLCAxNywgMCwgTWF0aC5QSSoyLCB0cnVlKTsvL3BvcnRhbCBzaXplXG5cdFx0Ly8gICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcblx0XHQvLyAgICAgLy8gY3R4LmZpbGwoKTtcblx0XHQvLyAgICAgLy8gY3R4LmNsb3NlUGF0aCgpO1xuXHRcdC8vICAgfVxuXHRcdC8vIH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGlsbEUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBwaXhlbCA9IGNvbnZlcnRQaXhlbCh0aGlzLnN0aWxsRVtpXSk7Ly9pbiBwaXhlbFxuXHRcdFx0Ly8gY29uc29sZS5sb2cocGl4ZWwueSk7XG5cdFx0XHQvLyBpZih0aGlzLmN1cnJZID4gaS55ICYmIHRoaXMuY3VyclkgPCBpLnkgLSAzOC40ICYmIChjdXJyWCA+IGkueCAmJiBjdXJyWCA8IGkueCArIDE4LjI4KXtcblx0XHRcdGlmICh0aGlzLmNoYXJhY3Rlci5jdXJyWSA8IChwaXhlbC55KzM4LjQpKSB7XG5cdFx0XHRcdC8vIGNvbGxzaW9uVHlwZSA9IFwic3RpbGxFXCI7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElEKTtcblx0XHRcdFx0dGhpcy5jaGFyYWN0ZXIucmVib3JuQ2hhcmFjdGVyKHRoaXMuY3R4KTtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJpIGFtIGV4ZWN1dGVkXCIpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1vdmluZ0UubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBwaXhlbCA9IGNvbnZlcnRQaXhlbCh0aGlzLm1vdmluZ0VbaV0pOy8vaW4gcGl4ZWxcblx0XHRcdC8vIGlmKHRoaXMuY3VyclkgPiBpLnkgJiYgdGhpcy5jdXJyWSA8IGkueSAtIDM4LjQgJiYgKGN1cnJYID4gaS54ICYmIGN1cnJYIDwgaS54ICsgMTguMjgpe1xuXHRcdFx0aWYgKCh0aGlzLmNoYXJhY3Rlci5jdXJyWSA8IHBpeGVsLnkpICYmICh0aGlzLmN1cnJYID09IHBpeGVsLngpKSB7XG5cdFx0XHRcdGRvY3VtZW50LnJlbG9hZCgpO1xuXG5cdFx0XHR9XG5cdFx0fVxuXG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBwaXhlbCA9IGNvbnZlcnRQaXhlbCh0aGlzLml0ZW1zW2ldKTsvL2luIHBpeGVsXG5cdFx0XHRpZiAoKHRoaXMuY3VyclkgPCBwaXhlbC55KSAmJiAodGhpcy5jdXJyWCA9PSBwaXhlbC54KSkge1xuXHRcdFx0XHR0aGlzLnBvaW50Kys7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMucG9pbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cbn1cblxuXG5cblxuZnVuY3Rpb24gY29udmVydFBpeGVsKGNvdW50ZXIpe1xuICAgIHZhciBIX0JMT0NLUyA9IDEzO1xuICAgIHZhciBIX0RJTUVOVElPTiA9IDI1NjtcbiAgICB2YXIgVl9CTE9DS1MgPSAyNTtcbiAgICB2YXIgVl9ESU1FTlRJT04gPSA5NjA7XG4gICAgdmFyIGdyaWRQaXhlbCA9IHtcblx0XHR4OiBjb3VudGVyLkdyaWRYICogKEhfRElNRU5USU9OIC8gSF9CTE9DS1MpLFxuXHRcdHk6IChjb3VudGVyLkdyaWRZKSAqIChWX0RJTUVOVElPTiAvIFZfQkxPQ0tTKVxuICAgIH1cbiAgICByZXR1cm4gZ3JpZFBpeGVsO1xufVxuXG5cbi8vIFByaXZhdGUgbWV0aG9kc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gTG9vcCBvdmVyIHRoZSBjZWxsc1xuZnVuY3Rpb24gbG9vcENlbGxzKGUpIHtcblx0dmFyIHVuaXZlcnNlRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml2ZXJzZScpO1xuXHR2YXIgcGFnZVggPSBlLnBhZ2VYIC0gdW5pdmVyc2VFbGVtLm9mZnNldExlZnQ7XG5cdHZhciBwYWdlWSA9IGUucGFnZVkgLSB1bml2ZXJzZUVsZW0ub2Zmc2V0VG9wO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpPHRoaXMudW5pdmVyc2UuaGVpZ2h0OyBpKyspe1xuXHRcdGZvciAobGV0IGo9MDsgajx0aGlzLnVuaXZlcnNlLmxlbmd0aDsgaisrKXtcblx0XHRcdGxldCBjZWxsID0gdGhpcy51bml2ZXJzZS5jZWxsc1tpXVtqXTtcblx0XHRcdGhhbmRsZUNsaWNrKHRoaXMsIGNlbGwsIHBhZ2VYLCBwYWdlWSk7XG5cdFx0fVxuXHR9XG59XG5cbi8vIGdpdmUgbGlmZSBvciBkZWF0aCB0byB0aGUgY2VsbCBjbGlja2VkLlxuLy8gTm90ZTogYmVjYXVzZSBsb29wQ2VsbHMgaXMgYSBjYWxsYmFjayB3aGljaCBoYXMgdGhlIGNsYXNzIGNvbnRleHRcbi8vIGJvdW5kIHRvIGl0LCB0aGlzIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBpbiB0aGUgY2FsbGJhY2sgZG9lc24ndCBnZXQgdGhlXG4vLyBjb250ZXh0IGltcGxpY2l0bHksIHNvIEkgbXVzdCBwYXNzIGl0LiBEb2Vzbid0IGZlZWwgY2xlYW4uLi5cbi8vIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKHNlbGYsIGNlbGwsIHBhZ2VYLCBwYWdlWSl7XG4vLyBcdGlmIChwYWdlWCA+IGNlbGwueCAmJiBwYWdlWCA8IGNlbGwueCtzZWxmLnVuaXZlcnNlLmNlbGxMZW5ndGggJiZcbi8vIFx0XHRcdFx0cGFnZVkgPiBjZWxsLnkgJiYgcGFnZVkgPCBjZWxsLnkrc2VsZi51bml2ZXJzZS5jZWxsSGVpZ2h0ICkge1xuLy8gXHRcdGNoYW5nZUNlbGxzKHNlbGYsIGNlbGwpO1xuLy8gXHR9XG4vLyB9XG5cbi8vIDEgc3RlcCA9IDEgZ2VuZXJhdGlvblxuZnVuY3Rpb24gc3RlcCgpe1xuXG5cdFxufVxuXG4vKlxuKlx0cGFzcyB0aGUgY2VsbCB0aHJvdWdoIHRoZSA0IHJ1bGVzLiBcblx0Tm90ZTogY2VsbHMgc2hvdWxkIG5vdCB1cGRhdGUgaGVyZSwgc2luY2UgYWx0ZXJpbmcgMSBiZWZvcmUgeW91IGNhblxuXHRhbmFseXplIHRoZSBvdGhlcnMgd2lsbCBjYXVzZSBlcnJvbmVvdXMgb3V0Y29tZXMuXG4qL1xuZnVuY3Rpb24gdHJhbnNpdGlvbnMoc2VsZiwgY2VsbCwgY2VsbHNUb0NoYW5nZSkge1xuXHR2YXIgdW5pTGVuZ3RoID0gc2VsZi51bml2ZXJzZS5sZW5ndGg7XG5cdHZhciB1bmlIZWlnaHQgPSBzZWxmLnVuaXZlcnNlLmhlaWdodDtcblx0dmFyIG5laWdoYm91cnNBbGl2ZSA9IDA7XG5cdC8vIEdvIHRocm91Z2ggdGhlIG5laWdoYm91cnMgb2YgZWFjaCBjZWxsLlxuXHRmb3IgKGxldCBpPTA7IGk8ODsgaSsrKXtcblx0XHRsZXQgbmVpZ2hib3VySUQgPSBjZWxsLm5laWdoYm91cnNbaV07XG5cdFx0aWYgKG5laWdoYm91cklEID49IHVuaUxlbmd0aCp1bmlIZWlnaHQgfHwgbmVpZ2hib3VySUQgPDApIGNvbnRpbnVlO1xuXHRcdGxldCBuZWlnaGJvdXIgPSBnZXRDZWxsQnlJZChzZWxmLCBuZWlnaGJvdXJJRCk7XG5cdFx0aWYgKG5laWdoYm91ci5zdGF0ZSA9PT0gMSkgbmVpZ2hib3Vyc0FsaXZlKys7XG5cdH1cblx0aWYgKGNlbGwuc3RhdGUgPT09IDEpe1xuXHRcdC8vIHplIGxpZmUgcnVsZXNcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0Ly8gMSkgQW55IGxpdmUgY2VsbCB3aXRoIGZld2VyIHRoYW4gdHdvIGxpdmUgbmVpZ2hib3VycyBkaWVzLCBhcyBcblx0XHQvLyBpZiBjYXVzZWQgYnkgdW5kZXItcG9wdWxhdGlvbi5cblx0XHQvLyAyKSBBbnkgbGl2ZSBjZWxsIHdpdGggdHdvIG9yIHRocmVlIGxpdmUgbmVpZ2hib3VycyBsaXZlcyBvbiB0byBcblx0XHQvLyB0aGUgbmV4dCBnZW5lcmF0aW9uLlxuXHRcdGlmIChuZWlnaGJvdXJzQWxpdmUgPCAyKSBjZWxsc1RvQ2hhbmdlLnB1c2goY2VsbC5pZCk7XG5cdFx0Ly8gMykgQW55IGxpdmUgY2VsbCB3aXRoIG1vcmUgdGhhbiB0aHJlZSBsaXZlIG5laWdoYm91cnMgZGllcywgYXMgaWYgXG5cdFx0Ly8gYnkgb3ZlcmNyb3dkaW5nLlxuXHRcdGVsc2UgaWYgKG5laWdoYm91cnNBbGl2ZSA+IDMpIGNlbGxzVG9DaGFuZ2UucHVzaChjZWxsLmlkKTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyA0KSBBbnkgZGVhZCBjZWxsIHdpdGggZXhhY3RseSB0aHJlZSBsaXZlIG5laWdoYm91cnMgYmVjb21lcyBhIFxuXHRcdC8vIGxpdmUgY2VsbCwgYXMgaWYgYnkgcmVwcm9kdWN0aW9uLlxuXHRcdGlmIChuZWlnaGJvdXJzQWxpdmUgPT09IDMpIGNlbGxzVG9DaGFuZ2UucHVzaChjZWxsLmlkKTtcblx0fVxufSBcblxuZnVuY3Rpb24gY2hhbmdlQ2VsbHMoc2VsZiwgY2VsbCkge1xuXHRzZWxmLmN0eC5maWxsU3R5bGUgPSAoY2VsbC5zdGF0ZSkgPyAnd2hpdGUnIDogJyMzMzMnO1xuXHRzZWxmLmN0eC5maWxsUmVjdChjZWxsLngrMSwgY2VsbC55KzEsIFxuXHRcdFx0c2VsZi51bml2ZXJzZS5jZWxsTGVuZ3RoLTIsIHNlbGYudW5pdmVyc2UuY2VsbEhlaWdodC0yKTtcblx0Y2VsbC5zdGF0ZSA9IChjZWxsLnN0YXRlKSA/IDAgOiAxO1xufVxuXG5mdW5jdGlvbiBnZXRDZWxsQnlJZChzZWxmLCBpZCkge1xuXHRsZXQgcm93ID0gTWF0aC5mbG9vcihpZC9zZWxmLnVuaXZlcnNlLmxlbmd0aCk7XG5cdGxldCBjb2x1bW4gPSBpZCAlIHNlbGYudW5pdmVyc2UubGVuZ3RoO1xuXHRyZXR1cm4gc2VsZi51bml2ZXJzZS5jZWxsc1tyb3ddW2NvbHVtbl07XG59IFxuXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiLCJjbGFzcyBPYmp7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpe1xuICAgIHRoaXMuR3JpZFggPSBvcHRpb25zLkdyaWRYO1xuICAgIHRoaXMuR3JpZFkgPSBvcHRpb25zLkdyaWRZO1xuICAgIC8vIHRoaXMuc3RhdGUgPSBzdGF0ZTsvLzAgaXMgYSBjb2xvcjAsIDEgaXMgY29sb3IxXG5cdHRoaXMuSF9CTE9DS1MgPSAxMztcbiAgICB0aGlzLkhfRElNRU5USU9OID0gMjU2O1xuICAgIHRoaXMuVl9CTE9DS1MgPSAyNTtcbiAgICB0aGlzLlZfRElNRU5USU9OID0gOTYwO1xuXG4gIH1cblxuXG5cblxuIC8vICBjb252ZXJ0UGl4ZWwoY291bnRlcikge1xuXHQvLyAgIHZhciB4ID0gY291bnRlci5HcmlkWCAqICh0aGlzLkhfRElNRU5USU9OIC8gdGhpcy5IX0JMT0NLUyk7XG5cdC8vICAgY29uc29sZS5sb2coXCJ4aXNcIit4KTtcblx0Ly8gICB2YXIgZ3JpZFBpeGVsID0ge1xuXHQvLyBcdCAgeDogY291bnRlci5HcmlkWCAqICh0aGlzLkhfRElNRU5USU9OIC8gdGhpcy5IX0JMT0NLUyksXG5cdC8vIFx0ICB5OiAoY291bnRlci5HcmlkWSArIDEpICogKHRoaXMuVl9ESU1FTlRJT04gLyB0aGlzLlZfQkxPQ0tTKVxuXHQvLyAgIH1cbiAvLyAgICByZXR1cm4gZ3JpZFBpeGVsO1xuXHQvLyB9XG5cblx0IGNsZWFyKGN0eCx4LHkpIHtcblx0XHQgLy8gY29uc29sZS5sb2codGhpcy5IX0RJTUVOVElPTiAvIHRoaXMuSF9CTE9DS1MpO1xuXHRcdCAvLyAvLyBjb25zb2xlLmxvZyh0aGlzLkdyaWRYKTtcblx0XHQgLy8gdmFyIHggPSB0aGlzLkdyaWRYICogKHRoaXMuSF9ESU1FTlRJT04gLyB0aGlzLkhfQkxPQ0tTKTtcblx0XHQgLy8gdmFyIHkgPSAodGhpcy5HcmlkWSkgKiAodGhpcy5WX0RJTUVOVElPTiAvIHRoaXMuVl9CTE9DS1MpO1xuXHRcdCBjb25zb2xlLmxvZyhcInggaXMgXCIrIHgpO1xuXHRcdCBjb25zb2xlLmxvZyhcInkgaXMgXCIgKyB5KTtcblxuXHQgIC8vIGN0eC5jbGVhclJlY3QoeCx5LCAzICogKHRoaXMuSF9ESU1FTlRJT04gLyB0aGlzLkhfQkxPQ0tTKSwgMSsodGhpcy5WX0RJTUVOVElPTiAvIHRoaXMuVl9CTE9DS1MpKTtcblx0XHQgY3R4LmNsZWFyUmVjdCh4LCB5LCA2MCwgNTApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqO1xuIiwiaW1wb3J0IE9iaiBmcm9tICcuL09iaic7XG5cbmNsYXNzIFBvcnRhbCBleHRlbmRzIE9iantcbiAgY29uc3RydWN0b3Ioc3RhdGUsb3B0aW9ucyl7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICB9XG59XG4iXX0=
