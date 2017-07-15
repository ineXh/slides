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
    this.robot = new PIXI.Container();
  	this.bodySprite = Helper.buttonCreate(Assets.characterTextures.robot.bodyTexture,
                     0, 0, width/6);
    this.scale = this.bodySprite.scale.x;
  	this.bodySprite.scale.set(this.scale);

  	this.lArmSprite = Helper.buttonCreate(Assets.characterTextures.robot.armTexture,
                     0, 0, width);
  	this.lArmSprite.scale.set(this.scale);
    this.lArmSprite.x = -this.bodySprite.width*0.40
    this.lArmSprite.y = -this.bodySprite.height*0.2
  	this.rArmSprite = Helper.buttonCreate(Assets.characterTextures.robot.armTexture,
                     0, 0, width);
  	this.rArmSprite.scale.set(this.scale);
  	this.rArmSprite.scale.x = -this.rArmSprite.scale.x;
    this.rArmSprite.x = -this.lArmSprite.x
    this.rArmSprite.y = this.lArmSprite.y;

    this.shadowSprite = Helper.buttonCreate(Assets.characterTextures.robot.shadowTexture,
                     0, 0, width);
    this.shadowSprite.scale.set(this.scale);
    this.shadowSprite.y = this.bodySprite.height*0.475

    this.head = new PIXI.Container();
    this.headSprite = Helper.buttonCreate(Assets.characterTextures.robot.headTexture,
                     0, 0, width);
    this.headSprite.scale.set(this.scale);
    this.eyeSprite = Helper.buttonCreate(Assets.characterTextures.robot.eye1Texture,
                     0, 0, width);
    this.eyeSprite.scale.set(this.scale);

    this.headBotSprite = Helper.buttonCreate(Assets.characterTextures.robot.headBotTexture,
                     0, 0, width);
    this.headBotSprite.scale.set(this.scale);

    this.headBotSprite.anchor.x = 0;
    this.headBotSprite.anchor.y = 0;
    this.headBotSprite.x = -this.headSprite.width/2;
    this.headBotSprite.y = -this.bodySprite.height*0.8;//this.headSprite.height/2 - this.headBotSprite.height;

    

    this.headTopSprite = Helper.buttonCreate(Assets.characterTextures.robot.headTopTexture,
                     0, 0, width);
    this.headTopSprite.scale.set(this.scale);
    this.headTopSprite.anchor.x = 0.0;
    this.headTopSprite.anchor.y = 1;
    this.headTopSprite.x = 0;//-this.headSprite.width/2;
    this.eyeSprite.x = this.headSprite.width/2;
    this.eyeSprite.y = this.headTopSprite.y - this.headTopSprite.height*0.45
    this.head.x = -this.headSprite.width/2
    this.head.y = this.headBotSprite.y + this.headBotSprite.height*0.25
    this.head.pivot.x = 0;//-this.headSprite.width;
    this.head.pivot.y = 0;

    //debugger;
    //this.head.addChild(this.headSprite)
    this.head.addChild(this.headTopSprite)

    this.head.addChild(this.eyeSprite)
    this.robot.addChild(this.headBotSprite)
    this.robot.addChild(this.shadowSprite)
    this.robot.addChild(this.bodySprite)
    this.robot.addChild(this.lArmSprite)
    this.robot.addChild(this.rArmSprite)
    this.robot.addChild(this.head)

  },
  init: function(container, x, y){
    this.container = container;

  	container.addChild(this.robot);

  	//debugger;
  	this.robot.x = x;
  	this.robot.y = y;

    this.queue = [];
    robot = this;
    this.queue.push({Duration: 3000, cb: function(){}})
    this.queue.push({Duration: 3000, cb: function(){robot.isOpening = true;}})
    this.queue.push({Duration: 3000, cb: function(){robot.isClosing = true;}})
    this.queue.push({Duration: 3000, cb: function(){
      robot.isMunching = true;
    }})
    this.queue.push({Duration: 3000, cb: function(){
      robot.isChomping = true;
    }})

    this.queue.push({Duration: 2000, cb: function(){
      robot.isFlashing = true;
    }})
    this.queue.push({Duration: 10, cb: function(){
      robot.isFlashing = false;
      robot.eyeSprite.texture = Assets.characterTextures.robot.eye1Texture
    }})
    // idle
    this.queue.push({Duration: 3000, cb: function(){}})
    // Munch Flash
    this.queue.push({Duration: 1000, cb: function(){
      robot.isMunching = true;
    }})
    this.queue.push({Duration: 2000, cb: function(){
      robot.isFlashing = true;
    }})
    this.queue.push({Duration: 10, cb: function(){
      robot.isFlashing = false;
      robot.eyeSprite.texture = Assets.characterTextures.robot.eye1Texture
    }})
    // Munch Chomp Flash
    this.queue.push({Duration: 100, cb: function(){
      robot.isMunching = true;
    }})
    this.queue.push({Duration: 500, cb: function(){
      robot.isChomping = true;
    }})
    this.queue.push({Duration: 3000, cb: function(){
      robot.isFlashing = true;
    }})
    this.queue.push({Duration: 10, cb: function(){
      robot.isFlashing = false;
      robot.eyeSprite.texture = Assets.characterTextures.robot.eye1Texture
    }})

    this.time = 0;
    this.isOpening = false
    this.isClosing = false
    this.isMunching = false
    this.munchCount = 0;
    this.isChomping = false
    this.chompCount = 0;
    this.isFlashing = false;
    this.flashCount = 0;
  },
  runQueue: function(){
    if(!loaded) return;
    this.time += time.dt;
    if(!this.queue.length) return;
    //console.log(this.time)
    if(this.time >= this.queue[0].Duration){
      this.queue.splice(0,1);
      if(this.queue.length) this.queue[0].cb();
      this.time = 0;
    }
  },
  update: function(){
    this.runQueue();
    this.eyeFlash();
    this.headOpen();
    this.headClose();
    this.headMunch();
    this.headChomp();
    //this.headTopSprite.x = this.headTopPos.x
    //this.headTopSprite.y = this.headTopPos.y

  },
  headChomp: function(){
    if(!this.isChomping) return;
    
    if(this.chompCount%2 == 0){
      this.head.rotation -= 0.05;
      if(this.head.rotation <= -0.75)
        this.chompCount++;
    }else if(this.chompCount%2 == 1){
      this.head.rotation += 0.05;
      if(this.head.rotation >= 0){        
        this.head.rotation = 0;
        this.chompCount++;
      }
    }
    if(this.chompCount >= 6){
      this.isChomping = false
      this.chompCount = 0;
    }
  }, // end headChomp
  headMunch: function(){
    if(!this.isMunching) return;
    if(this.munchCount%2 == 0){
      this.head.y -= this.headBotSprite.height/20
      if(this.headBotSprite.y - this.head.y >= this.headBotSprite.height/2)
        this.munchCount++;
    }else if(this.munchCount%2 == 1){
      this.head.y += this.headBotSprite.height/20
      if(this.head.y - this.headBotSprite.y >= this.headBotSprite.height*0.25)
        this.munchCount++;
    }
    if(this.munchCount >= 6){
      this.isMunching = false
      this.munchCount = 0;
    }
  }, // end headMunch
  headOpen: function(){
    if(!this.isOpening) return;
    //this.head.y = this.headBotSprite.y + this.headBotSprite.height*0.25
    this.head.y -= this.headBotSprite.height/20
    if(this.headBotSprite.y - this.head.y >= this.headBotSprite.height/2)
     this.isOpening = false
  },
  headClose: function(){
    if(!this.isClosing) return;
    //this.headTopSprite.y = this.headBotSprite.y + this.headBotSprite.height*0.25
    this.head.y += this.headBotSprite.height/20
    if(this.head.y - this.headBotSprite.y >= this.headBotSprite.height*0.25)
     this.isClosing = false
  },
  eyeFlash: function(){
    if(!this.isFlashing) return;
    this.flashCount++;
    //console.log(this.flashCount)
    if(this.flashCount%6 == 0){
      if(this.eyeSprite.texture == Assets.characterTextures.robot.eye1Texture)
        this.eyeSprite.texture = Assets.characterTextures.robot.eye2Texture
      else if(this.eyeSprite.texture == Assets.characterTextures.robot.eye2Texture)
        this.eyeSprite.texture = Assets.characterTextures.robot.eye1Texture
    }
  }, // end eyeFlash

} // end Robot