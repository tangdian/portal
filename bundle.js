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
  RATIO: window.innerWidth / 1920,
  H_DIMENSION: 256 * window.innerWidth / 1920,
  V_DIMENSION: 960 * window.innerWidth / 1920,
  //H_DIMENSION:256,
  //V_DIMENSION:960,
  UNIVERSE_LENGTH: 13,
  UNIVERSE_HEIGHT: 25,
  CELL_LENGTH: 256 * window.innerWidth / 1920 / UNIVERSE_LENGTH,
  CELL_HEIGHT: 960 * window.innerWidth / 1920 / UNIVERSE_HEIGHT

};

var canvas = document.getElementById('universe');

var ctx = canvas.getContext('2d');

ctx.canvas.width = 256 * window.innerWidth / 1920;
ctx.canvas.height = 960 * window.innerWidth / 1920;

var games = [new _jsGame2['default']({
  // enhanced object literals
  // 'canvas,' is the same as 'canvas: canvas,'
  canvas: canvas,
  context: ctx,
  DIMENSION: DIMENSION,
  speed: 20,
  plan: ["xxx xxx xxx", "kkk kkk kkk", "xxx xxx kkk", "kkk kkk ptB", "kkk xxx ptB", "kkk ptB kkk", "kkk xxx ptW", "kkk kkk kkk", "xxx ptW kkk", "kkk kkk kkk", "kkk xxx ptW", "its kkk kkk", "ptW xxx kkk", "kkk kkk kkk", "xxx xxx kkk", "kkk kkk kkk", "kkk xxx ptB", "kkk kkk kkk", "kkk ptB kkk"]
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
      console.log(gridPixel);
      return gridPixel;
    }
  }, {
    key: "changeState",
    value: function changeState() {
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
    console.log(options.DIMENSION);
    this.RATIO = options.DIMENSION.RATIO;
    this.H_DIMENTION = options.DIMENSION.H_DIMENSION;
    this.V_DIMENTION = options.DIMENSION.V_DIMENSION;
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
      H_DIMENTION: this.H_DIMENTION,
      V_DIMENTION: this.V_DIMENTION,
      GridX: 5,
      GridY: 23
    });
    this.point = 0;
    this.win = false;
    this.H_BLOCKS = 13;

    this.H = this.H_DIMENSION / this.H_BLOCKS;
    this.V_BLOCKS = 25;

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

      document.getElementById('switch').addEventListener('click', function () {
        self.character.changeState();
      });

      document.addEventListener("keypress", function (e) {
        var key = e.keyCode ? e.keyCode : e.which;
        if (key == 102) self.character.changeState();
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
          ctx.drawImage(obstacleImg, x * xshift, y * yshift, 80 * _this.RATIO, 60 * _this.RATIO);
        }

        for (var i = 0; i < _this.portalsB.length; i++) {
          var x = _this.portalsB[i].GridX;
          var y = _this.portalsB[i].GridY;
          ctx.drawImage(potBImg, x * xshift, y * yshift, 70 * _this.RATIO, 36 * _this.RATIO);
        }

        for (var i = 0; i < _this.portalsW.length; i++) {
          var x = _this.portalsW[i].GridX;
          var y = _this.portalsW[i].GridY;
          ctx.drawImage(potWImg, x * xshift, y * yshift, 70 * _this.RATIO, 36 * _this.RATIO);
        }

        for (var i = 0; i < _this.itss.length; i++) {
          var x = _this.itss[i].GridX;
          var y = _this.itss[i].GridY;
          ctx.drawImage(star2Img, x * xshift, y * yshift, 40 * _this.RATIO, 40 * _this.RATIO);
        }

        for (var i = 0; i < _this.itrs.length; i++) {
          var x = _this.itrs[i].GridX;
          var y = _this.itrs[i].GridY;
          ctx.drawImage(revImg, x * xshift, y * yshift, 50 * _this.RATIO, 50 * _this.RATIO);
        }

        if (_this.character.state == 0) {
          ctx.drawImage(bChar, _this.character.currX, _this.character.currY, 50 * _this.RATIO, 50 * _this.RATIO);
        } else {
          ctx.drawImage(wChar, _this.character.currX, _this.character.currY, 50 * _this.RATIO, 50 * _this.RATIO);
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
        console.log("running");
        if (_this2.portalsB.length > 0) {
          for (var _i = 0; _i < _this2.portalsB.length; _i++) {
            var pixel = _this2.convertPixel(_this2.portalsB[_i]);
            if (Math.abs(_this2.character.currY - pixel.y) < 5 && Math.abs(_this2.character.currX - pixel.x) < 5 && _this2.character.state == 0) {
              if (_i == 0) {
                var newLoc = _this2.convertPixel(_this2.portalsB[_this2.portalsB.length - 1]);
              } else {
                var newLoc = _this2.convertPixel(_this2.portalsB[_i - 1]);
              }
              _this2.character.currX = newLoc.x;
              if (_this2.character.direction == 0) _this2.character.currY = newLoc.y - 11;else _this2.character.currY = newLoc.y + 11;
            }
          }
        }

        if (_this2.portalsW.length > 0) {
          for (var _i2 = 0; _i2 < _this2.portalsW.length; _i2++) {
            var pixel = _this2.convertPixel(_this2.portalsW[_i2]);
            if (Math.abs(_this2.character.currY - pixel.y) < 5 && Math.abs(_this2.character.currX - pixel.x) < 5 && _this2.character.state == 1) {
              if (_i2 == 0) {
                var newLoc = _this2.convertPixel(_this2.portalsW[_this2.portalsW.length - 1]);
              } else {
                var newLoc = _this2.convertPixel(_this2.portalsW[_i2 - 1]);
              }
              _this2.character.currX = newLoc.x;
              if (_this2.character.direction == 0) _this2.character.currY = newLoc.y - 11;else _this2.character.currY = newLoc.y + 11;
            }
          }
        }

        for (var i = 0; i < _this2.stillE.length; i++) {
          var pixel = _this2.convertPixel(_this2.stillE[i]); //in pixel
          if (Math.abs(_this2.character.currY - pixel.y) < 5 && Math.abs(_this2.character.currX - pixel.x) < 5) {
            clearInterval(_this2.moveInterval);
            _this2.character.rebornCharacter(_this2.ctx);
            console.log("i am executed");
          }
        }

        for (var i = 0; i < _this2.itss.length; i++) {
          var pixel = _this2.convertPixel(_this2.itss[i]); //in pixel
          if (Math.abs(_this2.character.currY - pixel.y) < 5 && Math.abs(_this2.character.currX - pixel.x) < 5) {
            clearInterval(_this2.moveInterval);
            _this2.character.rebornCharacter(_this2.ctx);
            alert("you win!");
          }
        }

        for (var i = 0; i < _this2.itrs.length; i++) {
          var pixel = _this2.convertPixel(_this2.itrs[i]); //in pixel
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
  }, {
    key: 'convertPixel',
    value: function convertPixel(counter) {
      // var H_BLOCKS = 13;
      // var H_DIMENTION = 256;
      // var V_BLOCKS = 25;
      // var V_DIMENTION = 960;
      var gridPixel = {
        x: counter.GridX * (this.H_DIMENTION / this.H_BLOCKS),
        y: counter.GridY * (this.V_DIMENTION / this.V_BLOCKS)
      };
      return gridPixel;
    }
  }]);

  return Game;
})();

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
    this.H_DIMENTION = options.H_DIMENTION;
    this.V_BLOCKS = 25;
    this.V_DIMENTION = options.V_DIMENTION;
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGlhbnRhbmcvcHJvZy9wb3J0YWwvYXBwLmpzIiwiL1VzZXJzL2RpYW50YW5nL3Byb2cvcG9ydGFsL2pzL0NoYXJhY3Rlci5qcyIsIi9Vc2Vycy9kaWFudGFuZy9wcm9nL3BvcnRhbC9qcy9HYW1lLmpzIiwiL1VzZXJzL2RpYW50YW5nL3Byb2cvcG9ydGFsL2pzL09iai5qcyIsIi9Vc2Vycy9kaWFudGFuZy9wcm9nL3BvcnRhbC9qcy9Qb3J0YWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O3NCQ0FpQixXQUFXOzs7OztBQUc1QixJQUFNLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDbEIsSUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDOztBQUVuQixJQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDM0IsSUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDOztBQUUzQixJQUFNLFNBQVMsR0FBRztBQUNmLE9BQUssRUFBRSxNQUFNLENBQUMsVUFBVSxHQUFDLElBQUk7QUFDN0IsYUFBVyxFQUFFLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFDLElBQUk7QUFDekMsYUFBVyxFQUFFLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFDLElBQUk7OztBQUcxQyxpQkFBZSxFQUFFLEVBQUU7QUFDbkIsaUJBQWUsRUFBRSxFQUFFO0FBQ25CLGFBQVcsRUFBRSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsR0FBQyxJQUFJLEdBQUcsZUFBZTtBQUMzRCxhQUFXLEVBQUUsR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUMsSUFBSSxHQUFHLGVBQWU7O0NBRTVELENBQUM7O0FBRUYsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7QUFFakQsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFbEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDO0FBQ2hELEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFDLElBQUksQ0FBQzs7QUFFbEQsSUFBSSxLQUFLLEdBQUcsQ0FBQyx3QkFBUzs7O0FBR2xCLFFBQU0sRUFBTixNQUFNO0FBQ04sU0FBTyxFQUFFLEdBQUc7QUFDWixXQUFTLEVBQVQsU0FBUztBQUNULE9BQUssRUFBRSxFQUFFO0FBQ1QsTUFBSSxFQUFFLENBQUMsYUFBYSxFQUNsQixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsQ0FDZDtDQUNGLENBQUMsRUFBRSx3QkFBUzs7O0FBR1gsUUFBTSxFQUFOLE1BQU07QUFDTixTQUFPLEVBQUUsR0FBRztBQUNaLFdBQVMsRUFBVCxTQUFTO0FBQ1QsT0FBSyxFQUFFLEVBQUU7QUFDVCxNQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQ2xCLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsQ0FDZDtDQUNGLENBQUMsRUFDRix3QkFBUzs7O0FBR1AsUUFBTSxFQUFOLE1BQU07QUFDTixTQUFPLEVBQUUsR0FBRztBQUNaLFdBQVMsRUFBVCxTQUFTO0FBQ1QsT0FBSyxFQUFFLEVBQUU7QUFDVCxNQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQ2xCLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsQ0FDZDtDQUNGLENBQUMsRUFDRix3QkFBUzs7O0FBR1AsUUFBTSxFQUFOLE1BQU07QUFDTixTQUFPLEVBQUUsR0FBRztBQUNaLFdBQVMsRUFBVCxTQUFTO0FBQ1QsT0FBSyxFQUFFLEVBQUU7QUFDVCxNQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQ2xCLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsQ0FDZDtDQUNGLENBQUMsRUFDRix3QkFBUzs7O0FBR1AsUUFBTSxFQUFOLE1BQU07QUFDTixTQUFPLEVBQUUsR0FBRztBQUNaLFdBQVMsRUFBVCxTQUFTO0FBQ1QsT0FBSyxFQUFFLEVBQUU7QUFDVCxNQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQ2xCLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsQ0FDZDtDQUNGLENBQUMsRUFDRix3QkFBUzs7O0FBR1AsUUFBTSxFQUFOLE1BQU07QUFDTixTQUFPLEVBQUUsR0FBRztBQUNaLFdBQVMsRUFBVCxTQUFTO0FBQ1QsT0FBSyxFQUFFLEVBQUU7QUFDVCxNQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQ2xCLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsQ0FDZDtDQUNGLENBQUMsRUFDRix3QkFBUzs7O0FBR1AsUUFBTSxFQUFOLE1BQU07QUFDTixTQUFPLEVBQUUsR0FBRztBQUNaLFdBQVMsRUFBVCxTQUFTO0FBQ1QsT0FBSyxFQUFFLEVBQUU7QUFDVCxNQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQ2xCLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsQ0FDZDtDQUNGLENBQUMsRUFDRix3QkFBUzs7O0FBR1AsUUFBTSxFQUFOLE1BQU07QUFDTixTQUFPLEVBQUUsR0FBRztBQUNaLFdBQVMsRUFBVCxTQUFTO0FBQ1QsT0FBSyxFQUFFLEVBQUU7QUFDVCxNQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQ2xCLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2Is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QUFFLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUN6RDs7O1NBYkcsR0FBRzs7O0FBZ0JULE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7O29CQ2hCTCxPQUFPOzs7O0lBRWpCLE1BQU07WUFBTixNQUFNOztBQUNDLFdBRFAsTUFBTSxDQUNFLEtBQUssRUFBQyxPQUFPLEVBQUM7MEJBRHRCLE1BQU07O0FBRVIsK0JBRkUsTUFBTSw2Q0FFRixPQUFPLEVBQUU7QUFDZixRQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztHQUNwQjs7U0FKRyxNQUFNOzs7QUFTWixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgR2FtZSBmcm9tICcuL2pzL0dhbWUnO1xuXG4vLyBpbiBwaXhlbHNcbmNvbnN0IFdJRFRIID0gMjU2O1xuY29uc3QgSEVJR0hUID0gOTYwO1xuLy8gaW4gY2VsbCB1bml0c1xuY29uc3QgVU5JVkVSU0VfTEVOR1RIID0gMTM7XG5jb25zdCBVTklWRVJTRV9IRUlHSFQgPSAyNTtcblxuY29uc3QgRElNRU5TSU9OID0ge1xuICAgUkFUSU86IHdpbmRvdy5pbm5lcldpZHRoLzE5MjAsXG4gICBIX0RJTUVOU0lPTjogMjU2ICogd2luZG93LmlubmVyV2lkdGgvMTkyMCxcbiAgIFZfRElNRU5TSU9OOiA5NjAgKiB3aW5kb3cuaW5uZXJXaWR0aC8xOTIwLFxuICAvL0hfRElNRU5TSU9OOjI1NixcbiAgLy9WX0RJTUVOU0lPTjo5NjAsXG4gIFVOSVZFUlNFX0xFTkdUSDogMTMsXG4gIFVOSVZFUlNFX0hFSUdIVDogMjUsXG4gIENFTExfTEVOR1RIOiAyNTYgKiB3aW5kb3cuaW5uZXJXaWR0aC8xOTIwIC8gVU5JVkVSU0VfTEVOR1RILFxuICBDRUxMX0hFSUdIVDogOTYwICogd2luZG93LmlubmVyV2lkdGgvMTkyMCAvIFVOSVZFUlNFX0hFSUdIVFxuXG59O1xuXG52YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXZlcnNlJyk7XG5cbnZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuY3R4LmNhbnZhcy53aWR0aCAgPSAyNTYgKiB3aW5kb3cuaW5uZXJXaWR0aC8xOTIwO1xuIGN0eC5jYW52YXMuaGVpZ2h0ID0gOTYwICogd2luZG93LmlubmVyV2lkdGgvMTkyMDtcblxudmFyIGdhbWVzID0gW25ldyBHYW1lKHtcbiAgICAvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcbiAgICAvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcbiAgICBjYW52YXMsXG4gICAgY29udGV4dDogY3R4LFxuICAgIERJTUVOU0lPTixcbiAgICBzcGVlZDogMjAsXG4gICAgcGxhbjogW1wieHh4IHh4eCB4eHhcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwieHh4IHh4eCBra2tcIixcbiAgICAgIFwia2trIGtrayBwdEJcIixcbiAgICAgIFwia2trIHh4eCBwdEJcIixcbiAgICAgIFwia2trIHB0QiBra2tcIixcbiAgICAgIFwia2trIHh4eCBwdFdcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwieHh4IHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHh4eCBwdFdcIixcbiAgICAgIFwiaXRzIGtrayBra2tcIixcbiAgICAgIFwicHRXIHh4eCBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwieHh4IHh4eCBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHh4eCBwdEJcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0QiBra2tcIlxuICAgIF1cbiAgfSksIG5ldyBHYW1lKHtcbiAgICAvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcbiAgICAvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcbiAgICBjYW52YXMsXG4gICAgY29udGV4dDogY3R4LFxuICAgIERJTUVOU0lPTixcbiAgICBzcGVlZDogMjAsXG4gICAgcGxhbjogW1wia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGl0cyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0QiBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHh4eCBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0QiBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIlxuICAgIF1cbiAgfSksXG4gIG5ldyBHYW1lKHtcbiAgICAvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcbiAgICAvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcbiAgICBjYW52YXMsXG4gICAgY29udGV4dDogY3R4LFxuICAgIERJTUVOU0lPTixcbiAgICBzcGVlZDogMjAsXG4gICAgcGxhbjogW1wia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGl0cyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIlxuICAgIF1cbiAgfSksXG4gIG5ldyBHYW1lKHtcbiAgICAvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcbiAgICAvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcbiAgICBjYW52YXMsXG4gICAgY29udGV4dDogY3R4LFxuICAgIERJTUVOU0lPTixcbiAgICBzcGVlZDogMjAsXG4gICAgcGxhbjogW1wia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGl0cyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHh4eCBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICBdXG4gIH0pLFxuICBuZXcgR2FtZSh7XG4gICAgLy8gZW5oYW5jZWQgb2JqZWN0IGxpdGVyYWxzXG4gICAgLy8gJ2NhbnZhcywnIGlzIHRoZSBzYW1lIGFzICdjYW52YXM6IGNhbnZhcywnXG4gICAgY2FudmFzLFxuICAgIGNvbnRleHQ6IGN0eCxcbiAgICBESU1FTlNJT04sXG4gICAgc3BlZWQ6IDIwLFxuICAgIHBsYW46IFtcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sgcHRXXCIsXG4gICAgICBcIml0cyBra2sga2trXCIsXG4gICAgICBcImtrayB4eHgga2trXCIsXG4gICAgICBcInB0VyBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayB4eHgga2trXCIsXG4gICAgICBcInB0VyBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBwdFcga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCJcbiAgICBdXG4gIH0pLFxuICBuZXcgR2FtZSh7XG4gICAgLy8gZW5oYW5jZWQgb2JqZWN0IGxpdGVyYWxzXG4gICAgLy8gJ2NhbnZhcywnIGlzIHRoZSBzYW1lIGFzICdjYW52YXM6IGNhbnZhcywnXG4gICAgY2FudmFzLFxuICAgIGNvbnRleHQ6IGN0eCxcbiAgICBESU1FTlNJT04sXG4gICAgc3BlZWQ6IDIwLFxuICAgIHBsYW46IFtcImtrayBra2sga2trXCIsXG4gICAgICBcIml0cyBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcInB0VyBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayB4eHgga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBwdFcga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcInh4eCBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcInB0VyBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBwdFcga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBwdFcga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCJcbiAgICBdXG4gIH0pLFxuICBuZXcgR2FtZSh7XG4gICAgLy8gZW5oYW5jZWQgb2JqZWN0IGxpdGVyYWxzXG4gICAgLy8gJ2NhbnZhcywnIGlzIHRoZSBzYW1lIGFzICdjYW52YXM6IGNhbnZhcywnXG4gICAgY2FudmFzLFxuICAgIGNvbnRleHQ6IGN0eCxcbiAgICBESU1FTlNJT04sXG4gICAgc3BlZWQ6IDIwLFxuICAgIHBsYW46IFtcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBpdHMga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBwdEIga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayB4eHgga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBwdEIga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCJcbiAgICBdXG4gIH0pLFxuICBuZXcgR2FtZSh7XG4gICAgLy8gZW5oYW5jZWQgb2JqZWN0IGxpdGVyYWxzXG4gICAgLy8gJ2NhbnZhcywnIGlzIHRoZSBzYW1lIGFzICdjYW52YXM6IGNhbnZhcywnXG4gICAgY2FudmFzLFxuICAgIGNvbnRleHQ6IGN0eCxcbiAgICBESU1FTlNJT04sXG4gICAgc3BlZWQ6IDIwLFxuICAgIHBsYW46IFtcImtrayBpdHMga2trXCIsXG4gICAgICBcImtrayBwdEIga2trXCIsXG4gICAgICBcImtrayBra2sgcHRXXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sgcHRCXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sgcHRXXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sgeHh4XCIsXG4gICAgICBcImtrayBra2sgcHRXXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sgcHRXXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sgcHRXXCIsXG4gICAgICBcImtrayB4eHgga2trXCIsXG4gICAgICBcImtrayBwdFcga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBwdFcga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCIsXG4gICAgICBcImtrayBra2sga2trXCJcbiAgICBdXG4gIH0pLFxuXG4gIG5ldyBHYW1lKHtcbiAgICAvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcbiAgICAvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcbiAgICBjYW52YXMsXG4gICAgY29udGV4dDogY3R4LFxuICAgIERJTUVOU0lPTixcbiAgICBzcGVlZDogMjAsXG4gICAgcGxhbjogW1wia2trIGl0cyBra2tcIixcbiAgICAgIFwia2trIHB0QiBra2tcIixcbiAgICAgIFwia2trIGtrayBwdFdcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBwdEJcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBwdFdcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayB4eHhcIixcbiAgICAgIFwia2trIGtrayBwdFdcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBwdFdcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBwdFdcIixcbiAgICAgIFwia2trIHh4eCBra2tcIixcbiAgICAgIFwia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIlxuICAgIF1cbiAgfSksXG4gIG5ldyBHYW1lKHtcbiAgICAvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcbiAgICAvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcbiAgICBjYW52YXMsXG4gICAgY29udGV4dDogY3R4LFxuICAgIERJTUVOU0lPTixcbiAgICBzcGVlZDogMjAsXG4gICAgcGxhbjogW1wiaXRzIGtrayBra2tcIixcbiAgICAgIFwicHRCIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBwdEJcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHh4eCBwdFdcIixcbiAgICAgIFwia2trIHB0QiBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwieHh4IHh4eCBra2tcIixcbiAgICAgIFwicHRCIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwicHRXIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwicHRCIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0QiBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIlxuICAgIF1cbiAgfSksXG4gIG5ldyBHYW1lKHtcbiAgICAvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcbiAgICAvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcbiAgICBjYW52YXMsXG4gICAgY29udGV4dDogY3R4LFxuICAgIERJTUVOU0lPTixcbiAgICBzcGVlZDogMjAsXG4gICAgcGxhbjogW1wia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGl0cyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHh4eCBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGl0ciBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIlxuICAgIF1cbiAgfSksXG4gIG5ldyBHYW1lKHtcbiAgICAvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcbiAgICAvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcbiAgICBjYW52YXMsXG4gICAgY29udGV4dDogY3R4LFxuICAgIERJTUVOU0lPTixcbiAgICBzcGVlZDogMjAsXG4gICAgcGxhbjogW1wia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGl0cyBpdHJcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHh4eCBwdEJcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBwdFdcIixcbiAgICAgIFwieHh4IGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBwdFdcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwicHRCIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwicHRXIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwicHRCIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIlxuICAgIF1cbiAgfSksXG4gIG5ldyBHYW1lKHtcbiAgICAvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcbiAgICAvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcbiAgICBjYW52YXMsXG4gICAgY29udGV4dDogY3R4LFxuICAgIERJTUVOU0lPTixcbiAgICBzcGVlZDogMjAsXG4gICAgcGxhbjogW1wia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGl0cyBpdHJcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHh4eCBwdEJcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBwdFdcIixcbiAgICAgIFwieHh4IGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBwdFdcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwicHRCIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwicHRXIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwicHRCIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIlxuICAgIF1cbiAgfSksXG5cblxuXG5cbl07XG5cblxuXG5mdW5jdGlvbiBjaG9vc2VHYW1lKG51bSkge1xuICBnYW1lc1tudW1dLmluaVNldFVwKCk7XG59XG5cbnZhciBjb3VudCA9IDA7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpXG4gIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBcdGdhbWVzW2NvdW50XS5zdG9wKCk7XG4gICAgY2hvb3NlR2FtZSgrK2NvdW50KTtcblxuICB9KTtcblxuY2hvb3NlR2FtZSgwKTsiLCJpbXBvcnQgT2JqIGZyb20gJy4vT2JqJztcblxuY2xhc3MgQ2hhcmFjdGVyIGV4dGVuZHMgT2JqIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMuc3RhdGUgPSBvcHRpb25zLnN0YXRlO1xuICAgIHRoaXMuY3VyclkgPSB0aGlzLmNvbnZlcnRQaXhlbChvcHRpb25zKS55OyAvL2luIHBpeGVsOyBZIERFQ1JFQVNFU1xuICAgIHRoaXMuY3VyclggPSB0aGlzLmNvbnZlcnRQaXhlbChvcHRpb25zKS54O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUNoYXJhY3RlcihjdHgpIHtcbiAgICAvL29ubHkgYWJsZSB0byBhY2Nlc3MgJ3RoaXMnIG9uIHRoZSBvdXRzaWRlXG5cbiAgICB2YXIgeCA9IHRoaXMuY3Vyclg7XG4gICAgdmFyIHkgPSB0aGlzLmN1cnJZO1xuICAgIHZhciBpbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlT2JqLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZU9iaiwgeCwgeSk7XG4gICAgfTtcbiAgICBpbWFnZU9iai5zcmMgPSBcIi4vaW1hZ2VzL0JsYWNrMi5wbmdcIjtcblxuICB9XG5cbiAgcmVib3JuQ2hhcmFjdGVyKGN0eCkge1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLm9wdGlvbnMuc3RhdGU7XG4gICAgdGhpcy5jdXJyWCA9IHRoaXMuY29udmVydFBpeGVsKHRoaXMub3B0aW9ucykueDtcbiAgICB0aGlzLmN1cnJZID0gdGhpcy5jb252ZXJ0UGl4ZWwodGhpcy5vcHRpb25zKS55O1xuICB9XG4gIG1vdmUoKSB7XG4gICAgdmFyIGR5ID0gLTI7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09IDApIHtcbiAgICAgIHRoaXMuY3VyclkgKz0gZHk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jdXJyWSAtPSBkeTtcbiAgICB9XG5cbiAgfVxuICByZXZlcnNlKCkge1xuICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gMCkgdGhpcy5kaXJlY3Rpb24gPSAxO1xuICBlbHNlIHRoaXMuZGlyZWN0aW9uID0gMDtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG5cbiAgICB2YXIgeCA9IHRoaXMuY3Vyclg7XG4gICAgdmFyIHkgPSB0aGlzLmN1cnJZO1xuICAgIHZhciBpbWFnZU9iakIgPSBuZXcgSW1hZ2UoKTtcbiAgICB2YXIgaW1hZ2VPYmpXID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2VPYmpCLnNyYyA9IFwiLi9pbWFnZXMvQmxhY2syLnBuZ1wiO1xuICAgIGltYWdlT2JqVy5zcmMgPSBcIi4vaW1hZ2VzL1doaXRlMi5wbmdcIjtcbiAgICBpbWFnZU9iakIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRyYXdDaGFySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09IDApIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMsIHgsIHkpO1xuICAgICAgICB9XG4gICAgICB9LCAyMCk7XG4gICAgfVxuICAgIGltYWdlT2JqVy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gMSkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcywgeCwgeSk7XG4gICAgICAgIH1cbiAgICAgIH0sIDIwKTtcbiAgICB9XG5cbiAgICBpbWFnZU9iakIuc3JjID0gXCIuL2ltYWdlcy9CbGFjazIucG5nXCI7XG4gICAgaW1hZ2VPYmpXLnNyYyA9IFwiLi9pbWFnZXMvV2hpdGUyLnBuZ1wiO1xuICB9XG5cblxuXG4gIC8vIHNldEludGVydmFsKGRyYXcgLDIwKTsvL2NoZWNrIGV2ZXJ5IDIwbXNcblxuICBjb252ZXJ0UGl4ZWwoY291bnRlcikge1xuICAgIHZhciBncmlkUGl4ZWwgPSB7XG4gICAgICB4OiBjb3VudGVyLkdyaWRYICogKHRoaXMuSF9ESU1FTlRJT04gLyB0aGlzLkhfQkxPQ0tTKSxcbiAgICAgIHk6IChjb3VudGVyLkdyaWRZKSAqICh0aGlzLlZfRElNRU5USU9OIC8gdGhpcy5WX0JMT0NLUylcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKGdyaWRQaXhlbCk7XG4gICAgcmV0dXJuIGdyaWRQaXhlbDtcbiAgfVxuXG5cblxuXG4gIGNoYW5nZVN0YXRlKCkge1xuICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICB0aGlzLnN0YXRlKys7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJXaGl0ZVwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRoaXMuc3RhdGUtLTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkJsYWNrXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZnVja1wiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcjsiLCJpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyJztcbmltcG9ydCBPYmogZnJvbSAnLi9PYmonO1xuaW1wb3J0IFBvcnRhbCBmcm9tICcuL1BvcnRhbCc7XG4vLyBpbXBvcnQgRW5lbXkgZnJvbSAuL0NoYXJhY3Rlci5qcztcblxuXG5jbGFzcyBHYW1lIHtcbiAgLy8gc2V0IHVwIGluc3RhbmNlIHZhcmlhYmxlc1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5jYW52YXMgPSBvcHRpb25zLmNhbnZhcztcbiAgICB0aGlzLmN0eCA9IG9wdGlvbnMuY29udGV4dDtcbiAgICB0aGlzLkRJTUVOU0lPTiA9IG9wdGlvbnMuRElNRU5TSU9OO1xuICAgIGNvbnNvbGUubG9nIChvcHRpb25zLkRJTUVOU0lPTik7XG4gICAgdGhpcy5SQVRJTyA9IG9wdGlvbnMuRElNRU5TSU9OLlJBVElPO1xuICAgIHRoaXMuSF9ESU1FTlRJT04gPSBvcHRpb25zLkRJTUVOU0lPTi5IX0RJTUVOU0lPTjtcbiAgICB0aGlzLlZfRElNRU5USU9OID0gb3B0aW9ucy5ESU1FTlNJT04uVl9ESU1FTlNJT047XG4gICAgdGhpcy51bml2ZXJzZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdmVyc2UnKTtcbiAgICB0aGlzLnNwZWVkID0gb3B0aW9ucy5zcGVlZDtcbiAgICB0aGlzLnBsYW4gPSBvcHRpb25zLnBsYW47XG4gICAgdGhpcy5HcmlkID0gW107XG4gICAgdGhpcy5wb3J0YWxzQiA9IFtdO1xuICAgIHRoaXMucG9ydGFsc1cgPSBbXTtcbiAgICB0aGlzLml0cnMgPSBbXTtcbiAgICB0aGlzLml0c3MgPSBbXTtcbiAgICB0aGlzLm1vdmluZ0UgPSBbXTtcbiAgICB0aGlzLnN0aWxsRSA9IFtdO1xuICAgIHRoaXMuY2hhcmFjdGVyID0gbmV3IENoYXJhY3Rlcih7XG4gICAgICBzdGF0ZTogMCxcbiAgICAgIEhfRElNRU5USU9OOiB0aGlzLkhfRElNRU5USU9OLFxuICAgICAgVl9ESU1FTlRJT046IHRoaXMuVl9ESU1FTlRJT04sXG4gICAgICBHcmlkWDogNSxcbiAgICAgIEdyaWRZOiAyM1xuICAgIH0pO1xuICAgIHRoaXMucG9pbnQgPSAwO1xuICAgIHRoaXMud2luID0gZmFsc2U7XG4gICAgdGhpcy5IX0JMT0NLUyA9IDEzO1xuXG4gICAgdGhpcy5IID0gdGhpcy5IX0RJTUVOU0lPTiAvIHRoaXMuSF9CTE9DS1M7XG4gICAgdGhpcy5WX0JMT0NLUyA9IDI1O1xuXG4gICAgdGhpcy5WID0gdGhpcy5WX0RJTUVOU0lPTiAvIHRoaXMuVl9CTE9DS1M7XG4gICAgdGhpcy5tb3ZlSW50ZXJ2YWwgPSAwO1xuICAgIHRoaXMuZHJhd0ludGVydmFsID0gMDtcblxuICB9XG5cbiAgLy8gaW5pdGlhbCBzZXQgdXBcbiAgaW5pU2V0VXAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5wbGF5KCk7XG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaCcpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5jaGFyYWN0ZXIuY2hhbmdlU3RhdGUoKTtcbiAgICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBcdHZhciBrZXkgPSBlLmtleUNvZGUgPyBlLmtleUNvZGUgOiBlLndoaWNoO1xuICAgIFx0aWYgKGtleSA9PSAxMDIpXG4gICAgIFx0IHNlbGYuY2hhcmFjdGVyLmNoYW5nZVN0YXRlKCk7XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLnBsYW4pO1xuICAgIHRoaXMucGFyc2UodGhpcy5wbGFuKTtcblxuICAgIHRoaXMuY2hhcmFjdGVyLmluaXRpYWxpemVDaGFyYWN0ZXIodGhpcy5jdHgpO1xuICAgIHRoaXMuZHJhdygpO1xuICAgIHRoaXMuY2hlY2tDb2xsaXNpb24oKTtcbiAgICB0aGlzLmNoYXJhY3Rlci5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG5cblxuICBwYXJzZShwbGFuKSB7XG4gICAgLy8gbGV0IGdyaWQgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGxhbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGFycmF5ID0gcGxhbltpXS5zcGxpdChcIiBcIik7XG5cblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBhcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoYXJyYXlbal0gPT0gXCJ4eHhcIikge1xuICAgICAgICAgIHRoaXMuc3RpbGxFLnB1c2gobmV3IE9iaih7XG4gICAgICAgICAgICBHcmlkWDogMSArIDMgKiBqICsgaixcbiAgICAgICAgICAgIEdyaWRZOiBpXG4gICAgICAgICAgfSkpO1xuXG5cbiAgICAgICAgfSBlbHNlIGlmIChhcnJheVtqXSA9PSBcIm1vZVwiKSB7XG4gICAgICAgICAgdGhpcy5FbmVtaWVzLnB1c2gobmV3IG1vdmluZ0Uoe30pKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGFycmF5W2pdID09IFwicHRXXCIpIHtcbiAgICAgICAgICB0aGlzLnBvcnRhbHNXLnB1c2gobmV3IFBvcnRhbCgxLCB7XG4gICAgICAgICAgICBHcmlkWDogMSArIDMgKiBqICsgaixcbiAgICAgICAgICAgIEdyaWRZOiBpXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGFycmF5W2pdID09IFwicHRCXCIpIHtcbiAgICAgICAgICB0aGlzLnBvcnRhbHNCLnB1c2gobmV3IFBvcnRhbCgwLCB7XG4gICAgICAgICAgICBHcmlkWDogMSArIDMgKiBqICsgaixcbiAgICAgICAgICAgIEdyaWRZOiBpXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGFycmF5W2pdID09IFwiaXRyXCIpIHtcbiAgICAgICAgICB0aGlzLml0cnMucHVzaChuZXcgT2JqKHtcbiAgICAgICAgICAgIEdyaWRYOiAxICsgMyAqIGogKyBqLFxuICAgICAgICAgICAgR3JpZFk6IGlcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJyYXlbal0gPT0gXCJpdHNcIikge1xuICAgICAgICAgIHRoaXMuaXRzcy5wdXNoKG5ldyBPYmooe1xuICAgICAgICAgICAgR3JpZFg6IDEgKyAzICogaiArIGosXG4gICAgICAgICAgICBHcmlkWTogaVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG5cbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cblxuXG5cbiAgcGxheSgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBjbGVhckludGVydmFsKHRoaXMubW92ZUludGVydmFsKTtcblxuICAgIHRoaXMubW92ZUludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLmNoYXJhY3Rlci5tb3ZlKCk7XG4gICAgfSwgMjApO1xuXG4gIH1cblxuXG4gIGRyYXcoKSB7XG4gICAgdmFyIGN0eCA9IHRoaXMuY3R4O1xuICAgIHZhciB4c2hpZnQgPSB0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSDtcbiAgICB2YXIgeXNoaWZ0ID0gdGhpcy5ESU1FTlNJT04uQ0VMTF9IRUlHSFQ7XG4gICAgY29uc29sZS5sb2codGhpcy5wb3J0YWxzQik7XG4gICAgY29uc29sZS5sb2codGhpcy5wb3J0YWxzVyk7XG4gICAgdmFyIG9ic3RhY2xlSW1nID0gbmV3IEltYWdlKCk7XG4gICAgb2JzdGFjbGVJbWcuc3JjID0gXCIuL2ltYWdlcy9PYnN0YWNsZS5wbmdcIjtcbiAgICB2YXIgcG90QkltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHBvdEJJbWcuc3JjID0gXCIuL2ltYWdlcy9wb3RCLnBuZ1wiO1xuICAgIHZhciBwb3RXSW1nID0gbmV3IEltYWdlKCk7XG4gICAgcG90V0ltZy5zcmMgPSBcIi4vaW1hZ2VzL3BvdFcucG5nXCI7XG4gICAgdmFyIHN0YXIySW1nID0gbmV3IEltYWdlKCk7XG4gICAgc3RhcjJJbWcuc3JjID0gXCIuL2ltYWdlcy9TdGFyMi5wbmdcIjtcbiAgICB2YXIgcmV2SW1nID0gbmV3IEltYWdlKCk7XG4gICAgcmV2SW1nLnNyYyA9IFwiLi9pbWFnZXMvcmV2ZXJzZS5wbmdcIjtcbiAgICB2YXIgYkNoYXIgPSBuZXcgSW1hZ2UoKTtcbiAgICB2YXIgd0NoYXIgPSBuZXcgSW1hZ2UoKTtcbiAgICBiQ2hhci5zcmMgPSBcIi4vaW1hZ2VzL0JsYWNrMi5wbmdcIjtcbiAgICB3Q2hhci5zcmMgPSBcIi4vaW1hZ2VzL1doaXRlMi5wbmdcIjtcbiAgICB0aGlzLmRyYXdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5IX0RJTUVOVElPTiwgdGhpcy5WX0RJTUVOVElPTik7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RpbGxFLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB4ID0gdGhpcy5zdGlsbEVbaV0uR3JpZFg7XG4gICAgICAgIGxldCB5ID0gdGhpcy5zdGlsbEVbaV0uR3JpZFk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2Uob2JzdGFjbGVJbWcsIHggKiB4c2hpZnQsIHkgKiB5c2hpZnQsIDgwKnRoaXMuUkFUSU8sIDYwKnRoaXMuUkFUSU8pO1xuICAgICAgfVxuXG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wb3J0YWxzQi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgeCA9IHRoaXMucG9ydGFsc0JbaV0uR3JpZFg7XG4gICAgICAgIGxldCB5ID0gdGhpcy5wb3J0YWxzQltpXS5HcmlkWTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShwb3RCSW1nLCB4ICogeHNoaWZ0LCB5ICogeXNoaWZ0LCA3MCp0aGlzLlJBVElPLCAzNip0aGlzLlJBVElPKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvcnRhbHNXLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB4ID0gdGhpcy5wb3J0YWxzV1tpXS5HcmlkWDtcbiAgICAgICAgbGV0IHkgPSB0aGlzLnBvcnRhbHNXW2ldLkdyaWRZO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHBvdFdJbWcsIHggKiB4c2hpZnQsIHkgKiB5c2hpZnQsIDcwKnRoaXMuUkFUSU8sIDM2KnRoaXMuUkFUSU8pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRzcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgeCA9IHRoaXMuaXRzc1tpXS5HcmlkWDtcbiAgICAgICAgbGV0IHkgPSB0aGlzLml0c3NbaV0uR3JpZFk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2Uoc3RhcjJJbWcsIHggKiB4c2hpZnQsIHkgKiB5c2hpZnQsNDAqdGhpcy5SQVRJTywgNDAqdGhpcy5SQVRJTyk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdHJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB4ID0gdGhpcy5pdHJzW2ldLkdyaWRYO1xuICAgICAgICBsZXQgeSA9IHRoaXMuaXRyc1tpXS5HcmlkWTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShyZXZJbWcsIHggKiB4c2hpZnQsIHkgKiB5c2hpZnQsIDUwKnRoaXMuUkFUSU8sIDUwKnRoaXMuUkFUSU8pO1xuICAgICAgfVxuXG5cblxuICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyLnN0YXRlID09IDApIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShiQ2hhciwgdGhpcy5jaGFyYWN0ZXIuY3VyclgsIHRoaXMuY2hhcmFjdGVyLmN1cnJZLCA1MCp0aGlzLlJBVElPLCA1MCp0aGlzLlJBVElPKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2Uod0NoYXIsIHRoaXMuY2hhcmFjdGVyLmN1cnJYLCB0aGlzLmNoYXJhY3Rlci5jdXJyWSwgNTAqdGhpcy5SQVRJTywgNTAqdGhpcy5SQVRJTyk7XG4gICAgICB9XG5cblxuICAgIH0sIDIwKTtcbiAgfVxuXG4gIGNoZWNrQ29sbGlzaW9uKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgYkNoYXIgPSBuZXcgSW1hZ2UoKTtcbiAgICBiQ2hhci5zcmMgPSBcIi4vaW1hZ2VzL0JsYWNrMi5wbmdcIjtcbiAgICB2YXIgd0NoYXIgPSBuZXcgSW1hZ2UoKTtcbiAgICB3Q2hhci5zcmMgPSBcIi4vaW1hZ2VzL1doaXRlMi5wbmdcIjtcblxuICAgIC8vbG9vcCB0aHJvdWdoIGV2ZXJ5IG9iamVjdCBpbiB0aGUgbWFwXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2cgKFwicnVubmluZ1wiKTtcbiAgICAgIGlmICh0aGlzLnBvcnRhbHNCLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvcnRhbHNCLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHBpeGVsID0gdGhpcy5jb252ZXJ0UGl4ZWwodGhpcy5wb3J0YWxzQltpXSk7XG4gICAgICAgICAgaWYgKChNYXRoLmFicyh0aGlzLmNoYXJhY3Rlci5jdXJyWSAtIHBpeGVsLnkpIDwgNSkgXG4gICAgICAgICAgICAmJiAoTWF0aC5hYnModGhpcy5jaGFyYWN0ZXIuY3VyclggLSBwaXhlbC54KSA8IDUpIFxuICAgICAgICAgICAgJiYgKHRoaXMuY2hhcmFjdGVyLnN0YXRlID09IDApKSB7XG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgIHZhciBuZXdMb2MgPSB0aGlzLmNvbnZlcnRQaXhlbCh0aGlzLnBvcnRhbHNCW3RoaXMucG9ydGFsc0IubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHZhciBuZXdMb2MgPSB0aGlzLmNvbnZlcnRQaXhlbCh0aGlzLnBvcnRhbHNCW2kgLSAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3Rlci5jdXJyWCA9IG5ld0xvYy54O1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyLmRpcmVjdGlvbiA9PSAwKVxuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXIuY3VyclkgPSBuZXdMb2MueSAtIDExO1xuICAgICAgICAgICAgZWxzZSB0aGlzLmNoYXJhY3Rlci5jdXJyWSA9IG5ld0xvYy55ICsgMTE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnBvcnRhbHNXLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvcnRhbHNXLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHBpeGVsID0gdGhpcy5jb252ZXJ0UGl4ZWwodGhpcy5wb3J0YWxzV1tpXSk7XG4gICAgICAgICAgaWYgKChNYXRoLmFicyh0aGlzLmNoYXJhY3Rlci5jdXJyWSAtIHBpeGVsLnkpIDwgNSkgJiYgKE1hdGguYWJzKHRoaXMuY2hhcmFjdGVyLmN1cnJYIC0gcGl4ZWwueCkgPCA1KSAmJiAodGhpcy5jaGFyYWN0ZXIuc3RhdGUgPT0gMSkpIHtcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgdmFyIG5ld0xvYyA9IHRoaXMuY29udmVydFBpeGVsKHRoaXMucG9ydGFsc1dbdGhpcy5wb3J0YWxzVy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIG5ld0xvYyA9IHRoaXMuY29udmVydFBpeGVsKHRoaXMucG9ydGFsc1dbaSAtIDFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLmN1cnJYID0gbmV3TG9jLng7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGFyYWN0ZXIuZGlyZWN0aW9uID09IDApXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3Rlci5jdXJyWSA9IG5ld0xvYy55IC0gMTE7XG4gICAgICAgICAgICBlbHNlIHRoaXMuY2hhcmFjdGVyLmN1cnJZID0gbmV3TG9jLnkgKyAxMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0aWxsRS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcGl4ZWwgPSB0aGlzLmNvbnZlcnRQaXhlbCh0aGlzLnN0aWxsRVtpXSk7IC8vaW4gcGl4ZWxcbiAgICAgICAgIGlmICgoTWF0aC5hYnModGhpcy5jaGFyYWN0ZXIuY3VyclkgLSBwaXhlbC55KSA8IDUpICYmIChNYXRoLmFicyh0aGlzLmNoYXJhY3Rlci5jdXJyWCAtIHBpeGVsLngpIDwgNSkpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMubW92ZUludGVydmFsKTtcbiAgICAgICAgICB0aGlzLmNoYXJhY3Rlci5yZWJvcm5DaGFyYWN0ZXIodGhpcy5jdHgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaSBhbSBleGVjdXRlZFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRzcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcGl4ZWwgPSB0aGlzLmNvbnZlcnRQaXhlbCh0aGlzLml0c3NbaV0pOyAvL2luIHBpeGVsXG4gICAgICAgIGlmICgoTWF0aC5hYnModGhpcy5jaGFyYWN0ZXIuY3VyclkgLSBwaXhlbC55KSA8IDUpICYmIChNYXRoLmFicyh0aGlzLmNoYXJhY3Rlci5jdXJyWCAtIHBpeGVsLngpIDwgNSkpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMubW92ZUludGVydmFsKTtcbiAgICAgICAgICB0aGlzLmNoYXJhY3Rlci5yZWJvcm5DaGFyYWN0ZXIodGhpcy5jdHgpO1xuICAgICAgICAgIGFsZXJ0KFwieW91IHdpbiFcIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0cnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHBpeGVsID0gdGhpcy5jb252ZXJ0UGl4ZWwodGhpcy5pdHJzW2ldKTsgLy9pbiBwaXhlbFxuICAgICAgICBpZiAoKE1hdGguYWJzKHRoaXMuY2hhcmFjdGVyLmN1cnJZIC0gcGl4ZWwueSkgPCA1KSAmJiAoTWF0aC5hYnModGhpcy5jaGFyYWN0ZXIuY3VyclggLSBwaXhlbC54KSA8IDUpKSB7XG4gICAgICAgICAgdGhpcy5jaGFyYWN0ZXIucmV2ZXJzZSgpO1xuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyLmN1cnJZIDwgMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImZhaWwhXCIpO1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMubW92ZUludGVydmFsKTtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIucmVib3JuQ2hhcmFjdGVyKHRoaXMuY3R4KTtcbiAgICAgIH1cblxuXG4gICAgfSwgMjApO1xuXG4gIH1cblxuICBzdG9wKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5kcmF3SW50ZXJ2YWwpO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5tb3ZlSW50ZXJ2YWwpO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5jaGFyYWN0ZXIuZHJhd0NoYXJJbnRlcnZhbCk7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0JyksXG4gICAgICAgIGVsQ2xvbmUgPSBlbC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgZWwucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZWxDbG9uZSwgZWwpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgc2VsZi5jaGFyYWN0ZXIuY2hhbmdlU3RhdGUoZSk7XG4gICAgfSk7XG4gIH1cblxuICBjb252ZXJ0UGl4ZWwoY291bnRlcikge1xuICAgIC8vIHZhciBIX0JMT0NLUyA9IDEzO1xuICAgIC8vIHZhciBIX0RJTUVOVElPTiA9IDI1NjtcbiAgICAvLyB2YXIgVl9CTE9DS1MgPSAyNTtcbiAgICAvLyB2YXIgVl9ESU1FTlRJT04gPSA5NjA7XG4gICAgdmFyIGdyaWRQaXhlbCA9IHtcbiAgICAgIHg6IGNvdW50ZXIuR3JpZFggKiAodGhpcy5IX0RJTUVOVElPTiAvIHRoaXMuSF9CTE9DS1MpLFxuICAgICAgeTogKGNvdW50ZXIuR3JpZFkpICogKHRoaXMuVl9ESU1FTlRJT04gLyB0aGlzLlZfQkxPQ0tTKVxuICAgIH07XG4gICAgcmV0dXJuIGdyaWRQaXhlbDtcbn1cbn1cblxuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7IiwiY2xhc3MgT2Jqe1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKXtcbiAgICB0aGlzLkdyaWRYID0gb3B0aW9ucy5HcmlkWDtcbiAgICB0aGlzLkdyaWRZID0gb3B0aW9ucy5HcmlkWTtcblx0dGhpcy5IX0JMT0NLUyA9IDEzO1xuICAgIHRoaXMuSF9ESU1FTlRJT04gPSBvcHRpb25zLkhfRElNRU5USU9OO1xuICAgIHRoaXMuVl9CTE9DS1MgPSAyNTtcbiAgICB0aGlzLlZfRElNRU5USU9OID0gb3B0aW9ucy5WX0RJTUVOVElPTjtcblxuICB9XG5cblx0IGNsZWFyKGN0eCkge1xuXHRcdCBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuSF9ESU1FTlRJT04sICB0aGlzLlZfRElNRU5USU9OKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9iajtcbiIsImltcG9ydCBPYmogZnJvbSAnLi9PYmonO1xuXG5jbGFzcyBQb3J0YWwgZXh0ZW5kcyBPYmp7XG4gIGNvbnN0cnVjdG9yKHN0YXRlLG9wdGlvbnMpe1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgfVxufVxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBQb3J0YWw7XG4iXX0=
