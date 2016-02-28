class movingObj extends Obj{
  constructor(options){
    super(options);
    // this.initialX = convertPixel(options).x;
    // this.initialY = convertPixel(options).y;
    this.initialX = this.options.x;
    this.initialY = this.options.y;
  }
  //not using now
 //  convertPixel(counter){
 //   // var H_BLOCKS = 14;
 //   // var H_DIMENTION = 256;
 //   // var V_BLOCKS = 25;
 //   // var V_DIMENTION = 960;
 //   var gridPixel = {
 //     x: counter.GridX * (this.H_DIMENTION / this.H_BLOCKS),
 //     y: (counter.GridY) * (this.V_DIMENTION / this.V_BLOCKS)
 //   }
 //   return gridPixel;
 // }

 initializeMovingObj(ctx){
   var x = this.initialX;
   var y = this.initialY;
  //  var toX = this.finalX;
  //  var toY = this.finalY;
   var imageObj = new Image();
   imageObj.onload = function() {
     ctx.drawImage(imageObj, x,y);
   };
   imageObj.src = "./images/Obstacle.png";
 }

 drawMovingObj(ctx) {
   var x = this.initialX;
   var y = this.initialY;
   var currX;//
   var currY;//
   console.log("drawing..");
   this.clear(ctx,currX,currY);//
   var imageObj = new Image();

   var direction = "right";
   if (direction == "right") {
      this.clear(ctx,x-1,y-1);
      imageObj.onload = function() {
      ctx.drawImage(imageObj, x, y);
      };
    //update movingObj place in pixel
    this.option.x = x;
      x++;
      if (x > this.H_DIMENTION) {
      direction = "left";
      }
    } else if (direction == "left") {
      this.clear(ctx,x+1,y+1);
      imageObj.onload = function() {
      ctx.drawImage(imageObj, x, y);
      };
      //update movingObj place in pixel
      this.option.x = x;
      x--;
      if (x < 1) {
        direction = "right";
      }
    }

  imageObj.src = "./images/Obstacle.png";
}
}
