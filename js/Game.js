import Character from './Character';
import Obj from './Obj';
import Portal from './Portal';
// import Enemy from ./Character.js;


class Game {
  // set up instance variables
  constructor(options) {
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
    this.character = new Character({
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
  iniSetUp() {
    var self = this;
    document.getElementById('start')
      .addEventListener('click', function() {
        self.play();
      });

    document.addEventListener("keypress", function(e) {
      self.character.changeState(e);
    });

    console.log(this.plan);
    this.parse(this.plan);

    this.character.initializeCharacter(this.ctx);
    this.draw();
    this.checkCollision();
    this.character.draw(this.ctx);
  }



  parse(plan) {
    // let grid = [];

    for (var i = 0; i < plan.length; i++) {
      let array = plan[i].split(" ");


      for (var j = 0; j < array.length; j++) {
        if (array[j] == "xxx") {
          this.stillE.push(new Obj({
            GridX: 1 + 3 * j + j,
            GridY: i
          }));


        } else if (array[j] == "moe") {
          this.Enemies.push(new movingE({}));

        } else if (array[j] == "ptW") {
          this.portalsW.push(new Portal(1, {
            GridX: 1 + 3 * j + j,
            GridY: i
          }));
        } else if (array[j] == "ptB") {
          this.portalsB.push(new Portal(0, {
            GridX: 1 + 3 * j + j,
            GridY: i
          }));
        } else if (array[j] == "itr") {
          this.itrs.push(new Obj({
            GridX: 1 + 3 * j + j,
            GridY: i
          }));
        } else if (array[j] == "its") {
          this.itss.push(new Obj({
            GridX: 1 + 3 * j + j,
            GridY: i
          }));
        }


      }

    }

  }




  play() {
    var self = this;

    clearInterval(this.moveInterval);

    this.moveInterval = setInterval(function() {
      self.character.move();
    }, 20);

  }


  // draw grid
  drawGrid() {
    this.ctx.strokeStyle = '#777';
    this.ctx.lineWidth = 1;
    // vertical lines
    for (let i = 1; i < this.DIMENSION.UNIVERSE_LENGTH; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.DIMENSION.CELL_LENGTH * i, 0);
      this.ctx.lineTo(this.DIMENSION.CELL_LENGTH * i,
        this.DIMENSION.UNIVERSE_HEIGHT * this.DIMENSION.CELL_HEIGHT);
      this.ctx.stroke();
    }
    // horizontal lines
    for (let i = 1; i < this.DIMENSION.UNIVERSE_HEIGHT; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, this.DIMENSION.CELL_HEIGHT * i);
      this.ctx.lineTo(this.DIMENSION.UNIVERSE_LENGTH * this.DIMENSION.CELL_LENGTH,
        this.DIMENSION.CELL_HEIGHT * i);
      this.ctx.stroke();
    }
  }

  draw() {
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
    this.drawInterval = setInterval(() => {
      ctx.clearRect(0, 0, this.H_DIMENTION, this.V_DIMENTION);
      for (var i = 0; i < this.stillE.length; i++) {
        let x = this.stillE[i].GridX;
        let y = this.stillE[i].GridY;
        ctx.drawImage(obstacleImg, x * xshift, y * yshift);

        // this.ctx.fillRect(,,3*this.DIMENSION.CELL_LENGTH,this.DIMENSION.CELL_HEIGHT);

      }


      for (var i = 0; i < this.portalsB.length; i++) {
        let x = this.portalsB[i].GridX;
        let y = this.portalsB[i].GridY;
        ctx.drawImage(potBImg, x * xshift, y * yshift);
      }

      for (var i = 0; i < this.portalsW.length; i++) {
        let x = this.portalsW[i].GridX;
        let y = this.portalsW[i].GridY;
        ctx.drawImage(potWImg, x * xshift, y * yshift);
      }

      for (var i = 0; i < this.itss.length; i++) {
        let x = this.itss[i].GridX;
        let y = this.itss[i].GridY;
        ctx.drawImage(star2Img, x * xshift, y * yshift);
      }

      for (var i = 0; i < this.itrs.length; i++) {
        let x = this.itrs[i].GridX;
        let y = this.itrs[i].GridY;
        ctx.drawImage(revImg, x * xshift, y * yshift);
      }



      if (this.character.state == 0) {
        ctx.drawImage(bChar, this.character.currX, this.character.currY);
      } else {
        ctx.drawImage(wChar, this.character.currX, this.character.currY);
      }


    }, 20);
  }

  checkCollision() {
    var self = this;
    var bChar = new Image();
    bChar.src = "./images/Black2.png";
    var wChar = new Image();
    wChar.src = "./images/White2.png";

    //loop through every object in the map
    setInterval(() => {
      if (this.portalsB.length > 0) {
        for (let i = 0; i < this.portalsB.length; i++) {
          var pixel = convertPixel(this.portalsB[i]);
          if ((Math.abs(this.character.currY - pixel.y) < 5) 
            && (Math.abs(this.character.currX - pixel.x) < 5) 
            && (this.character.state == 0)) {
            if (i == 0) {
              var newLoc = convertPixel(this.portalsB[this.portalsB.length - 1]);
            }
            else {
              var newLoc = convertPixel(this.portalsB[i - 1]);
            }
            this.character.currX = newLoc.x;
            if (this.character.direction == 0)
            this.character.currY = newLoc.y - 11;
            else this.character.currY = newLoc.y + 11;
          }
        }
      }

      if (this.portalsW.length > 0) {
        for (let i = 0; i < this.portalsW.length; i++) {
          var pixel = convertPixel(this.portalsW[i]);
          if ((Math.abs(this.character.currY - pixel.y) < 5) && (Math.abs(this.character.currX - pixel.x) < 5) && (this.character.state == 1)) {
            if (i == 0) {
              var newLoc = convertPixel(this.portalsW[this.portalsW.length - 1]);
            }
            else {
              var newLoc = convertPixel(this.portalsW[i - 1]);
            }
            this.character.currX = newLoc.x;
            if (this.character.direction == 0)
            this.character.currY = newLoc.y - 11;
            else this.character.currY = newLoc.y + 11;
          }
        }
      }

      for (var i = 0; i < this.stillE.length; i++) {
        var pixel = convertPixel(this.stillE[i]); //in pixel
         if ((Math.abs(this.character.currY - pixel.y) < 5) && (Math.abs(this.character.currX - pixel.x) < 5)) {
          clearInterval(this.moveInterval);
          this.character.rebornCharacter(this.ctx);
          console.log("i am executed");
        }
      }

      for (var i = 0; i < this.itss.length; i++) {
        var pixel = convertPixel(this.itss[i]); //in pixel
        if ((Math.abs(this.character.currY - pixel.y) < 5) && (Math.abs(this.character.currX - pixel.x) < 5)) {
          clearInterval(this.moveInterval);
          this.character.rebornCharacter(this.ctx);
          alert("you win!");
        }
      }

      for (var i = 0; i < this.itrs.length; i++) {
        var pixel = convertPixel(this.itrs[i]); //in pixel
        if ((Math.abs(this.character.currY - pixel.y) < 5) && (Math.abs(this.character.currX - pixel.x) < 5)) {
          this.character.reverse();

        }
      }

      if (this.character.currY < 0) {
        console.log("fail!");
        clearInterval(this.moveInterval);
        this.character.rebornCharacter(this.ctx);
      }


    }, 20);

  }

  stop() {
    clearInterval(this.drawInterval);
    clearInterval(this.moveInterval);
    clearInterval(this.character.drawCharInterval);
    var el = document.getElementById('start'),
        elClone = el.cloneNode(true);
    el.parentNode.replaceChild(elClone, el);
        document.removeEventListener("keypress", function(e) {
      self.character.changeState(e);
    });
  }
}


function convertPixel(counter) {
  var H_BLOCKS = 13;
  var H_DIMENTION = 256;
  var V_BLOCKS = 25;
  var V_DIMENTION = 960;
  var gridPixel = {
    x: counter.GridX * (H_DIMENTION / H_BLOCKS),
    y: (counter.GridY) * (V_DIMENTION / V_BLOCKS)
  }
  return gridPixel;
}


module.exports = Game;