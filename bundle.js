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
	// games[num].draw();
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
    key: "move",
    value: function move() {
      var dy = -3;
      this.currY += dy;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      // console.log("drawing..");
      // this.clear(ctx,this.currX,this.currY);

      var x = this.currX;
      var y = this.currY;
      var imageObjB = new Image();
      var imageObjW = new Image();
      imageObjB.src = "./images/Black2.png";
      imageObjW.src = "./images/White2.png";
      imageObjB.onload = function () {
        var _this = this;

        setInterval(function () {
          if (_this.state == 0) {
            ctx.drawImage(_this, x, y);
          }
        }, 20);
      };
      imageObjW.onload = function () {
        var _this2 = this;

        setInterval(function () {
          if (_this2.state == 1) {
            ctx.drawImage(_this2, x, y);
          }
        }, 20);
      };

      imageObjB.src = "./images/Black2.png";
      imageObjW.src = "./images/White2.png";
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
      if (key == 32) {
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
			self.draw();
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

			document.addEventListener("keypress", function (e) {
				self.character.changeState(e);
			});
			self.character.draw(self.ctx);

			this.intervalID = setInterval(function () {
				self.character.move();
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

			var ctx = this.ctx;
			var xshift = this.DIMENSION.CELL_LENGTH;
			var yshift = this.DIMENSION.CELL_HEIGHT;
			console.log(this.portalsB);
			console.log(this.portalsW);
			var obstacleImg = new Image();
			obstacleImg.src = "./images/Obstacle.png";
			var potBImg = new Image();
			potBImg.src = "./images/potB.png";
			var potWImg = new Image();
			potWImg.src = "./images/potW.png";
			var star2Img = new Image();
			star2Img.src = "./images/Star2.png";
			var revImg = new Image();
			revImg.src = "./images/reverse.png";
			var bChar = new Image();
			var wChar = new Image();
			bChar.src = "./images/Black2.png";
			wChar.src = "./images/White2.png";
			setInterval(function () {
				ctx.clearRect(0, 0, _this.H_DIMENTION, _this.V_DIMENTION);
				for (var i = 0; i < _this.stillE.length; i++) {
					var x = _this.stillE[i].GridX;
					var y = _this.stillE[i].GridY;
					ctx.drawImage(obstacleImg, x * xshift, y * yshift);

					// this.ctx.fillRect(,,3*this.DIMENSION.CELL_LENGTH,this.DIMENSION.CELL_HEIGHT);
				}

				for (var i = 0; i < _this.portalsB.length; i++) {
					var x = _this.portalsB[i].GridX;
					var y = _this.portalsB[i].GridY;
					ctx.drawImage(potBImg, x * xshift, y * yshift);
				}

				for (var i = 0; i < _this.portalsW.length; i++) {
					var x = _this.portalsW[i].GridX;
					var y = _this.portalsW[i].GridY;
					ctx.drawImage(potWImg, x * xshift, y * yshift);
				}

				for (var i = 0; i < _this.itss.length; i++) {
					var x = _this.itss[i].GridX;
					var y = _this.itss[i].GridY;
					ctx.drawImage(star2Img, x * xshift, y * yshift);
				}

				for (var i = 0; i < _this.itrs.length; i++) {
					var x = _this.itrs[i].GridX;
					var y = _this.itrs[i].GridY;
					ctx.drawImage(revImg, x * xshift, y * yshift);
				}

				if (_this.character.state == 0) {
					ctx.drawImage(bChar, _this.character.currX, _this.character.currY);
				} else {
					ctx.drawImage(wChar, _this.character.currX, _this.character.currY);
				}
			}, 20);

			// //draw static stuff	
			// for (var i = 0; i < this.stillE.length; i++) {
			// 	let x = this.stillE[i].GridX;
			// 	let y = this.stillE[i].GridY;

			// 	var imageObj = new Image();
			// 	imageObj.onload = function() {

			// 		setInterval (() => ctx.drawImage(this, x * xshift, y * yshift),20);

			// 	};
			// 	imageObj.src = "./images/Obstacle.png";

			// 	// this.ctx.fillRect(,,3*this.DIMENSION.CELL_LENGTH,this.DIMENSION.CELL_HEIGHT);

			// }

			// for (var i = 0; i < this.portalsB.length; i++) {
			// 	let x = this.portalsB[i].GridX;
			// 	let y = this.portalsB[i].GridY;

			// 		var imageObj = new Image();
			// 		imageObj.onload = function() {

			// 			setInterval (() => ctx.drawImage(this, x * xshift, y * yshift),20);

			// 		};
			// 		imageObj.src = "./images/potB.png";

			// }

			// 	for (var i = 0; i < this.portalsW.length; i++) {
			// 		let x = this.portalsW[i].GridX;
			// 		let y = this.portalsW[i].GridY;

			// 			var imageObj = new Image();
			// 			imageObj.onload = function() {

			// 				setInterval (() => ctx.drawImage(this, x * xshift, y * yshift),20);

			// 			};
			// 			imageObj.src = "./images/potW.png";

			// 	}

			// 	for (var i = 0; i < this.itss.length; i++) {
			// 		let x = this.itss[i].GridX;
			// 		let y = this.itss[i].GridY;

			// 		var imageObj = new Image();
			// 		imageObj.onload = function() {

			// 			setInterval (() => ctx.drawImage(this, x * xshift, y * yshift),20);

			// 		};
			// 		imageObj.src = "./images/Star2.png";

			// 	}

			// 	for (var i = 0; i < this.itrs.length; i++) {
			// 		let x = this.itrs[i].GridX;
			// 		let y = this.itrs[i].GridY;

			// 		var imageObj = new Image();
			// 		imageObj.onload = function() {

			// 			setInterval (() => ctx.drawImage(this, x * xshift, y * yshift),20);

			// 		};
			// 		imageObj.src = "./images/reverse.png";

			// 	}

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
			var _this2 = this;

			var self = this;
			var bChar = new Image();
			bChar.src = "./images/Black2.png";
			var wChar = new Image();
			wChar.src = "./images/White2.png";
			// var collisionType;

			// //loop through every object in the map
			// console.log(this.portalsB[this.nowptB])
			setInterval(function () {
				if (_this2.portalsB.length > 0) {
					var pixel = convertPixel(_this2.portalsB[_this2.nowptB]); //in pixel
					// console.log(pixel.x);
					// console.log(this.character.currX);
					if (Math.abs(_this2.character.currY - pixel.y) < 5 && Math.abs(_this2.character.currX - pixel.x) < 5 && _this2.character.state == 0) {
						console.log("chuan");
						var tempX = _this2.character.currX;
						var tempY = _this2.character.currY;
						setTimeout(function () {
							console.log(tempX);
							console.log(tempY);
							self.character.clear(self.ctx, tempX, tempY);

							console.log("cleared");
						}, 100);

						_this2.nowptB = (_this2.nowptB + _this2.portalsB.length - 1) % _this2.portalsB.length;
						console.log("nowB is : " + _this2.nowptB);

						pixel = convertPixel(_this2.portalsB[_this2.nowptB]);
						_this2.character.currX = pixel.x;
						_this2.character.currY = pixel.y - 11;
						console.log(pixel);
						var imageObj = new Image();
						var ctx = _this2.ctx;
						ctx.drawImage(bChar, self.character.currX, self.character.currY);
					} else if (Math.abs(_this2.character.currY - pixel.y) < 5) {

						_this2.nowptB = (_this2.nowptB + _this2.portalsB.length - 1) % _this2.portalsB.length;
						console.log(_this2.nowptB);
					}
				}

				if (_this2.portalsW.length > 0) {
					var pixel = convertPixel(_this2.portalsW[_this2.nowptW]); //in pixel
					// console.log(pixel.x);
					// console.log(this.character.currX);
					if (Math.abs(_this2.character.currY - pixel.y) < 5 && Math.abs(_this2.character.currX - pixel.x) < 5 && _this2.character.state == 1) {
						console.log("chuan");
						var tempX = _this2.character.currX;
						var tempY = _this2.character.currY;
						setTimeout(function () {
							console.log(tempX);
							console.log(tempY);
							self.character.clear(self.ctx, tempX, tempY);

							console.log("cleared");
						}, 100);

						_this2.nowptW = (_this2.nowptW + _this2.portalsW.length - 1) % _this2.portalsW.length;
						console.log("nowB is : " + _this2.nowptW);

						pixel = convertPixel(_this2.portalsW[_this2.nowptW]);
						_this2.character.currX = pixel.x;
						_this2.character.currY = pixel.y - 11;
						console.log(pixel);
						var imageObj = new Image();
						var ctx = _this2.ctx;
						ctx.drawImage(wChar, self.character.currX, self.character.currY);
					} else if (Math.abs(_this2.character.currY - pixel.y) < 5) {

						_this2.nowptW = (_this2.nowptW + _this2.portalsW.length - 1) % _this2.portalsW.length;
						console.log(_this2.nowptW);
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

				for (var i = 0; i < _this2.stillE.length; i++) {
					var pixel = convertPixel(_this2.stillE[i]); //in pixel
					// console.log(pixel.y);
					// if(this.currY > i.y && this.currY < i.y - 38.4 && (currX > i.x && currX < i.x + 18.28){
					if (Math.abs(_this2.character.currY - (pixel.y + 30.4)) < 5) {
						// collsionType = "stillE";
						clearInterval(_this2.intervalID);
						_this2.character.rebornCharacter(_this2.ctx);
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
			}, 20);
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9kaWFuL3BvcnRhbC9hcHAuanMiLCIvaG9tZS9kaWFuL3BvcnRhbC9qcy9DaGFyYWN0ZXIuanMiLCIvaG9tZS9kaWFuL3BvcnRhbC9qcy9HYW1lLmpzIiwiL2hvbWUvZGlhbi9wb3J0YWwvanMvT2JqLmpzIiwiL2hvbWUvZGlhbi9wb3J0YWwvanMvUG9ydGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztzQkNBaUIsV0FBVzs7Ozs7QUFHNUIsSUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQzs7QUFFbkIsSUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDO0FBQzNCLElBQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQzs7QUFFM0IsSUFBTSxTQUFTLEdBQUc7O0FBRWpCLGdCQUFlLEVBQUUsRUFBRTtBQUNuQixnQkFBZSxFQUFDLEVBQUU7QUFDbEIsWUFBVyxFQUFFLEdBQUcsR0FBQyxlQUFlO0FBQ2hDLFlBQVcsRUFBRSxHQUFHLEdBQUMsZUFBZTs7Q0FFaEMsQ0FBQTs7QUFFRCxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2pELElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRWxDLElBQUksS0FBSyxHQUFHLENBQUMsd0JBQVM7OztBQUdyQixPQUFNLEVBQU4sTUFBTTtBQUNOLFFBQU8sRUFBRSxHQUFHO0FBQ1osVUFBUyxFQUFULFNBQVM7QUFDVCxNQUFLLEVBQUUsRUFBRTtBQUNULEtBQUksRUFBRSxDQUFDLGFBQWEsRUFDbkIsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLENBQUM7Q0FDZixDQUFDLEVBQUUsd0JBQVM7OztBQUdaLE9BQU0sRUFBTixNQUFNO0FBQ04sUUFBTyxFQUFFLEdBQUc7QUFDWixVQUFTLEVBQVQsU0FBUztBQUNULE1BQUssRUFBRSxFQUFFO0FBQ1QsS0FBSSxFQUFFLENBQUMsYUFBYSxFQUNuQixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLENBQUMsRUFBQyxDQUFDLEVBQ2xCLHdCQUFTOzs7QUFHUixPQUFNLEVBQU4sTUFBTTtBQUNOLFFBQU8sRUFBRSxHQUFHO0FBQ1osVUFBUyxFQUFULFNBQVM7QUFDVCxNQUFLLEVBQUUsRUFBRTtBQUNULEtBQUksRUFBRSxDQUFDLGFBQWEsRUFDbkIsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxDQUFDO0NBQ2YsQ0FBQyxFQUNGLHdCQUFTOzs7QUFHUixPQUFNLEVBQU4sTUFBTTtBQUNOLFFBQU8sRUFBRSxHQUFHO0FBQ1osVUFBUyxFQUFULFNBQVM7QUFDVCxNQUFLLEVBQUUsRUFBRTtBQUNULEtBQUksRUFBRSxDQUFDLGFBQWEsRUFDbkIsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxDQUFFO0NBQ2hCLENBQUMsRUFDRix3QkFBUzs7O0FBR1IsT0FBTSxFQUFOLE1BQU07QUFDTixRQUFPLEVBQUUsR0FBRztBQUNaLFVBQVMsRUFBVCxTQUFTO0FBQ1QsTUFBSyxFQUFFLEVBQUU7QUFDVCxLQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQ25CLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsQ0FBQztDQUNmLENBQUMsRUFDRix3QkFBUzs7O0FBR1IsT0FBTSxFQUFOLE1BQU07QUFDTixRQUFPLEVBQUUsR0FBRztBQUNaLFVBQVMsRUFBVCxTQUFTO0FBQ1QsTUFBSyxFQUFFLEVBQUU7QUFDVCxLQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQ25CLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsQ0FBQztDQUNmLENBQUMsRUFDRix3QkFBUzs7O0FBR1IsT0FBTSxFQUFOLE1BQU07QUFDTixRQUFPLEVBQUUsR0FBRztBQUNaLFVBQVMsRUFBVCxTQUFTO0FBQ1QsTUFBSyxFQUFFLEVBQUU7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QUFDOUIsUUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFHL0IsU0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDL0IsU0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxFQUFFO0FBQ3JCLFVBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO01BR3hELE1BRUksSUFBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxFQUFFO0FBQzFCLFVBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7TUFFbkMsTUFDSSxJQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLEVBQUU7QUFDMUIsVUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsd0JBQVcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO01BQzlELE1BRUksSUFBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxFQUFFO0FBQzFCLFVBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHdCQUFZLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztNQUMvRCxNQUNJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRTtBQUMzQixVQUFJ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QzVDLFNBQUksQ0FBQyxHQUFHLE1BQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUM3QixTQUFJLENBQUMsR0FBRyxNQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDN0IsUUFBRyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7OztLQUluRDs7QUFHRCxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBSyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzlDLFNBQUksQ0FBQyxHQUFHLE1BQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUMvQixTQUFJLENBQUMsR0FBRyxNQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDL0IsUUFBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7S0FDL0M7O0FBRUQsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQUssUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM5QyxTQUFJLENBQUMsR0FBRyxNQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDL0IsU0FBSSxDQUFDLEdBQUcsTUFBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQy9CLFFBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0tBQy9DOztBQUVELFNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFLLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDMUMsU0FBSSxDQUFD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Q0FBQyxLQUFLLENBQUM7QUFDM0IsUUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDOztBQUU5QixRQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNoQixRQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztBQUN2QixRQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNuQixRQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztHQUV4Qjs7Ozs7Ozs7Ozs7O2VBVkcsR0FBRzs7V0F5QkYsZUFBQyxHQUFHLEVBQUU7Ozs7Ozs7OztBQVNWLFNBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUN6RDs7O1NBbkNHLEdBQUc7OztBQXNDVCxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7OztvQkN0Q0wsT0FBTzs7OztJQUVqQixNQUFNO1lBQU4sTUFBTTs7QUFDQyxXQURQLE1BQU0sQ0FDRSxLQUFLLEVBQUMsT0FBTyxFQUFDOzBCQUR0QixNQUFNOztBQUVSLCtCQUZFLE1BQU0sNkNBRUYsT0FBTyxFQUFFO0FBQ2YsUUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7R0FDcEI7O1NBSkcsTUFBTTs7O0FBU1osTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9qcy9HYW1lJztcblxuLy8gaW4gcGl4ZWxzXG5jb25zdCBXSURUSCA9IDI1NjtcbmNvbnN0IEhFSUdIVCA9IDk2MDtcbi8vIGluIGNlbGwgdW5pdHNcbmNvbnN0IFVOSVZFUlNFX0xFTkdUSCA9IDEzO1xuY29uc3QgVU5JVkVSU0VfSEVJR0hUID0gMjU7XG5cbmNvbnN0IERJTUVOU0lPTiA9IHtcblxuXHRVTklWRVJTRV9MRU5HVEg6IDEzLFxuXHRVTklWRVJTRV9IRUlHSFQ6MjUsXG5cdENFTExfTEVOR1RIOiAyNTYvVU5JVkVSU0VfTEVOR1RILFxuXHRDRUxMX0hFSUdIVDogOTYwL1VOSVZFUlNFX0hFSUdIVFxuXG59XG5cbnZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdmVyc2UnKTtcbnZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxudmFyIGdhbWVzID0gW25ldyBHYW1lKHtcblx0Ly8gZW5oYW5jZWQgb2JqZWN0IGxpdGVyYWxzXG5cdC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuXHRjYW52YXMsXG5cdGNvbnRleHQ6IGN0eCxcblx0RElNRU5TSU9OLFxuXHRzcGVlZDogMjAsXG5cdHBsYW46IFtcInh4eCB4eHggeHh4XCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwieHh4IHh4eCBra2tcIixcblx0XHRcImtrayBra2sgcHRCXCIsXG5cdFx0XCJra2sgeHh4IHB0QlwiLFxuXHRcdFwia2trIHB0QiBra2tcIixcblx0XHRcImtrayB4eHggcHRXXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwieHh4IHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IHB0V1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInB0VyB4eHgga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwieHh4IHh4eCBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IHB0QlwiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBwdEIga2trXCJdXG59KSwgbmV3IEdhbWUoe1xuXHQvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcblx0Ly8gJ2NhbnZhcywnIGlzIHRoZSBzYW1lIGFzICdjYW52YXM6IGNhbnZhcywnXG5cdGNhbnZhcyxcblx0Y29udGV4dDogY3R4LFxuXHRESU1FTlNJT04sXG5cdHNwZWVkOiAyMCxcblx0cGxhbjogW1wia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBpdHMga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0QiBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayB4eHgga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0QiBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCJdfSksXG5uZXcgR2FtZSh7XG5cdC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuXHQvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcblx0Y2FudmFzLFxuXHRjb250ZXh0OiBjdHgsXG5cdERJTUVOU0lPTixcblx0c3BlZWQ6IDIwLFxuXHRwbGFuOiBbXCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGl0cyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRXIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRXIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIl1cbn0pLFxubmV3IEdhbWUoe1xuXHQvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcblx0Ly8gJ2NhbnZhcywnIGlzIHRoZSBzYW1lIGFzICdjYW52YXM6IGNhbnZhcywnXG5cdGNhbnZhcyxcblx0Y29udGV4dDogY3R4LFxuXHRESU1FTlNJT04sXG5cdHNwZWVkOiAyMCxcblx0cGxhbjogW1wia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBpdHMga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHh4eCBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXVxufSksXG5uZXcgR2FtZSh7XG5cdC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuXHQvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcblx0Y2FudmFzLFxuXHRjb250ZXh0OiBjdHgsXG5cdERJTUVOU0lPTixcblx0c3BlZWQ6IDIwLFxuXHRwbGFuOiBbXCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcIml0cyBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IGtra1wiLFxuXHRcdFwicHRXIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayB4eHgga2trXCIsXG5cdFx0XCJwdFcga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBwdFcga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIl1cbn0pLFxubmV3IEdhbWUoe1xuXHQvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcblx0Ly8gJ2NhbnZhcywnIGlzIHRoZSBzYW1lIGFzICdjYW52YXM6IGNhbnZhcywnXG5cdGNhbnZhcyxcblx0Y29udGV4dDogY3R4LFxuXHRESU1FTlNJT04sXG5cdHNwZWVkOiAyMCxcblx0cGxhbjogW1wia2trIGtrayBra2tcIixcblx0XHRcIml0cyBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwicHRXIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBwdFcga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInh4eCBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwicHRXIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRXIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRXIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCJdXG59KSxcbm5ldyBHYW1lKHtcblx0Ly8gZW5oYW5jZWQgb2JqZWN0IGxpdGVyYWxzXG5cdC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuXHRjYW52YXMsXG5cdGNvbnRleHQ6IGN0eCxcblx0RElNRU5TSU9OLFxuXHRzcGVlZDogMjAsXG5cdHBsYW46IFtcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBpdHMga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBwdEIga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRCIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiXVxufSksXG5uZXcgR2FtZSh7XG5cdC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuXHQvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcblx0Y2FudmFzLFxuXHRjb250ZXh0OiBjdHgsXG5cdERJTUVOU0lPTixcblx0c3BlZWQ6IDIwLFxuXHRwbGFuOiBbXCJra2sgaXRzIGtra1wiLFxuXHRcdFwia2trIHB0QiBra2tcIixcblx0XHRcImtrayBra2sgcHRXXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sgcHRCXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sgcHRXXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayB4eHhcIixcblx0XHRcImtrayBra2sgcHRXXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIHB0V1wiLFxuXHRcdFwia2trIHh4eCBra2tcIixcblx0XHRcImtrayBwdFcga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiXVxufSksXG5cbm5ldyBHYW1lKHtcblx0Ly8gZW5oYW5jZWQgb2JqZWN0IGxpdGVyYWxzXG5cdC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuXHRjYW52YXMsXG5cdGNvbnRleHQ6IGN0eCxcblx0RElNRU5TSU9OLFxuXHRzcGVlZDogMjAsXG5cdHBsYW46IFtcImtrayBpdHMga2trXCIsXG5cdFx0XCJra2sgcHRCIGtra1wiLFxuXHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBwdEJcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIHh4eFwiLFxuXHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIHB0V1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sgcHRXXCIsXG5cdFx0XCJra2sgeHh4IGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRXIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCJdXG59KSxcbm5ldyBHYW1lKHtcblx0Ly8gZW5oYW5jZWQgb2JqZWN0IGxpdGVyYWxzXG5cdC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuXHRjYW52YXMsXG5cdGNvbnRleHQ6IGN0eCxcblx0RElNRU5TSU9OLFxuXHRzcGVlZDogMjAsXG5cdHBsYW46IFtcIml0cyBra2sga2trXCIsXG5cdFx0XCJwdEIga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBwdEJcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IHB0V1wiLFxuXHRcdFwia2trIHB0QiBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRXIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInh4eCB4eHgga2trXCIsXG5cdFx0XCJwdEIga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInB0VyBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInB0QiBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRCIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCJdXG59KSxcbm5ldyBHYW1lKHtcblx0Ly8gZW5oYW5jZWQgb2JqZWN0IGxpdGVyYWxzXG5cdC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuXHRjYW52YXMsXG5cdGNvbnRleHQ6IGN0eCxcblx0RElNRU5TSU9OLFxuXHRzcGVlZDogMjAsXG5cdHBsYW46IFtcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBwdFcga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBpdHMga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBpdHIga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiXVxufSksXG5cdG5ldyBHYW1lKHtcblx0XHQvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcblx0XHQvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcblx0XHRjYW52YXMsXG5cdFx0Y29udGV4dDogY3R4LFxuXHRcdERJTUVOU0lPTixcblx0XHRzcGVlZDogMjAsXG5cdFx0cGxhbjogW1wia2trIHB0VyBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIGl0cyBpdHJcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIHh4eCBwdEJcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcdFwieHh4IGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwicHRCIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwicHRXIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwicHRCIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIl1cblx0fSksXG5cdG5ldyBHYW1lKHtcblx0XHQvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcblx0XHQvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcblx0XHRjYW52YXMsXG5cdFx0Y29udGV4dDogY3R4LFxuXHRcdERJTUVOU0lPTixcblx0XHRzcGVlZDogMjAsXG5cdFx0cGxhbjogW1wia2trIHB0VyBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIGl0cyBpdHJcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIHh4eCBwdEJcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcdFwieHh4IGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwicHRCIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwicHRXIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwicHRCIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIl1cblx0fSksXG5cblxuXG5cbl07XG5cblxuXG5mdW5jdGlvbiBjaG9vc2VHYW1lKG51bSkge1xuXHQvLyBnYW1lc1tudW1dLmRyYXdHcmlkKCk7XG5cdGdhbWVzW251bV0uaW5pU2V0VXAoKTtcblx0Ly8gZ2FtZXNbbnVtXS5kcmF3KCk7XG5cdC8vIGdhbWVzW251bV0ucGxheSgpO1xufVxuXG5cblxuY2hvb3NlR2FtZSg5KTtcblxuIiwiaW1wb3J0IE9iaiBmcm9tICcuL09iaic7XG5cbmNsYXNzIENoYXJhY3RlciBleHRlbmRzIE9iantcbiAgY29uc3RydWN0b3Iob3B0aW9ucyl7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgdGhpcy5zdGF0ZSA9IG9wdGlvbnMuc3RhdGU7XG4gICAgdGhpcy5jdXJyWSA9IHRoaXMuY29udmVydFBpeGVsKG9wdGlvbnMpLnk7Ly9pbiBwaXhlbDsgWSBERUNSRUFTRVNcbiAgICB0aGlzLmN1cnJYID0gdGhpcy5jb252ZXJ0UGl4ZWwob3B0aW9ucykueDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gY29udmVydE9wdGlvbnNUb1BpeGVsKG9wdGlvbnMpe1xuICAvLyAgIHZhciBIX0JMT0NLUyA9IDE0O1xuICAvLyAgIHZhciBIX0RJTUVOVElPTiA9IDI1NjtcbiAgLy8gICB2YXIgVl9CTE9DS1MgPSAyNTtcbiAgLy8gICB2YXIgVl9ESU1FTlRJT04gPSA5NjA7XG4gIC8vICAgdmFyIGdyaWRQaXhlbC54ID0gb3B0aW9ucy54ICogKEhfRElNRU5USU9OIC8gSF9CTE9DS1MpO1xuICAvLyAgIHZhciBncmlkUGl4ZWwueSA9IChvcHRpb25zLnkrMSkgKiAoVl9ESU1FTlRJT04gLyBWX0JMT0NLUyk7XG4gIC8vICAgcmV0dXJuIGdyaWRQaXhlbDtcbiAgLy8gfVxuXG4gaW5pdGlhbGl6ZUNoYXJhY3RlcihjdHgpe1xuIC8vb25seSBhYmxlIHRvIGFjY2VzcyAndGhpcycgb24gdGhlIG91dHNpZGVcbiBcbiAgIFxuICAgICB2YXIgeCA9IHRoaXMuY3VyclggO1xuICAgICB2YXIgeSA9IHRoaXMuY3VyclkgO1xuICAgICB2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcbiAgICAgaW1hZ2VPYmoub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZU9iaiwgeCwgeSk7XG4gICAgIH07XG4gICAgIGltYWdlT2JqLnNyYyA9IFwiLi9pbWFnZXMvQmxhY2syLnBuZ1wiO1xuXG4gICAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgLy8gY3R4LmFyYygxMjAsIDkwMCwgMTcsIDAsIE1hdGguUEkqMiwgdHJ1ZSk7Ly9jaGFyYWN0ZXIgc2l6ZVxuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICAvLyBjdHguZmlsbCgpO1xuICAgIC8vIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIHJlYm9ybkNoYXJhY3RlciAoY3R4KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBieCA9IHRoaXMuY3Vyclg7XG4gICAgdmFyIGJ5ID0gdGhpcy5jdXJyWTtcbiAgXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuY2xlYXIoY3R4KTtcbiAgICAgIHZhciB4ID0gc2VsZi5jb252ZXJ0UGl4ZWwoc2VsZi5vcHRpb25zKS54O1xuICAgICAgdmFyIHkgPSBzZWxmLmNvbnZlcnRQaXhlbChzZWxmLm9wdGlvbnMpLnk7XG4gICAgICBzZWxmLmN1cnJYID0geDtcbiAgICAgIHNlbGYuY3VyclkgPSB5O1xuICAgICAgdmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWFnZU9iai5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlT2JqLCB4LCB5KTtcblxuICAgICAgfTtcbiAgICAgIGltYWdlT2JqLnNyYyA9IFwiLi9pbWFnZXMvQmxhY2syLnBuZ1wiO1xuICAgIH0sIDUwKTtcbiAgfVxuXG4gIGxvZygpIHtcbiAgICBjb25zb2xlLmxvZyhcImRvaW5nXCIpO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICB2YXIgZHkgPSAtMztcbiAgICB0aGlzLmN1cnJZICs9IGR5O1xuICB9XG5cbiAgIGRyYXcoY3R4KSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImRyYXdpbmcuLlwiKTtcbiAgICAvLyB0aGlzLmNsZWFyKGN0eCx0aGlzLmN1cnJYLHRoaXMuY3VyclkpO1xuICAgIFxuXG5cbiAgICB2YXIgeCA9IHRoaXMuY3Vyclg7XG4gICAgdmFyIHkgPSB0aGlzLmN1cnJZO1xuICAgIHZhciBpbWFnZU9iakIgPSBuZXcgSW1hZ2UoKTtcbiAgICB2YXIgaW1hZ2VPYmpXID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2VPYmpCLnNyYyA9IFwiLi9pbWFnZXMvQmxhY2syLnBuZ1wiO1xuICAgIGltYWdlT2JqVy5zcmMgPSBcIi4vaW1hZ2VzL1doaXRlMi5wbmdcIjtcbiAgICBpbWFnZU9iakIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBpZih0aGlzLnN0YXRlID09IDApIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcywgeCwgeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LDIwKTtcbiAgICAgIH1cbiAgICBpbWFnZU9ialcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBpZih0aGlzLnN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcywgeCwgeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LDIwKTtcbiAgICAgIH1cbiAgICBcbiAgICAgIGltYWdlT2JqQi5zcmMgPSBcIi4vaW1hZ2VzL0JsYWNrMi5wbmdcIjtcbiAgICAgIGltYWdlT2JqVy5zcmMgPSBcIi4vaW1hZ2VzL1doaXRlMi5wbmdcIjtcbiAgICB9XG5cblxuXG4gIC8vIHNldEludGVydmFsKGRyYXcgLDIwKTsvL2NoZWNrIGV2ZXJ5IDIwbXNcblxuICAgY29udmVydFBpeGVsKGNvdW50ZXIpe1xuICAgIC8vIHZhciBIX0JMT0NLUyA9IDE0O1xuICAgIC8vIHZhciBIX0RJTUVOVElPTiA9IDI1NjtcbiAgICAvLyB2YXIgVl9CTE9DS1MgPSAyNTtcbiAgICAvLyB2YXIgVl9ESU1FTlRJT04gPSA5NjA7XG4gICAgdmFyIGdyaWRQaXhlbCA9IHtcbiAgICAgIHg6IGNvdW50ZXIuR3JpZFggKiAodGhpcy5IX0RJTUVOVElPTiAvIHRoaXMuSF9CTE9DS1MpLFxuICAgICAgeTogKGNvdW50ZXIuR3JpZFkpICogKHRoaXMuVl9ESU1FTlRJT04gLyB0aGlzLlZfQkxPQ0tTKVxuICAgIH1cbiAgICByZXR1cm4gZ3JpZFBpeGVsO1xuICB9XG5cblxuXG5cbiAgIGNoYW5nZVN0YXRlKGUpe1xuICAgIC8vcmVnaXN0ZXIgYSBldmVudCBsaXN0ZW5lclxuICAgIHZhciBrZXkgPSBlLmtleUNvZGUgPyBlLmtleUNvZGUgOiBlLndoaWNoO1xuICAgIGNvbnNvbGUubG9nKFwic3RhdGUgaXNcIit0aGlzLnN0YXRlKTtcbiAgICBpZiAoa2V5ID09IDMyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIllvdSBQcmVzc2VkIHRoZSBma2luZyBTcGFjZVwiKTtcblxuICAgICAgc3dpdGNoKHRoaXMuc3RhdGUpe1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgdGhpcy5zdGF0ZSsrO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2hpdGVcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0aGlzLnN0YXRlLS07XG4gICAgICAgICAgY29uc29sZS5sb2coXCJCbGFja1wiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImZ1Y2tcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyO1xuIiwiaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlcic7XG5pbXBvcnQgT2JqIGZyb20gJy4vT2JqJztcbmltcG9ydCBQb3J0YWwgZnJvbSAnLi9Qb3J0YWwnO1xuLy8gaW1wb3J0IEVuZW15IGZyb20gLi9DaGFyYWN0ZXIuanM7XG5cblxuY2xhc3MgR2FtZSB7XG5cdC8vIHNldCB1cCBpbnN0YW5jZSB2YXJpYWJsZXNcblx0Y29uc3RydWN0b3Iob3B0aW9ucyl7XG5cdFx0dGhpcy5jYW52YXMgPSBvcHRpb25zLmNhbnZhcztcblx0XHR0aGlzLmN0eCA9IG9wdGlvbnMuY29udGV4dDtcblx0XHR0aGlzLkRJTUVOU0lPTiA9IG9wdGlvbnMuRElNRU5TSU9OO1xuXHRcdHRoaXMudW5pdmVyc2VFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXZlcnNlJyk7XG5cdFx0dGhpcy5zcGVlZCA9IG9wdGlvbnMuc3BlZWQ7XG5cdFx0dGhpcy5wbGFuID0gb3B0aW9ucy5wbGFuO1xuXHRcdHRoaXMuR3JpZCA9IFtdO1xuXHRcdHRoaXMucG9ydGFsc0IgPSBbXTtcblx0XHR0aGlzLnBvcnRhbHNXID0gW107XG5cdFx0dGhpcy5pdHJzID0gW107XG5cdFx0dGhpcy5pdHNzID0gW107XG5cdFx0dGhpcy5tb3ZpbmdFID0gW107XG5cdFx0dGhpcy5zdGlsbEUgPSBbXTtcblx0XHR0aGlzLmNoYXJhY3RlciA9IG5ldyBDaGFyYWN0ZXIoe3N0YXRlOjAsR3JpZFg6NSxHcmlkWToyM30pO1xuXHRcdHRoaXMucG9pbnQgPSAwO1xuXHRcdHRoaXMud2luID0gZmFsc2U7XG5cdFx0dGhpcy5IX0JMT0NLUyA9IDEzO1xuXHRcdHRoaXMuSF9ESU1FTlRJT04gPSAyNTY7XG5cdFx0dGhpcy5IID0gdGhpcy5IX0RJTUVOU0lPTiAvIHRoaXMuSF9CTE9DS1M7XG5cdFx0dGhpcy5WX0JMT0NLUyA9IDI1O1xuXHRcdHRoaXMuVl9ESU1FTlRJT04gPSA5NjA7XG5cdFx0dGhpcy5WID0gdGhpcy5WX0RJTUVOU0lPTiAvIHRoaXMuVl9CTE9DS1M7XG5cdFx0dGhpcy5pbnRlcnZhbElEID0gMDtcblx0XHR0aGlzLm5vd3B0Qjtcblx0XHR0aGlzLm5vd3B0VztcblxuXHR9XG5cblx0Ly8gaW5pdGlhbCBzZXQgdXBcblx0aW5pU2V0VXAoKSB7XG5cdFx0Ly8gLy8gTm90ZTogdXNpbmcgYmluZCB0byBwYXNzIHRoZSBjbGFzcycgY29udGV4dCB0byB0aGUgY2FsbGJhY2tzXG5cdFx0Ly8gLy8gbm90IHN1cmUgaWYgdGhpcyBjYW4gYmUgaW1wcm92ZWQuXG5cdFx0Ly8gLy8gdGhpcy51bml2ZXJzZUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb29wQ2VsbHMuYmluZHRoaXMoKSk7XG5cdFx0Ly8gLy8gd2hlbiB1c2VyIGNsaWNrLCBzdGFydCB0aGUgZ2FtZVxuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpXG5cdFx0XHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2VsZi5wbGF5KCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc29sZS5sb2codGhpcy5wbGFuKTtcblx0XHRcdHRoaXMucGFyc2UodGhpcy5wbGFuKTtcblxuXHRcdFx0dGhpcy5jaGFyYWN0ZXIuaW5pdGlhbGl6ZUNoYXJhY3Rlcih0aGlzLmN0eCk7XG5cdFx0XHRzZWxmLmRyYXcoKTtcblx0XHRcdHRoaXMubm93cHRCID0gdGhpcy5wb3J0YWxzQi5sZW5ndGgtMTtcblx0XHRcdHRoaXMubm93cHRXID0gdGhpcy5wb3J0YWxzVy5sZW5ndGgtMTtcblx0fVxuXG5cblxuXHRwYXJzZShwbGFuKSB7XG5cdFx0Ly8gbGV0IGdyaWQgPSBbXTtcblxuXHRcdGZvcih2YXIgaT0wO2k8cGxhbi5sZW5ndGg7aSsrKSB7XG5cdFx0XHRsZXQgYXJyYXkgPSBwbGFuW2ldLnNwbGl0KFwiIFwiKTtcblxuXHRcblx0XHRcdGZvcih2YXIgaj0wO2o8YXJyYXkubGVuZ3RoO2orKykge1xuXHRcdFx0XHRpZihhcnJheVtqXSA9PSBcInh4eFwiKSB7XG5cdFx0XHRcdFx0dGhpcy5zdGlsbEUucHVzaChuZXcgT2JqKHsgR3JpZFg6IDErMypqK2osIEdyaWRZOiBpIH0pKTtcblx0XHRcdFx0XHRcblxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRlbHNlIGlmKGFycmF5W2pdID09IFwibW9lXCIpIHtcblx0XHRcdFx0XHR0aGlzLkVuZW1pZXMucHVzaChuZXcgbW92aW5nRSh7fSkpO1xuXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZihhcnJheVtqXSA9PSBcInB0V1wiKSB7XG5cdFx0XHRcdFx0dGhpcy5wb3J0YWxzVy5wdXNoKG5ldyBQb3J0YWwoMSwgeyBHcmlkWDogMSszKmoraiwgR3JpZFk6aX0pKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGVsc2UgaWYoYXJyYXlbal0gPT0gXCJwdEJcIikge1xuXHRcdFx0XHRcdHRoaXMucG9ydGFsc0IucHVzaChuZXcgUG9ydGFsICgwLCB7IEdyaWRYOiAxKzMqaitqLCBHcmlkWTppfSkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKGFycmF5W2pdID09IFwiaXRyXCIpIHtcblx0XHRcdFx0XHR0aGlzLml0cnMucHVzaChuZXcgT2JqKHsgR3JpZFg6IDEgKyAzICogaiArIGosIEdyaWRZOiBpIH0pKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmIChhcnJheVtqXSA9PSBcIml0c1wiKSB7XG5cdFx0XHRcdFx0dGhpcy5pdHNzLnB1c2gobmV3IE9iaih7IEdyaWRYOiAxICsgMyAqIGogKyBqLCBHcmlkWTogaSB9KSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XG5cdFx0XHR9XG5cdFx0XG5cdFx0fVxuXG5cdH1cblxuXG5cblxuXHRwbGF5KCl7XG5cdFx0Ly8gcmVtb3ZlIGdvZCBtb2RlXG5cdFx0Ly8gdGhpcy51bml2ZXJzZUVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb29wQ2VsbHMpO1xuXHRcdC8vIGdhbWUgbG9vcFxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuc3BlZWQpO1xuXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGZ1bmN0aW9uKGUpe1xuXHRcdFx0ICBzZWxmLmNoYXJhY3Rlci5jaGFuZ2VTdGF0ZShlKTtcblx0XHR9KTtcblx0XHRzZWxmLmNoYXJhY3Rlci5kcmF3KHNlbGYuY3R4KTtcblxuXHRcdHRoaXMuaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXHRcdFx0c2VsZi5jaGFyYWN0ZXIubW92ZSgpO1xuXHRcdFx0c2VsZi5jaGVja0NvbGxpc2lvbigpO1xuXHRcdH0sIDIwKTtcblx0XG5cdFx0Ly8gc2V0SW50ZXJ2YWwodGhpcy5jaGFyYWN0ZXIuY2hlY2tDb2xsaXNpb24odGhpcy5wb3J0YWxzLHRoaXMuZW5lbWllcyx0aGlzLml0ZW1zKSwgdGhpcy5zcGVlZCk7XG5cdFx0Ly8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5jaGFyYWN0ZXIuY2hhbmdlU3RhdGUpXG5cblx0fVxuXG5cdGxvZ2dpbmcoKSB7XG5cdFx0Y29uc29sZS5sb2coXCJsb2dnaW5nXCIpO1xuXHR9XG5cblx0Ly8gZHJhdyBncmlkXG5cdGRyYXdHcmlkKCkge1xuXHRcdHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyM3NzcnO1xuXHRcdHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XG5cdFx0Ly8gdmVydGljYWwgbGluZXNcblx0XHRmb3IgKGxldCBpID0gMTsgaTx0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9MRU5HVEg7IGkrKyl7XG5cdFx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcblx0XHRcdHRoaXMuY3R4Lm1vdmVUbyh0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCppLDApO1xuXHRcdFx0dGhpcy5jdHgubGluZVRvKHRoaXMuRElNRU5TSU9OLkNFTExfTEVOR1RIKmksIFxuXHRcdFx0XHR0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9IRUlHSFQqdGhpcy5ESU1FTlNJT04uQ0VMTF9IRUlHSFQpO1xuXHRcdFx0dGhpcy5jdHguc3Ryb2tlKCk7XG5cdFx0fVxuXHRcdC8vIGhvcml6b250YWwgbGluZXNcblx0XHRmb3IgKGxldCBpID0gMTsgaTx0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9IRUlHSFQ7IGkrKyl7XG5cdFx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcblx0XHRcdHRoaXMuY3R4Lm1vdmVUbygwLHRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUKmkpO1xuXHRcdFx0dGhpcy5jdHgubGluZVRvKHRoaXMuRElNRU5TSU9OLlVOSVZFUlNFX0xFTkdUSCp0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCwgXG5cdFx0XHRcdHRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUKmkpO1xuXHRcdFx0dGhpcy5jdHguc3Ryb2tlKCk7XG5cdFx0fVxuXHR9XG5cblx0ZHJhdygpIHtcblx0XHR2YXIgY3R4ID0gdGhpcy5jdHg7XG5cdFx0dmFyIHhzaGlmdCA9IHRoaXMuRElNRU5TSU9OLkNFTExfTEVOR1RIO1xuXHRcdHZhciB5c2hpZnQgPSB0aGlzLkRJTUVOU0lPTi5DRUxMX0hFSUdIVDtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnBvcnRhbHNCKTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnBvcnRhbHNXKTtcblx0XHR2YXIgb2JzdGFjbGVJbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRvYnN0YWNsZUltZy5zcmMgPSBcIi4vaW1hZ2VzL09ic3RhY2xlLnBuZ1wiO1xuXHRcdHZhciBwb3RCSW1nID0gbmV3IEltYWdlKCk7XG5cdFx0cG90QkltZy5zcmMgPSBcIi4vaW1hZ2VzL3BvdEIucG5nXCI7XG5cdFx0dmFyIHBvdFdJbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRwb3RXSW1nLnNyYyA9IFwiLi9pbWFnZXMvcG90Vy5wbmdcIjtcblx0XHR2YXIgc3RhcjJJbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRzdGFyMkltZy5zcmMgPSBcIi4vaW1hZ2VzL1N0YXIyLnBuZ1wiO1xuXHRcdHZhciByZXZJbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRyZXZJbWcuc3JjID0gXCIuL2ltYWdlcy9yZXZlcnNlLnBuZ1wiO1xuXHRcdHZhciBiQ2hhciA9IG5ldyBJbWFnZSgpO1xuXHQgICAgdmFyIHdDaGFyID0gbmV3IEltYWdlKCk7XG5cdCAgICBiQ2hhci5zcmMgPSBcIi4vaW1hZ2VzL0JsYWNrMi5wbmdcIjtcblx0ICAgIHdDaGFyLnNyYyA9IFwiLi9pbWFnZXMvV2hpdGUyLnBuZ1wiO1xuXHRcdHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5IX0RJTUVOVElPTiwgIHRoaXMuVl9ESU1FTlRJT04pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0aWxsRS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgeCA9IHRoaXMuc3RpbGxFW2ldLkdyaWRYO1xuXHRcdFx0XHRsZXQgeSA9IHRoaXMuc3RpbGxFW2ldLkdyaWRZO1xuXHRcdFx0XHRjdHguZHJhd0ltYWdlKG9ic3RhY2xlSW1nLCB4ICogeHNoaWZ0LCB5ICogeXNoaWZ0KTtcblxuXHRcdFx0XHQvLyB0aGlzLmN0eC5maWxsUmVjdCgsLDMqdGhpcy5ESU1FTlNJT04uQ0VMTF9MRU5HVEgsdGhpcy5ESU1FTlNJT04uQ0VMTF9IRUlHSFQpO1xuXG5cdFx0XHR9XG5cblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvcnRhbHNCLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCB4ID0gdGhpcy5wb3J0YWxzQltpXS5HcmlkWDtcblx0XHRcdFx0bGV0IHkgPSB0aGlzLnBvcnRhbHNCW2ldLkdyaWRZO1x0XHRcblx0XHRcdFx0Y3R4LmRyYXdJbWFnZShwb3RCSW1nLCB4ICogeHNoaWZ0LCB5ICogeXNoaWZ0KTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvcnRhbHNXLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCB4ID0gdGhpcy5wb3J0YWxzV1tpXS5HcmlkWDtcblx0XHRcdFx0bGV0IHkgPSB0aGlzLnBvcnRhbHNXW2ldLkdyaWRZO1x0XHRcblx0XHRcdFx0Y3R4LmRyYXdJbWFnZShwb3RXSW1nLCB4ICogeHNoaWZ0LCB5ICogeXNoaWZ0KTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0c3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bGV0IHggPSB0aGlzLml0c3NbaV0uR3JpZFg7XG5cdFx0XHRcdGxldCB5ID0gdGhpcy5pdHNzW2ldLkdyaWRZO1x0XHRcblx0XHRcdFx0Y3R4LmRyYXdJbWFnZShzdGFyMkltZywgeCAqIHhzaGlmdCwgeSAqIHlzaGlmdCk7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdHJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCB4ID0gdGhpcy5pdHJzW2ldLkdyaWRYO1xuXHRcdFx0XHRsZXQgeSA9IHRoaXMuaXRyc1tpXS5HcmlkWTtcdFx0XG5cdFx0XHRcdGN0eC5kcmF3SW1hZ2UocmV2SW1nLCB4ICogeHNoaWZ0LCB5ICogeXNoaWZ0KTtcblx0XHRcdH1cblx0XHRcdFxuXG5cblx0XHRcdGlmICh0aGlzLmNoYXJhY3Rlci5zdGF0ZSA9PSAwKSB7XG5cdFx0XHRcdGN0eC5kcmF3SW1hZ2UoYkNoYXIsIHRoaXMuY2hhcmFjdGVyLmN1cnJYLCB0aGlzLmNoYXJhY3Rlci5jdXJyWSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Y3R4LmRyYXdJbWFnZSh3Q2hhciwgdGhpcy5jaGFyYWN0ZXIuY3VyclgsIHRoaXMuY2hhcmFjdGVyLmN1cnJZKTtcblx0XHRcdH1cblxuXG5cblxuXG5cblxuXG5cdFx0fSwyMCk7XG5cdFx0XG5cdFx0Ly8gLy9kcmF3IHN0YXRpYyBzdHVmZlx0XG5cdFx0Ly8gZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0aWxsRS5sZW5ndGg7IGkrKykge1xuXHRcdC8vIFx0bGV0IHggPSB0aGlzLnN0aWxsRVtpXS5HcmlkWDtcblx0XHQvLyBcdGxldCB5ID0gdGhpcy5zdGlsbEVbaV0uR3JpZFk7XG5cblx0XHQvLyBcdHZhciBpbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xuXHRcdC8vIFx0aW1hZ2VPYmoub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cblx0XHQvLyBcdFx0c2V0SW50ZXJ2YWwgKCgpID0+IGN0eC5kcmF3SW1hZ2UodGhpcywgeCAqIHhzaGlmdCwgeSAqIHlzaGlmdCksMjApO1xuXG5cdFx0Ly8gXHR9O1xuXHRcdC8vIFx0aW1hZ2VPYmouc3JjID0gXCIuL2ltYWdlcy9PYnN0YWNsZS5wbmdcIjtcblxuXHRcdC8vIFx0Ly8gdGhpcy5jdHguZmlsbFJlY3QoLCwzKnRoaXMuRElNRU5TSU9OLkNFTExfTEVOR1RILHRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUKTtcblxuXHRcdC8vIH1cblxuXG5cdFx0Ly8gZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvcnRhbHNCLmxlbmd0aDsgaSsrKSB7XG5cdFx0Ly8gXHRsZXQgeCA9IHRoaXMucG9ydGFsc0JbaV0uR3JpZFg7XG5cdFx0Ly8gXHRsZXQgeSA9IHRoaXMucG9ydGFsc0JbaV0uR3JpZFk7XG5cdFx0XHRcblx0XHQvLyBcdFx0dmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG5cdFx0Ly8gXHRcdGltYWdlT2JqLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0Ly8gXHRcdFx0c2V0SW50ZXJ2YWwgKCgpID0+IGN0eC5kcmF3SW1hZ2UodGhpcywgeCAqIHhzaGlmdCwgeSAqIHlzaGlmdCksMjApO1xuXG5cdFx0Ly8gXHRcdH07XG5cdFx0Ly8gXHRcdGltYWdlT2JqLnNyYyA9IFwiLi9pbWFnZXMvcG90Qi5wbmdcIjtcblx0XHRcblx0XHQvLyB9XG5cblxuXHRcdC8vIFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvcnRhbHNXLmxlbmd0aDsgaSsrKSB7XG5cdFx0Ly8gXHRcdGxldCB4ID0gdGhpcy5wb3J0YWxzV1tpXS5HcmlkWDtcblx0XHQvLyBcdFx0bGV0IHkgPSB0aGlzLnBvcnRhbHNXW2ldLkdyaWRZO1xuXHRcdFx0XG5cdFx0Ly8gXHRcdFx0dmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG5cdFx0Ly8gXHRcdFx0aW1hZ2VPYmoub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cblx0XHQvLyBcdFx0XHRcdHNldEludGVydmFsICgoKSA9PiBjdHguZHJhd0ltYWdlKHRoaXMsIHggKiB4c2hpZnQsIHkgKiB5c2hpZnQpLDIwKTtcblxuXHRcdC8vIFx0XHRcdH07XG5cdFx0Ly8gXHRcdFx0aW1hZ2VPYmouc3JjID0gXCIuL2ltYWdlcy9wb3RXLnBuZ1wiO1xuXHRcdFx0XHRcblxuXG5cdFx0Ly8gXHR9XG5cblx0XHQvLyBcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdHNzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Ly8gXHRcdGxldCB4ID0gdGhpcy5pdHNzW2ldLkdyaWRYO1xuXHRcdC8vIFx0XHRsZXQgeSA9IHRoaXMuaXRzc1tpXS5HcmlkWTtcblxuXHRcdC8vIFx0XHR2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcblx0XHQvLyBcdFx0aW1hZ2VPYmoub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cblx0XHQvLyBcdFx0XHRzZXRJbnRlcnZhbCAoKCkgPT4gY3R4LmRyYXdJbWFnZSh0aGlzLCB4ICogeHNoaWZ0LCB5ICogeXNoaWZ0KSwyMCk7XG5cblx0XHQvLyBcdFx0fTtcblx0XHQvLyBcdFx0aW1hZ2VPYmouc3JjID0gXCIuL2ltYWdlcy9TdGFyMi5wbmdcIjtcblxuXG5cblx0XHQvLyBcdH1cblxuXHRcdC8vIFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0cnMubGVuZ3RoOyBpKyspIHtcblx0XHQvLyBcdFx0bGV0IHggPSB0aGlzLml0cnNbaV0uR3JpZFg7XG5cdFx0Ly8gXHRcdGxldCB5ID0gdGhpcy5pdHJzW2ldLkdyaWRZO1xuXG5cdFx0Ly8gXHRcdHZhciBpbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xuXHRcdC8vIFx0XHRpbWFnZU9iai5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuXHRcdC8vIFx0XHRcdHNldEludGVydmFsICgoKSA9PiBjdHguZHJhd0ltYWdlKHRoaXMsIHggKiB4c2hpZnQsIHkgKiB5c2hpZnQpLDIwKTtcblxuXHRcdC8vIFx0XHR9O1xuXHRcdC8vIFx0XHRpbWFnZU9iai5zcmMgPSBcIi4vaW1hZ2VzL3JldmVyc2UucG5nXCI7XG5cblxuXG5cdFx0Ly8gXHR9XG5cblx0XHRcdC8vIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Ly8gXHRsZXQgeCA9IHRoaXMucG9ydGFsc1dbaV0uR3JpZFg7XG5cdFx0XHQvLyBcdGxldCB5ID0gdGhpcy5wb3J0YWxzV1tpXS5HcmlkWTtcblxuXHRcdFx0Ly8gXHR2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcblx0XHRcdC8vIFx0aW1hZ2VPYmoub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdC8vIFx0XHRjdHguZHJhd0ltYWdlKHRoaXMsIHggKiB4c2hpZnQsIHkgKiB5c2hpZnQpO1xuXG5cdFx0XHQvLyBcdH07XG5cdFx0XHQvLyBcdGltYWdlT2JqLnNyYyA9IFwiLi9pbWFnZXMvcG90Vy5wbmdcIjtcblxuXG5cblx0XHRcdC8vIH1cblxuXHRcdH1cblx0XG5cblxuXG5cdFx0XG5cblxuXG5cdFx0Ly8gZm9yICh2YXIgaT0wO2k8dGhpcy5wb3J0YWxzLmxlbmd0aDtpKyspIHtcblx0XHQvLyBcdGN0eC5maWxsU3R5bGU9XCIjRkYwMDAwXCI7XG5cdFx0Ly8gXHR0aGlzLmN0eC5maWxsUmVjdChpKkNFTExfTEVOR1RILGkqQ0VMTF9IRUlHSFQsMypDRUxMX0xFTkdUSCxDRUxMX0hFSUdIVCk7XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gZm9yICh2YXIgaT0wO2k8dGhpcy5wb3J0YWxzLmxlbmd0aDtpKyspIHtcblx0XHQvLyBcdGN0eC5maWxsU3R5bGU9XCJibHVlXCI7XG5cdFx0Ly8gXHR0aGlzLmN0eC5maWxsUmVjdChpKkNFTExfTEVOR1RILGkqQ0VMTF9IRUlHSFQsMypDRUxMX0xFTkdUSCxDRUxMX0hFSUdIVCk7XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gZm9yICh2YXIgaT0wO2k8dGhpcy5wb3J0YWxzLmxlbmd0aDtpKyspIHtcblx0XHQvLyBcdGN0eC5maWxsU3R5bGU9XCJ5ZWxsb3dcIjtcblx0XHQvLyBcdHRoaXMuY3R4LmZpbGxSZWN0KGkqQ0VMTF9MRU5HVEgsaSpDRUxMX0hFSUdIVCwzKkNFTExfTEVOR1RILENFTExfSEVJR0hUKTtcblx0XHQvLyB9XG5cblx0Y2hlY2tDb2xsaXNpb24oKSB7XG5cdFx0dmFyIHNlbGY9dGhpcztcblx0XHR2YXIgYkNoYXIgPSBuZXcgSW1hZ2UoKTtcblx0XHRiQ2hhci5zcmMgPSBcIi4vaW1hZ2VzL0JsYWNrMi5wbmdcIjtcblx0XHR2YXIgd0NoYXIgPSBuZXcgSW1hZ2UoKTtcblx0XHR3Q2hhci5zcmMgPSBcIi4vaW1hZ2VzL1doaXRlMi5wbmdcIjtcblx0XHQvLyB2YXIgY29sbGlzaW9uVHlwZTtcblxuXHRcdC8vIC8vbG9vcCB0aHJvdWdoIGV2ZXJ5IG9iamVjdCBpbiB0aGUgbWFwXG5cdFx0Ly8gY29uc29sZS5sb2codGhpcy5wb3J0YWxzQlt0aGlzLm5vd3B0Ql0pXG5cdFx0c2V0SW50ZXJ2YWwoICgpID0+IHtcblx0XHRpZih0aGlzLnBvcnRhbHNCLmxlbmd0aD4wKSB7XG5cdFx0XHR2YXIgcGl4ZWwgPSBjb252ZXJ0UGl4ZWwodGhpcy5wb3J0YWxzQlt0aGlzLm5vd3B0Ql0pOy8vaW4gcGl4ZWxcblx0XHRcdC8vIGNvbnNvbGUubG9nKHBpeGVsLngpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy5jaGFyYWN0ZXIuY3VyclgpO1xuXHRcdFx0aWYgKChNYXRoLmFicyh0aGlzLmNoYXJhY3Rlci5jdXJyWSAtIHBpeGVsLnkpIDwgNSkgJiYgKE1hdGguYWJzKHRoaXMuY2hhcmFjdGVyLmN1cnJYIC0gcGl4ZWwueCkgPCA1KSAmJiAodGhpcy5jaGFyYWN0ZXIuc3RhdGUgPT0gMCkpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJjaHVhblwiKTtcblx0XHRcdFx0dmFyIHRlbXBYID0gdGhpcy5jaGFyYWN0ZXIuY3Vyclg7XG5cdFx0XHRcdHZhciB0ZW1wWSA9IHRoaXMuY2hhcmFjdGVyLmN1cnJZO1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHRlbXBYKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh0ZW1wWSk7XG5cdFx0XHRcdFx0c2VsZi5jaGFyYWN0ZXIuY2xlYXIoc2VsZi5jdHgsIHRlbXBYLCB0ZW1wWSk7XG5cblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImNsZWFyZWRcIik7XG5cdFx0XHRcdH0sMTAwKTtcblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMubm93cHRCID0gKHRoaXMubm93cHRCICt0aGlzLnBvcnRhbHNCLmxlbmd0aC0gMSkgJSB0aGlzLnBvcnRhbHNCLmxlbmd0aDtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJub3dCIGlzIDogXCIgKyB0aGlzLm5vd3B0Qik7XG5cblx0XHRcdFx0cGl4ZWwgPSBjb252ZXJ0UGl4ZWwodGhpcy5wb3J0YWxzQlt0aGlzLm5vd3B0Ql0pO1xuXHRcdFx0XHR0aGlzLmNoYXJhY3Rlci5jdXJyWCA9IHBpeGVsLng7XG5cdFx0XHRcdHRoaXMuY2hhcmFjdGVyLmN1cnJZID0gcGl4ZWwueS0xMTtcblx0XHRcdFx0Y29uc29sZS5sb2cocGl4ZWwpXG5cdFx0XHRcdHZhciBpbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0XHR2YXIgY3R4ID0gdGhpcy5jdHg7XG5cdFx0XHRcdGN0eC5kcmF3SW1hZ2UoYkNoYXIsIHNlbGYuY2hhcmFjdGVyLmN1cnJYLCBzZWxmLmNoYXJhY3Rlci5jdXJyWSk7XG5cdFx0fVxuXHRcdFx0ZWxzZSBpZiAoTWF0aC5hYnModGhpcy5jaGFyYWN0ZXIuY3VyclkgLSBwaXhlbC55KSA8IDUpIHtcblx0XHRcdFxuXHRcdFx0XHR0aGlzLm5vd3B0QiA9ICh0aGlzLm5vd3B0QiArIHRoaXMucG9ydGFsc0IubGVuZ3RoIC0gMSkgJSB0aGlzLnBvcnRhbHNCLmxlbmd0aDtcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5ub3dwdEIpO1xuXHRcdFx0fVxuXG5cblx0XHRcblx0XHQgIH1cblxuXG5cdFx0aWYgKHRoaXMucG9ydGFsc1cubGVuZ3RoID4gMCkge1xuXHRcdFx0dmFyIHBpeGVsID0gY29udmVydFBpeGVsKHRoaXMucG9ydGFsc1dbdGhpcy5ub3dwdFddKTsvL2luIHBpeGVsXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhwaXhlbC54KTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuY2hhcmFjdGVyLmN1cnJYKTtcblx0XHRcdGlmICgoTWF0aC5hYnModGhpcy5jaGFyYWN0ZXIuY3VyclkgLSBwaXhlbC55KSA8IDUpICYmIChNYXRoLmFicyh0aGlzLmNoYXJhY3Rlci5jdXJyWCAtIHBpeGVsLngpIDwgNSkgJiYgKHRoaXMuY2hhcmFjdGVyLnN0YXRlID09IDEpKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiY2h1YW5cIik7XG5cdFx0XHRcdHZhciB0ZW1wWCA9IHRoaXMuY2hhcmFjdGVyLmN1cnJYO1xuXHRcdFx0XHR2YXIgdGVtcFkgPSB0aGlzLmNoYXJhY3Rlci5jdXJyWTtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh0ZW1wWCk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2codGVtcFkpO1xuXHRcdFx0XHRcdHNlbGYuY2hhcmFjdGVyLmNsZWFyKHNlbGYuY3R4LCB0ZW1wWCwgdGVtcFkpO1xuXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJjbGVhcmVkXCIpO1xuXHRcdFx0XHR9LCAxMDApO1xuXG5cdFx0XHRcdHRoaXMubm93cHRXID0gKHRoaXMubm93cHRXICsgdGhpcy5wb3J0YWxzVy5sZW5ndGggLSAxKSAlIHRoaXMucG9ydGFsc1cubGVuZ3RoO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIm5vd0IgaXMgOiBcIiArIHRoaXMubm93cHRXKTtcblxuXHRcdFx0XHRwaXhlbCA9IGNvbnZlcnRQaXhlbCh0aGlzLnBvcnRhbHNXW3RoaXMubm93cHRXXSk7XG5cdFx0XHRcdHRoaXMuY2hhcmFjdGVyLmN1cnJYID0gcGl4ZWwueDtcblx0XHRcdFx0dGhpcy5jaGFyYWN0ZXIuY3VyclkgPSBwaXhlbC55IC0gMTE7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHBpeGVsKVxuXHRcdFx0XHR2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcblx0XHRcdFx0dmFyIGN0eCA9IHRoaXMuY3R4O1xuXHRcdFx0XHRjdHguZHJhd0ltYWdlKHdDaGFyLCBzZWxmLmNoYXJhY3Rlci5jdXJyWCwgc2VsZi5jaGFyYWN0ZXIuY3VyclkpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoTWF0aC5hYnModGhpcy5jaGFyYWN0ZXIuY3VyclkgLSBwaXhlbC55KSA8IDUpIHtcblxuXHRcdFx0XHR0aGlzLm5vd3B0VyA9ICh0aGlzLm5vd3B0VyArIHRoaXMucG9ydGFsc1cubGVuZ3RoIC0gMSkgJSB0aGlzLnBvcnRhbHNXLmxlbmd0aDtcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5ub3dwdFcpO1xuXHRcdFx0fVxuXG5cblxuXHRcdH1cblx0XHQgXG5cblx0XHQvLyBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9ydGFsc1cubGVuZ3RoOyBpKyspIHtcblx0XHQvLyBcdHZhciBwaXhlbCA9IGNvbnZlcnRQaXhlbCh0aGlzLnBvcnRhbHNXW2ldKTsvL2luIHBpeGVsXG5cdFx0Ly8gXHRpZiAoKHRoaXMuY2hhcmFjdGVyLmN1cnJZID09IHBpeGVsLnkpICYmICh0aGlzLmNoYXJhY3Rlci5jdXJyWCA9PSBwaXhlbC54KSAmJiAodGhpcy5wb3J0YWxzV1tpXS5zdGF0ZSA9PSB0aGlzLmNoYXJhY3Rlci5zdGF0ZSkpIHtcblx0XHQvLyBcdFx0dGhpcy5jaGFyYWN0ZXIuY2xlYXIodGhpcy5jdHgsIHBpeGVsLngsIHBpeGVsLnkpO1xuXHRcdC8vIFx0XHRjb2xsc2lvblR5cGUgPSBcInBvcnRhbHNcIjtcblx0XHQvLyBcdFx0cGl4ZWwgPSBjb252ZXJ0UGl4ZWwodGhpcy5wcm90YWxzV1tpIC0gMV0pO1xuXHRcdC8vIFx0XHR0aGlzLmNoYXJhY3Rlci5jdXJyWCA9IHBpeGVsLngvL2luIGdyaWRcblx0XHQvLyBcdFx0dGhpcy5jaGFyYWN0ZXIuY3VyclkgPSBwaXhlbC55O1xuXHRcdC8vIFx0XHR2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcblx0XHQvLyBcdFx0aW1hZ2VPYmoub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cblx0XHQvLyBcdFx0XHRjdHguZHJhd0ltYWdlKHRoaXMsIHBpeGVsLngsIHBpeGVsLnkpO1xuXG5cdFx0Ly8gXHRcdH07XG5cdFx0Ly8gXHRcdGltYWdlT2JqLnNyYyA9IFwiLi9pbWFnZXMvQmxhY2syLnBuZ1wiO1xuXG5cblx0XHQvLyBcdFx0Ly8gY3R4LmJlZ2luUGF0aCgpO1xuXHRcdC8vIFx0XHQvLyBjdHguYXJjKGN1cnJYICsgOS4xNCwgY3VyclksIDE3LCAwLCBNYXRoLlBJKjIsIHRydWUpOy8vcG9ydGFsIHNpemVcblx0XHQvLyBcdFx0Ly8gY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTVERFwiO1xuXHRcdC8vIFx0XHQvLyBjdHguZmlsbCgpO1xuXHRcdC8vIFx0XHQvLyBjdHguY2xvc2VQYXRoKCk7XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0aWxsRS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHBpeGVsID0gY29udmVydFBpeGVsKHRoaXMuc3RpbGxFW2ldKTsvL2luIHBpeGVsXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhwaXhlbC55KTtcblx0XHRcdC8vIGlmKHRoaXMuY3VyclkgPiBpLnkgJiYgdGhpcy5jdXJyWSA8IGkueSAtIDM4LjQgJiYgKGN1cnJYID4gaS54ICYmIGN1cnJYIDwgaS54ICsgMTguMjgpe1xuXHRcdFx0aWYgKE1hdGguYWJzKHRoaXMuY2hhcmFjdGVyLmN1cnJZIC0gKHBpeGVsLnkrMzAuNCkpPDUpIHtcblx0XHRcdFx0Ly8gY29sbHNpb25UeXBlID0gXCJzdGlsbEVcIjtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSUQpO1xuXHRcdFx0XHR0aGlzLmNoYXJhY3Rlci5yZWJvcm5DaGFyYWN0ZXIodGhpcy5jdHgpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcImkgYW0gZXhlY3V0ZWRcIik7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubW92aW5nRS5sZW5ndGg7IGkrKykge1xuXHRcdC8vIFx0dmFyIHBpeGVsID0gY29udmVydFBpeGVsKHRoaXMubW92aW5nRVtpXSk7Ly9pbiBwaXhlbFxuXHRcdC8vIFx0Ly8gaWYodGhpcy5jdXJyWSA+IGkueSAmJiB0aGlzLmN1cnJZIDwgaS55IC0gMzguNCAmJiAoY3VyclggPiBpLnggJiYgY3VyclggPCBpLnggKyAxOC4yOCl7XG5cdFx0Ly8gXHRpZiAoKHRoaXMuY2hhcmFjdGVyLmN1cnJZIDwgcGl4ZWwueSkgJiYgKHRoaXMuY3VyclggPT0gcGl4ZWwueCkpIHtcblx0XHQvLyBcdFx0ZG9jdW1lbnQucmVsb2FkKCk7XG5cblx0XHQvLyBcdH1cblx0XHQvLyB9XG5cblxuXHRcdC8vIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdC8vIFx0dmFyIHBpeGVsID0gY29udmVydFBpeGVsKHRoaXMuaXRlbXNbaV0pOy8vaW4gcGl4ZWxcblx0XHQvLyBcdGlmICgodGhpcy5jdXJyWSA8IHBpeGVsLnkpICYmICh0aGlzLmN1cnJYID09IHBpeGVsLngpKSB7XG5cdFx0Ly8gXHRcdHRoaXMucG9pbnQrKztcblx0XHQvLyBcdFx0Y29uc29sZS5sb2codGhpcy5wb2ludCk7XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfVxufSwyMCk7XG5cbn1cbn1cblxuXG5mdW5jdGlvbiBjb252ZXJ0UGl4ZWwoY291bnRlcil7XG4gICAgdmFyIEhfQkxPQ0tTID0gMTM7XG4gICAgdmFyIEhfRElNRU5USU9OID0gMjU2O1xuICAgIHZhciBWX0JMT0NLUyA9IDI1O1xuICAgIHZhciBWX0RJTUVOVElPTiA9IDk2MDtcbiAgICB2YXIgZ3JpZFBpeGVsID0ge1xuXHRcdHg6IGNvdW50ZXIuR3JpZFggKiAoSF9ESU1FTlRJT04gLyBIX0JMT0NLUyksXG5cdFx0eTogKGNvdW50ZXIuR3JpZFkpICogKFZfRElNRU5USU9OIC8gVl9CTE9DS1MpXG4gICAgfVxuICAgIHJldHVybiBncmlkUGl4ZWw7XG59XG5cblxuLy8gUHJpdmF0ZSBtZXRob2RzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBMb29wIG92ZXIgdGhlIGNlbGxzXG5mdW5jdGlvbiBsb29wQ2VsbHMoZSkge1xuXHR2YXIgdW5pdmVyc2VFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXZlcnNlJyk7XG5cdHZhciBwYWdlWCA9IGUucGFnZVggLSB1bml2ZXJzZUVsZW0ub2Zmc2V0TGVmdDtcblx0dmFyIHBhZ2VZID0gZS5wYWdlWSAtIHVuaXZlcnNlRWxlbS5vZmZzZXRUb3A7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGk8dGhpcy51bml2ZXJzZS5oZWlnaHQ7IGkrKyl7XG5cdFx0Zm9yIChsZXQgaj0wOyBqPHRoaXMudW5pdmVyc2UubGVuZ3RoOyBqKyspe1xuXHRcdFx0bGV0IGNlbGwgPSB0aGlzLnVuaXZlcnNlLmNlbGxzW2ldW2pdO1xuXHRcdFx0aGFuZGxlQ2xpY2sodGhpcywgY2VsbCwgcGFnZVgsIHBhZ2VZKTtcblx0XHR9XG5cdH1cbn1cblxuLy8gZ2l2ZSBsaWZlIG9yIGRlYXRoIHRvIHRoZSBjZWxsIGNsaWNrZWQuXG4vLyBOb3RlOiBiZWNhdXNlIGxvb3BDZWxscyBpcyBhIGNhbGxiYWNrIHdoaWNoIGhhcyB0aGUgY2xhc3MgY29udGV4dFxuLy8gYm91bmQgdG8gaXQsIHRoaXMgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHRoZSBjYWxsYmFjayBkb2Vzbid0IGdldCB0aGVcbi8vIGNvbnRleHQgaW1wbGljaXRseSwgc28gSSBtdXN0IHBhc3MgaXQuIERvZXNuJ3QgZmVlbCBjbGVhbi4uLlxuLy8gZnVuY3Rpb24gaGFuZGxlQ2xpY2soc2VsZiwgY2VsbCwgcGFnZVgsIHBhZ2VZKXtcbi8vIFx0aWYgKHBhZ2VYID4gY2VsbC54ICYmIHBhZ2VYIDwgY2VsbC54K3NlbGYudW5pdmVyc2UuY2VsbExlbmd0aCAmJlxuLy8gXHRcdFx0XHRwYWdlWSA+IGNlbGwueSAmJiBwYWdlWSA8IGNlbGwueStzZWxmLnVuaXZlcnNlLmNlbGxIZWlnaHQgKSB7XG4vLyBcdFx0Y2hhbmdlQ2VsbHMoc2VsZiwgY2VsbCk7XG4vLyBcdH1cbi8vIH1cblxuLy8gMSBzdGVwID0gMSBnZW5lcmF0aW9uXG5mdW5jdGlvbiBzdGVwKCl7XG5cblx0XG59XG5cbi8qXG4qXHRwYXNzIHRoZSBjZWxsIHRocm91Z2ggdGhlIDQgcnVsZXMuIFxuXHROb3RlOiBjZWxscyBzaG91bGQgbm90IHVwZGF0ZSBoZXJlLCBzaW5jZSBhbHRlcmluZyAxIGJlZm9yZSB5b3UgY2FuXG5cdGFuYWx5emUgdGhlIG90aGVycyB3aWxsIGNhdXNlIGVycm9uZW91cyBvdXRjb21lcy5cbiovXG5mdW5jdGlvbiB0cmFuc2l0aW9ucyhzZWxmLCBjZWxsLCBjZWxsc1RvQ2hhbmdlKSB7XG5cdHZhciB1bmlMZW5ndGggPSBzZWxmLnVuaXZlcnNlLmxlbmd0aDtcblx0dmFyIHVuaUhlaWdodCA9IHNlbGYudW5pdmVyc2UuaGVpZ2h0O1xuXHR2YXIgbmVpZ2hib3Vyc0FsaXZlID0gMDtcblx0Ly8gR28gdGhyb3VnaCB0aGUgbmVpZ2hib3VycyBvZiBlYWNoIGNlbGwuXG5cdGZvciAobGV0IGk9MDsgaTw4OyBpKyspe1xuXHRcdGxldCBuZWlnaGJvdXJJRCA9IGNlbGwubmVpZ2hib3Vyc1tpXTtcblx0XHRpZiAobmVpZ2hib3VySUQgPj0gdW5pTGVuZ3RoKnVuaUhlaWdodCB8fCBuZWlnaGJvdXJJRCA8MCkgY29udGludWU7XG5cdFx0bGV0IG5laWdoYm91ciA9IGdldENlbGxCeUlkKHNlbGYsIG5laWdoYm91cklEKTtcblx0XHRpZiAobmVpZ2hib3VyLnN0YXRlID09PSAxKSBuZWlnaGJvdXJzQWxpdmUrKztcblx0fVxuXHRpZiAoY2VsbC5zdGF0ZSA9PT0gMSl7XG5cdFx0Ly8gemUgbGlmZSBydWxlc1xuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyAxKSBBbnkgbGl2ZSBjZWxsIHdpdGggZmV3ZXIgdGhhbiB0d28gbGl2ZSBuZWlnaGJvdXJzIGRpZXMsIGFzIFxuXHRcdC8vIGlmIGNhdXNlZCBieSB1bmRlci1wb3B1bGF0aW9uLlxuXHRcdC8vIDIpIEFueSBsaXZlIGNlbGwgd2l0aCB0d28gb3IgdGhyZWUgbGl2ZSBuZWlnaGJvdXJzIGxpdmVzIG9uIHRvIFxuXHRcdC8vIHRoZSBuZXh0IGdlbmVyYXRpb24uXG5cdFx0aWYgKG5laWdoYm91cnNBbGl2ZSA8IDIpIGNlbGxzVG9DaGFuZ2UucHVzaChjZWxsLmlkKTtcblx0XHQvLyAzKSBBbnkgbGl2ZSBjZWxsIHdpdGggbW9yZSB0aGFuIHRocmVlIGxpdmUgbmVpZ2hib3VycyBkaWVzLCBhcyBpZiBcblx0XHQvLyBieSBvdmVyY3Jvd2RpbmcuXG5cdFx0ZWxzZSBpZiAobmVpZ2hib3Vyc0FsaXZlID4gMykgY2VsbHNUb0NoYW5nZS5wdXNoKGNlbGwuaWQpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIDQpIEFueSBkZWFkIGNlbGwgd2l0aCBleGFjdGx5IHRocmVlIGxpdmUgbmVpZ2hib3VycyBiZWNvbWVzIGEgXG5cdFx0Ly8gbGl2ZSBjZWxsLCBhcyBpZiBieSByZXByb2R1Y3Rpb24uXG5cdFx0aWYgKG5laWdoYm91cnNBbGl2ZSA9PT0gMykgY2VsbHNUb0NoYW5nZS5wdXNoKGNlbGwuaWQpO1xuXHR9XG59IFxuXG5mdW5jdGlvbiBjaGFuZ2VDZWxscyhzZWxmLCBjZWxsKSB7XG5cdHNlbGYuY3R4LmZpbGxTdHlsZSA9IChjZWxsLnN0YXRlKSA/ICd3aGl0ZScgOiAnIzMzMyc7XG5cdHNlbGYuY3R4LmZpbGxSZWN0KGNlbGwueCsxLCBjZWxsLnkrMSwgXG5cdFx0XHRzZWxmLnVuaXZlcnNlLmNlbGxMZW5ndGgtMiwgc2VsZi51bml2ZXJzZS5jZWxsSGVpZ2h0LTIpO1xuXHRjZWxsLnN0YXRlID0gKGNlbGwuc3RhdGUpID8gMCA6IDE7XG59XG5cbmZ1bmN0aW9uIGdldENlbGxCeUlkKHNlbGYsIGlkKSB7XG5cdGxldCByb3cgPSBNYXRoLmZsb29yKGlkL3NlbGYudW5pdmVyc2UubGVuZ3RoKTtcblx0bGV0IGNvbHVtbiA9IGlkICUgc2VsZi51bml2ZXJzZS5sZW5ndGg7XG5cdHJldHVybiBzZWxmLnVuaXZlcnNlLmNlbGxzW3Jvd11bY29sdW1uXTtcbn0gXG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyIsImNsYXNzIE9iantcbiAgY29uc3RydWN0b3Iob3B0aW9ucyl7XG4gICAgdGhpcy5HcmlkWCA9IG9wdGlvbnMuR3JpZFg7XG4gICAgdGhpcy5HcmlkWSA9IG9wdGlvbnMuR3JpZFk7XG4gICAgLy8gdGhpcy5zdGF0ZSA9IHN0YXRlOy8vMCBpcyBhIGNvbG9yMCwgMSBpcyBjb2xvcjFcblx0dGhpcy5IX0JMT0NLUyA9IDEzO1xuICAgIHRoaXMuSF9ESU1FTlRJT04gPSAyNTY7XG4gICAgdGhpcy5WX0JMT0NLUyA9IDI1O1xuICAgIHRoaXMuVl9ESU1FTlRJT04gPSA5NjA7XG5cbiAgfVxuXG5cblxuXG4gLy8gIGNvbnZlcnRQaXhlbChjb3VudGVyKSB7XG5cdC8vICAgdmFyIHggPSBjb3VudGVyLkdyaWRYICogKHRoaXMuSF9ESU1FTlRJT04gLyB0aGlzLkhfQkxPQ0tTKTtcblx0Ly8gICBjb25zb2xlLmxvZyhcInhpc1wiK3gpO1xuXHQvLyAgIHZhciBncmlkUGl4ZWwgPSB7XG5cdC8vIFx0ICB4OiBjb3VudGVyLkdyaWRYICogKHRoaXMuSF9ESU1FTlRJT04gLyB0aGlzLkhfQkxPQ0tTKSxcblx0Ly8gXHQgIHk6IChjb3VudGVyLkdyaWRZICsgMSkgKiAodGhpcy5WX0RJTUVOVElPTiAvIHRoaXMuVl9CTE9DS1MpXG5cdC8vICAgfVxuIC8vICAgIHJldHVybiBncmlkUGl4ZWw7XG5cdC8vIH1cblxuXHQgY2xlYXIoY3R4KSB7XG5cdFx0IC8vIGNvbnNvbGUubG9nKHRoaXMuSF9ESU1FTlRJT04gLyB0aGlzLkhfQkxPQ0tTKTtcblx0XHQgLy8gLy8gY29uc29sZS5sb2codGhpcy5HcmlkWCk7XG5cdFx0IC8vIHZhciB4ID0gdGhpcy5HcmlkWCAqICh0aGlzLkhfRElNRU5USU9OIC8gdGhpcy5IX0JMT0NLUyk7XG5cdFx0IC8vIHZhciB5ID0gKHRoaXMuR3JpZFkpICogKHRoaXMuVl9ESU1FTlRJT04gLyB0aGlzLlZfQkxPQ0tTKTtcblx0XHQgLy8gY29uc29sZS5sb2coXCJ4IGlzIFwiKyB4KTtcblx0XHQgLy8gY29uc29sZS5sb2coXCJ5IGlzIFwiICsgeSk7XG5cblx0ICAvLyBjdHguY2xlYXJSZWN0KHgseSwgMyAqICh0aGlzLkhfRElNRU5USU9OIC8gdGhpcy5IX0JMT0NLUyksIDErKHRoaXMuVl9ESU1FTlRJT04gLyB0aGlzLlZfQkxPQ0tTKSk7XG5cdFx0IGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5IX0RJTUVOVElPTiwgIHRoaXMuVl9ESU1FTlRJT04pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqO1xuIiwiaW1wb3J0IE9iaiBmcm9tICcuL09iaic7XG5cbmNsYXNzIFBvcnRhbCBleHRlbmRzIE9iantcbiAgY29uc3RydWN0b3Ioc3RhdGUsb3B0aW9ucyl7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICB9XG59XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvcnRhbDtcbiJdfQ==
