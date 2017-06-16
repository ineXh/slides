var PIXI = require('pixi.js');
var Assets = require('./Assets.js');
var Ball = require('./Ball.js');
var Utils = require('./Utils.js');
var constants = require('./Constants.js');
var UpdateQueue = require('./UpdateQueue.js');
//require("./styles.css");
// /////////////
// Script-loader
// /////////////
import Global from 'script-loader!./Global.js';
//import Utils from 'script-loader!./Utils.js';
import CreateJS from 'script-loader!./Lib/createjs-2015.11.26.min.js';
import pvector from 'script-loader!./Lib/pvector.js';

(function(){
    window.scrollTo(0,1);
    width = 640;
	height = 360;
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

		var button = new PIXI.Sprite(Assets.textures.schoolTexture);
		button.anchor.x = 0.5;
		button.anchor.y = 0.5;
		button.position.x = width/2;
		button.position.y = height/2;
		//button.scale.set( width / button.width);
		stage0 = new PIXI.Container();
		stage = new PIXI.Container();
		stage0.addChild(button);
		stage0.addChild(stage);
		

		//var ball = new Ball(0, 0, width/20, true, Assets.textures.bunnyTexture);
		//updateQueue.add(ball);
		//var ball = new Ball(0, 0, width/20, true, Assets.textures.bunnyTexture);
		//updateQueue.add(ball);

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