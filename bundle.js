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
      this.currY += dy;
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
              _this2.character.currY = newLoc.y - 11;
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
              _this2.character.currY = newLoc.y - 11;
            }
          }
        }

        for (var i = 0; i < _this2.stillE.length; i++) {
          var pixel = convertPixel(_this2.stillE[i]); //in pixel
          // console.log(pixel.y);
          // if(this.currY > i.y && this.currY < i.y - 38.4 && (currX > i.x && currX < i.x + 18.28){
          if (Math.abs(_this2.character.currY - pixel.y) < 5 && Math.abs(_this2.character.currX - pixel.x) < 5) {
            // collsionType = "stillE";
            clearInterval(_this2.moveInterval);
            _this2.character.rebornCharacter(_this2.ctx);
            console.log("i am executed");
          }
        }

        for (var i = 0; i < _this2.itss.length; i++) {
          var pixel = convertPixel(_this2.itss[i]); //in pixel
          // console.log(pixel.y);
          // if(this.currY > i.y && this.currY < i.y - 38.4 && (currX > i.x && currX < i.x + 18.28){
          if (Math.abs(_this2.character.currY - pixel.y) < 5 && Math.abs(_this2.character.currX - pixel.x) < 5) {
            // collsionType = "stillE";
            clearInterval(_this2.moveInterval);
            _this2.character.rebornCharacter(_this2.ctx);
            alert("you win!");
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9kaWFuL3BvcnRhbC9hcHAuanMiLCIvaG9tZS9kaWFuL3BvcnRhbC9qcy9DaGFyYWN0ZXIuanMiLCIvaG9tZS9kaWFuL3BvcnRhbC9qcy9HYW1lLmpzIiwiL2hvbWUvZGlhbi9wb3J0YWwvanMvT2JqLmpzIiwiL2hvbWUvZGlhbi9wb3J0YWwvanMvUG9ydGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztzQkNBaUIsV0FBVzs7Ozs7QUFHNUIsSUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQzs7QUFFbkIsSUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDO0FBQzNCLElBQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQzs7QUFFM0IsSUFBTSxTQUFTLEdBQUc7O0FBRWhCLGlCQUFlLEVBQUUsRUFBRTtBQUNuQixpQkFBZSxFQUFFLEVBQUU7QUFDbkIsYUFBVyxFQUFFLEdBQUcsR0FBRyxlQUFlO0FBQ2xDLGFBQVcsRUFBRSxHQUFHLEdBQUcsZUFBZTs7Q0FFbkMsQ0FBQTs7QUFFRCxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2pELElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRWxDLElBQUksS0FBSyxHQUFHLENBQUMsd0JBQVM7OztBQUdsQixRQUFNLEVBQU4sTUFBTTtBQUNOLFNBQU8sRUFBRSxHQUFHO0FBQ1osV0FBUyxFQUFULFNBQVM7QUFDVCxPQUFLLEVBQUUsRUFBRTtBQUNULE1BQUksRUFBRSxDQUFDLGFBQWEsRUFDbEIsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLENBQ2Q7Q0FDRixDQUFDLEVBQUUsd0JBQVM7OztBQUdYLFFBQU0sRUFBTixNQUFNO0FBQ04sU0FBTyxFQUFFLEdBQUc7QUFDWixXQUFTLEVBQVQsU0FBUztBQUNULE9BQUssRUFBRSxFQUFFO0FBQ1QsTUFBSSxFQUFFLENBQUMsYUFBYSxFQUNsQixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLENBQ2Q7Q0FDRixDQUFDLEVBQ0Ysd0JBQVM7OztBQUdQLFFBQU0sRUFBTixNQUFNO0FBQ04sU0FBTyxFQUFFLEdBQUc7QUFDWixXQUFTLEVBQVQsU0FBUztBQUNULE9BQUssRUFBRSxFQUFFO0FBQ1QsTUFBSSxFQUFFLENBQUMsYUFBYSxFQUNsQixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLENBQ2Q7Q0FDRixDQUFDLEVBQ0Ysd0JBQVM7OztBQUdQLFFBQU0sRUFBTixNQUFNO0FBQ04sU0FBTyxFQUFFLEdBQUc7QUFDWixXQUFTLEVBQVQsU0FBUztBQUNULE9BQUssRUFBRSxFQUFFO0FBQ1QsTUFBSSxFQUFFLENBQUMsYUFBYSxFQUNsQixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLENBQ2Q7Q0FDRixDQUFDLEVBQ0Ysd0JBQVM7OztBQUdQLFFBQU0sRUFBTixNQUFNO0FBQ04sU0FBTyxFQUFFLEdBQUc7QUFDWixXQUFTLEVBQVQsU0FBUztBQUNULE9BQUssRUFBRSxFQUFFO0FBQ1QsTUFBSSxFQUFFLENBQUMsYUFBYSxFQUNsQixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLENBQ2Q7Q0FDRixDQUFDLEVBQ0Ysd0JBQVM7OztBQUdQLFFBQU0sRUFBTixNQUFNO0FBQ04sU0FBTyxFQUFFLEdBQUc7QUFDWixXQUFTLEVBQVQsU0FBUztBQUNULE9BQUssRUFBRSxFQUFFO0FBQ1QsTUFBSSxFQUFFLENBQUMsYUFBYSxFQUNsQixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLENBQ2Q7Q0FDRixDQUFDLEVBQ0Ysd0JBQVM7OztBQUdQLFFBQU0sRUFBTixNQUFNO0FBQ04sU0FBTyxFQUFFLEdBQUc7QUFDWixXQUFTLEVBQVQsU0FBUztBQUNULE9BQUssRUFBRSxFQUFFO0FB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LEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDekQ7OztTQWJHLEdBQUc7OztBQWdCVCxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7OztvQkNoQkwsT0FBTzs7OztJQUVqQixNQUFNO1lBQU4sTUFBTTs7QUFDQyxXQURQLE1BQU0sQ0FDRSxLQUFLLEVBQUMsT0FBTyxFQUFDOzBCQUR0QixNQUFNOztBQUVSLCtCQUZFLE1BQU0sNkNBRUYsT0FBTyxFQUFFO0FBQ2YsUUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7R0FDcEI7O1NBSkcsTUFBTTs7O0FBU1osTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9qcy9HYW1lJztcblxuLy8gaW4gcGl4ZWxzXG5jb25zdCBXSURUSCA9IDI1NjtcbmNvbnN0IEhFSUdIVCA9IDk2MDtcbi8vIGluIGNlbGwgdW5pdHNcbmNvbnN0IFVOSVZFUlNFX0xFTkdUSCA9IDEzO1xuY29uc3QgVU5JVkVSU0VfSEVJR0hUID0gMjU7XG5cbmNvbnN0IERJTUVOU0lPTiA9IHtcblxuICBVTklWRVJTRV9MRU5HVEg6IDEzLFxuICBVTklWRVJTRV9IRUlHSFQ6IDI1LFxuICBDRUxMX0xFTkdUSDogMjU2IC8gVU5JVkVSU0VfTEVOR1RILFxuICBDRUxMX0hFSUdIVDogOTYwIC8gVU5JVkVSU0VfSEVJR0hUXG5cbn1cblxudmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml2ZXJzZScpO1xudmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG52YXIgZ2FtZXMgPSBbbmV3IEdhbWUoe1xuICAgIC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuICAgIC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuICAgIGNhbnZhcyxcbiAgICBjb250ZXh0OiBjdHgsXG4gICAgRElNRU5TSU9OLFxuICAgIHNwZWVkOiAyMCxcbiAgICBwbGFuOiBbXCJ4eHggeHh4IHh4eFwiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJ4eHggeHh4IGtra1wiLFxuICAgICAgXCJra2sga2trIHB0QlwiLFxuICAgICAgXCJra2sgeHh4IHB0QlwiLFxuICAgICAgXCJra2sgcHRCIGtra1wiLFxuICAgICAgXCJra2sgeHh4IHB0V1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJ4eHggcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgeHh4IHB0V1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJwdFcgeHh4IGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJ4eHggeHh4IGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgeHh4IHB0QlwiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRCIGtra1wiXG4gICAgXVxuICB9KSwgbmV3IEdhbWUoe1xuICAgIC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuICAgIC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuICAgIGNhbnZhcyxcbiAgICBjb250ZXh0OiBjdHgsXG4gICAgRElNRU5TSU9OLFxuICAgIHNwZWVkOiAyMCxcbiAgICBwbGFuOiBbXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgaXRzIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRCIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgeHh4IGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRCIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiXG4gICAgXVxuICB9KSxcbiAgbmV3IEdhbWUoe1xuICAgIC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuICAgIC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuICAgIGNhbnZhcyxcbiAgICBjb250ZXh0OiBjdHgsXG4gICAgRElNRU5TSU9OLFxuICAgIHNwZWVkOiAyMCxcbiAgICBwbGFuOiBbXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgaXRzIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiXG4gICAgXVxuICB9KSxcbiAgbmV3IEdhbWUoe1xuICAgIC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuICAgIC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuICAgIGNhbnZhcyxcbiAgICBjb250ZXh0OiBjdHgsXG4gICAgRElNRU5TSU9OLFxuICAgIHNwZWVkOiAyMCxcbiAgICBwbGFuOiBbXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgaXRzIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgeHh4IGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgIF1cbiAgfSksXG4gIG5ldyBHYW1lKHtcbiAgICAvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcbiAgICAvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcbiAgICBjYW52YXMsXG4gICAgY29udGV4dDogY3R4LFxuICAgIERJTUVOU0lPTixcbiAgICBzcGVlZDogMjAsXG4gICAgcGxhbjogW1wia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBwdFdcIixcbiAgICAgIFwiaXRzIGtrayBra2tcIixcbiAgICAgIFwia2trIHh4eCBra2tcIixcbiAgICAgIFwicHRXIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHh4eCBra2tcIixcbiAgICAgIFwicHRXIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIlxuICAgIF1cbiAgfSksXG4gIG5ldyBHYW1lKHtcbiAgICAvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcbiAgICAvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcbiAgICBjYW52YXMsXG4gICAgY29udGV4dDogY3R4LFxuICAgIERJTUVOU0lPTixcbiAgICBzcGVlZDogMjAsXG4gICAgcGxhbjogW1wia2trIGtrayBra2tcIixcbiAgICAgIFwiaXRzIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwicHRXIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHh4eCBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwieHh4IGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwicHRXIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIlxuICAgIF1cbiAgfSksXG4gIG5ldyBHYW1lKHtcbiAgICAvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcbiAgICAvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcbiAgICBjYW52YXMsXG4gICAgY29udGV4dDogY3R4LFxuICAgIERJTUVOU0lPTixcbiAgICBzcGVlZDogMjAsXG4gICAgcGxhbjogW1wia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGl0cyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0QiBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHh4eCBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0QiBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIlxuICAgIF1cbiAgfSksXG4gIG5ldyBHYW1lKHtcbiAgICAvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcbiAgICAvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcbiAgICBjYW52YXMsXG4gICAgY29udGV4dDogY3R4LFxuICAgIERJTUVOU0lPTixcbiAgICBzcGVlZDogMjAsXG4gICAgcGxhbjogW1wia2trIGl0cyBra2tcIixcbiAgICAgIFwia2trIHB0QiBra2tcIixcbiAgICAgIFwia2trIGtrayBwdFdcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBwdEJcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBwdFdcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayB4eHhcIixcbiAgICAgIFwia2trIGtrayBwdFdcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBwdFdcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBwdFdcIixcbiAgICAgIFwia2trIHh4eCBra2tcIixcbiAgICAgIFwia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIHB0VyBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIixcbiAgICAgIFwia2trIGtrayBra2tcIlxuICAgIF1cbiAgfSksXG5cbiAgbmV3IEdhbWUoe1xuICAgIC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuICAgIC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuICAgIGNhbnZhcyxcbiAgICBjb250ZXh0OiBjdHgsXG4gICAgRElNRU5TSU9OLFxuICAgIHNwZWVkOiAyMCxcbiAgICBwbGFuOiBbXCJra2sgaXRzIGtra1wiLFxuICAgICAgXCJra2sgcHRCIGtra1wiLFxuICAgICAgXCJra2sga2trIHB0V1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIHB0QlwiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIHB0V1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIHh4eFwiLFxuICAgICAgXCJra2sga2trIHB0V1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIHB0V1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIHB0V1wiLFxuICAgICAgXCJra2sgeHh4IGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiXG4gICAgXVxuICB9KSxcbiAgbmV3IEdhbWUoe1xuICAgIC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuICAgIC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuICAgIGNhbnZhcyxcbiAgICBjb250ZXh0OiBjdHgsXG4gICAgRElNRU5TSU9OLFxuICAgIHNwZWVkOiAyMCxcbiAgICBwbGFuOiBbXCJpdHMga2trIGtra1wiLFxuICAgICAgXCJwdEIga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIHB0QlwiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgeHh4IHB0V1wiLFxuICAgICAgXCJra2sgcHRCIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJ4eHggeHh4IGtra1wiLFxuICAgICAgXCJwdEIga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJwdFcga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJwdEIga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRCIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiXG4gICAgXVxuICB9KSxcbiAgbmV3IEdhbWUoe1xuICAgIC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuICAgIC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuICAgIGNhbnZhcyxcbiAgICBjb250ZXh0OiBjdHgsXG4gICAgRElNRU5TSU9OLFxuICAgIHNwZWVkOiAyMCxcbiAgICBwbGFuOiBbXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgaXRzIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgeHh4IGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgaXRyIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiXG4gICAgXVxuICB9KSxcbiAgbmV3IEdhbWUoe1xuICAgIC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuICAgIC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuICAgIGNhbnZhcyxcbiAgICBjb250ZXh0OiBjdHgsXG4gICAgRElNRU5TSU9OLFxuICAgIHNwZWVkOiAyMCxcbiAgICBwbGFuOiBbXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgaXRzIGl0clwiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgeHh4IHB0QlwiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIHB0V1wiLFxuICAgICAgXCJ4eHgga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIHB0V1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJwdEIga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJwdFcga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJwdEIga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiXG4gICAgXVxuICB9KSxcbiAgbmV3IEdhbWUoe1xuICAgIC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuICAgIC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuICAgIGNhbnZhcyxcbiAgICBjb250ZXh0OiBjdHgsXG4gICAgRElNRU5TSU9OLFxuICAgIHNwZWVkOiAyMCxcbiAgICBwbGFuOiBbXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgaXRzIGl0clwiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgeHh4IHB0QlwiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIHB0V1wiLFxuICAgICAgXCJ4eHgga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIHB0V1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJwdEIga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJwdFcga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJwdEIga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sgcHRXIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiLFxuICAgICAgXCJra2sga2trIGtra1wiXG4gICAgXVxuICB9KSxcblxuXG5cblxuXTtcblxuXG5cbmZ1bmN0aW9uIGNob29zZUdhbWUobnVtKSB7XG4gIGdhbWVzW251bV0uaW5pU2V0VXAoKTtcbn1cblxudmFyIGNvdW50ID0gMDtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0JylcbiAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIFx0Z2FtZXNbY291bnRdLnN0b3AoKTtcbiAgICBjaG9vc2VHYW1lKCsrY291bnQpO1xuXG4gIH0pO1xuXG5jaG9vc2VHYW1lKDApOyIsImltcG9ydCBPYmogZnJvbSAnLi9PYmonO1xuXG5jbGFzcyBDaGFyYWN0ZXIgZXh0ZW5kcyBPYmoge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgdGhpcy5zdGF0ZSA9IG9wdGlvbnMuc3RhdGU7XG4gICAgdGhpcy5jdXJyWSA9IHRoaXMuY29udmVydFBpeGVsKG9wdGlvbnMpLnk7IC8vaW4gcGl4ZWw7IFkgREVDUkVBU0VTXG4gICAgdGhpcy5jdXJyWCA9IHRoaXMuY29udmVydFBpeGVsKG9wdGlvbnMpLng7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGluaXRpYWxpemVDaGFyYWN0ZXIoY3R4KSB7XG4gICAgLy9vbmx5IGFibGUgdG8gYWNjZXNzICd0aGlzJyBvbiB0aGUgb3V0c2lkZVxuXG4gICAgdmFyIHggPSB0aGlzLmN1cnJYO1xuICAgIHZhciB5ID0gdGhpcy5jdXJyWTtcbiAgICB2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZU9iai5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2VPYmosIHgsIHkpO1xuICAgIH07XG4gICAgaW1hZ2VPYmouc3JjID0gXCIuL2ltYWdlcy9CbGFjazIucG5nXCI7XG5cbiAgfVxuXG4gIHJlYm9ybkNoYXJhY3RlcihjdHgpIHtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5vcHRpb25zLnN0YXRlO1xuICAgIHRoaXMuY3VyclggPSB0aGlzLmNvbnZlcnRQaXhlbCh0aGlzLm9wdGlvbnMpLng7XG4gICAgdGhpcy5jdXJyWSA9IHRoaXMuY29udmVydFBpeGVsKHRoaXMub3B0aW9ucykueTtcbiAgfVxuICBtb3ZlKCkge1xuICAgIHZhciBkeSA9IC0yO1xuICAgIHRoaXMuY3VyclkgKz0gZHk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuXG4gICAgdmFyIHggPSB0aGlzLmN1cnJYO1xuICAgIHZhciB5ID0gdGhpcy5jdXJyWTtcbiAgICB2YXIgaW1hZ2VPYmpCID0gbmV3IEltYWdlKCk7XG4gICAgdmFyIGltYWdlT2JqVyA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlT2JqQi5zcmMgPSBcIi4vaW1hZ2VzL0JsYWNrMi5wbmdcIjtcbiAgICBpbWFnZU9ialcuc3JjID0gXCIuL2ltYWdlcy9XaGl0ZTIucG5nXCI7XG4gICAgaW1hZ2VPYmpCLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kcmF3Q2hhckludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PSAwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLCB4LCB5KTtcbiAgICAgICAgfVxuICAgICAgfSwgMjApO1xuICAgIH1cbiAgICBpbWFnZU9ialcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09IDEpIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMsIHgsIHkpO1xuICAgICAgICB9XG4gICAgICB9LCAyMCk7XG4gICAgfVxuXG4gICAgaW1hZ2VPYmpCLnNyYyA9IFwiLi9pbWFnZXMvQmxhY2syLnBuZ1wiO1xuICAgIGltYWdlT2JqVy5zcmMgPSBcIi4vaW1hZ2VzL1doaXRlMi5wbmdcIjtcbiAgfVxuXG5cblxuICAvLyBzZXRJbnRlcnZhbChkcmF3ICwyMCk7Ly9jaGVjayBldmVyeSAyMG1zXG5cbiAgY29udmVydFBpeGVsKGNvdW50ZXIpIHtcbiAgICB2YXIgZ3JpZFBpeGVsID0ge1xuICAgICAgeDogY291bnRlci5HcmlkWCAqICh0aGlzLkhfRElNRU5USU9OIC8gdGhpcy5IX0JMT0NLUyksXG4gICAgICB5OiAoY291bnRlci5HcmlkWSkgKiAodGhpcy5WX0RJTUVOVElPTiAvIHRoaXMuVl9CTE9DS1MpXG4gICAgfVxuICAgIHJldHVybiBncmlkUGl4ZWw7XG4gIH1cblxuXG5cblxuICBjaGFuZ2VTdGF0ZShlKSB7XG4gICAgLy9yZWdpc3RlciBhIGV2ZW50IGxpc3RlbmVyXG4gICAgdmFyIGtleSA9IGUua2V5Q29kZSA/IGUua2V5Q29kZSA6IGUud2hpY2g7XG4gICAgLy8gY29uc29sZS5sb2coa2V5KTtcbiAgICBjb25zb2xlLmxvZyhcInN0YXRlIGlzXCIgKyB0aGlzLnN0YXRlKTtcbiAgICBpZiAoa2V5ID09IDEwMikge1xuICAgICAgY29uc29sZS5sb2coXCJZb3UgUHJlc3NlZCB0aGUgZmtpbmcgRlwiKTtcblxuICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICB0aGlzLnN0YXRlKys7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJXaGl0ZVwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRoaXMuc3RhdGUtLTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkJsYWNrXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZnVja1wiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlcjsiLCJpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyJztcbmltcG9ydCBPYmogZnJvbSAnLi9PYmonO1xuaW1wb3J0IFBvcnRhbCBmcm9tICcuL1BvcnRhbCc7XG4vLyBpbXBvcnQgRW5lbXkgZnJvbSAuL0NoYXJhY3Rlci5qcztcblxuXG5jbGFzcyBHYW1lIHtcbiAgLy8gc2V0IHVwIGluc3RhbmNlIHZhcmlhYmxlc1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5jYW52YXMgPSBvcHRpb25zLmNhbnZhcztcbiAgICB0aGlzLmN0eCA9IG9wdGlvbnMuY29udGV4dDtcbiAgICB0aGlzLkRJTUVOU0lPTiA9IG9wdGlvbnMuRElNRU5TSU9OO1xuICAgIHRoaXMudW5pdmVyc2VFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXZlcnNlJyk7XG4gICAgdGhpcy5zcGVlZCA9IG9wdGlvbnMuc3BlZWQ7XG4gICAgdGhpcy5wbGFuID0gb3B0aW9ucy5wbGFuO1xuICAgIHRoaXMuR3JpZCA9IFtdO1xuICAgIHRoaXMucG9ydGFsc0IgPSBbXTtcbiAgICB0aGlzLnBvcnRhbHNXID0gW107XG4gICAgdGhpcy5pdHJzID0gW107XG4gICAgdGhpcy5pdHNzID0gW107XG4gICAgdGhpcy5tb3ZpbmdFID0gW107XG4gICAgdGhpcy5zdGlsbEUgPSBbXTtcbiAgICB0aGlzLmNoYXJhY3RlciA9IG5ldyBDaGFyYWN0ZXIoe1xuICAgICAgc3RhdGU6IDAsXG4gICAgICBHcmlkWDogNSxcbiAgICAgIEdyaWRZOiAyM1xuICAgIH0pO1xuICAgIHRoaXMucG9pbnQgPSAwO1xuICAgIHRoaXMud2luID0gZmFsc2U7XG4gICAgdGhpcy5IX0JMT0NLUyA9IDEzO1xuICAgIHRoaXMuSF9ESU1FTlRJT04gPSAyNTY7XG4gICAgdGhpcy5IID0gdGhpcy5IX0RJTUVOU0lPTiAvIHRoaXMuSF9CTE9DS1M7XG4gICAgdGhpcy5WX0JMT0NLUyA9IDI1O1xuICAgIHRoaXMuVl9ESU1FTlRJT04gPSA5NjA7XG4gICAgdGhpcy5WID0gdGhpcy5WX0RJTUVOU0lPTiAvIHRoaXMuVl9CTE9DS1M7XG4gICAgdGhpcy5tb3ZlSW50ZXJ2YWwgPSAwO1xuICAgIHRoaXMuZHJhd0ludGVydmFsID0gMDtcblxuICB9XG5cbiAgLy8gaW5pdGlhbCBzZXQgdXBcbiAgaW5pU2V0VXAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5wbGF5KCk7XG4gICAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICBzZWxmLmNoYXJhY3Rlci5jaGFuZ2VTdGF0ZShlKTtcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMucGxhbik7XG4gICAgdGhpcy5wYXJzZSh0aGlzLnBsYW4pO1xuXG4gICAgdGhpcy5jaGFyYWN0ZXIuaW5pdGlhbGl6ZUNoYXJhY3Rlcih0aGlzLmN0eCk7XG4gICAgdGhpcy5kcmF3KCk7XG4gICAgdGhpcy5jaGVja0NvbGxpc2lvbigpO1xuICAgIHRoaXMuY2hhcmFjdGVyLmRyYXcodGhpcy5jdHgpO1xuICB9XG5cblxuXG4gIHBhcnNlKHBsYW4pIHtcbiAgICAvLyBsZXQgZ3JpZCA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgYXJyYXkgPSBwbGFuW2ldLnNwbGl0KFwiIFwiKTtcblxuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGFycmF5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChhcnJheVtqXSA9PSBcInh4eFwiKSB7XG4gICAgICAgICAgdGhpcy5zdGlsbEUucHVzaChuZXcgT2JqKHtcbiAgICAgICAgICAgIEdyaWRYOiAxICsgMyAqIGogKyBqLFxuICAgICAgICAgICAgR3JpZFk6IGlcbiAgICAgICAgICB9KSk7XG5cblxuICAgICAgICB9IGVsc2UgaWYgKGFycmF5W2pdID09IFwibW9lXCIpIHtcbiAgICAgICAgICB0aGlzLkVuZW1pZXMucHVzaChuZXcgbW92aW5nRSh7fSkpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoYXJyYXlbal0gPT0gXCJwdFdcIikge1xuICAgICAgICAgIHRoaXMucG9ydGFsc1cucHVzaChuZXcgUG9ydGFsKDEsIHtcbiAgICAgICAgICAgIEdyaWRYOiAxICsgMyAqIGogKyBqLFxuICAgICAgICAgICAgR3JpZFk6IGlcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJyYXlbal0gPT0gXCJwdEJcIikge1xuICAgICAgICAgIHRoaXMucG9ydGFsc0IucHVzaChuZXcgUG9ydGFsKDAsIHtcbiAgICAgICAgICAgIEdyaWRYOiAxICsgMyAqIGogKyBqLFxuICAgICAgICAgICAgR3JpZFk6IGlcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJyYXlbal0gPT0gXCJpdHJcIikge1xuICAgICAgICAgIHRoaXMuaXRycy5wdXNoKG5ldyBPYmooe1xuICAgICAgICAgICAgR3JpZFg6IDEgKyAzICogaiArIGosXG4gICAgICAgICAgICBHcmlkWTogaVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIGlmIChhcnJheVtqXSA9PSBcIml0c1wiKSB7XG4gICAgICAgICAgdGhpcy5pdHNzLnB1c2gobmV3IE9iaih7XG4gICAgICAgICAgICBHcmlkWDogMSArIDMgKiBqICsgaixcbiAgICAgICAgICAgIEdyaWRZOiBpXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cblxuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cblxuXG5cblxuICBwbGF5KCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5tb3ZlSW50ZXJ2YWwpO1xuXG4gICAgdGhpcy5tb3ZlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuY2hhcmFjdGVyLm1vdmUoKTtcbiAgICB9LCAyMCk7XG5cbiAgfVxuXG5cbiAgLy8gZHJhdyBncmlkXG4gIGRyYXdHcmlkKCkge1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyM3NzcnO1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgLy8gdmVydGljYWwgbGluZXNcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuRElNRU5TSU9OLlVOSVZFUlNFX0xFTkdUSDsgaSsrKSB7XG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSCAqIGksIDApO1xuICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuRElNRU5TSU9OLkNFTExfTEVOR1RIICogaSxcbiAgICAgICAgdGhpcy5ESU1FTlNJT04uVU5JVkVSU0VfSEVJR0hUICogdGhpcy5ESU1FTlNJT04uQ0VMTF9IRUlHSFQpO1xuICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgfVxuICAgIC8vIGhvcml6b250YWwgbGluZXNcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuRElNRU5TSU9OLlVOSVZFUlNFX0hFSUdIVDsgaSsrKSB7XG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMuY3R4Lm1vdmVUbygwLCB0aGlzLkRJTUVOU0lPTi5DRUxMX0hFSUdIVCAqIGkpO1xuICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuRElNRU5TSU9OLlVOSVZFUlNFX0xFTkdUSCAqIHRoaXMuRElNRU5TSU9OLkNFTExfTEVOR1RILFxuICAgICAgICB0aGlzLkRJTUVOU0lPTi5DRUxMX0hFSUdIVCAqIGkpO1xuICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgfVxuICB9XG5cbiAgZHJhdygpIHtcbiAgICB2YXIgY3R4ID0gdGhpcy5jdHg7XG4gICAgdmFyIHhzaGlmdCA9IHRoaXMuRElNRU5TSU9OLkNFTExfTEVOR1RIO1xuICAgIHZhciB5c2hpZnQgPSB0aGlzLkRJTUVOU0lPTi5DRUxMX0hFSUdIVDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnBvcnRhbHNCKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnBvcnRhbHNXKTtcbiAgICB2YXIgb2JzdGFjbGVJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBvYnN0YWNsZUltZy5zcmMgPSBcIi4vaW1hZ2VzL09ic3RhY2xlLnBuZ1wiO1xuICAgIHZhciBwb3RCSW1nID0gbmV3IEltYWdlKCk7XG4gICAgcG90QkltZy5zcmMgPSBcIi4vaW1hZ2VzL3BvdEIucG5nXCI7XG4gICAgdmFyIHBvdFdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBwb3RXSW1nLnNyYyA9IFwiLi9pbWFnZXMvcG90Vy5wbmdcIjtcbiAgICB2YXIgc3RhcjJJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBzdGFyMkltZy5zcmMgPSBcIi4vaW1hZ2VzL1N0YXIyLnBuZ1wiO1xuICAgIHZhciByZXZJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICByZXZJbWcuc3JjID0gXCIuL2ltYWdlcy9yZXZlcnNlLnBuZ1wiO1xuICAgIHZhciBiQ2hhciA9IG5ldyBJbWFnZSgpO1xuICAgIHZhciB3Q2hhciA9IG5ldyBJbWFnZSgpO1xuICAgIGJDaGFyLnNyYyA9IFwiLi9pbWFnZXMvQmxhY2syLnBuZ1wiO1xuICAgIHdDaGFyLnNyYyA9IFwiLi9pbWFnZXMvV2hpdGUyLnBuZ1wiO1xuICAgIHRoaXMuZHJhd0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLkhfRElNRU5USU9OLCB0aGlzLlZfRElNRU5USU9OKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGlsbEUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHggPSB0aGlzLnN0aWxsRVtpXS5HcmlkWDtcbiAgICAgICAgbGV0IHkgPSB0aGlzLnN0aWxsRVtpXS5HcmlkWTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShvYnN0YWNsZUltZywgeCAqIHhzaGlmdCwgeSAqIHlzaGlmdCk7XG5cbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFJlY3QoLCwzKnRoaXMuRElNRU5TSU9OLkNFTExfTEVOR1RILHRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUKTtcblxuICAgICAgfVxuXG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wb3J0YWxzQi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgeCA9IHRoaXMucG9ydGFsc0JbaV0uR3JpZFg7XG4gICAgICAgIGxldCB5ID0gdGhpcy5wb3J0YWxzQltpXS5HcmlkWTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShwb3RCSW1nLCB4ICogeHNoaWZ0LCB5ICogeXNoaWZ0KTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvcnRhbHNXLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB4ID0gdGhpcy5wb3J0YWxzV1tpXS5HcmlkWDtcbiAgICAgICAgbGV0IHkgPSB0aGlzLnBvcnRhbHNXW2ldLkdyaWRZO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHBvdFdJbWcsIHggKiB4c2hpZnQsIHkgKiB5c2hpZnQpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRzcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgeCA9IHRoaXMuaXRzc1tpXS5HcmlkWDtcbiAgICAgICAgbGV0IHkgPSB0aGlzLml0c3NbaV0uR3JpZFk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2Uoc3RhcjJJbWcsIHggKiB4c2hpZnQsIHkgKiB5c2hpZnQpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgeCA9IHRoaXMuaXRyc1tpXS5HcmlkWDtcbiAgICAgICAgbGV0IHkgPSB0aGlzLml0cnNbaV0uR3JpZFk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UocmV2SW1nLCB4ICogeHNoaWZ0LCB5ICogeXNoaWZ0KTtcbiAgICAgIH1cblxuXG5cbiAgICAgIGlmICh0aGlzLmNoYXJhY3Rlci5zdGF0ZSA9PSAwKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoYkNoYXIsIHRoaXMuY2hhcmFjdGVyLmN1cnJYLCB0aGlzLmNoYXJhY3Rlci5jdXJyWSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHdDaGFyLCB0aGlzLmNoYXJhY3Rlci5jdXJyWCwgdGhpcy5jaGFyYWN0ZXIuY3VyclkpO1xuICAgICAgfVxuXG5cbiAgICB9LCAyMCk7XG4gIH1cblxuICBjaGVja0NvbGxpc2lvbigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGJDaGFyID0gbmV3IEltYWdlKCk7XG4gICAgYkNoYXIuc3JjID0gXCIuL2ltYWdlcy9CbGFjazIucG5nXCI7XG4gICAgdmFyIHdDaGFyID0gbmV3IEltYWdlKCk7XG4gICAgd0NoYXIuc3JjID0gXCIuL2ltYWdlcy9XaGl0ZTIucG5nXCI7XG5cbiAgICAvL2xvb3AgdGhyb3VnaCBldmVyeSBvYmplY3QgaW4gdGhlIG1hcFxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnBvcnRhbHNCLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvcnRhbHNCLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHBpeGVsID0gY29udmVydFBpeGVsKHRoaXMucG9ydGFsc0JbaV0pO1xuICAgICAgICAgIGlmICgoTWF0aC5hYnModGhpcy5jaGFyYWN0ZXIuY3VyclkgLSBwaXhlbC55KSA8IDUpIFxuICAgICAgICAgICAgJiYgKE1hdGguYWJzKHRoaXMuY2hhcmFjdGVyLmN1cnJYIC0gcGl4ZWwueCkgPCA1KSBcbiAgICAgICAgICAgICYmICh0aGlzLmNoYXJhY3Rlci5zdGF0ZSA9PSAwKSkge1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICB2YXIgbmV3TG9jID0gY29udmVydFBpeGVsKHRoaXMucG9ydGFsc0JbdGhpcy5wb3J0YWxzQi5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIG5ld0xvYyA9IGNvbnZlcnRQaXhlbCh0aGlzLnBvcnRhbHNCW2kgLSAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLmN1cnJYID0gbmV3TG9jLng7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3Rlci5jdXJyWSA9IG5ld0xvYy55IC0gMTE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnBvcnRhbHNXLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvcnRhbHNXLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHBpeGVsID0gY29udmVydFBpeGVsKHRoaXMucG9ydGFsc1dbaV0pO1xuICAgICAgICAgIGlmICgoTWF0aC5hYnModGhpcy5jaGFyYWN0ZXIuY3VyclkgLSBwaXhlbC55KSA8IDUpICYmIChNYXRoLmFicyh0aGlzLmNoYXJhY3Rlci5jdXJyWCAtIHBpeGVsLngpIDwgNSkgJiYgKHRoaXMuY2hhcmFjdGVyLnN0YXRlID09IDEpKSB7XG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgIHZhciBuZXdMb2MgPSBjb252ZXJ0UGl4ZWwodGhpcy5wb3J0YWxzV1t0aGlzLnBvcnRhbHNXLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICB2YXIgbmV3TG9jID0gY29udmVydFBpeGVsKHRoaXMucG9ydGFsc1dbaSAtIDFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLmN1cnJYID0gbmV3TG9jLng7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3Rlci5jdXJyWSA9IG5ld0xvYy55IC0gMTE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGlsbEUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHBpeGVsID0gY29udmVydFBpeGVsKHRoaXMuc3RpbGxFW2ldKTsgLy9pbiBwaXhlbFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwaXhlbC55KTtcbiAgICAgICAgLy8gaWYodGhpcy5jdXJyWSA+IGkueSAmJiB0aGlzLmN1cnJZIDwgaS55IC0gMzguNCAmJiAoY3VyclggPiBpLnggJiYgY3VyclggPCBpLnggKyAxOC4yOCl7XG4gICAgICAgICBpZiAoKE1hdGguYWJzKHRoaXMuY2hhcmFjdGVyLmN1cnJZIC0gcGl4ZWwueSkgPCA1KSAmJiAoTWF0aC5hYnModGhpcy5jaGFyYWN0ZXIuY3VyclggLSBwaXhlbC54KSA8IDUpKSB7XG4gICAgICAgICAgLy8gY29sbHNpb25UeXBlID0gXCJzdGlsbEVcIjtcbiAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMubW92ZUludGVydmFsKTtcbiAgICAgICAgICB0aGlzLmNoYXJhY3Rlci5yZWJvcm5DaGFyYWN0ZXIodGhpcy5jdHgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaSBhbSBleGVjdXRlZFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRzcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcGl4ZWwgPSBjb252ZXJ0UGl4ZWwodGhpcy5pdHNzW2ldKTsgLy9pbiBwaXhlbFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwaXhlbC55KTtcbiAgICAgICAgLy8gaWYodGhpcy5jdXJyWSA+IGkueSAmJiB0aGlzLmN1cnJZIDwgaS55IC0gMzguNCAmJiAoY3VyclggPiBpLnggJiYgY3VyclggPCBpLnggKyAxOC4yOCl7XG4gICAgICAgIGlmICgoTWF0aC5hYnModGhpcy5jaGFyYWN0ZXIuY3VyclkgLSBwaXhlbC55KSA8IDUpICYmIChNYXRoLmFicyh0aGlzLmNoYXJhY3Rlci5jdXJyWCAtIHBpeGVsLngpIDwgNSkpIHtcbiAgICAgICAgICAvLyBjb2xsc2lvblR5cGUgPSBcInN0aWxsRVwiO1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5tb3ZlSW50ZXJ2YWwpO1xuICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLnJlYm9ybkNoYXJhY3Rlcih0aGlzLmN0eCk7XG4gICAgICAgICAgYWxlcnQoXCJ5b3Ugd2luIVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jaGFyYWN0ZXIuY3VyclkgPCAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmFpbCFcIik7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5tb3ZlSW50ZXJ2YWwpO1xuICAgICAgICB0aGlzLmNoYXJhY3Rlci5yZWJvcm5DaGFyYWN0ZXIodGhpcy5jdHgpO1xuICAgICAgfVxuXG5cbiAgICB9LCAyMCk7XG5cbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmRyYXdJbnRlcnZhbCk7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLm1vdmVJbnRlcnZhbCk7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmNoYXJhY3Rlci5kcmF3Q2hhckludGVydmFsKTtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKSxcbiAgICAgICAgZWxDbG9uZSA9IGVsLmNsb25lTm9kZSh0cnVlKTtcbiAgICBlbC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlbENsb25lLCBlbCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICBzZWxmLmNoYXJhY3Rlci5jaGFuZ2VTdGF0ZShlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGNvbnZlcnRQaXhlbChjb3VudGVyKSB7XG4gIHZhciBIX0JMT0NLUyA9IDEzO1xuICB2YXIgSF9ESU1FTlRJT04gPSAyNTY7XG4gIHZhciBWX0JMT0NLUyA9IDI1O1xuICB2YXIgVl9ESU1FTlRJT04gPSA5NjA7XG4gIHZhciBncmlkUGl4ZWwgPSB7XG4gICAgeDogY291bnRlci5HcmlkWCAqIChIX0RJTUVOVElPTiAvIEhfQkxPQ0tTKSxcbiAgICB5OiAoY291bnRlci5HcmlkWSkgKiAoVl9ESU1FTlRJT04gLyBWX0JMT0NLUylcbiAgfVxuICByZXR1cm4gZ3JpZFBpeGVsO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiLCJjbGFzcyBPYmp7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpe1xuICAgIHRoaXMuR3JpZFggPSBvcHRpb25zLkdyaWRYO1xuICAgIHRoaXMuR3JpZFkgPSBvcHRpb25zLkdyaWRZO1xuXHR0aGlzLkhfQkxPQ0tTID0gMTM7XG4gICAgdGhpcy5IX0RJTUVOVElPTiA9IDI1NjtcbiAgICB0aGlzLlZfQkxPQ0tTID0gMjU7XG4gICAgdGhpcy5WX0RJTUVOVElPTiA9IDk2MDtcblxuICB9XG5cblx0IGNsZWFyKGN0eCkge1xuXHRcdCBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuSF9ESU1FTlRJT04sICB0aGlzLlZfRElNRU5USU9OKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9iajtcbiIsImltcG9ydCBPYmogZnJvbSAnLi9PYmonO1xuXG5jbGFzcyBQb3J0YWwgZXh0ZW5kcyBPYmp7XG4gIGNvbnN0cnVjdG9yKHN0YXRlLG9wdGlvbnMpe1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgfVxufVxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBQb3J0YWw7XG4iXX0=
