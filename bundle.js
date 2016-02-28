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
	plan: ["xxx xxx xxx", "kkk kkk kkk", "xxx xxx kkk", "kkk kkk kkk", "kkk xxx xxx", "kkk kkk kkk", "kkk xxx kkk", "kkk kkk kkk", "xxx xxx kkk", "kkk kkk kkk", "kkk xxx xxx", "kkk kkk kkk", "kkk xxx kkk", "kkk kkk kkk", "xxx xxx kkk", "kkk kkk kkk", "kkk xxx xxx", "kkk kkk kkk", "kkk xxx kkk"]
})];

function chooseGame(num) {
	games[num].drawGrid();
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
    value: function initializeCharacter(ctx, GridX, GridY) {
      //only able to access 'this' on the outside
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
        imageObj.src = "./images/Star2.png";
      }, 50);

      // ctx.beginPath();

      // ctx.arc(120, 900, 17, 0, Math.PI*2, true);//character size
      // ctx.fillStyle = "#0095DD";
      // ctx.fill();
      // ctx.closePath();
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
      imageObj.src = "./images/Star2.png";
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

// import Item from ./Character.js;
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
		this.character = new _Character2['default'](0, { GridX: 5, GridY: 24 });
		this.point = 0;
		this.win = false;
		this.H_BLOCKS = 13;
		this.H_DIMENTION = 256;
		this.V_BLOCKS = 25;
		this.V_DIMENTION = 960;
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

			this.character.initializeCharacter(this.ctx, this.character.GridX, this.character.GridY);

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
						this.portals.push(new Portal(1, { GrixX: j, GridY: i }));
					} else if (array[j] == "ptB") {
						this.portals.push(new Portal(0, { GridX: j, GridY: i }));
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
			//draw static stuff	
			// console.log(this.Grid);

			for (var i = 0; i < this.stillE.length; i++) {

				var x = this.stillE[i].GridX;
				var y = this.stillE[i].GridY;
				console.log("x of obj is" + x);
				console.log("y of obj is" + y);

				this.ctx.fillRect((1 + 3 * x + x) * this.DIMENSION.CELL_LENGTH, y * this.DIMENSION.CELL_HEIGHT, 3 * this.DIMENSION.CELL_LENGTH, this.DIMENSION.CELL_HEIGHT);
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

			for (var i = 0; i < this.stillE.length; i++) {
				var pixel = convertPixel(this.stillE[i]); //in pixel
				// console.log(pixel.y);
				// if(this.currY > i.y && this.currY < i.y - 38.4 && (currX > i.x && currX < i.x + 18.28){
				if (this.character.currY < pixel.y) {
					// collsionType = "stillE";
					clearInterval(this.intervalID);
					this.iniSetUp();
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

},{"./Character":2,"./Obj":4}],4:[function(require,module,exports){
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

						ctx.clearRect(x, y, 3 * (this.H_DIMENTION / this.H_BLOCKS), 1 + this.V_DIMENTION / this.V_BLOCKS);
				}
		}]);

		return Obj;
})();

