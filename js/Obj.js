class Obj{
  constructor(options){
    this.GridX = options.X;
    this.GridY = options.Y;
    this.state;
  }

function update(obj){
  ctx.clearRect(obj.x, obj.y, canvas.width, canvas.height);
}
}
