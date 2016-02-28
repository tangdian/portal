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
      y += dy;
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvQWxhbi9Eb2N1bWVudHMvVVdhdGVybG9vL0dpdGh1Yi9wb3J0YWwvYXBwLmpzIiwiL1VzZXJzL0FsYW4vRG9jdW1lbnRzL1VXYXRlcmxvby9HaXRodWIvcG9ydGFsL2pzL0NoYXJhY3Rlci5qcyIsIi9Vc2Vycy9BbGFuL0RvY3VtZW50cy9VV2F0ZXJsb28vR2l0aHViL3BvcnRhbC9qcy9HYW1lLmpzIiwiL1VzZXJzL0FsYW4vRG9jdW1lbnRzL1VXYXRlcmxvby9HaXRodWIvcG9ydGFsL2pzL09iai5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7c0JDQWlCLFdBQVc7Ozs7O0FBRzVCLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUNsQixJQUFNLE1BQU0sR0FBRyxHQUFHLENBQUM7O0FBRW5CLElBQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQztBQUMzQixJQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7O0FBRTNCLElBQU0sU0FBUyxHQUFHOztBQUVqQixnQkFBZSxFQUFFLEVBQUU7QUFDbkIsZ0JBQWUsRUFBQyxFQUFFO0FBQ2xCLFlBQVcsRUFBRSxHQUFHLEdBQUMsZUFBZTtBQUNoQyxZQUFXLEVBQUUsR0FBRyxHQUFDLGVBQWU7O0NBRWhDLENBQUE7O0FBRUQsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNqRCxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUVsQyxJQUFJLEtBQUssR0FBRyxDQUFDLHdCQUFTOzs7QUFHckIsT0FBTSxFQUFOLE1BQU07QUFDTixRQUFPLEVBQUUsR0FBRztBQUNaLFVBQVMsRUFBVCxTQUFTO0FBQ1QsTUFBSyxFQUFFLEdBQUc7QUFDVixLQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQ25CLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxF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QUFDLE9BQU8sR0FBRyxHQUFHLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9qcy9HYW1lJztcblxuLy8gaW4gcGl4ZWxzXG5jb25zdCBXSURUSCA9IDI1NjtcbmNvbnN0IEhFSUdIVCA9IDk2MDtcbi8vIGluIGNlbGwgdW5pdHNcbmNvbnN0IFVOSVZFUlNFX0xFTkdUSCA9IDEzO1xuY29uc3QgVU5JVkVSU0VfSEVJR0hUID0gMjU7XG5cbmNvbnN0IERJTUVOU0lPTiA9IHtcblx0XG5cdFVOSVZFUlNFX0xFTkdUSDogMTMsXG5cdFVOSVZFUlNFX0hFSUdIVDoyNSxcblx0Q0VMTF9MRU5HVEg6IDI1Ni9VTklWRVJTRV9MRU5HVEgsXG5cdENFTExfSEVJR0hUOiA5NjAvVU5JVkVSU0VfSEVJR0hUXG5cbn1cblxudmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml2ZXJzZScpO1xudmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG52YXIgZ2FtZXMgPSBbbmV3IEdhbWUoe1xuXHQvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcblx0Ly8gJ2NhbnZhcywnIGlzIHRoZSBzYW1lIGFzICdjYW52YXM6IGNhbnZhcywnXG5cdGNhbnZhcyxcblx0Y29udGV4dDogY3R4LFxuXHRESU1FTlNJT04sXG5cdHNwZWVkOiAyMDAsXG5cdHBsYW46IFtcInh4eCB4eHggeHh4XCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwieHh4IHh4eCBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IHh4eFwiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayB4eHgga2trXCJdXG59KSwgXTtcblxuXG5cbmZ1bmN0aW9uIGNob29zZUdhbWUobnVtKSB7XG5cdGdhbWVzW251bV0uZHJhd0dyaWQoKTtcblx0Z2FtZXNbbnVtXS5pbmlTZXRVcCgpO1xuXHRnYW1lc1tudW1dLmRyYXcoKTtcbn1cblxuXG5jaG9vc2VHYW1lKDApO1xuXG5cblxuIiwiaW1wb3J0IE9iaiBmcm9tICcuL09iaic7XG5cbmNsYXNzIENoYXJhY3RlciBleHRlbmRzIE9iantcbiAgY29uc3RydWN0b3Ioc3RhdGUsb3B0aW9ucyl7XG4gICAgc3VwZXIoc3RhdGUsb3B0aW9ucyk7XG4gICAgdGhpcy5jdXJyWSA9IHRoaXMuY29udmVydFBpeGVsKG9wdGlvbnMpLnk7Ly9pbiBwaXhlbDsgWSBERUNSRUFTRVNcbiAgICB0aGlzLmN1cnJYID0gdGhpcy5jb252ZXJ0UGl4ZWwob3B0aW9ucykueDtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIGNvbnZlcnRPcHRpb25zVG9QaXhlbChvcHRpb25zKXtcbiAgLy8gICB2YXIgSF9CTE9DS1MgPSAxNDtcbiAgLy8gICB2YXIgSF9ESU1FTlRJT04gPSAyNTY7XG4gIC8vICAgdmFyIFZfQkxPQ0tTID0gMjU7XG4gIC8vICAgdmFyIFZfRElNRU5USU9OID0gOTYwO1xuICAvLyAgIHZhciBncmlkUGl4ZWwueCA9IG9wdGlvbnMueCAqIChIX0RJTUVOVElPTiAvIEhfQkxPQ0tTKTtcbiAgLy8gICB2YXIgZ3JpZFBpeGVsLnkgPSAob3B0aW9ucy55KzEpICogKFZfRElNRU5USU9OIC8gVl9CTE9DS1MpO1xuICAvLyAgIHJldHVybiBncmlkUGl4ZWw7XG4gIC8vIH1cblxuIGluaXRpYWxpemVDaGFyYWN0ZXIoY3R4KXtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYygxMjAsIDkwMCwgMTcsIDAsIE1hdGguUEkqMiwgdHJ1ZSk7Ly9jaGFyYWN0ZXIgc2l6ZVxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gICBkcmF3KCkge1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB2YXIgZHkgPSAtMTtcbiAgICB5ICs9IGR5O1xuICB9XG5cbiAgLy8gc2V0SW50ZXJ2YWwoZHJhdyAsMjApOy8vY2hlY2sgZXZlcnkgMjBtc1xuXG4gICBjb252ZXJ0UGl4ZWwoY291bnRlcil7XG4gICAgLy8gdmFyIEhfQkxPQ0tTID0gMTQ7XG4gICAgLy8gdmFyIEhfRElNRU5USU9OID0gMjU2O1xuICAgIC8vIHZhciBWX0JMT0NLUyA9IDI1O1xuICAgIC8vIHZhciBWX0RJTUVOVElPTiA9IDk2MDtcbiAgICB2YXIgZ3JpZFBpeGVsID0ge1xuICAgICAgeDogY291bnRlci5HcmlkWCAqICh0aGlzLkhfRElNRU5USU9OIC8gdGhpcy5IX0JMT0NLUyksXG4gICAgICB5OiAoY291bnRlci5HcmlkWSArIDEpICogKHRoaXMuVl9ESU1FTlRJT04gLyB0aGlzLlZfQkxPQ0tTKVxuICAgIH1cbiAgICByZXR1cm4gZ3JpZFBpeGVsO1xuICB9XG5cblxuICAgY2hlY2tDb2xsaXNpb24ocG9ydGFscywgZW5lbWllcywgaXRlbXMpe1xuICAgIHZhciBjb2xsaXNpb25UeXBlO1xuICAgIC8vbG9vcCB0aHJvdWdoIGV2ZXJ5IG9iamVjdCBpbiB0aGUgbWFwXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHBvcnRhbHMubGVuZ3RoOyBpKyspe1xuICAgICAgdmFyIHBpeGVsID0gY29udmVydFBpeGVsKHBvcnRhbHNbaV0pOy8vaW4gcGl4ZWxcbiAgICAgIGlmKCh0aGlzLmN1cnJZID09IHBpeGVsLnkpICYmICh0aGlzLmN1cnJYID09IHBpeGVsLngpKXtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICBjb2xsc2lvblR5cGUgPSBcInBvcnRhbFwiO1xuICAgICAgICBjdXJyWCA9IHBvcnRhbFtpKzFdLkdyaWRYOy8vaW4gZ3JpZFxuICAgICAgICBjdXJyWSA9IHBvcnRhbFtpKzFdLkdyaWRZO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoY3VyclggKyA5LjE0LCBjdXJyWSwgMTcsIDAsIE1hdGguUEkqMiwgdHJ1ZSk7Ly9wb3J0YWwgc2l6ZVxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgZW5lbWllcy5sZW5ndGg7IGkrKyl7XG4gICAgICB2YXIgcGl4ZWwgPSBjb252ZXJ0UGl4ZWwoZW5lbWllc1tpXSk7Ly9pbiBwaXhlbFxuICAgICAgLy8gaWYodGhpcy5jdXJyWSA+IGkueSAmJiB0aGlzLmN1cnJZIDwgaS55IC0gMzguNCAmJiAoY3VyclggPiBpLnggJiYgY3VyclggPCBpLnggKyAxOC4yOCl7XG4gICAgICBpZigodGhpcy5jdXJyWSA9PSBwaXhlbC55KSAmJiAodGhpcy5jdXJyWCA9PSBwaXhlbC54KSl7XG4gICAgICAgIGNvbGxzaW9uVHlwZSA9IFwiZW5lbWllc1wiO1xuICAgICAgICBkb2N1bWVudC5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKXtcbiAgICAgIHZhciBwaXhlbCA9IGNvbnZlcnRQaXhlbChpdGVtc1tpXSk7Ly9pbiBwaXhlbFxuICAgICAgaWYoKHRoaXMuY3VyclkgPT0gcGl4ZWwueSkgJiYgKHRoaXMuY3VyclggPT0gcGl4ZWwueCkpe1xuICAgICAgICBjb2xsc2lvblR5cGUgPSBcIml0ZW1zXCI7XG4gICAgICAgIGl0ZW1Db2xsZWN0ZWQgKys7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1Db2xsZWN0ZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHNldEludGVydmFsKGNoZWNrQ29sbGlzaW9uICwyMCk7Ly9jaGVjayBldmVyeSAyMG1zXG4gIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNoYW5nZVN0YXRlKTtcblxuXG4gICBjaGFuZ2VTdGF0ZShlKXtcbiAgICAvL3JlZ2lzdGVyIGEgZXZlbnQgbGlzdGVuZXJcbiAgICB2YXIga2V5ID0gZS5rZXlDb2RlID8gZS5rZXlDb2RlIDogZS53aGljaDtcbiAgICBpZiAoa2V5ID09IDM4KSB7XG4gICAgICBjb25zb2xlLmxvZyhcIllvdSBQcmVzc2VkIHRoZSBma2luZyBTcGFjZVwiKTtcbiAgICAgIHN3aXRjaChzdGF0ZSl7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBzdGF0ZSsrO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2hpdGVcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBzdGF0ZS0tO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQmxhY2tcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyO1xuIiwiaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlcic7XG4vLyBpbXBvcnQgUG9ydGFsIGZyb20gLi9DaGFyYWN0ZXIuanM7XG4vLyBpbXBvcnQgSXRlbSBmcm9tIC4vQ2hhcmFjdGVyLmpzO1xuLy8gaW1wb3J0IEVuZW15IGZyb20gLi9DaGFyYWN0ZXIuanM7XG5cblxuXG5jbGFzcyBHYW1lIHtcblx0Ly8gc2V0IHVwIGluc3RhbmNlIHZhcmlhYmxlc1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zKXtcblx0XHR0aGlzLmNhbnZhcyA9IG9wdGlvbnMuY2FudmFzO1xuXHRcdHRoaXMuY3R4ID0gb3B0aW9ucy5jb250ZXh0O1xuXHRcdHRoaXMuRElNRU5TSU9OID0gb3B0aW9ucy5ESU1FTlNJT047XG5cdFx0dGhpcy51bml2ZXJzZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdmVyc2UnKTtcblx0XHR0aGlzLnNwZWVkID0gb3B0aW9ucy5zcGVlZDtcblx0XHR0aGlzLnBsYW4gPSBvcHRpb25zLnBsYW47XG5cdFx0dGhpcy5HcmlkID0gW107XG5cdFx0dGhpcy5wb3J0YWxzID0gW107XG5cdFx0dGhpcy5pdGVtcyA9IFtdO1xuXHRcdHRoaXMuZW5lbWllcyA9IFtdO1xuXHRcdHRoaXMuY2hhcmFjdGVyID0gbmV3IENoYXJhY3RlcigwLHtHcmlkWDo2LEdyaWRZOjI0fSk7XG5cdFx0dGhpcy5wb2ludCA9IDA7XG5cdFx0dGhpcy53aW4gPSBmYWxzZTtcblx0fVxuXG5cdC8vIGluaXRpYWwgc2V0IHVwXG5cdGluaVNldFVwKCkge1xuXHRcdC8vIC8vIE5vdGU6IHVzaW5nIGJpbmQgdG8gcGFzcyB0aGUgY2xhc3MnIGNvbnRleHQgdG8gdGhlIGNhbGxiYWNrc1xuXHRcdC8vIC8vIG5vdCBzdXJlIGlmIHRoaXMgY2FuIGJlIGltcHJvdmVkLlxuXHRcdC8vIC8vIHRoaXMudW5pdmVyc2VFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9vcENlbGxzLmJpbmR0aGlzKCkpO1xuXHRcdC8vIC8vIHdoZW4gdXNlciBjbGljaywgc3RhcnQgdGhlIGdhbWVcblx0XHQvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKVxuXHRcdC8vIFx0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wbGF5LmJpbmQodGhpcykpO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucGxhbik7XG5cdFx0XHR0aGlzLkdyaWQgPSB0aGlzLnBhcnNlKHRoaXMucGxhbik7XG5cblx0XHRcdHRoaXMuY2hhcmFjdGVyLmluaXRpYWxpemVDaGFyYWN0ZXIodGhpcy5jdHgpO1xuXG5cdFx0XHQvLyBkcmF3KHRoaXMuR3JpZCkge1xuXG5cdFx0XHQvLyB9XG5cdH1cblxuXHRwYXJzZShwbGFuKSB7XG5cdFx0bGV0IGdyaWQgPSBbXTtcblxuXHRcdGZvcih2YXIgaT0wO2k8cGxhbi5sZW5ndGg7aSsrKSB7XG5cdFx0XHRsZXQgYXJyYXkgPSBwbGFuW2ldLnNwbGl0KFwiIFwiKTtcblx0XHRcblx0XHRcdGdyaWQucHVzaChhcnJheSk7XG5cdFx0XHQvLyBmb3IodmFyIGo9MDtpPGFycmF5Lmxlbmd0aDtpKyspIHtcblx0XHRcdC8vIFx0aWYoYXJyYXlbal0gPT0gXCJpdG1cIikge1xuXHRcdFx0Ly8gXHRcdHRoaXMuaXRlbXMucHVzaCgpXG5cdFx0XHQvLyBcdFx0YXJyYXlbal0gPSBcImtra1wiO1xuXG5cdFx0XHQvLyBcdH1cblx0XHRcdC8vIFx0ZWxzZSBpZihhcnJheVtqXSA9PSBcIm1vZVwiKSB7XG5cdFx0XHQvLyBcdFx0dGhpcy5FbmVtaWVzLnB1c2gobmV3IEVuZW15KGksaiwpKVxuXHRcdFx0Ly8gXHRcdGFycmF5W2pdID0gXCJra2tcIjtcblxuXHRcdFx0Ly8gXHR9XG5cdFx0XHQvLyBcdGVsc2UgaWYoYXJyYXlbal0gPT0gXCJwdFdcIikge1xuXHRcdFx0Ly8gXHRcdHRoaXMucG9ydGFscy5wdXNoKG5ldyBQb3J0YWwoaSxqLDEpKTtcblx0XHRcdC8vIFx0XHRhcnJheVtqXSA9IFwia2trXCI7XG5cdFx0XHQvLyBcdH1cblxuXHRcdFx0Ly8gXHRlbHNlIGlmKGFycmF5W2pdID09IFwicHRCXCIpIHtcblx0XHRcdC8vIFx0XHR0aGlzLnBvcnRhbHMucHVzaChuZXcgUG9ydGFsKGksaiwwKSk7XG5cdFx0XHQvLyBcdFx0YXJyYXlbal0gPSBcImtra1wiO1xuXHRcdFx0Ly8gXHR9XG5cdFx0XHQvLyB9XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBncmlkO1xuXHR9XG5cblxuXG5cdC8vIHN0YXJ0IHRoZSBnYW1lXG5cdC8vIHBsYXkoZSl7XG5cdC8vIFx0Ly8gcmVtb3ZlIGdvZCBtb2RlXG5cdC8vIFx0Ly8gdGhpcy51bml2ZXJzZUVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb29wQ2VsbHMpO1xuXHQvLyBcdC8vIGdhbWUgbG9vcFxuXHQvLyBcdHNldEludGVydmFsKHRoaXMuY2hhcmFjdGVyLnVwZGF0ZSgpLCB0aGlzLnNwZWVkKTtcblx0Ly8gXHRmb3IgKHZhciBpID0gMDsgaSA8IGVuZW1pZXMubGVuZ3RoO2krKykge1xuXHQvLyBcdFx0c2V0SW50ZXJ2YWwodGhpcy5jaGFyYWN0ZXIudXBkYXRlKCksIHRoaXMuc3BlZWQpO1xuXG5cdC8vIFx0fVxuXHQvLyBcdHNldEludGVydmFsKHRoaXMuY2hhcmFjdGVyLnVwZGF0ZSgpLCB0aGlzLnNwZWVkKTtcblxuXHQvLyB9XG5cblx0Ly8gZHJhdyBncmlkXG5cdGRyYXdHcmlkKCkge1xuXHRcdHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyM3NzcnO1xuXHRcdHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XG5cdFx0Ly8gdmVydGljYWwgbGluZXNcblx0XHRmb3IgKGxldCBpID0gMTsgaTx0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9MRU5HVEg7IGkrKyl7XG5cdFx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcblx0XHRcdHRoaXMuY3R4Lm1vdmVUbyh0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCppLDApO1xuXHRcdFx0dGhpcy5jdHgubGluZVRvKHRoaXMuRElNRU5TSU9OLkNFTExfTEVOR1RIKmksIFxuXHRcdFx0XHR0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9IRUlHSFQqdGhpcy5ESU1FTlNJT04uQ0VMTF9IRUlHSFQpO1xuXHRcdFx0dGhpcy5jdHguc3Ryb2tlKCk7XG5cdFx0fVxuXHRcdC8vIGhvcml6b250YWwgbGluZXNcblx0XHRmb3IgKGxldCBpID0gMTsgaTx0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9IRUlHSFQ7IGkrKyl7XG5cdFx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcblx0XHRcdHRoaXMuY3R4Lm1vdmVUbygwLHRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUKmkpO1xuXHRcdFx0dGhpcy5jdHgubGluZVRvKHRoaXMuRElNRU5TSU9OLlVOSVZFUlNFX0xFTkdUSCp0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCwgXG5cdFx0XHRcdHRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUKmkpO1xuXHRcdFx0dGhpcy5jdHguc3Ryb2tlKCk7XG5cdFx0fVxuXHR9XG5cblx0ZHJhdygpIHtcblx0XHQvL2RyYXcgc3RhdGljIHN0dWZmXHRcblx0XHRjb25zb2xlLmxvZyh0aGlzLkdyaWQpO1xuXG5cdFx0Zm9yKHZhciBpPTA7aTx0aGlzLkdyaWQubGVuZ3RoO2krKykge1xuXG5cdFx0XHRmb3IodmFyIGo9MDtqPHRoaXMuR3JpZFtpXS5sZW5ndGg7aisrKSB7XG5cdFx0XHRcdGxldCBlbGVtID0gdGhpcy5HcmlkW2ldW2pdO1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZWxlbSk7XG5cdFx0XHRcdGlmIChlbGVtID09IFwieHh4XCIpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhqKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhpKTtcblx0XHRcdFx0XHR0aGlzLmN0eC5maWxsUmVjdCgoMSszKmoraikqdGhpcy5ESU1FTlNJT04uQ0VMTF9MRU5HVEgsaSp0aGlzLkRJTUVOU0lPTi5DRUxMX0hFSUdIVCwzKnRoaXMuRElNRU5TSU9OLkNFTExfTEVOR1RILHRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXG5cblx0XHQvLyBmb3IgKHZhciBpPTA7aTx0aGlzLnBvcnRhbHMubGVuZ3RoO2krKykge1xuXHRcdC8vIFx0Y3R4LmZpbGxTdHlsZT1cIiNGRjAwMDBcIjtcblx0XHQvLyBcdHRoaXMuY3R4LmZpbGxSZWN0KGkqQ0VMTF9MRU5HVEgsaSpDRUxMX0hFSUdIVCwzKkNFTExfTEVOR1RILENFTExfSEVJR0hUKTtcblx0XHQvLyB9XG5cblx0XHQvLyBmb3IgKHZhciBpPTA7aTx0aGlzLnBvcnRhbHMubGVuZ3RoO2krKykge1xuXHRcdC8vIFx0Y3R4LmZpbGxTdHlsZT1cImJsdWVcIjtcblx0XHQvLyBcdHRoaXMuY3R4LmZpbGxSZWN0KGkqQ0VMTF9MRU5HVEgsaSpDRUxMX0hFSUdIVCwzKkNFTExfTEVOR1RILENFTExfSEVJR0hUKTtcblx0XHQvLyB9XG5cblx0XHQvLyBmb3IgKHZhciBpPTA7aTx0aGlzLnBvcnRhbHMubGVuZ3RoO2krKykge1xuXHRcdC8vIFx0Y3R4LmZpbGxTdHlsZT1cInllbGxvd1wiO1xuXHRcdC8vIFx0dGhpcy5jdHguZmlsbFJlY3QoaSpDRUxMX0xFTkdUSCxpKkNFTExfSEVJR0hULDMqQ0VMTF9MRU5HVEgsQ0VMTF9IRUlHSFQpO1xuXHRcdC8vIH1cblxuXG59XG5cbn1cblxuLy8gUHJpdmF0ZSBtZXRob2RzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBMb29wIG92ZXIgdGhlIGNlbGxzXG5mdW5jdGlvbiBsb29wQ2VsbHMoZSkge1xuXHR2YXIgdW5pdmVyc2VFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXZlcnNlJyk7XG5cdHZhciBwYWdlWCA9IGUucGFnZVggLSB1bml2ZXJzZUVsZW0ub2Zmc2V0TGVmdDtcblx0dmFyIHBhZ2VZID0gZS5wYWdlWSAtIHVuaXZlcnNlRWxlbS5vZmZzZXRUb3A7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGk8dGhpcy51bml2ZXJzZS5oZWlnaHQ7IGkrKyl7XG5cdFx0Zm9yIChsZXQgaj0wOyBqPHRoaXMudW5pdmVyc2UubGVuZ3RoOyBqKyspe1xuXHRcdFx0bGV0IGNlbGwgPSB0aGlzLnVuaXZlcnNlLmNlbGxzW2ldW2pdO1xuXHRcdFx0aGFuZGxlQ2xpY2sodGhpcywgY2VsbCwgcGFnZVgsIHBhZ2VZKTtcblx0XHR9XG5cdH1cbn1cblxuLy8gZ2l2ZSBsaWZlIG9yIGRlYXRoIHRvIHRoZSBjZWxsIGNsaWNrZWQuXG4vLyBOb3RlOiBiZWNhdXNlIGxvb3BDZWxscyBpcyBhIGNhbGxiYWNrIHdoaWNoIGhhcyB0aGUgY2xhc3MgY29udGV4dFxuLy8gYm91bmQgdG8gaXQsIHRoaXMgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHRoZSBjYWxsYmFjayBkb2Vzbid0IGdldCB0aGVcbi8vIGNvbnRleHQgaW1wbGljaXRseSwgc28gSSBtdXN0IHBhc3MgaXQuIERvZXNuJ3QgZmVlbCBjbGVhbi4uLlxuLy8gZnVuY3Rpb24gaGFuZGxlQ2xpY2soc2VsZiwgY2VsbCwgcGFnZVgsIHBhZ2VZKXtcbi8vIFx0aWYgKHBhZ2VYID4gY2VsbC54ICYmIHBhZ2VYIDwgY2VsbC54K3NlbGYudW5pdmVyc2UuY2VsbExlbmd0aCAmJlxuLy8gXHRcdFx0XHRwYWdlWSA+IGNlbGwueSAmJiBwYWdlWSA8IGNlbGwueStzZWxmLnVuaXZlcnNlLmNlbGxIZWlnaHQgKSB7XG4vLyBcdFx0Y2hhbmdlQ2VsbHMoc2VsZiwgY2VsbCk7XG4vLyBcdH1cbi8vIH1cblxuLy8gMSBzdGVwID0gMSBnZW5lcmF0aW9uXG5mdW5jdGlvbiBzdGVwKCl7XG5cblx0XG59XG5cbi8qXG4qXHRwYXNzIHRoZSBjZWxsIHRocm91Z2ggdGhlIDQgcnVsZXMuIFxuXHROb3RlOiBjZWxscyBzaG91bGQgbm90IHVwZGF0ZSBoZXJlLCBzaW5jZSBhbHRlcmluZyAxIGJlZm9yZSB5b3UgY2FuXG5cdGFuYWx5emUgdGhlIG90aGVycyB3aWxsIGNhdXNlIGVycm9uZW91cyBvdXRjb21lcy5cbiovXG5mdW5jdGlvbiB0cmFuc2l0aW9ucyhzZWxmLCBjZWxsLCBjZWxsc1RvQ2hhbmdlKSB7XG5cdHZhciB1bmlMZW5ndGggPSBzZWxmLnVuaXZlcnNlLmxlbmd0aDtcblx0dmFyIHVuaUhlaWdodCA9IHNlbGYudW5pdmVyc2UuaGVpZ2h0O1xuXHR2YXIgbmVpZ2hib3Vyc0FsaXZlID0gMDtcblx0Ly8gR28gdGhyb3VnaCB0aGUgbmVpZ2hib3VycyBvZiBlYWNoIGNlbGwuXG5cdGZvciAobGV0IGk9MDsgaTw4OyBpKyspe1xuXHRcdGxldCBuZWlnaGJvdXJJRCA9IGNlbGwubmVpZ2hib3Vyc1tpXTtcblx0XHRpZiAobmVpZ2hib3VySUQgPj0gdW5pTGVuZ3RoKnVuaUhlaWdodCB8fCBuZWlnaGJvdXJJRCA8MCkgY29udGludWU7XG5cdFx0bGV0IG5laWdoYm91ciA9IGdldENlbGxCeUlkKHNlbGYsIG5laWdoYm91cklEKTtcblx0XHRpZiAobmVpZ2hib3VyLnN0YXRlID09PSAxKSBuZWlnaGJvdXJzQWxpdmUrKztcblx0fVxuXHRpZiAoY2VsbC5zdGF0ZSA9PT0gMSl7XG5cdFx0Ly8gemUgbGlmZSBydWxlc1xuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyAxKSBBbnkgbGl2ZSBjZWxsIHdpdGggZmV3ZXIgdGhhbiB0d28gbGl2ZSBuZWlnaGJvdXJzIGRpZXMsIGFzIFxuXHRcdC8vIGlmIGNhdXNlZCBieSB1bmRlci1wb3B1bGF0aW9uLlxuXHRcdC8vIDIpIEFueSBsaXZlIGNlbGwgd2l0aCB0d28gb3IgdGhyZWUgbGl2ZSBuZWlnaGJvdXJzIGxpdmVzIG9uIHRvIFxuXHRcdC8vIHRoZSBuZXh0IGdlbmVyYXRpb24uXG5cdFx0aWYgKG5laWdoYm91cnNBbGl2ZSA8IDIpIGNlbGxzVG9DaGFuZ2UucHVzaChjZWxsLmlkKTtcblx0XHQvLyAzKSBBbnkgbGl2ZSBjZWxsIHdpdGggbW9yZSB0aGFuIHRocmVlIGxpdmUgbmVpZ2hib3VycyBkaWVzLCBhcyBpZiBcblx0XHQvLyBieSBvdmVyY3Jvd2RpbmcuXG5cdFx0ZWxzZSBpZiAobmVpZ2hib3Vyc0FsaXZlID4gMykgY2VsbHNUb0NoYW5nZS5wdXNoKGNlbGwuaWQpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIDQpIEFueSBkZWFkIGNlbGwgd2l0aCBleGFjdGx5IHRocmVlIGxpdmUgbmVpZ2hib3VycyBiZWNvbWVzIGEgXG5cdFx0Ly8gbGl2ZSBjZWxsLCBhcyBpZiBieSByZXByb2R1Y3Rpb24uXG5cdFx0aWYgKG5laWdoYm91cnNBbGl2ZSA9PT0gMykgY2VsbHNUb0NoYW5nZS5wdXNoKGNlbGwuaWQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNlbGxzKHNlbGYsIGNlbGwpIHtcblx0c2VsZi5jdHguZmlsbFN0eWxlID0gKGNlbGwuc3RhdGUpID8gJ3doaXRlJyA6ICcjMzMzJztcblx0c2VsZi5jdHguZmlsbFJlY3QoY2VsbC54KzEsIGNlbGwueSsxLCBcblx0XHRcdHNlbGYudW5pdmVyc2UuY2VsbExlbmd0aC0yLCBzZWxmLnVuaXZlcnNlLmNlbGxIZWlnaHQtMik7XG5cdGNlbGwuc3RhdGUgPSAoY2VsbC5zdGF0ZSkgPyAwIDogMTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2VsbEJ5SWQoc2VsZiwgaWQpIHtcblx0bGV0IHJvdyA9IE1hdGguZmxvb3IoaWQvc2VsZi51bml2ZXJzZS5sZW5ndGgpO1xuXHRsZXQgY29sdW1uID0gaWQgJSBzZWxmLnVuaXZlcnNlLmxlbmd0aDtcblx0cmV0dXJuIHNlbGYudW5pdmVyc2UuY2VsbHNbcm93XVtjb2x1bW5dO1xufSBcblxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7IiwiY2xhc3MgT2Jqe1xuICBjb25zdHJ1Y3RvcihvcHRpb25zLHN0YXRlKXtcbiAgICB0aGlzLkdyaWRYID0gb3B0aW9ucy5HcmlkWDtcbiAgICB0aGlzLkdyaWRZID0gb3B0aW9ucy5HcmlkWTtcbiAgICB0aGlzLnN0YXRlID0gMDsvLzAgaXMgYSBjb2xvcjAsIDEgaXMgY29sb3IxXG5cdHRoaXMuSF9CTE9DS1MgPSAxNDtcbiAgICB0aGlzLkhfRElNRU5USU9OID0gMjU2O1xuICAgIHRoaXMuVl9CTE9DS1MgPSAyNTtcbiAgICB0aGlzLlZfRElNRU5USU9OID0gOTYwO1xuICB9XG5cbiBjbGVhcigpe1xuXHQgdmFyIGdyaWRQaXhlbCA9IGNvbnZlcnRQaXhlbCh7IEdyaWRYOiB0aGlzLkdyaWRYLCBHcmlkWTogdGhpcy5HcmlkWSB9KTtcblx0IGN0eC5jbGVhclJlY3QoZ3JpZFBpeGVsLngsIGdyaWRQaXhlbC55LCAzICogKEhfRElNRU5USU9OIC8gSF9CTE9DS1MpLCBWX0RJTUVOVElPTiAvIFZfQkxPQ0tTKTtcbn1cblxuXG4gIGNvbnZlcnRQaXhlbChjb3VudGVyKSB7XG5cdCAgdmFyIGdyaWRQaXhlbCA9IHtcblx0XHQgIHg6IGNvdW50ZXIuR3JpZFggKiAodGhpcy5IX0RJTUVOVElPTiAvIHRoaXMuSF9CTE9DS1MpLFxuXHRcdCAgeTogKGNvdW50ZXIuR3JpZFkgKyAxKSAqICh0aGlzLlZfRElNRU5USU9OIC8gdGhpcy5WX0JMT0NLUylcblx0ICB9XG4gICAgcmV0dXJuIGdyaWRQaXhlbDtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9iajtcbiJdfQ==
