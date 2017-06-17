var Utils = require('./../Utils.js');
var Helper = require('./../Helper.js');
var constants = require('./../Constants.js');
var Assets = require('./../Assets.js');
module.exports = exports = Character;

function Character(){
  this.create();
}
Character.prototype = {
  create: function(){
  	this.bodySprite = Helper.buttonCreate(Assets.characterTextures.cowBodyTexture,
                     width/2, height/2, width/8);
    this.scale = this.bodySprite.scale.x;
  	this.bodySprite.scale.set(this.scale);
  	this.headSprite = Helper.buttonCreate(Assets.characterTextures.cowHeadTexture,
                     width/2, height/2, width);
  	this.headSprite.scale.set(this.scale);

    this.eyebrowSprite = Helper.buttonCreate(Assets.characterTextures.cowEyebrowTexture,
                     width/2, height/2, width);
    this.eyebrowSprite.scale.set(this.scale);

    this.eyeSprite = Helper.buttonCreate(Assets.characterTextures.cowEyesTexture,
                     width/2, height/2, width);
    this.eyeSprite.scale.set(this.scale);

    this.talkSprite = new PIXI.extras.AnimatedSprite(Assets.mouthTextures.cowTalkTexture);
    this.talkSprite.anchor.x = 0.5;
    this.talkSprite.anchor.y = 0.5;
    this.talkSprite.scale.set(this.scale*0.6);
    this.talkSprite.animationSpeed = 0.4;
    //this.talkSprite.loop = false;

    this.mouthSprite = Helper.buttonCreate(Assets.mouthTextures.mouth1Texture,
                     width/2, height/2, width);
    this.mouthSprite.scale.set(this.scale*0.6);

  	this.lArmSprite = Helper.buttonCreate(Assets.characterTextures.cowLeftTexture,
                     width/2, height/2, width);
  	this.lArmSprite.scale.set(this.scale);
  	this.rArmSprite = Helper.buttonCreate(Assets.characterTextures.cowLeftTexture,
                     width/2, height/2, width);
  	this.rArmSprite.scale.set(this.scale);
  	this.rArmSprite.scale.x = -this.rArmSprite.scale.x;

  	this.lLegSprite = Helper.buttonCreate(Assets.characterTextures.cowLeftLegTexture,
                     width/2, height/2, width);
  	this.lLegSprite.scale.set(this.scale);

  	this.rLegSprite = Helper.buttonCreate(Assets.characterTextures.cowLeftLegTexture,
                     width/2, height/2, width);
  	this.rLegSprite.scale.set(this.scale);
  	this.rLegSprite.scale.x = -this.rLegSprite.scale.x;

  },
  init: function(container, x, y){
    this.container = container;
  	container.addChild(this.lArmSprite);
  	container.addChild(this.rArmSprite);
  	container.addChild(this.lLegSprite);
  	container.addChild(this.rLegSprite);
  	container.addChild(this.bodySprite);
  	container.addChild(this.headSprite);
    container.addChild(this.eyeSprite);
    container.addChild(this.eyebrowSprite);

    container.addChild(this.talkSprite);

  	//debugger;
  	this.bodySprite.x = x;
  	this.bodySprite.y = y;

  	this.lArmSprite.anchor.x = 1
  	this.lArmSprite.anchor.y = 0.5
  	this.lArmSprite.rotation = -PI/4;
  	this.rArmSprite.anchor.x = 1
  	this.rArmSprite.anchor.y = 0.5
  	this.rArmSprite.rotation = PI/4;

  	this.lLegSprite.anchor.x = 0.8
  	this.lLegSprite.anchor.y = 0.2
  	this.lLegSprite.rotation = PI/8*0;

  	this.rLegSprite.anchor.x = 0.8
  	this.rLegSprite.anchor.y = 0.2
  	this.rLegSprite.rotation = PI/8*0;

  	this.lArmRotation = PI/180;

    this.talkSprite.play();
  },
  update: function(){
  	this.lArmSprite.x = this.bodySprite.x - this.bodySprite.width*0.3;
  	this.lArmSprite.y = this.bodySprite.y - this.bodySprite.height*0.35;
  	this.rArmSprite.x = this.bodySprite.x + this.bodySprite.width*0.3;
  	this.rArmSprite.y = this.bodySprite.y - this.bodySprite.height*0.35;

  	this.lLegSprite.x = this.bodySprite.x - this.bodySprite.width*0.2;
  	this.lLegSprite.y = this.bodySprite.y + this.bodySprite.height*0.4;

  	this.rLegSprite.x = this.bodySprite.x + this.bodySprite.width*0.2;
  	this.rLegSprite.y = this.bodySprite.y + this.bodySprite.height*0.4;

  	this.headSprite.x = this.bodySprite.x;
  	this.headSprite.y = this.bodySprite.y - this.bodySprite.height;

    this.eyeSprite.x = this.headSprite.x;
    this.eyeSprite.y = this.headSprite.y - this.headSprite.height*0.06;

    this.eyebrowSprite.x = this.headSprite.x;
    this.eyebrowSprite.y = this.headSprite.y - this.headSprite.height*0.2;

    this.talkSprite.x = this.headSprite.x;
    this.talkSprite.y = this.headSprite.y + this.headSprite.height*0.4;

    this.mouthSprite.x = this.headSprite.x;
    this.mouthSprite.y = this.headSprite.y + this.headSprite.height*0.4;

  	this.lArmSprite.rotation += this.lArmRotation;
  	if(this.lArmSprite.rotation > PI/4) this.lArmRotation = -this.lArmRotation;
  	if(this.lArmSprite.rotation < -PI/4) this.lArmRotation = -this.lArmRotation;
  },
  smile: function(){
    this.talkSprite.stop();
    this.container.removeChild(this.talkSprite);
    this.container.addChild(this.mouthSprite);
  }
}