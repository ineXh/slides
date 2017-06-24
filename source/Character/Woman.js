var Utils = require('./../Utils.js');
var Helper = require('./../Helper.js');
var constants = require('./../Constants.js');
var Assets = require('./../Assets.js');
module.exports = exports = Woman;

function Woman(){
  this.create();
}
Woman.prototype = {
  create: function(){
  	this.bodySprite = Helper.buttonCreate(Assets.characterTextures.womanBodyTexture,
                     width/2, height/2, width/8);
    this.scale = this.bodySprite.scale.x;
  	this.bodySprite.scale.set(this.scale);

    this.hairBackSprite = Helper.buttonCreate(Assets.characterTextures.womanHairBackTexture,
                     width/2, height/2, width/8);    
    this.hairBackSprite.scale.set(this.scale);
    

    this.talkSprite = new PIXI.extras.AnimatedSprite(Assets.mouthTextures.womanTalkTexture);
    this.talkSprite.anchor.x = 0.5;
    this.talkSprite.anchor.y = 0.5;
    this.talkSprite.scale.set(this.scale*1.0);
    this.talkSprite.animationSpeed = 0.4;
    //this.talkSprite.loop = false;

    this.mouthSprite = Helper.buttonCreate(Assets.mouthTextures.womanMouth1Texture,
                     width/2, height/2, width);
    this.mouthSprite.scale.set(this.scale*1.0);

  	this.lArmSprite = Helper.buttonCreate(Assets.characterTextures.womanLeftTexture,
                     width/2, height/2, width);
  	this.lArmSprite.scale.set(this.scale);
  	this.rArmSprite = Helper.buttonCreate(Assets.characterTextures.womanLeftTexture,
                     width/2, height/2, width);
  	this.rArmSprite.scale.set(this.scale);
  	this.rArmSprite.scale.x = -this.rArmSprite.scale.x;



  },
  init: function(container, x, y){
    this.container = container;

    container.addChild(this.hairBackSprite);
  	container.addChild(this.lArmSprite);
  	container.addChild(this.rArmSprite);

  	container.addChild(this.bodySprite);

    container.addChild(this.talkSprite);

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

    this.talkSprite.play();
  },
  update: function(){

    this.hairBackSprite.x = this.bodySprite.x - this.bodySprite.width*0.095;
    this.hairBackSprite.y = this.bodySprite.y - this.bodySprite.height*0.275;


  	this.lArmSprite.x = this.bodySprite.x - this.bodySprite.width*0.25;
  	this.lArmSprite.y = this.bodySprite.y - this.bodySprite.height*0.18;
  	this.rArmSprite.x = this.bodySprite.x + this.bodySprite.width*0.14;
  	this.rArmSprite.y = this.bodySprite.y - this.bodySprite.height*0.18;



    this.talkSprite.x = this.bodySprite.x - this.bodySprite.width*0.045;
    this.talkSprite.y = this.bodySprite.y - this.bodySprite.height*0.275;

    this.mouthSprite.x = this.bodySprite.x - this.bodySprite.width*0.045;
    this.mouthSprite.y = this.bodySprite.y - this.bodySprite.height*0.275;

    this.rArmSprite.rotation += this.rArmRotation;
    if(this.rArmSprite.rotation > PI*0.45) this.rArmRotation = -this.rArmRotation;
    if(this.rArmSprite.rotation < PI*0.25) this.rArmRotation = -this.rArmRotation;

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