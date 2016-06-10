import Obj from './Obj';

class Character extends Obj {
  constructor(options) {
    super(options);
    this.state = options.state;
    this.currY = this.convertPixel(options).y; //in pixel; Y DECREASES
    this.currX = this.convertPixel(options).x;
    this.options = options;
  }

  initializeCharacter(ctx) {
    //only able to access 'this' on the outside

    var x = this.currX;
    var y = this.currY;
    var imageObj = new Image();
    imageObj.onload = function() {
      ctx.drawImage(imageObj, x, y);
    };
    imageObj.src = "./images/Black2.png";

  }

  rebornCharacter(ctx) {
    this.state = this.options.state;
    this.currX = this.convertPixel(this.options).x;
    this.currY = this.convertPixel(this.options).y;
  }
  move() {
    var dy = -2;
    this.currY += dy;
  }

  draw(ctx) {

    var x = this.currX;
    var y = this.currY;
    var imageObjB = new Image();
    var imageObjW = new Image();
    imageObjB.src = "./images/Black2.png";
    imageObjW.src = "./images/White2.png";
    imageObjB.onload = function() {
      this.drawCharInterval = setInterval(() => {
        if (this.state == 0) {
          ctx.drawImage(this, x, y);
        }
      }, 20);
    }
    imageObjW.onload = function() {
      setInterval(() => {
        if (this.state == 1) {
          ctx.drawImage(this, x, y);
        }
      }, 20);
    }

    imageObjB.src = "./images/Black2.png";
    imageObjW.src = "./images/White2.png";
  }



  // setInterval(draw ,20);//check every 20ms

  convertPixel(counter) {
    var gridPixel = {
      x: counter.GridX * (this.H_DIMENTION / this.H_BLOCKS),
      y: (counter.GridY) * (this.V_DIMENTION / this.V_BLOCKS)
    }
    return gridPixel;
  }




  changeState(e) {
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
}

module.exports = Character;