module.exports = Obj;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGlhbnRhbmcvcHJvZy9wb3J0YWwvYXBwLmpzIiwiL1VzZXJzL2RpYW50YW5nL3Byb2cvcG9ydGFsL2pzL0NoYXJhY3Rlci5qcyIsIi9Vc2Vycy9kaWFudGFuZy9wcm9nL3BvcnRhbC9qcy9HYW1lLmpzIiwiL1VzZXJzL2RpYW50YW5nL3Byb2cvcG9ydGFsL2pzL09iai5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7c0JDQWlCLFdBQVc7Ozs7O0FBRzVCLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUNsQixJQUFNLE1BQU0sR0FBRyxHQUFHLENBQUM7O0FBRW5CLElBQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQztBQUMzQixJQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7O0FBRTNCLElBQU0sU0FBUyxHQUFHOztBQUVqQixnQkFBZSxFQUFFLEVBQUU7QUFDbkIsZ0JBQWUsRUFBQyxFQUFFO0FBQ2xCLFlBQVcsRUFBRSxHQUFHLEdBQUMsZUFBZTtBQUNoQyxZQUFXLEVBQUUsR0FBRyxHQUFDLGVBQWU7O0NBRWhDLENBQUE7O0FBRUQsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNqRCxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUVsQyxJQUFJLEtBQUssR0FBRyxDQUFDLHdCQUFTOzs7QUFHckIsT0FBTSxFQUFOLE1BQU07QUFDTixRQUFPLEVBQUUsR0FBRztBQUNaLFVBQVMsRUFBVCxTQUFTO0FBQ1QsTUFBSyxFQUFFLEVBQUU7QUFDVCxLQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQ25CLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFD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QUMsUUFBUSxDQUFBLEFBQUMsRUFBRSxDQUFDLEdBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxBQUFDLENBQUMsQ0FBQztLQUNqRzs7O1NBbENHLEdBQUc7OztBQXFDVCxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgR2FtZSBmcm9tICcuL2pzL0dhbWUnO1xuXG4vLyBpbiBwaXhlbHNcbmNvbnN0IFdJRFRIID0gMjU2O1xuY29uc3QgSEVJR0hUID0gOTYwO1xuLy8gaW4gY2VsbCB1bml0c1xuY29uc3QgVU5JVkVSU0VfTEVOR1RIID0gMTM7XG5jb25zdCBVTklWRVJTRV9IRUlHSFQgPSAyNTtcblxuY29uc3QgRElNRU5TSU9OID0ge1xuXHRcblx0VU5JVkVSU0VfTEVOR1RIOiAxMyxcblx0VU5JVkVSU0VfSEVJR0hUOjI1LFxuXHRDRUxMX0xFTkdUSDogMjU2L1VOSVZFUlNFX0xFTkdUSCxcblx0Q0VMTF9IRUlHSFQ6IDk2MC9VTklWRVJTRV9IRUlHSFRcblxufVxuXG52YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXZlcnNlJyk7XG52YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbnZhciBnYW1lcyA9IFtuZXcgR2FtZSh7XG5cdC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuXHQvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcblx0Y2FudmFzLFxuXHRjb250ZXh0OiBjdHgsXG5cdERJTUVOU0lPTixcblx0c3BlZWQ6IDIwLFxuXHRwbGFuOiBbXCJ4eHggeHh4IHh4eFwiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInh4eCB4eHgga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHh4eCB4eHhcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInh4eCB4eHgga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHh4eCB4eHhcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInh4eCB4eHgga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHh4eCB4eHhcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IGtra1wiXVxufSksIF07XG5cblxuXG5mdW5jdGlvbiBjaG9vc2VHYW1lKG51bSkge1xuXHRnYW1lc1tudW1dLmRyYXdHcmlkKCk7XG5cdGdhbWVzW251bV0uaW5pU2V0VXAoKTtcblx0Z2FtZXNbbnVtXS5kcmF3KCk7XG5cdC8vIGdhbWVzW251bV0ucGxheSgpO1xufVxuXG5cbmNob29zZUdhbWUoMCk7XG5cblxuXG4iLCJpbXBvcnQgT2JqIGZyb20gJy4vT2JqJztcblxuY2xhc3MgQ2hhcmFjdGVyIGV4dGVuZHMgT2Jqe1xuICBjb25zdHJ1Y3RvcihzdGF0ZSxvcHRpb25zKXtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy5jdXJyWSA9IHRoaXMuY29udmVydFBpeGVsKG9wdGlvbnMpLnk7Ly9pbiBwaXhlbDsgWSBERUNSRUFTRVNcbiAgICB0aGlzLmN1cnJYID0gdGhpcy5jb252ZXJ0UGl4ZWwob3B0aW9ucykueDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gY29udmVydE9wdGlvbnNUb1BpeGVsKG9wdGlvbnMpe1xuICAvLyAgIHZhciBIX0JMT0NLUyA9IDE0O1xuICAvLyAgIHZhciBIX0RJTUVOVElPTiA9IDI1NjtcbiAgLy8gICB2YXIgVl9CTE9DS1MgPSAyNTtcbiAgLy8gICB2YXIgVl9ESU1FTlRJT04gPSA5NjA7XG4gIC8vICAgdmFyIGdyaWRQaXhlbC54ID0gb3B0aW9ucy54ICogKEhfRElNRU5USU9OIC8gSF9CTE9DS1MpO1xuICAvLyAgIHZhciBncmlkUGl4ZWwueSA9IChvcHRpb25zLnkrMSkgKiAoVl9ESU1FTlRJT04gLyBWX0JMT0NLUyk7XG4gIC8vICAgcmV0dXJuIGdyaWRQaXhlbDtcbiAgLy8gfVxuXG4gaW5pdGlhbGl6ZUNoYXJhY3RlcihjdHgsR3JpZFgsR3JpZFkpe1xuIC8vb25seSBhYmxlIHRvIGFjY2VzcyAndGhpcycgb24gdGhlIG91dHNpZGVcbiAgIHZhciBzZWxmID0gdGhpcztcbiAgIHZhciBieCA9IHRoaXMuY3Vyclg7XG4gICB2YXIgYnkgPSB0aGlzLmN1cnJZO1xuICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgc2VsZi5jbGVhcihjdHgsIGJ4LCBieSk7XG4gICAgIHZhciB4ID0gc2VsZi5jb252ZXJ0UGl4ZWwoc2VsZi5vcHRpb25zKS54O1xuICAgICB2YXIgeSA9IHNlbGYuY29udmVydFBpeGVsKHNlbGYub3B0aW9ucykueTtcbiAgICAgc2VsZi5jdXJyWCA9IHg7XG4gICAgIHNlbGYuY3VyclkgPSB5O1xuICAgICB2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcbiAgICAgaW1hZ2VPYmoub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlT2JqLCB4LCB5KTtcblxuICAgICB9O1xuICAgICBpbWFnZU9iai5zcmMgPSBcIi4vaW1hZ2VzL1N0YXIyLnBuZ1wiO1xuICAgfSwgNTApO1xuICBcbiAgXG5cbiAgXG4gICBcblxuICAgXG4gICAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgLy8gY3R4LmFyYygxMjAsIDkwMCwgMTcsIDAsIE1hdGguUEkqMiwgdHJ1ZSk7Ly9jaGFyYWN0ZXIgc2l6ZVxuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICAvLyBjdHguZmlsbCgpO1xuICAgIC8vIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIGxvZygpIHtcbiAgICBjb25zb2xlLmxvZyhcImRvaW5nXCIpO1xuICB9XG5cbiAgIGRyYXcoY3R4KSB7XG4gICAgICBjb25zb2xlLmxvZyhcImRyYXdpbmcuLlwiKTtcblxuICAgIFxuICAgIHRoaXMuY2xlYXIoY3R4LHRoaXMuY3VyclgsdGhpcy5jdXJyWSk7XG4gICAgXG4gICAgdmFyIGR5ID0gLTE7XG4gICAgdGhpcy5jdXJyWSArPSBkeTtcblxuICAgIHZhciB4ID0gdGhpcy5jdXJyWDtcbiAgICB2YXIgeSA9IHRoaXMuY3Vyclk7XG4gICAgdmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2VPYmoub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2VPYmosIHgsIHkpO1xuXG4gICAgfTtcbiAgICBpbWFnZU9iai5zcmMgPSBcIi4vaW1hZ2VzL1N0YXIyLnBuZ1wiO1xuXG4gIH1cblxuICAvLyBzZXRJbnRlcnZhbChkcmF3ICwyMCk7Ly9jaGVjayBldmVyeSAyMG1zXG5cbiAgIGNvbnZlcnRQaXhlbChjb3VudGVyKXtcbiAgICAvLyB2YXIgSF9CTE9DS1MgPSAxNDtcbiAgICAvLyB2YXIgSF9ESU1FTlRJT04gPSAyNTY7XG4gICAgLy8gdmFyIFZfQkxPQ0tTID0gMjU7XG4gICAgLy8gdmFyIFZfRElNRU5USU9OID0gOTYwO1xuICAgIHZhciBncmlkUGl4ZWwgPSB7XG4gICAgICB4OiBjb3VudGVyLkdyaWRYICogKHRoaXMuSF9ESU1FTlRJT04gLyB0aGlzLkhfQkxPQ0tTKSxcbiAgICAgIHk6IChjb3VudGVyLkdyaWRZKSAqICh0aGlzLlZfRElNRU5USU9OIC8gdGhpcy5WX0JMT0NLUylcbiAgICB9XG4gICAgcmV0dXJuIGdyaWRQaXhlbDtcbiAgfVxuXG5cbiAgIGNoZWNrQ29sbGlzaW9uKHN0aWxsRSxtb3ZpbmdFLHBvcnRhbHMsaXRlbXMpe1xuICAgIHZhciBjb2xsaXNpb25UeXBlO1xuXG4gICAgLy8gLy9sb29wIHRocm91Z2ggZXZlcnkgb2JqZWN0IGluIHRoZSBtYXBcbiAgICAvLyBmb3IodmFyIGkgPSAwOyBpIDwgcG9ydGFscy5sZW5ndGg7IGkrKyl7XG4gICAgLy8gICB2YXIgcGl4ZWwgPSB0aGlzLmNvbnZlcnRQaXhlbChwb3J0YWxzW2ldKTsvL2luIHBpeGVsXG4gICAgLy8gICBpZigodGhpcy5jdXJyWSA9PSBwaXhlbC55KSAmJiAodGhpcy5jdXJyWCA9PSBwaXhlbC54KSl7XG4gICAgLy8gICAgIHRoaXMuY2xlYXIoKTtcbiAgICAvLyAgICAgY29sbHNpb25UeXBlID0gXCJwb3J0YWxzXCI7XG4gICAgLy8gICAgIGN1cnJYID0gcG9ydGFsc1tpKzFdLkdyaWRYOy8vaW4gZ3JpZFxuICAgIC8vICAgICBjdXJyWSA9IHBvcnRhbHNbaSsxXS5HcmlkWTtcbiAgICAvLyAgICAgdmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG4gICAgLy8gICAgIGltYWdlT2JqLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZU9iaiwgeCwgeSk7XG5cbiAgICAvLyAgICAgfTtcbiAgICAvLyAgICAgaW1hZ2VPYmouc3JjID0gXCIuL2ltYWdlcy9TdGFyMi5wbmdcIjtcblxuXG4gICAgLy8gICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyAgICAgLy8gY3R4LmFyYyhjdXJyWCArIDkuMTQsIGN1cnJZLCAxNywgMCwgTWF0aC5QSSoyLCB0cnVlKTsvL3BvcnRhbCBzaXplXG4gICAgLy8gICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICAvLyAgICAgLy8gY3R4LmZpbGwoKTtcbiAgICAvLyAgICAgLy8gY3R4LmNsb3NlUGF0aCgpO1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzdGlsbEUubGVuZ3RoOyBpKyspe1xuICAgICAgdmFyIHBpeGVsID0gdGhpcy5jb252ZXJ0UGl4ZWwoc3RpbGxFW2ldKTsvL2luIHBpeGVsXG4gICAgICAvLyBjb25zb2xlLmxvZyhwaXhlbC55KTtcbiAgICAgIC8vIGlmKHRoaXMuY3VyclkgPiBpLnkgJiYgdGhpcy5jdXJyWSA8IGkueSAtIDM4LjQgJiYgKGN1cnJYID4gaS54ICYmIGN1cnJYIDwgaS54ICsgMTguMjgpe1xuICAgICAgaWYodGhpcy5jdXJyWSA8IHBpeGVsLnkpe1xuICAgICAgICAvLyBjb2xsc2lvblR5cGUgPSBcInN0aWxsRVwiO1xuICAgICAgICBkb2N1bWVudC5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vdmluZ0UubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwaXhlbCA9IHRoaXMuY29udmVydFBpeGVsKG1vdmluZ0VbaV0pOy8vaW4gcGl4ZWxcbiAgICAgIC8vIGlmKHRoaXMuY3VyclkgPiBpLnkgJiYgdGhpcy5jdXJyWSA8IGkueSAtIDM4LjQgJiYgKGN1cnJYID4gaS54ICYmIGN1cnJYIDwgaS54ICsgMTguMjgpe1xuICAgICAgaWYgKCh0aGlzLmN1cnJZID09IHBpeGVsLnkpICYmICh0aGlzLmN1cnJYID09IHBpeGVsLngpKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbG9hZCgpO1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKXtcbiAgICAgIHZhciBwaXhlbCA9IHRoaXMuY29udmVydFBpeGVsKGl0ZW1zW2ldKTsvL2luIHBpeGVsXG4gICAgICBpZigodGhpcy5jdXJyWSA9PSBwaXhlbC55KSAmJiAodGhpcy5jdXJyWCA9PSBwaXhlbC54KSl7XG4gICAgICAgIGl0ZW1Db2xsZWN0ZWQgKys7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1Db2xsZWN0ZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHNldEludGVydmFsKGNoZWNrQ29sbGlzaW9uICwyMCk7Ly9jaGVjayBldmVyeSAyMG1zXG4gIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNoYW5nZVN0YXRlKTtcblxuXG4gICBjaGFuZ2VTdGF0ZShlKXtcbiAgICAvL3JlZ2lzdGVyIGEgZXZlbnQgbGlzdGVuZXJcbiAgICB2YXIga2V5ID0gZS5rZXlDb2RlID8gZS5rZXlDb2RlIDogZS53aGljaDtcbiAgICBpZiAoa2V5ID09IDM4KSB7XG4gICAgICBjb25zb2xlLmxvZyhcIllvdSBQcmVzc2VkIHRoZSBma2luZyBTcGFjZVwiKTtcbiAgICAgIHN3aXRjaChzdGF0ZSl7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBzdGF0ZSsrO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2hpdGVcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBzdGF0ZS0tO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQmxhY2tcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyO1xuIiwiaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlcic7XG5pbXBvcnQgT2JqIGZyb20gJy4vT2JqJztcbi8vIGltcG9ydCBJdGVtIGZyb20gLi9DaGFyYWN0ZXIuanM7XG4vLyBpbXBvcnQgRW5lbXkgZnJvbSAuL0NoYXJhY3Rlci5qcztcblxuXG5cbmNsYXNzIEdhbWUge1xuXHQvLyBzZXQgdXAgaW5zdGFuY2UgdmFyaWFibGVzXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpe1xuXHRcdHRoaXMuY2FudmFzID0gb3B0aW9ucy5jYW52YXM7XG5cdFx0dGhpcy5jdHggPSBvcHRpb25zLmNvbnRleHQ7XG5cdFx0dGhpcy5ESU1FTlNJT04gPSBvcHRpb25zLkRJTUVOU0lPTjtcblx0XHR0aGlzLnVuaXZlcnNlRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml2ZXJzZScpO1xuXHRcdHRoaXMuc3BlZWQgPSBvcHRpb25zLnNwZWVkO1xuXHRcdHRoaXMucGxhbiA9IG9wdGlvbnMucGxhbjtcblx0XHR0aGlzLkdyaWQgPSBbXTtcblx0XHR0aGlzLnBvcnRhbHMgPSBbXTtcblx0XHR0aGlzLml0ZW1zID0gW107XG5cdFx0dGhpcy5tb3ZpbmdFID0gW107XG5cdFx0dGhpcy5zdGlsbEUgPSBbXTtcblx0XHR0aGlzLmNoYXJhY3RlciA9IG5ldyBDaGFyYWN0ZXIoMCx7R3JpZFg6NSxHcmlkWToyNH0pO1xuXHRcdHRoaXMucG9pbnQgPSAwO1xuXHRcdHRoaXMud2luID0gZmFsc2U7XG5cdFx0dGhpcy5IX0JMT0NLUyA9IDEzO1xuXHRcdHRoaXMuSF9ESU1FTlRJT04gPSAyNTY7XG5cdFx0dGhpcy5WX0JMT0NLUyA9IDI1O1xuXHRcdHRoaXMuVl9ESU1FTlRJT04gPSA5NjA7XG5cdFx0dGhpcy5pbnRlcnZhbElEID0gMDtcblxuXHR9XG5cblx0Ly8gaW5pdGlhbCBzZXQgdXBcblx0aW5pU2V0VXAoKSB7XG5cdFx0Ly8gLy8gTm90ZTogdXNpbmcgYmluZCB0byBwYXNzIHRoZSBjbGFzcycgY29udGV4dCB0byB0aGUgY2FsbGJhY2tzXG5cdFx0Ly8gLy8gbm90IHN1cmUgaWYgdGhpcyBjYW4gYmUgaW1wcm92ZWQuXG5cdFx0Ly8gLy8gdGhpcy51bml2ZXJzZUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb29wQ2VsbHMuYmluZHRoaXMoKSk7XG5cdFx0Ly8gLy8gd2hlbiB1c2VyIGNsaWNrLCBzdGFydCB0aGUgZ2FtZVxuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpXG5cdFx0XHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2VsZi5wbGF5KCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc29sZS5sb2codGhpcy5wbGFuKTtcblx0XHRcdHRoaXMucGFyc2UodGhpcy5wbGFuKTtcblxuXHRcdFx0dGhpcy5jaGFyYWN0ZXIuaW5pdGlhbGl6ZUNoYXJhY3Rlcih0aGlzLmN0eCx0aGlzLmNoYXJhY3Rlci5HcmlkWCx0aGlzLmNoYXJhY3Rlci5HcmlkWSk7XG5cblx0XHRcdC8vIGRyYXcodGhpcy5HcmlkKSB7XG5cblx0XHRcdC8vIH1cblx0fVxuXG5cdHBhcnNlKHBsYW4pIHtcblx0XHQvLyBsZXQgZ3JpZCA9IFtdO1xuXG5cdFx0Zm9yKHZhciBpPTA7aTxwbGFuLmxlbmd0aDtpKyspIHtcblx0XHRcdGxldCBhcnJheSA9IHBsYW5baV0uc3BsaXQoXCIgXCIpO1xuXG5cdFxuXHRcdFx0Zm9yKHZhciBqPTA7ajxhcnJheS5sZW5ndGg7aisrKSB7XG5cdFx0XHRcdGlmKGFycmF5W2pdID09IFwieHh4XCIpIHtcblx0XHRcdFx0XHR0aGlzLnN0aWxsRS5wdXNoKG5ldyBPYmooeyBHcmlkWDogaiwgR3JpZFk6IGkgfSkpO1xuXHRcdFx0XHRcdFxuXG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGVsc2UgaWYoYXJyYXlbal0gPT0gXCJtb2VcIikge1xuXHRcdFx0XHRcdHRoaXMuRW5lbWllcy5wdXNoKG5ldyBtb3ZpbmdFKHt9KSk7XG5cblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmKGFycmF5W2pdID09IFwicHRXXCIpIHtcblx0XHRcdFx0XHR0aGlzLnBvcnRhbHMucHVzaChuZXcgUG9ydGFsKDEsIHsgR3JpeFg6IGosIEdyaWRZOml9KSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlbHNlIGlmKGFycmF5W2pdID09IFwicHRCXCIpIHtcblx0XHRcdFx0XHR0aGlzLnBvcnRhbHMucHVzaChuZXcgUG9ydGFsKDAsIHsgR3JpZFg6IGosIEdyaWRZOml9KSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcblx0XHR9XG5cblx0XHQvLyByZXR1cm4gZ3JpZDtcblx0fVxuXG5cblxuXG5cdHBsYXkoKXtcblx0XHQvLyByZW1vdmUgZ29kIG1vZGVcblx0XHQvLyB0aGlzLnVuaXZlcnNlRWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGxvb3BDZWxscyk7XG5cdFx0Ly8gZ2FtZSBsb29wXG5cdFx0Ly8gY29uc29sZS5sb2codGhpcy5zcGVlZCk7XG5cblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHR0aGlzLmludGVydmFsSUQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRcdHNlbGYuY2hhcmFjdGVyLmRyYXcoc2VsZi5jdHgpO1xuXHRcdFx0c2VsZi5jaGVja0NvbGxpc2lvbigpO1xuXHRcdH0sIDIwKTtcblx0XG5cdFx0Ly8gc2V0SW50ZXJ2YWwodGhpcy5jaGFyYWN0ZXIuY2hlY2tDb2xsaXNpb24odGhpcy5wb3J0YWxzLHRoaXMuZW5lbWllcyx0aGlzLml0ZW1zKSwgdGhpcy5zcGVlZCk7XG5cdFx0Ly8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5jaGFyYWN0ZXIuY2hhbmdlU3RhdGUpXG5cblx0fVxuXG5cdGxvZ2dpbmcoKSB7XG5cdFx0Y29uc29sZS5sb2coXCJsb2dnaW5nXCIpO1xuXHR9XG5cblx0Ly8gZHJhdyBncmlkXG5cdGRyYXdHcmlkKCkge1xuXHRcdHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyM3NzcnO1xuXHRcdHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XG5cdFx0Ly8gdmVydGljYWwgbGluZXNcblx0XHRmb3IgKGxldCBpID0gMTsgaTx0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9MRU5HVEg7IGkrKyl7XG5cdFx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcblx0XHRcdHRoaXMuY3R4Lm1vdmVUbyh0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCppLDApO1xuXHRcdFx0dGhpcy5jdHgubGluZVRvKHRoaXMuRElNRU5TSU9OLkNFTExfTEVOR1RIKmksIFxuXHRcdFx0XHR0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9IRUlHSFQqdGhpcy5ESU1FTlNJT04uQ0VMTF9IRUlHSFQpO1xuXHRcdFx0dGhpcy5jdHguc3Ryb2tlKCk7XG5cdFx0fVxuXHRcdC8vIGhvcml6b250YWwgbGluZXNcblx0XHRmb3IgKGxldCBpID0gMTsgaTx0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9IRUlHSFQ7IGkrKyl7XG5cdFx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcblx0XHRcdHRoaXMuY3R4Lm1vdmVUbygwLHRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUKmkpO1xuXHRcdFx0dGhpcy5jdHgubGluZVRvKHRoaXMuRElNRU5TSU9OLlVOSVZFUlNFX0xFTkdUSCp0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCwgXG5cdFx0XHRcdHRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUKmkpO1xuXHRcdFx0dGhpcy5jdHguc3Ryb2tlKCk7XG5cdFx0fVxuXHR9XG5cblx0ZHJhdygpIHtcblx0XHQvL2RyYXcgc3RhdGljIHN0dWZmXHRcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLkdyaWQpO1xuXG5cdFx0Zm9yKHZhciBpPTA7aTx0aGlzLnN0aWxsRS5sZW5ndGg7aSsrKSB7XG5cblx0XHRcdGxldCB4ID0gdGhpcy5zdGlsbEVbaV0uR3JpZFg7XG5cdFx0XHRsZXQgeSA9IHRoaXMuc3RpbGxFW2ldLkdyaWRZO1xuXHRcdFx0Y29uc29sZS5sb2coXCJ4IG9mIG9iaiBpc1wiICsgeCk7XG5cdFx0XHRjb25zb2xlLmxvZyhcInkgb2Ygb2JqIGlzXCIgKyB5KTtcblxuXHRcdFx0dGhpcy5jdHguZmlsbFJlY3QoKDErMyp4K3gpKnRoaXMuRElNRU5TSU9OLkNFTExfTEVOR1RILHkqdGhpcy5ESU1FTlNJT04uQ0VMTF9IRUlHSFQsMyp0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCx0aGlzLkRJTUVOU0lPTi5DRUxMX0hFSUdIVCk7XG5cblx0XHRcdH1cblx0XHR9XG5cblxuXG5cdFx0Ly8gZm9yICh2YXIgaT0wO2k8dGhpcy5wb3J0YWxzLmxlbmd0aDtpKyspIHtcblx0XHQvLyBcdGN0eC5maWxsU3R5bGU9XCIjRkYwMDAwXCI7XG5cdFx0Ly8gXHR0aGlzLmN0eC5maWxsUmVjdChpKkNFTExfTEVOR1RILGkqQ0VMTF9IRUlHSFQsMypDRUxMX0xFTkdUSCxDRUxMX0hFSUdIVCk7XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gZm9yICh2YXIgaT0wO2k8dGhpcy5wb3J0YWxzLmxlbmd0aDtpKyspIHtcblx0XHQvLyBcdGN0eC5maWxsU3R5bGU9XCJibHVlXCI7XG5cdFx0Ly8gXHR0aGlzLmN0eC5maWxsUmVjdChpKkNFTExfTEVOR1RILGkqQ0VMTF9IRUlHSFQsMypDRUxMX0xFTkdUSCxDRUxMX0hFSUdIVCk7XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gZm9yICh2YXIgaT0wO2k8dGhpcy5wb3J0YWxzLmxlbmd0aDtpKyspIHtcblx0XHQvLyBcdGN0eC5maWxsU3R5bGU9XCJ5ZWxsb3dcIjtcblx0XHQvLyBcdHRoaXMuY3R4LmZpbGxSZWN0KGkqQ0VMTF9MRU5HVEgsaSpDRUxMX0hFSUdIVCwzKkNFTExfTEVOR1RILENFTExfSEVJR0hUKTtcblx0XHQvLyB9XG5cblx0Y2hlY2tDb2xsaXNpb24oKSB7XG5cdFx0Ly8gdmFyIGNvbGxpc2lvblR5cGU7XG5cblx0XHQvLyAvL2xvb3AgdGhyb3VnaCBldmVyeSBvYmplY3QgaW4gdGhlIG1hcFxuXHRcdC8vIGZvcih2YXIgaSA9IDA7IGkgPCBwb3J0YWxzLmxlbmd0aDsgaSsrKXtcblx0XHQvLyAgIHZhciBwaXhlbCA9IGNvbnZlcnRQaXhlbChwb3J0YWxzW2ldKTsvL2luIHBpeGVsXG5cdFx0Ly8gICBpZigodGhpcy5jdXJyWSA9PSBwaXhlbC55KSAmJiAodGhpcy5jdXJyWCA9PSBwaXhlbC54KSl7XG5cdFx0Ly8gICAgIHRoaXMuY2xlYXIoKTtcblx0XHQvLyAgICAgY29sbHNpb25UeXBlID0gXCJwb3J0YWxzXCI7XG5cdFx0Ly8gICAgIGN1cnJYID0gcG9ydGFsc1tpKzFdLkdyaWRYOy8vaW4gZ3JpZFxuXHRcdC8vICAgICBjdXJyWSA9IHBvcnRhbHNbaSsxXS5HcmlkWTtcblx0XHQvLyAgICAgdmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG5cdFx0Ly8gICAgIGltYWdlT2JqLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0Ly8gICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZU9iaiwgeCwgeSk7XG5cblx0XHQvLyAgICAgfTtcblx0XHQvLyAgICAgaW1hZ2VPYmouc3JjID0gXCIuL2ltYWdlcy9TdGFyMi5wbmdcIjtcblxuXG5cdFx0Ly8gICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcblx0XHQvLyAgICAgLy8gY3R4LmFyYyhjdXJyWCArIDkuMTQsIGN1cnJZLCAxNywgMCwgTWF0aC5QSSoyLCB0cnVlKTsvL3BvcnRhbCBzaXplXG5cdFx0Ly8gICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcblx0XHQvLyAgICAgLy8gY3R4LmZpbGwoKTtcblx0XHQvLyAgICAgLy8gY3R4LmNsb3NlUGF0aCgpO1xuXHRcdC8vICAgfVxuXHRcdC8vIH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGlsbEUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBwaXhlbCA9IGNvbnZlcnRQaXhlbCh0aGlzLnN0aWxsRVtpXSk7Ly9pbiBwaXhlbFxuXHRcdFx0Ly8gY29uc29sZS5sb2cocGl4ZWwueSk7XG5cdFx0XHQvLyBpZih0aGlzLmN1cnJZID4gaS55ICYmIHRoaXMuY3VyclkgPCBpLnkgLSAzOC40ICYmIChjdXJyWCA+IGkueCAmJiBjdXJyWCA8IGkueCArIDE4LjI4KXtcblx0XHRcdGlmICh0aGlzLmNoYXJhY3Rlci5jdXJyWSA8IHBpeGVsLnkpIHtcblx0XHRcdFx0Ly8gY29sbHNpb25UeXBlID0gXCJzdGlsbEVcIjtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSUQpO1xuXHRcdFx0XHR0aGlzLmluaVNldFVwKCk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiaSBhbSBleGVjdXRlZFwiKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tb3ZpbmdFLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcGl4ZWwgPSBjb252ZXJ0UGl4ZWwodGhpcy5tb3ZpbmdFW2ldKTsvL2luIHBpeGVsXG5cdFx0XHQvLyBpZih0aGlzLmN1cnJZID4gaS55ICYmIHRoaXMuY3VyclkgPCBpLnkgLSAzOC40ICYmIChjdXJyWCA+IGkueCAmJiBjdXJyWCA8IGkueCArIDE4LjI4KXtcblx0XHRcdGlmICgodGhpcy5jaGFyYWN0ZXIuY3VyclkgPCBwaXhlbC55KSAmJiAodGhpcy5jdXJyWCA9PSBwaXhlbC54KSkge1xuXHRcdFx0XHRkb2N1bWVudC5yZWxvYWQoKTtcblxuXHRcdFx0fVxuXHRcdH1cblxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcGl4ZWwgPSBjb252ZXJ0UGl4ZWwodGhpcy5pdGVtc1tpXSk7Ly9pbiBwaXhlbFxuXHRcdFx0aWYgKCh0aGlzLmN1cnJZIDwgcGl4ZWwueSkgJiYgKHRoaXMuY3VyclggPT0gcGl4ZWwueCkpIHtcblx0XHRcdFx0dGhpcy5wb2ludCsrO1xuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLnBvaW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG59XG5cblxuXG5cbmZ1bmN0aW9uIGNvbnZlcnRQaXhlbChjb3VudGVyKXtcbiAgICB2YXIgSF9CTE9DS1MgPSAxMztcbiAgICB2YXIgSF9ESU1FTlRJT04gPSAyNTY7XG4gICAgdmFyIFZfQkxPQ0tTID0gMjU7XG4gICAgdmFyIFZfRElNRU5USU9OID0gOTYwO1xuICAgIHZhciBncmlkUGl4ZWwgPSB7XG5cdFx0eDogY291bnRlci5HcmlkWCAqIChIX0RJTUVOVElPTiAvIEhfQkxPQ0tTKSxcblx0XHR5OiAoY291bnRlci5HcmlkWSkgKiAoVl9ESU1FTlRJT04gLyBWX0JMT0NLUylcbiAgICB9XG4gICAgcmV0dXJuIGdyaWRQaXhlbDtcbn1cblxuXG4vLyBQcml2YXRlIG1ldGhvZHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIExvb3Agb3ZlciB0aGUgY2VsbHNcbmZ1bmN0aW9uIGxvb3BDZWxscyhlKSB7XG5cdHZhciB1bml2ZXJzZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdmVyc2UnKTtcblx0dmFyIHBhZ2VYID0gZS5wYWdlWCAtIHVuaXZlcnNlRWxlbS5vZmZzZXRMZWZ0O1xuXHR2YXIgcGFnZVkgPSBlLnBhZ2VZIC0gdW5pdmVyc2VFbGVtLm9mZnNldFRvcDtcblxuXHRmb3IgKGxldCBpID0gMDsgaTx0aGlzLnVuaXZlcnNlLmhlaWdodDsgaSsrKXtcblx0XHRmb3IgKGxldCBqPTA7IGo8dGhpcy51bml2ZXJzZS5sZW5ndGg7IGorKyl7XG5cdFx0XHRsZXQgY2VsbCA9IHRoaXMudW5pdmVyc2UuY2VsbHNbaV1bal07XG5cdFx0XHRoYW5kbGVDbGljayh0aGlzLCBjZWxsLCBwYWdlWCwgcGFnZVkpO1xuXHRcdH1cblx0fVxufVxuXG4vLyBnaXZlIGxpZmUgb3IgZGVhdGggdG8gdGhlIGNlbGwgY2xpY2tlZC5cbi8vIE5vdGU6IGJlY2F1c2UgbG9vcENlbGxzIGlzIGEgY2FsbGJhY2sgd2hpY2ggaGFzIHRoZSBjbGFzcyBjb250ZXh0XG4vLyBib3VuZCB0byBpdCwgdGhpcyBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgaW4gdGhlIGNhbGxiYWNrIGRvZXNuJ3QgZ2V0IHRoZVxuLy8gY29udGV4dCBpbXBsaWNpdGx5LCBzbyBJIG11c3QgcGFzcyBpdC4gRG9lc24ndCBmZWVsIGNsZWFuLi4uXG4vLyBmdW5jdGlvbiBoYW5kbGVDbGljayhzZWxmLCBjZWxsLCBwYWdlWCwgcGFnZVkpe1xuLy8gXHRpZiAocGFnZVggPiBjZWxsLnggJiYgcGFnZVggPCBjZWxsLngrc2VsZi51bml2ZXJzZS5jZWxsTGVuZ3RoICYmXG4vLyBcdFx0XHRcdHBhZ2VZID4gY2VsbC55ICYmIHBhZ2VZIDwgY2VsbC55K3NlbGYudW5pdmVyc2UuY2VsbEhlaWdodCApIHtcbi8vIFx0XHRjaGFuZ2VDZWxscyhzZWxmLCBjZWxsKTtcbi8vIFx0fVxuLy8gfVxuXG4vLyAxIHN0ZXAgPSAxIGdlbmVyYXRpb25cbmZ1bmN0aW9uIHN0ZXAoKXtcblxuXHRcbn1cblxuLypcbipcdHBhc3MgdGhlIGNlbGwgdGhyb3VnaCB0aGUgNCBydWxlcy4gXG5cdE5vdGU6IGNlbGxzIHNob3VsZCBub3QgdXBkYXRlIGhlcmUsIHNpbmNlIGFsdGVyaW5nIDEgYmVmb3JlIHlvdSBjYW5cblx0YW5hbHl6ZSB0aGUgb3RoZXJzIHdpbGwgY2F1c2UgZXJyb25lb3VzIG91dGNvbWVzLlxuKi9cbmZ1bmN0aW9uIHRyYW5zaXRpb25zKHNlbGYsIGNlbGwsIGNlbGxzVG9DaGFuZ2UpIHtcblx0dmFyIHVuaUxlbmd0aCA9IHNlbGYudW5pdmVyc2UubGVuZ3RoO1xuXHR2YXIgdW5pSGVpZ2h0ID0gc2VsZi51bml2ZXJzZS5oZWlnaHQ7XG5cdHZhciBuZWlnaGJvdXJzQWxpdmUgPSAwO1xuXHQvLyBHbyB0aHJvdWdoIHRoZSBuZWlnaGJvdXJzIG9mIGVhY2ggY2VsbC5cblx0Zm9yIChsZXQgaT0wOyBpPDg7IGkrKyl7XG5cdFx0bGV0IG5laWdoYm91cklEID0gY2VsbC5uZWlnaGJvdXJzW2ldO1xuXHRcdGlmIChuZWlnaGJvdXJJRCA+PSB1bmlMZW5ndGgqdW5pSGVpZ2h0IHx8IG5laWdoYm91cklEIDwwKSBjb250aW51ZTtcblx0XHRsZXQgbmVpZ2hib3VyID0gZ2V0Q2VsbEJ5SWQoc2VsZiwgbmVpZ2hib3VySUQpO1xuXHRcdGlmIChuZWlnaGJvdXIuc3RhdGUgPT09IDEpIG5laWdoYm91cnNBbGl2ZSsrO1xuXHR9XG5cdGlmIChjZWxsLnN0YXRlID09PSAxKXtcblx0XHQvLyB6ZSBsaWZlIHJ1bGVzXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIDEpIEFueSBsaXZlIGNlbGwgd2l0aCBmZXdlciB0aGFuIHR3byBsaXZlIG5laWdoYm91cnMgZGllcywgYXMgXG5cdFx0Ly8gaWYgY2F1c2VkIGJ5IHVuZGVyLXBvcHVsYXRpb24uXG5cdFx0Ly8gMikgQW55IGxpdmUgY2VsbCB3aXRoIHR3byBvciB0aHJlZSBsaXZlIG5laWdoYm91cnMgbGl2ZXMgb24gdG8gXG5cdFx0Ly8gdGhlIG5leHQgZ2VuZXJhdGlvbi5cblx0XHRpZiAobmVpZ2hib3Vyc0FsaXZlIDwgMikgY2VsbHNUb0NoYW5nZS5wdXNoKGNlbGwuaWQpO1xuXHRcdC8vIDMpIEFueSBsaXZlIGNlbGwgd2l0aCBtb3JlIHRoYW4gdGhyZWUgbGl2ZSBuZWlnaGJvdXJzIGRpZXMsIGFzIGlmIFxuXHRcdC8vIGJ5IG92ZXJjcm93ZGluZy5cblx0XHRlbHNlIGlmIChuZWlnaGJvdXJzQWxpdmUgPiAzKSBjZWxsc1RvQ2hhbmdlLnB1c2goY2VsbC5pZCk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gNCkgQW55IGRlYWQgY2VsbCB3aXRoIGV4YWN0bHkgdGhyZWUgbGl2ZSBuZWlnaGJvdXJzIGJlY29tZXMgYSBcblx0XHQvLyBsaXZlIGNlbGwsIGFzIGlmIGJ5IHJlcHJvZHVjdGlvbi5cblx0XHRpZiAobmVpZ2hib3Vyc0FsaXZlID09PSAzKSBjZWxsc1RvQ2hhbmdlLnB1c2goY2VsbC5pZCk7XG5cdH1cbn0gXG5cbmZ1bmN0aW9uIGNoYW5nZUNlbGxzKHNlbGYsIGNlbGwpIHtcblx0c2VsZi5jdHguZmlsbFN0eWxlID0gKGNlbGwuc3RhdGUpID8gJ3doaXRlJyA6ICcjMzMzJztcblx0c2VsZi5jdHguZmlsbFJlY3QoY2VsbC54KzEsIGNlbGwueSsxLCBcblx0XHRcdHNlbGYudW5pdmVyc2UuY2VsbExlbmd0aC0yLCBzZWxmLnVuaXZlcnNlLmNlbGxIZWlnaHQtMik7XG5cdGNlbGwuc3RhdGUgPSAoY2VsbC5zdGF0ZSkgPyAwIDogMTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2VsbEJ5SWQoc2VsZiwgaWQpIHtcblx0bGV0IHJvdyA9IE1hdGguZmxvb3IoaWQvc2VsZi51bml2ZXJzZS5sZW5ndGgpO1xuXHRsZXQgY29sdW1uID0gaWQgJSBzZWxmLnVuaXZlcnNlLmxlbmd0aDtcblx0cmV0dXJuIHNlbGYudW5pdmVyc2UuY2VsbHNbcm93XVtjb2x1bW5dO1xufSBcblxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7IiwiY2xhc3MgT2Jqe1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKXtcbiAgICB0aGlzLkdyaWRYID0gb3B0aW9ucy5HcmlkWDtcbiAgICB0aGlzLkdyaWRZID0gb3B0aW9ucy5HcmlkWTtcbiAgICAvLyB0aGlzLnN0YXRlID0gc3RhdGU7Ly8wIGlzIGEgY29sb3IwLCAxIGlzIGNvbG9yMVxuXHR0aGlzLkhfQkxPQ0tTID0gMTM7XG4gICAgdGhpcy5IX0RJTUVOVElPTiA9IDI1NjtcbiAgICB0aGlzLlZfQkxPQ0tTID0gMjU7XG4gICAgdGhpcy5WX0RJTUVOVElPTiA9IDk2MDtcblxuICB9XG5cblxuXG5cbiAvLyAgY29udmVydFBpeGVsKGNvdW50ZXIpIHtcblx0Ly8gICB2YXIgeCA9IGNvdW50ZXIuR3JpZFggKiAodGhpcy5IX0RJTUVOVElPTiAvIHRoaXMuSF9CTE9DS1MpO1xuXHQvLyAgIGNvbnNvbGUubG9nKFwieGlzXCIreCk7XG5cdC8vICAgdmFyIGdyaWRQaXhlbCA9IHtcblx0Ly8gXHQgIHg6IGNvdW50ZXIuR3JpZFggKiAodGhpcy5IX0RJTUVOVElPTiAvIHRoaXMuSF9CTE9DS1MpLFxuXHQvLyBcdCAgeTogKGNvdW50ZXIuR3JpZFkgKyAxKSAqICh0aGlzLlZfRElNRU5USU9OIC8gdGhpcy5WX0JMT0NLUylcblx0Ly8gICB9XG4gLy8gICAgcmV0dXJuIGdyaWRQaXhlbDtcblx0Ly8gfVxuXG5cdCBjbGVhcihjdHgseCx5KSB7XG5cdFx0IC8vIGNvbnNvbGUubG9nKHRoaXMuSF9ESU1FTlRJT04gLyB0aGlzLkhfQkxPQ0tTKTtcblx0XHQgLy8gLy8gY29uc29sZS5sb2codGhpcy5HcmlkWCk7XG5cdFx0IC8vIHZhciB4ID0gdGhpcy5HcmlkWCAqICh0aGlzLkhfRElNRU5USU9OIC8gdGhpcy5IX0JMT0NLUyk7XG5cdFx0IC8vIHZhciB5ID0gKHRoaXMuR3JpZFkpICogKHRoaXMuVl9ESU1FTlRJT04gLyB0aGlzLlZfQkxPQ0tTKTtcblx0XHQgY29uc29sZS5sb2coXCJ4IGlzIFwiKyB4KTtcblx0XHQgY29uc29sZS5sb2coXCJ5IGlzIFwiICsgeSk7XG5cblx0ICBjdHguY2xlYXJSZWN0KHgseSwgMyAqICh0aGlzLkhfRElNRU5USU9OIC8gdGhpcy5IX0JMT0NLUyksIDErKHRoaXMuVl9ESU1FTlRJT04gLyB0aGlzLlZfQkxPQ0tTKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPYmo7XG4iXX0=
