var Utils = require('./Utils.js');
module.exports = exports = Ball;
var walldamp = 0.9;
function Ball(x, y, r, draw, texture){
  this.init(x,y, r);
  if(draw == undefined || draw == true){
    if(texture == undefined){
      this.toDraw = true;
      this.draw();
    }else{
      this.toDrawSprite = true;
      this.drawSprite(texture);
    }
  }
}
Ball.prototype = {
  init: function(x, y, r){

    this.clr = Utils.getRndColor();
    this.pos = new PVector(x,y);//{x : 500 - + Math.floor((Math.random() * 4) + 1)*25, y: 425 + Math.floor((Math.random() * 4) + 1)*25};
    //this.vel = new PVector(0,0);
    this.accel = new PVector(0,0);
    this.vel = new PVector(Math.random()*width/10,Math.random()*height/10);//{x : 0, y: 1};
    //this.accel = new PVector(1,0);//{x : 1, y: 0};
    this.r = r;//width/80;
    this.width = this.r*2;
    this.height = this.r*2;
    this.maxspeed = width/100;
    this.border = true;

  //  if(this.toDraw == undefined) this.toDraw = true;
    //if(this.toDraw) this.draw();
  },
  drawSprite: function(texture){
    this.sprite = new PIXI.Sprite(texture);
    this.sprite.anchor.x = 0.5;
    this.sprite.anchor.y = 0.5;
    this.scale =  (this.r) /
                  ((this.sprite.width < this.sprite.height) ? this.sprite.width : this.sprite.height);
    this.sprite.scale.set(this.scale);
    stage.addChild(this.sprite);
  }, // end drawSprite
  draw: function(){
    this.graphics = new PIXI.Graphics();
    this.graphics.x = this.pos.x;
    this.graphics.y = this.pos.x;
    this.graphics.beginFill(this.clr);
    this.graphics.drawCircle(0, 0, this.r);
    this.graphics.endFill();
    stage.addChild(this.graphics);
  },
  update: function(time){
    this.move(time);
    if(this.toDraw) this.render();
    if(this.toDrawSprite) this.renderSprite();
  },
  move: function(time){
    this.vel.add(this.accel);
    //this.vel.mult(damping);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.accel.mult(0);
    if(this.border)   this.stayinBorder();
  },  
  render: function(){
    this.graphics.x = this.pos.x;
    this.graphics.y = this.pos.y;
  },
  renderSprite: function(){
    this.sprite.x = this.pos.x;
    this.sprite.y = this.pos.y;
    this.sprite.rotation += 0.01;
  },
  stayinBorder : function(){
    if (this.pos.x - this.r < 0) {
      this.pos.x = this.r;
      this.vel.x = this.vel.x*walldamp;
      return true;
    }
    if (this.pos.x + this.r > stageWidth) {
      //println(this.vel);
      this.vel.x = this.vel.x*walldamp;
      this.pos.x = stageWidth - this.r;
      return true;
    }
    if (this.pos.y -this. r < 0) {
      this.vel.y = this.vel.y*walldamp;
      this.pos.y = this.r;
      return true;
    }
    if (this.pos.y + this.r > stageHeight) {
      this.vel.y = this.vel.y*walldamp;
      this.pos.y = stageHeight - this.r;
      return true;
    }
    return false;
  }, // end stayinBorder
  applyForce : function(force) {
    // We could add mass here if we want A = F / M
    //console.log(this);
    //console.log("this.accel: ");
    //console.log(this.accel);
    this.accel.add(force);
  },

}
