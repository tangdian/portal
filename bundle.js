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
	plan: ["xxx xxx xxx", "kkk kkk kkk", "xxx xxx kkk", "kkk kkk ptB", "kkk xxx ptB", "kkk ptB kkk", "kkk xxx ptW", "kkk kkk kkk", "xxx ptW kkk", "kkk kkk kkk", "kkk xxx ptW", "kkk kkk kkk", "ptW xxx kkk", "kkk kkk kkk", "xxx xxx kkk", "kkk kkk kkk", "kkk xxx ptB", "kkk kkk kkk", "kkk ptB kkk"]
}), new _jsGame2['default']({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas: canvas,
	context: ctx,
	DIMENSION: DIMENSION,
	speed: 20,
	plan: ["kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk its kkk", "kkk kkk kkk", "kkk ptB kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk xxx kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk ptB kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk"] }), new _jsGame2['default']({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas: canvas,
	context: ctx,
	DIMENSION: DIMENSION,
	speed: 20,
	plan: ["kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk its kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk"]
}), new _jsGame2['default']({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas: canvas,
	context: ctx,
	DIMENSION: DIMENSION,
	speed: 20,
	plan: ["kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk its kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk xxx kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk"]
}), new _jsGame2['default']({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas: canvas,
	context: ctx,
	DIMENSION: DIMENSION,
	speed: 20,
	plan: ["kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk ptW", "its kkk kkk", "kkk xxx kkk", "ptW kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk xxx kkk", "ptW kkk kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk"]
}), new _jsGame2['default']({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas: canvas,
	context: ctx,
	DIMENSION: DIMENSION,
	speed: 20,
	plan: ["kkk kkk kkk", "its kkk kkk", "kkk kkk kkk", "ptW kkk kkk", "kkk kkk kkk", "kkk xxx kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk", "xxx kkk kkk", "kkk kkk kkk", "ptW kkk kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk"]
}), new _jsGame2['default']({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas: canvas,
	context: ctx,
	DIMENSION: DIMENSION,
	speed: 20,
	plan: ["kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk its kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk ptB kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk xxx kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk ptB kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk"]
}), new _jsGame2['default']({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas: canvas,
	context: ctx,
	DIMENSION: DIMENSION,
	speed: 20,
	plan: ["kkk its kkk", "kkk ptB kkk", "kkk kkk ptW", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk ptB", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk ptW", "kkk kkk kkk", "kkk kkk xxx", "kkk kkk ptW", "kkk kkk kkk", "kkk kkk ptW", "kkk kkk kkk", "kkk kkk ptW", "kkk xxx kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk"]
}), new _jsGame2['default']({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas: canvas,
	context: ctx,
	DIMENSION: DIMENSION,
	speed: 20,
	plan: ["kkk its kkk", "kkk ptB kkk", "kkk kkk ptW", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk ptB", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk ptW", "kkk kkk kkk", "kkk kkk xxx", "kkk kkk ptW", "kkk kkk kkk", "kkk kkk ptW", "kkk kkk kkk", "kkk kkk ptW", "kkk xxx kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk"]
}), new _jsGame2['default']({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas: canvas,
	context: ctx,
	DIMENSION: DIMENSION,
	speed: 20,
	plan: ["its kkk kkk", "ptB kkk kkk", "kkk kkk ptB", "kkk kkk kkk", "kkk xxx ptW", "kkk ptB kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "xxx xxx kkk", "ptB kkk kkk", "kkk kkk kkk", "ptW kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "ptB kkk kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk ptB kkk", "kkk kkk kkk", "kkk kkk kkk"]
}), new _jsGame2['default']({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas: canvas,
	context: ctx,
	DIMENSION: DIMENSION,
	speed: 20,
	plan: ["kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk its kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk xxx kkk", "kkk kkk kkk", "kkk itr kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk"]
}), new _jsGame2['default']({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas: canvas,
	context: ctx,
	DIMENSION: DIMENSION,
	speed: 20,
	plan: ["kkk ptW kkk", "kkk kkk kkk", "kkk its itr", "kkk kkk kkk", "kkk xxx ptB", "kkk kkk kkk", "kkk kkk ptW", "xxx kkk kkk", "kkk kkk ptW", "kkk kkk kkk", "ptB kkk kkk", "kkk kkk kkk", "ptW kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "ptB kkk kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk"]
}), new _jsGame2['default']({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas: canvas,
	context: ctx,
	DIMENSION: DIMENSION,
	speed: 20,
	plan: ["kkk ptW kkk", "kkk kkk kkk", "kkk its itr", "kkk kkk kkk", "kkk xxx ptB", "kkk kkk kkk", "kkk kkk ptW", "xxx kkk kkk", "kkk kkk ptW", "kkk kkk kkk", "ptB kkk kkk", "kkk kkk kkk", "ptW kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "ptB kkk kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk"]
})];

function chooseGame(num) {
	// games[num].drawGrid();
	games[num].iniSetUp();
	games[num].draw();
	// games[num].play();
}

chooseGame(9);

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

  function Character(options) {
    _classCallCheck(this, Character);

    _get(Object.getPrototypeOf(Character.prototype), "constructor", this).call(this, options);
    this.state = options.state;
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
      imageObj.src = "./images/White2.png";

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
        self.clear(ctx);
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

      this.clear(ctx);
      // this.clear(ctx,this.currX,this.currY);

      var dy = -3;
      this.currY += dy;

      var x = this.currX;
      var y = this.currY;

      if (this.state == 0) {
        var imageObj = new Image();
        imageObj.onload = function () {

          ctx.drawImage(this, x, y);
        };
        imageObj.src = "./images/Black2.png";
      } else {
        var imageObj = new Image();
        imageObj.onload = function () {

          ctx.drawImage(this, x, y);
        };
        imageObj.src = "./images/White2.png";
      }
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
    key: "changeState",
    value: function changeState(e) {
      //register a event listener
      var key = e.keyCode ? e.keyCode : e.which;
      console.log("state is" + this.state);
      if (key == 70) {
        console.log("You Pressed the fking Space");

        switch (this.state) {
          case 0:
            this.state++;
            console.log("White");
            break;
          case 1:
            this.state--;
            console.log("Black");
            break;
          default:
            console.log("fuck");
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
		this.itrs = [];
		this.itss = [];
		this.movingE = [];
		this.stillE = [];
		this.character = new _Character2['default']({ state: 0, GridX: 5, GridY: 23 });
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
					} else if (array[j] == "itr") {
						this.itrs.push(new _Obj2['default']({ GridX: 1 + 3 * j + j, GridY: i }));
					} else if (array[j] == "its") {
						this.itss.push(new _Obj2['default']({ GridX: 1 + 3 * j + j, GridY: i }));
					}
				}
			}
		}
	}, {
		key: 'play',
		value: function play() {
			// remove god mode
			// this.universeElem.removeEventListener('click', loopCells);
			// game loop
			// console.log(this.speed);

			var self = this;

			document.addEventListener("keydown", function (e) {
				self.character.changeState(e);
			});

			this.intervalID = setInterval(function () {
				self.character.draw(self.ctx);
				self.checkCollision();
				self.draw();
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

			this.clear;
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

				imageObj = new Image();

				imageObj.onload = function () {

					ctx.drawImage(this, x * xshift, y * yshift);
				};
				imageObj.src = "./images/potB.png";
			};

			for (var i = 0; i < this.portalsB.length; i++) {
				var imageObj;

				_loop2();
			}

			var _loop3 = function () {
				var x = _this.portalsW[i].GridX;
				var y = _this.portalsW[i].GridY;

				imageObj = new Image();

				imageObj.onload = function () {

					ctx.drawImage(this, x * xshift, y * yshift);
				};
				imageObj.src = "./images/potW.png";
			};

			for (var i = 0; i < this.portalsW.length; i++) {
				var imageObj;

				_loop3();
			}

			var _loop4 = function () {
				var x = _this.itss[i].GridX;
				var y = _this.itss[i].GridY;

				imageObj = new Image();

				imageObj.onload = function () {

					ctx.drawImage(this, x * xshift, y * yshift);
				};
				imageObj.src = "./images/Star2.png";
			};

			for (var i = 0; i < this.itss.length; i++) {
				var imageObj;

				_loop4();
			}

			var _loop5 = function () {
				var x = _this.itrs[i].GridX;
				var y = _this.itrs[i].GridY;

				imageObj = new Image();

				imageObj.onload = function () {

					ctx.drawImage(this, x * xshift, y * yshift);
				};
				imageObj.src = "./images/reverse.png";
			};

			for (var i = 0; i < this.itrs.length; i++) {
				var imageObj;

				_loop5();
			}

			// for (var i = 0; i < this.items.length; i++) {
			// 	let x = this.portalsW[i].GridX;
			// 	let y = this.portalsW[i].GridY;

			// 	var imageObj = new Image();
			// 	imageObj.onload = function() {

			// 		ctx.drawImage(this, x * xshift, y * yshift);

			// 	};
			// 	imageObj.src = "./images/potW.png";

			// }
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
			var self = this;
			// var collisionType;

			// //loop through every object in the map
			// console.log(this.portalsB[this.nowptB])

			if (this.portalsB.length > 0) {
				var pixel = convertPixel(this.portalsB[this.nowptB]); //in pixel
				// console.log(pixel.x);
				// console.log(this.character.currX);
				if (Math.abs(this.character.currY - pixel.y) < 5 && Math.abs(this.character.currX - pixel.x) < 5 && this.character.state == 0) {
					console.log("chuan");
					var tempX = this.character.currX;
					var tempY = this.character.currY;
					setTimeout(function () {
						console.log(tempX);
						console.log(tempY);
						self.character.clear(self.ctx, tempX, tempY);

						console.log("cleared");
					}, 100);

					this.nowptB = (this.nowptB + this.portalsB.length - 1) % this.portalsB.length;
					console.log("nowB is : " + this.nowptB);

					pixel = convertPixel(this.portalsB[this.nowptB]);
					this.character.currX = pixel.x;
					this.character.currY = pixel.y - 11;
					console.log(pixel);
					var imageObj = new Image();
					var ctx = this.ctx;
					imageObj.onload = function () {

						ctx.drawImage(this, self.character.currX, self.character.currY);
					};
					imageObj.src = "./images/Black2.png";
				} else if (Math.abs(this.character.currY - pixel.y) < 5) {

					this.nowptB = (this.nowptB + this.portalsB.length - 1) % this.portalsB.length;
					console.log(this.nowptB);
				}
			}

			if (this.portalsW.length > 0) {
				var pixel = convertPixel(this.portalsW[this.nowptW]); //in pixel
				// console.log(pixel.x);
				// console.log(this.character.currX);
				if (Math.abs(this.character.currY - pixel.y) < 5 && Math.abs(this.character.currX - pixel.x) < 5 && this.character.state == 1) {
					console.log("chuan");
					var tempX = this.character.currX;
					var tempY = this.character.currY;
					setTimeout(function () {
						console.log(tempX);
						console.log(tempY);
						self.character.clear(self.ctx, tempX, tempY);

						console.log("cleared");
					}, 100);

					this.nowptW = (this.nowptW + this.portalsW.length - 1) % this.portalsW.length;
					console.log("nowB is : " + this.nowptW);

					pixel = convertPixel(this.portalsW[this.nowptW]);
					this.character.currX = pixel.x;
					this.character.currY = pixel.y - 11;
					console.log(pixel);
					var imageObj = new Image();
					var ctx = this.ctx;
					imageObj.onload = function () {

						ctx.drawImage(this, self.character.currX, self.character.currY);
					};
					imageObj.src = "./images/White2.png";
				} else if (Math.abs(this.character.currY - pixel.y) < 5) {

					this.nowptW = (this.nowptW + this.portalsW.length - 1) % this.portalsW.length;
					console.log(this.nowptW);
				}
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
				if (Math.abs(this.character.currY - (pixel.y + 30.4)) < 5) {
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
				value: function clear(ctx) {
						// console.log(this.H_DIMENTION / this.H_BLOCKS);
						// // console.log(this.GridX);
						// var x = this.GridX * (this.H_DIMENTION / this.H_BLOCKS);
						// var y = (this.GridY) * (this.V_DIMENTION / this.V_BLOCKS);
						// console.log("x is "+ x);
						// console.log("y is " + y);

						// ctx.clearRect(x,y, 3 * (this.H_DIMENTION / this.H_BLOCKS), 1+(this.V_DIMENTION / this.V_BLOCKS));
						ctx.clearRect(0, 0, this.H_DIMENTION, this.V_DIMENTION);
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGlhbnRhbmcvcHJvZy9wb3J0YWwvYXBwLmpzIiwiL1VzZXJzL2RpYW50YW5nL3Byb2cvcG9ydGFsL2pzL0NoYXJhY3Rlci5qcyIsIi9Vc2Vycy9kaWFudGFuZy9wcm9nL3BvcnRhbC9qcy9HYW1lLmpzIiwiL1VzZXJzL2RpYW50YW5nL3Byb2cvcG9ydGFsL2pzL09iai5qcyIsIi9Vc2Vycy9kaWFudGFuZy9wcm9nL3BvcnRhbC9qcy9Qb3J0YWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O3NCQ0FpQixXQUFXOzs7OztBQUc1QixJQUFNLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDbEIsSUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDOztBQUVuQixJQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDM0IsSUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDOztBQUUzQixJQUFNLFNBQVMsR0FBRzs7QUFFakIsZ0JBQWUsRUFBRSxFQUFFO0FBQ25CLGdCQUFlLEVBQUMsRUFBRTtBQUNsQixZQUFXLEVBQUUsR0FBRyxHQUFDLGVBQWU7QUFDaEMsWUFBVyxFQUFFLEdBQUcsR0FBQyxlQUFlOztDQUVoQyxDQUFBOztBQUVELElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDakQsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFbEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyx3QkFBUzs7O0FBR3JCLE9BQU0sRUFBTixNQUFNO0FBQ04sUUFBTyxFQUFFLEdBQUc7QUFDWixVQUFTLEVBQVQsU0FBUztBQUNULE1BQUssRUFBRSxFQUFFO0FBQ1QsS0FBSSxFQUFFLENBQUMsYUFBYSxFQUNuQixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEs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LElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBRTtBQUMvQixTQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLEVBQUU7QUFDckIsVUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7TUFHeEQsTUFFSSxJQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLEVBQUU7QUFDMUIsVUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztNQUVuQyxNQUNJLElBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRTtBQUMxQixVQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyx3QkFBVyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7TUFDOUQsTUFFSSxJQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLEVBQUU7QUFDMUIsVUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsd0JBQVksQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO01BQy9ELE1BQ0ksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxFQUFFO0FBQzNCLFVBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMs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QUFRLENBQUMsTUFBTSxHQUFHLFlBQVc7O0FBRTVCLFNBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7TUFFaEUsQ0FBQztBQUNGLGFBQVEsQ0FBQyxHQUFHLEdBQUcscUJBQXFCLENBQUM7S0FDdEMsTUFDSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTs7QUFFdEQsU0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBLEdBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFDOUUsWUFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDekI7SUFJQzs7QUFHSCxPQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUM3QixRQUFJLEtBQUssR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7O0FBR3JELFFBQUksQUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxBQUFDLElBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksQ0FBQyxBQUFDLEVBQUU7QUFDcEksWUFBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNyQixTQUFJLEtBQUssR0FBRyxJQUFJ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QixRQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztHQUV4Qjs7Ozs7Ozs7Ozs7O2VBVkcsR0FBRzs7V0F5QkYsZUFBQyxHQUFHLEVBQUU7Ozs7Ozs7OztBQVNWLFNBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUN6RDs7O1NBbkNHLEdBQUc7OztBQXNDVCxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7OztvQkN0Q0wsT0FBTzs7OztJQUVqQixNQUFNO1lBQU4sTUFBTTs7QUFDQyxXQURQLE1BQU0sQ0FDRSxLQUFLLEVBQUMsT0FBTyxFQUFDOzBCQUR0QixNQUFNOztBQUVSLCtCQUZFLE1BQU0sNkNBRUYsT0FBTyxFQUFFO0FBQ2YsUUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7R0FDcEI7O1NBSkcsTUFBTTs7O0FBU1osTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9qcy9HYW1lJztcblxuLy8gaW4gcGl4ZWxzXG5jb25zdCBXSURUSCA9IDI1NjtcbmNvbnN0IEhFSUdIVCA9IDk2MDtcbi8vIGluIGNlbGwgdW5pdHNcbmNvbnN0IFVOSVZFUlNFX0xFTkdUSCA9IDEzO1xuY29uc3QgVU5JVkVSU0VfSEVJR0hUID0gMjU7XG5cbmNvbnN0IERJTUVOU0lPTiA9IHtcblxuXHRVTklWRVJTRV9MRU5HVEg6IDEzLFxuXHRVTklWRVJTRV9IRUlHSFQ6MjUsXG5cdENFTExfTEVOR1RIOiAyNTYvVU5JVkVSU0VfTEVOR1RILFxuXHRDRUxMX0hFSUdIVDogOTYwL1VOSVZFUlNFX0hFSUdIVFxuXG59XG5cbnZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdmVyc2UnKTtcbnZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxudmFyIGdhbWVzID0gW25ldyBHYW1lKHtcblx0Ly8gZW5oYW5jZWQgb2JqZWN0IGxpdGVyYWxzXG5cdC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuXHRjYW52YXMsXG5cdGNvbnRleHQ6IGN0eCxcblx0RElNRU5TSU9OLFxuXHRzcGVlZDogMjAsXG5cdHBsYW46IFtcInh4eCB4eHggeHh4XCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwieHh4IHh4eCBra2tcIixcblx0XHRcImtrayBra2sgcHRCXCIsXG5cdFx0XCJra2sgeHh4IHB0QlwiLFxuXHRcdFwia2trIHB0QiBra2tcIixcblx0XHRcImtrayB4eHggcHRXXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwieHh4IHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IHB0V1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInB0VyB4eHgga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwieHh4IHh4eCBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IHB0QlwiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBwdEIga2trXCJdXG59KSwgbmV3IEdhbWUoe1xuXHQvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcblx0Ly8gJ2NhbnZhcywnIGlzIHRoZSBzYW1lIGFzICdjYW52YXM6IGNhbnZhcywnXG5cdGNhbnZhcyxcblx0Y29udGV4dDogY3R4LFxuXHRESU1FTlNJT04sXG5cdHNwZWVkOiAyMCxcblx0cGxhbjogW1wia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBpdHMga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0QiBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayB4eHgga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0QiBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCJdfSksXG5uZXcgR2FtZSh7XG5cdC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuXHQvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcblx0Y2FudmFzLFxuXHRjb250ZXh0OiBjdHgsXG5cdERJTUVOU0lPTixcblx0c3BlZWQ6IDIwLFxuXHRwbGFuOiBbXCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGl0cyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRXIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRXIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIl1cbn0pLFxubmV3IEdhbWUoe1xuXHQvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcblx0Ly8gJ2NhbnZhcywnIGlzIHRoZSBzYW1lIGFzICdjYW52YXM6IGNhbnZhcywnXG5cdGNhbnZhcyxcblx0Y29udGV4dDogY3R4LFxuXHRESU1FTlNJT04sXG5cdHNwZWVkOiAyMCxcblx0cGxhbjogW1wia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBpdHMga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHh4eCBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXVxufSksXG5uZXcgR2FtZSh7XG5cdC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuXHQvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcblx0Y2FudmFzLFxuXHRjb250ZXh0OiBjdHgsXG5cdERJTUVOU0lPTixcblx0c3BlZWQ6IDIwLFxuXHRwbGFuOiBbXCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcIml0cyBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IGtra1wiLFxuXHRcdFwicHRXIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayB4eHgga2trXCIsXG5cdFx0XCJwdFcga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBwdFcga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIl1cbn0pLFxubmV3IEdhbWUoe1xuXHQvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcblx0Ly8gJ2NhbnZhcywnIGlzIHRoZSBzYW1lIGFzICdjYW52YXM6IGNhbnZhcywnXG5cdGNhbnZhcyxcblx0Y29udGV4dDogY3R4LFxuXHRESU1FTlNJT04sXG5cdHNwZWVkOiAyMCxcblx0cGxhbjogW1wia2trIGtrayBra2tcIixcblx0XHRcIml0cyBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwicHRXIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBwdFcga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInh4eCBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwicHRXIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRXIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRXIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCJdXG59KSxcbm5ldyBHYW1lKHtcblx0Ly8gZW5oYW5jZWQgb2JqZWN0IGxpdGVyYWxzXG5cdC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuXHRjYW52YXMsXG5cdGNvbnRleHQ6IGN0eCxcblx0RElNRU5TSU9OLFxuXHRzcGVlZDogMjAsXG5cdHBsYW46IFtcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBpdHMga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBwdEIga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRCIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiXVxufSksXG5uZXcgR2FtZSh7XG5cdC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuXHQvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcblx0Y2FudmFzLFxuXHRjb250ZXh0OiBjdHgsXG5cdERJTUVOU0lPTixcblx0c3BlZWQ6IDIwLFxuXHRwbGFuOiBbXCJra2sgaXRzIGtra1wiLFxuXHRcdFwia2trIHB0QiBra2tcIixcblx0XHRcImtrayBra2sgcHRXXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sgcHRCXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sgcHRXXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayB4eHhcIixcblx0XHRcImtrayBra2sgcHRXXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIHB0V1wiLFxuXHRcdFwia2trIHh4eCBra2tcIixcblx0XHRcImtrayBwdFcga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiXVxufSksXG5cbm5ldyBHYW1lKHtcblx0Ly8gZW5oYW5jZWQgb2JqZWN0IGxpdGVyYWxzXG5cdC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuXHRjYW52YXMsXG5cdGNvbnRleHQ6IGN0eCxcblx0RElNRU5TSU9OLFxuXHRzcGVlZDogMjAsXG5cdHBsYW46IFtcImtrayBpdHMga2trXCIsXG5cdFx0XCJra2sgcHRCIGtra1wiLFxuXHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBwdEJcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIHh4eFwiLFxuXHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIHB0V1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sgcHRXXCIsXG5cdFx0XCJra2sgeHh4IGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRXIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCJdXG59KSxcbm5ldyBHYW1lKHtcblx0Ly8gZW5oYW5jZWQgb2JqZWN0IGxpdGVyYWxzXG5cdC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuXHRjYW52YXMsXG5cdGNvbnRleHQ6IGN0eCxcblx0RElNRU5TSU9OLFxuXHRzcGVlZDogMjAsXG5cdHBsYW46IFtcIml0cyBra2sga2trXCIsXG5cdFx0XCJwdEIga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBwdEJcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IHB0V1wiLFxuXHRcdFwia2trIHB0QiBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRXIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInh4eCB4eHgga2trXCIsXG5cdFx0XCJwdEIga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInB0VyBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInB0QiBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRCIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCJdXG59KSxcbm5ldyBHYW1lKHtcblx0Ly8gZW5oYW5jZWQgb2JqZWN0IGxpdGVyYWxzXG5cdC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuXHRjYW52YXMsXG5cdGNvbnRleHQ6IGN0eCxcblx0RElNRU5TSU9OLFxuXHRzcGVlZDogMjAsXG5cdHBsYW46IFtcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBwdFcga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBpdHMga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBpdHIga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiXVxufSksXG5cdG5ldyBHYW1lKHtcblx0XHQvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcblx0XHQvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcblx0XHRjYW52YXMsXG5cdFx0Y29udGV4dDogY3R4LFxuXHRcdERJTUVOU0lPTixcblx0XHRzcGVlZDogMjAsXG5cdFx0cGxhbjogW1wia2trIHB0VyBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIGl0cyBpdHJcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIHh4eCBwdEJcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcdFwieHh4IGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwicHRCIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwicHRXIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwicHRCIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIl1cblx0fSksXG5cdG5ldyBHYW1lKHtcblx0XHQvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcblx0XHQvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcblx0XHRjYW52YXMsXG5cdFx0Y29udGV4dDogY3R4LFxuXHRcdERJTUVOU0lPTixcblx0XHRzcGVlZDogMjAsXG5cdFx0cGxhbjogW1wia2trIHB0VyBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIGl0cyBpdHJcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIHh4eCBwdEJcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcdFwieHh4IGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwicHRCIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwicHRXIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwicHRCIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIl1cblx0fSksXG5cblxuXG5cbl07XG5cblxuXG5mdW5jdGlvbiBjaG9vc2VHYW1lKG51bSkge1xuXHQvLyBnYW1lc1tudW1dLmRyYXdHcmlkKCk7XG5cdGdhbWVzW251bV0uaW5pU2V0VXAoKTtcblx0Z2FtZXNbbnVtXS5kcmF3KCk7XG5cdC8vIGdhbWVzW251bV0ucGxheSgpO1xufVxuXG5cblxuY2hvb3NlR2FtZSg5KTtcblxuIiwiaW1wb3J0IE9iaiBmcm9tICcuL09iaic7XG5cbmNsYXNzIENoYXJhY3RlciBleHRlbmRzIE9iantcbiAgY29uc3RydWN0b3Iob3B0aW9ucyl7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgdGhpcy5zdGF0ZSA9IG9wdGlvbnMuc3RhdGU7XG4gICAgdGhpcy5jdXJyWSA9IHRoaXMuY29udmVydFBpeGVsKG9wdGlvbnMpLnk7Ly9pbiBwaXhlbDsgWSBERUNSRUFTRVNcbiAgICB0aGlzLmN1cnJYID0gdGhpcy5jb252ZXJ0UGl4ZWwob3B0aW9ucykueDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gY29udmVydE9wdGlvbnNUb1BpeGVsKG9wdGlvbnMpe1xuICAvLyAgIHZhciBIX0JMT0NLUyA9IDE0O1xuICAvLyAgIHZhciBIX0RJTUVOVElPTiA9IDI1NjtcbiAgLy8gICB2YXIgVl9CTE9DS1MgPSAyNTtcbiAgLy8gICB2YXIgVl9ESU1FTlRJT04gPSA5NjA7XG4gIC8vICAgdmFyIGdyaWRQaXhlbC54ID0gb3B0aW9ucy54ICogKEhfRElNRU5USU9OIC8gSF9CTE9DS1MpO1xuICAvLyAgIHZhciBncmlkUGl4ZWwueSA9IChvcHRpb25zLnkrMSkgKiAoVl9ESU1FTlRJT04gLyBWX0JMT0NLUyk7XG4gIC8vICAgcmV0dXJuIGdyaWRQaXhlbDtcbiAgLy8gfVxuXG4gaW5pdGlhbGl6ZUNoYXJhY3RlcihjdHgpe1xuIC8vb25seSBhYmxlIHRvIGFjY2VzcyAndGhpcycgb24gdGhlIG91dHNpZGVcbiBcbiAgIFxuICAgICB2YXIgeCA9IHRoaXMuY3VyclggO1xuICAgICB2YXIgeSA9IHRoaXMuY3VyclkgO1xuICAgICB2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcbiAgICAgaW1hZ2VPYmoub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlT2JqLCB4LCB5KTtcblxuICAgICB9O1xuICAgICBpbWFnZU9iai5zcmMgPSBcIi4vaW1hZ2VzL1doaXRlMi5wbmdcIjtcblxuICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcblxuICAgIC8vIGN0eC5hcmMoMTIwLCA5MDAsIDE3LCAwLCBNYXRoLlBJKjIsIHRydWUpOy8vY2hhcmFjdGVyIHNpemVcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gICAgLy8gY3R4LmZpbGwoKTtcbiAgICAvLyBjdHguY2xvc2VQYXRoKCk7XG4gIH1cblxuICByZWJvcm5DaGFyYWN0ZXIgKGN0eCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgYnggPSB0aGlzLmN1cnJYO1xuICAgIHZhciBieSA9IHRoaXMuY3Vyclk7XG4gIFxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLmNsZWFyKGN0eCk7XG4gICAgICB2YXIgeCA9IHNlbGYuY29udmVydFBpeGVsKHNlbGYub3B0aW9ucykueDtcbiAgICAgIHZhciB5ID0gc2VsZi5jb252ZXJ0UGl4ZWwoc2VsZi5vcHRpb25zKS55O1xuICAgICAgc2VsZi5jdXJyWCA9IHg7XG4gICAgICBzZWxmLmN1cnJZID0geTtcbiAgICAgIHZhciBpbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1hZ2VPYmoub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZU9iaiwgeCwgeSk7XG5cbiAgICAgIH07XG4gICAgICBpbWFnZU9iai5zcmMgPSBcIi4vaW1hZ2VzL0JsYWNrMi5wbmdcIjtcbiAgICB9LCA1MCk7XG4gIH1cblxuICBsb2coKSB7XG4gICAgY29uc29sZS5sb2coXCJkb2luZ1wiKTtcbiAgfVxuXG4gICBkcmF3KGN0eCkge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJkcmF3aW5nLi5cIik7XG5cbiAgICB0aGlzLmNsZWFyKGN0eCk7XG4gICAgLy8gdGhpcy5jbGVhcihjdHgsdGhpcy5jdXJyWCx0aGlzLmN1cnJZKTtcbiAgICBcbiAgICB2YXIgZHkgPSAtMztcbiAgICB0aGlzLmN1cnJZICs9IGR5O1xuXG4gICAgdmFyIHggPSB0aGlzLmN1cnJYO1xuICAgIHZhciB5ID0gdGhpcy5jdXJyWTtcblxuICAgIGlmKHRoaXMuc3RhdGUgPT0gMCkge1xuICAgICAgdmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWFnZU9iai5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMsIHgsIHkpO1xuXG4gICAgICB9O1xuICAgICAgaW1hZ2VPYmouc3JjID0gXCIuL2ltYWdlcy9CbGFjazIucG5nXCI7XG5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltYWdlT2JqLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcywgeCwgeSk7XG5cbiAgICAgIH07XG4gICAgICBpbWFnZU9iai5zcmMgPSBcIi4vaW1hZ2VzL1doaXRlMi5wbmdcIjtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIHNldEludGVydmFsKGRyYXcgLDIwKTsvL2NoZWNrIGV2ZXJ5IDIwbXNcblxuICAgY29udmVydFBpeGVsKGNvdW50ZXIpe1xuICAgIC8vIHZhciBIX0JMT0NLUyA9IDE0O1xuICAgIC8vIHZhciBIX0RJTUVOVElPTiA9IDI1NjtcbiAgICAvLyB2YXIgVl9CTE9DS1MgPSAyNTtcbiAgICAvLyB2YXIgVl9ESU1FTlRJT04gPSA5NjA7XG4gICAgdmFyIGdyaWRQaXhlbCA9IHtcbiAgICAgIHg6IGNvdW50ZXIuR3JpZFggKiAodGhpcy5IX0RJTUVOVElPTiAvIHRoaXMuSF9CTE9DS1MpLFxuICAgICAgeTogKGNvdW50ZXIuR3JpZFkpICogKHRoaXMuVl9ESU1FTlRJT04gLyB0aGlzLlZfQkxPQ0tTKVxuICAgIH1cbiAgICByZXR1cm4gZ3JpZFBpeGVsO1xuICB9XG5cblxuXG5cbiAgIGNoYW5nZVN0YXRlKGUpe1xuICAgIC8vcmVnaXN0ZXIgYSBldmVudCBsaXN0ZW5lclxuICAgIHZhciBrZXkgPSBlLmtleUNvZGUgPyBlLmtleUNvZGUgOiBlLndoaWNoO1xuICAgIGNvbnNvbGUubG9nKFwic3RhdGUgaXNcIit0aGlzLnN0YXRlKTtcbiAgICBpZiAoa2V5ID09IDcwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIllvdSBQcmVzc2VkIHRoZSBma2luZyBTcGFjZVwiKTtcblxuICAgICAgc3dpdGNoKHRoaXMuc3RhdGUpe1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgdGhpcy5zdGF0ZSsrO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2hpdGVcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0aGlzLnN0YXRlLS07XG4gICAgICAgICAgY29uc29sZS5sb2coXCJCbGFja1wiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImZ1Y2tcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyO1xuIiwiaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlcic7XG5pbXBvcnQgT2JqIGZyb20gJy4vT2JqJztcbmltcG9ydCBQb3J0YWwgZnJvbSAnLi9Qb3J0YWwnO1xuLy8gaW1wb3J0IEVuZW15IGZyb20gLi9DaGFyYWN0ZXIuanM7XG5cblxuY2xhc3MgR2FtZSB7XG5cdC8vIHNldCB1cCBpbnN0YW5jZSB2YXJpYWJsZXNcblx0Y29uc3RydWN0b3Iob3B0aW9ucyl7XG5cdFx0dGhpcy5jYW52YXMgPSBvcHRpb25zLmNhbnZhcztcblx0XHR0aGlzLmN0eCA9IG9wdGlvbnMuY29udGV4dDtcblx0XHR0aGlzLkRJTUVOU0lPTiA9IG9wdGlvbnMuRElNRU5TSU9OO1xuXHRcdHRoaXMudW5pdmVyc2VFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXZlcnNlJyk7XG5cdFx0dGhpcy5zcGVlZCA9IG9wdGlvbnMuc3BlZWQ7XG5cdFx0dGhpcy5wbGFuID0gb3B0aW9ucy5wbGFuO1xuXHRcdHRoaXMuR3JpZCA9IFtdO1xuXHRcdHRoaXMucG9ydGFsc0IgPSBbXTtcblx0XHR0aGlzLnBvcnRhbHNXID0gW107XG5cdFx0dGhpcy5pdHJzID0gW107XG5cdFx0dGhpcy5pdHNzID0gW107XG5cdFx0dGhpcy5tb3ZpbmdFID0gW107XG5cdFx0dGhpcy5zdGlsbEUgPSBbXTtcblx0XHR0aGlzLmNoYXJhY3RlciA9IG5ldyBDaGFyYWN0ZXIoe3N0YXRlOjAsR3JpZFg6NSxHcmlkWToyM30pO1xuXHRcdHRoaXMucG9pbnQgPSAwO1xuXHRcdHRoaXMud2luID0gZmFsc2U7XG5cdFx0dGhpcy5IX0JMT0NLUyA9IDEzO1xuXHRcdHRoaXMuSF9ESU1FTlRJT04gPSAyNTY7XG5cdFx0dGhpcy5IID0gdGhpcy5IX0RJTUVOU0lPTiAvIHRoaXMuSF9CTE9DS1M7XG5cdFx0dGhpcy5WX0JMT0NLUyA9IDI1O1xuXHRcdHRoaXMuVl9ESU1FTlRJT04gPSA5NjA7XG5cdFx0dGhpcy5WID0gdGhpcy5WX0RJTUVOU0lPTiAvIHRoaXMuVl9CTE9DS1M7XG5cdFx0dGhpcy5pbnRlcnZhbElEID0gMDtcblx0XHR0aGlzLm5vd3B0Qjtcblx0XHR0aGlzLm5vd3B0VztcblxuXHR9XG5cblx0Ly8gaW5pdGlhbCBzZXQgdXBcblx0aW5pU2V0VXAoKSB7XG5cdFx0Ly8gLy8gTm90ZTogdXNpbmcgYmluZCB0byBwYXNzIHRoZSBjbGFzcycgY29udGV4dCB0byB0aGUgY2FsbGJhY2tzXG5cdFx0Ly8gLy8gbm90IHN1cmUgaWYgdGhpcyBjYW4gYmUgaW1wcm92ZWQuXG5cdFx0Ly8gLy8gdGhpcy51bml2ZXJzZUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb29wQ2VsbHMuYmluZHRoaXMoKSk7XG5cdFx0Ly8gLy8gd2hlbiB1c2VyIGNsaWNrLCBzdGFydCB0aGUgZ2FtZVxuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpXG5cdFx0XHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2VsZi5wbGF5KCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc29sZS5sb2codGhpcy5wbGFuKTtcblx0XHRcdHRoaXMucGFyc2UodGhpcy5wbGFuKTtcblxuXHRcdFx0dGhpcy5jaGFyYWN0ZXIuaW5pdGlhbGl6ZUNoYXJhY3Rlcih0aGlzLmN0eCk7XG5cblx0XHRcdHRoaXMubm93cHRCID0gdGhpcy5wb3J0YWxzQi5sZW5ndGgtMTtcblx0XHRcdHRoaXMubm93cHRXID0gdGhpcy5wb3J0YWxzVy5sZW5ndGgtMTtcblx0fVxuXG5cblxuXHRwYXJzZShwbGFuKSB7XG5cdFx0Ly8gbGV0IGdyaWQgPSBbXTtcblxuXHRcdGZvcih2YXIgaT0wO2k8cGxhbi5sZW5ndGg7aSsrKSB7XG5cdFx0XHRsZXQgYXJyYXkgPSBwbGFuW2ldLnNwbGl0KFwiIFwiKTtcblxuXHRcblx0XHRcdGZvcih2YXIgaj0wO2o8YXJyYXkubGVuZ3RoO2orKykge1xuXHRcdFx0XHRpZihhcnJheVtqXSA9PSBcInh4eFwiKSB7XG5cdFx0XHRcdFx0dGhpcy5zdGlsbEUucHVzaChuZXcgT2JqKHsgR3JpZFg6IDErMypqK2osIEdyaWRZOiBpIH0pKTtcblx0XHRcdFx0XHRcblxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRlbHNlIGlmKGFycmF5W2pdID09IFwibW9lXCIpIHtcblx0XHRcdFx0XHR0aGlzLkVuZW1pZXMucHVzaChuZXcgbW92aW5nRSh7fSkpO1xuXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZihhcnJheVtqXSA9PSBcInB0V1wiKSB7XG5cdFx0XHRcdFx0dGhpcy5wb3J0YWxzVy5wdXNoKG5ldyBQb3J0YWwoMSwgeyBHcmlkWDogMSszKmoraiwgR3JpZFk6aX0pKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGVsc2UgaWYoYXJyYXlbal0gPT0gXCJwdEJcIikge1xuXHRcdFx0XHRcdHRoaXMucG9ydGFsc0IucHVzaChuZXcgUG9ydGFsICgwLCB7IEdyaWRYOiAxKzMqaitqLCBHcmlkWTppfSkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKGFycmF5W2pdID09IFwiaXRyXCIpIHtcblx0XHRcdFx0XHR0aGlzLml0cnMucHVzaChuZXcgT2JqKHsgR3JpZFg6IDEgKyAzICogaiArIGosIEdyaWRZOiBpIH0pKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmIChhcnJheVtqXSA9PSBcIml0c1wiKSB7XG5cdFx0XHRcdFx0dGhpcy5pdHNzLnB1c2gobmV3IE9iaih7IEdyaWRYOiAxICsgMyAqIGogKyBqLCBHcmlkWTogaSB9KSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XG5cdFx0XHR9XG5cdFx0XG5cdFx0fVxuXG5cdH1cblxuXG5cblxuXHRwbGF5KCl7XG5cdFx0Ly8gcmVtb3ZlIGdvZCBtb2RlXG5cdFx0Ly8gdGhpcy51bml2ZXJzZUVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb29wQ2VsbHMpO1xuXHRcdC8vIGdhbWUgbG9vcFxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuc3BlZWQpO1xuXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZSl7XG5cdFx0XHQgIHNlbGYuY2hhcmFjdGVyLmNoYW5nZVN0YXRlKGUpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5pbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG5cdFx0XHRzZWxmLmNoYXJhY3Rlci5kcmF3KHNlbGYuY3R4KTtcblx0XHRcdHNlbGYuY2hlY2tDb2xsaXNpb24oKTtcblx0XHRcdHNlbGYuZHJhdygpO1xuXHRcdH0sIDIwKTtcblx0XG5cdFx0Ly8gc2V0SW50ZXJ2YWwodGhpcy5jaGFyYWN0ZXIuY2hlY2tDb2xsaXNpb24odGhpcy5wb3J0YWxzLHRoaXMuZW5lbWllcyx0aGlzLml0ZW1zKSwgdGhpcy5zcGVlZCk7XG5cdFx0Ly8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5jaGFyYWN0ZXIuY2hhbmdlU3RhdGUpXG5cblx0fVxuXG5cdGxvZ2dpbmcoKSB7XG5cdFx0Y29uc29sZS5sb2coXCJsb2dnaW5nXCIpO1xuXHR9XG5cblx0Ly8gZHJhdyBncmlkXG5cdGRyYXdHcmlkKCkge1xuXHRcdHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyM3NzcnO1xuXHRcdHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XG5cdFx0Ly8gdmVydGljYWwgbGluZXNcblx0XHRmb3IgKGxldCBpID0gMTsgaTx0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9MRU5HVEg7IGkrKyl7XG5cdFx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcblx0XHRcdHRoaXMuY3R4Lm1vdmVUbyh0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCppLDApO1xuXHRcdFx0dGhpcy5jdHgubGluZVRvKHRoaXMuRElNRU5TSU9OLkNFTExfTEVOR1RIKmksIFxuXHRcdFx0XHR0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9IRUlHSFQqdGhpcy5ESU1FTlNJT04uQ0VMTF9IRUlHSFQpO1xuXHRcdFx0dGhpcy5jdHguc3Ryb2tlKCk7XG5cdFx0fVxuXHRcdC8vIGhvcml6b250YWwgbGluZXNcblx0XHRmb3IgKGxldCBpID0gMTsgaTx0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9IRUlHSFQ7IGkrKyl7XG5cdFx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcblx0XHRcdHRoaXMuY3R4Lm1vdmVUbygwLHRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUKmkpO1xuXHRcdFx0dGhpcy5jdHgubGluZVRvKHRoaXMuRElNRU5TSU9OLlVOSVZFUlNFX0xFTkdUSCp0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCwgXG5cdFx0XHRcdHRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUKmkpO1xuXHRcdFx0dGhpcy5jdHguc3Ryb2tlKCk7XG5cdFx0fVxuXHR9XG5cblx0ZHJhdygpIHtcblx0XHR0aGlzLmNsZWFyXG5cdFx0Y29uc29sZS5sb2codGhpcy5wb3J0YWxzQik7XG5cdFx0Y29uc29sZS5sb2codGhpcy5wb3J0YWxzVyk7XG5cdFx0Ly9kcmF3IHN0YXRpYyBzdHVmZlx0XG5cdFx0Ly8gY29uc29sZS5sb2codGhpcy5HcmlkKTtcblx0XHR2YXIgY3R4ID0gdGhpcy5jdHg7XG5cdFx0dmFyIHhzaGlmdCA9IHRoaXMuRElNRU5TSU9OLkNFTExfTEVOR1RIO1xuXHRcdHZhciB5c2hpZnQgPSB0aGlzLkRJTUVOU0lPTi5DRUxMX0hFSUdIVDtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGlsbEUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCB4ID0gdGhpcy5zdGlsbEVbaV0uR3JpZFg7XG5cdFx0XHRsZXQgeSA9IHRoaXMuc3RpbGxFW2ldLkdyaWRZO1xuXG5cdFx0XHR2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcblx0XHRcdGltYWdlT2JqLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdGN0eC5kcmF3SW1hZ2UodGhpcywgeCAqIHhzaGlmdCwgeSAqIHlzaGlmdCk7XG5cblx0XHRcdH07XG5cdFx0XHRpbWFnZU9iai5zcmMgPSBcIi4vaW1hZ2VzL09ic3RhY2xlLnBuZ1wiO1xuXG5cdFx0XHQvLyB0aGlzLmN0eC5maWxsUmVjdCgsLDMqdGhpcy5ESU1FTlNJT04uQ0VMTF9MRU5HVEgsdGhpcy5ESU1FTlNJT04uQ0VMTF9IRUlHSFQpO1xuXG5cdFx0fVxuXG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9ydGFsc0IubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCB4ID0gdGhpcy5wb3J0YWxzQltpXS5HcmlkWDtcblx0XHRcdGxldCB5ID0gdGhpcy5wb3J0YWxzQltpXS5HcmlkWTtcblx0XHRcdFxuXHRcdFx0XHR2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcblx0XHRcdFx0aW1hZ2VPYmoub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0XHRjdHguZHJhd0ltYWdlKHRoaXMsIHggKiB4c2hpZnQsIHkgKiB5c2hpZnQpO1xuXG5cdFx0XHRcdH07XG5cdFx0XHRcdGltYWdlT2JqLnNyYyA9IFwiLi9pbWFnZXMvcG90Qi5wbmdcIjtcblx0XHRcblx0XHR9XG5cblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvcnRhbHNXLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCB4ID0gdGhpcy5wb3J0YWxzV1tpXS5HcmlkWDtcblx0XHRcdFx0bGV0IHkgPSB0aGlzLnBvcnRhbHNXW2ldLkdyaWRZO1xuXHRcdFx0XG5cdFx0XHRcdFx0dmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG5cdFx0XHRcdFx0aW1hZ2VPYmoub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0XHRcdGN0eC5kcmF3SW1hZ2UodGhpcywgeCAqIHhzaGlmdCwgeSAqIHlzaGlmdCk7XG5cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdGltYWdlT2JqLnNyYyA9IFwiLi9pbWFnZXMvcG90Vy5wbmdcIjtcblx0XHRcdFx0XG5cblxuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRzcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgeCA9IHRoaXMuaXRzc1tpXS5HcmlkWDtcblx0XHRcdFx0bGV0IHkgPSB0aGlzLml0c3NbaV0uR3JpZFk7XG5cblx0XHRcdFx0dmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG5cdFx0XHRcdGltYWdlT2JqLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0Y3R4LmRyYXdJbWFnZSh0aGlzLCB4ICogeHNoaWZ0LCB5ICogeXNoaWZ0KTtcblxuXHRcdFx0XHR9O1xuXHRcdFx0XHRpbWFnZU9iai5zcmMgPSBcIi4vaW1hZ2VzL1N0YXIyLnBuZ1wiO1xuXG5cblxuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgeCA9IHRoaXMuaXRyc1tpXS5HcmlkWDtcblx0XHRcdFx0bGV0IHkgPSB0aGlzLml0cnNbaV0uR3JpZFk7XG5cblx0XHRcdFx0dmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG5cdFx0XHRcdGltYWdlT2JqLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0Y3R4LmRyYXdJbWFnZSh0aGlzLCB4ICogeHNoaWZ0LCB5ICogeXNoaWZ0KTtcblxuXHRcdFx0XHR9O1xuXHRcdFx0XHRpbWFnZU9iai5zcmMgPSBcIi4vaW1hZ2VzL3JldmVyc2UucG5nXCI7XG5cblxuXG5cdFx0XHR9XG5cblx0XHRcdC8vIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Ly8gXHRsZXQgeCA9IHRoaXMucG9ydGFsc1dbaV0uR3JpZFg7XG5cdFx0XHQvLyBcdGxldCB5ID0gdGhpcy5wb3J0YWxzV1tpXS5HcmlkWTtcblxuXHRcdFx0Ly8gXHR2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcblx0XHRcdC8vIFx0aW1hZ2VPYmoub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdC8vIFx0XHRjdHguZHJhd0ltYWdlKHRoaXMsIHggKiB4c2hpZnQsIHkgKiB5c2hpZnQpO1xuXG5cdFx0XHQvLyBcdH07XG5cdFx0XHQvLyBcdGltYWdlT2JqLnNyYyA9IFwiLi9pbWFnZXMvcG90Vy5wbmdcIjtcblxuXG5cblx0XHRcdC8vIH1cblxuXHRcdH1cblx0XG5cblxuXG5cdFx0XG5cblxuXG5cdFx0Ly8gZm9yICh2YXIgaT0wO2k8dGhpcy5wb3J0YWxzLmxlbmd0aDtpKyspIHtcblx0XHQvLyBcdGN0eC5maWxsU3R5bGU9XCIjRkYwMDAwXCI7XG5cdFx0Ly8gXHR0aGlzLmN0eC5maWxsUmVjdChpKkNFTExfTEVOR1RILGkqQ0VMTF9IRUlHSFQsMypDRUxMX0xFTkdUSCxDRUxMX0hFSUdIVCk7XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gZm9yICh2YXIgaT0wO2k8dGhpcy5wb3J0YWxzLmxlbmd0aDtpKyspIHtcblx0XHQvLyBcdGN0eC5maWxsU3R5bGU9XCJibHVlXCI7XG5cdFx0Ly8gXHR0aGlzLmN0eC5maWxsUmVjdChpKkNFTExfTEVOR1RILGkqQ0VMTF9IRUlHSFQsMypDRUxMX0xFTkdUSCxDRUxMX0hFSUdIVCk7XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gZm9yICh2YXIgaT0wO2k8dGhpcy5wb3J0YWxzLmxlbmd0aDtpKyspIHtcblx0XHQvLyBcdGN0eC5maWxsU3R5bGU9XCJ5ZWxsb3dcIjtcblx0XHQvLyBcdHRoaXMuY3R4LmZpbGxSZWN0KGkqQ0VMTF9MRU5HVEgsaSpDRUxMX0hFSUdIVCwzKkNFTExfTEVOR1RILENFTExfSEVJR0hUKTtcblx0XHQvLyB9XG5cblx0Y2hlY2tDb2xsaXNpb24oKSB7XG5cdFx0dmFyIHNlbGY9dGhpcztcblx0XHQvLyB2YXIgY29sbGlzaW9uVHlwZTtcblxuXHRcdC8vIC8vbG9vcCB0aHJvdWdoIGV2ZXJ5IG9iamVjdCBpbiB0aGUgbWFwXG5cdFx0Ly8gY29uc29sZS5sb2codGhpcy5wb3J0YWxzQlt0aGlzLm5vd3B0Ql0pXG5cblx0XHRpZih0aGlzLnBvcnRhbHNCLmxlbmd0aD4wKSB7XG5cdFx0XHR2YXIgcGl4ZWwgPSBjb252ZXJ0UGl4ZWwodGhpcy5wb3J0YWxzQlt0aGlzLm5vd3B0Ql0pOy8vaW4gcGl4ZWxcblx0XHRcdC8vIGNvbnNvbGUubG9nKHBpeGVsLngpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy5jaGFyYWN0ZXIuY3VyclgpO1xuXHRcdFx0aWYgKChNYXRoLmFicyh0aGlzLmNoYXJhY3Rlci5jdXJyWSAtIHBpeGVsLnkpIDwgNSkgJiYgKE1hdGguYWJzKHRoaXMuY2hhcmFjdGVyLmN1cnJYIC0gcGl4ZWwueCkgPCA1KSAmJiAodGhpcy5jaGFyYWN0ZXIuc3RhdGUgPT0gMCkpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJjaHVhblwiKTtcblx0XHRcdFx0dmFyIHRlbXBYID0gdGhpcy5jaGFyYWN0ZXIuY3Vyclg7XG5cdFx0XHRcdHZhciB0ZW1wWSA9IHRoaXMuY2hhcmFjdGVyLmN1cnJZO1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHRlbXBYKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh0ZW1wWSk7XG5cdFx0XHRcdFx0c2VsZi5jaGFyYWN0ZXIuY2xlYXIoc2VsZi5jdHgsIHRlbXBYLCB0ZW1wWSk7XG5cblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImNsZWFyZWRcIik7XG5cdFx0XHRcdH0sMTAwKTtcblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMubm93cHRCID0gKHRoaXMubm93cHRCICt0aGlzLnBvcnRhbHNCLmxlbmd0aC0gMSkgJSB0aGlzLnBvcnRhbHNCLmxlbmd0aDtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJub3dCIGlzIDogXCIgKyB0aGlzLm5vd3B0Qik7XG5cblx0XHRcdFx0cGl4ZWwgPSBjb252ZXJ0UGl4ZWwodGhpcy5wb3J0YWxzQlt0aGlzLm5vd3B0Ql0pO1xuXHRcdFx0XHR0aGlzLmNoYXJhY3Rlci5jdXJyWCA9IHBpeGVsLng7XG5cdFx0XHRcdHRoaXMuY2hhcmFjdGVyLmN1cnJZID0gcGl4ZWwueS0xMTtcblx0XHRcdFx0Y29uc29sZS5sb2cocGl4ZWwpXG5cdFx0XHRcdHZhciBpbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0XHR2YXIgY3R4ID0gdGhpcy5jdHg7XG5cdFx0XHRcdGltYWdlT2JqLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0Y3R4LmRyYXdJbWFnZSh0aGlzLCBzZWxmLmNoYXJhY3Rlci5jdXJyWCwgc2VsZi5jaGFyYWN0ZXIuY3VyclkpO1xuXG5cdFx0XHRcdH07XG5cdFx0XHRcdGltYWdlT2JqLnNyYyA9IFwiLi9pbWFnZXMvQmxhY2syLnBuZ1wiO1xuXHRcdH1cblx0XHRcdGVsc2UgaWYgKE1hdGguYWJzKHRoaXMuY2hhcmFjdGVyLmN1cnJZIC0gcGl4ZWwueSkgPCA1KSB7XG5cdFx0XHRcblx0XHRcdFx0dGhpcy5ub3dwdEIgPSAodGhpcy5ub3dwdEIgKyB0aGlzLnBvcnRhbHNCLmxlbmd0aCAtIDEpICUgdGhpcy5wb3J0YWxzQi5sZW5ndGg7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMubm93cHRCKTtcblx0XHRcdH1cblxuXG5cdFx0XG5cdFx0ICB9XG5cblxuXHRcdGlmICh0aGlzLnBvcnRhbHNXLmxlbmd0aCA+IDApIHtcblx0XHRcdHZhciBwaXhlbCA9IGNvbnZlcnRQaXhlbCh0aGlzLnBvcnRhbHNXW3RoaXMubm93cHRXXSk7Ly9pbiBwaXhlbFxuXHRcdFx0Ly8gY29uc29sZS5sb2cocGl4ZWwueCk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLmNoYXJhY3Rlci5jdXJyWCk7XG5cdFx0XHRpZiAoKE1hdGguYWJzKHRoaXMuY2hhcmFjdGVyLmN1cnJZIC0gcGl4ZWwueSkgPCA1KSAmJiAoTWF0aC5hYnModGhpcy5jaGFyYWN0ZXIuY3VyclggLSBwaXhlbC54KSA8IDUpICYmICh0aGlzLmNoYXJhY3Rlci5zdGF0ZSA9PSAxKSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcImNodWFuXCIpO1xuXHRcdFx0XHR2YXIgdGVtcFggPSB0aGlzLmNoYXJhY3Rlci5jdXJyWDtcblx0XHRcdFx0dmFyIHRlbXBZID0gdGhpcy5jaGFyYWN0ZXIuY3Vyclk7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2codGVtcFgpO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHRlbXBZKTtcblx0XHRcdFx0XHRzZWxmLmNoYXJhY3Rlci5jbGVhcihzZWxmLmN0eCwgdGVtcFgsIHRlbXBZKTtcblxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiY2xlYXJlZFwiKTtcblx0XHRcdFx0fSwgMTAwKTtcblxuXHRcdFx0XHR0aGlzLm5vd3B0VyA9ICh0aGlzLm5vd3B0VyArIHRoaXMucG9ydGFsc1cubGVuZ3RoIC0gMSkgJSB0aGlzLnBvcnRhbHNXLmxlbmd0aDtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJub3dCIGlzIDogXCIgKyB0aGlzLm5vd3B0Vyk7XG5cblx0XHRcdFx0cGl4ZWwgPSBjb252ZXJ0UGl4ZWwodGhpcy5wb3J0YWxzV1t0aGlzLm5vd3B0V10pO1xuXHRcdFx0XHR0aGlzLmNoYXJhY3Rlci5jdXJyWCA9IHBpeGVsLng7XG5cdFx0XHRcdHRoaXMuY2hhcmFjdGVyLmN1cnJZID0gcGl4ZWwueSAtIDExO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhwaXhlbClcblx0XHRcdFx0dmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG5cdFx0XHRcdHZhciBjdHggPSB0aGlzLmN0eDtcblx0XHRcdFx0aW1hZ2VPYmoub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0XHRjdHguZHJhd0ltYWdlKHRoaXMsIHNlbGYuY2hhcmFjdGVyLmN1cnJYLCBzZWxmLmNoYXJhY3Rlci5jdXJyWSk7XG5cblx0XHRcdFx0fTtcblx0XHRcdFx0aW1hZ2VPYmouc3JjID0gXCIuL2ltYWdlcy9XaGl0ZTIucG5nXCI7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmIChNYXRoLmFicyh0aGlzLmNoYXJhY3Rlci5jdXJyWSAtIHBpeGVsLnkpIDwgNSkge1xuXG5cdFx0XHRcdHRoaXMubm93cHRXID0gKHRoaXMubm93cHRXICsgdGhpcy5wb3J0YWxzVy5sZW5ndGggLSAxKSAlIHRoaXMucG9ydGFsc1cubGVuZ3RoO1xuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLm5vd3B0Vyk7XG5cdFx0XHR9XG5cblxuXG5cdFx0fVxuXHRcdCBcblxuXHRcdC8vIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wb3J0YWxzVy5sZW5ndGg7IGkrKykge1xuXHRcdC8vIFx0dmFyIHBpeGVsID0gY29udmVydFBpeGVsKHRoaXMucG9ydGFsc1dbaV0pOy8vaW4gcGl4ZWxcblx0XHQvLyBcdGlmICgodGhpcy5jaGFyYWN0ZXIuY3VyclkgPT0gcGl4ZWwueSkgJiYgKHRoaXMuY2hhcmFjdGVyLmN1cnJYID09IHBpeGVsLngpICYmICh0aGlzLnBvcnRhbHNXW2ldLnN0YXRlID09IHRoaXMuY2hhcmFjdGVyLnN0YXRlKSkge1xuXHRcdC8vIFx0XHR0aGlzLmNoYXJhY3Rlci5jbGVhcih0aGlzLmN0eCwgcGl4ZWwueCwgcGl4ZWwueSk7XG5cdFx0Ly8gXHRcdGNvbGxzaW9uVHlwZSA9IFwicG9ydGFsc1wiO1xuXHRcdC8vIFx0XHRwaXhlbCA9IGNvbnZlcnRQaXhlbCh0aGlzLnByb3RhbHNXW2kgLSAxXSk7XG5cdFx0Ly8gXHRcdHRoaXMuY2hhcmFjdGVyLmN1cnJYID0gcGl4ZWwueC8vaW4gZ3JpZFxuXHRcdC8vIFx0XHR0aGlzLmNoYXJhY3Rlci5jdXJyWSA9IHBpeGVsLnk7XG5cdFx0Ly8gXHRcdHZhciBpbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xuXHRcdC8vIFx0XHRpbWFnZU9iai5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuXHRcdC8vIFx0XHRcdGN0eC5kcmF3SW1hZ2UodGhpcywgcGl4ZWwueCwgcGl4ZWwueSk7XG5cblx0XHQvLyBcdFx0fTtcblx0XHQvLyBcdFx0aW1hZ2VPYmouc3JjID0gXCIuL2ltYWdlcy9CbGFjazIucG5nXCI7XG5cblxuXHRcdC8vIFx0XHQvLyBjdHguYmVnaW5QYXRoKCk7XG5cdFx0Ly8gXHRcdC8vIGN0eC5hcmMoY3VyclggKyA5LjE0LCBjdXJyWSwgMTcsIDAsIE1hdGguUEkqMiwgdHJ1ZSk7Ly9wb3J0YWwgc2l6ZVxuXHRcdC8vIFx0XHQvLyBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG5cdFx0Ly8gXHRcdC8vIGN0eC5maWxsKCk7XG5cdFx0Ly8gXHRcdC8vIGN0eC5jbG9zZVBhdGgoKTtcblx0XHQvLyBcdH1cblx0XHQvLyB9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RpbGxFLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcGl4ZWwgPSBjb252ZXJ0UGl4ZWwodGhpcy5zdGlsbEVbaV0pOy8vaW4gcGl4ZWxcblx0XHRcdC8vIGNvbnNvbGUubG9nKHBpeGVsLnkpO1xuXHRcdFx0Ly8gaWYodGhpcy5jdXJyWSA+IGkueSAmJiB0aGlzLmN1cnJZIDwgaS55IC0gMzguNCAmJiAoY3VyclggPiBpLnggJiYgY3VyclggPCBpLnggKyAxOC4yOCl7XG5cdFx0XHRpZiAoTWF0aC5hYnModGhpcy5jaGFyYWN0ZXIuY3VyclkgLSAocGl4ZWwueSszMC40KSk8NSkge1xuXHRcdFx0XHQvLyBjb2xsc2lvblR5cGUgPSBcInN0aWxsRVwiO1xuXHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJRCk7XG5cdFx0XHRcdHRoaXMuY2hhcmFjdGVyLnJlYm9ybkNoYXJhY3Rlcih0aGlzLmN0eCk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiaSBhbSBleGVjdXRlZFwiKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tb3ZpbmdFLmxlbmd0aDsgaSsrKSB7XG5cdFx0Ly8gXHR2YXIgcGl4ZWwgPSBjb252ZXJ0UGl4ZWwodGhpcy5tb3ZpbmdFW2ldKTsvL2luIHBpeGVsXG5cdFx0Ly8gXHQvLyBpZih0aGlzLmN1cnJZID4gaS55ICYmIHRoaXMuY3VyclkgPCBpLnkgLSAzOC40ICYmIChjdXJyWCA+IGkueCAmJiBjdXJyWCA8IGkueCArIDE4LjI4KXtcblx0XHQvLyBcdGlmICgodGhpcy5jaGFyYWN0ZXIuY3VyclkgPCBwaXhlbC55KSAmJiAodGhpcy5jdXJyWCA9PSBwaXhlbC54KSkge1xuXHRcdC8vIFx0XHRkb2N1bWVudC5yZWxvYWQoKTtcblxuXHRcdC8vIFx0fVxuXHRcdC8vIH1cblxuXG5cdFx0Ly8gZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0Ly8gXHR2YXIgcGl4ZWwgPSBjb252ZXJ0UGl4ZWwodGhpcy5pdGVtc1tpXSk7Ly9pbiBwaXhlbFxuXHRcdC8vIFx0aWYgKCh0aGlzLmN1cnJZIDwgcGl4ZWwueSkgJiYgKHRoaXMuY3VyclggPT0gcGl4ZWwueCkpIHtcblx0XHQvLyBcdFx0dGhpcy5wb2ludCsrO1xuXHRcdC8vIFx0XHRjb25zb2xlLmxvZyh0aGlzLnBvaW50KTtcblx0XHQvLyBcdH1cblx0XHQvLyB9XG5cdH1cblxuXG59XG5cblxuXG5cbmZ1bmN0aW9uIGNvbnZlcnRQaXhlbChjb3VudGVyKXtcbiAgICB2YXIgSF9CTE9DS1MgPSAxMztcbiAgICB2YXIgSF9ESU1FTlRJT04gPSAyNTY7XG4gICAgdmFyIFZfQkxPQ0tTID0gMjU7XG4gICAgdmFyIFZfRElNRU5USU9OID0gOTYwO1xuICAgIHZhciBncmlkUGl4ZWwgPSB7XG5cdFx0eDogY291bnRlci5HcmlkWCAqIChIX0RJTUVOVElPTiAvIEhfQkxPQ0tTKSxcblx0XHR5OiAoY291bnRlci5HcmlkWSkgKiAoVl9ESU1FTlRJT04gLyBWX0JMT0NLUylcbiAgICB9XG4gICAgcmV0dXJuIGdyaWRQaXhlbDtcbn1cblxuXG4vLyBQcml2YXRlIG1ldGhvZHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIExvb3Agb3ZlciB0aGUgY2VsbHNcbmZ1bmN0aW9uIGxvb3BDZWxscyhlKSB7XG5cdHZhciB1bml2ZXJzZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdmVyc2UnKTtcblx0dmFyIHBhZ2VYID0gZS5wYWdlWCAtIHVuaXZlcnNlRWxlbS5vZmZzZXRMZWZ0O1xuXHR2YXIgcGFnZVkgPSBlLnBhZ2VZIC0gdW5pdmVyc2VFbGVtLm9mZnNldFRvcDtcblxuXHRmb3IgKGxldCBpID0gMDsgaTx0aGlzLnVuaXZlcnNlLmhlaWdodDsgaSsrKXtcblx0XHRmb3IgKGxldCBqPTA7IGo8dGhpcy51bml2ZXJzZS5sZW5ndGg7IGorKyl7XG5cdFx0XHRsZXQgY2VsbCA9IHRoaXMudW5pdmVyc2UuY2VsbHNbaV1bal07XG5cdFx0XHRoYW5kbGVDbGljayh0aGlzLCBjZWxsLCBwYWdlWCwgcGFnZVkpO1xuXHRcdH1cblx0fVxufVxuXG4vLyBnaXZlIGxpZmUgb3IgZGVhdGggdG8gdGhlIGNlbGwgY2xpY2tlZC5cbi8vIE5vdGU6IGJlY2F1c2UgbG9vcENlbGxzIGlzIGEgY2FsbGJhY2sgd2hpY2ggaGFzIHRoZSBjbGFzcyBjb250ZXh0XG4vLyBib3VuZCB0byBpdCwgdGhpcyBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgaW4gdGhlIGNhbGxiYWNrIGRvZXNuJ3QgZ2V0IHRoZVxuLy8gY29udGV4dCBpbXBsaWNpdGx5LCBzbyBJIG11c3QgcGFzcyBpdC4gRG9lc24ndCBmZWVsIGNsZWFuLi4uXG4vLyBmdW5jdGlvbiBoYW5kbGVDbGljayhzZWxmLCBjZWxsLCBwYWdlWCwgcGFnZVkpe1xuLy8gXHRpZiAocGFnZVggPiBjZWxsLnggJiYgcGFnZVggPCBjZWxsLngrc2VsZi51bml2ZXJzZS5jZWxsTGVuZ3RoICYmXG4vLyBcdFx0XHRcdHBhZ2VZID4gY2VsbC55ICYmIHBhZ2VZIDwgY2VsbC55K3NlbGYudW5pdmVyc2UuY2VsbEhlaWdodCApIHtcbi8vIFx0XHRjaGFuZ2VDZWxscyhzZWxmLCBjZWxsKTtcbi8vIFx0fVxuLy8gfVxuXG4vLyAxIHN0ZXAgPSAxIGdlbmVyYXRpb25cbmZ1bmN0aW9uIHN0ZXAoKXtcblxuXHRcbn1cblxuLypcbipcdHBhc3MgdGhlIGNlbGwgdGhyb3VnaCB0aGUgNCBydWxlcy4gXG5cdE5vdGU6IGNlbGxzIHNob3VsZCBub3QgdXBkYXRlIGhlcmUsIHNpbmNlIGFsdGVyaW5nIDEgYmVmb3JlIHlvdSBjYW5cblx0YW5hbHl6ZSB0aGUgb3RoZXJzIHdpbGwgY2F1c2UgZXJyb25lb3VzIG91dGNvbWVzLlxuKi9cbmZ1bmN0aW9uIHRyYW5zaXRpb25zKHNlbGYsIGNlbGwsIGNlbGxzVG9DaGFuZ2UpIHtcblx0dmFyIHVuaUxlbmd0aCA9IHNlbGYudW5pdmVyc2UubGVuZ3RoO1xuXHR2YXIgdW5pSGVpZ2h0ID0gc2VsZi51bml2ZXJzZS5oZWlnaHQ7XG5cdHZhciBuZWlnaGJvdXJzQWxpdmUgPSAwO1xuXHQvLyBHbyB0aHJvdWdoIHRoZSBuZWlnaGJvdXJzIG9mIGVhY2ggY2VsbC5cblx0Zm9yIChsZXQgaT0wOyBpPDg7IGkrKyl7XG5cdFx0bGV0IG5laWdoYm91cklEID0gY2VsbC5uZWlnaGJvdXJzW2ldO1xuXHRcdGlmIChuZWlnaGJvdXJJRCA+PSB1bmlMZW5ndGgqdW5pSGVpZ2h0IHx8IG5laWdoYm91cklEIDwwKSBjb250aW51ZTtcblx0XHRsZXQgbmVpZ2hib3VyID0gZ2V0Q2VsbEJ5SWQoc2VsZiwgbmVpZ2hib3VySUQpO1xuXHRcdGlmIChuZWlnaGJvdXIuc3RhdGUgPT09IDEpIG5laWdoYm91cnNBbGl2ZSsrO1xuXHR9XG5cdGlmIChjZWxsLnN0YXRlID09PSAxKXtcblx0XHQvLyB6ZSBsaWZlIHJ1bGVzXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIDEpIEFueSBsaXZlIGNlbGwgd2l0aCBmZXdlciB0aGFuIHR3byBsaXZlIG5laWdoYm91cnMgZGllcywgYXMgXG5cdFx0Ly8gaWYgY2F1c2VkIGJ5IHVuZGVyLXBvcHVsYXRpb24uXG5cdFx0Ly8gMikgQW55IGxpdmUgY2VsbCB3aXRoIHR3byBvciB0aHJlZSBsaXZlIG5laWdoYm91cnMgbGl2ZXMgb24gdG8gXG5cdFx0Ly8gdGhlIG5leHQgZ2VuZXJhdGlvbi5cblx0XHRpZiAobmVpZ2hib3Vyc0FsaXZlIDwgMikgY2VsbHNUb0NoYW5nZS5wdXNoKGNlbGwuaWQpO1xuXHRcdC8vIDMpIEFueSBsaXZlIGNlbGwgd2l0aCBtb3JlIHRoYW4gdGhyZWUgbGl2ZSBuZWlnaGJvdXJzIGRpZXMsIGFzIGlmIFxuXHRcdC8vIGJ5IG92ZXJjcm93ZGluZy5cblx0XHRlbHNlIGlmIChuZWlnaGJvdXJzQWxpdmUgPiAzKSBjZWxsc1RvQ2hhbmdlLnB1c2goY2VsbC5pZCk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gNCkgQW55IGRlYWQgY2VsbCB3aXRoIGV4YWN0bHkgdGhyZWUgbGl2ZSBuZWlnaGJvdXJzIGJlY29tZXMgYSBcblx0XHQvLyBsaXZlIGNlbGwsIGFzIGlmIGJ5IHJlcHJvZHVjdGlvbi5cblx0XHRpZiAobmVpZ2hib3Vyc0FsaXZlID09PSAzKSBjZWxsc1RvQ2hhbmdlLnB1c2goY2VsbC5pZCk7XG5cdH1cbn0gXG5cbmZ1bmN0aW9uIGNoYW5nZUNlbGxzKHNlbGYsIGNlbGwpIHtcblx0c2VsZi5jdHguZmlsbFN0eWxlID0gKGNlbGwuc3RhdGUpID8gJ3doaXRlJyA6ICcjMzMzJztcblx0c2VsZi5jdHguZmlsbFJlY3QoY2VsbC54KzEsIGNlbGwueSsxLCBcblx0XHRcdHNlbGYudW5pdmVyc2UuY2VsbExlbmd0aC0yLCBzZWxmLnVuaXZlcnNlLmNlbGxIZWlnaHQtMik7XG5cdGNlbGwuc3RhdGUgPSAoY2VsbC5zdGF0ZSkgPyAwIDogMTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2VsbEJ5SWQoc2VsZiwgaWQpIHtcblx0bGV0IHJvdyA9IE1hdGguZmxvb3IoaWQvc2VsZi51bml2ZXJzZS5sZW5ndGgpO1xuXHRsZXQgY29sdW1uID0gaWQgJSBzZWxmLnVuaXZlcnNlLmxlbmd0aDtcblx0cmV0dXJuIHNlbGYudW5pdmVyc2UuY2VsbHNbcm93XVtjb2x1bW5dO1xufSBcblxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7IiwiY2xhc3MgT2Jqe1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKXtcbiAgICB0aGlzLkdyaWRYID0gb3B0aW9ucy5HcmlkWDtcbiAgICB0aGlzLkdyaWRZID0gb3B0aW9ucy5HcmlkWTtcbiAgICAvLyB0aGlzLnN0YXRlID0gc3RhdGU7Ly8wIGlzIGEgY29sb3IwLCAxIGlzIGNvbG9yMVxuXHR0aGlzLkhfQkxPQ0tTID0gMTM7XG4gICAgdGhpcy5IX0RJTUVOVElPTiA9IDI1NjtcbiAgICB0aGlzLlZfQkxPQ0tTID0gMjU7XG4gICAgdGhpcy5WX0RJTUVOVElPTiA9IDk2MDtcblxuICB9XG5cblxuXG5cbiAvLyAgY29udmVydFBpeGVsKGNvdW50ZXIpIHtcblx0Ly8gICB2YXIgeCA9IGNvdW50ZXIuR3JpZFggKiAodGhpcy5IX0RJTUVOVElPTiAvIHRoaXMuSF9CTE9DS1MpO1xuXHQvLyAgIGNvbnNvbGUubG9nKFwieGlzXCIreCk7XG5cdC8vICAgdmFyIGdyaWRQaXhlbCA9IHtcblx0Ly8gXHQgIHg6IGNvdW50ZXIuR3JpZFggKiAodGhpcy5IX0RJTUVOVElPTiAvIHRoaXMuSF9CTE9DS1MpLFxuXHQvLyBcdCAgeTogKGNvdW50ZXIuR3JpZFkgKyAxKSAqICh0aGlzLlZfRElNRU5USU9OIC8gdGhpcy5WX0JMT0NLUylcblx0Ly8gICB9XG4gLy8gICAgcmV0dXJuIGdyaWRQaXhlbDtcblx0Ly8gfVxuXG5cdCBjbGVhcihjdHgpIHtcblx0XHQgLy8gY29uc29sZS5sb2codGhpcy5IX0RJTUVOVElPTiAvIHRoaXMuSF9CTE9DS1MpO1xuXHRcdCAvLyAvLyBjb25zb2xlLmxvZyh0aGlzLkdyaWRYKTtcblx0XHQgLy8gdmFyIHggPSB0aGlzLkdyaWRYICogKHRoaXMuSF9ESU1FTlRJT04gLyB0aGlzLkhfQkxPQ0tTKTtcblx0XHQgLy8gdmFyIHkgPSAodGhpcy5HcmlkWSkgKiAodGhpcy5WX0RJTUVOVElPTiAvIHRoaXMuVl9CTE9DS1MpO1xuXHRcdCAvLyBjb25zb2xlLmxvZyhcInggaXMgXCIrIHgpO1xuXHRcdCAvLyBjb25zb2xlLmxvZyhcInkgaXMgXCIgKyB5KTtcblxuXHQgIC8vIGN0eC5jbGVhclJlY3QoeCx5LCAzICogKHRoaXMuSF9ESU1FTlRJT04gLyB0aGlzLkhfQkxPQ0tTKSwgMSsodGhpcy5WX0RJTUVOVElPTiAvIHRoaXMuVl9CTE9DS1MpKTtcblx0XHQgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLkhfRElNRU5USU9OLCAgdGhpcy5WX0RJTUVOVElPTik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPYmo7XG4iLCJpbXBvcnQgT2JqIGZyb20gJy4vT2JqJztcblxuY2xhc3MgUG9ydGFsIGV4dGVuZHMgT2Jqe1xuICBjb25zdHJ1Y3RvcihzdGF0ZSxvcHRpb25zKXtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gIH1cbn1cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gUG9ydGFsO1xuIl19
