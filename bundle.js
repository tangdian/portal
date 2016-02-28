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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGlhbnRhbmcvcHJvZy9wb3J0YWwvYXBwLmpzIiwiL1VzZXJzL2RpYW50YW5nL3Byb2cvcG9ydGFsL2pzL0NoYXJhY3Rlci5qcyIsIi9Vc2Vycy9kaWFudGFuZy9wcm9nL3BvcnRhbC9qcy9HYW1lLmpzIiwiL1VzZXJzL2RpYW50YW5nL3Byb2cvcG9ydGFsL2pzL09iai5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7c0JDQWlCLFdBQVc7Ozs7O0FBRzVCLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUNsQixJQUFNLE1BQU0sR0FBRyxHQUFHLENBQUM7O0FBRW5CLElBQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQztBQUMzQixJQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7O0FBRTNCLElBQU0sU0FBUyxHQUFHOztBQUVqQixnQkFBZSxFQUFFLEVBQUU7QUFDbkIsZ0JBQWUsRUFBQyxFQUFFO0FBQ2xCLFlBQVcsRUFBRSxHQUFHLEdBQUMsZUFBZTtBQUNoQyxZQUFXLEVBQUUsR0FBRyxHQUFDLGVBQWU7O0NBRWhDLENBQUE7O0FBRUQsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNqRCxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUVsQyxJQUFJLEtBQUssR0FBRyxDQUFDLHdCQUFTOzs7QUFHckIsT0FBTSxFQUFOLE1BQU07QUFDTixRQUFPLEVBQUUsR0FBRztBQUNaLFVBQVMsRUFBVCxTQUFTO0FBQ1QsTUFBSyxFQUFFLEVBQUU7QUFDVCxLQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQ25CLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFD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QUMsUUFBUSxDQUFBLEFBQUMsRUFBRSxDQUFDLEdBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxBQUFDLENBQUMsQ0FBQztLQUNqRzs7O1NBbENHLEdBQUc7OztBQXFDVCxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgR2FtZSBmcm9tICcuL2pzL0dhbWUnO1xuXG4vLyBpbiBwaXhlbHNcbmNvbnN0IFdJRFRIID0gMjU2O1xuY29uc3QgSEVJR0hUID0gOTYwO1xuLy8gaW4gY2VsbCB1bml0c1xuY29uc3QgVU5JVkVSU0VfTEVOR1RIID0gMTM7XG5jb25zdCBVTklWRVJTRV9IRUlHSFQgPSAyNTtcblxuY29uc3QgRElNRU5TSU9OID0ge1xuXHRcblx0VU5JVkVSU0VfTEVOR1RIOiAxMyxcblx0VU5JVkVSU0VfSEVJR0hUOjI1LFxuXHRDRUxMX0xFTkdUSDogMjU2L1VOSVZFUlNFX0xFTkdUSCxcblx0Q0VMTF9IRUlHSFQ6IDk2MC9VTklWRVJTRV9IRUlHSFRcblxufVxuXG52YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXZlcnNlJyk7XG52YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbnZhciBnYW1lcyA9IFtuZXcgR2FtZSh7XG5cdC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuXHQvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcblx0Y2FudmFzLFxuXHRjb250ZXh0OiBjdHgsXG5cdERJTUVOU0lPTixcblx0c3BlZWQ6IDIwLFxuXHRwbGFuOiBbXCJ4eHggeHh4IHh4eFwiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInh4eCB4eHgga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHh4eCB4eHhcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInh4eCB4eHgga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHh4eCB4eHhcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInh4eCB4eHgga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHh4eCB4eHhcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IGtra1wiXVxufSksIF07XG5cblxuXG5mdW5jdGlvbiBjaG9vc2VHYW1lKG51bSkge1xuXHRnYW1lc1tudW1dLmRyYXdHcmlkKCk7XG5cdGdhbWVzW251bV0uaW5pU2V0VXAoKTtcblx0Z2FtZXNbbnVtXS5kcmF3KCk7XG5cdC8vIGdhbWVzW251bV0ucGxheSgpO1xufVxuXG5cbmNob29zZUdhbWUoMCk7XG5cblxuXG4iLCJpbXBvcnQgT2JqIGZyb20gJy4vT2JqJztcblxuY2xhc3MgQ2hhcmFjdGVyIGV4dGVuZHMgT2Jqe1xuICBjb25zdHJ1Y3RvcihzdGF0ZSxvcHRpb25zKXtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy5jdXJyWSA9IHRoaXMuY29udmVydFBpeGVsKG9wdGlvbnMpLnk7Ly9pbiBwaXhlbDsgWSBERUNSRUFTRVNcbiAgICB0aGlzLmN1cnJYID0gdGhpcy5jb252ZXJ0UGl4ZWwob3B0aW9ucykueDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gY29udmVydE9wdGlvbnNUb1BpeGVsKG9wdGlvbnMpe1xuICAvLyAgIHZhciBIX0JMT0NLUyA9IDE0O1xuICAvLyAgIHZhciBIX0RJTUVOVElPTiA9IDI1NjtcbiAgLy8gICB2YXIgVl9CTE9DS1MgPSAyNTtcbiAgLy8gICB2YXIgVl9ESU1FTlRJT04gPSA5NjA7XG4gIC8vICAgdmFyIGdyaWRQaXhlbC54ID0gb3B0aW9ucy54ICogKEhfRElNRU5USU9OIC8gSF9CTE9DS1MpO1xuICAvLyAgIHZhciBncmlkUGl4ZWwueSA9IChvcHRpb25zLnkrMSkgKiAoVl9ESU1FTlRJT04gLyBWX0JMT0NLUyk7XG4gIC8vICAgcmV0dXJuIGdyaWRQaXhlbDtcbiAgLy8gfVxuXG4gaW5pdGlhbGl6ZUNoYXJhY3RlcihjdHgsR3JpZFgsR3JpZFkpe1xuIC8vb25seSBhYmxlIHRvIGFjY2VzcyAndGhpcycgb24gdGhlIG91dHNpZGVcbiAgIHZhciBzZWxmID0gdGhpcztcbiAgIHZhciBieCA9IHRoaXMuY3Vyclg7XG4gICB2YXIgYnkgPSB0aGlzLmN1cnJZO1xuICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgc2VsZi5jbGVhcihjdHgsIGJ4LCBieSk7XG4gICAgIHZhciB4ID0gc2VsZi5jb252ZXJ0UGl4ZWwoc2VsZi5vcHRpb25zKS54O1xuICAgICB2YXIgeSA9IHNlbGYuY29udmVydFBpeGVsKHNlbGYub3B0aW9ucykueTtcbiAgICAgc2VsZi5jdXJyWCA9IHg7XG4gICAgIHNlbGYuY3VyclkgPSB5O1xuICAgICB2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcbiAgICAgaW1hZ2VPYmoub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlT2JqLCB4LCB5KTtcblxuICAgICB9O1xuICAgICBpbWFnZU9iai5zcmMgPSBcIi4vaW1hZ2VzL1N0YXIyLnBuZ1wiO1xuICAgfSwgNTApO1xuICBcbiAgIFxuICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcblxuICAgIC8vIGN0eC5hcmMoMTIwLCA5MDAsIDE3LCAwLCBNYXRoLlBJKjIsIHRydWUpOy8vY2hhcmFjdGVyIHNpemVcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gICAgLy8gY3R4LmZpbGwoKTtcbiAgICAvLyBjdHguY2xvc2VQYXRoKCk7XG4gIH1cblxuICBsb2coKSB7XG4gICAgY29uc29sZS5sb2coXCJkb2luZ1wiKTtcbiAgfVxuXG4gICBkcmF3KGN0eCkge1xuICAgICAgY29uc29sZS5sb2coXCJkcmF3aW5nLi5cIik7XG5cbiAgICBcbiAgICB0aGlzLmNsZWFyKGN0eCx0aGlzLmN1cnJYLHRoaXMuY3VyclkpO1xuICAgIFxuICAgIHZhciBkeSA9IC0xO1xuICAgIHRoaXMuY3VyclkgKz0gZHk7XG5cbiAgICB2YXIgeCA9IHRoaXMuY3Vyclg7XG4gICAgdmFyIHkgPSB0aGlzLmN1cnJZO1xuICAgIHZhciBpbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlT2JqLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICBjdHguZHJhd0ltYWdlKGltYWdlT2JqLCB4LCB5KTtcblxuICAgIH07XG4gICAgaW1hZ2VPYmouc3JjID0gXCIuL2ltYWdlcy9TdGFyMi5wbmdcIjtcblxuICB9XG5cbiAgLy8gc2V0SW50ZXJ2YWwoZHJhdyAsMjApOy8vY2hlY2sgZXZlcnkgMjBtc1xuXG4gICBjb252ZXJ0UGl4ZWwoY291bnRlcil7XG4gICAgLy8gdmFyIEhfQkxPQ0tTID0gMTQ7XG4gICAgLy8gdmFyIEhfRElNRU5USU9OID0gMjU2O1xuICAgIC8vIHZhciBWX0JMT0NLUyA9IDI1O1xuICAgIC8vIHZhciBWX0RJTUVOVElPTiA9IDk2MDtcbiAgICB2YXIgZ3JpZFBpeGVsID0ge1xuICAgICAgeDogY291bnRlci5HcmlkWCAqICh0aGlzLkhfRElNRU5USU9OIC8gdGhpcy5IX0JMT0NLUyksXG4gICAgICB5OiAoY291bnRlci5HcmlkWSkgKiAodGhpcy5WX0RJTUVOVElPTiAvIHRoaXMuVl9CTE9DS1MpXG4gICAgfVxuICAgIHJldHVybiBncmlkUGl4ZWw7XG4gIH1cblxuXG4gICBjaGVja0NvbGxpc2lvbihzdGlsbEUsbW92aW5nRSxwb3J0YWxzLGl0ZW1zKXtcbiAgICB2YXIgY29sbGlzaW9uVHlwZTtcblxuICAgIC8vIC8vbG9vcCB0aHJvdWdoIGV2ZXJ5IG9iamVjdCBpbiB0aGUgbWFwXG4gICAgLy8gZm9yKHZhciBpID0gMDsgaSA8IHBvcnRhbHMubGVuZ3RoOyBpKyspe1xuICAgIC8vICAgdmFyIHBpeGVsID0gdGhpcy5jb252ZXJ0UGl4ZWwocG9ydGFsc1tpXSk7Ly9pbiBwaXhlbFxuICAgIC8vICAgaWYoKHRoaXMuY3VyclkgPT0gcGl4ZWwueSkgJiYgKHRoaXMuY3VyclggPT0gcGl4ZWwueCkpe1xuICAgIC8vICAgICB0aGlzLmNsZWFyKCk7XG4gICAgLy8gICAgIGNvbGxzaW9uVHlwZSA9IFwicG9ydGFsc1wiO1xuICAgIC8vICAgICBjdXJyWCA9IHBvcnRhbHNbaSsxXS5HcmlkWDsvL2luIGdyaWRcbiAgICAvLyAgICAgY3VyclkgPSBwb3J0YWxzW2krMV0uR3JpZFk7XG4gICAgLy8gICAgIHZhciBpbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xuICAgIC8vICAgICBpbWFnZU9iai5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgIC8vICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2VPYmosIHgsIHkpO1xuXG4gICAgLy8gICAgIH07XG4gICAgLy8gICAgIGltYWdlT2JqLnNyYyA9IFwiLi9pbWFnZXMvU3RhcjIucG5nXCI7XG5cblxuICAgIC8vICAgICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gICAgIC8vIGN0eC5hcmMoY3VyclggKyA5LjE0LCBjdXJyWSwgMTcsIDAsIE1hdGguUEkqMiwgdHJ1ZSk7Ly9wb3J0YWwgc2l6ZVxuICAgIC8vICAgICAvLyBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gICAgLy8gICAgIC8vIGN0eC5maWxsKCk7XG4gICAgLy8gICAgIC8vIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgc3RpbGxFLmxlbmd0aDsgaSsrKXtcbiAgICAgIHZhciBwaXhlbCA9IHRoaXMuY29udmVydFBpeGVsKHN0aWxsRVtpXSk7Ly9pbiBwaXhlbFxuICAgICAgLy8gY29uc29sZS5sb2cocGl4ZWwueSk7XG4gICAgICAvLyBpZih0aGlzLmN1cnJZID4gaS55ICYmIHRoaXMuY3VyclkgPCBpLnkgLSAzOC40ICYmIChjdXJyWCA+IGkueCAmJiBjdXJyWCA8IGkueCArIDE4LjI4KXtcbiAgICAgIGlmKHRoaXMuY3VyclkgPCBwaXhlbC55KXtcbiAgICAgICAgLy8gY29sbHNpb25UeXBlID0gXCJzdGlsbEVcIjtcbiAgICAgICAgZG9jdW1lbnQucmVsb2FkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb3ZpbmdFLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcGl4ZWwgPSB0aGlzLmNvbnZlcnRQaXhlbChtb3ZpbmdFW2ldKTsvL2luIHBpeGVsXG4gICAgICAvLyBpZih0aGlzLmN1cnJZID4gaS55ICYmIHRoaXMuY3VyclkgPCBpLnkgLSAzOC40ICYmIChjdXJyWCA+IGkueCAmJiBjdXJyWCA8IGkueCArIDE4LjI4KXtcbiAgICAgIGlmICgodGhpcy5jdXJyWSA9PSBwaXhlbC55KSAmJiAodGhpcy5jdXJyWCA9PSBwaXhlbC54KSkge1xuICAgICAgICBkb2N1bWVudC5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKyl7XG4gICAgICB2YXIgcGl4ZWwgPSB0aGlzLmNvbnZlcnRQaXhlbChpdGVtc1tpXSk7Ly9pbiBwaXhlbFxuICAgICAgaWYoKHRoaXMuY3VyclkgPT0gcGl4ZWwueSkgJiYgKHRoaXMuY3VyclggPT0gcGl4ZWwueCkpe1xuICAgICAgICBpdGVtQ29sbGVjdGVkICsrO1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtQ29sbGVjdGVkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBzZXRJbnRlcnZhbChjaGVja0NvbGxpc2lvbiAsMjApOy8vY2hlY2sgZXZlcnkgMjBtc1xuICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBjaGFuZ2VTdGF0ZSk7XG5cblxuICAgY2hhbmdlU3RhdGUoZSl7XG4gICAgLy9yZWdpc3RlciBhIGV2ZW50IGxpc3RlbmVyXG4gICAgdmFyIGtleSA9IGUua2V5Q29kZSA/IGUua2V5Q29kZSA6IGUud2hpY2g7XG4gICAgaWYgKGtleSA9PSAzOCkge1xuICAgICAgY29uc29sZS5sb2coXCJZb3UgUHJlc3NlZCB0aGUgZmtpbmcgU3BhY2VcIik7XG4gICAgICBzd2l0Y2goc3RhdGUpe1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgc3RhdGUrKztcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIldoaXRlXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgc3RhdGUtLTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkJsYWNrXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcjtcbiIsImltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXInO1xuaW1wb3J0IE9iaiBmcm9tICcuL09iaic7XG4vLyBpbXBvcnQgSXRlbSBmcm9tIC4vQ2hhcmFjdGVyLmpzO1xuLy8gaW1wb3J0IEVuZW15IGZyb20gLi9DaGFyYWN0ZXIuanM7XG5cblxuXG5jbGFzcyBHYW1lIHtcblx0Ly8gc2V0IHVwIGluc3RhbmNlIHZhcmlhYmxlc1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zKXtcblx0XHR0aGlzLmNhbnZhcyA9IG9wdGlvbnMuY2FudmFzO1xuXHRcdHRoaXMuY3R4ID0gb3B0aW9ucy5jb250ZXh0O1xuXHRcdHRoaXMuRElNRU5TSU9OID0gb3B0aW9ucy5ESU1FTlNJT047XG5cdFx0dGhpcy51bml2ZXJzZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdmVyc2UnKTtcblx0XHR0aGlzLnNwZWVkID0gb3B0aW9ucy5zcGVlZDtcblx0XHR0aGlzLnBsYW4gPSBvcHRpb25zLnBsYW47XG5cdFx0dGhpcy5HcmlkID0gW107XG5cdFx0dGhpcy5wb3J0YWxzID0gW107XG5cdFx0dGhpcy5pdGVtcyA9IFtdO1xuXHRcdHRoaXMubW92aW5nRSA9IFtdO1xuXHRcdHRoaXMuc3RpbGxFID0gW107XG5cdFx0dGhpcy5jaGFyYWN0ZXIgPSBuZXcgQ2hhcmFjdGVyKDAse0dyaWRYOjUsR3JpZFk6MjR9KTtcblx0XHR0aGlzLnBvaW50ID0gMDtcblx0XHR0aGlzLndpbiA9IGZhbHNlO1xuXHRcdHRoaXMuSF9CTE9DS1MgPSAxMztcblx0XHR0aGlzLkhfRElNRU5USU9OID0gMjU2O1xuXHRcdHRoaXMuVl9CTE9DS1MgPSAyNTtcblx0XHR0aGlzLlZfRElNRU5USU9OID0gOTYwO1xuXHRcdHRoaXMuaW50ZXJ2YWxJRCA9IDA7XG5cblx0fVxuXG5cdC8vIGluaXRpYWwgc2V0IHVwXG5cdGluaVNldFVwKCkge1xuXHRcdC8vIC8vIE5vdGU6IHVzaW5nIGJpbmQgdG8gcGFzcyB0aGUgY2xhc3MnIGNvbnRleHQgdG8gdGhlIGNhbGxiYWNrc1xuXHRcdC8vIC8vIG5vdCBzdXJlIGlmIHRoaXMgY2FuIGJlIGltcHJvdmVkLlxuXHRcdC8vIC8vIHRoaXMudW5pdmVyc2VFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9vcENlbGxzLmJpbmR0aGlzKCkpO1xuXHRcdC8vIC8vIHdoZW4gdXNlciBjbGljaywgc3RhcnQgdGhlIGdhbWVcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKVxuXHRcdFx0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHNlbGYucGxheSgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGNvbnNvbGUubG9nKHRoaXMucGxhbik7XG5cdFx0XHR0aGlzLnBhcnNlKHRoaXMucGxhbik7XG5cblx0XHRcdHRoaXMuY2hhcmFjdGVyLmluaXRpYWxpemVDaGFyYWN0ZXIodGhpcy5jdHgsdGhpcy5jaGFyYWN0ZXIuR3JpZFgsdGhpcy5jaGFyYWN0ZXIuR3JpZFkpO1xuXG5cdFx0XHQvLyBkcmF3KHRoaXMuR3JpZCkge1xuXG5cdFx0XHQvLyB9XG5cdH1cblxuXHRcblxuXHRwYXJzZShwbGFuKSB7XG5cdFx0Ly8gbGV0IGdyaWQgPSBbXTtcblxuXHRcdGZvcih2YXIgaT0wO2k8cGxhbi5sZW5ndGg7aSsrKSB7XG5cdFx0XHRsZXQgYXJyYXkgPSBwbGFuW2ldLnNwbGl0KFwiIFwiKTtcblxuXHRcblx0XHRcdGZvcih2YXIgaj0wO2o8YXJyYXkubGVuZ3RoO2orKykge1xuXHRcdFx0XHRpZihhcnJheVtqXSA9PSBcInh4eFwiKSB7XG5cdFx0XHRcdFx0dGhpcy5zdGlsbEUucHVzaChuZXcgT2JqKHsgR3JpZFg6IGosIEdyaWRZOiBpIH0pKTtcblx0XHRcdFx0XHRcblxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRlbHNlIGlmKGFycmF5W2pdID09IFwibW9lXCIpIHtcblx0XHRcdFx0XHR0aGlzLkVuZW1pZXMucHVzaChuZXcgbW92aW5nRSh7fSkpO1xuXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZihhcnJheVtqXSA9PSBcInB0V1wiKSB7XG5cdFx0XHRcdFx0dGhpcy5wb3J0YWxzLnB1c2gobmV3IFBvcnRhbCgxLCB7IEdyaXhYOiBqLCBHcmlkWTppfSkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZWxzZSBpZihhcnJheVtqXSA9PSBcInB0QlwiKSB7XG5cdFx0XHRcdFx0dGhpcy5wb3J0YWxzLnB1c2gobmV3IFBvcnRhbCgwLCB7IEdyaWRYOiBqLCBHcmlkWTppfSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XG5cdFx0fVxuXG5cdFx0Ly8gcmV0dXJuIGdyaWQ7XG5cdH1cblxuXG5cblxuXHRwbGF5KCl7XG5cdFx0Ly8gcmVtb3ZlIGdvZCBtb2RlXG5cdFx0Ly8gdGhpcy51bml2ZXJzZUVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb29wQ2VsbHMpO1xuXHRcdC8vIGdhbWUgbG9vcFxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuc3BlZWQpO1xuXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0dGhpcy5pbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG5cdFx0XHRzZWxmLmNoYXJhY3Rlci5kcmF3KHNlbGYuY3R4KTtcblx0XHRcdHNlbGYuY2hlY2tDb2xsaXNpb24oKTtcblx0XHR9LCAyMCk7XG5cdFxuXHRcdC8vIHNldEludGVydmFsKHRoaXMuY2hhcmFjdGVyLmNoZWNrQ29sbGlzaW9uKHRoaXMucG9ydGFscyx0aGlzLmVuZW1pZXMsdGhpcy5pdGVtcyksIHRoaXMuc3BlZWQpO1xuXHRcdC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuY2hhcmFjdGVyLmNoYW5nZVN0YXRlKVxuXG5cdH1cblxuXHRsb2dnaW5nKCkge1xuXHRcdGNvbnNvbGUubG9nKFwibG9nZ2luZ1wiKTtcblx0fVxuXG5cdC8vIGRyYXcgZ3JpZFxuXHRkcmF3R3JpZCgpIHtcblx0XHR0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjNzc3Jztcblx0XHR0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xuXHRcdC8vIHZlcnRpY2FsIGxpbmVzXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGk8dGhpcy5ESU1FTlNJT04uVU5JVkVSU0VfTEVOR1RIOyBpKyspe1xuXHRcdFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XG5cdFx0XHR0aGlzLmN0eC5tb3ZlVG8odGhpcy5ESU1FTlNJT04uQ0VMTF9MRU5HVEgqaSwwKTtcblx0XHRcdHRoaXMuY3R4LmxpbmVUbyh0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCppLCBcblx0XHRcdFx0dGhpcy5ESU1FTlNJT04uVU5JVkVSU0VfSEVJR0hUKnRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUKTtcblx0XHRcdHRoaXMuY3R4LnN0cm9rZSgpO1xuXHRcdH1cblx0XHQvLyBob3Jpem9udGFsIGxpbmVzXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGk8dGhpcy5ESU1FTlNJT04uVU5JVkVSU0VfSEVJR0hUOyBpKyspe1xuXHRcdFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XG5cdFx0XHR0aGlzLmN0eC5tb3ZlVG8oMCx0aGlzLkRJTUVOU0lPTi5DRUxMX0hFSUdIVCppKTtcblx0XHRcdHRoaXMuY3R4LmxpbmVUbyh0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9MRU5HVEgqdGhpcy5ESU1FTlNJT04uQ0VMTF9MRU5HVEgsIFxuXHRcdFx0XHR0aGlzLkRJTUVOU0lPTi5DRUxMX0hFSUdIVCppKTtcblx0XHRcdHRoaXMuY3R4LnN0cm9rZSgpO1xuXHRcdH1cblx0fVxuXG5cdGRyYXcoKSB7XG5cdFx0Ly9kcmF3IHN0YXRpYyBzdHVmZlx0XG5cdFx0Ly8gY29uc29sZS5sb2codGhpcy5HcmlkKTtcblxuXHRcdGZvcih2YXIgaT0wO2k8dGhpcy5zdGlsbEUubGVuZ3RoO2krKykge1xuXG5cdFx0XHRsZXQgeCA9IHRoaXMuc3RpbGxFW2ldLkdyaWRYO1xuXHRcdFx0bGV0IHkgPSB0aGlzLnN0aWxsRVtpXS5HcmlkWTtcblx0XHRcdGNvbnNvbGUubG9nKFwieCBvZiBvYmogaXNcIiArIHgpO1xuXHRcdFx0Y29uc29sZS5sb2coXCJ5IG9mIG9iaiBpc1wiICsgeSk7XG5cblx0XHRcdHRoaXMuY3R4LmZpbGxSZWN0KCgxKzMqeCt4KSp0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCx5KnRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hULDMqdGhpcy5ESU1FTlNJT04uQ0VMTF9MRU5HVEgsdGhpcy5ESU1FTlNJT04uQ0VMTF9IRUlHSFQpO1xuXG5cdFx0XHR9XG5cdFx0fVxuXG5cblxuXHRcdC8vIGZvciAodmFyIGk9MDtpPHRoaXMucG9ydGFscy5sZW5ndGg7aSsrKSB7XG5cdFx0Ly8gXHRjdHguZmlsbFN0eWxlPVwiI0ZGMDAwMFwiO1xuXHRcdC8vIFx0dGhpcy5jdHguZmlsbFJlY3QoaSpDRUxMX0xFTkdUSCxpKkNFTExfSEVJR0hULDMqQ0VMTF9MRU5HVEgsQ0VMTF9IRUlHSFQpO1xuXHRcdC8vIH1cblxuXHRcdC8vIGZvciAodmFyIGk9MDtpPHRoaXMucG9ydGFscy5sZW5ndGg7aSsrKSB7XG5cdFx0Ly8gXHRjdHguZmlsbFN0eWxlPVwiYmx1ZVwiO1xuXHRcdC8vIFx0dGhpcy5jdHguZmlsbFJlY3QoaSpDRUxMX0xFTkdUSCxpKkNFTExfSEVJR0hULDMqQ0VMTF9MRU5HVEgsQ0VMTF9IRUlHSFQpO1xuXHRcdC8vIH1cblxuXHRcdC8vIGZvciAodmFyIGk9MDtpPHRoaXMucG9ydGFscy5sZW5ndGg7aSsrKSB7XG5cdFx0Ly8gXHRjdHguZmlsbFN0eWxlPVwieWVsbG93XCI7XG5cdFx0Ly8gXHR0aGlzLmN0eC5maWxsUmVjdChpKkNFTExfTEVOR1RILGkqQ0VMTF9IRUlHSFQsMypDRUxMX0xFTkdUSCxDRUxMX0hFSUdIVCk7XG5cdFx0Ly8gfVxuXG5cdGNoZWNrQ29sbGlzaW9uKCkge1xuXHRcdC8vIHZhciBjb2xsaXNpb25UeXBlO1xuXG5cdFx0Ly8gLy9sb29wIHRocm91Z2ggZXZlcnkgb2JqZWN0IGluIHRoZSBtYXBcblx0XHQvLyBmb3IodmFyIGkgPSAwOyBpIDwgcG9ydGFscy5sZW5ndGg7IGkrKyl7XG5cdFx0Ly8gICB2YXIgcGl4ZWwgPSBjb252ZXJ0UGl4ZWwocG9ydGFsc1tpXSk7Ly9pbiBwaXhlbFxuXHRcdC8vICAgaWYoKHRoaXMuY3VyclkgPT0gcGl4ZWwueSkgJiYgKHRoaXMuY3VyclggPT0gcGl4ZWwueCkgJiYgKHRoaXMucG9ydGFsc1tpXS5zdGF0ZT09dGhpcy5jaGFyYWN0ZXIuc3RhdGUpKXtcblx0XHQvLyAgICAgdGhpcy5jbGVhcigpO1xuXHRcdC8vICAgICBjb2xsc2lvblR5cGUgPSBcInBvcnRhbHNcIjtcblx0XHQvLyAgICAgY3VyclggPSBwb3J0YWxzW2krMV0uR3JpZFg7Ly9pbiBncmlkXG5cdFx0Ly8gICAgIGN1cnJZID0gcG9ydGFsc1tpKzFdLkdyaWRZO1xuXHRcdC8vICAgICB2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcblx0XHQvLyAgICAgaW1hZ2VPYmoub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cblx0XHQvLyAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlT2JqLCB4LCB5KTtcblxuXHRcdC8vICAgICB9O1xuXHRcdC8vICAgICBpbWFnZU9iai5zcmMgPSBcIi4vaW1hZ2VzL1N0YXIyLnBuZ1wiO1xuXG5cblx0XHQvLyAgICAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuXHRcdC8vICAgICAvLyBjdHguYXJjKGN1cnJYICsgOS4xNCwgY3VyclksIDE3LCAwLCBNYXRoLlBJKjIsIHRydWUpOy8vcG9ydGFsIHNpemVcblx0XHQvLyAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTVERFwiO1xuXHRcdC8vICAgICAvLyBjdHguZmlsbCgpO1xuXHRcdC8vICAgICAvLyBjdHguY2xvc2VQYXRoKCk7XG5cdFx0Ly8gICB9XG5cdFx0Ly8gfVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0aWxsRS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHBpeGVsID0gY29udmVydFBpeGVsKHRoaXMuc3RpbGxFW2ldKTsvL2luIHBpeGVsXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhwaXhlbC55KTtcblx0XHRcdC8vIGlmKHRoaXMuY3VyclkgPiBpLnkgJiYgdGhpcy5jdXJyWSA8IGkueSAtIDM4LjQgJiYgKGN1cnJYID4gaS54ICYmIGN1cnJYIDwgaS54ICsgMTguMjgpe1xuXHRcdFx0aWYgKHRoaXMuY2hhcmFjdGVyLmN1cnJZIDwgcGl4ZWwueSkge1xuXHRcdFx0XHQvLyBjb2xsc2lvblR5cGUgPSBcInN0aWxsRVwiO1xuXHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJRCk7XG5cdFx0XHRcdHRoaXMuaW5pU2V0VXAoKTtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJpIGFtIGV4ZWN1dGVkXCIpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1vdmluZ0UubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBwaXhlbCA9IGNvbnZlcnRQaXhlbCh0aGlzLm1vdmluZ0VbaV0pOy8vaW4gcGl4ZWxcblx0XHRcdC8vIGlmKHRoaXMuY3VyclkgPiBpLnkgJiYgdGhpcy5jdXJyWSA8IGkueSAtIDM4LjQgJiYgKGN1cnJYID4gaS54ICYmIGN1cnJYIDwgaS54ICsgMTguMjgpe1xuXHRcdFx0aWYgKCh0aGlzLmNoYXJhY3Rlci5jdXJyWSA8IHBpeGVsLnkpICYmICh0aGlzLmN1cnJYID09IHBpeGVsLngpKSB7XG5cdFx0XHRcdGRvY3VtZW50LnJlbG9hZCgpO1xuXG5cdFx0XHR9XG5cdFx0fVxuXG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBwaXhlbCA9IGNvbnZlcnRQaXhlbCh0aGlzLml0ZW1zW2ldKTsvL2luIHBpeGVsXG5cdFx0XHRpZiAoKHRoaXMuY3VyclkgPCBwaXhlbC55KSAmJiAodGhpcy5jdXJyWCA9PSBwaXhlbC54KSkge1xuXHRcdFx0XHR0aGlzLnBvaW50Kys7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMucG9pbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cbn1cblxuXG5cblxuZnVuY3Rpb24gY29udmVydFBpeGVsKGNvdW50ZXIpe1xuICAgIHZhciBIX0JMT0NLUyA9IDEzO1xuICAgIHZhciBIX0RJTUVOVElPTiA9IDI1NjtcbiAgICB2YXIgVl9CTE9DS1MgPSAyNTtcbiAgICB2YXIgVl9ESU1FTlRJT04gPSA5NjA7XG4gICAgdmFyIGdyaWRQaXhlbCA9IHtcblx0XHR4OiBjb3VudGVyLkdyaWRYICogKEhfRElNRU5USU9OIC8gSF9CTE9DS1MpLFxuXHRcdHk6IChjb3VudGVyLkdyaWRZKSAqIChWX0RJTUVOVElPTiAvIFZfQkxPQ0tTKVxuICAgIH1cbiAgICByZXR1cm4gZ3JpZFBpeGVsO1xufVxuXG5cbi8vIFByaXZhdGUgbWV0aG9kc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gTG9vcCBvdmVyIHRoZSBjZWxsc1xuZnVuY3Rpb24gbG9vcENlbGxzKGUpIHtcblx0dmFyIHVuaXZlcnNlRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml2ZXJzZScpO1xuXHR2YXIgcGFnZVggPSBlLnBhZ2VYIC0gdW5pdmVyc2VFbGVtLm9mZnNldExlZnQ7XG5cdHZhciBwYWdlWSA9IGUucGFnZVkgLSB1bml2ZXJzZUVsZW0ub2Zmc2V0VG9wO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpPHRoaXMudW5pdmVyc2UuaGVpZ2h0OyBpKyspe1xuXHRcdGZvciAobGV0IGo9MDsgajx0aGlzLnVuaXZlcnNlLmxlbmd0aDsgaisrKXtcblx0XHRcdGxldCBjZWxsID0gdGhpcy51bml2ZXJzZS5jZWxsc1tpXVtqXTtcblx0XHRcdGhhbmRsZUNsaWNrKHRoaXMsIGNlbGwsIHBhZ2VYLCBwYWdlWSk7XG5cdFx0fVxuXHR9XG59XG5cbi8vIGdpdmUgbGlmZSBvciBkZWF0aCB0byB0aGUgY2VsbCBjbGlja2VkLlxuLy8gTm90ZTogYmVjYXVzZSBsb29wQ2VsbHMgaXMgYSBjYWxsYmFjayB3aGljaCBoYXMgdGhlIGNsYXNzIGNvbnRleHRcbi8vIGJvdW5kIHRvIGl0LCB0aGlzIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBpbiB0aGUgY2FsbGJhY2sgZG9lc24ndCBnZXQgdGhlXG4vLyBjb250ZXh0IGltcGxpY2l0bHksIHNvIEkgbXVzdCBwYXNzIGl0LiBEb2Vzbid0IGZlZWwgY2xlYW4uLi5cbi8vIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKHNlbGYsIGNlbGwsIHBhZ2VYLCBwYWdlWSl7XG4vLyBcdGlmIChwYWdlWCA+IGNlbGwueCAmJiBwYWdlWCA8IGNlbGwueCtzZWxmLnVuaXZlcnNlLmNlbGxMZW5ndGggJiZcbi8vIFx0XHRcdFx0cGFnZVkgPiBjZWxsLnkgJiYgcGFnZVkgPCBjZWxsLnkrc2VsZi51bml2ZXJzZS5jZWxsSGVpZ2h0ICkge1xuLy8gXHRcdGNoYW5nZUNlbGxzKHNlbGYsIGNlbGwpO1xuLy8gXHR9XG4vLyB9XG5cbi8vIDEgc3RlcCA9IDEgZ2VuZXJhdGlvblxuZnVuY3Rpb24gc3RlcCgpe1xuXG5cdFxufVxuXG4vKlxuKlx0cGFzcyB0aGUgY2VsbCB0aHJvdWdoIHRoZSA0IHJ1bGVzLiBcblx0Tm90ZTogY2VsbHMgc2hvdWxkIG5vdCB1cGRhdGUgaGVyZSwgc2luY2UgYWx0ZXJpbmcgMSBiZWZvcmUgeW91IGNhblxuXHRhbmFseXplIHRoZSBvdGhlcnMgd2lsbCBjYXVzZSBlcnJvbmVvdXMgb3V0Y29tZXMuXG4qL1xuZnVuY3Rpb24gdHJhbnNpdGlvbnMoc2VsZiwgY2VsbCwgY2VsbHNUb0NoYW5nZSkge1xuXHR2YXIgdW5pTGVuZ3RoID0gc2VsZi51bml2ZXJzZS5sZW5ndGg7XG5cdHZhciB1bmlIZWlnaHQgPSBzZWxmLnVuaXZlcnNlLmhlaWdodDtcblx0dmFyIG5laWdoYm91cnNBbGl2ZSA9IDA7XG5cdC8vIEdvIHRocm91Z2ggdGhlIG5laWdoYm91cnMgb2YgZWFjaCBjZWxsLlxuXHRmb3IgKGxldCBpPTA7IGk8ODsgaSsrKXtcblx0XHRsZXQgbmVpZ2hib3VySUQgPSBjZWxsLm5laWdoYm91cnNbaV07XG5cdFx0aWYgKG5laWdoYm91cklEID49IHVuaUxlbmd0aCp1bmlIZWlnaHQgfHwgbmVpZ2hib3VySUQgPDApIGNvbnRpbnVlO1xuXHRcdGxldCBuZWlnaGJvdXIgPSBnZXRDZWxsQnlJZChzZWxmLCBuZWlnaGJvdXJJRCk7XG5cdFx0aWYgKG5laWdoYm91ci5zdGF0ZSA9PT0gMSkgbmVpZ2hib3Vyc0FsaXZlKys7XG5cdH1cblx0aWYgKGNlbGwuc3RhdGUgPT09IDEpe1xuXHRcdC8vIHplIGxpZmUgcnVsZXNcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0Ly8gMSkgQW55IGxpdmUgY2VsbCB3aXRoIGZld2VyIHRoYW4gdHdvIGxpdmUgbmVpZ2hib3VycyBkaWVzLCBhcyBcblx0XHQvLyBpZiBjYXVzZWQgYnkgdW5kZXItcG9wdWxhdGlvbi5cblx0XHQvLyAyKSBBbnkgbGl2ZSBjZWxsIHdpdGggdHdvIG9yIHRocmVlIGxpdmUgbmVpZ2hib3VycyBsaXZlcyBvbiB0byBcblx0XHQvLyB0aGUgbmV4dCBnZW5lcmF0aW9uLlxuXHRcdGlmIChuZWlnaGJvdXJzQWxpdmUgPCAyKSBjZWxsc1RvQ2hhbmdlLnB1c2goY2VsbC5pZCk7XG5cdFx0Ly8gMykgQW55IGxpdmUgY2VsbCB3aXRoIG1vcmUgdGhhbiB0aHJlZSBsaXZlIG5laWdoYm91cnMgZGllcywgYXMgaWYgXG5cdFx0Ly8gYnkgb3ZlcmNyb3dkaW5nLlxuXHRcdGVsc2UgaWYgKG5laWdoYm91cnNBbGl2ZSA+IDMpIGNlbGxzVG9DaGFuZ2UucHVzaChjZWxsLmlkKTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyA0KSBBbnkgZGVhZCBjZWxsIHdpdGggZXhhY3RseSB0aHJlZSBsaXZlIG5laWdoYm91cnMgYmVjb21lcyBhIFxuXHRcdC8vIGxpdmUgY2VsbCwgYXMgaWYgYnkgcmVwcm9kdWN0aW9uLlxuXHRcdGlmIChuZWlnaGJvdXJzQWxpdmUgPT09IDMpIGNlbGxzVG9DaGFuZ2UucHVzaChjZWxsLmlkKTtcblx0fVxufSBcblxuZnVuY3Rpb24gY2hhbmdlQ2VsbHMoc2VsZiwgY2VsbCkge1xuXHRzZWxmLmN0eC5maWxsU3R5bGUgPSAoY2VsbC5zdGF0ZSkgPyAnd2hpdGUnIDogJyMzMzMnO1xuXHRzZWxmLmN0eC5maWxsUmVjdChjZWxsLngrMSwgY2VsbC55KzEsIFxuXHRcdFx0c2VsZi51bml2ZXJzZS5jZWxsTGVuZ3RoLTIsIHNlbGYudW5pdmVyc2UuY2VsbEhlaWdodC0yKTtcblx0Y2VsbC5zdGF0ZSA9IChjZWxsLnN0YXRlKSA/IDAgOiAxO1xufVxuXG5mdW5jdGlvbiBnZXRDZWxsQnlJZChzZWxmLCBpZCkge1xuXHRsZXQgcm93ID0gTWF0aC5mbG9vcihpZC9zZWxmLnVuaXZlcnNlLmxlbmd0aCk7XG5cdGxldCBjb2x1bW4gPSBpZCAlIHNlbGYudW5pdmVyc2UubGVuZ3RoO1xuXHRyZXR1cm4gc2VsZi51bml2ZXJzZS5jZWxsc1tyb3ddW2NvbHVtbl07XG59IFxuXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiLCJjbGFzcyBPYmp7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpe1xuICAgIHRoaXMuR3JpZFggPSBvcHRpb25zLkdyaWRYO1xuICAgIHRoaXMuR3JpZFkgPSBvcHRpb25zLkdyaWRZO1xuICAgIC8vIHRoaXMuc3RhdGUgPSBzdGF0ZTsvLzAgaXMgYSBjb2xvcjAsIDEgaXMgY29sb3IxXG5cdHRoaXMuSF9CTE9DS1MgPSAxMztcbiAgICB0aGlzLkhfRElNRU5USU9OID0gMjU2O1xuICAgIHRoaXMuVl9CTE9DS1MgPSAyNTtcbiAgICB0aGlzLlZfRElNRU5USU9OID0gOTYwO1xuXG4gIH1cblxuXG5cblxuIC8vICBjb252ZXJ0UGl4ZWwoY291bnRlcikge1xuXHQvLyAgIHZhciB4ID0gY291bnRlci5HcmlkWCAqICh0aGlzLkhfRElNRU5USU9OIC8gdGhpcy5IX0JMT0NLUyk7XG5cdC8vICAgY29uc29sZS5sb2coXCJ4aXNcIit4KTtcblx0Ly8gICB2YXIgZ3JpZFBpeGVsID0ge1xuXHQvLyBcdCAgeDogY291bnRlci5HcmlkWCAqICh0aGlzLkhfRElNRU5USU9OIC8gdGhpcy5IX0JMT0NLUyksXG5cdC8vIFx0ICB5OiAoY291bnRlci5HcmlkWSArIDEpICogKHRoaXMuVl9ESU1FTlRJT04gLyB0aGlzLlZfQkxPQ0tTKVxuXHQvLyAgIH1cbiAvLyAgICByZXR1cm4gZ3JpZFBpeGVsO1xuXHQvLyB9XG5cblx0IGNsZWFyKGN0eCx4LHkpIHtcblx0XHQgLy8gY29uc29sZS5sb2codGhpcy5IX0RJTUVOVElPTiAvIHRoaXMuSF9CTE9DS1MpO1xuXHRcdCAvLyAvLyBjb25zb2xlLmxvZyh0aGlzLkdyaWRYKTtcblx0XHQgLy8gdmFyIHggPSB0aGlzLkdyaWRYICogKHRoaXMuSF9ESU1FTlRJT04gLyB0aGlzLkhfQkxPQ0tTKTtcblx0XHQgLy8gdmFyIHkgPSAodGhpcy5HcmlkWSkgKiAodGhpcy5WX0RJTUVOVElPTiAvIHRoaXMuVl9CTE9DS1MpO1xuXHRcdCBjb25zb2xlLmxvZyhcInggaXMgXCIrIHgpO1xuXHRcdCBjb25zb2xlLmxvZyhcInkgaXMgXCIgKyB5KTtcblxuXHQgIGN0eC5jbGVhclJlY3QoeCx5LCAzICogKHRoaXMuSF9ESU1FTlRJT04gLyB0aGlzLkhfQkxPQ0tTKSwgMSsodGhpcy5WX0RJTUVOVElPTiAvIHRoaXMuVl9CTE9DS1MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9iajtcbiJdfQ==
