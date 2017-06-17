var PIXI = require('pixi.js');
var Assets = require('./Assets.js');
var Ball = require('./Ball.js');
var Character = require('./Character/Character.js');
var Helper = require('./Helper.js');
var Slip = require('./Interface/Slip.js');
var Utils = require('./Utils.js');
var constants = require('./Constants.js');
var UpdateQueue = require('./UpdateQueue.js');
require("./styles.css");
// /////////////
// Script-loader
// /////////////
import Global from 'script-loader!./Global.js';
//import Utils from 'script-loader!./Utils.js';
import CreateJS from 'script-loader!./Lib/createjs-2015.11.26.min.js';
import pvector from 'script-loader!./Lib/pvector.js';

(function(){
    window.scrollTo(0,1);
    document.body.style.overflow = 'hidden';

    //width = screen.availWidth;//(window.innerWidth < screen.availWidth) ? window.innerWidth : screen.availWidth;
    //height = screen.availHeight;//(window.innerHeight < screen.availHeight) ? window.innerHeight : screen.availHeight;
    width = window.innerWidth;
    height = window.innerHeight;

    dim = (width < height) ? width : height;

    if(width > height/360*640) width = Math.floor(height/360*640);
    height = Math.floor(width/640*360);

    //width = 640;
	//height = 360;
	// 1920 x 1080
	stageWidth = width;
	stageHeight = height;
	var app = new PIXI.Application(width, height,
	    {backgroundColor : 0x82cd3c,
	    transparent : false, antialias: true
	});
	worldRenderer = app.renderer;
	document.body.appendChild(app.view);

	var initialize = function(load, res){
        loader = load;
        resources = res;
        Assets.loadTextures();

		updateQueue = new UpdateQueue();

		var bg = Helper.buttonCreate(Assets.textures.schoolTexture, //Assets.textures.rectTexture,
                     width/2, height/2, width);

		/*new PIXI.Sprite(Assets.textures.schoolTexture);
		bg.anchor.x = 0.5;
		bg.anchor.y = 0.5;
		bg.x = width/2;
		bg.y = height/2;*/
		//bg.scale.set( width / bg.width);
		stage0 = new PIXI.Container();
		stage = new PIXI.Container();
		stage0.addChild(bg);
		stage0.addChild(stage);

		createjs.MotionGuidePlugin.install();


		//var ball = new Ball(0, 0, width/20, true, Assets.textures.bunnyTexture);
		//updateQueue.add(ball);
		//var ball = new Ball(0, 0, width/20, true, Assets.textures.bunnyTexture);
		//updateQueue.add(ball);

		var character = new Character();
		character.init(stage, width/4, height*0.78);
		updateQueue.add(character);

		var slip = new Slip();
		slip.init(stage, -slip.sprite.width, 0, 0xAF4756);

		var slip2 = new Slip();
		slip2.init(stage, -slip.sprite.width, 0, 0x507BC4);

		var cb = slip2.slide.bind(slip2, width + slip.sprite.width/2, height*0.2,
						width - slip.sprite.width*0.4, height*0.2, 4000);

		slip.slide(-slip.sprite.width/2, height*0.2,
						slip.sprite.width*0.4, height*0.2, 4000, cb);

		//slip2.slide(width + slip.sprite.width/2, height*0.2,
		//				width - slip.sprite.width*0.4, height*0.2, 3000);
		//talk = "You know the area of a rectangle if the length of the width of the rectangle times the height of the rectangle.";
		var talk = "Click on the microphone and then speak as long as you want"
		message = new SpeechSynthesisUtterance(talk);
		message["rate"] = 1;
		message["volume"] = 3;
		message["pitch"] = 3;
		speechSynthesis.speak(message);
		//debugger;
		//http://jsfiddle.net/aybalasubramanian/y8c38b3k/
		// SpeechSynthesisUtterance not tab audio, cannot capture
		// try http://www.masswerk.at/mespeak/
		var interval = setInterval(function () {
		    voices = speechSynthesis.getVoices();
		    if (voices.length) clearInterval(interval); else return;
		    for (var i = 0; i < voices.length; i++) {
		        //console.log(voices[i].name);
		    }
		    if( i == 20){
		    	message.voice = voices[0];
				//console.log(message.voice.name)
				
				message.onend = function(){
					character.smile();
				}
		    }
		}, 10);



        animate();
    } // end initialize

    Assets.loadAssets(initialize);

    var update = function(){
        var now = Date.now(),
         dt  = (now - lastTime),
         t   = (now - startTime);
         //if(gameState == constants.GameState.PauseGame) dt = 0;
        time.t += dt;
        time.dt = dt;
        time.count++;
        lastTime = now;

        if(updateQueue) updateQueue.update();
    } // end update

    function animate() {
        update();
        worldRenderer.render(stage0);
        requestAnimationFrame(animate);
    } // end animate

})(); // end main