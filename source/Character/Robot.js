var Utils = require('./../Utils.js');
var Helper = require('./../Helper.js');
var constants = require('./../Constants.js');
var Assets = require('./../Assets.js');
module.exports = exports = Robot;

function Robot(){
  this.create();
}
Robot.prototype = {
  create: function(){
  	this.bodySprite = Helper.buttonCreate(Assets.characterTextures.robot.bodyTexture,
                     width/2, height/2, width/8);
    this.scale = this.bodySprite.scale.x;
  	this.bodySprite.scale.set(this.scale);

  	this.lArmSprite = Helper.buttonCreate(Assets.characterTextures.robot.armTexture,
                     width/2, height/2, width);
  	this.lArmSprite.scale.set(this.scale);
  	this.rArmSprite = Helper.buttonCreate(Assets.characterTextures.robot.armTexture,
                     width/2, height/2, width);
  	this.rArmSprite.scale.set(this.scale);
  	this.rArmSprite.scale.x = -this.rArmSprite.scale.x;



  },
  init: function(container, x, y){
    this.container = container;

  	container.addChild(this.lArmSprite);
  	container.addChild(this.rArmSprite);

  	container.addChild(this.bodySprite);


  	//debugger;
  	this.bodySprite.x = x;
  	this.bodySprite.y = y;

  	this.lArmSprite.anchor.x = 1
  	this.lArmSprite.anchor.y = 0.95
  	this.lArmSprite.rotation = -PI*0.40;
  	this.rArmSprite.anchor.x = 1
  	this.rArmSprite.anchor.y = 0.95
  	this.rArmSprite.rotation = PI*0.25;

  	this.lArmRotation = PI/720/2;
    this.rArmRotation = PI/720/2;

  },
  update: function(){

  

  	/*this.lArmSprite.x = this.bodySprite.x - this.bodySprite.width*0.25;
  	this.lArmSprite.y = this.bodySprite.y - this.bodySprite.height*0.18;
  	this.rArmSprite.x = this.bodySprite.x + this.bodySprite.width*0.14;
  	this.rArmSprite.y = this.bodySprite.y - this.bodySprite.height*0.18;


    this.rArmSprite.rotation += this.rArmRotation;
    if(this.rArmSprite.rotation > PI*0.45) this.rArmRotation = -this.rArmRotation;
    if(this.rArmSprite.rotation < PI*0.25) this.rArmRotation = -this.rArmRotation;*/

  	//this.lArmSprite.rotation += this.lArmRotation;
  	//if(this.lArmSprite.rotation > -PI*0.1) this.lArmRotation = -this.lArmRotation;
  	//if(this.lArmSprite.rotation < -PI*0.35) this.lArmRotation = -this.lArmRotation;
  },
  smile: function(){
    this.talkSprite.stop();
    this.container.removeChild(this.talkSprite);
    this.container.addChild(this.mouthSprite);
  }
}