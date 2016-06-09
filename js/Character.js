import Obj from './Obj';

class Character extends Obj{
  constructor(options){
    super(options);
    this.state = options.state;
    this.currY = this.convertPixel(options).y;//in pixel; Y DECREASES
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

 initializeCharacter(ctx){
 //only able to access 'this' on the outside
 
   
     var x = this.currX ;
     var y = this.currY ;
     var imageObj = new Image();
     imageObj.onload = function() {
       ctx.drawImage(imageObj, x, y);
     };
     imageObj.src = "./images/Black2.png";

    // ctx.beginPath();

    // ctx.arc(120, 900, 17, 0, Math.PI*2, true);//character size
    // ctx.fillStyle = "#0095DD";
    // ctx.fill();
    // ctx.closePath();
  }

  rebornCharacter (ctx) {
    var self = this;
    var bx = this.currX;
    var by = this.currY;
  
    setTimeout(function() {
      self.clear(ctx);
      var x = self.convertPixel(self.options).x;
      var y = self.convertPixel(self.options).y;
      self.currX = x;
      self.currY = y;
      var imageObj = new Image();
      imageObj.onload = function() {

        ctx.drawImage(imageObj, x, y);

      };
      imageObj.src = "./images/Black2.png";
    }, 50);
  }

  log() {
    console.log("doing");
  }

  move() {
    var dy = -1;
    this.currY += dy;
  }

   draw(ctx) {
      // console.log("drawing..");
    // this.clear(ctx,this.currX,this.currY);
    


    var x = this.currX;
    var y = this.currY;
    var imageObjB = new Image();
    var imageObjW = new Image();
    imageObjB.src = "./images/Black2.png";
    imageObjW.src = "./images/White2.png";
    imageObjB.onload = function() {
        setInterval(() => {
          if(this.state == 0) {
            ctx.drawImage(this, x, y);
          }
        },20);
      }
    imageObjW.onload = function() {
        setInterval(() => {
          if(this.state == 1) {
            ctx.drawImage(this, x, y);
          }
        },20);
      }
    
      imageObjB.src = "./images/Black2.png";
      imageObjW.src = "./images/White2.png";
    }



  // setInterval(draw ,20);//check every 20ms

   convertPixel(counter){
    // var H_BLOCKS = 14;
    // var H_DIMENTION = 256;
    // var V_BLOCKS = 25;
    // var V_DIMENTION = 960;
    var gridPixel = {
      x: counter.GridX * (this.H_DIMENTION / this.H_BLOCKS),
      y: (counter.GridY) * (this.V_DIMENTION / this.V_BLOCKS)
    }
    return gridPixel;
  }




   changeState(e){
    //register a event listener
    var key = e.keyCode ? e.keyCode : e.which;
    console.log("state is"+this.state);
    if (key == 32) {
      console.log("You Pressed the fking Space");

      switch(this.state){
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
