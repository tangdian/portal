class Character extends Obj{
  constructor(state,options){
    super(state,options);
    this.currY = convertPixel(options).y;//in pixel; Y DECREASES
    this.currX = convertPixel(options).x;
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

  function initializeCharacter(){
    ctx.beginPath();
    ctx.arc(120, 900, 17, 0, Math.PI*2, true);//character size
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

  function draw() {
    this.clear();
    var dy = -1;
    y += dy;
  }

  setInterval(draw ,20);//check every 20ms

  function convertPixel(counter){
    var H_BLOCKS = 14;
    var H_DIMENTION = 256;
    var V_BLOCKS = 25;
    var V_DIMENTION = 960;
    var gridPixel.x = counter.GridX * (H_DIMENTION / H_BLOCKS);
    var gridPixel.y = (counter.GridY+1) * (V_DIMENTION / V_BLOCKS);
    return gridPixel;
  }


  function checkCollision(portals, enemies, items){
    var collisionType;
    //loop through every object in the map
    for(var i = 0; i < portal.length; i++){
      var pixel = convertPixel(portal[i]);//in pixel
      if((this.currY == pixel.y) && (this.currX == pixel.x){
        this.clear();
        collsionType = "portal";
        currX = portal[i+1].GridX;//in grid
        currY = portal[i+1].GridY;
        ctx.beginPath();
        ctx.arc(currX + 9.14, currY, 17, 0, Math.PI*2, true);//portal size
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }

    for(var i = 0; i < enemies.length; i++){
      var pixel = convertPixel(enemies[i]);//in pixel
      // if(this.currY > i.y && this.currY < i.y - 38.4 && (currX > i.x && currX < i.x + 18.28){
      if((this.currY == pixel.y) && (this.currX == pixel.x){
        collsionType = "enemies";
        document.reload();
      }
    }
    for(var i = 0; i < items.length; i++){
      var pixel = convertPixel(items[i]);//in pixel
      if((this.currY == pixel.y) && (this.currX == pixel.x){
        collsionType = "items";
        itemCollected ++;
        console.log(itemCollected);
      }
    }
  }

  setInterval(checkCollision ,20);//check every 20ms
  document.addEventListener("keydown", changeState);


  function changeState(e){
    //register a event listener
    var key = e.keyCode ? e.keyCode : e.which;
    if (key == 38) {
      console.log("You Pressed the fking Space");
      switch(state):
        case 0:
          state++;
          console.log("White");
          break;
        case 1:
          state--;
          console.log("Black");
          break;
     }
  }
}
}
