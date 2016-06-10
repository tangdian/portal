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
  plan: ["kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk its kkk", "kkk kkk kkk", "kkk ptB kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk xxx kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk ptB kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk"]
}), new _jsGame2['default']({
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
  games[num].iniSetUp();
}

var count = 0;
document.getElementById('next').addEventListener('click', function () {
  games[count].stop();
  chooseGame(++count);
});

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

  function Character(options) {
    _classCallCheck(this, Character);

    _get(Object.getPrototypeOf(Character.prototype), "constructor", this).call(this, options);
    this.state = options.state;
    this.currY = this.convertPixel(options).y; //in pixel; Y DECREASES
    this.currX = this.convertPixel(options).x;
    this.options = options;
    this.direction = 0;
  }

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
    }
  }, {
    key: "rebornCharacter",
    value: function rebornCharacter(ctx) {
      this.state = this.options.state;
      this.currX = this.convertPixel(this.options).x;
      this.currY = this.convertPixel(this.options).y;
    }
  }, {
    key: "move",
    value: function move() {
      var dy = -2;
      if (this.direction == 0) {
        this.currY += dy;
      } else {
        this.currY -= dy;
      }
    }
  }, {
    key: "reverse",
    value: function reverse() {
      if (this.direction == 0) this.direction = 1;else this.direction = 0;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {

      var x = this.currX;
      var y = this.currY;
      var imageObjB = new Image();
      var imageObjW = new Image();
      imageObjB.src = "./images/Black2.png";
      imageObjW.src = "./images/White2.png";
      imageObjB.onload = function () {
        var _this = this;

        this.drawCharInterval = setInterval(function () {
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
      // console.log(key);
      console.log("state is" + this.state);
      if (key == 102) {
        console.log("You Pressed the fking F");

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
    this.character = new _Character2['default']({
      state: 0,
      GridX: 5,
      GridY: 23
    });
    this.point = 0;
    this.win = false;
    this.H_BLOCKS = 13;
    this.H_DIMENTION = 256;
    this.H = this.H_DIMENSION / this.H_BLOCKS;
    this.V_BLOCKS = 25;
    this.V_DIMENTION = 960;
    this.V = this.V_DIMENSION / this.V_BLOCKS;
    this.moveInterval = 0;
    this.drawInterval = 0;
  }

  // initial set up

  _createClass(Game, [{
    key: 'iniSetUp',
    value: function iniSetUp() {
      var self = this;
      document.getElementById('start').addEventListener('click', function () {
        self.play();
      });

      document.addEventListener("keypress", function (e) {
        self.character.changeState(e);
      });

      console.log(this.plan);
      this.parse(this.plan);

      this.character.initializeCharacter(this.ctx);
      this.draw();
      this.checkCollision();
      this.character.draw(this.ctx);
    }
  }, {
    key: 'parse',
    value: function parse(plan) {
      // let grid = [];

      for (var i = 0; i < plan.length; i++) {
        var array = plan[i].split(" ");

        for (var j = 0; j < array.length; j++) {
          if (array[j] == "xxx") {
            this.stillE.push(new _Obj2['default']({
              GridX: 1 + 3 * j + j,
              GridY: i
            }));
          } else if (array[j] == "moe") {
            this.Enemies.push(new movingE({}));
          } else if (array[j] == "ptW") {
            this.portalsW.push(new _Portal2['default'](1, {
              GridX: 1 + 3 * j + j,
              GridY: i
            }));
          } else if (array[j] == "ptB") {
            this.portalsB.push(new _Portal2['default'](0, {
              GridX: 1 + 3 * j + j,
              GridY: i
            }));
          } else if (array[j] == "itr") {
            this.itrs.push(new _Obj2['default']({
              GridX: 1 + 3 * j + j,
              GridY: i
            }));
          } else if (array[j] == "its") {
            this.itss.push(new _Obj2['default']({
              GridX: 1 + 3 * j + j,
              GridY: i
            }));
          }
        }
      }
    }
  }, {
    key: 'play',
    value: function play() {
      var self = this;

      clearInterval(this.moveInterval);

      this.moveInterval = setInterval(function () {
        self.character.move();
      }, 20);
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
      this.drawInterval = setInterval(function () {
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
    }
  }, {
    key: 'checkCollision',
    value: function checkCollision() {
      var _this2 = this;

      var self = this;
      var bChar = new Image();
      bChar.src = "./images/Black2.png";
      var wChar = new Image();
      wChar.src = "./images/White2.png";

      //loop through every object in the map
      setInterval(function () {
        if (_this2.portalsB.length > 0) {
          for (var _i = 0; _i < _this2.portalsB.length; _i++) {
            var pixel = convertPixel(_this2.portalsB[_i]);
            if (Math.abs(_this2.character.currY - pixel.y) < 5 && Math.abs(_this2.character.currX - pixel.x) < 5 && _this2.character.state == 0) {
              if (_i == 0) {
                var newLoc = convertPixel(_this2.portalsB[_this2.portalsB.length - 1]);
              } else {
                var newLoc = convertPixel(_this2.portalsB[_i - 1]);
              }
              _this2.character.currX = newLoc.x;
              if (_this2.character.direction == 0) _this2.character.currY = newLoc.y - 11;else _this2.character.currY = newLoc.y + 11;
            }
          }
        }

        if (_this2.portalsW.length > 0) {
          for (var _i2 = 0; _i2 < _this2.portalsW.length; _i2++) {
            var pixel = convertPixel(_this2.portalsW[_i2]);
            if (Math.abs(_this2.character.currY - pixel.y) < 5 && Math.abs(_this2.character.currX - pixel.x) < 5 && _this2.character.state == 1) {
              if (_i2 == 0) {
                var newLoc = convertPixel(_this2.portalsW[_this2.portalsW.length - 1]);
              } else {
                var newLoc = convertPixel(_this2.portalsW[_i2 - 1]);
              }
              _this2.character.currX = newLoc.x;
              if (_this2.character.direction == 0) _this2.character.currY = newLoc.y - 11;else _this2.character.currY = newLoc.y + 11;
            }
          }
        }

        for (var i = 0; i < _this2.stillE.length; i++) {
          var pixel = convertPixel(_this2.stillE[i]); //in pixel
          if (Math.abs(_this2.character.currY - pixel.y) < 5 && Math.abs(_this2.character.currX - pixel.x) < 5) {
            clearInterval(_this2.moveInterval);
            _this2.character.rebornCharacter(_this2.ctx);
            console.log("i am executed");
          }
        }

        for (var i = 0; i < _this2.itss.length; i++) {
          var pixel = convertPixel(_this2.itss[i]); //in pixel
          if (Math.abs(_this2.character.currY - pixel.y) < 5 && Math.abs(_this2.character.currX - pixel.x) < 5) {
            clearInterval(_this2.moveInterval);
            _this2.character.rebornCharacter(_this2.ctx);
            alert("you win!");
          }
        }

        for (var i = 0; i < _this2.itrs.length; i++) {
          var pixel = convertPixel(_this2.itrs[i]); //in pixel
          if (Math.abs(_this2.character.currY - pixel.y) < 5 && Math.abs(_this2.character.currX - pixel.x) < 5) {
            _this2.character.reverse();
          }
        }

        if (_this2.character.currY < 0) {
          console.log("fail!");
          clearInterval(_this2.moveInterval);
          _this2.character.rebornCharacter(_this2.ctx);
        }
      }, 20);
    }
  }, {
    key: 'stop',
    value: function stop() {
      clearInterval(this.drawInterval);
      clearInterval(this.moveInterval);
      clearInterval(this.character.drawCharInterval);
      var el = document.getElementById('start'),
          elClone = el.cloneNode(true);
      el.parentNode.replaceChild(elClone, el);
      document.removeEventListener("keypress", function (e) {
        self.character.changeState(e);
      });
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
    this.H_BLOCKS = 13;
    this.H_DIMENTION = 256;
    this.V_BLOCKS = 25;
    this.V_DIMENTION = 960;
  }

  _createClass(Obj, [{
    key: "clear",
    value: function clear(ctx) {
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9kaWFuL3BvcnRhbC9hcHAuanMiLCIvaG9tZS9kaWFuL3BvcnRhbC9qcy9DaGFyYWN0ZXIuanMiLCIvaG9tZS9kaWFuL3BvcnRhbC9qcy9HYW1lLmpzIiwiL2hvbWUvZGlhbi9wb3J0YWwvanMvT2JqLmpzIiwiL2hvbWUvZGlhbi9wb3J0YWwvanMvUG9ydGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztzQkNBaUIsV0FBVzs7Ozs7QUFHNUIsSUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQzs7QUFFbkIsSUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDO0FBQzNCLElBQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQzs7QUFFM0IsSUFBTSxTQUFTLEdBQUc7O0FBRWhCLGlCQUFlLEVBQUUsRUFBRTtBQUNuQixpQkFBZSxFQUFFLEVBQUU7QUFDbkIsYUFBVyxFQUFFLEdBQUcsR0FBRyxlQUFlO0FBQ2xDLGFBQVcsRUFBRSxHQUFHLEdBQUcsZUFBZTs7Q0FFbkMsQ0FBQTs7QUFFRCxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2pELElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRWxDLElBQUksS0FBSyxHQUFHLENBQUMsd0JBQVM7OztBQUdsQixRQUFNLEVBQU4sTUFBTTtBQUNOLFNBQU8sRUFBRSxHQUFHO0FBQ1osV0FBUyxFQUFULFNBQVM7QUFDVCxPQUFLLEVBQUUsRUFBRTtBQUNULE1BQUksRUFBRSxDQUFDLGFBQWEsRUFDbEIsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLENBQ2Q7Q0FDRixDQUFDLEVBQUUsd0JBQVM7OztBQUdYLFFBQU0sRUFBTixNQUFNO0FBQ04sU0FBTyxFQUFFLEdBQUc7QUFDWixXQUFTLEVBQVQsU0FBUztBQUNULE9BQUssRUFBRSxFQUFFO0FBQ1QsTUFBSSxFQUFFLENBQUMsYUFBYSxFQUNsQixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLENBQ2Q7Q0FDRixDQUFDLEVBQ0Ysd0JBQVM7OztBQUdQLFFBQU0sRUFBTixNQUFNO0FBQ04sU0FBTyxFQUFFLEdBQUc7QUFDWixXQUFTLEVBQVQsU0FBUztBQUNULE9BQUssRUFBRSxFQUFFO0FBQ1QsTUFBSSxFQUFFLENBQUMsYUFBYSxFQUNsQixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLENBQ2Q7Q0FDRixDQUFDLEVBQ0Ysd0JBQVM7OztBQUdQLFFBQU0sRUFBTixNQUFNO0FBQ04sU0FBTyxFQUFFLEdBQUc7QUFDWixXQUFTLEVBQVQsU0FBUztBQUNULE9BQUssRUFBRSxFQUFFO0FBQ1QsTUFBSSxFQUFFLENBQUMsYUFBYSxFQUNsQixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLENBQ2Q7Q0FDRixDQUFDLEVBQ0Ysd0JBQVM7OztBQUdQLFFBQU0sRUFBTixNQUFNO0FBQ04sU0FBTyxFQUFFLEdBQUc7QUFDWixXQUFTLEVBQVQsU0FBUztBQUNULE9BQUssRUFBRSxFQUFFO0FBQ1QsTUFBSSxFQUFFLENBQUMsYUFBYSxFQUNsQixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLENBQ2Q7Q0FDRixDQUFDLEVBQ0Ysd0JBQVM7OztBQUdQLFFBQU0sRUFBTixNQUFNO0FBQ04sU0FBTyxFQUFFLEdBQUc7QUFDWixXQUFTLEVBQVQsU0FBUztBQUNULE9BQUssRUFBRSxFQUFFO0FBQ1QsTUFBSSxFQUFFLENBQUMsYUFBYSxFQUNsQixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLENBQ2Q7Q0FDRixDQUFDLEVBQ0Ysd0JBQVM7OztBQUdQLFFBQU0sRUFBTixNQUFNO0FBQ04sU0FBTyxFQUFFLEdBQUc7QUFDWixXQUFTLEVBQVQsU0FBUztBQUNULE9BQUssRUFBRSxFQUFFO0FB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OztBQWdCVCxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7OztvQkNoQkwsT0FBTzs7OztJQUVqQixNQUFNO1lBQU4sTUFBTTs7QUFDQyxXQURQLE1BQU0sQ0FDRSxLQUFLLEVBQUMsT0FBTyxFQUFDOzBCQUR0QixNQUFNOztBQUVSLCtCQUZFLE1BQU0sNkNBRUYsT0FBTyxFQUFFO0FBQ2YsUUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7R0FDcEI7O1NBSkcsTUFBTTs7O0FBU1osTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9qcy9HYW1lJztcblxuLy8gaW4gcGl4ZWxzXG5jb25zdCBXSURUSCA9IDI1NjtcbmNvbnN0IEhFSUdIVCA9IDk2MDtcbi8vIGluIGNlbGwgdW5pdHNcbmNvbnN0IFVOSVZFUlNFX0xFTkdUSCA9IDEzO1xuY29uc3QgVU5JVkVSU0VfSEVJR0hUID0gMjU7XG5cbmNvbnN0IERJTUVOU0lPTiA9IHtcblxuICBVTklWRVJTRV9MRU5HVEg6IDEzLFxuICBVTklWRVJTRV9IRUlHSFQ6IDI1LFxuICBDRUxMX0xFTkdUSDogMjU2IC8gVU5JVkVSU0VfTEVOR1RILFxuICBDRUxMX0hFSUdIVDogOTYwIC8gVU5JVkVSU0VfSEVJR0hUXG5cbn1cblxudmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml2ZXJzZScpO1xudmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG52YXIgZ2FtZXMgPSBbbmV3IEdhbWUoe1xuICAgIC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuICAgIC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuICAgIGNhbnZhcyxcbiAgICBjb250ZXh0OiBjdHgsXG4gICAgRElNRU5TSU9OLFxuICAgIHNwZWVkOiAyMCxcbiAgICBwbGFuOiBbXCJ4eHggeHh4IHh4eFwiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJ4eHggeHh4IGtra1wiLFxuICAgICAgXCJra2sga2trIHB0QlwiLFxuICAgICAgXCJra2sgeHh4IHB0QlwiLFxuICAgICAgXCJra2sgcHRCIGtra1wiLFxuICAgICAgXCJra2sgeHh4IHB0V1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJ4eHggcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgeHh4IHB0V1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJwdFcgeHh4IGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJ4eHggeHh4IGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgeHh4IHB0QlwiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRCIGtra1wiXG4gICAgXVxuICB9KSwgbmV3IEdhbWUoe1xuICAgIC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuICAgIC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuICAgIGNhbnZhcyxcbiAgICBjb250ZXh0OiBjdHgsXG4gICAgRElNRU5TSU9OLFxuICAgIHNwZWVkOiAyMCxcbiAgICBwbGFuOiBbXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgaXRzIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRCIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgeHh4IGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRCIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiXG4gICAgXVxuICB9KSxcbiAgbmV3IEdhbWUoe1xuICAgIC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuICAgIC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuICAgIGNhbnZhcyxcbiAgICBjb250ZXh0OiBjdHgsXG4gICAgRElNRU5TSU9OLFxuICAgIHNwZWVkOiAyMCxcbiAgICBwbGFuOiBbXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgaXRzIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiXG4gICAgXVxuICB9KSxcbiAgbmV3IEdhbWUoe1xuICAgIC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuICAgIC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuICAgIGNhbnZhcyxcbiAgICBjb250ZXh0OiBjdHgsXG4gICAgRElNRU5TSU9OLFxuICAgIHNwZWVkOiAyMCxcbiAgICBwbGFuOiBbXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgaXRzIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgeHh4IGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgIF1cbiAgfSksXG4gIG5ldyBHYW1lKHtcbiAgICAvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcbiAgICAvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcbiAgICBjYW52YXMsXG4gICAgY29udGV4dDogY3R4LFxuICAgIERJTUVOU0lPTixcbiAgICBzcGVlZDogMjAsXG4gICAgcGxhbjogW1wia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBwdFdcIixcbiAgICAgIFwiaXRzIGtrayBra2tcIixcbiAgICAgIFwia2trIHh4eCBra2tcIixcbiAgICAgIFwicHRXIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHh4eCBra2tcIixcbiAgICAgIFwicHRXIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIlxuICAgIF1cbiAgfSksXG4gIG5ldyBHYW1lKHtcbiAgICAvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcbiAgICAvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcbiAgICBjYW52YXMsXG4gICAgY29udGV4dDogY3R4LFxuICAgIERJTUVOU0lPTixcbiAgICBzcGVlZDogMjAsXG4gICAgcGxhbjogW1wia2trIGtrayBra2tcIixcbiAgICAgIFwiaXRzIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwicHRXIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHh4eCBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwieHh4IGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwicHRXIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIlxuICAgIF1cbiAgfSksXG4gIG5ldyBHYW1lKHtcbiAgICAvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcbiAgICAvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcbiAgICBjYW52YXMsXG4gICAgY29udGV4dDogY3R4LFxuICAgIERJTUVOU0lPTixcbiAgICBzcGVlZDogMjAsXG4gICAgcGxhbjogW1wia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGl0cyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0QiBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHh4eCBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0QiBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIlxuICAgIF1cbiAgfSksXG4gIG5ldyBHYW1lKHtcbiAgICAvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcbiAgICAvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcbiAgICBjYW52YXMsXG4gICAgY29udGV4dDogY3R4LFxuICAgIERJTUVOU0lPTixcbiAgICBzcGVlZDogMjAsXG4gICAgcGxhbjogW1wia2trIGl0cyBra2tcIixcbiAgICAgIFwia2trIHB0QiBra2tcIixcbiAgICAgIFwia2trIGtrayBwdFdcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBwdEJcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBwdFdcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayB4eHhcIixcbiAgICAgIFwia2trIGtrayBwdFdcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBwdFdcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBwdFdcIixcbiAgICAgIFwia2trIHh4eCBra2tcIixcbiAgICAgIFwia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIlxuICAgIF1cbiAgfSksXG5cbiAgbmV3IEdhbWUoe1xuICAgIC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuICAgIC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuICAgIGNhbnZhcyxcbiAgICBjb250ZXh0OiBjdHgsXG4gICAgRElNRU5TSU9OLFxuICAgIHNwZWVkOiAyMCxcbiAgICBwbGFuOiBbXCJra2sgaXRzIGtra1wiLFxuICAgICAgXCJra2sgcHRCIGtra1wiLFxuICAgICAgXCJra2sga2trIHB0V1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIHB0QlwiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIHB0V1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIHh4eFwiLFxuICAgICAgXCJra2sga2trIHB0V1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIHB0V1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIHB0V1wiLFxuICAgICAgXCJra2sgeHh4IGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiXG4gICAgXVxuICB9KSxcbiAgbmV3IEdhbWUoe1xuICAgIC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuICAgIC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuICAgIGNhbnZhcyxcbiAgICBjb250ZXh0OiBjdHgsXG4gICAgRElNRU5TSU9OLFxuICAgIHNwZWVkOiAyMCxcbiAgICBwbGFuOiBbXCJpdHMga2trIGtra1wiLFxuICAgICAgXCJwdEIga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIHB0QlwiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgeHh4IHB0V1wiLFxuICAgICAgXCJra2sgcHRCIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJ4eHggeHh4IGtra1wiLFxuICAgICAgXCJwdEIga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJwdFcga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJwdEIga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRCIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiXG4gICAgXVxuICB9KSxcbiAgbmV3IEdhbWUoe1xuICAgIC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuICAgIC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuICAgIGNhbnZhcyxcbiAgICBjb250ZXh0OiBjdHgsXG4gICAgRElNRU5TSU9OLFxuICAgIHNwZWVkOiAyMCxcbiAgICBwbGFuOiBbXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgaXRzIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgeHh4IGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgaXRyIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiXG4gICAgXVxuICB9KSxcbiAgbmV3IEdhbWUoe1xuICAgIC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuICAgIC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuICAgIGNhbnZhcyxcbiAgICBjb250ZXh0OiBjdHgsXG4gICAgRElNRU5TSU9OLFxuICAgIHNwZWVkOiAyMCxcbiAgICBwbGFuOiBbXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgaXRzIGl0clwiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgeHh4IHB0QlwiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIHB0V1wiLFxuICAgICAgXCJ4eHgga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIHB0V1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJwdEIga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJwdFcga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJwdEIga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiXG4gICAgXVxuICB9KSxcbiAgbmV3IEdhbWUoe1xuICAgIC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuICAgIC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuICAgIGNhbnZhcyxcbiAgICBjb250ZXh0OiBjdHgsXG4gICAgRElNRU5TSU9OLFxuICAgIHNwZWVkOiAyMCxcbiAgICBwbGFuOiBbXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgaXRzIGl0clwiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgeHh4IHB0QlwiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIHB0V1wiLFxuICAgICAgXCJ4eHgga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIHB0V1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJwdEIga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJwdFcga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJwdEIga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiXG4gICAgXVxuICB9KSxcblxuXG5cblxuXTtcblxuXG5cbmZ1bmN0aW9uIGNob29zZUdhbWUobnVtKSB7XG4gIGdhbWVzW251bV0uaW5pU2V0VXAoKTtcbn1cblxudmFyIGNvdW50ID0gMDtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0JylcbiAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIFx0Z2FtZXNbY291bnRdLnN0b3AoKTtcbiAgICBjaG9vc2VHYW1lKCsrY291bnQpO1xuXG4gIH0pO1xuXG5jaG9vc2VHYW1lKDApOyIsImltcG9ydCBPYmogZnJvbSAnLi9PYmonO1xuXG5jbGFzcyBDaGFyYWN0ZXIgZXh0ZW5kcyBPYmoge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgdGhpcy5zdGF0ZSA9IG9wdGlvbnMuc3RhdGU7XG4gICAgdGhpcy5jdXJyWSA9IHRoaXMuY29udmVydFBpeGVsKG9wdGlvbnMpLnk7IC8vaW4gcGl4ZWw7IFkgREVDUkVBU0VTXG4gICAgdGhpcy5jdXJyWCA9IHRoaXMuY29udmVydFBpeGVsKG9wdGlvbnMpLng7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XG4gIH1cblxuICBpbml0aWFsaXplQ2hhcmFjdGVyKGN0eCkge1xuICAgIC8vb25seSBhYmxlIHRvIGFjY2VzcyAndGhpcycgb24gdGhlIG91dHNpZGVcblxuICAgIHZhciB4ID0gdGhpcy5jdXJyWDtcbiAgICB2YXIgeSA9IHRoaXMuY3Vyclk7XG4gICAgdmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2VPYmoub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICBjdHguZHJhd0ltYWdlKGltYWdlT2JqLCB4LCB5KTtcbiAgICB9O1xuICAgIGltYWdlT2JqLnNyYyA9IFwiLi9pbWFnZXMvQmxhY2syLnBuZ1wiO1xuXG4gIH1cblxuICByZWJvcm5DaGFyYWN0ZXIoY3R4KSB7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMub3B0aW9ucy5zdGF0ZTtcbiAgICB0aGlzLmN1cnJYID0gdGhpcy5jb252ZXJ0UGl4ZWwodGhpcy5vcHRpb25zKS54O1xuICAgIHRoaXMuY3VyclkgPSB0aGlzLmNvbnZlcnRQaXhlbCh0aGlzLm9wdGlvbnMpLnk7XG4gIH1cbiAgbW92ZSgpIHtcbiAgICB2YXIgZHkgPSAtMjtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gMCkge1xuICAgICAgdGhpcy5jdXJyWSArPSBkeTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmN1cnJZIC09IGR5O1xuICAgIH1cblxuICB9XG4gIHJldmVyc2UoKSB7XG4gIGlmICh0aGlzLmRpcmVjdGlvbiA9PSAwKSB0aGlzLmRpcmVjdGlvbiA9IDE7XG4gIGVsc2UgdGhpcy5kaXJlY3Rpb24gPSAwO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcblxuICAgIHZhciB4ID0gdGhpcy5jdXJyWDtcbiAgICB2YXIgeSA9IHRoaXMuY3Vyclk7XG4gICAgdmFyIGltYWdlT2JqQiA9IG5ldyBJbWFnZSgpO1xuICAgIHZhciBpbWFnZU9ialcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZU9iakIuc3JjID0gXCIuL2ltYWdlcy9CbGFjazIucG5nXCI7XG4gICAgaW1hZ2VPYmpXLnNyYyA9IFwiLi9pbWFnZXMvV2hpdGUyLnBuZ1wiO1xuICAgIGltYWdlT2JqQi5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZHJhd0NoYXJJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gMCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcywgeCwgeSk7XG4gICAgICAgIH1cbiAgICAgIH0sIDIwKTtcbiAgICB9XG4gICAgaW1hZ2VPYmpXLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLCB4LCB5KTtcbiAgICAgICAgfVxuICAgICAgfSwgMjApO1xuICAgIH1cblxuICAgIGltYWdlT2JqQi5zcmMgPSBcIi4vaW1hZ2VzL0JsYWNrMi5wbmdcIjtcbiAgICBpbWFnZU9ialcuc3JjID0gXCIuL2ltYWdlcy9XaGl0ZTIucG5nXCI7XG4gIH1cblxuXG5cbiAgLy8gc2V0SW50ZXJ2YWwoZHJhdyAsMjApOy8vY2hlY2sgZXZlcnkgMjBtc1xuXG4gIGNvbnZlcnRQaXhlbChjb3VudGVyKSB7XG4gICAgdmFyIGdyaWRQaXhlbCA9IHtcbiAgICAgIHg6IGNvdW50ZXIuR3JpZFggKiAodGhpcy5IX0RJTUVOVElPTiAvIHRoaXMuSF9CTE9DS1MpLFxuICAgICAgeTogKGNvdW50ZXIuR3JpZFkpICogKHRoaXMuVl9ESU1FTlRJT04gLyB0aGlzLlZfQkxPQ0tTKVxuICAgIH1cbiAgICByZXR1cm4gZ3JpZFBpeGVsO1xuICB9XG5cblxuXG5cbiAgY2hhbmdlU3RhdGUoZSkge1xuICAgIC8vcmVnaXN0ZXIgYSBldmVudCBsaXN0ZW5lclxuICAgIHZhciBrZXkgPSBlLmtleUNvZGUgPyBlLmtleUNvZGUgOiBlLndoaWNoO1xuICAgIC8vIGNvbnNvbGUubG9nKGtleSk7XG4gICAgY29uc29sZS5sb2coXCJzdGF0ZSBpc1wiICsgdGhpcy5zdGF0ZSk7XG4gICAgaWYgKGtleSA9PSAxMDIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiWW91IFByZXNzZWQgdGhlIGZraW5nIEZcIik7XG5cbiAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgdGhpcy5zdGF0ZSsrO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2hpdGVcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0aGlzLnN0YXRlLS07XG4gICAgICAgICAgY29uc29sZS5sb2coXCJCbGFja1wiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImZ1Y2tcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDaGFyYWN0ZXI7IiwiaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlcic7XG5pbXBvcnQgT2JqIGZyb20gJy4vT2JqJztcbmltcG9ydCBQb3J0YWwgZnJvbSAnLi9Qb3J0YWwnO1xuLy8gaW1wb3J0IEVuZW15IGZyb20gLi9DaGFyYWN0ZXIuanM7XG5cblxuY2xhc3MgR2FtZSB7XG4gIC8vIHNldCB1cCBpbnN0YW5jZSB2YXJpYWJsZXNcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuY2FudmFzID0gb3B0aW9ucy5jYW52YXM7XG4gICAgdGhpcy5jdHggPSBvcHRpb25zLmNvbnRleHQ7XG4gICAgdGhpcy5ESU1FTlNJT04gPSBvcHRpb25zLkRJTUVOU0lPTjtcbiAgICB0aGlzLnVuaXZlcnNlRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml2ZXJzZScpO1xuICAgIHRoaXMuc3BlZWQgPSBvcHRpb25zLnNwZWVkO1xuICAgIHRoaXMucGxhbiA9IG9wdGlvbnMucGxhbjtcbiAgICB0aGlzLkdyaWQgPSBbXTtcbiAgICB0aGlzLnBvcnRhbHNCID0gW107XG4gICAgdGhpcy5wb3J0YWxzVyA9IFtdO1xuICAgIHRoaXMuaXRycyA9IFtdO1xuICAgIHRoaXMuaXRzcyA9IFtdO1xuICAgIHRoaXMubW92aW5nRSA9IFtdO1xuICAgIHRoaXMuc3RpbGxFID0gW107XG4gICAgdGhpcy5jaGFyYWN0ZXIgPSBuZXcgQ2hhcmFjdGVyKHtcbiAgICAgIHN0YXRlOiAwLFxuICAgICAgR3JpZFg6IDUsXG4gICAgICBHcmlkWTogMjNcbiAgICB9KTtcbiAgICB0aGlzLnBvaW50ID0gMDtcbiAgICB0aGlzLndpbiA9IGZhbHNlO1xuICAgIHRoaXMuSF9CTE9DS1MgPSAxMztcbiAgICB0aGlzLkhfRElNRU5USU9OID0gMjU2O1xuICAgIHRoaXMuSCA9IHRoaXMuSF9ESU1FTlNJT04gLyB0aGlzLkhfQkxPQ0tTO1xuICAgIHRoaXMuVl9CTE9DS1MgPSAyNTtcbiAgICB0aGlzLlZfRElNRU5USU9OID0gOTYwO1xuICAgIHRoaXMuViA9IHRoaXMuVl9ESU1FTlNJT04gLyB0aGlzLlZfQkxPQ0tTO1xuICAgIHRoaXMubW92ZUludGVydmFsID0gMDtcbiAgICB0aGlzLmRyYXdJbnRlcnZhbCA9IDA7XG5cbiAgfVxuXG4gIC8vIGluaXRpYWwgc2V0IHVwXG4gIGluaVNldFVwKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYucGxheSgpO1xuICAgICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgc2VsZi5jaGFyYWN0ZXIuY2hhbmdlU3RhdGUoZSk7XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLnBsYW4pO1xuICAgIHRoaXMucGFyc2UodGhpcy5wbGFuKTtcblxuICAgIHRoaXMuY2hhcmFjdGVyLmluaXRpYWxpemVDaGFyYWN0ZXIodGhpcy5jdHgpO1xuICAgIHRoaXMuZHJhdygpO1xuICAgIHRoaXMuY2hlY2tDb2xsaXNpb24oKTtcbiAgICB0aGlzLmNoYXJhY3Rlci5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG5cblxuICBwYXJzZShwbGFuKSB7XG4gICAgLy8gbGV0IGdyaWQgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGxhbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGFycmF5ID0gcGxhbltpXS5zcGxpdChcIiBcIik7XG5cblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBhcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoYXJyYXlbal0gPT0gXCJ4eHhcIikge1xuICAgICAgICAgIHRoaXMuc3RpbGxFLnB1c2gobmV3IE9iaih7XG4gICAgICAgICAgICBHcmlkWDogMSArIDMgKiBqICsgaixcbiAgICAgICAgICAgIEdyaWRZOiBpXG4gICAgICAgICAgfSkpO1xuXG5cbiAgICAgICAgfSBlbHNlIGlmIChhcnJheVtqXSA9PSBcIm1vZVwiKSB7XG4gICAgICAgICAgdGhpcy5FbmVtaWVzLnB1c2gobmV3IG1vdmluZ0Uoe30pKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGFycmF5W2pdID09IFwicHRXXCIpIHtcbiAgICAgICAgICB0aGlzLnBvcnRhbHNXLnB1c2gobmV3IFBvcnRhbCgxLCB7XG4gICAgICAgICAgICBHcmlkWDogMSArIDMgKiBqICsgaixcbiAgICAgICAgICAgIEdyaWRZOiBpXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGFycmF5W2pdID09IFwicHRCXCIpIHtcbiAgICAgICAgICB0aGlzLnBvcnRhbHNCLnB1c2gobmV3IFBvcnRhbCgwLCB7XG4gICAgICAgICAgICBHcmlkWDogMSArIDMgKiBqICsgaixcbiAgICAgICAgICAgIEdyaWRZOiBpXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGFycmF5W2pdID09IFwiaXRyXCIpIHtcbiAgICAgICAgICB0aGlzLml0cnMucHVzaChuZXcgT2JqKHtcbiAgICAgICAgICAgIEdyaWRYOiAxICsgMyAqIGogKyBqLFxuICAgICAgICAgICAgR3JpZFk6IGlcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJyYXlbal0gPT0gXCJpdHNcIikge1xuICAgICAgICAgIHRoaXMuaXRzcy5wdXNoKG5ldyBPYmooe1xuICAgICAgICAgICAgR3JpZFg6IDEgKyAzICogaiArIGosXG4gICAgICAgICAgICBHcmlkWTogaVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG5cbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cblxuXG5cbiAgcGxheSgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBjbGVhckludGVydmFsKHRoaXMubW92ZUludGVydmFsKTtcblxuICAgIHRoaXMubW92ZUludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLmNoYXJhY3Rlci5tb3ZlKCk7XG4gICAgfSwgMjApO1xuXG4gIH1cblxuXG4gIC8vIGRyYXcgZ3JpZFxuICBkcmF3R3JpZCgpIHtcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjNzc3JztcbiAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xuICAgIC8vIHZlcnRpY2FsIGxpbmVzXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9MRU5HVEg7IGkrKykge1xuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5ESU1FTlNJT04uQ0VMTF9MRU5HVEggKiBpLCAwKTtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCAqIGksXG4gICAgICAgIHRoaXMuRElNRU5TSU9OLlVOSVZFUlNFX0hFSUdIVCAqIHRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUKTtcbiAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgICAvLyBob3Jpem9udGFsIGxpbmVzXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9IRUlHSFQ7IGkrKykge1xuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLmN0eC5tb3ZlVG8oMCwgdGhpcy5ESU1FTlNJT04uQ0VMTF9IRUlHSFQgKiBpKTtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLkRJTUVOU0lPTi5VTklWRVJTRV9MRU5HVEggKiB0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCxcbiAgICAgICAgdGhpcy5ESU1FTlNJT04uQ0VMTF9IRUlHSFQgKiBpKTtcbiAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgdmFyIGN0eCA9IHRoaXMuY3R4O1xuICAgIHZhciB4c2hpZnQgPSB0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSDtcbiAgICB2YXIgeXNoaWZ0ID0gdGhpcy5ESU1FTlNJT04uQ0VMTF9IRUlHSFQ7XG4gICAgY29uc29sZS5sb2codGhpcy5wb3J0YWxzQik7XG4gICAgY29uc29sZS5sb2codGhpcy5wb3J0YWxzVyk7XG4gICAgdmFyIG9ic3RhY2xlSW1nID0gbmV3IEltYWdlKCk7XG4gICAgb2JzdGFjbGVJbWcuc3JjID0gXCIuL2ltYWdlcy9PYnN0YWNsZS5wbmdcIjtcbiAgICB2YXIgcG90QkltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHBvdEJJbWcuc3JjID0gXCIuL2ltYWdlcy9wb3RCLnBuZ1wiO1xuICAgIHZhciBwb3RXSW1nID0gbmV3IEltYWdlKCk7XG4gICAgcG90V0ltZy5zcmMgPSBcIi4vaW1hZ2VzL3BvdFcucG5nXCI7XG4gICAgdmFyIHN0YXIySW1nID0gbmV3IEltYWdlKCk7XG4gICAgc3RhcjJJbWcuc3JjID0gXCIuL2ltYWdlcy9TdGFyMi5wbmdcIjtcbiAgICB2YXIgcmV2SW1nID0gbmV3IEltYWdlKCk7XG4gICAgcmV2SW1nLnNyYyA9IFwiLi9pbWFnZXMvcmV2ZXJzZS5wbmdcIjtcbiAgICB2YXIgYkNoYXIgPSBuZXcgSW1hZ2UoKTtcbiAgICB2YXIgd0NoYXIgPSBuZXcgSW1hZ2UoKTtcbiAgICBiQ2hhci5zcmMgPSBcIi4vaW1hZ2VzL0JsYWNrMi5wbmdcIjtcbiAgICB3Q2hhci5zcmMgPSBcIi4vaW1hZ2VzL1doaXRlMi5wbmdcIjtcbiAgICB0aGlzLmRyYXdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5IX0RJTUVOVElPTiwgdGhpcy5WX0RJTUVOVElPTik7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RpbGxFLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB4ID0gdGhpcy5zdGlsbEVbaV0uR3JpZFg7XG4gICAgICAgIGxldCB5ID0gdGhpcy5zdGlsbEVbaV0uR3JpZFk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2Uob2JzdGFjbGVJbWcsIHggKiB4c2hpZnQsIHkgKiB5c2hpZnQpO1xuXG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxSZWN0KCwsMyp0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCx0aGlzLkRJTUVOU0lPTi5DRUxMX0hFSUdIVCk7XG5cbiAgICAgIH1cblxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9ydGFsc0IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHggPSB0aGlzLnBvcnRhbHNCW2ldLkdyaWRYO1xuICAgICAgICBsZXQgeSA9IHRoaXMucG9ydGFsc0JbaV0uR3JpZFk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UocG90QkltZywgeCAqIHhzaGlmdCwgeSAqIHlzaGlmdCk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wb3J0YWxzVy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgeCA9IHRoaXMucG9ydGFsc1dbaV0uR3JpZFg7XG4gICAgICAgIGxldCB5ID0gdGhpcy5wb3J0YWxzV1tpXS5HcmlkWTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShwb3RXSW1nLCB4ICogeHNoaWZ0LCB5ICogeXNoaWZ0KTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0c3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHggPSB0aGlzLml0c3NbaV0uR3JpZFg7XG4gICAgICAgIGxldCB5ID0gdGhpcy5pdHNzW2ldLkdyaWRZO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHN0YXIySW1nLCB4ICogeHNoaWZ0LCB5ICogeXNoaWZ0KTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0cnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHggPSB0aGlzLml0cnNbaV0uR3JpZFg7XG4gICAgICAgIGxldCB5ID0gdGhpcy5pdHJzW2ldLkdyaWRZO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHJldkltZywgeCAqIHhzaGlmdCwgeSAqIHlzaGlmdCk7XG4gICAgICB9XG5cblxuXG4gICAgICBpZiAodGhpcy5jaGFyYWN0ZXIuc3RhdGUgPT0gMCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGJDaGFyLCB0aGlzLmNoYXJhY3Rlci5jdXJyWCwgdGhpcy5jaGFyYWN0ZXIuY3VyclkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh3Q2hhciwgdGhpcy5jaGFyYWN0ZXIuY3VyclgsIHRoaXMuY2hhcmFjdGVyLmN1cnJZKTtcbiAgICAgIH1cblxuXG4gICAgfSwgMjApO1xuICB9XG5cbiAgY2hlY2tDb2xsaXNpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBiQ2hhciA9IG5ldyBJbWFnZSgpO1xuICAgIGJDaGFyLnNyYyA9IFwiLi9pbWFnZXMvQmxhY2syLnBuZ1wiO1xuICAgIHZhciB3Q2hhciA9IG5ldyBJbWFnZSgpO1xuICAgIHdDaGFyLnNyYyA9IFwiLi9pbWFnZXMvV2hpdGUyLnBuZ1wiO1xuXG4gICAgLy9sb29wIHRocm91Z2ggZXZlcnkgb2JqZWN0IGluIHRoZSBtYXBcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wb3J0YWxzQi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wb3J0YWxzQi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBwaXhlbCA9IGNvbnZlcnRQaXhlbCh0aGlzLnBvcnRhbHNCW2ldKTtcbiAgICAgICAgICBpZiAoKE1hdGguYWJzKHRoaXMuY2hhcmFjdGVyLmN1cnJZIC0gcGl4ZWwueSkgPCA1KSBcbiAgICAgICAgICAgICYmIChNYXRoLmFicyh0aGlzLmNoYXJhY3Rlci5jdXJyWCAtIHBpeGVsLngpIDwgNSkgXG4gICAgICAgICAgICAmJiAodGhpcy5jaGFyYWN0ZXIuc3RhdGUgPT0gMCkpIHtcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgdmFyIG5ld0xvYyA9IGNvbnZlcnRQaXhlbCh0aGlzLnBvcnRhbHNCW3RoaXMucG9ydGFsc0IubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHZhciBuZXdMb2MgPSBjb252ZXJ0UGl4ZWwodGhpcy5wb3J0YWxzQltpIC0gMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXIuY3VyclggPSBuZXdMb2MueDtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoYXJhY3Rlci5kaXJlY3Rpb24gPT0gMClcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLmN1cnJZID0gbmV3TG9jLnkgLSAxMTtcbiAgICAgICAgICAgIGVsc2UgdGhpcy5jaGFyYWN0ZXIuY3VyclkgPSBuZXdMb2MueSArIDExO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wb3J0YWxzVy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wb3J0YWxzVy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBwaXhlbCA9IGNvbnZlcnRQaXhlbCh0aGlzLnBvcnRhbHNXW2ldKTtcbiAgICAgICAgICBpZiAoKE1hdGguYWJzKHRoaXMuY2hhcmFjdGVyLmN1cnJZIC0gcGl4ZWwueSkgPCA1KSAmJiAoTWF0aC5hYnModGhpcy5jaGFyYWN0ZXIuY3VyclggLSBwaXhlbC54KSA8IDUpICYmICh0aGlzLmNoYXJhY3Rlci5zdGF0ZSA9PSAxKSkge1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICB2YXIgbmV3TG9jID0gY29udmVydFBpeGVsKHRoaXMucG9ydGFsc1dbdGhpcy5wb3J0YWxzVy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIG5ld0xvYyA9IGNvbnZlcnRQaXhlbCh0aGlzLnBvcnRhbHNXW2kgLSAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3Rlci5jdXJyWCA9IG5ld0xvYy54O1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyLmRpcmVjdGlvbiA9PSAwKVxuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXIuY3VyclkgPSBuZXdMb2MueSAtIDExO1xuICAgICAgICAgICAgZWxzZSB0aGlzLmNoYXJhY3Rlci5jdXJyWSA9IG5ld0xvYy55ICsgMTE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGlsbEUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHBpeGVsID0gY29udmVydFBpeGVsKHRoaXMuc3RpbGxFW2ldKTsgLy9pbiBwaXhlbFxuICAgICAgICAgaWYgKChNYXRoLmFicyh0aGlzLmNoYXJhY3Rlci5jdXJyWSAtIHBpeGVsLnkpIDwgNSkgJiYgKE1hdGguYWJzKHRoaXMuY2hhcmFjdGVyLmN1cnJYIC0gcGl4ZWwueCkgPCA1KSkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5tb3ZlSW50ZXJ2YWwpO1xuICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLnJlYm9ybkNoYXJhY3Rlcih0aGlzLmN0eCk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJpIGFtIGV4ZWN1dGVkXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdHNzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwaXhlbCA9IGNvbnZlcnRQaXhlbCh0aGlzLml0c3NbaV0pOyAvL2luIHBpeGVsXG4gICAgICAgIGlmICgoTWF0aC5hYnModGhpcy5jaGFyYWN0ZXIuY3VyclkgLSBwaXhlbC55KSA8IDUpICYmIChNYXRoLmFicyh0aGlzLmNoYXJhY3Rlci5jdXJyWCAtIHBpeGVsLngpIDwgNSkpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMubW92ZUludGVydmFsKTtcbiAgICAgICAgICB0aGlzLmNoYXJhY3Rlci5yZWJvcm5DaGFyYWN0ZXIodGhpcy5jdHgpO1xuICAgICAgICAgIGFsZXJ0KFwieW91IHdpbiFcIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0cnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHBpeGVsID0gY29udmVydFBpeGVsKHRoaXMuaXRyc1tpXSk7IC8vaW4gcGl4ZWxcbiAgICAgICAgaWYgKChNYXRoLmFicyh0aGlzLmNoYXJhY3Rlci5jdXJyWSAtIHBpeGVsLnkpIDwgNSkgJiYgKE1hdGguYWJzKHRoaXMuY2hhcmFjdGVyLmN1cnJYIC0gcGl4ZWwueCkgPCA1KSkge1xuICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLnJldmVyc2UoKTtcblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNoYXJhY3Rlci5jdXJyWSA8IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJmYWlsIVwiKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLm1vdmVJbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVyLnJlYm9ybkNoYXJhY3Rlcih0aGlzLmN0eCk7XG4gICAgICB9XG5cblxuICAgIH0sIDIwKTtcblxuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuZHJhd0ludGVydmFsKTtcbiAgICBjbGVhckludGVydmFsKHRoaXMubW92ZUludGVydmFsKTtcbiAgICBjbGVhckludGVydmFsKHRoaXMuY2hhcmFjdGVyLmRyYXdDaGFySW50ZXJ2YWwpO1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpLFxuICAgICAgICBlbENsb25lID0gZWwuY2xvbmVOb2RlKHRydWUpO1xuICAgIGVsLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGVsQ2xvbmUsIGVsKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHNlbGYuY2hhcmFjdGVyLmNoYW5nZVN0YXRlKGUpO1xuICAgIH0pO1xuICB9XG59XG5cblxuZnVuY3Rpb24gY29udmVydFBpeGVsKGNvdW50ZXIpIHtcbiAgdmFyIEhfQkxPQ0tTID0gMTM7XG4gIHZhciBIX0RJTUVOVElPTiA9IDI1NjtcbiAgdmFyIFZfQkxPQ0tTID0gMjU7XG4gIHZhciBWX0RJTUVOVElPTiA9IDk2MDtcbiAgdmFyIGdyaWRQaXhlbCA9IHtcbiAgICB4OiBjb3VudGVyLkdyaWRYICogKEhfRElNRU5USU9OIC8gSF9CTE9DS1MpLFxuICAgIHk6IChjb3VudGVyLkdyaWRZKSAqIChWX0RJTUVOVElPTiAvIFZfQkxPQ0tTKVxuICB9XG4gIHJldHVybiBncmlkUGl4ZWw7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyIsImNsYXNzIE9iantcbiAgY29uc3RydWN0b3Iob3B0aW9ucyl7XG4gICAgdGhpcy5HcmlkWCA9IG9wdGlvbnMuR3JpZFg7XG4gICAgdGhpcy5HcmlkWSA9IG9wdGlvbnMuR3JpZFk7XG5cdHRoaXMuSF9CTE9DS1MgPSAxMztcbiAgICB0aGlzLkhfRElNRU5USU9OID0gMjU2O1xuICAgIHRoaXMuVl9CTE9DS1MgPSAyNTtcbiAgICB0aGlzLlZfRElNRU5USU9OID0gOTYwO1xuXG4gIH1cblxuXHQgY2xlYXIoY3R4KSB7XG5cdFx0IGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5IX0RJTUVOVElPTiwgIHRoaXMuVl9ESU1FTlRJT04pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqO1xuIiwiaW1wb3J0IE9iaiBmcm9tICcuL09iaic7XG5cbmNsYXNzIFBvcnRhbCBleHRlbmRzIE9iantcbiAgY29uc3RydWN0b3Ioc3RhdGUsb3B0aW9ucyl7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICB9XG59XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvcnRhbDtcbiJdfQ==
