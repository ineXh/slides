var constants = require('./Constants.js');
var PIXI = require('pixi.js');

var Assets = function(){};
Assets.textures = {};

var loadAssets = function(cb){
	PIXI.loader
	.add('bunny', "assets/misc/bunny.png")
	.add('school', "assets/background/school.png")
	// Characters
	.add('cowBody', "assets/cow/body.png")
	.add('cowEyebrow', "assets/cow/eyebrow.png")
	.add('cowEyes', "assets/cow/eyes.png")
	.add('cowHead', "assets/cow/head.png")
	.add('cowLeft', "assets/cow/left.png")
	.add('cowLeftLeg', "assets/cow/leftleg.png")
	.add('cowRightLeg', "assets/cow/rightleg.png")
	// Mouth
	.add('mouth1', "assets/mouth/1.png")
	.add('mouth2', "assets/mouth/2.png")
	.add('mouth3', "assets/mouth/3.png")
	.add('mouth4', "assets/mouth/4.png")
	.add('mouth5', "assets/mouth/5.png")
	.add('mouth10', "assets/mouth/10.png")
	.add('mouth11', "assets/mouth/11.png")
	.add('mouth12', "assets/mouth/12.png")
	.add('mouth13', "assets/mouth/13.png")
	.add('mouth14', "assets/mouth/14.png")
	.load(cb.bind(this));

} // end loadAssets

var loadTextures = function(){
	Assets.textures = {};
	Assets.textures.bunnyTexture  = PIXI.Texture.fromFrame("bunny");
	Assets.textures.schoolTexture = PIXI.Texture.fromFrame("school");
	loadCharacterTextures();
}
var loadCharacterTextures = function(){
	Assets.characterTextures = {};
	Assets.characterTextures.cowBodyTexture 	= PIXI.Texture.fromFrame("cowBody");
	Assets.characterTextures.cowEyebrowTexture 	= PIXI.Texture.fromFrame("cowEyebrow");
	Assets.characterTextures.cowEyesTexture 	= PIXI.Texture.fromFrame("cowEyes");
	Assets.characterTextures.cowHeadTexture 	= PIXI.Texture.fromFrame("cowHead");
	Assets.characterTextures.cowLeftTexture 	= PIXI.Texture.fromFrame("cowLeft");
	Assets.characterTextures.cowLeftLegTexture 	= PIXI.Texture.fromFrame("cowLeftLeg");
	Assets.characterTextures.cowRightLegTexture = PIXI.Texture.fromFrame("cowRightLeg");
	loadMouthTextures();
}
var loadMouthTextures = function(){
	Assets.mouthTextures = {};
	Assets.mouthTextures.mouth1Texture 	= PIXI.Texture.fromFrame("mouth1");
	Assets.mouthTextures.mouth2Texture 	= PIXI.Texture.fromFrame("mouth2");
	Assets.mouthTextures.mouth3Texture 	= PIXI.Texture.fromFrame("mouth3");
	Assets.mouthTextures.mouth4Texture 	= PIXI.Texture.fromFrame("mouth4");
	Assets.mouthTextures.mouth5Texture 	= PIXI.Texture.fromFrame("mouth5");

	Assets.mouthTextures.cowTalkTexture = [];
	//Assets.mouthTextures.cowTalkTexture.push(PIXI.Texture.fromFrame('mouth1'));
	//Assets.mouthTextures.cowTalkTexture.push(PIXI.Texture.fromFrame('mouth10'));
	//Assets.mouthTextures.cowTalkTexture.push(PIXI.Texture.fromFrame('mouth14'));
    for(var i = 10; i <= 14; i++){
        Assets.mouthTextures.cowTalkTexture.push(PIXI.Texture.fromFrame('mouth' + i));
    }
    for(var i = 13; i >= 11; i--){
        Assets.mouthTextures.cowTalkTexture.push(PIXI.Texture.fromFrame('mouth' + i));
    }
} // end loadMouthTextures


Assets.loadAssets = loadAssets;
Assets.loadTextures = loadTextures;

module.exports = exports = Assets;