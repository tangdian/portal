class Character extends Obj{
  constructor(x,y){
    super(options,state);
    this.currY = y;//in pixel;
    this.currX = x;
  }
  
  function checkCollision(){
    var collisionType;
    //loop through every object in the map
    for(var i = 0; i < portal.length; i++){
      if((this.currY == i.GridY) && (this.currX == i.GridX){
        collsionType = "portal";
        newX = portal[i+1].GridX;
        newY = portal[i+1].GridY + 38.4;
        update();
        ctx.beginPath();
        ctx.rect(newX, newY, 54.857, 38.5);
        ctx.arc(newX + 9.14, newY, 17, 0, Math.PI*2, true);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }

    for(var i = 0; i < enemy.length; i++){
      // if(this.currY > i.GridY && this.currY < i.GridY - 38.4 && (currX > i.GridX && currX < i.Gridx + 18.28){
      if((this.currY == i.GridY) && (this.currX == i.GridX){
        collsionType = "enemy";
        document.reload();
      }
    }
    for(var i = 0; i < item.length; i++){
      if((this.currY == i.GridY) && (this.currX == i.GridX){
        collsionType = "item";
        itemCollected ++;
      }
    }
  }
  }
  setInterval(checkCollision() ,20);//check every 20ms

  document.addEventListener("keydown", changeState);
  function changeState(e){
    //register a event listener
    var key = e.keyCode ? e.keyCode : e.which;
    if (key == 38) {
      switch(state):
        case 0:
          state++;
          break;
        case 1:
          state--;
          break;
     }
  }
}
