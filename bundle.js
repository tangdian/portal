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
	speed: 200,
	plan: ["xxx xxx xxx", "kkk kkk kkk", "xxx xxx kkk", "kkk kkk kkk", "kkk xxx xxx", "kkk kkk kkk", "kkk xxx kkk"]
})];

function chooseGame(num) {
	games[num].drawGrid();
	games[num].iniSetUp();
	games[num].draw();
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

    _get(Object.getPrototypeOf(Character.prototype), "constructor", this).call(this, state, options);
    this.currY = this.convertPixel(options).y; //in pixel; Y DECREASES
    this.currX = this.convertPixel(options).x;
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
      ctx.beginPath();
      ctx.arc(120, 900, 17, 0, Math.PI * 2, true); //character size
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
  }, {
    key: "draw",
    value: function draw() {
      this.clear();
      var dy = -1;
      currY += dy;
      ctx.beginPath();
      ctx.arc(currX, currY, 17, 0, Math.PI * 2, true); //character size
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
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
        y: (counter.GridY + 1) * (this.V_DIMENTION / this.V_BLOCKS)
      };
      return gridPixel;
    }
  }, {
    key: "checkCollision",
    value: function checkCollision(portals, enemies, items) {
      var collisionType;
      //loop through every object in the map
      for (var i = 0; i < portals.length; i++) {
        var pixel = convertPixel(portals[i]); //in pixel
        if (this.currY == pixel.y && this.currX == pixel.x) {
          this.clear();
          collsionType = "portals";
          currX = portals[i + 1].GridX; //in grid
          currY = portals[i + 1].GridY;
          ctx.beginPath();
          ctx.arc(currX + 9.14, currY, 17, 0, Math.PI * 2, true); //portal size
          ctx.fillStyle = "#0095DD";
          ctx.fill();
          ctx.closePath();
        }
      }

      for (var i = 0; i < enemies.length; i++) {
        var pixel = convertPixel(enemies[i]); //in pixel
        // if(this.currY > i.y && this.currY < i.y - 38.4 && (currX > i.x && currX < i.x + 18.28){
        if (this.currY == pixel.y && this.currX == pixel.x) {
          collsionType = "enemies";
          document.reload();
        }
      }
      for (var i = 0; i < items.length; i++) {
        var pixel = convertPixel(items[i]); //in pixel
        if (this.currY == pixel.y && this.currX == pixel.x) {
          collsionType = "items";
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

// import Portal from ./Character.js;
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
		this.enemies = [];
		this.character = new _Character2['default'](0, { GridX: 6, GridY: 24 });
		this.point = 0;
		this.win = false;
	}

	// Private methods
	// --------------------

	// Loop over the cells

	// initial set up

	_createClass(Game, [{
		key: 'iniSetUp',
		value: function iniSetUp() {
			// // Note: using bind to pass the class' context to the callbacks
			// // not sure if this can be improved.
			// // this.universeElem.addEventListener('click', loopCells.bindthis());
			// // when user click, start the game
			// document.getElementById('start')
			// 	.addEventListener('click', this.play.bind(this));
			console.log(this.plan);
			this.Grid = this.parse(this.plan);

			this.character.initializeCharacter(this.ctx);

			// draw(this.Grid) {

			// }
		}
	}, {
		key: 'parse',
		value: function parse(plan) {
			var grid = [];

			for (var i = 0; i < plan.length; i++) {
				var array = plan[i].split(" ");

				grid.push(array);
				// for(var j=0;i<array.length;i++) {
				// 	if(array[j] == "itm") {
				// 		this.items.push()
				// 		array[j] = "kkk";

				// 	}
				// 	else if(array[j] == "moe") {
				// 		this.Enemies.push(new Enemy(i,j,))
				// 		array[j] = "kkk";

				// 	}
				// 	else if(array[j] == "ptW") {
				// 		this.portals.push(new Portal(i,j,1));
				// 		array[j] = "kkk";
				// 	}

				// 	else if(array[j] == "ptB") {
				// 		this.portals.push(new Portal(i,j,0));
				// 		array[j] = "kkk";
				// 	}
				// }
			}

			return grid;
		}

		// start the game
		// play(e){
		// 	// remove god mode
		// 	// this.universeElem.removeEventListener('click', loopCells);
		// 	// game loop
		// 	setInterval(this.character.update(), this.speed);
		// 	for (var i = 0; i < enemies.length;i++) {
		// 		setInterval(this.character.update(), this.speed);

		// 	}
		// 	setInterval(this.character.update(), this.speed);

		// }

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
			console.log(this.Grid);

			for (var i = 0; i < this.Grid.length; i++) {

				for (var j = 0; j < this.Grid[i].length; j++) {
					var elem = this.Grid[i][j];
					console.log(elem);
					if (elem == "xxx") {
						console.log(j);
						console.log(i);
						this.ctx.fillRect((1 + 3 * j + j) * this.DIMENSION.CELL_LENGTH, i * this.DIMENSION.CELL_HEIGHT, 3 * this.DIMENSION.CELL_LENGTH, this.DIMENSION.CELL_HEIGHT);
					}
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
		}
	}]);

	return Game;
})();

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

},{"./Character":2}],4:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Obj = (function () {
  function Obj(options, state) {
    _classCallCheck(this, Obj);

    this.GridX = options.GridX;
    this.GridY = options.GridY;
    this.state = 0; //0 is a color0, 1 is color1
    this.H_BLOCKS = 14;
    this.H_DIMENTION = 256;
    this.V_BLOCKS = 25;
    this.V_DIMENTION = 960;
  }

  _createClass(Obj, [{
    key: "clear",
    value: function clear() {
      var gridPixel = convertPixel({ GridX: this.GridX, GridY: this.GridY });
      ctx.clearRect(gridPixel.x, gridPixel.y, 3 * (H_DIMENTION / H_BLOCKS), V_DIMENTION / V_BLOCKS);
    }
  }, {
    key: "convertPixel",
    value: function convertPixel(counter) {
      var gridPixel = {
        x: counter.GridX * (this.H_DIMENTION / this.H_BLOCKS),
        y: (counter.GridY + 1) * (this.V_DIMENTION / this.V_BLOCKS)
      };
      return gridPixel;
    }
  }]);

  return Obj;
})();

