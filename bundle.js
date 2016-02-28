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

    _get(Object.getPrototypeOf(Character.prototype), "constructor", this).call(this, options, state);
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
    value: function initializeCharacter(ctx, GridX, GridY) {

      var imageObj = new Image();
      imageObj.onload = function () {
        ctx.drawImage(imageObj, this.GridX * (this.H_DIMENTION / this.H_BLOCKS) - 100, this.GridY * (this.V_DIMENTION / this.V_BLOCKS) - 600);
        console.log(GridX * (this.H_DIMENTION / this.H_BLOCKS));
        console.log(GridY * (this.V_DIMENTION / this.V_BLOCKS));
      };
      imageObj.src = "./images/Star2.png";

      // ctx.beginPath();

      // ctx.arc(120, 900, 17, 0, Math.PI*2, true);//character size
      // ctx.fillStyle = "#0095DD";
      // ctx.fill();
      // ctx.closePath();
    }
  }, {
    key: "draw",
    value: function draw(ctx) {

      console.log("car currx: " + this.currX);
      console.log("car curry: " + this.currY);

      this.clear(ctx, this.currX, this.currY);
      var dy = -1;

      this.currY += dy;
      ctx.beginPath();
      ctx.arc(this.currX, this.currY, 17, 0, Math.PI * 2, true); //character size
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
        y: counter.GridY * (this.V_DIMENTION / this.V_BLOCKS)
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
			document.getElementById('start').addEventListener('click', this.play.bind(this));

			console.log(this.plan);
			this.Grid = this.parse(this.plan);

			this.character.initializeCharacter(this.ctx, this.GridX, this.GridY);

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
	}, {
		key: 'play',
		value: function play(e) {
			// remove god mode
			// this.universeElem.removeEventListener('click', loopCells);
			// game loop
			// console.log(this.speed);
			setInterval(this.character.draw(this.ctx), this.speed);
			// setInterval(this.character.checkCollision(this.portals,this.enemies,this.items), this.speed);
			document.addEventListener("keydown", this.character.changeState);
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
						ctx.clearRect(x, y, 3 * (this.H_DIMENTION / this.H_BLOCKS), this.V_DIMENTION / this.V_BLOCKS);
				}
		}]);

		return Obj;
})();

