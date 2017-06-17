var Utils = require('./../Utils.js');
var Helper = require('./../Helper.js');
var constants = require('./../Constants.js');
var Assets = require('./../Assets.js');
module.exports = exports = Slip;

function Slip(){
  this.create();
}
Slip.prototype = {
  create: function(){
	size = width/8;
	var graphics = new PIXI.Graphics();
	graphics.lineStyle(width/500, 0xAAAAAA, 1);
	graphics.beginFill(0xFFFFFF, 1);
	graphics.drawRoundedRect(0, 0, width*0.4, height/5, width/200);
	graphics.endFill();
	Assets.textures.slipTexture = worldRenderer.generateTexture(graphics);

	this.sprite = Helper.buttonCreate(Assets.textures.slipTexture, //Assets.textures.rectTexture,
                     width/2, height*0.5, width*0.4);
    
    this.sprite.alpha = 0.9;

    this.pos = new PVector(0, 0);
  },
  init: function(container, x, y, tint){
  	this.sprite.tint = tint;
  	this.pos.x = this.sprite.x = x;
  	this.pos.y = this.sprite.y = y;
  	container.addChild(this.sprite)
  },
  update: function(){
  	this.sprite.x = this.pos.x;
  	this.sprite.y = this.pos.y;

  },
  slide: function(x0, y0, x1, y1, time, cb){
  	var slip = this;
  	//console.log('slideRight')
  	//if(cb) console.log(cb)
  	updateQueue.add(slip);
  	createjs.Tween.get(slip.pos, {loop: false})
	.to({guide:{ path:[x0, y0,
						(x0 + x1)/2,
    					(y0 + y1)/2,
						x1, y1] }}, time)
	.call(function(){
		updateQueue.remove(slip);
		slip.update();
		if(cb) cb()
	})
  },
} // end Slip