module.exports = Obj;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvQWxhbi9Eb2N1bWVudHMvVVdhdGVybG9vL0dpdGh1Yi9wb3J0YWwvYXBwLmpzIiwiL1VzZXJzL0FsYW4vRG9jdW1lbnRzL1VXYXRlcmxvby9HaXRodWIvcG9ydGFsL2pzL0NoYXJhY3Rlci5qcyIsIi9Vc2Vycy9BbGFuL0RvY3VtZW50cy9VV2F0ZXJsb28vR2l0aHViL3BvcnRhbC9qcy9HYW1lLmpzIiwiL1VzZXJzL0FsYW4vRG9jdW1lbnRzL1VXYXRlcmxvby9HaXRodWIvcG9ydGFsL2pzL09iai5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7c0JDQWlCLFdBQVc7Ozs7O0FBRzVCLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUNsQixJQUFNLE1BQU0sR0FBRyxHQUFHLENBQUM7O0FBRW5CLElBQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQztBQUMzQixJQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7O0FBRTNCLElBQU0sU0FBUyxHQUFHOztBQUVqQixnQkFBZSxFQUFFLEVBQUU7QUFDbkIsZ0JBQWUsRUFBQyxFQUFFO0FBQ2xCLFlBQVcsRUFBRSxHQUFHLEdBQUMsZUFBZTtBQUNoQyxZQUFXLEVBQUUsR0FBRyxHQUFDLGVBQWU7O0NBRWhDLENBQUE7O0FBRUQsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNqRCxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUVsQyxJQUFJLEtBQUssR0FBRyxDQUFDLHdCQUFTOzs7QUFHckIsT0FBTSxFQUFOLE1BQU07QUFDTixRQUFPLEVBQUUsR0FBRztBQUNaLFVBQVMsRUFBVCxTQUFTO0FBQ1QsTUFBSyxFQUFFLEdBQUc7QUFDVixLQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQ25CLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxF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QUFDLEVBQUUsT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUEsQUFBQztBQUNyRCxTQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQSxJQUFLLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQSxBQUFDO09BQzNELENBQUE7QUFDQSxhQUFPLFNBQVMsQ0FBQztLQUNuQjs7O1NBdkJJLEdBQUc7OztBQTBCVCxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgR2FtZSBmcm9tICcuL2pzL0dhbWUnO1xuXG4vLyBpbiBwaXhlbHNcbmNvbnN0IFdJRFRIID0gMjU2O1xuY29uc3QgSEVJR0hUID0gOTYwO1xuLy8gaW4gY2VsbCB1bml0c1xuY29uc3QgVU5JVkVSU0VfTEVOR1RIID0gMTM7XG5jb25zdCBVTklWRVJTRV9IRUlHSFQgPSAyNTtcblxuY29uc3QgRElNRU5TSU9OID0ge1xuXHRcblx0VU5JVkVSU0VfTEVOR1RIOiAxMyxcblx0VU5JVkVSU0VfSEVJR0hUOjI1LFxuXHRDRUxMX0xFTkdUSDogMjU2L1VOSVZFUlNFX0xFTkdUSCxcblx0Q0VMTF9IRUlHSFQ6IDk2MC9VTklWRVJTRV9IRUlHSFRcblxufVxuXG52YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXZlcnNlJyk7XG52YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbnZhciBnYW1lcyA9IFtuZXcgR2FtZSh7XG5cdC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuXHQvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcblx0Y2FudmFzLFxuXHRjb250ZXh0OiBjdHgsXG5cdERJTUVOU0lPTixcblx0c3BlZWQ6IDIwMCxcblx0cGxhbjogW1wieHh4IHh4eCB4eHhcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJ4eHggeHh4IGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayB4eHggeHh4XCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHh4eCBra2tcIl1cbn0pLCBdO1xuXG5cblxuZnVuY3Rpb24gY2hvb3NlR2FtZShudW0pIHtcblx0Z2FtZXNbbnVtXS5kcmF3R3JpZCgpO1xuXHRnYW1lc1tudW1dLmluaVNldFVwKCk7XG5cdGdhbWVzW251bV0uZHJhdygpO1xufVxuXG5cbmNob29zZUdhbWUoMCk7XG5cblxuXG4iLCJpbXBvcnQgT2JqIGZyb20gJy4vT2JqJztcblxuY2xhc3MgQ2hhcmFjdGVyIGV4dGVuZHMgT2Jqe1xuICBjb25zdHJ1Y3RvcihzdGF0ZSxvcHRpb25zKXtcbiAgICBzdXBlcihzdGF0ZSxvcHRpb25zKTtcbiAgICB0aGlzLmN1cnJZID0gdGhpcy5jb252ZXJ0UGl4ZWwob3B0aW9ucykueTsvL2luIHBpeGVsOyBZIERFQ1JFQVNFU1xuICAgIHRoaXMuY3VyclggPSB0aGlzLmNvbnZlcnRQaXhlbChvcHRpb25zKS54O1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gY29udmVydE9wdGlvbnNUb1BpeGVsKG9wdGlvbnMpe1xuICAvLyAgIHZhciBIX0JMT0NLUyA9IDE0O1xuICAvLyAgIHZhciBIX0RJTUVOVElPTiA9IDI1NjtcbiAgLy8gICB2YXIgVl9CTE9DS1MgPSAyNTtcbiAgLy8gICB2YXIgVl9ESU1FTlRJT04gPSA5NjA7XG4gIC8vICAgdmFyIGdyaWRQaXhlbC54ID0gb3B0aW9ucy54ICogKEhfRElNRU5USU9OIC8gSF9CTE9DS1MpO1xuICAvLyAgIHZhciBncmlkUGl4ZWwueSA9IChvcHRpb25zLnkrMSkgKiAoVl9ESU1FTlRJT04gLyBWX0JMT0NLUyk7XG4gIC8vICAgcmV0dXJuIGdyaWRQaXhlbDtcbiAgLy8gfVxuXG4gaW5pdGlhbGl6ZUNoYXJhY3RlcihjdHgpe1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKDEyMCwgOTAwLCAxNywgMCwgTWF0aC5QSSoyLCB0cnVlKTsvL2NoYXJhY3RlciBzaXplXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTVERFwiO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgIGRyYXcoKSB7XG4gICAgdGhpcy5jbGVhcigpO1xuICAgIHZhciBkeSA9IC0xO1xuICAgIGN1cnJZICs9IGR5O1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKGN1cnJYLCBjdXJyWSwgMTcsIDAsIE1hdGguUEkqMiwgdHJ1ZSk7Ly9jaGFyYWN0ZXIgc2l6ZVxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIC8vIHNldEludGVydmFsKGRyYXcgLDIwKTsvL2NoZWNrIGV2ZXJ5IDIwbXNcblxuICAgY29udmVydFBpeGVsKGNvdW50ZXIpe1xuICAgIC8vIHZhciBIX0JMT0NLUyA9IDE0O1xuICAgIC8vIHZhciBIX0RJTUVOVElPTiA9IDI1NjtcbiAgICAvLyB2YXIgVl9CTE9DS1MgPSAyNTtcbiAgICAvLyB2YXIgVl9ESU1FTlRJT04gPSA5NjA7XG4gICAgdmFyIGdyaWRQaXhlbCA9IHtcbiAgICAgIHg6IGNvdW50ZXIuR3JpZFggKiAodGhpcy5IX0RJTUVOVElPTiAvIHRoaXMuSF9CTE9DS1MpLFxuICAgICAgeTogKGNvdW50ZXIuR3JpZFkgKyAxKSAqICh0aGlzLlZfRElNRU5USU9OIC8gdGhpcy5WX0JMT0NLUylcbiAgICB9XG4gICAgcmV0dXJuIGdyaWRQaXhlbDtcbiAgfVxuXG5cbiAgIGNoZWNrQ29sbGlzaW9uKHBvcnRhbHMsIGVuZW1pZXMsIGl0ZW1zKXtcbiAgICB2YXIgY29sbGlzaW9uVHlwZTtcbiAgICAvL2xvb3AgdGhyb3VnaCBldmVyeSBvYmplY3QgaW4gdGhlIG1hcFxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwb3J0YWxzLmxlbmd0aDsgaSsrKXtcbiAgICAgIHZhciBwaXhlbCA9IGNvbnZlcnRQaXhlbChwb3J0YWxzW2ldKTsvL2luIHBpeGVsXG4gICAgICBpZigodGhpcy5jdXJyWSA9PSBwaXhlbC55KSAmJiAodGhpcy5jdXJyWCA9PSBwaXhlbC54KSl7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgY29sbHNpb25UeXBlID0gXCJwb3J0YWxzXCI7XG4gICAgICAgIGN1cnJYID0gcG9ydGFsc1tpKzFdLkdyaWRYOy8vaW4gZ3JpZFxuICAgICAgICBjdXJyWSA9IHBvcnRhbHNbaSsxXS5HcmlkWTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKGN1cnJYICsgOS4xNCwgY3VyclksIDE3LCAwLCBNYXRoLlBJKjIsIHRydWUpOy8vcG9ydGFsIHNpemVcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTVERFwiO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGVuZW1pZXMubGVuZ3RoOyBpKyspe1xuICAgICAgdmFyIHBpeGVsID0gY29udmVydFBpeGVsKGVuZW1pZXNbaV0pOy8vaW4gcGl4ZWxcbiAgICAgIC8vIGlmKHRoaXMuY3VyclkgPiBpLnkgJiYgdGhpcy5jdXJyWSA8IGkueSAtIDM4LjQgJiYgKGN1cnJYID4gaS54ICYmIGN1cnJYIDwgaS54ICsgMTguMjgpe1xuICAgICAgaWYoKHRoaXMuY3VyclkgPT0gcGl4ZWwueSkgJiYgKHRoaXMuY3VyclggPT0gcGl4ZWwueCkpe1xuICAgICAgICBjb2xsc2lvblR5cGUgPSBcImVuZW1pZXNcIjtcbiAgICAgICAgZG9jdW1lbnQucmVsb2FkKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKyl7XG4gICAgICB2YXIgcGl4ZWwgPSBjb252ZXJ0UGl4ZWwoaXRlbXNbaV0pOy8vaW4gcGl4ZWxcbiAgICAgIGlmKCh0aGlzLmN1cnJZID09IHBpeGVsLnkpICYmICh0aGlzLmN1cnJYID09IHBpeGVsLngpKXtcbiAgICAgICAgY29sbHNpb25UeXBlID0gXCJpdGVtc1wiO1xuICAgICAgICBpdGVtQ29sbGVjdGVkICsrO1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtQ29sbGVjdGVkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBzZXRJbnRlcnZhbChjaGVja0NvbGxpc2lvbiAsMjApOy8vY2hlY2sgZXZlcnkgMjBtc1xuICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBjaGFuZ2VTdGF0ZSk7XG5cblxuICAgY2hhbmdlU3RhdGUoZSl7XG4gICAgLy9yZWdpc3RlciBhIGV2ZW50IGxpc3RlbmVyXG4gICAgdmFyIGtleSA9IGUua2V5Q29kZSA/IGUua2V5Q29kZSA6IGUud2hpY2g7XG4gICAgaWYgKGtleSA9PSAzOCkge1xuICAgICAgY29uc29sZS5sb2coXCJZb3UgUHJlc3NlZCB0aGUgZmtpbmcgU3BhY2VcIik7XG4gICAgICBzd2l0Y2goc3RhdGUpe1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgc3RhdGUrKztcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIldoaXRlXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgc3RhdGUtLTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkJsYWNrXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcjtcbiIsImltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXInO1xuLy8gaW1wb3J0IFBvcnRhbCBmcm9tIC4vQ2hhcmFjdGVyLmpzO1xuLy8gaW1wb3J0IEl0ZW0gZnJvbSAuL0NoYXJhY3Rlci5qcztcbi8vIGltcG9ydCBFbmVteSBmcm9tIC4vQ2hhcmFjdGVyLmpzO1xuXG5cblxuY2xhc3MgR2FtZSB7XG5cdC8vIHNldCB1cCBpbnN0YW5jZSB2YXJpYWJsZXNcblx0Y29uc3RydWN0b3Iob3B0aW9ucyl7XG5cdFx0dGhpcy5jYW52YXMgPSBvcHRpb25zLmNhbnZhcztcblx0XHR0aGlzLmN0eCA9IG9wdGlvbnMuY29udGV4dDtcblx0XHR0aGlzLkRJTUVOU0lPTiA9IG9wdGlvbnMuRElNRU5TSU9OO1xuXHRcdHRoaXMudW5pdmVyc2VFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXZlcnNlJyk7XG5cdFx0dGhpcy5zcGVlZCA9IG9wdGlvbnMuc3BlZWQ7XG5cdFx0dGhpcy5wbGFuID0gb3B0aW9ucy5wbGFuO1xuXHRcdHRoaXMuR3JpZCA9IFtdO1xuXHRcdHRoaXMucG9ydGFscyA9IFtdO1xuXHRcdHRoaXMuaXRlbXMgPSBbXTtcblx0XHR0aGlzLmVuZW1pZXMgPSBbXTtcblx0XHR0aGlzLmNoYXJhY3RlciA9IG5ldyBDaGFyYWN0ZXIoMCx7R3JpZFg6NixHcmlkWToyNH0pO1xuXHRcdHRoaXMucG9pbnQgPSAwO1xuXHRcdHRoaXMud2luID0gZmFsc2U7XG5cdH1cblxuXHQvLyBpbml0aWFsIHNldCB1cFxuXHRpbmlTZXRVcCgpIHtcblx0XHQvLyAvLyBOb3RlOiB1c2luZyBiaW5kIHRvIHBhc3MgdGhlIGNsYXNzJyBjb250ZXh0IHRvIHRoZSBjYWxsYmFja3Ncblx0XHQvLyAvLyBub3Qgc3VyZSBpZiB0aGlzIGNhbiBiZSBpbXByb3ZlZC5cblx0XHQvLyAvLyB0aGlzLnVuaXZlcnNlRWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvb3BDZWxscy5iaW5kdGhpcygpKTtcblx0XHQvLyAvLyB3aGVuIHVzZXIgY2xpY2ssIHN0YXJ0IHRoZSBnYW1lXG5cdFx0Ly8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0Jylcblx0XHQvLyBcdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucGxheS5iaW5kKHRoaXMpKTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnBsYW4pO1xuXHRcdFx0dGhpcy5HcmlkID0gdGhpcy5wYXJzZSh0aGlzLnBsYW4pO1xuXG5cdFx0XHR0aGlzLmNoYXJhY3Rlci5pbml0aWFsaXplQ2hhcmFjdGVyKHRoaXMuY3R4KTtcblxuXHRcdFx0Ly8gZHJhdyh0aGlzLkdyaWQpIHtcblxuXHRcdFx0Ly8gfVxuXHR9XG5cblx0cGFyc2UocGxhbikge1xuXHRcdGxldCBncmlkID0gW107XG5cblx0XHRmb3IodmFyIGk9MDtpPHBsYW4ubGVuZ3RoO2krKykge1xuXHRcdFx0bGV0IGFycmF5ID0gcGxhbltpXS5zcGxpdChcIiBcIik7XG5cdFx0XG5cdFx0XHRncmlkLnB1c2goYXJyYXkpO1xuXHRcdFx0Ly8gZm9yKHZhciBqPTA7aTxhcnJheS5sZW5ndGg7aSsrKSB7XG5cdFx0XHQvLyBcdGlmKGFycmF5W2pdID09IFwiaXRtXCIpIHtcblx0XHRcdC8vIFx0XHR0aGlzLml0ZW1zLnB1c2goKVxuXHRcdFx0Ly8gXHRcdGFycmF5W2pdID0gXCJra2tcIjtcblxuXHRcdFx0Ly8gXHR9XG5cdFx0XHQvLyBcdGVsc2UgaWYoYXJyYXlbal0gPT0gXCJtb2VcIikge1xuXHRcdFx0Ly8gXHRcdHRoaXMuRW5lbWllcy5wdXNoKG5ldyBFbmVteShpLGosKSlcblx0XHRcdC8vIFx0XHRhcnJheVtqXSA9IFwia2trXCI7XG5cblx0XHRcdC8vIFx0fVxuXHRcdFx0Ly8gXHRlbHNlIGlmKGFycmF5W2pdID09IFwicHRXXCIpIHtcblx0XHRcdC8vIFx0XHR0aGlzLnBvcnRhbHMucHVzaChuZXcgUG9ydGFsKGksaiwxKSk7XG5cdFx0XHQvLyBcdFx0YXJyYXlbal0gPSBcImtra1wiO1xuXHRcdFx0Ly8gXHR9XG5cblx0XHRcdC8vIFx0ZWxzZSBpZihhcnJheVtqXSA9PSBcInB0QlwiKSB7XG5cdFx0XHQvLyBcdFx0dGhpcy5wb3J0YWxzLnB1c2gobmV3IFBvcnRhbChpLGosMCkpO1xuXHRcdFx0Ly8gXHRcdGFycmF5W2pdID0gXCJra2tcIjtcblx0XHRcdC8vIFx0fVxuXHRcdFx0Ly8gfVxuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gZ3JpZDtcblx0fVxuXG5cblxuXHQvLyBzdGFydCB0aGUgZ2FtZVxuXHQvLyBwbGF5KGUpe1xuXHQvLyBcdC8vIHJlbW92ZSBnb2QgbW9kZVxuXHQvLyBcdC8vIHRoaXMudW5pdmVyc2VFbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9vcENlbGxzKTtcblx0Ly8gXHQvLyBnYW1lIGxvb3Bcblx0Ly8gXHRzZXRJbnRlcnZhbCh0aGlzLmNoYXJhY3Rlci51cGRhdGUoKSwgdGhpcy5zcGVlZCk7XG5cdC8vIFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbmVtaWVzLmxlbmd0aDtpKyspIHtcblx0Ly8gXHRcdHNldEludGVydmFsKHRoaXMuY2hhcmFjdGVyLnVwZGF0ZSgpLCB0aGlzLnNwZWVkKTtcblxuXHQvLyBcdH1cblx0Ly8gXHRzZXRJbnRlcnZhbCh0aGlzLmNoYXJhY3Rlci51cGRhdGUoKSwgdGhpcy5zcGVlZCk7XG5cblx0Ly8gfVxuXG5cdC8vIGRyYXcgZ3JpZFxuXHRkcmF3R3JpZCgpIHtcblx0XHR0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjNzc3Jztcblx0XHR0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xuXHRcdC8vIHZlcnRpY2FsIGxpbmVzXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGk8dGhpcy5ESU1FTlNJT04uVU5JVkVSU0VfTEVOR1RIOyBpKyspe1xuXHRcdFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XG5cdFx0XHR0aGlzLmN0eC5tb3ZlVG8odGhpcy5ESU1FTlNJT04uQ0VMTF9MRU5HVEgqaSwwKTtcblx0XHRcdHRoaXMuY3R4LmxpbmVUbyh0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCppLCBcblx0XHRcdFx0dGhpcy5ESU1FTlNJT04uVU5JVkVSU0VfSEVJR0hUKnRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUKTtcblx0XHRcdHRoaXMuY3R4LnN0cm9rZSgpO1xuXHRcdH1cblx0XHQvLyBob3Jpem9udGFsIGxpbmVzXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGk8dGhpcy5ESU1FTlNJT04uVU5JVkVSU0VfSEVJR0hUOyBpKyspe1xuXHRcdFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XG5cdFx0XHR0aGlzLmN0eC5tb3ZlVG8oMCx0aGlzLkRJTUVOU0lPTi5DRUxMX0hFSUdIVCppKTtcblx0XHRcdHRoaXMuY3R4LmxpbmVUbyh0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9MRU5HVEgqdGhpcy5ESU1FTlNJT04uQ0VMTF9MRU5HVEgsIFxuXHRcdFx0XHR0aGlzLkRJTUVOU0lPTi5DRUxMX0hFSUdIVCppKTtcblx0XHRcdHRoaXMuY3R4LnN0cm9rZSgpO1xuXHRcdH1cblx0fVxuXG5cdGRyYXcoKSB7XG5cdFx0Ly9kcmF3IHN0YXRpYyBzdHVmZlx0XG5cdFx0Y29uc29sZS5sb2codGhpcy5HcmlkKTtcblxuXHRcdGZvcih2YXIgaT0wO2k8dGhpcy5HcmlkLmxlbmd0aDtpKyspIHtcblxuXHRcdFx0Zm9yKHZhciBqPTA7ajx0aGlzLkdyaWRbaV0ubGVuZ3RoO2orKykge1xuXHRcdFx0XHRsZXQgZWxlbSA9IHRoaXMuR3JpZFtpXVtqXTtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVsZW0pO1xuXHRcdFx0XHRpZiAoZWxlbSA9PSBcInh4eFwiKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coaik7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coaSk7XG5cdFx0XHRcdFx0dGhpcy5jdHguZmlsbFJlY3QoKDErMypqK2opKnRoaXMuRElNRU5TSU9OLkNFTExfTEVOR1RILGkqdGhpcy5ESU1FTlNJT04uQ0VMTF9IRUlHSFQsMyp0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCx0aGlzLkRJTUVOU0lPTi5DRUxMX0hFSUdIVCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblxuXG5cdFx0Ly8gZm9yICh2YXIgaT0wO2k8dGhpcy5wb3J0YWxzLmxlbmd0aDtpKyspIHtcblx0XHQvLyBcdGN0eC5maWxsU3R5bGU9XCIjRkYwMDAwXCI7XG5cdFx0Ly8gXHR0aGlzLmN0eC5maWxsUmVjdChpKkNFTExfTEVOR1RILGkqQ0VMTF9IRUlHSFQsMypDRUxMX0xFTkdUSCxDRUxMX0hFSUdIVCk7XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gZm9yICh2YXIgaT0wO2k8dGhpcy5wb3J0YWxzLmxlbmd0aDtpKyspIHtcblx0XHQvLyBcdGN0eC5maWxsU3R5bGU9XCJibHVlXCI7XG5cdFx0Ly8gXHR0aGlzLmN0eC5maWxsUmVjdChpKkNFTExfTEVOR1RILGkqQ0VMTF9IRUlHSFQsMypDRUxMX0xFTkdUSCxDRUxMX0hFSUdIVCk7XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gZm9yICh2YXIgaT0wO2k8dGhpcy5wb3J0YWxzLmxlbmd0aDtpKyspIHtcblx0XHQvLyBcdGN0eC5maWxsU3R5bGU9XCJ5ZWxsb3dcIjtcblx0XHQvLyBcdHRoaXMuY3R4LmZpbGxSZWN0KGkqQ0VMTF9MRU5HVEgsaSpDRUxMX0hFSUdIVCwzKkNFTExfTEVOR1RILENFTExfSEVJR0hUKTtcblx0XHQvLyB9XG5cblxufVxuXG59XG5cbi8vIFByaXZhdGUgbWV0aG9kc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gTG9vcCBvdmVyIHRoZSBjZWxsc1xuZnVuY3Rpb24gbG9vcENlbGxzKGUpIHtcblx0dmFyIHVuaXZlcnNlRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml2ZXJzZScpO1xuXHR2YXIgcGFnZVggPSBlLnBhZ2VYIC0gdW5pdmVyc2VFbGVtLm9mZnNldExlZnQ7XG5cdHZhciBwYWdlWSA9IGUucGFnZVkgLSB1bml2ZXJzZUVsZW0ub2Zmc2V0VG9wO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpPHRoaXMudW5pdmVyc2UuaGVpZ2h0OyBpKyspe1xuXHRcdGZvciAobGV0IGo9MDsgajx0aGlzLnVuaXZlcnNlLmxlbmd0aDsgaisrKXtcblx0XHRcdGxldCBjZWxsID0gdGhpcy51bml2ZXJzZS5jZWxsc1tpXVtqXTtcblx0XHRcdGhhbmRsZUNsaWNrKHRoaXMsIGNlbGwsIHBhZ2VYLCBwYWdlWSk7XG5cdFx0fVxuXHR9XG59XG5cbi8vIGdpdmUgbGlmZSBvciBkZWF0aCB0byB0aGUgY2VsbCBjbGlja2VkLlxuLy8gTm90ZTogYmVjYXVzZSBsb29wQ2VsbHMgaXMgYSBjYWxsYmFjayB3aGljaCBoYXMgdGhlIGNsYXNzIGNvbnRleHRcbi8vIGJvdW5kIHRvIGl0LCB0aGlzIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBpbiB0aGUgY2FsbGJhY2sgZG9lc24ndCBnZXQgdGhlXG4vLyBjb250ZXh0IGltcGxpY2l0bHksIHNvIEkgbXVzdCBwYXNzIGl0LiBEb2Vzbid0IGZlZWwgY2xlYW4uLi5cbi8vIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKHNlbGYsIGNlbGwsIHBhZ2VYLCBwYWdlWSl7XG4vLyBcdGlmIChwYWdlWCA+IGNlbGwueCAmJiBwYWdlWCA8IGNlbGwueCtzZWxmLnVuaXZlcnNlLmNlbGxMZW5ndGggJiZcbi8vIFx0XHRcdFx0cGFnZVkgPiBjZWxsLnkgJiYgcGFnZVkgPCBjZWxsLnkrc2VsZi51bml2ZXJzZS5jZWxsSGVpZ2h0ICkge1xuLy8gXHRcdGNoYW5nZUNlbGxzKHNlbGYsIGNlbGwpO1xuLy8gXHR9XG4vLyB9XG5cbi8vIDEgc3RlcCA9IDEgZ2VuZXJhdGlvblxuZnVuY3Rpb24gc3RlcCgpe1xuXG5cdFxufVxuXG4vKlxuKlx0cGFzcyB0aGUgY2VsbCB0aHJvdWdoIHRoZSA0IHJ1bGVzLiBcblx0Tm90ZTogY2VsbHMgc2hvdWxkIG5vdCB1cGRhdGUgaGVyZSwgc2luY2UgYWx0ZXJpbmcgMSBiZWZvcmUgeW91IGNhblxuXHRhbmFseXplIHRoZSBvdGhlcnMgd2lsbCBjYXVzZSBlcnJvbmVvdXMgb3V0Y29tZXMuXG4qL1xuZnVuY3Rpb24gdHJhbnNpdGlvbnMoc2VsZiwgY2VsbCwgY2VsbHNUb0NoYW5nZSkge1xuXHR2YXIgdW5pTGVuZ3RoID0gc2VsZi51bml2ZXJzZS5sZW5ndGg7XG5cdHZhciB1bmlIZWlnaHQgPSBzZWxmLnVuaXZlcnNlLmhlaWdodDtcblx0dmFyIG5laWdoYm91cnNBbGl2ZSA9IDA7XG5cdC8vIEdvIHRocm91Z2ggdGhlIG5laWdoYm91cnMgb2YgZWFjaCBjZWxsLlxuXHRmb3IgKGxldCBpPTA7IGk8ODsgaSsrKXtcblx0XHRsZXQgbmVpZ2hib3VySUQgPSBjZWxsLm5laWdoYm91cnNbaV07XG5cdFx0aWYgKG5laWdoYm91cklEID49IHVuaUxlbmd0aCp1bmlIZWlnaHQgfHwgbmVpZ2hib3VySUQgPDApIGNvbnRpbnVlO1xuXHRcdGxldCBuZWlnaGJvdXIgPSBnZXRDZWxsQnlJZChzZWxmLCBuZWlnaGJvdXJJRCk7XG5cdFx0aWYgKG5laWdoYm91ci5zdGF0ZSA9PT0gMSkgbmVpZ2hib3Vyc0FsaXZlKys7XG5cdH1cblx0aWYgKGNlbGwuc3RhdGUgPT09IDEpe1xuXHRcdC8vIHplIGxpZmUgcnVsZXNcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0Ly8gMSkgQW55IGxpdmUgY2VsbCB3aXRoIGZld2VyIHRoYW4gdHdvIGxpdmUgbmVpZ2hib3VycyBkaWVzLCBhcyBcblx0XHQvLyBpZiBjYXVzZWQgYnkgdW5kZXItcG9wdWxhdGlvbi5cblx0XHQvLyAyKSBBbnkgbGl2ZSBjZWxsIHdpdGggdHdvIG9yIHRocmVlIGxpdmUgbmVpZ2hib3VycyBsaXZlcyBvbiB0byBcblx0XHQvLyB0aGUgbmV4dCBnZW5lcmF0aW9uLlxuXHRcdGlmIChuZWlnaGJvdXJzQWxpdmUgPCAyKSBjZWxsc1RvQ2hhbmdlLnB1c2goY2VsbC5pZCk7XG5cdFx0Ly8gMykgQW55IGxpdmUgY2VsbCB3aXRoIG1vcmUgdGhhbiB0aHJlZSBsaXZlIG5laWdoYm91cnMgZGllcywgYXMgaWYgXG5cdFx0Ly8gYnkgb3ZlcmNyb3dkaW5nLlxuXHRcdGVsc2UgaWYgKG5laWdoYm91cnNBbGl2ZSA+IDMpIGNlbGxzVG9DaGFuZ2UucHVzaChjZWxsLmlkKTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyA0KSBBbnkgZGVhZCBjZWxsIHdpdGggZXhhY3RseSB0aHJlZSBsaXZlIG5laWdoYm91cnMgYmVjb21lcyBhIFxuXHRcdC8vIGxpdmUgY2VsbCwgYXMgaWYgYnkgcmVwcm9kdWN0aW9uLlxuXHRcdGlmIChuZWlnaGJvdXJzQWxpdmUgPT09IDMpIGNlbGxzVG9DaGFuZ2UucHVzaChjZWxsLmlkKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VDZWxscyhzZWxmLCBjZWxsKSB7XG5cdHNlbGYuY3R4LmZpbGxTdHlsZSA9IChjZWxsLnN0YXRlKSA/ICd3aGl0ZScgOiAnIzMzMyc7XG5cdHNlbGYuY3R4LmZpbGxSZWN0KGNlbGwueCsxLCBjZWxsLnkrMSwgXG5cdFx0XHRzZWxmLnVuaXZlcnNlLmNlbGxMZW5ndGgtMiwgc2VsZi51bml2ZXJzZS5jZWxsSGVpZ2h0LTIpO1xuXHRjZWxsLnN0YXRlID0gKGNlbGwuc3RhdGUpID8gMCA6IDE7XG59XG5cbmZ1bmN0aW9uIGdldENlbGxCeUlkKHNlbGYsIGlkKSB7XG5cdGxldCByb3cgPSBNYXRoLmZsb29yKGlkL3NlbGYudW5pdmVyc2UubGVuZ3RoKTtcblx0bGV0IGNvbHVtbiA9IGlkICUgc2VsZi51bml2ZXJzZS5sZW5ndGg7XG5cdHJldHVybiBzZWxmLnVuaXZlcnNlLmNlbGxzW3Jvd11bY29sdW1uXTtcbn0gXG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyIsImNsYXNzIE9iantcbiAgY29uc3RydWN0b3Iob3B0aW9ucyxzdGF0ZSl7XG4gICAgdGhpcy5HcmlkWCA9IG9wdGlvbnMuR3JpZFg7XG4gICAgdGhpcy5HcmlkWSA9IG9wdGlvbnMuR3JpZFk7XG4gICAgdGhpcy5zdGF0ZSA9IDA7Ly8wIGlzIGEgY29sb3IwLCAxIGlzIGNvbG9yMVxuXHR0aGlzLkhfQkxPQ0tTID0gMTQ7XG4gICAgdGhpcy5IX0RJTUVOVElPTiA9IDI1NjtcbiAgICB0aGlzLlZfQkxPQ0tTID0gMjU7XG4gICAgdGhpcy5WX0RJTUVOVElPTiA9IDk2MDtcbiAgfVxuXG4gY2xlYXIoKXtcblx0IHZhciBncmlkUGl4ZWwgPSBjb252ZXJ0UGl4ZWwoeyBHcmlkWDogdGhpcy5HcmlkWCwgR3JpZFk6IHRoaXMuR3JpZFkgfSk7XG5cdCBjdHguY2xlYXJSZWN0KGdyaWRQaXhlbC54LCBncmlkUGl4ZWwueSwgMyAqIChIX0RJTUVOVElPTiAvIEhfQkxPQ0tTKSwgVl9ESU1FTlRJT04gLyBWX0JMT0NLUyk7XG59XG5cblxuICBjb252ZXJ0UGl4ZWwoY291bnRlcikge1xuXHQgIHZhciBncmlkUGl4ZWwgPSB7XG5cdFx0ICB4OiBjb3VudGVyLkdyaWRYICogKHRoaXMuSF9ESU1FTlRJT04gLyB0aGlzLkhfQkxPQ0tTKSxcblx0XHQgIHk6IChjb3VudGVyLkdyaWRZICsgMSkgKiAodGhpcy5WX0RJTUVOVElPTiAvIHRoaXMuVl9CTE9DS1MpXG5cdCAgfVxuICAgIHJldHVybiBncmlkUGl4ZWw7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPYmo7XG4iXX0=
