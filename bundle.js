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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Character = (function (_Obj) {
  _inherits(Character, _Obj);

  function Character(state, options) {
    _classCallCheck(this, Character);

    _get(Object.getPrototypeOf(Character.prototype), "constructor", this).call(this, state, options);
    this.currY = convertPixel(options).y; //in pixel; Y DECREASES
    this.currX = convertPixel(options).x;
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
    value: function initializeCharacter() {
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
      y += dy;
    }

    // setInterval(draw ,20);//check every 20ms

  }, {
    key: "convertPixel",
    value: function convertPixel(counter) {
      var H_BLOCKS = 14;
      var H_DIMENTION = 256;
      var V_BLOCKS = 25;
      var V_DIMENTION = 960;
      var gridPixel = {
        x: counter.GridX * (H_DIMENTION / H_BLOCKS),
        y: (counter.GridY + 1) * (V_DIMENTION / V_BLOCKS)
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
          collsionType = "portal";
          currX = portal[i + 1].GridX; //in grid
          currY = portal[i + 1].GridY;
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
})(Obj);

module.exports = Character;

},{}],3:[function(require,module,exports){
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
		this.character = new _Character2['default']();
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
			// Note: using bind to pass the class' context to the callbacks
			// not sure if this can be improved.
			// this.universeElem.addEventListener('click', loopCells.bindthis());
			// when user click, start the game
			document.getElementById('start').addEventListener('click', this.play.bind(this));

			this.Grid = this.parse(this.plan);

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
				for (var j = 0; i < array.length; i++) {
					if (array[j] == "itm") {
						this.items.push();
						array[j] = "kkk";
					} else if (array[j] == "moe") {
						this.Enemies.push(new Enemy(i, j));
						array[j] = "kkk";
					} else if (array[j] == "ptW") {
						this.portals.push(new Portal(i, j, 1));
						array[j] = "kkk";
					} else if (array[j] == "ptB") {
						this.portals.push(new Portal(i, j, 0));
						array[j] = "kkk";
					}
				}
			}
			return grid;
		}

		// start the game
	}, {
		key: 'play',
		value: function play(e) {
			// remove god mode
			this.universeElem.removeEventListener('click', loopCells);
			// game loop
			setInterval(this.character.update(), this.speed);
			for (var i = 0; i < enemies.length; i++) {
				setInterval(this.character.update(), this.speed);
			}
			setInterval(this.character.update(), this.speed);
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

			for (var i = 0; i < this.Grid.length; i++) {

				for (var j = 0; j < this.Grid[i].length; j++) {
					var elem = this.Grid[i][j];
					console.log(elem);
					if (elem == "xxx") {
						console.log(i);
						console.log(j);
						this.ctx.fillRect((1 + 3 * j + j) * this.DIMENSION.CELL_LENGTH, i * this.DIMENSION.CELL_HEIGHT, 3 * this.DIMENSION.CELL_LENGTH, this.DIMENSION.CELL_HEIGHT);
					}
				}
			}

			for (var i = 0; i < this.portals.length; i++) {
				ctx.fillStyle = "#FF0000";
				this.ctx.fillRect(i * CELL_LENGTH, i * CELL_HEIGHT, 3 * CELL_LENGTH, CELL_HEIGHT);
			}

			for (var i = 0; i < this.portals.length; i++) {
				ctx.fillStyle = "blue";
				this.ctx.fillRect(i * CELL_LENGTH, i * CELL_HEIGHT, 3 * CELL_LENGTH, CELL_HEIGHT);
			}

			for (var i = 0; i < this.portals.length; i++) {
				ctx.fillStyle = "yellow";
				this.ctx.fillRect(i * CELL_LENGTH, i * CELL_HEIGHT, 3 * CELL_LENGTH, CELL_HEIGHT);
			}
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

},{"./Character":2}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGlhbnRhbmcvcHJvZy9wb3J0YWwvYXBwLmpzIiwiL1VzZXJzL2RpYW50YW5nL3Byb2cvcG9ydGFsL2pzL0NoYXJhY3Rlci5qcyIsIi9Vc2Vycy9kaWFudGFuZy9wcm9nL3BvcnRhbC9qcy9HYW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztzQkNBaUIsV0FBVzs7Ozs7QUFHNUIsSUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQzs7QUFFbkIsSUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDO0FBQzNCLElBQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQzs7QUFFM0IsSUFBTSxTQUFTLEdBQUc7O0FBRWpCLGdCQUFlLEVBQUUsRUFBRTtBQUNuQixnQkFBZSxFQUFDLEVBQUU7QUFDbEIsWUFBVyxFQUFFLEdBQUcsR0FBQyxlQUFlO0FBQ2hDLFlBQVcsRUFBRSxHQUFHLEdBQUMsZUFBZTs7Q0FFaEMsQ0FBQTs7QUFFRCxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2pELElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRWxDLElBQUksS0FBSyxHQUFHLENBQUMsd0JBQVM7OztBQUdyQixPQUFNLEVBQU4sTUFBTTtBQUNOLFFBQU8sRUFBRSxHQUFHO0FBQ1osVUFBUyxFQUFULFNBQVM7QUFDVCxNQUFLLEVBQUUsR0FBRztBQUNWLEtBQUksRUFBRSxDQUFDLGFBQWEsRUFDbkIsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLENBQUM7Q0FDZixDQUFDLENBQUcsQ0FBQzs7QUFJTixTQUFTLFVBQVUsQ0FBQyxHQUFHLEVBQUU7QUFDeEIsTUFBSyxDQUFDLEdBQUcsQ0FBQyxD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ZUFBZSxLQUFLLENBQUMsRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUN2RDtDQUNEOztBQUVELFNBQVMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDaEMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQUFBQyxJQUFJLENBQUMsS0FBSyxHQUFJLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDckQsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxRCxLQUFJLENBQUMsS0FBSyxHQUFHLEFBQUMsSUFBSSxDQUFDLEtBQUssR0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ2xDOztBQUVELFNBQVMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDOUIsS0FBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM5QyxLQUFJLE1BQU0sR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFDdkMsUUFBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUN4Qzs7QUFHRCxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgR2FtZSBmcm9tICcuL2pzL0dhbWUnO1xuXG4vLyBpbiBwaXhlbHNcbmNvbnN0IFdJRFRIID0gMjU2O1xuY29uc3QgSEVJR0hUID0gOTYwO1xuLy8gaW4gY2VsbCB1bml0c1xuY29uc3QgVU5JVkVSU0VfTEVOR1RIID0gMTM7XG5jb25zdCBVTklWRVJTRV9IRUlHSFQgPSAyNTtcblxuY29uc3QgRElNRU5TSU9OID0ge1xuXHRcblx0VU5JVkVSU0VfTEVOR1RIOiAxMyxcblx0VU5JVkVSU0VfSEVJR0hUOjI1LFxuXHRDRUxMX0xFTkdUSDogMjU2L1VOSVZFUlNFX0xFTkdUSCxcblx0Q0VMTF9IRUlHSFQ6IDk2MC9VTklWRVJTRV9IRUlHSFRcblxufVxuXG52YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXZlcnNlJyk7XG52YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbnZhciBnYW1lcyA9IFtuZXcgR2FtZSh7XG5cdC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuXHQvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcblx0Y2FudmFzLFxuXHRjb250ZXh0OiBjdHgsXG5cdERJTUVOU0lPTixcblx0c3BlZWQ6IDIwMCxcblx0cGxhbjogW1wieHh4IHh4eCB4eHhcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJ4eHggeHh4IGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayB4eHggeHh4XCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHh4eCBra2tcIl1cbn0pLCBdO1xuXG5cblxuZnVuY3Rpb24gY2hvb3NlR2FtZShudW0pIHtcblx0Z2FtZXNbbnVtXS5kcmF3R3JpZCgpO1xuXHRnYW1lc1tudW1dLmluaVNldFVwKCk7XG5cdGdhbWVzW251bV0uZHJhdygpO1xufVxuXG5cbmNob29zZUdhbWUoMCk7XG5cblxuXG4iLCJjbGFzcyBDaGFyYWN0ZXIgZXh0ZW5kcyBPYmp7XG4gIGNvbnN0cnVjdG9yKHN0YXRlLG9wdGlvbnMpe1xuICAgIHN1cGVyKHN0YXRlLG9wdGlvbnMpO1xuICAgIHRoaXMuY3VyclkgPSBjb252ZXJ0UGl4ZWwob3B0aW9ucykueTsvL2luIHBpeGVsOyBZIERFQ1JFQVNFU1xuICAgIHRoaXMuY3VyclggPSBjb252ZXJ0UGl4ZWwob3B0aW9ucykueDtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIGNvbnZlcnRPcHRpb25zVG9QaXhlbChvcHRpb25zKXtcbiAgLy8gICB2YXIgSF9CTE9DS1MgPSAxNDtcbiAgLy8gICB2YXIgSF9ESU1FTlRJT04gPSAyNTY7XG4gIC8vICAgdmFyIFZfQkxPQ0tTID0gMjU7XG4gIC8vICAgdmFyIFZfRElNRU5USU9OID0gOTYwO1xuICAvLyAgIHZhciBncmlkUGl4ZWwueCA9IG9wdGlvbnMueCAqIChIX0RJTUVOVElPTiAvIEhfQkxPQ0tTKTtcbiAgLy8gICB2YXIgZ3JpZFBpeGVsLnkgPSAob3B0aW9ucy55KzEpICogKFZfRElNRU5USU9OIC8gVl9CTE9DS1MpO1xuICAvLyAgIHJldHVybiBncmlkUGl4ZWw7XG4gIC8vIH1cblxuIGluaXRpYWxpemVDaGFyYWN0ZXIoKXtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYygxMjAsIDkwMCwgMTcsIDAsIE1hdGguUEkqMiwgdHJ1ZSk7Ly9jaGFyYWN0ZXIgc2l6ZVxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gICBkcmF3KCkge1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB2YXIgZHkgPSAtMTtcbiAgICB5ICs9IGR5O1xuICB9XG5cbiAgLy8gc2V0SW50ZXJ2YWwoZHJhdyAsMjApOy8vY2hlY2sgZXZlcnkgMjBtc1xuXG4gICBjb252ZXJ0UGl4ZWwoY291bnRlcil7XG4gICAgdmFyIEhfQkxPQ0tTID0gMTQ7XG4gICAgdmFyIEhfRElNRU5USU9OID0gMjU2O1xuICAgIHZhciBWX0JMT0NLUyA9IDI1O1xuICAgIHZhciBWX0RJTUVOVElPTiA9IDk2MDtcbiAgICB2YXIgZ3JpZFBpeGVsID0ge1xuICAgICAgeDogY291bnRlci5HcmlkWCAqIChIX0RJTUVOVElPTiAvIEhfQkxPQ0tTKSxcbiAgICAgIHk6IChjb3VudGVyLkdyaWRZICsgMSkgKiAoVl9ESU1FTlRJT04gLyBWX0JMT0NLUylcbiAgICB9XG4gICAgcmV0dXJuIGdyaWRQaXhlbDtcbiAgfVxuXG5cbiAgIGNoZWNrQ29sbGlzaW9uKHBvcnRhbHMsIGVuZW1pZXMsIGl0ZW1zKXtcbiAgICB2YXIgY29sbGlzaW9uVHlwZTtcbiAgICAvL2xvb3AgdGhyb3VnaCBldmVyeSBvYmplY3QgaW4gdGhlIG1hcFxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwb3J0YWxzLmxlbmd0aDsgaSsrKXtcbiAgICAgIHZhciBwaXhlbCA9IGNvbnZlcnRQaXhlbChwb3J0YWxzW2ldKTsvL2luIHBpeGVsXG4gICAgICBpZigodGhpcy5jdXJyWSA9PSBwaXhlbC55KSAmJiAodGhpcy5jdXJyWCA9PSBwaXhlbC54KSl7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgY29sbHNpb25UeXBlID0gXCJwb3J0YWxcIjtcbiAgICAgICAgY3VyclggPSBwb3J0YWxbaSsxXS5HcmlkWDsvL2luIGdyaWRcbiAgICAgICAgY3VyclkgPSBwb3J0YWxbaSsxXS5HcmlkWTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKGN1cnJYICsgOS4xNCwgY3VyclksIDE3LCAwLCBNYXRoLlBJKjIsIHRydWUpOy8vcG9ydGFsIHNpemVcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTVERFwiO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGVuZW1pZXMubGVuZ3RoOyBpKyspe1xuICAgICAgdmFyIHBpeGVsID0gY29udmVydFBpeGVsKGVuZW1pZXNbaV0pOy8vaW4gcGl4ZWxcbiAgICAgIC8vIGlmKHRoaXMuY3VyclkgPiBpLnkgJiYgdGhpcy5jdXJyWSA8IGkueSAtIDM4LjQgJiYgKGN1cnJYID4gaS54ICYmIGN1cnJYIDwgaS54ICsgMTguMjgpe1xuICAgICAgaWYoKHRoaXMuY3VyclkgPT0gcGl4ZWwueSkgJiYgKHRoaXMuY3VyclggPT0gcGl4ZWwueCkpe1xuICAgICAgICBjb2xsc2lvblR5cGUgPSBcImVuZW1pZXNcIjtcbiAgICAgICAgZG9jdW1lbnQucmVsb2FkKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKyl7XG4gICAgICB2YXIgcGl4ZWwgPSBjb252ZXJ0UGl4ZWwoaXRlbXNbaV0pOy8vaW4gcGl4ZWxcbiAgICAgIGlmKCh0aGlzLmN1cnJZID09IHBpeGVsLnkpICYmICh0aGlzLmN1cnJYID09IHBpeGVsLngpKXtcbiAgICAgICAgY29sbHNpb25UeXBlID0gXCJpdGVtc1wiO1xuICAgICAgICBpdGVtQ29sbGVjdGVkICsrO1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtQ29sbGVjdGVkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBzZXRJbnRlcnZhbChjaGVja0NvbGxpc2lvbiAsMjApOy8vY2hlY2sgZXZlcnkgMjBtc1xuICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBjaGFuZ2VTdGF0ZSk7XG5cblxuICAgY2hhbmdlU3RhdGUoZSl7XG4gICAgLy9yZWdpc3RlciBhIGV2ZW50IGxpc3RlbmVyXG4gICAgdmFyIGtleSA9IGUua2V5Q29kZSA/IGUua2V5Q29kZSA6IGUud2hpY2g7XG4gICAgaWYgKGtleSA9PSAzOCkge1xuICAgICAgY29uc29sZS5sb2coXCJZb3UgUHJlc3NlZCB0aGUgZmtpbmcgU3BhY2VcIik7XG4gICAgICBzd2l0Y2goc3RhdGUpe1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgc3RhdGUrKztcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIldoaXRlXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgc3RhdGUtLTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkJsYWNrXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgICBcbiAgICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyO1xuXG5cblxuIiwiaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlcic7XG4vLyBpbXBvcnQgUG9ydGFsIGZyb20gLi9DaGFyYWN0ZXIuanM7XG4vLyBpbXBvcnQgSXRlbSBmcm9tIC4vQ2hhcmFjdGVyLmpzO1xuLy8gaW1wb3J0IEVuZW15IGZyb20gLi9DaGFyYWN0ZXIuanM7XG5cblxuXG5jbGFzcyBHYW1lIHtcblx0Ly8gc2V0IHVwIGluc3RhbmNlIHZhcmlhYmxlc1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zKXtcblx0XHR0aGlzLmNhbnZhcyA9IG9wdGlvbnMuY2FudmFzO1xuXHRcdHRoaXMuY3R4ID0gb3B0aW9ucy5jb250ZXh0O1xuXHRcdHRoaXMuRElNRU5TSU9OID0gb3B0aW9ucy5ESU1FTlNJT047XG5cdFx0dGhpcy51bml2ZXJzZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdmVyc2UnKTtcblx0XHR0aGlzLnNwZWVkID0gb3B0aW9ucy5zcGVlZDtcblx0XHR0aGlzLnBsYW4gPSBvcHRpb25zLnBsYW47XG5cdFx0dGhpcy5HcmlkID0gW107XG5cdFx0dGhpcy5wb3J0YWxzID0gW107XG5cdFx0dGhpcy5pdGVtcyA9IFtdO1xuXHRcdHRoaXMuZW5lbWllcyA9IFtdO1xuXHRcdHRoaXMuY2hhcmFjdGVyID0gbmV3IENoYXJhY3RlcigpO1xuXHRcdHRoaXMucG9pbnQgPSAwO1xuXHRcdHRoaXMud2luID0gZmFsc2U7XG5cdH1cblxuXHQvLyBpbml0aWFsIHNldCB1cFxuXHRpbmlTZXRVcCgpIHtcblx0XHQvLyBOb3RlOiB1c2luZyBiaW5kIHRvIHBhc3MgdGhlIGNsYXNzJyBjb250ZXh0IHRvIHRoZSBjYWxsYmFja3Ncblx0XHQvLyBub3Qgc3VyZSBpZiB0aGlzIGNhbiBiZSBpbXByb3ZlZC5cblx0XHQvLyB0aGlzLnVuaXZlcnNlRWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvb3BDZWxscy5iaW5kdGhpcygpKTtcblx0XHQvLyB3aGVuIHVzZXIgY2xpY2ssIHN0YXJ0IHRoZSBnYW1lXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0Jylcblx0XHRcdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucGxheS5iaW5kKHRoaXMpKTtcblxuXHRcdFx0dGhpcy5HcmlkID0gdGhpcy5wYXJzZSh0aGlzLnBsYW4pO1xuXG5cdFx0XHQvLyBkcmF3KHRoaXMuR3JpZCkge1xuXG5cdFx0XHQvLyB9XG5cdH1cblxuXHRwYXJzZShwbGFuKSB7XG5cdFx0bGV0IGdyaWQgPSBbXTtcblxuXHRcdGZvcih2YXIgaT0wO2k8cGxhbi5sZW5ndGg7aSsrKSB7XG5cdFx0XHRsZXQgYXJyYXkgPSBwbGFuW2ldLnNwbGl0KFwiIFwiKTtcblx0XHRcblx0XHRcdGdyaWQucHVzaChhcnJheSk7XG5cdFx0XHRmb3IodmFyIGo9MDtpPGFycmF5Lmxlbmd0aDtpKyspIHtcblx0XHRcdFx0aWYoYXJyYXlbal0gPT0gXCJpdG1cIikge1xuXHRcdFx0XHRcdHRoaXMuaXRlbXMucHVzaCgpXG5cdFx0XHRcdFx0YXJyYXlbal0gPSBcImtra1wiO1xuXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZihhcnJheVtqXSA9PSBcIm1vZVwiKSB7XG5cdFx0XHRcdFx0dGhpcy5FbmVtaWVzLnB1c2gobmV3IEVuZW15KGksaiwpKVxuXHRcdFx0XHRcdGFycmF5W2pdID0gXCJra2tcIjtcblxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYoYXJyYXlbal0gPT0gXCJwdFdcIikge1xuXHRcdFx0XHRcdHRoaXMucG9ydGFscy5wdXNoKG5ldyBQb3J0YWwoaSxqLDEpKTtcblx0XHRcdFx0XHRhcnJheVtqXSA9IFwia2trXCI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlbHNlIGlmKGFycmF5W2pdID09IFwicHRCXCIpIHtcblx0XHRcdFx0XHR0aGlzLnBvcnRhbHMucHVzaChuZXcgUG9ydGFsKGksaiwwKSk7XG5cdFx0XHRcdFx0YXJyYXlbal0gPSBcImtra1wiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBncmlkO1xuXHR9XG5cblxuXG5cdC8vIHN0YXJ0IHRoZSBnYW1lXG5cdHBsYXkoZSl7XG5cdFx0Ly8gcmVtb3ZlIGdvZCBtb2RlXG5cdFx0dGhpcy51bml2ZXJzZUVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb29wQ2VsbHMpO1xuXHRcdC8vIGdhbWUgbG9vcFxuXHRcdHNldEludGVydmFsKHRoaXMuY2hhcmFjdGVyLnVwZGF0ZSgpLCB0aGlzLnNwZWVkKTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGVuZW1pZXMubGVuZ3RoO2krKykge1xuXHRcdFx0c2V0SW50ZXJ2YWwodGhpcy5jaGFyYWN0ZXIudXBkYXRlKCksIHRoaXMuc3BlZWQpO1xuXG5cdFx0fVxuXHRcdHNldEludGVydmFsKHRoaXMuY2hhcmFjdGVyLnVwZGF0ZSgpLCB0aGlzLnNwZWVkKTtcblxuXHR9XG5cblx0Ly8gZHJhdyBncmlkXG5cdGRyYXdHcmlkKCkge1xuXHRcdHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyM3NzcnO1xuXHRcdHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XG5cdFx0Ly8gdmVydGljYWwgbGluZXNcblx0XHRmb3IgKGxldCBpID0gMTsgaTx0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9MRU5HVEg7IGkrKyl7XG5cdFx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcblx0XHRcdHRoaXMuY3R4Lm1vdmVUbyh0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCppLDApO1xuXHRcdFx0dGhpcy5jdHgubGluZVRvKHRoaXMuRElNRU5TSU9OLkNFTExfTEVOR1RIKmksIFxuXHRcdFx0XHR0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9IRUlHSFQqdGhpcy5ESU1FTlNJT04uQ0VMTF9IRUlHSFQpO1xuXHRcdFx0dGhpcy5jdHguc3Ryb2tlKCk7XG5cdFx0fVxuXHRcdC8vIGhvcml6b250YWwgbGluZXNcblx0XHRmb3IgKGxldCBpID0gMTsgaTx0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9IRUlHSFQ7IGkrKyl7XG5cdFx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcblx0XHRcdHRoaXMuY3R4Lm1vdmVUbygwLHRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUKmkpO1xuXHRcdFx0dGhpcy5jdHgubGluZVRvKHRoaXMuRElNRU5TSU9OLlVOSVZFUlNFX0xFTkdUSCp0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCwgXG5cdFx0XHRcdHRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUKmkpO1xuXHRcdFx0dGhpcy5jdHguc3Ryb2tlKCk7XG5cdFx0fVxuXHR9XG5cblx0ZHJhdygpIHtcblx0XHQvL2RyYXcgc3RhdGljIHN0dWZmXHRcblx0XHRcblxuXHRcdGZvcih2YXIgaT0wO2k8dGhpcy5HcmlkLmxlbmd0aDtpKyspIHtcblxuXHRcdFx0Zm9yKHZhciBqPTA7ajx0aGlzLkdyaWRbaV0ubGVuZ3RoO2orKykge1xuXHRcdFx0XHRsZXQgZWxlbSA9IHRoaXMuR3JpZFtpXVtqXTtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVsZW0pO1xuXHRcdFx0XHRpZiAoZWxlbSA9PSBcInh4eFwiKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coaSk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coaik7XG5cdFx0XHRcdFx0dGhpcy5jdHguZmlsbFJlY3QoKDErMypqK2opKnRoaXMuRElNRU5TSU9OLkNFTExfTEVOR1RILGkqdGhpcy5ESU1FTlNJT04uQ0VMTF9IRUlHSFQsMyp0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCx0aGlzLkRJTUVOU0lPTi5DRUxMX0hFSUdIVCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblxuXG5cdFx0Zm9yICh2YXIgaT0wO2k8dGhpcy5wb3J0YWxzLmxlbmd0aDtpKyspIHtcblx0XHRcdGN0eC5maWxsU3R5bGU9XCIjRkYwMDAwXCI7XG5cdFx0XHR0aGlzLmN0eC5maWxsUmVjdChpKkNFTExfTEVOR1RILGkqQ0VMTF9IRUlHSFQsMypDRUxMX0xFTkdUSCxDRUxMX0hFSUdIVCk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaT0wO2k8dGhpcy5wb3J0YWxzLmxlbmd0aDtpKyspIHtcblx0XHRcdGN0eC5maWxsU3R5bGU9XCJibHVlXCI7XG5cdFx0XHR0aGlzLmN0eC5maWxsUmVjdChpKkNFTExfTEVOR1RILGkqQ0VMTF9IRUlHSFQsMypDRUxMX0xFTkdUSCxDRUxMX0hFSUdIVCk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaT0wO2k8dGhpcy5wb3J0YWxzLmxlbmd0aDtpKyspIHtcblx0XHRcdGN0eC5maWxsU3R5bGU9XCJ5ZWxsb3dcIjtcblx0XHRcdHRoaXMuY3R4LmZpbGxSZWN0KGkqQ0VMTF9MRU5HVEgsaSpDRUxMX0hFSUdIVCwzKkNFTExfTEVOR1RILENFTExfSEVJR0hUKTtcblx0XHR9XG5cblxufVxuXG59XG5cbi8vIFByaXZhdGUgbWV0aG9kc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gTG9vcCBvdmVyIHRoZSBjZWxsc1xuZnVuY3Rpb24gbG9vcENlbGxzKGUpIHtcblx0dmFyIHVuaXZlcnNlRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml2ZXJzZScpO1xuXHR2YXIgcGFnZVggPSBlLnBhZ2VYIC0gdW5pdmVyc2VFbGVtLm9mZnNldExlZnQ7XG5cdHZhciBwYWdlWSA9IGUucGFnZVkgLSB1bml2ZXJzZUVsZW0ub2Zmc2V0VG9wO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpPHRoaXMudW5pdmVyc2UuaGVpZ2h0OyBpKyspe1xuXHRcdGZvciAobGV0IGo9MDsgajx0aGlzLnVuaXZlcnNlLmxlbmd0aDsgaisrKXtcblx0XHRcdGxldCBjZWxsID0gdGhpcy51bml2ZXJzZS5jZWxsc1tpXVtqXTtcblx0XHRcdGhhbmRsZUNsaWNrKHRoaXMsIGNlbGwsIHBhZ2VYLCBwYWdlWSk7XG5cdFx0fVxuXHR9XG59XG5cbi8vIGdpdmUgbGlmZSBvciBkZWF0aCB0byB0aGUgY2VsbCBjbGlja2VkLlxuLy8gTm90ZTogYmVjYXVzZSBsb29wQ2VsbHMgaXMgYSBjYWxsYmFjayB3aGljaCBoYXMgdGhlIGNsYXNzIGNvbnRleHRcbi8vIGJvdW5kIHRvIGl0LCB0aGlzIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBpbiB0aGUgY2FsbGJhY2sgZG9lc24ndCBnZXQgdGhlXG4vLyBjb250ZXh0IGltcGxpY2l0bHksIHNvIEkgbXVzdCBwYXNzIGl0LiBEb2Vzbid0IGZlZWwgY2xlYW4uLi5cbi8vIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKHNlbGYsIGNlbGwsIHBhZ2VYLCBwYWdlWSl7XG4vLyBcdGlmIChwYWdlWCA+IGNlbGwueCAmJiBwYWdlWCA8IGNlbGwueCtzZWxmLnVuaXZlcnNlLmNlbGxMZW5ndGggJiZcbi8vIFx0XHRcdFx0cGFnZVkgPiBjZWxsLnkgJiYgcGFnZVkgPCBjZWxsLnkrc2VsZi51bml2ZXJzZS5jZWxsSGVpZ2h0ICkge1xuLy8gXHRcdGNoYW5nZUNlbGxzKHNlbGYsIGNlbGwpO1xuLy8gXHR9XG4vLyB9XG5cbi8vIDEgc3RlcCA9IDEgZ2VuZXJhdGlvblxuZnVuY3Rpb24gc3RlcCgpe1xuXG5cdFxufVxuXG4vKlxuKlx0cGFzcyB0aGUgY2VsbCB0aHJvdWdoIHRoZSA0IHJ1bGVzLiBcblx0Tm90ZTogY2VsbHMgc2hvdWxkIG5vdCB1cGRhdGUgaGVyZSwgc2luY2UgYWx0ZXJpbmcgMSBiZWZvcmUgeW91IGNhblxuXHRhbmFseXplIHRoZSBvdGhlcnMgd2lsbCBjYXVzZSBlcnJvbmVvdXMgb3V0Y29tZXMuXG4qL1xuZnVuY3Rpb24gdHJhbnNpdGlvbnMoc2VsZiwgY2VsbCwgY2VsbHNUb0NoYW5nZSkge1xuXHR2YXIgdW5pTGVuZ3RoID0gc2VsZi51bml2ZXJzZS5sZW5ndGg7XG5cdHZhciB1bmlIZWlnaHQgPSBzZWxmLnVuaXZlcnNlLmhlaWdodDtcblx0dmFyIG5laWdoYm91cnNBbGl2ZSA9IDA7XG5cdC8vIEdvIHRocm91Z2ggdGhlIG5laWdoYm91cnMgb2YgZWFjaCBjZWxsLlxuXHRmb3IgKGxldCBpPTA7IGk8ODsgaSsrKXtcblx0XHRsZXQgbmVpZ2hib3VySUQgPSBjZWxsLm5laWdoYm91cnNbaV07XG5cdFx0aWYgKG5laWdoYm91cklEID49IHVuaUxlbmd0aCp1bmlIZWlnaHQgfHwgbmVpZ2hib3VySUQgPDApIGNvbnRpbnVlO1xuXHRcdGxldCBuZWlnaGJvdXIgPSBnZXRDZWxsQnlJZChzZWxmLCBuZWlnaGJvdXJJRCk7XG5cdFx0aWYgKG5laWdoYm91ci5zdGF0ZSA9PT0gMSkgbmVpZ2hib3Vyc0FsaXZlKys7XG5cdH1cblx0aWYgKGNlbGwuc3RhdGUgPT09IDEpe1xuXHRcdC8vIHplIGxpZmUgcnVsZXNcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0Ly8gMSkgQW55IGxpdmUgY2VsbCB3aXRoIGZld2VyIHRoYW4gdHdvIGxpdmUgbmVpZ2hib3VycyBkaWVzLCBhcyBcblx0XHQvLyBpZiBjYXVzZWQgYnkgdW5kZXItcG9wdWxhdGlvbi5cblx0XHQvLyAyKSBBbnkgbGl2ZSBjZWxsIHdpdGggdHdvIG9yIHRocmVlIGxpdmUgbmVpZ2hib3VycyBsaXZlcyBvbiB0byBcblx0XHQvLyB0aGUgbmV4dCBnZW5lcmF0aW9uLlxuXHRcdGlmIChuZWlnaGJvdXJzQWxpdmUgPCAyKSBjZWxsc1RvQ2hhbmdlLnB1c2goY2VsbC5pZCk7XG5cdFx0Ly8gMykgQW55IGxpdmUgY2VsbCB3aXRoIG1vcmUgdGhhbiB0aHJlZSBsaXZlIG5laWdoYm91cnMgZGllcywgYXMgaWYgXG5cdFx0Ly8gYnkgb3ZlcmNyb3dkaW5nLlxuXHRcdGVsc2UgaWYgKG5laWdoYm91cnNBbGl2ZSA+IDMpIGNlbGxzVG9DaGFuZ2UucHVzaChjZWxsLmlkKTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyA0KSBBbnkgZGVhZCBjZWxsIHdpdGggZXhhY3RseSB0aHJlZSBsaXZlIG5laWdoYm91cnMgYmVjb21lcyBhIFxuXHRcdC8vIGxpdmUgY2VsbCwgYXMgaWYgYnkgcmVwcm9kdWN0aW9uLlxuXHRcdGlmIChuZWlnaGJvdXJzQWxpdmUgPT09IDMpIGNlbGxzVG9DaGFuZ2UucHVzaChjZWxsLmlkKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VDZWxscyhzZWxmLCBjZWxsKSB7XG5cdHNlbGYuY3R4LmZpbGxTdHlsZSA9IChjZWxsLnN0YXRlKSA/ICd3aGl0ZScgOiAnIzMzMyc7XG5cdHNlbGYuY3R4LmZpbGxSZWN0KGNlbGwueCsxLCBjZWxsLnkrMSwgXG5cdFx0XHRzZWxmLnVuaXZlcnNlLmNlbGxMZW5ndGgtMiwgc2VsZi51bml2ZXJzZS5jZWxsSGVpZ2h0LTIpO1xuXHRjZWxsLnN0YXRlID0gKGNlbGwuc3RhdGUpID8gMCA6IDE7XG59XG5cbmZ1bmN0aW9uIGdldENlbGxCeUlkKHNlbGYsIGlkKSB7XG5cdGxldCByb3cgPSBNYXRoLmZsb29yKGlkL3NlbGYudW5pdmVyc2UubGVuZ3RoKTtcblx0bGV0IGNvbHVtbiA9IGlkICUgc2VsZi51bml2ZXJzZS5sZW5ndGg7XG5cdHJldHVybiBzZWxmLnVuaXZlcnNlLmNlbGxzW3Jvd11bY29sdW1uXTtcbn0gXG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyJdfQ==