module.exports = Obj;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGlhbnRhbmcvcHJvZy9wb3J0YWwvYXBwLmpzIiwiL1VzZXJzL2RpYW50YW5nL3Byb2cvcG9ydGFsL2pzL0NoYXJhY3Rlci5qcyIsIi9Vc2Vycy9kaWFudGFuZy9wcm9nL3BvcnRhbC9qcy9HYW1lLmpzIiwiL1VzZXJzL2RpYW50YW5nL3Byb2cvcG9ydGFsL2pzL09iai5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7c0JDQWlCLFdBQVc7Ozs7O0FBRzVCLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUNsQixJQUFNLE1BQU0sR0FBRyxHQUFHLENBQUM7O0FBRW5CLElBQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQztBQUMzQixJQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7O0FBRTNCLElBQU0sU0FBUyxHQUFHOztBQUVqQixnQkFBZSxFQUFFLEVBQUU7QUFDbkIsZ0JBQWUsRUFBQyxFQUFFO0FBQ2xCLFlBQVcsRUFBRSxHQUFHLEdBQUMsZUFBZTtBQUNoQyxZQUFXLEVBQUUsR0FBRyxHQUFDLGVBQWU7O0NBRWhDLENBQUE7O0FBRUQsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNqRCxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUVsQyxJQUFJLEtBQUssR0FBRyxDQUFDLHdCQUFTOzs7QUFHckIsT0FBTSxFQUFOLE1BQU07QUFDTixRQUFPLEVBQUUsR0FBRztBQUNaLFVBQVMsRUFBVCxTQUFTO0FBQ1QsTUFBSyxFQUFFLEVBQUU7QUFDVCxLQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQ25CLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxDQUFDO0NBQ2YsQ0FBQyxDQUFHLENBQUM7O0FBSU4sU0FBUyxVQUFVLENB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QUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7Q0FDeEM7O0FBR0QsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Ozs7Ozs7OztJQzNPaEIsR0FBRztBQUNJLFdBRFAsR0FBRyxDQUNLLE9BQU8sRUFBQyxLQUFLLEVBQUM7MEJBRHRCLEdBQUc7O0FBRUwsUUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO0FBQzNCLFFBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztBQUMzQixRQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNsQixRQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNoQixRQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztBQUN2QixRQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNuQixRQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztHQUV4Qjs7Ozs7Ozs7Ozs7O2VBVkcsR0FBRzs7V0F5QkYsZUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRTs7Ozs7OztBQU9kLFNBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFBLEFBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUM3Rjs7O1NBakNHLEdBQUc7OztBQW9DVCxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgR2FtZSBmcm9tICcuL2pzL0dhbWUnO1xuXG4vLyBpbiBwaXhlbHNcbmNvbnN0IFdJRFRIID0gMjU2O1xuY29uc3QgSEVJR0hUID0gOTYwO1xuLy8gaW4gY2VsbCB1bml0c1xuY29uc3QgVU5JVkVSU0VfTEVOR1RIID0gMTM7XG5jb25zdCBVTklWRVJTRV9IRUlHSFQgPSAyNTtcblxuY29uc3QgRElNRU5TSU9OID0ge1xuXHRcblx0VU5JVkVSU0VfTEVOR1RIOiAxMyxcblx0VU5JVkVSU0VfSEVJR0hUOjI1LFxuXHRDRUxMX0xFTkdUSDogMjU2L1VOSVZFUlNFX0xFTkdUSCxcblx0Q0VMTF9IRUlHSFQ6IDk2MC9VTklWRVJTRV9IRUlHSFRcblxufVxuXG52YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXZlcnNlJyk7XG52YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbnZhciBnYW1lcyA9IFtuZXcgR2FtZSh7XG5cdC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuXHQvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcblx0Y2FudmFzLFxuXHRjb250ZXh0OiBjdHgsXG5cdERJTUVOU0lPTixcblx0c3BlZWQ6IDIwLFxuXHRwbGFuOiBbXCJ4eHggeHh4IHh4eFwiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInh4eCB4eHgga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHh4eCB4eHhcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IGtra1wiXVxufSksIF07XG5cblxuXG5mdW5jdGlvbiBjaG9vc2VHYW1lKG51bSkge1xuXHRnYW1lc1tudW1dLmRyYXdHcmlkKCk7XG5cdGdhbWVzW251bV0uaW5pU2V0VXAoKTtcblx0Z2FtZXNbbnVtXS5kcmF3KCk7XG59XG5cblxuY2hvb3NlR2FtZSgwKTtcblxuXG5cbiIsImltcG9ydCBPYmogZnJvbSAnLi9PYmonO1xuXG5jbGFzcyBDaGFyYWN0ZXIgZXh0ZW5kcyBPYmp7XG4gIGNvbnN0cnVjdG9yKHN0YXRlLG9wdGlvbnMpe1xuICAgIHN1cGVyKG9wdGlvbnMsIHN0YXRlKTtcbiAgICB0aGlzLmN1cnJZID0gdGhpcy5jb252ZXJ0UGl4ZWwob3B0aW9ucykueTsvL2luIHBpeGVsOyBZIERFQ1JFQVNFU1xuICAgIHRoaXMuY3VyclggPSB0aGlzLmNvbnZlcnRQaXhlbChvcHRpb25zKS54O1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gY29udmVydE9wdGlvbnNUb1BpeGVsKG9wdGlvbnMpe1xuICAvLyAgIHZhciBIX0JMT0NLUyA9IDE0O1xuICAvLyAgIHZhciBIX0RJTUVOVElPTiA9IDI1NjtcbiAgLy8gICB2YXIgVl9CTE9DS1MgPSAyNTtcbiAgLy8gICB2YXIgVl9ESU1FTlRJT04gPSA5NjA7XG4gIC8vICAgdmFyIGdyaWRQaXhlbC54ID0gb3B0aW9ucy54ICogKEhfRElNRU5USU9OIC8gSF9CTE9DS1MpO1xuICAvLyAgIHZhciBncmlkUGl4ZWwueSA9IChvcHRpb25zLnkrMSkgKiAoVl9ESU1FTlRJT04gLyBWX0JMT0NLUyk7XG4gIC8vICAgcmV0dXJuIGdyaWRQaXhlbDtcbiAgLy8gfVxuXG4gaW5pdGlhbGl6ZUNoYXJhY3RlcihjdHgsR3JpZFgsR3JpZFkpe1xuXG4gICB2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcbiAgIGltYWdlT2JqLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICBjdHguZHJhd0ltYWdlKGltYWdlT2JqLCB0aGlzLkdyaWRYICogKHRoaXMuSF9ESU1FTlRJT04gLyB0aGlzLkhfQkxPQ0tTKS0xMDAsIHRoaXMuR3JpZFkgKiAodGhpcy5WX0RJTUVOVElPTiAvIHRoaXMuVl9CTE9DS1MpLTYwMCk7XG4gICAgIGNvbnNvbGUubG9nKEdyaWRYICogKHRoaXMuSF9ESU1FTlRJT04gLyB0aGlzLkhfQkxPQ0tTKSk7XG4gICAgIGNvbnNvbGUubG9nKEdyaWRZICogKHRoaXMuVl9ESU1FTlRJT04gLyB0aGlzLlZfQkxPQ0tTKSk7XG4gICB9O1xuICAgaW1hZ2VPYmouc3JjID0gXCIuL2ltYWdlcy9TdGFyMi5wbmdcIjtcblxuICBcbiAgIFxuXG4gICBcbiAgICAvLyBjdHguYmVnaW5QYXRoKCk7XG5cbiAgICAvLyBjdHguYXJjKDEyMCwgOTAwLCAxNywgMCwgTWF0aC5QSSoyLCB0cnVlKTsvL2NoYXJhY3RlciBzaXplXG4gICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTVERFwiO1xuICAgIC8vIGN0eC5maWxsKCk7XG4gICAgLy8gY3R4LmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgIGRyYXcoY3R4KSB7XG5cbiAgICAgY29uc29sZS5sb2coXCJjYXIgY3Vycng6IFwiICsgdGhpcy5jdXJyWCk7XG4gICAgIGNvbnNvbGUubG9nKFwiY2FyIGN1cnJ5OiBcIiArIHRoaXMuY3VyclkpO1xuXG4gICAgdGhpcy5jbGVhcihjdHgsdGhpcy5jdXJyWCx0aGlzLmN1cnJZKTtcbiAgICB2YXIgZHkgPSAtMTtcblxuXG5cbiAgICB0aGlzLmN1cnJZICs9IGR5O1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHRoaXMuY3VyclgsIHRoaXMuY3VyclksIDE3LCAwLCBNYXRoLlBJKjIsIHRydWUpOy8vY2hhcmFjdGVyIHNpemVcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG5cbiAgfVxuXG4gIC8vIHNldEludGVydmFsKGRyYXcgLDIwKTsvL2NoZWNrIGV2ZXJ5IDIwbXNcblxuICAgY29udmVydFBpeGVsKGNvdW50ZXIpe1xuICAgIC8vIHZhciBIX0JMT0NLUyA9IDE0O1xuICAgIC8vIHZhciBIX0RJTUVOVElPTiA9IDI1NjtcbiAgICAvLyB2YXIgVl9CTE9DS1MgPSAyNTtcbiAgICAvLyB2YXIgVl9ESU1FTlRJT04gPSA5NjA7XG4gICAgdmFyIGdyaWRQaXhlbCA9IHtcbiAgICAgIHg6IGNvdW50ZXIuR3JpZFggKiAodGhpcy5IX0RJTUVOVElPTiAvIHRoaXMuSF9CTE9DS1MpLFxuICAgICAgeTogKGNvdW50ZXIuR3JpZFkpICogKHRoaXMuVl9ESU1FTlRJT04gLyB0aGlzLlZfQkxPQ0tTKVxuICAgIH1cbiAgICByZXR1cm4gZ3JpZFBpeGVsO1xuICB9XG5cblxuICAgY2hlY2tDb2xsaXNpb24ocG9ydGFscywgZW5lbWllcywgaXRlbXMpe1xuICAgIHZhciBjb2xsaXNpb25UeXBlO1xuXG4gICAgLy9sb29wIHRocm91Z2ggZXZlcnkgb2JqZWN0IGluIHRoZSBtYXBcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcG9ydGFscy5sZW5ndGg7IGkrKyl7XG4gICAgICB2YXIgcGl4ZWwgPSBjb252ZXJ0UGl4ZWwocG9ydGFsc1tpXSk7Ly9pbiBwaXhlbFxuICAgICAgaWYoKHRoaXMuY3VyclkgPT0gcGl4ZWwueSkgJiYgKHRoaXMuY3VyclggPT0gcGl4ZWwueCkpe1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIGNvbGxzaW9uVHlwZSA9IFwicG9ydGFsc1wiO1xuICAgICAgICBjdXJyWCA9IHBvcnRhbHNbaSsxXS5HcmlkWDsvL2luIGdyaWRcbiAgICAgICAgY3VyclkgPSBwb3J0YWxzW2krMV0uR3JpZFk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhjdXJyWCArIDkuMTQsIGN1cnJZLCAxNywgMCwgTWF0aC5QSSoyLCB0cnVlKTsvL3BvcnRhbCBzaXplXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBlbmVtaWVzLmxlbmd0aDsgaSsrKXtcbiAgICAgIHZhciBwaXhlbCA9IGNvbnZlcnRQaXhlbChlbmVtaWVzW2ldKTsvL2luIHBpeGVsXG4gICAgICAvLyBpZih0aGlzLmN1cnJZID4gaS55ICYmIHRoaXMuY3VyclkgPCBpLnkgLSAzOC40ICYmIChjdXJyWCA+IGkueCAmJiBjdXJyWCA8IGkueCArIDE4LjI4KXtcbiAgICAgIGlmKCh0aGlzLmN1cnJZID09IHBpeGVsLnkpICYmICh0aGlzLmN1cnJYID09IHBpeGVsLngpKXtcbiAgICAgICAgY29sbHNpb25UeXBlID0gXCJlbmVtaWVzXCI7XG4gICAgICAgIGRvY3VtZW50LnJlbG9hZCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspe1xuICAgICAgdmFyIHBpeGVsID0gY29udmVydFBpeGVsKGl0ZW1zW2ldKTsvL2luIHBpeGVsXG4gICAgICBpZigodGhpcy5jdXJyWSA9PSBwaXhlbC55KSAmJiAodGhpcy5jdXJyWCA9PSBwaXhlbC54KSl7XG4gICAgICAgIGNvbGxzaW9uVHlwZSA9IFwiaXRlbXNcIjtcbiAgICAgICAgaXRlbUNvbGxlY3RlZCArKztcbiAgICAgICAgY29uc29sZS5sb2coaXRlbUNvbGxlY3RlZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gc2V0SW50ZXJ2YWwoY2hlY2tDb2xsaXNpb24gLDIwKTsvL2NoZWNrIGV2ZXJ5IDIwbXNcbiAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgY2hhbmdlU3RhdGUpO1xuXG5cbiAgIGNoYW5nZVN0YXRlKGUpe1xuICAgIC8vcmVnaXN0ZXIgYSBldmVudCBsaXN0ZW5lclxuICAgIHZhciBrZXkgPSBlLmtleUNvZGUgPyBlLmtleUNvZGUgOiBlLndoaWNoO1xuICAgIGlmIChrZXkgPT0gMzgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiWW91IFByZXNzZWQgdGhlIGZraW5nIFNwYWNlXCIpO1xuICAgICAgc3dpdGNoKHN0YXRlKXtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHN0YXRlKys7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJXaGl0ZVwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHN0YXRlLS07XG4gICAgICAgICAgY29uc29sZS5sb2coXCJCbGFja1wiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDaGFyYWN0ZXI7XG4iLCJpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyJztcbi8vIGltcG9ydCBQb3J0YWwgZnJvbSAuL0NoYXJhY3Rlci5qcztcbi8vIGltcG9ydCBJdGVtIGZyb20gLi9DaGFyYWN0ZXIuanM7XG4vLyBpbXBvcnQgRW5lbXkgZnJvbSAuL0NoYXJhY3Rlci5qcztcblxuXG5cbmNsYXNzIEdhbWUge1xuXHQvLyBzZXQgdXAgaW5zdGFuY2UgdmFyaWFibGVzXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpe1xuXHRcdHRoaXMuY2FudmFzID0gb3B0aW9ucy5jYW52YXM7XG5cdFx0dGhpcy5jdHggPSBvcHRpb25zLmNvbnRleHQ7XG5cdFx0dGhpcy5ESU1FTlNJT04gPSBvcHRpb25zLkRJTUVOU0lPTjtcblx0XHR0aGlzLnVuaXZlcnNlRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml2ZXJzZScpO1xuXHRcdHRoaXMuc3BlZWQgPSBvcHRpb25zLnNwZWVkO1xuXHRcdHRoaXMucGxhbiA9IG9wdGlvbnMucGxhbjtcblx0XHR0aGlzLkdyaWQgPSBbXTtcblx0XHR0aGlzLnBvcnRhbHMgPSBbXTtcblx0XHR0aGlzLml0ZW1zID0gW107XG5cdFx0dGhpcy5lbmVtaWVzID0gW107XG5cdFx0dGhpcy5jaGFyYWN0ZXIgPSBuZXcgQ2hhcmFjdGVyKDAse0dyaWRYOjYsR3JpZFk6MjR9KTtcblx0XHR0aGlzLnBvaW50ID0gMDtcblx0XHR0aGlzLndpbiA9IGZhbHNlO1xuXHR9XG5cblx0Ly8gaW5pdGlhbCBzZXQgdXBcblx0aW5pU2V0VXAoKSB7XG5cdFx0Ly8gLy8gTm90ZTogdXNpbmcgYmluZCB0byBwYXNzIHRoZSBjbGFzcycgY29udGV4dCB0byB0aGUgY2FsbGJhY2tzXG5cdFx0Ly8gLy8gbm90IHN1cmUgaWYgdGhpcyBjYW4gYmUgaW1wcm92ZWQuXG5cdFx0Ly8gLy8gdGhpcy51bml2ZXJzZUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb29wQ2VsbHMuYmluZHRoaXMoKSk7XG5cdFx0Ly8gLy8gd2hlbiB1c2VyIGNsaWNrLCBzdGFydCB0aGUgZ2FtZVxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpXG5cdFx0XHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnBsYXkuYmluZCh0aGlzKSk7XG5cblx0XHRjb25zb2xlLmxvZyh0aGlzLnBsYW4pO1xuXHRcdFx0dGhpcy5HcmlkID0gdGhpcy5wYXJzZSh0aGlzLnBsYW4pO1xuXG5cdFx0XHR0aGlzLmNoYXJhY3Rlci5pbml0aWFsaXplQ2hhcmFjdGVyKHRoaXMuY3R4LHRoaXMuR3JpZFgsdGhpcy5HcmlkWSk7XG5cblx0XHRcdC8vIGRyYXcodGhpcy5HcmlkKSB7XG5cblx0XHRcdC8vIH1cblx0fVxuXG5cdHBhcnNlKHBsYW4pIHtcblx0XHRsZXQgZ3JpZCA9IFtdO1xuXG5cdFx0Zm9yKHZhciBpPTA7aTxwbGFuLmxlbmd0aDtpKyspIHtcblx0XHRcdGxldCBhcnJheSA9IHBsYW5baV0uc3BsaXQoXCIgXCIpO1xuXHRcdFxuXHRcdFx0Z3JpZC5wdXNoKGFycmF5KTtcblx0XHRcdC8vIGZvcih2YXIgaj0wO2k8YXJyYXkubGVuZ3RoO2krKykge1xuXHRcdFx0Ly8gXHRpZihhcnJheVtqXSA9PSBcIml0bVwiKSB7XG5cdFx0XHQvLyBcdFx0dGhpcy5pdGVtcy5wdXNoKClcblx0XHRcdC8vIFx0XHRhcnJheVtqXSA9IFwia2trXCI7XG5cblx0XHRcdC8vIFx0fVxuXHRcdFx0Ly8gXHRlbHNlIGlmKGFycmF5W2pdID09IFwibW9lXCIpIHtcblx0XHRcdC8vIFx0XHR0aGlzLkVuZW1pZXMucHVzaChuZXcgRW5lbXkoaSxqLCkpXG5cdFx0XHQvLyBcdFx0YXJyYXlbal0gPSBcImtra1wiO1xuXG5cdFx0XHQvLyBcdH1cblx0XHRcdC8vIFx0ZWxzZSBpZihhcnJheVtqXSA9PSBcInB0V1wiKSB7XG5cdFx0XHQvLyBcdFx0dGhpcy5wb3J0YWxzLnB1c2gobmV3IFBvcnRhbChpLGosMSkpO1xuXHRcdFx0Ly8gXHRcdGFycmF5W2pdID0gXCJra2tcIjtcblx0XHRcdC8vIFx0fVxuXG5cdFx0XHQvLyBcdGVsc2UgaWYoYXJyYXlbal0gPT0gXCJwdEJcIikge1xuXHRcdFx0Ly8gXHRcdHRoaXMucG9ydGFscy5wdXNoKG5ldyBQb3J0YWwoaSxqLDApKTtcblx0XHRcdC8vIFx0XHRhcnJheVtqXSA9IFwia2trXCI7XG5cdFx0XHQvLyBcdH1cblx0XHRcdC8vIH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZ3JpZDtcblx0fVxuXG5cblxuXG5cdHBsYXkoZSl7XG5cdFx0Ly8gcmVtb3ZlIGdvZCBtb2RlXG5cdFx0Ly8gdGhpcy51bml2ZXJzZUVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb29wQ2VsbHMpO1xuXHRcdC8vIGdhbWUgbG9vcFxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuc3BlZWQpO1xuXHRcdHNldEludGVydmFsKHRoaXMuY2hhcmFjdGVyLmRyYXcodGhpcy5jdHgpLCB0aGlzLnNwZWVkKTtcblx0XHQvLyBzZXRJbnRlcnZhbCh0aGlzLmNoYXJhY3Rlci5jaGVja0NvbGxpc2lvbih0aGlzLnBvcnRhbHMsdGhpcy5lbmVtaWVzLHRoaXMuaXRlbXMpLCB0aGlzLnNwZWVkKTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmNoYXJhY3Rlci5jaGFuZ2VTdGF0ZSlcblxuXHR9XG5cblx0Ly8gZHJhdyBncmlkXG5cdGRyYXdHcmlkKCkge1xuXHRcdHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyM3NzcnO1xuXHRcdHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XG5cdFx0Ly8gdmVydGljYWwgbGluZXNcblx0XHRmb3IgKGxldCBpID0gMTsgaTx0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9MRU5HVEg7IGkrKyl7XG5cdFx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcblx0XHRcdHRoaXMuY3R4Lm1vdmVUbyh0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCppLDApO1xuXHRcdFx0dGhpcy5jdHgubGluZVRvKHRoaXMuRElNRU5TSU9OLkNFTExfTEVOR1RIKmksIFxuXHRcdFx0XHR0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9IRUlHSFQqdGhpcy5ESU1FTlNJT04uQ0VMTF9IRUlHSFQpO1xuXHRcdFx0dGhpcy5jdHguc3Ryb2tlKCk7XG5cdFx0fVxuXHRcdC8vIGhvcml6b250YWwgbGluZXNcblx0XHRmb3IgKGxldCBpID0gMTsgaTx0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9IRUlHSFQ7IGkrKyl7XG5cdFx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcblx0XHRcdHRoaXMuY3R4Lm1vdmVUbygwLHRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUKmkpO1xuXHRcdFx0dGhpcy5jdHgubGluZVRvKHRoaXMuRElNRU5TSU9OLlVOSVZFUlNFX0xFTkdUSCp0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCwgXG5cdFx0XHRcdHRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUKmkpO1xuXHRcdFx0dGhpcy5jdHguc3Ryb2tlKCk7XG5cdFx0fVxuXHR9XG5cblx0ZHJhdygpIHtcblx0XHQvL2RyYXcgc3RhdGljIHN0dWZmXHRcblx0XHRjb25zb2xlLmxvZyh0aGlzLkdyaWQpO1xuXG5cdFx0Zm9yKHZhciBpPTA7aTx0aGlzLkdyaWQubGVuZ3RoO2krKykge1xuXG5cdFx0XHRmb3IodmFyIGo9MDtqPHRoaXMuR3JpZFtpXS5sZW5ndGg7aisrKSB7XG5cdFx0XHRcdGxldCBlbGVtID0gdGhpcy5HcmlkW2ldW2pdO1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZWxlbSk7XG5cdFx0XHRcdGlmIChlbGVtID09IFwieHh4XCIpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhqKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhpKTtcblx0XHRcdFx0XHR0aGlzLmN0eC5maWxsUmVjdCgoMSszKmoraikqdGhpcy5ESU1FTlNJT04uQ0VMTF9MRU5HVEgsaSp0aGlzLkRJTUVOU0lPTi5DRUxMX0hFSUdIVCwzKnRoaXMuRElNRU5TSU9OLkNFTExfTEVOR1RILHRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXG5cblx0XHQvLyBmb3IgKHZhciBpPTA7aTx0aGlzLnBvcnRhbHMubGVuZ3RoO2krKykge1xuXHRcdC8vIFx0Y3R4LmZpbGxTdHlsZT1cIiNGRjAwMDBcIjtcblx0XHQvLyBcdHRoaXMuY3R4LmZpbGxSZWN0KGkqQ0VMTF9MRU5HVEgsaSpDRUxMX0hFSUdIVCwzKkNFTExfTEVOR1RILENFTExfSEVJR0hUKTtcblx0XHQvLyB9XG5cblx0XHQvLyBmb3IgKHZhciBpPTA7aTx0aGlzLnBvcnRhbHMubGVuZ3RoO2krKykge1xuXHRcdC8vIFx0Y3R4LmZpbGxTdHlsZT1cImJsdWVcIjtcblx0XHQvLyBcdHRoaXMuY3R4LmZpbGxSZWN0KGkqQ0VMTF9MRU5HVEgsaSpDRUxMX0hFSUdIVCwzKkNFTExfTEVOR1RILENFTExfSEVJR0hUKTtcblx0XHQvLyB9XG5cblx0XHQvLyBmb3IgKHZhciBpPTA7aTx0aGlzLnBvcnRhbHMubGVuZ3RoO2krKykge1xuXHRcdC8vIFx0Y3R4LmZpbGxTdHlsZT1cInllbGxvd1wiO1xuXHRcdC8vIFx0dGhpcy5jdHguZmlsbFJlY3QoaSpDRUxMX0xFTkdUSCxpKkNFTExfSEVJR0hULDMqQ0VMTF9MRU5HVEgsQ0VMTF9IRUlHSFQpO1xuXHRcdC8vIH1cblxuXG59XG5cbn1cblxuLy8gUHJpdmF0ZSBtZXRob2RzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBMb29wIG92ZXIgdGhlIGNlbGxzXG5mdW5jdGlvbiBsb29wQ2VsbHMoZSkge1xuXHR2YXIgdW5pdmVyc2VFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXZlcnNlJyk7XG5cdHZhciBwYWdlWCA9IGUucGFnZVggLSB1bml2ZXJzZUVsZW0ub2Zmc2V0TGVmdDtcblx0dmFyIHBhZ2VZID0gZS5wYWdlWSAtIHVuaXZlcnNlRWxlbS5vZmZzZXRUb3A7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGk8dGhpcy51bml2ZXJzZS5oZWlnaHQ7IGkrKyl7XG5cdFx0Zm9yIChsZXQgaj0wOyBqPHRoaXMudW5pdmVyc2UubGVuZ3RoOyBqKyspe1xuXHRcdFx0bGV0IGNlbGwgPSB0aGlzLnVuaXZlcnNlLmNlbGxzW2ldW2pdO1xuXHRcdFx0aGFuZGxlQ2xpY2sodGhpcywgY2VsbCwgcGFnZVgsIHBhZ2VZKTtcblx0XHR9XG5cdH1cbn1cblxuLy8gZ2l2ZSBsaWZlIG9yIGRlYXRoIHRvIHRoZSBjZWxsIGNsaWNrZWQuXG4vLyBOb3RlOiBiZWNhdXNlIGxvb3BDZWxscyBpcyBhIGNhbGxiYWNrIHdoaWNoIGhhcyB0aGUgY2xhc3MgY29udGV4dFxuLy8gYm91bmQgdG8gaXQsIHRoaXMgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHRoZSBjYWxsYmFjayBkb2Vzbid0IGdldCB0aGVcbi8vIGNvbnRleHQgaW1wbGljaXRseSwgc28gSSBtdXN0IHBhc3MgaXQuIERvZXNuJ3QgZmVlbCBjbGVhbi4uLlxuLy8gZnVuY3Rpb24gaGFuZGxlQ2xpY2soc2VsZiwgY2VsbCwgcGFnZVgsIHBhZ2VZKXtcbi8vIFx0aWYgKHBhZ2VYID4gY2VsbC54ICYmIHBhZ2VYIDwgY2VsbC54K3NlbGYudW5pdmVyc2UuY2VsbExlbmd0aCAmJlxuLy8gXHRcdFx0XHRwYWdlWSA+IGNlbGwueSAmJiBwYWdlWSA8IGNlbGwueStzZWxmLnVuaXZlcnNlLmNlbGxIZWlnaHQgKSB7XG4vLyBcdFx0Y2hhbmdlQ2VsbHMoc2VsZiwgY2VsbCk7XG4vLyBcdH1cbi8vIH1cblxuLy8gMSBzdGVwID0gMSBnZW5lcmF0aW9uXG5mdW5jdGlvbiBzdGVwKCl7XG5cblx0XG59XG5cbi8qXG4qXHRwYXNzIHRoZSBjZWxsIHRocm91Z2ggdGhlIDQgcnVsZXMuIFxuXHROb3RlOiBjZWxscyBzaG91bGQgbm90IHVwZGF0ZSBoZXJlLCBzaW5jZSBhbHRlcmluZyAxIGJlZm9yZSB5b3UgY2FuXG5cdGFuYWx5emUgdGhlIG90aGVycyB3aWxsIGNhdXNlIGVycm9uZW91cyBvdXRjb21lcy5cbiovXG5mdW5jdGlvbiB0cmFuc2l0aW9ucyhzZWxmLCBjZWxsLCBjZWxsc1RvQ2hhbmdlKSB7XG5cdHZhciB1bmlMZW5ndGggPSBzZWxmLnVuaXZlcnNlLmxlbmd0aDtcblx0dmFyIHVuaUhlaWdodCA9IHNlbGYudW5pdmVyc2UuaGVpZ2h0O1xuXHR2YXIgbmVpZ2hib3Vyc0FsaXZlID0gMDtcblx0Ly8gR28gdGhyb3VnaCB0aGUgbmVpZ2hib3VycyBvZiBlYWNoIGNlbGwuXG5cdGZvciAobGV0IGk9MDsgaTw4OyBpKyspe1xuXHRcdGxldCBuZWlnaGJvdXJJRCA9IGNlbGwubmVpZ2hib3Vyc1tpXTtcblx0XHRpZiAobmVpZ2hib3VySUQgPj0gdW5pTGVuZ3RoKnVuaUhlaWdodCB8fCBuZWlnaGJvdXJJRCA8MCkgY29udGludWU7XG5cdFx0bGV0IG5laWdoYm91ciA9IGdldENlbGxCeUlkKHNlbGYsIG5laWdoYm91cklEKTtcblx0XHRpZiAobmVpZ2hib3VyLnN0YXRlID09PSAxKSBuZWlnaGJvdXJzQWxpdmUrKztcblx0fVxuXHRpZiAoY2VsbC5zdGF0ZSA9PT0gMSl7XG5cdFx0Ly8gemUgbGlmZSBydWxlc1xuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyAxKSBBbnkgbGl2ZSBjZWxsIHdpdGggZmV3ZXIgdGhhbiB0d28gbGl2ZSBuZWlnaGJvdXJzIGRpZXMsIGFzIFxuXHRcdC8vIGlmIGNhdXNlZCBieSB1bmRlci1wb3B1bGF0aW9uLlxuXHRcdC8vIDIpIEFueSBsaXZlIGNlbGwgd2l0aCB0d28gb3IgdGhyZWUgbGl2ZSBuZWlnaGJvdXJzIGxpdmVzIG9uIHRvIFxuXHRcdC8vIHRoZSBuZXh0IGdlbmVyYXRpb24uXG5cdFx0aWYgKG5laWdoYm91cnNBbGl2ZSA8IDIpIGNlbGxzVG9DaGFuZ2UucHVzaChjZWxsLmlkKTtcblx0XHQvLyAzKSBBbnkgbGl2ZSBjZWxsIHdpdGggbW9yZSB0aGFuIHRocmVlIGxpdmUgbmVpZ2hib3VycyBkaWVzLCBhcyBpZiBcblx0XHQvLyBieSBvdmVyY3Jvd2RpbmcuXG5cdFx0ZWxzZSBpZiAobmVpZ2hib3Vyc0FsaXZlID4gMykgY2VsbHNUb0NoYW5nZS5wdXNoKGNlbGwuaWQpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIDQpIEFueSBkZWFkIGNlbGwgd2l0aCBleGFjdGx5IHRocmVlIGxpdmUgbmVpZ2hib3VycyBiZWNvbWVzIGEgXG5cdFx0Ly8gbGl2ZSBjZWxsLCBhcyBpZiBieSByZXByb2R1Y3Rpb24uXG5cdFx0aWYgKG5laWdoYm91cnNBbGl2ZSA9PT0gMykgY2VsbHNUb0NoYW5nZS5wdXNoKGNlbGwuaWQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNlbGxzKHNlbGYsIGNlbGwpIHtcblx0c2VsZi5jdHguZmlsbFN0eWxlID0gKGNlbGwuc3RhdGUpID8gJ3doaXRlJyA6ICcjMzMzJztcblx0c2VsZi5jdHguZmlsbFJlY3QoY2VsbC54KzEsIGNlbGwueSsxLCBcblx0XHRcdHNlbGYudW5pdmVyc2UuY2VsbExlbmd0aC0yLCBzZWxmLnVuaXZlcnNlLmNlbGxIZWlnaHQtMik7XG5cdGNlbGwuc3RhdGUgPSAoY2VsbC5zdGF0ZSkgPyAwIDogMTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2VsbEJ5SWQoc2VsZiwgaWQpIHtcblx0bGV0IHJvdyA9IE1hdGguZmxvb3IoaWQvc2VsZi51bml2ZXJzZS5sZW5ndGgpO1xuXHRsZXQgY29sdW1uID0gaWQgJSBzZWxmLnVuaXZlcnNlLmxlbmd0aDtcblx0cmV0dXJuIHNlbGYudW5pdmVyc2UuY2VsbHNbcm93XVtjb2x1bW5dO1xufSBcblxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7IiwiY2xhc3MgT2Jqe1xuICBjb25zdHJ1Y3RvcihvcHRpb25zLHN0YXRlKXtcbiAgICB0aGlzLkdyaWRYID0gb3B0aW9ucy5HcmlkWDtcbiAgICB0aGlzLkdyaWRZID0gb3B0aW9ucy5HcmlkWTtcbiAgICB0aGlzLnN0YXRlID0gMDsvLzAgaXMgYSBjb2xvcjAsIDEgaXMgY29sb3IxXG5cdHRoaXMuSF9CTE9DS1MgPSAxMztcbiAgICB0aGlzLkhfRElNRU5USU9OID0gMjU2O1xuICAgIHRoaXMuVl9CTE9DS1MgPSAyNTtcbiAgICB0aGlzLlZfRElNRU5USU9OID0gOTYwO1xuXG4gIH1cblxuXG5cblxuIC8vICBjb252ZXJ0UGl4ZWwoY291bnRlcikge1xuXHQvLyAgIHZhciB4ID0gY291bnRlci5HcmlkWCAqICh0aGlzLkhfRElNRU5USU9OIC8gdGhpcy5IX0JMT0NLUyk7XG5cdC8vICAgY29uc29sZS5sb2coXCJ4aXNcIit4KTtcblx0Ly8gICB2YXIgZ3JpZFBpeGVsID0ge1xuXHQvLyBcdCAgeDogY291bnRlci5HcmlkWCAqICh0aGlzLkhfRElNRU5USU9OIC8gdGhpcy5IX0JMT0NLUyksXG5cdC8vIFx0ICB5OiAoY291bnRlci5HcmlkWSArIDEpICogKHRoaXMuVl9ESU1FTlRJT04gLyB0aGlzLlZfQkxPQ0tTKVxuXHQvLyAgIH1cbiAvLyAgICByZXR1cm4gZ3JpZFBpeGVsO1xuXHQvLyB9XG5cblx0IGNsZWFyKGN0eCx4LHkpIHtcblx0XHQgLy8gY29uc29sZS5sb2codGhpcy5IX0RJTUVOVElPTiAvIHRoaXMuSF9CTE9DS1MpO1xuXHRcdCAvLyAvLyBjb25zb2xlLmxvZyh0aGlzLkdyaWRYKTtcblx0XHQgLy8gdmFyIHggPSB0aGlzLkdyaWRYICogKHRoaXMuSF9ESU1FTlRJT04gLyB0aGlzLkhfQkxPQ0tTKTtcblx0XHQgLy8gdmFyIHkgPSAodGhpcy5HcmlkWSkgKiAodGhpcy5WX0RJTUVOVElPTiAvIHRoaXMuVl9CTE9DS1MpO1xuXHRcdCAvLyBjb25zb2xlLmxvZyhcInggaXMgXCIrIHgpO1xuXHRcdCAvLyBjb25zb2xlLmxvZyhcInkgaXMgXCIgKyB5KTtcblx0ICBjdHguY2xlYXJSZWN0KHgseSwgMyAqICh0aGlzLkhfRElNRU5USU9OIC8gdGhpcy5IX0JMT0NLUyksIHRoaXMuVl9ESU1FTlRJT04gLyB0aGlzLlZfQkxPQ0tTKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9iajtcbiJdfQ==
