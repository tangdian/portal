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
      var dy = -2;
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
		this.nowptB = 0;
		this.nowptW = 0;
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
			self.checkCollision();
			self.character.draw(self.ctx);
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

			clearInterval(this.intervalID);

			this.intervalID = setInterval(function () {
				self.character.move();
				//console.log ("fuck why");
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
						console.log("chuan black");
						var tempX = _this2.character.currX;
						var tempY = _this2.character.currY;
						// setTimeout(function() {
						// 	console.log(tempX);
						// 	console.log(tempY);
						// 	self.character.clear(self.ctxY);

						// 	console.log("cleared");
						// },100);

						// this.nowptB = (this.nowptB +this.portalsB.length- 1) % this.portalsB.length;
						_this2.nowptB = _this2.nowptB - 2;
						console.log("nowB is : " + _this2.nowptB);

						pixel = convertPixel(_this2.portalsB[_this2.nowptB + 1]);
						_this2.character.currX = pixel.x;
						_this2.character.currY = pixel.y - 11;
						console.log(pixel);
						var imageObj = new Image();
						var ctx = _this2.ctx;
						ctx.drawImage(bChar, self.character.currX, self.character.currY);
					} else if (Math.abs(_this2.character.currY - pixel.y) < 5) {
						console.log("Black is minused!");
						// this.nowptB = (this.nowptB + this.portalsB.length - 1) % this.portalsB.length;
						_this2.nowptB = _this2.nowptB - 1;
						console.log('now PT B is : ' + _this2.nowptB);
					}
				}

				if (_this2.portalsW.length > 0) {
					var pixel = convertPixel(_this2.portalsW[_this2.nowptW]); //in pixel
					// console.log(pixel.x);
					// console.log(this.character.currX);
					if (Math.abs(_this2.character.currY - pixel.y) < 5 && Math.abs(_this2.character.currX - pixel.x) < 5 && _this2.character.state == 1) {
						console.log("chuan white");
						var tempX = _this2.character.currX;
						var tempY = _this2.character.currY;
						// setTimeout(function() {
						// 	console.log(tempX);
						// 	console.log(tempY);
						// 	self.character.clear(self.ctx, tempX, tempY);

						// 	console.log("cleared");
						// }, 100);

						//this.nowptW = (this.nowptW + this.portalsW.length - 1) % this.portalsW.length;
						_this2.nowptW = _this2.nowptW - 2;
						console.log("nowW is : " + _this2.nowptW + 1);

						pixel = convertPixel(_this2.portalsW[_this2.nowptW + 1]);
						_this2.character.currX = pixel.x;
						_this2.character.currY = pixel.y - 11;
						console.log(pixel);
						var imageObj = new Image();
						var ctx = _this2.ctx;
						ctx.drawImage(wChar, self.character.currX, self.character.currY);
					} else if (Math.abs(_this2.character.currY - pixel.y) < 5) {
						console.log("White is minused!");
						// this.nowptW = (this.nowptW + this.portalsW.length - 1) % this.portalsW.length;
						_this2.nowptW = _this2.nowptW - 1;
						console.log('now PT w is : ' + _this2.nowptW);
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
					if (Math.abs(_this2.character.currY - (pixel.y - 30.4)) < 5) {
						// collsionType = "stillE";
						clearInterval(_this2.intervalID);
						_this2.character.rebornCharacter(_this2.ctx);
						console.log("i am executed");
						_this2.nowptB = _this2.portalsB.length - 1;
						_this2.nowptW = _this2.portalsW.length - 1;
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGlhbnRhbmcvcHJvZy9wb3J0YWwvYXBwLmpzIiwiL1VzZXJzL2RpYW50YW5nL3Byb2cvcG9ydGFsL2pzL0NoYXJhY3Rlci5qcyIsIi9Vc2Vycy9kaWFudGFuZy9wcm9nL3BvcnRhbC9qcy9HYW1lLmpzIiwiL1VzZXJzL2RpYW50YW5nL3Byb2cvcG9ydGFsL2pzL09iai5qcyIsIi9Vc2Vycy9kaWFudGFuZy9wcm9nL3BvcnRhbC9qcy9Qb3J0YWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O3NCQ0FpQixXQUFXOzs7OztBQUc1QixJQUFNLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDbEIsSUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDOztBQUVuQixJQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDM0IsSUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDOztBQUUzQixJQUFNLFNBQVMsR0FBRzs7QUFFakIsZ0JBQWUsRUFBRSxFQUFFO0FBQ25CLGdCQUFlLEVBQUMsRUFBRTtBQUNsQixZQUFXLEVBQUUsR0FBRyxHQUFDLGVBQWU7QUFDaEMsWUFBVyxFQUFFLEdBQUcsR0FBQyxlQUFlOztDQUVoQyxDQUFBOztBQUVELElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDakQsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFbEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyx3QkFBUzs7O0FBR3JCLE9BQU0sRUFBTixNQUFNO0FBQ04sUUFBTyxFQUFFLEdBQUc7QUFDWixVQUFTLEVBQVQsU0FBUztBQUNULE1BQUssRUFBRSxFQUFFO0FBQ1QsS0FBSSxFQUFFLENBQUMsYUFBYSxFQUNuQixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEs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QVcsRUFBRyxNQUFLLFdBQVcsQ0FBQyxDQUFDO0FBQ3pELFNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFLLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDNUMsU0FBSSxDQUFDLEdBQUcsTUFBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQzdCLFNBQUksQ0FBQyxHQUFHLE1BQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUM3QixRQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQzs7O0tBSW5EOztBQUdELFNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFLLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDOUMsU0FBSSxDQUFDLEdBQUcsTUFBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQy9CLFNBQUksQ0FBQyxHQUFHLE1BQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUMvQixRQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztLQUMvQzs7QUFFRCxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBSyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzlDLFNBQUksQ0FBQyxHQUFHLE1BQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUMvQixTQUFJLENBQUMsR0FBRyxNQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDL0IsUUFBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7S0FDL0M7O0FBRUQsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQUssSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUMxQyxTQUFJLENBQUMsR0FBRyxNQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDM0IsU0FBSSxDQUFDLEdBQUcsTUFBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQzNCLFFBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0tBQ2hEOztBQUVELFNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFLLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDMUMsU0FBSSxDQUFDLEdBQUcsTUFBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQzNCLFNBQUksQ0FBQyxHQUFHLE1BQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUMzQixRQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztLQUM5Qzs7QUFJRCxRQUFJLE1BQUssU0FBUyxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7QUFDOUIsUUFBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBSyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQUssU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2pFLE1BQ0k7QUFDSixRQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxNQUFLLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBSyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakU7SUFTRCxFQUFDLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O1NBbkNHLEdBQUc7OztBQXNDVCxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7OztvQkN0Q0wsT0FBTzs7OztJQUVqQixNQUFNO1lBQU4sTUFBTTs7QUFDQyxXQURQLE1BQU0sQ0FDRSxLQUFLLEVBQUMsT0FBTyxFQUFDOzBCQUR0QixNQUFNOztBQUVSLCtCQUZFLE1BQU0sNkNBRUYsT0FBTyxFQUFFO0FBQ2YsUUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7R0FDcEI7O1NBSkcsTUFBTTs7O0FBU1osTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9qcy9HYW1lJztcblxuLy8gaW4gcGl4ZWxzXG5jb25zdCBXSURUSCA9IDI1NjtcbmNvbnN0IEhFSUdIVCA9IDk2MDtcbi8vIGluIGNlbGwgdW5pdHNcbmNvbnN0IFVOSVZFUlNFX0xFTkdUSCA9IDEzO1xuY29uc3QgVU5JVkVSU0VfSEVJR0hUID0gMjU7XG5cbmNvbnN0IERJTUVOU0lPTiA9IHtcblxuXHRVTklWRVJTRV9MRU5HVEg6IDEzLFxuXHRVTklWRVJTRV9IRUlHSFQ6MjUsXG5cdENFTExfTEVOR1RIOiAyNTYvVU5JVkVSU0VfTEVOR1RILFxuXHRDRUxMX0hFSUdIVDogOTYwL1VOSVZFUlNFX0hFSUdIVFxuXG59XG5cbnZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdmVyc2UnKTtcbnZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxudmFyIGdhbWVzID0gW25ldyBHYW1lKHtcblx0Ly8gZW5oYW5jZWQgb2JqZWN0IGxpdGVyYWxzXG5cdC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuXHRjYW52YXMsXG5cdGNvbnRleHQ6IGN0eCxcblx0RElNRU5TSU9OLFxuXHRzcGVlZDogMjAsXG5cdHBsYW46IFtcInh4eCB4eHggeHh4XCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwieHh4IHh4eCBra2tcIixcblx0XHRcImtrayBra2sgcHRCXCIsXG5cdFx0XCJra2sgeHh4IHB0QlwiLFxuXHRcdFwia2trIHB0QiBra2tcIixcblx0XHRcImtrayB4eHggcHRXXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwieHh4IHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IHB0V1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInB0VyB4eHgga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwieHh4IHh4eCBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IHB0QlwiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBwdEIga2trXCJdXG59KSwgbmV3IEdhbWUoe1xuXHQvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcblx0Ly8gJ2NhbnZhcywnIGlzIHRoZSBzYW1lIGFzICdjYW52YXM6IGNhbnZhcywnXG5cdGNhbnZhcyxcblx0Y29udGV4dDogY3R4LFxuXHRESU1FTlNJT04sXG5cdHNwZWVkOiAyMCxcblx0cGxhbjogW1wia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBpdHMga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0QiBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayB4eHgga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0QiBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCJdfSksXG5uZXcgR2FtZSh7XG5cdC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuXHQvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcblx0Y2FudmFzLFxuXHRjb250ZXh0OiBjdHgsXG5cdERJTUVOU0lPTixcblx0c3BlZWQ6IDIwLFxuXHRwbGFuOiBbXCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGl0cyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRXIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRXIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIl1cbn0pLFxubmV3IEdhbWUoe1xuXHQvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcblx0Ly8gJ2NhbnZhcywnIGlzIHRoZSBzYW1lIGFzICdjYW52YXM6IGNhbnZhcywnXG5cdGNhbnZhcyxcblx0Y29udGV4dDogY3R4LFxuXHRESU1FTlNJT04sXG5cdHNwZWVkOiAyMCxcblx0cGxhbjogW1wia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBpdHMga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHh4eCBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXVxufSksXG5uZXcgR2FtZSh7XG5cdC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuXHQvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcblx0Y2FudmFzLFxuXHRjb250ZXh0OiBjdHgsXG5cdERJTUVOU0lPTixcblx0c3BlZWQ6IDIwLFxuXHRwbGFuOiBbXCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcIml0cyBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IGtra1wiLFxuXHRcdFwicHRXIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayB4eHgga2trXCIsXG5cdFx0XCJwdFcga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBwdFcga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIl1cbn0pLFxubmV3IEdhbWUoe1xuXHQvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcblx0Ly8gJ2NhbnZhcywnIGlzIHRoZSBzYW1lIGFzICdjYW52YXM6IGNhbnZhcywnXG5cdGNhbnZhcyxcblx0Y29udGV4dDogY3R4LFxuXHRESU1FTlNJT04sXG5cdHNwZWVkOiAyMCxcblx0cGxhbjogW1wia2trIGtrayBra2tcIixcblx0XHRcIml0cyBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwicHRXIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBwdFcga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInh4eCBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwicHRXIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRXIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRXIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCJdXG59KSxcbm5ldyBHYW1lKHtcblx0Ly8gZW5oYW5jZWQgb2JqZWN0IGxpdGVyYWxzXG5cdC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuXHRjYW52YXMsXG5cdGNvbnRleHQ6IGN0eCxcblx0RElNRU5TSU9OLFxuXHRzcGVlZDogMjAsXG5cdHBsYW46IFtcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBpdHMga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBwdEIga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRCIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiXVxufSksXG5uZXcgR2FtZSh7XG5cdC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuXHQvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcblx0Y2FudmFzLFxuXHRjb250ZXh0OiBjdHgsXG5cdERJTUVOU0lPTixcblx0c3BlZWQ6IDIwLFxuXHRwbGFuOiBbXCJra2sgaXRzIGtra1wiLFxuXHRcdFwia2trIHB0QiBra2tcIixcblx0XHRcImtrayBra2sgcHRXXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sgcHRCXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sgcHRXXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayB4eHhcIixcblx0XHRcImtrayBra2sgcHRXXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIHB0V1wiLFxuXHRcdFwia2trIHh4eCBra2tcIixcblx0XHRcImtrayBwdFcga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiXVxufSksXG5cbm5ldyBHYW1lKHtcblx0Ly8gZW5oYW5jZWQgb2JqZWN0IGxpdGVyYWxzXG5cdC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuXHRjYW52YXMsXG5cdGNvbnRleHQ6IGN0eCxcblx0RElNRU5TSU9OLFxuXHRzcGVlZDogMjAsXG5cdHBsYW46IFtcImtrayBpdHMga2trXCIsXG5cdFx0XCJra2sgcHRCIGtra1wiLFxuXHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBwdEJcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIHh4eFwiLFxuXHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIHB0V1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sgcHRXXCIsXG5cdFx0XCJra2sgeHh4IGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRXIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCJdXG59KSxcbm5ldyBHYW1lKHtcblx0Ly8gZW5oYW5jZWQgb2JqZWN0IGxpdGVyYWxzXG5cdC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuXHRjYW52YXMsXG5cdGNvbnRleHQ6IGN0eCxcblx0RElNRU5TSU9OLFxuXHRzcGVlZDogMjAsXG5cdHBsYW46IFtcIml0cyBra2sga2trXCIsXG5cdFx0XCJwdEIga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBwdEJcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IHB0V1wiLFxuXHRcdFwia2trIHB0QiBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRXIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInh4eCB4eHgga2trXCIsXG5cdFx0XCJwdEIga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInB0VyBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInB0QiBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRCIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCJdXG59KSxcbm5ldyBHYW1lKHtcblx0Ly8gZW5oYW5jZWQgb2JqZWN0IGxpdGVyYWxzXG5cdC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuXHRjYW52YXMsXG5cdGNvbnRleHQ6IGN0eCxcblx0RElNRU5TSU9OLFxuXHRzcGVlZDogMjAsXG5cdHBsYW46IFtcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBwdFcga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBpdHMga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBpdHIga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiXVxufSksXG5cdG5ldyBHYW1lKHtcblx0XHQvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcblx0XHQvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcblx0XHRjYW52YXMsXG5cdFx0Y29udGV4dDogY3R4LFxuXHRcdERJTUVOU0lPTixcblx0XHRzcGVlZDogMjAsXG5cdFx0cGxhbjogW1wia2trIHB0VyBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIGl0cyBpdHJcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIHh4eCBwdEJcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcdFwieHh4IGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwicHRCIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwicHRXIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwicHRCIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIl1cblx0fSksXG5cdG5ldyBHYW1lKHtcblx0XHQvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcblx0XHQvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcblx0XHRjYW52YXMsXG5cdFx0Y29udGV4dDogY3R4LFxuXHRcdERJTUVOU0lPTixcblx0XHRzcGVlZDogMjAsXG5cdFx0cGxhbjogW1wia2trIHB0VyBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIGl0cyBpdHJcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIHh4eCBwdEJcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcdFwieHh4IGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwicHRCIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwicHRXIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwicHRCIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIixcblx0XHRcdFwia2trIGtrayBra2tcIl1cblx0fSksXG5cblxuXG5cbl07XG5cblxuXG5mdW5jdGlvbiBjaG9vc2VHYW1lKG51bSkge1xuXHQvLyBnYW1lc1tudW1dLmRyYXdHcmlkKCk7XG5cdGdhbWVzW251bV0uaW5pU2V0VXAoKTtcblx0Ly8gZ2FtZXNbbnVtXS5kcmF3KCk7XG5cdC8vIGdhbWVzW251bV0ucGxheSgpO1xufVxuXG5cblxuY2hvb3NlR2FtZSg5KTtcblxuIiwiaW1wb3J0IE9iaiBmcm9tICcuL09iaic7XG5cbmNsYXNzIENoYXJhY3RlciBleHRlbmRzIE9iantcbiAgY29uc3RydWN0b3Iob3B0aW9ucyl7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgdGhpcy5zdGF0ZSA9IG9wdGlvbnMuc3RhdGU7XG4gICAgdGhpcy5jdXJyWSA9IHRoaXMuY29udmVydFBpeGVsKG9wdGlvbnMpLnk7Ly9pbiBwaXhlbDsgWSBERUNSRUFTRVNcbiAgICB0aGlzLmN1cnJYID0gdGhpcy5jb252ZXJ0UGl4ZWwob3B0aW9ucykueDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gY29udmVydE9wdGlvbnNUb1BpeGVsKG9wdGlvbnMpe1xuICAvLyAgIHZhciBIX0JMT0NLUyA9IDE0O1xuICAvLyAgIHZhciBIX0RJTUVOVElPTiA9IDI1NjtcbiAgLy8gICB2YXIgVl9CTE9DS1MgPSAyNTtcbiAgLy8gICB2YXIgVl9ESU1FTlRJT04gPSA5NjA7XG4gIC8vICAgdmFyIGdyaWRQaXhlbC54ID0gb3B0aW9ucy54ICogKEhfRElNRU5USU9OIC8gSF9CTE9DS1MpO1xuICAvLyAgIHZhciBncmlkUGl4ZWwueSA9IChvcHRpb25zLnkrMSkgKiAoVl9ESU1FTlRJT04gLyBWX0JMT0NLUyk7XG4gIC8vICAgcmV0dXJuIGdyaWRQaXhlbDtcbiAgLy8gfVxuXG4gaW5pdGlhbGl6ZUNoYXJhY3RlcihjdHgpe1xuIC8vb25seSBhYmxlIHRvIGFjY2VzcyAndGhpcycgb24gdGhlIG91dHNpZGVcbiBcbiAgIFxuICAgICB2YXIgeCA9IHRoaXMuY3VyclggO1xuICAgICB2YXIgeSA9IHRoaXMuY3VyclkgO1xuICAgICB2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcbiAgICAgaW1hZ2VPYmoub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZU9iaiwgeCwgeSk7XG4gICAgIH07XG4gICAgIGltYWdlT2JqLnNyYyA9IFwiLi9pbWFnZXMvQmxhY2syLnBuZ1wiO1xuXG4gICAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgLy8gY3R4LmFyYygxMjAsIDkwMCwgMTcsIDAsIE1hdGguUEkqMiwgdHJ1ZSk7Ly9jaGFyYWN0ZXIgc2l6ZVxuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICAvLyBjdHguZmlsbCgpO1xuICAgIC8vIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIHJlYm9ybkNoYXJhY3RlciAoY3R4KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBieCA9IHRoaXMuY3Vyclg7XG4gICAgdmFyIGJ5ID0gdGhpcy5jdXJyWTtcbiAgXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuY2xlYXIoY3R4KTtcbiAgICAgIHZhciB4ID0gc2VsZi5jb252ZXJ0UGl4ZWwoc2VsZi5vcHRpb25zKS54O1xuICAgICAgdmFyIHkgPSBzZWxmLmNvbnZlcnRQaXhlbChzZWxmLm9wdGlvbnMpLnk7XG4gICAgICBzZWxmLmN1cnJYID0geDtcbiAgICAgIHNlbGYuY3VyclkgPSB5O1xuICAgICAgdmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWFnZU9iai5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlT2JqLCB4LCB5KTtcblxuICAgICAgfTtcbiAgICAgIGltYWdlT2JqLnNyYyA9IFwiLi9pbWFnZXMvQmxhY2syLnBuZ1wiO1xuICAgIH0sIDUwKTtcbiAgfVxuXG4gIGxvZygpIHtcbiAgICBjb25zb2xlLmxvZyhcImRvaW5nXCIpO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICB2YXIgZHkgPSAtMjtcbiAgICB0aGlzLmN1cnJZICs9IGR5O1xuICB9XG5cbiAgIGRyYXcoY3R4KSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImRyYXdpbmcuLlwiKTtcbiAgICAvLyB0aGlzLmNsZWFyKGN0eCx0aGlzLmN1cnJYLHRoaXMuY3VyclkpO1xuICAgIFxuXG5cbiAgICB2YXIgeCA9IHRoaXMuY3Vyclg7XG4gICAgdmFyIHkgPSB0aGlzLmN1cnJZO1xuICAgIHZhciBpbWFnZU9iakIgPSBuZXcgSW1hZ2UoKTtcbiAgICB2YXIgaW1hZ2VPYmpXID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2VPYmpCLnNyYyA9IFwiLi9pbWFnZXMvQmxhY2syLnBuZ1wiO1xuICAgIGltYWdlT2JqVy5zcmMgPSBcIi4vaW1hZ2VzL1doaXRlMi5wbmdcIjtcbiAgICBpbWFnZU9iakIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBpZih0aGlzLnN0YXRlID09IDApIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcywgeCwgeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LDIwKTtcbiAgICAgIH1cbiAgICBpbWFnZU9ialcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBpZih0aGlzLnN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcywgeCwgeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LDIwKTtcbiAgICAgIH1cbiAgICBcbiAgICAgIGltYWdlT2JqQi5zcmMgPSBcIi4vaW1hZ2VzL0JsYWNrMi5wbmdcIjtcbiAgICAgIGltYWdlT2JqVy5zcmMgPSBcIi4vaW1hZ2VzL1doaXRlMi5wbmdcIjtcbiAgICB9XG5cblxuXG4gIC8vIHNldEludGVydmFsKGRyYXcgLDIwKTsvL2NoZWNrIGV2ZXJ5IDIwbXNcblxuICAgY29udmVydFBpeGVsKGNvdW50ZXIpe1xuICAgIC8vIHZhciBIX0JMT0NLUyA9IDE0O1xuICAgIC8vIHZhciBIX0RJTUVOVElPTiA9IDI1NjtcbiAgICAvLyB2YXIgVl9CTE9DS1MgPSAyNTtcbiAgICAvLyB2YXIgVl9ESU1FTlRJT04gPSA5NjA7XG4gICAgdmFyIGdyaWRQaXhlbCA9IHtcbiAgICAgIHg6IGNvdW50ZXIuR3JpZFggKiAodGhpcy5IX0RJTUVOVElPTiAvIHRoaXMuSF9CTE9DS1MpLFxuICAgICAgeTogKGNvdW50ZXIuR3JpZFkpICogKHRoaXMuVl9ESU1FTlRJT04gLyB0aGlzLlZfQkxPQ0tTKVxuICAgIH1cbiAgICByZXR1cm4gZ3JpZFBpeGVsO1xuICB9XG5cblxuXG5cbiAgIGNoYW5nZVN0YXRlKGUpe1xuICAgIC8vcmVnaXN0ZXIgYSBldmVudCBsaXN0ZW5lclxuICAgIHZhciBrZXkgPSBlLmtleUNvZGUgPyBlLmtleUNvZGUgOiBlLndoaWNoO1xuICAgIGNvbnNvbGUubG9nKFwic3RhdGUgaXNcIit0aGlzLnN0YXRlKTtcbiAgICBpZiAoa2V5ID09IDMyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIllvdSBQcmVzc2VkIHRoZSBma2luZyBTcGFjZVwiKTtcblxuICAgICAgc3dpdGNoKHRoaXMuc3RhdGUpe1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgdGhpcy5zdGF0ZSsrO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2hpdGVcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0aGlzLnN0YXRlLS07XG4gICAgICAgICAgY29uc29sZS5sb2coXCJCbGFja1wiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImZ1Y2tcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyO1xuIiwiaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlcic7XG5pbXBvcnQgT2JqIGZyb20gJy4vT2JqJztcbmltcG9ydCBQb3J0YWwgZnJvbSAnLi9Qb3J0YWwnO1xuLy8gaW1wb3J0IEVuZW15IGZyb20gLi9DaGFyYWN0ZXIuanM7XG5cblxuY2xhc3MgR2FtZSB7XG5cdC8vIHNldCB1cCBpbnN0YW5jZSB2YXJpYWJsZXNcblx0Y29uc3RydWN0b3Iob3B0aW9ucyl7XG5cdFx0dGhpcy5jYW52YXMgPSBvcHRpb25zLmNhbnZhcztcblx0XHR0aGlzLmN0eCA9IG9wdGlvbnMuY29udGV4dDtcblx0XHR0aGlzLkRJTUVOU0lPTiA9IG9wdGlvbnMuRElNRU5TSU9OO1xuXHRcdHRoaXMudW5pdmVyc2VFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXZlcnNlJyk7XG5cdFx0dGhpcy5zcGVlZCA9IG9wdGlvbnMuc3BlZWQ7XG5cdFx0dGhpcy5wbGFuID0gb3B0aW9ucy5wbGFuO1xuXHRcdHRoaXMuR3JpZCA9IFtdO1xuXHRcdHRoaXMucG9ydGFsc0IgPSBbXTtcblx0XHR0aGlzLnBvcnRhbHNXID0gW107XG5cdFx0dGhpcy5pdHJzID0gW107XG5cdFx0dGhpcy5pdHNzID0gW107XG5cdFx0dGhpcy5tb3ZpbmdFID0gW107XG5cdFx0dGhpcy5zdGlsbEUgPSBbXTtcblx0XHR0aGlzLmNoYXJhY3RlciA9IG5ldyBDaGFyYWN0ZXIoe3N0YXRlOjAsR3JpZFg6NSxHcmlkWToyM30pO1xuXHRcdHRoaXMucG9pbnQgPSAwO1xuXHRcdHRoaXMud2luID0gZmFsc2U7XG5cdFx0dGhpcy5IX0JMT0NLUyA9IDEzO1xuXHRcdHRoaXMuSF9ESU1FTlRJT04gPSAyNTY7XG5cdFx0dGhpcy5IID0gdGhpcy5IX0RJTUVOU0lPTiAvIHRoaXMuSF9CTE9DS1M7XG5cdFx0dGhpcy5WX0JMT0NLUyA9IDI1O1xuXHRcdHRoaXMuVl9ESU1FTlRJT04gPSA5NjA7XG5cdFx0dGhpcy5WID0gdGhpcy5WX0RJTUVOU0lPTiAvIHRoaXMuVl9CTE9DS1M7XG5cdFx0dGhpcy5pbnRlcnZhbElEID0gMDtcblx0XHR0aGlzLm5vd3B0QiA9IDA7XG5cdFx0dGhpcy5ub3dwdFcgPSAwO1xuXG5cdH1cblxuXHQvLyBpbml0aWFsIHNldCB1cFxuXHRpbmlTZXRVcCgpIHtcblx0XHQvLyAvLyBOb3RlOiB1c2luZyBiaW5kIHRvIHBhc3MgdGhlIGNsYXNzJyBjb250ZXh0IHRvIHRoZSBjYWxsYmFja3Ncblx0XHQvLyAvLyBub3Qgc3VyZSBpZiB0aGlzIGNhbiBiZSBpbXByb3ZlZC5cblx0XHQvLyAvLyB0aGlzLnVuaXZlcnNlRWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvb3BDZWxscy5iaW5kdGhpcygpKTtcblx0XHQvLyAvLyB3aGVuIHVzZXIgY2xpY2ssIHN0YXJ0IHRoZSBnYW1lXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0Jylcblx0XHRcdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzZWxmLnBsYXkoKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnBsYW4pO1xuXHRcdFx0dGhpcy5wYXJzZSh0aGlzLnBsYW4pO1xuXG5cdFx0XHR0aGlzLmNoYXJhY3Rlci5pbml0aWFsaXplQ2hhcmFjdGVyKHRoaXMuY3R4KTtcblx0XHRcdHNlbGYuZHJhdygpO1xuXHRcdFx0c2VsZi5jaGVja0NvbGxpc2lvbigpO1xuXHRcdFx0c2VsZi5jaGFyYWN0ZXIuZHJhdyhzZWxmLmN0eCk7XG5cdFx0XHR0aGlzLm5vd3B0QiA9IHRoaXMucG9ydGFsc0IubGVuZ3RoLTE7XG5cdFx0XHR0aGlzLm5vd3B0VyA9IHRoaXMucG9ydGFsc1cubGVuZ3RoLTE7XG5cdH1cblxuXG5cblx0cGFyc2UocGxhbikge1xuXHRcdC8vIGxldCBncmlkID0gW107XG5cblx0XHRmb3IodmFyIGk9MDtpPHBsYW4ubGVuZ3RoO2krKykge1xuXHRcdFx0bGV0IGFycmF5ID0gcGxhbltpXS5zcGxpdChcIiBcIik7XG5cblx0XG5cdFx0XHRmb3IodmFyIGo9MDtqPGFycmF5Lmxlbmd0aDtqKyspIHtcblx0XHRcdFx0aWYoYXJyYXlbal0gPT0gXCJ4eHhcIikge1xuXHRcdFx0XHRcdHRoaXMuc3RpbGxFLnB1c2gobmV3IE9iaih7IEdyaWRYOiAxKzMqaitqLCBHcmlkWTogaSB9KSk7XG5cdFx0XHRcdFx0XG5cblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0ZWxzZSBpZihhcnJheVtqXSA9PSBcIm1vZVwiKSB7XG5cdFx0XHRcdFx0dGhpcy5FbmVtaWVzLnB1c2gobmV3IG1vdmluZ0Uoe30pKTtcblxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYoYXJyYXlbal0gPT0gXCJwdFdcIikge1xuXHRcdFx0XHRcdHRoaXMucG9ydGFsc1cucHVzaChuZXcgUG9ydGFsKDEsIHsgR3JpZFg6IDErMypqK2osIEdyaWRZOml9KSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlbHNlIGlmKGFycmF5W2pdID09IFwicHRCXCIpIHtcblx0XHRcdFx0XHR0aGlzLnBvcnRhbHNCLnB1c2gobmV3IFBvcnRhbCAoMCwgeyBHcmlkWDogMSszKmoraiwgR3JpZFk6aX0pKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmIChhcnJheVtqXSA9PSBcIml0clwiKSB7XG5cdFx0XHRcdFx0dGhpcy5pdHJzLnB1c2gobmV3IE9iaih7IEdyaWRYOiAxICsgMyAqIGogKyBqLCBHcmlkWTogaSB9KSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoYXJyYXlbal0gPT0gXCJpdHNcIikge1xuXHRcdFx0XHRcdHRoaXMuaXRzcy5wdXNoKG5ldyBPYmooeyBHcmlkWDogMSArIDMgKiBqICsgaiwgR3JpZFk6IGkgfSkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFxuXHRcdFx0fVxuXHRcdFxuXHRcdH1cblxuXHR9XG5cblxuXG5cblx0cGxheSgpe1xuXHRcdC8vIHJlbW92ZSBnb2QgbW9kZVxuXHRcdC8vIHRoaXMudW5pdmVyc2VFbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9vcENlbGxzKTtcblx0XHQvLyBnYW1lIGxvb3Bcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnNwZWVkKTtcblxuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBmdW5jdGlvbihlKXtcblx0XHRcdCAgc2VsZi5jaGFyYWN0ZXIuY2hhbmdlU3RhdGUoZSk7XG5cdFx0fSk7XG5cblx0XHRjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJRCk7XG5cblx0XHR0aGlzLmludGVydmFsSUQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRcdHNlbGYuY2hhcmFjdGVyLm1vdmUoKTsgXG5cdFx0XHQvL2NvbnNvbGUubG9nIChcImZ1Y2sgd2h5XCIpO1xuXHRcdFx0XG5cdFx0fSwgMjApO1xuXHRcblx0XHQvLyBzZXRJbnRlcnZhbCh0aGlzLmNoYXJhY3Rlci5jaGVja0NvbGxpc2lvbih0aGlzLnBvcnRhbHMsdGhpcy5lbmVtaWVzLHRoaXMuaXRlbXMpLCB0aGlzLnNwZWVkKTtcblx0XHQvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmNoYXJhY3Rlci5jaGFuZ2VTdGF0ZSlcblxuXHR9XG5cblx0bG9nZ2luZygpIHtcblx0XHRjb25zb2xlLmxvZyhcImxvZ2dpbmdcIik7XG5cdH1cblxuXHQvLyBkcmF3IGdyaWRcblx0ZHJhd0dyaWQoKSB7XG5cdFx0dGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnIzc3Nyc7XG5cdFx0dGhpcy5jdHgubGluZVdpZHRoID0gMTtcblx0XHQvLyB2ZXJ0aWNhbCBsaW5lc1xuXHRcdGZvciAobGV0IGkgPSAxOyBpPHRoaXMuRElNRU5TSU9OLlVOSVZFUlNFX0xFTkdUSDsgaSsrKXtcblx0XHRcdHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuXHRcdFx0dGhpcy5jdHgubW92ZVRvKHRoaXMuRElNRU5TSU9OLkNFTExfTEVOR1RIKmksMCk7XG5cdFx0XHR0aGlzLmN0eC5saW5lVG8odGhpcy5ESU1FTlNJT04uQ0VMTF9MRU5HVEgqaSwgXG5cdFx0XHRcdHRoaXMuRElNRU5TSU9OLlVOSVZFUlNFX0hFSUdIVCp0aGlzLkRJTUVOU0lPTi5DRUxMX0hFSUdIVCk7XG5cdFx0XHR0aGlzLmN0eC5zdHJva2UoKTtcblx0XHR9XG5cdFx0Ly8gaG9yaXpvbnRhbCBsaW5lc1xuXHRcdGZvciAobGV0IGkgPSAxOyBpPHRoaXMuRElNRU5TSU9OLlVOSVZFUlNFX0hFSUdIVDsgaSsrKXtcblx0XHRcdHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuXHRcdFx0dGhpcy5jdHgubW92ZVRvKDAsdGhpcy5ESU1FTlNJT04uQ0VMTF9IRUlHSFQqaSk7XG5cdFx0XHR0aGlzLmN0eC5saW5lVG8odGhpcy5ESU1FTlNJT04uVU5JVkVSU0VfTEVOR1RIKnRoaXMuRElNRU5TSU9OLkNFTExfTEVOR1RILCBcblx0XHRcdFx0dGhpcy5ESU1FTlNJT04uQ0VMTF9IRUlHSFQqaSk7XG5cdFx0XHR0aGlzLmN0eC5zdHJva2UoKTtcblx0XHR9XG5cdH1cblxuXHRkcmF3KCkge1xuXHRcdHZhciBjdHggPSB0aGlzLmN0eDtcblx0XHR2YXIgeHNoaWZ0ID0gdGhpcy5ESU1FTlNJT04uQ0VMTF9MRU5HVEg7XG5cdFx0dmFyIHlzaGlmdCA9IHRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucG9ydGFsc0IpO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucG9ydGFsc1cpO1xuXHRcdHZhciBvYnN0YWNsZUltZyA9IG5ldyBJbWFnZSgpO1xuXHRcdG9ic3RhY2xlSW1nLnNyYyA9IFwiLi9pbWFnZXMvT2JzdGFjbGUucG5nXCI7XG5cdFx0dmFyIHBvdEJJbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRwb3RCSW1nLnNyYyA9IFwiLi9pbWFnZXMvcG90Qi5wbmdcIjtcblx0XHR2YXIgcG90V0ltZyA9IG5ldyBJbWFnZSgpO1xuXHRcdHBvdFdJbWcuc3JjID0gXCIuL2ltYWdlcy9wb3RXLnBuZ1wiO1xuXHRcdHZhciBzdGFyMkltZyA9IG5ldyBJbWFnZSgpO1xuXHRcdHN0YXIySW1nLnNyYyA9IFwiLi9pbWFnZXMvU3RhcjIucG5nXCI7XG5cdFx0dmFyIHJldkltZyA9IG5ldyBJbWFnZSgpO1xuXHRcdHJldkltZy5zcmMgPSBcIi4vaW1hZ2VzL3JldmVyc2UucG5nXCI7XG5cdFx0dmFyIGJDaGFyID0gbmV3IEltYWdlKCk7XG5cdCAgICB2YXIgd0NoYXIgPSBuZXcgSW1hZ2UoKTtcblx0ICAgIGJDaGFyLnNyYyA9IFwiLi9pbWFnZXMvQmxhY2syLnBuZ1wiO1xuXHQgICAgd0NoYXIuc3JjID0gXCIuL2ltYWdlcy9XaGl0ZTIucG5nXCI7XG5cdFx0c2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0Y3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLkhfRElNRU5USU9OLCAgdGhpcy5WX0RJTUVOVElPTik7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RpbGxFLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCB4ID0gdGhpcy5zdGlsbEVbaV0uR3JpZFg7XG5cdFx0XHRcdGxldCB5ID0gdGhpcy5zdGlsbEVbaV0uR3JpZFk7XG5cdFx0XHRcdGN0eC5kcmF3SW1hZ2Uob2JzdGFjbGVJbWcsIHggKiB4c2hpZnQsIHkgKiB5c2hpZnQpO1xuXG5cdFx0XHRcdC8vIHRoaXMuY3R4LmZpbGxSZWN0KCwsMyp0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCx0aGlzLkRJTUVOU0lPTi5DRUxMX0hFSUdIVCk7XG5cblx0XHRcdH1cblxuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9ydGFsc0IubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bGV0IHggPSB0aGlzLnBvcnRhbHNCW2ldLkdyaWRYO1xuXHRcdFx0XHRsZXQgeSA9IHRoaXMucG9ydGFsc0JbaV0uR3JpZFk7XHRcdFxuXHRcdFx0XHRjdHguZHJhd0ltYWdlKHBvdEJJbWcsIHggKiB4c2hpZnQsIHkgKiB5c2hpZnQpO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9ydGFsc1cubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bGV0IHggPSB0aGlzLnBvcnRhbHNXW2ldLkdyaWRYO1xuXHRcdFx0XHRsZXQgeSA9IHRoaXMucG9ydGFsc1dbaV0uR3JpZFk7XHRcdFxuXHRcdFx0XHRjdHguZHJhd0ltYWdlKHBvdFdJbWcsIHggKiB4c2hpZnQsIHkgKiB5c2hpZnQpO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRzcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgeCA9IHRoaXMuaXRzc1tpXS5HcmlkWDtcblx0XHRcdFx0bGV0IHkgPSB0aGlzLml0c3NbaV0uR3JpZFk7XHRcdFxuXHRcdFx0XHRjdHguZHJhd0ltYWdlKHN0YXIySW1nLCB4ICogeHNoaWZ0LCB5ICogeXNoaWZ0KTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0cnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bGV0IHggPSB0aGlzLml0cnNbaV0uR3JpZFg7XG5cdFx0XHRcdGxldCB5ID0gdGhpcy5pdHJzW2ldLkdyaWRZO1x0XHRcblx0XHRcdFx0Y3R4LmRyYXdJbWFnZShyZXZJbWcsIHggKiB4c2hpZnQsIHkgKiB5c2hpZnQpO1xuXHRcdFx0fVxuXHRcdFx0XG5cblxuXHRcdFx0aWYgKHRoaXMuY2hhcmFjdGVyLnN0YXRlID09IDApIHtcblx0XHRcdFx0Y3R4LmRyYXdJbWFnZShiQ2hhciwgdGhpcy5jaGFyYWN0ZXIuY3VyclgsIHRoaXMuY2hhcmFjdGVyLmN1cnJZKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRjdHguZHJhd0ltYWdlKHdDaGFyLCB0aGlzLmNoYXJhY3Rlci5jdXJyWCwgdGhpcy5jaGFyYWN0ZXIuY3VyclkpO1xuXHRcdFx0fVxuXG5cblxuXG5cblxuXG5cblx0XHR9LDIwKTtcblx0XHRcblx0XHQvLyAvL2RyYXcgc3RhdGljIHN0dWZmXHRcblx0XHQvLyBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RpbGxFLmxlbmd0aDsgaSsrKSB7XG5cdFx0Ly8gXHRsZXQgeCA9IHRoaXMuc3RpbGxFW2ldLkdyaWRYO1xuXHRcdC8vIFx0bGV0IHkgPSB0aGlzLnN0aWxsRVtpXS5HcmlkWTtcblxuXHRcdC8vIFx0dmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG5cdFx0Ly8gXHRpbWFnZU9iai5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuXHRcdC8vIFx0XHRzZXRJbnRlcnZhbCAoKCkgPT4gY3R4LmRyYXdJbWFnZSh0aGlzLCB4ICogeHNoaWZ0LCB5ICogeXNoaWZ0KSwyMCk7XG5cblx0XHQvLyBcdH07XG5cdFx0Ly8gXHRpbWFnZU9iai5zcmMgPSBcIi4vaW1hZ2VzL09ic3RhY2xlLnBuZ1wiO1xuXG5cdFx0Ly8gXHQvLyB0aGlzLmN0eC5maWxsUmVjdCgsLDMqdGhpcy5ESU1FTlNJT04uQ0VMTF9MRU5HVEgsdGhpcy5ESU1FTlNJT04uQ0VMTF9IRUlHSFQpO1xuXG5cdFx0Ly8gfVxuXG5cblx0XHQvLyBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9ydGFsc0IubGVuZ3RoOyBpKyspIHtcblx0XHQvLyBcdGxldCB4ID0gdGhpcy5wb3J0YWxzQltpXS5HcmlkWDtcblx0XHQvLyBcdGxldCB5ID0gdGhpcy5wb3J0YWxzQltpXS5HcmlkWTtcblx0XHRcdFxuXHRcdC8vIFx0XHR2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcblx0XHQvLyBcdFx0aW1hZ2VPYmoub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cblx0XHQvLyBcdFx0XHRzZXRJbnRlcnZhbCAoKCkgPT4gY3R4LmRyYXdJbWFnZSh0aGlzLCB4ICogeHNoaWZ0LCB5ICogeXNoaWZ0KSwyMCk7XG5cblx0XHQvLyBcdFx0fTtcblx0XHQvLyBcdFx0aW1hZ2VPYmouc3JjID0gXCIuL2ltYWdlcy9wb3RCLnBuZ1wiO1xuXHRcdFxuXHRcdC8vIH1cblxuXG5cdFx0Ly8gXHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9ydGFsc1cubGVuZ3RoOyBpKyspIHtcblx0XHQvLyBcdFx0bGV0IHggPSB0aGlzLnBvcnRhbHNXW2ldLkdyaWRYO1xuXHRcdC8vIFx0XHRsZXQgeSA9IHRoaXMucG9ydGFsc1dbaV0uR3JpZFk7XG5cdFx0XHRcblx0XHQvLyBcdFx0XHR2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcblx0XHQvLyBcdFx0XHRpbWFnZU9iai5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuXHRcdC8vIFx0XHRcdFx0c2V0SW50ZXJ2YWwgKCgpID0+IGN0eC5kcmF3SW1hZ2UodGhpcywgeCAqIHhzaGlmdCwgeSAqIHlzaGlmdCksMjApO1xuXG5cdFx0Ly8gXHRcdFx0fTtcblx0XHQvLyBcdFx0XHRpbWFnZU9iai5zcmMgPSBcIi4vaW1hZ2VzL3BvdFcucG5nXCI7XG5cdFx0XHRcdFxuXG5cblx0XHQvLyBcdH1cblxuXHRcdC8vIFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0c3MubGVuZ3RoOyBpKyspIHtcblx0XHQvLyBcdFx0bGV0IHggPSB0aGlzLml0c3NbaV0uR3JpZFg7XG5cdFx0Ly8gXHRcdGxldCB5ID0gdGhpcy5pdHNzW2ldLkdyaWRZO1xuXG5cdFx0Ly8gXHRcdHZhciBpbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xuXHRcdC8vIFx0XHRpbWFnZU9iai5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuXHRcdC8vIFx0XHRcdHNldEludGVydmFsICgoKSA9PiBjdHguZHJhd0ltYWdlKHRoaXMsIHggKiB4c2hpZnQsIHkgKiB5c2hpZnQpLDIwKTtcblxuXHRcdC8vIFx0XHR9O1xuXHRcdC8vIFx0XHRpbWFnZU9iai5zcmMgPSBcIi4vaW1hZ2VzL1N0YXIyLnBuZ1wiO1xuXG5cblxuXHRcdC8vIFx0fVxuXG5cdFx0Ly8gXHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRycy5sZW5ndGg7IGkrKykge1xuXHRcdC8vIFx0XHRsZXQgeCA9IHRoaXMuaXRyc1tpXS5HcmlkWDtcblx0XHQvLyBcdFx0bGV0IHkgPSB0aGlzLml0cnNbaV0uR3JpZFk7XG5cblx0XHQvLyBcdFx0dmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG5cdFx0Ly8gXHRcdGltYWdlT2JqLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0Ly8gXHRcdFx0c2V0SW50ZXJ2YWwgKCgpID0+IGN0eC5kcmF3SW1hZ2UodGhpcywgeCAqIHhzaGlmdCwgeSAqIHlzaGlmdCksMjApO1xuXG5cdFx0Ly8gXHRcdH07XG5cdFx0Ly8gXHRcdGltYWdlT2JqLnNyYyA9IFwiLi9pbWFnZXMvcmV2ZXJzZS5wbmdcIjtcblxuXG5cblx0XHQvLyBcdH1cblxuXHRcdFx0Ly8gZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHQvLyBcdGxldCB4ID0gdGhpcy5wb3J0YWxzV1tpXS5HcmlkWDtcblx0XHRcdC8vIFx0bGV0IHkgPSB0aGlzLnBvcnRhbHNXW2ldLkdyaWRZO1xuXG5cdFx0XHQvLyBcdHZhciBpbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0Ly8gXHRpbWFnZU9iai5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gXHRcdGN0eC5kcmF3SW1hZ2UodGhpcywgeCAqIHhzaGlmdCwgeSAqIHlzaGlmdCk7XG5cblx0XHRcdC8vIFx0fTtcblx0XHRcdC8vIFx0aW1hZ2VPYmouc3JjID0gXCIuL2ltYWdlcy9wb3RXLnBuZ1wiO1xuXG5cblxuXHRcdFx0Ly8gfVxuXG5cdFx0fVxuXHRcblxuXG5cblx0XHRcblxuXG5cblx0XHQvLyBmb3IgKHZhciBpPTA7aTx0aGlzLnBvcnRhbHMubGVuZ3RoO2krKykge1xuXHRcdC8vIFx0Y3R4LmZpbGxTdHlsZT1cIiNGRjAwMDBcIjtcblx0XHQvLyBcdHRoaXMuY3R4LmZpbGxSZWN0KGkqQ0VMTF9MRU5HVEgsaSpDRUxMX0hFSUdIVCwzKkNFTExfTEVOR1RILENFTExfSEVJR0hUKTtcblx0XHQvLyB9XG5cblx0XHQvLyBmb3IgKHZhciBpPTA7aTx0aGlzLnBvcnRhbHMubGVuZ3RoO2krKykge1xuXHRcdC8vIFx0Y3R4LmZpbGxTdHlsZT1cImJsdWVcIjtcblx0XHQvLyBcdHRoaXMuY3R4LmZpbGxSZWN0KGkqQ0VMTF9MRU5HVEgsaSpDRUxMX0hFSUdIVCwzKkNFTExfTEVOR1RILENFTExfSEVJR0hUKTtcblx0XHQvLyB9XG5cblx0XHQvLyBmb3IgKHZhciBpPTA7aTx0aGlzLnBvcnRhbHMubGVuZ3RoO2krKykge1xuXHRcdC8vIFx0Y3R4LmZpbGxTdHlsZT1cInllbGxvd1wiO1xuXHRcdC8vIFx0dGhpcy5jdHguZmlsbFJlY3QoaSpDRUxMX0xFTkdUSCxpKkNFTExfSEVJR0hULDMqQ0VMTF9MRU5HVEgsQ0VMTF9IRUlHSFQpO1xuXHRcdC8vIH1cblxuXHRjaGVja0NvbGxpc2lvbigpIHtcblx0XHR2YXIgc2VsZj10aGlzO1xuXHRcdHZhciBiQ2hhciA9IG5ldyBJbWFnZSgpO1xuXHRcdGJDaGFyLnNyYyA9IFwiLi9pbWFnZXMvQmxhY2syLnBuZ1wiO1xuXHRcdHZhciB3Q2hhciA9IG5ldyBJbWFnZSgpO1xuXHRcdHdDaGFyLnNyYyA9IFwiLi9pbWFnZXMvV2hpdGUyLnBuZ1wiO1xuXHRcdC8vIHZhciBjb2xsaXNpb25UeXBlO1xuXG5cdFx0Ly8gLy9sb29wIHRocm91Z2ggZXZlcnkgb2JqZWN0IGluIHRoZSBtYXBcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnBvcnRhbHNCW3RoaXMubm93cHRCXSlcblx0XHRzZXRJbnRlcnZhbCggKCkgPT4ge1xuXHRcdGlmKHRoaXMucG9ydGFsc0IubGVuZ3RoPjApIHtcblx0XHRcdHZhciBwaXhlbCA9IGNvbnZlcnRQaXhlbCh0aGlzLnBvcnRhbHNCW3RoaXMubm93cHRCXSk7Ly9pbiBwaXhlbFxuXHRcdFx0Ly8gY29uc29sZS5sb2cocGl4ZWwueCk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLmNoYXJhY3Rlci5jdXJyWCk7XG5cdFx0XHRpZiAoKE1hdGguYWJzKHRoaXMuY2hhcmFjdGVyLmN1cnJZIC0gcGl4ZWwueSkgPCA1KSAmJiAoTWF0aC5hYnModGhpcy5jaGFyYWN0ZXIuY3VyclggLSBwaXhlbC54KSA8IDUpICYmICh0aGlzLmNoYXJhY3Rlci5zdGF0ZSA9PSAwKSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcImNodWFuIGJsYWNrXCIpO1xuXHRcdFx0XHR2YXIgdGVtcFggPSB0aGlzLmNoYXJhY3Rlci5jdXJyWDtcblx0XHRcdFx0dmFyIHRlbXBZID0gdGhpcy5jaGFyYWN0ZXIuY3Vyclk7XG5cdFx0XHRcdC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdC8vIFx0Y29uc29sZS5sb2codGVtcFgpO1xuXHRcdFx0XHQvLyBcdGNvbnNvbGUubG9nKHRlbXBZKTtcblx0XHRcdFx0Ly8gXHRzZWxmLmNoYXJhY3Rlci5jbGVhcihzZWxmLmN0eFkpO1xuXG5cdFx0XHRcdC8vIFx0Y29uc29sZS5sb2coXCJjbGVhcmVkXCIpO1xuXHRcdFx0XHQvLyB9LDEwMCk7XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyB0aGlzLm5vd3B0QiA9ICh0aGlzLm5vd3B0QiArdGhpcy5wb3J0YWxzQi5sZW5ndGgtIDEpICUgdGhpcy5wb3J0YWxzQi5sZW5ndGg7XG5cdFx0XHRcdHRoaXMubm93cHRCICA9IHRoaXMubm93cHRCLTI7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwibm93QiBpcyA6IFwiICsgdGhpcy5ub3dwdEIpO1xuXG5cdFx0XHRcdHBpeGVsID0gY29udmVydFBpeGVsKHRoaXMucG9ydGFsc0JbdGhpcy5ub3dwdEIrMV0pO1xuXHRcdFx0XHR0aGlzLmNoYXJhY3Rlci5jdXJyWCA9IHBpeGVsLng7XG5cdFx0XHRcdHRoaXMuY2hhcmFjdGVyLmN1cnJZID0gcGl4ZWwueS0xMTtcblx0XHRcdFx0Y29uc29sZS5sb2cocGl4ZWwpO1xuXHRcdFx0XHR2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcblx0XHRcdFx0dmFyIGN0eCA9IHRoaXMuY3R4O1xuXHRcdFx0XHRjdHguZHJhd0ltYWdlKGJDaGFyLCBzZWxmLmNoYXJhY3Rlci5jdXJyWCwgc2VsZi5jaGFyYWN0ZXIuY3VyclkpO1xuXHRcdH1cblx0XHRcdGVsc2UgaWYgKE1hdGguYWJzKHRoaXMuY2hhcmFjdGVyLmN1cnJZIC0gcGl4ZWwueSkgPCA1KSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nIChcIkJsYWNrIGlzIG1pbnVzZWQhXCIpO1xuXHRcdFx0XHQvLyB0aGlzLm5vd3B0QiA9ICh0aGlzLm5vd3B0QiArIHRoaXMucG9ydGFsc0IubGVuZ3RoIC0gMSkgJSB0aGlzLnBvcnRhbHNCLmxlbmd0aDtcblx0XHRcdFx0dGhpcy5ub3dwdEIgPSB0aGlzLm5vd3B0QiAtIDE7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdub3cgUFQgQiBpcyA6ICcgKyB0aGlzLm5vd3B0Qik7XG5cdFx0XHR9XG5cblxuXHRcdFxuXHRcdCAgfVxuXG5cblx0XHRpZiAodGhpcy5wb3J0YWxzVy5sZW5ndGggPiAwKSB7XG5cdFx0XHR2YXIgcGl4ZWwgPSBjb252ZXJ0UGl4ZWwodGhpcy5wb3J0YWxzV1t0aGlzLm5vd3B0V10pOy8vaW4gcGl4ZWxcblx0XHRcdC8vIGNvbnNvbGUubG9nKHBpeGVsLngpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy5jaGFyYWN0ZXIuY3VyclgpO1xuXHRcdFx0aWYgKChNYXRoLmFicyh0aGlzLmNoYXJhY3Rlci5jdXJyWSAtIHBpeGVsLnkpIDwgNSkgJiYgKE1hdGguYWJzKHRoaXMuY2hhcmFjdGVyLmN1cnJYIC0gcGl4ZWwueCkgPCA1KSAmJiAodGhpcy5jaGFyYWN0ZXIuc3RhdGUgPT0gMSkpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJjaHVhbiB3aGl0ZVwiKTtcblx0XHRcdFx0dmFyIHRlbXBYID0gdGhpcy5jaGFyYWN0ZXIuY3Vyclg7XG5cdFx0XHRcdHZhciB0ZW1wWSA9IHRoaXMuY2hhcmFjdGVyLmN1cnJZO1xuXHRcdFx0XHQvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBcdGNvbnNvbGUubG9nKHRlbXBYKTtcblx0XHRcdFx0Ly8gXHRjb25zb2xlLmxvZyh0ZW1wWSk7XG5cdFx0XHRcdC8vIFx0c2VsZi5jaGFyYWN0ZXIuY2xlYXIoc2VsZi5jdHgsIHRlbXBYLCB0ZW1wWSk7XG5cblx0XHRcdFx0Ly8gXHRjb25zb2xlLmxvZyhcImNsZWFyZWRcIik7XG5cdFx0XHRcdC8vIH0sIDEwMCk7XG5cblx0XHRcdFx0Ly90aGlzLm5vd3B0VyA9ICh0aGlzLm5vd3B0VyArIHRoaXMucG9ydGFsc1cubGVuZ3RoIC0gMSkgJSB0aGlzLnBvcnRhbHNXLmxlbmd0aDtcblx0XHRcdFx0dGhpcy5ub3dwdFcgID0gdGhpcy5ub3dwdFctMjtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJub3dXIGlzIDogXCIgKyB0aGlzLm5vd3B0VysxKTtcblxuXHRcdFx0XHRwaXhlbCA9IGNvbnZlcnRQaXhlbCh0aGlzLnBvcnRhbHNXW3RoaXMubm93cHRXKzFdKTtcblx0XHRcdFx0dGhpcy5jaGFyYWN0ZXIuY3VyclggPSBwaXhlbC54O1xuXHRcdFx0XHR0aGlzLmNoYXJhY3Rlci5jdXJyWSA9IHBpeGVsLnkgLSAxMTtcblx0XHRcdFx0Y29uc29sZS5sb2cocGl4ZWwpO1xuXHRcdFx0XHR2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcblx0XHRcdFx0dmFyIGN0eCA9IHRoaXMuY3R4O1xuXHRcdFx0XHRjdHguZHJhd0ltYWdlKHdDaGFyLCBzZWxmLmNoYXJhY3Rlci5jdXJyWCwgc2VsZi5jaGFyYWN0ZXIuY3VyclkpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoTWF0aC5hYnModGhpcy5jaGFyYWN0ZXIuY3VyclkgLSBwaXhlbC55KSA8IDUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cgKFwiV2hpdGUgaXMgbWludXNlZCFcIik7XG5cdFx0XHRcdC8vIHRoaXMubm93cHRXID0gKHRoaXMubm93cHRXICsgdGhpcy5wb3J0YWxzVy5sZW5ndGggLSAxKSAlIHRoaXMucG9ydGFsc1cubGVuZ3RoO1xuXHRcdFx0XHR0aGlzLm5vd3B0VyA9IHRoaXMubm93cHRXIC0gMTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ25vdyBQVCB3IGlzIDogJyArIHRoaXMubm93cHRXKTtcblx0XHRcdH1cblxuXG5cblx0XHR9XG5cdFx0IFxuXG5cdFx0Ly8gZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvcnRhbHNXLmxlbmd0aDsgaSsrKSB7XG5cdFx0Ly8gXHR2YXIgcGl4ZWwgPSBjb252ZXJ0UGl4ZWwodGhpcy5wb3J0YWxzV1tpXSk7Ly9pbiBwaXhlbFxuXHRcdC8vIFx0aWYgKCh0aGlzLmNoYXJhY3Rlci5jdXJyWSA9PSBwaXhlbC55KSAmJiAodGhpcy5jaGFyYWN0ZXIuY3VyclggPT0gcGl4ZWwueCkgJiYgKHRoaXMucG9ydGFsc1dbaV0uc3RhdGUgPT0gdGhpcy5jaGFyYWN0ZXIuc3RhdGUpKSB7XG5cdFx0Ly8gXHRcdHRoaXMuY2hhcmFjdGVyLmNsZWFyKHRoaXMuY3R4LCBwaXhlbC54LCBwaXhlbC55KTtcblx0XHQvLyBcdFx0Y29sbHNpb25UeXBlID0gXCJwb3J0YWxzXCI7XG5cdFx0Ly8gXHRcdHBpeGVsID0gY29udmVydFBpeGVsKHRoaXMucHJvdGFsc1dbaSAtIDFdKTtcblx0XHQvLyBcdFx0dGhpcy5jaGFyYWN0ZXIuY3VyclggPSBwaXhlbC54Ly9pbiBncmlkXG5cdFx0Ly8gXHRcdHRoaXMuY2hhcmFjdGVyLmN1cnJZID0gcGl4ZWwueTtcblx0XHQvLyBcdFx0dmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG5cdFx0Ly8gXHRcdGltYWdlT2JqLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0Ly8gXHRcdFx0Y3R4LmRyYXdJbWFnZSh0aGlzLCBwaXhlbC54LCBwaXhlbC55KTtcblxuXHRcdC8vIFx0XHR9O1xuXHRcdC8vIFx0XHRpbWFnZU9iai5zcmMgPSBcIi4vaW1hZ2VzL0JsYWNrMi5wbmdcIjtcblxuXG5cdFx0Ly8gXHRcdC8vIGN0eC5iZWdpblBhdGgoKTtcblx0XHQvLyBcdFx0Ly8gY3R4LmFyYyhjdXJyWCArIDkuMTQsIGN1cnJZLCAxNywgMCwgTWF0aC5QSSoyLCB0cnVlKTsvL3BvcnRhbCBzaXplXG5cdFx0Ly8gXHRcdC8vIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcblx0XHQvLyBcdFx0Ly8gY3R4LmZpbGwoKTtcblx0XHQvLyBcdFx0Ly8gY3R4LmNsb3NlUGF0aCgpO1xuXHRcdC8vIFx0fVxuXHRcdC8vIH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGlsbEUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBwaXhlbCA9IGNvbnZlcnRQaXhlbCh0aGlzLnN0aWxsRVtpXSk7Ly9pbiBwaXhlbFxuXHRcdFx0Ly8gY29uc29sZS5sb2cocGl4ZWwueSk7XG5cdFx0XHQvLyBpZih0aGlzLmN1cnJZID4gaS55ICYmIHRoaXMuY3VyclkgPCBpLnkgLSAzOC40ICYmIChjdXJyWCA+IGkueCAmJiBjdXJyWCA8IGkueCArIDE4LjI4KXtcblx0XHRcdGlmIChNYXRoLmFicyh0aGlzLmNoYXJhY3Rlci5jdXJyWSAtIChwaXhlbC55LTMwLjQpKTw1KSB7XG5cdFx0XHRcdC8vIGNvbGxzaW9uVHlwZSA9IFwic3RpbGxFXCI7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElEKTtcblx0XHRcdFx0dGhpcy5jaGFyYWN0ZXIucmVib3JuQ2hhcmFjdGVyKHRoaXMuY3R4KTtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJpIGFtIGV4ZWN1dGVkXCIpO1xuXHRcdFx0XHR0aGlzLm5vd3B0QiA9IHRoaXMucG9ydGFsc0IubGVuZ3RoLTE7XG5cdFx0XHRcdHRoaXMubm93cHRXID0gdGhpcy5wb3J0YWxzVy5sZW5ndGgtMTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tb3ZpbmdFLmxlbmd0aDsgaSsrKSB7XG5cdFx0Ly8gXHR2YXIgcGl4ZWwgPSBjb252ZXJ0UGl4ZWwodGhpcy5tb3ZpbmdFW2ldKTsvL2luIHBpeGVsXG5cdFx0Ly8gXHQvLyBpZih0aGlzLmN1cnJZID4gaS55ICYmIHRoaXMuY3VyclkgPCBpLnkgLSAzOC40ICYmIChjdXJyWCA+IGkueCAmJiBjdXJyWCA8IGkueCArIDE4LjI4KXtcblx0XHQvLyBcdGlmICgodGhpcy5jaGFyYWN0ZXIuY3VyclkgPCBwaXhlbC55KSAmJiAodGhpcy5jdXJyWCA9PSBwaXhlbC54KSkge1xuXHRcdC8vIFx0XHRkb2N1bWVudC5yZWxvYWQoKTtcblxuXHRcdC8vIFx0fVxuXHRcdC8vIH1cblxuXG5cdFx0Ly8gZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0Ly8gXHR2YXIgcGl4ZWwgPSBjb252ZXJ0UGl4ZWwodGhpcy5pdGVtc1tpXSk7Ly9pbiBwaXhlbFxuXHRcdC8vIFx0aWYgKCh0aGlzLmN1cnJZIDwgcGl4ZWwueSkgJiYgKHRoaXMuY3VyclggPT0gcGl4ZWwueCkpIHtcblx0XHQvLyBcdFx0dGhpcy5wb2ludCsrO1xuXHRcdC8vIFx0XHRjb25zb2xlLmxvZyh0aGlzLnBvaW50KTtcblx0XHQvLyBcdH1cblx0XHQvLyB9XG59LDIwKTtcblxufVxufVxuXG5cbmZ1bmN0aW9uIGNvbnZlcnRQaXhlbChjb3VudGVyKXtcbiAgICB2YXIgSF9CTE9DS1MgPSAxMztcbiAgICB2YXIgSF9ESU1FTlRJT04gPSAyNTY7XG4gICAgdmFyIFZfQkxPQ0tTID0gMjU7XG4gICAgdmFyIFZfRElNRU5USU9OID0gOTYwO1xuICAgIHZhciBncmlkUGl4ZWwgPSB7XG5cdFx0eDogY291bnRlci5HcmlkWCAqIChIX0RJTUVOVElPTiAvIEhfQkxPQ0tTKSxcblx0XHR5OiAoY291bnRlci5HcmlkWSkgKiAoVl9ESU1FTlRJT04gLyBWX0JMT0NLUylcbiAgICB9XG4gICAgcmV0dXJuIGdyaWRQaXhlbDtcbn1cblxuXG4vLyBQcml2YXRlIG1ldGhvZHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIExvb3Agb3ZlciB0aGUgY2VsbHNcbmZ1bmN0aW9uIGxvb3BDZWxscyhlKSB7XG5cdHZhciB1bml2ZXJzZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdmVyc2UnKTtcblx0dmFyIHBhZ2VYID0gZS5wYWdlWCAtIHVuaXZlcnNlRWxlbS5vZmZzZXRMZWZ0O1xuXHR2YXIgcGFnZVkgPSBlLnBhZ2VZIC0gdW5pdmVyc2VFbGVtLm9mZnNldFRvcDtcblxuXHRmb3IgKGxldCBpID0gMDsgaTx0aGlzLnVuaXZlcnNlLmhlaWdodDsgaSsrKXtcblx0XHRmb3IgKGxldCBqPTA7IGo8dGhpcy51bml2ZXJzZS5sZW5ndGg7IGorKyl7XG5cdFx0XHRsZXQgY2VsbCA9IHRoaXMudW5pdmVyc2UuY2VsbHNbaV1bal07XG5cdFx0XHRoYW5kbGVDbGljayh0aGlzLCBjZWxsLCBwYWdlWCwgcGFnZVkpO1xuXHRcdH1cblx0fVxufVxuXG4vLyBnaXZlIGxpZmUgb3IgZGVhdGggdG8gdGhlIGNlbGwgY2xpY2tlZC5cbi8vIE5vdGU6IGJlY2F1c2UgbG9vcENlbGxzIGlzIGEgY2FsbGJhY2sgd2hpY2ggaGFzIHRoZSBjbGFzcyBjb250ZXh0XG4vLyBib3VuZCB0byBpdCwgdGhpcyBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgaW4gdGhlIGNhbGxiYWNrIGRvZXNuJ3QgZ2V0IHRoZVxuLy8gY29udGV4dCBpbXBsaWNpdGx5LCBzbyBJIG11c3QgcGFzcyBpdC4gRG9lc24ndCBmZWVsIGNsZWFuLi4uXG4vLyBmdW5jdGlvbiBoYW5kbGVDbGljayhzZWxmLCBjZWxsLCBwYWdlWCwgcGFnZVkpe1xuLy8gXHRpZiAocGFnZVggPiBjZWxsLnggJiYgcGFnZVggPCBjZWxsLngrc2VsZi51bml2ZXJzZS5jZWxsTGVuZ3RoICYmXG4vLyBcdFx0XHRcdHBhZ2VZID4gY2VsbC55ICYmIHBhZ2VZIDwgY2VsbC55K3NlbGYudW5pdmVyc2UuY2VsbEhlaWdodCApIHtcbi8vIFx0XHRjaGFuZ2VDZWxscyhzZWxmLCBjZWxsKTtcbi8vIFx0fVxuLy8gfVxuXG4vLyAxIHN0ZXAgPSAxIGdlbmVyYXRpb25cbmZ1bmN0aW9uIHN0ZXAoKXtcblxuXHRcbn1cblxuLypcbipcdHBhc3MgdGhlIGNlbGwgdGhyb3VnaCB0aGUgNCBydWxlcy4gXG5cdE5vdGU6IGNlbGxzIHNob3VsZCBub3QgdXBkYXRlIGhlcmUsIHNpbmNlIGFsdGVyaW5nIDEgYmVmb3JlIHlvdSBjYW5cblx0YW5hbHl6ZSB0aGUgb3RoZXJzIHdpbGwgY2F1c2UgZXJyb25lb3VzIG91dGNvbWVzLlxuKi9cbmZ1bmN0aW9uIHRyYW5zaXRpb25zKHNlbGYsIGNlbGwsIGNlbGxzVG9DaGFuZ2UpIHtcblx0dmFyIHVuaUxlbmd0aCA9IHNlbGYudW5pdmVyc2UubGVuZ3RoO1xuXHR2YXIgdW5pSGVpZ2h0ID0gc2VsZi51bml2ZXJzZS5oZWlnaHQ7XG5cdHZhciBuZWlnaGJvdXJzQWxpdmUgPSAwO1xuXHQvLyBHbyB0aHJvdWdoIHRoZSBuZWlnaGJvdXJzIG9mIGVhY2ggY2VsbC5cblx0Zm9yIChsZXQgaT0wOyBpPDg7IGkrKyl7XG5cdFx0bGV0IG5laWdoYm91cklEID0gY2VsbC5uZWlnaGJvdXJzW2ldO1xuXHRcdGlmIChuZWlnaGJvdXJJRCA+PSB1bmlMZW5ndGgqdW5pSGVpZ2h0IHx8IG5laWdoYm91cklEIDwwKSBjb250aW51ZTtcblx0XHRsZXQgbmVpZ2hib3VyID0gZ2V0Q2VsbEJ5SWQoc2VsZiwgbmVpZ2hib3VySUQpO1xuXHRcdGlmIChuZWlnaGJvdXIuc3RhdGUgPT09IDEpIG5laWdoYm91cnNBbGl2ZSsrO1xuXHR9XG5cdGlmIChjZWxsLnN0YXRlID09PSAxKXtcblx0XHQvLyB6ZSBsaWZlIHJ1bGVzXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIDEpIEFueSBsaXZlIGNlbGwgd2l0aCBmZXdlciB0aGFuIHR3byBsaXZlIG5laWdoYm91cnMgZGllcywgYXMgXG5cdFx0Ly8gaWYgY2F1c2VkIGJ5IHVuZGVyLXBvcHVsYXRpb24uXG5cdFx0Ly8gMikgQW55IGxpdmUgY2VsbCB3aXRoIHR3byBvciB0aHJlZSBsaXZlIG5laWdoYm91cnMgbGl2ZXMgb24gdG8gXG5cdFx0Ly8gdGhlIG5leHQgZ2VuZXJhdGlvbi5cblx0XHRpZiAobmVpZ2hib3Vyc0FsaXZlIDwgMikgY2VsbHNUb0NoYW5nZS5wdXNoKGNlbGwuaWQpO1xuXHRcdC8vIDMpIEFueSBsaXZlIGNlbGwgd2l0aCBtb3JlIHRoYW4gdGhyZWUgbGl2ZSBuZWlnaGJvdXJzIGRpZXMsIGFzIGlmIFxuXHRcdC8vIGJ5IG92ZXJjcm93ZGluZy5cblx0XHRlbHNlIGlmIChuZWlnaGJvdXJzQWxpdmUgPiAzKSBjZWxsc1RvQ2hhbmdlLnB1c2goY2VsbC5pZCk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gNCkgQW55IGRlYWQgY2VsbCB3aXRoIGV4YWN0bHkgdGhyZWUgbGl2ZSBuZWlnaGJvdXJzIGJlY29tZXMgYSBcblx0XHQvLyBsaXZlIGNlbGwsIGFzIGlmIGJ5IHJlcHJvZHVjdGlvbi5cblx0XHRpZiAobmVpZ2hib3Vyc0FsaXZlID09PSAzKSBjZWxsc1RvQ2hhbmdlLnB1c2goY2VsbC5pZCk7XG5cdH1cbn0gXG5cbmZ1bmN0aW9uIGNoYW5nZUNlbGxzKHNlbGYsIGNlbGwpIHtcblx0c2VsZi5jdHguZmlsbFN0eWxlID0gKGNlbGwuc3RhdGUpID8gJ3doaXRlJyA6ICcjMzMzJztcblx0c2VsZi5jdHguZmlsbFJlY3QoY2VsbC54KzEsIGNlbGwueSsxLCBcblx0XHRcdHNlbGYudW5pdmVyc2UuY2VsbExlbmd0aC0yLCBzZWxmLnVuaXZlcnNlLmNlbGxIZWlnaHQtMik7XG5cdGNlbGwuc3RhdGUgPSAoY2VsbC5zdGF0ZSkgPyAwIDogMTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2VsbEJ5SWQoc2VsZiwgaWQpIHtcblx0bGV0IHJvdyA9IE1hdGguZmxvb3IoaWQvc2VsZi51bml2ZXJzZS5sZW5ndGgpO1xuXHRsZXQgY29sdW1uID0gaWQgJSBzZWxmLnVuaXZlcnNlLmxlbmd0aDtcblx0cmV0dXJuIHNlbGYudW5pdmVyc2UuY2VsbHNbcm93XVtjb2x1bW5dO1xufSBcblxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7IiwiY2xhc3MgT2Jqe1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKXtcbiAgICB0aGlzLkdyaWRYID0gb3B0aW9ucy5HcmlkWDtcbiAgICB0aGlzLkdyaWRZID0gb3B0aW9ucy5HcmlkWTtcbiAgICAvLyB0aGlzLnN0YXRlID0gc3RhdGU7Ly8wIGlzIGEgY29sb3IwLCAxIGlzIGNvbG9yMVxuXHR0aGlzLkhfQkxPQ0tTID0gMTM7XG4gICAgdGhpcy5IX0RJTUVOVElPTiA9IDI1NjtcbiAgICB0aGlzLlZfQkxPQ0tTID0gMjU7XG4gICAgdGhpcy5WX0RJTUVOVElPTiA9IDk2MDtcblxuICB9XG5cblxuXG5cbiAvLyAgY29udmVydFBpeGVsKGNvdW50ZXIpIHtcblx0Ly8gICB2YXIgeCA9IGNvdW50ZXIuR3JpZFggKiAodGhpcy5IX0RJTUVOVElPTiAvIHRoaXMuSF9CTE9DS1MpO1xuXHQvLyAgIGNvbnNvbGUubG9nKFwieGlzXCIreCk7XG5cdC8vICAgdmFyIGdyaWRQaXhlbCA9IHtcblx0Ly8gXHQgIHg6IGNvdW50ZXIuR3JpZFggKiAodGhpcy5IX0RJTUVOVElPTiAvIHRoaXMuSF9CTE9DS1MpLFxuXHQvLyBcdCAgeTogKGNvdW50ZXIuR3JpZFkgKyAxKSAqICh0aGlzLlZfRElNRU5USU9OIC8gdGhpcy5WX0JMT0NLUylcblx0Ly8gICB9XG4gLy8gICAgcmV0dXJuIGdyaWRQaXhlbDtcblx0Ly8gfVxuXG5cdCBjbGVhcihjdHgpIHtcblx0XHQgLy8gY29uc29sZS5sb2codGhpcy5IX0RJTUVOVElPTiAvIHRoaXMuSF9CTE9DS1MpO1xuXHRcdCAvLyAvLyBjb25zb2xlLmxvZyh0aGlzLkdyaWRYKTtcblx0XHQgLy8gdmFyIHggPSB0aGlzLkdyaWRYICogKHRoaXMuSF9ESU1FTlRJT04gLyB0aGlzLkhfQkxPQ0tTKTtcblx0XHQgLy8gdmFyIHkgPSAodGhpcy5HcmlkWSkgKiAodGhpcy5WX0RJTUVOVElPTiAvIHRoaXMuVl9CTE9DS1MpO1xuXHRcdCAvLyBjb25zb2xlLmxvZyhcInggaXMgXCIrIHgpO1xuXHRcdCAvLyBjb25zb2xlLmxvZyhcInkgaXMgXCIgKyB5KTtcblxuXHQgIC8vIGN0eC5jbGVhclJlY3QoeCx5LCAzICogKHRoaXMuSF9ESU1FTlRJT04gLyB0aGlzLkhfQkxPQ0tTKSwgMSsodGhpcy5WX0RJTUVOVElPTiAvIHRoaXMuVl9CTE9DS1MpKTtcblx0XHQgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLkhfRElNRU5USU9OLCAgdGhpcy5WX0RJTUVOVElPTik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPYmo7XG4iLCJpbXBvcnQgT2JqIGZyb20gJy4vT2JqJztcblxuY2xhc3MgUG9ydGFsIGV4dGVuZHMgT2Jqe1xuICBjb25zdHJ1Y3RvcihzdGF0ZSxvcHRpb25zKXtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gIH1cbn1cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gUG9ydGFsO1xuIl19
