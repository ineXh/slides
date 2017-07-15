var constants = require('./Constants.js');
var PIXI = require('pixi.js');

var Assets = function(){};
Assets.textures = {};

var loadAssets = function(cb){
	PIXI.loader
	.add('bunny', "assets/misc/bunny.png")
	.add('class', "assets/background/class.png")
	.add('desk', "assets/background/desk.png")
	.add('deskShadow', "assets/background/desk_shadow.png")
	.add('school', "assets/background/school.png")
	// Characters
	.add('cowBody', "assets/cow/body.png")
	.add('cowEyebrow', "assets/cow/eyebrow.png")
	.add('cowEyes', "assets/cow/eyes.png")
	.add('cowHead', "assets/cow/head.png")
	.add('cowLeft', "assets/cow/left.png")
	.add('cowLeftLeg', "assets/cow/leftleg.png")
	.add('cowRightLeg', "assets/cow/rightleg.png")

	.add('womanBody', "assets/woman/body.png")
	.add('womanLeft', "assets/woman/left.png")
	.add('womanHairBack', "assets/woman/hair_back.png")
	// Robot
	.add('robotBody', "assets/robot/body.png")
	.add('robotArm', "assets/robot/arm.png")
	.add('robotHead', "assets/robot/head.png")
	.add('robotHeadTop', "assets/robot/head_top.png")
	.add('robotHeadBot', "assets/robot/head_bot.png")
	.add('robotEye1', "assets/robot/eye1.png")
	.add('robotEye2', "assets/robot/eye2.png")
	.add('robotShadow', "assets/robot/shadow.png")
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

	.add('womanMouth1', "assets/woman/mouth/1.png")
	.add('womanMouth10', "assets/woman/mouth/10.png")
	.add('womanMouth11', "assets/woman/mouth/11.png")
	.add('womanMouth12', "assets/woman/mouth/12.png")
	.add('womanMouth13', "assets/woman/mouth/13.png")
	.add('womanMouth14', "assets/woman/mouth/14.png")
	.add('womanMouth15', "assets/woman/mouth/15.png")
	.add('womanMouth16', "assets/woman/mouth/16.png")
	.add('womanMouth17', "assets/woman/mouth/17.png")
	.add('womanMouth18', "assets/woman/mouth/18.png")
	.load(cb.bind(this));

} // end loadAssets

var loadTextures = function(){
	Assets.textures = {};
	Assets.textures.bunnyTexture  = PIXI.Texture.fromFrame("bunny");
	Assets.textures.classTexture = PIXI.Texture.fromFrame("class");
	Assets.textures.deskTexture = PIXI.Texture.fromFrame("desk");
	Assets.textures.deskShadowTexture = PIXI.Texture.fromFrame("deskShadow");
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

	Assets.characterTextures.womanBodyTexture 	= PIXI.Texture.fromFrame("womanBody");
	Assets.characterTextures.womanLeftTexture 	= PIXI.Texture.fromFrame("womanLeft");
	Assets.characterTextures.womanHairBackTexture 	= PIXI.Texture.fromFrame("womanHairBack");

	Assets.characterTextures.robot = {};
	Assets.characterTextures.robot.bodyTexture 	= PIXI.Texture.fromFrame("robotBody");
	Assets.characterTextures.robot.armTexture 	= PIXI.Texture.fromFrame("robotArm");
	Assets.characterTextures.robot.headTexture 	= PIXI.Texture.fromFrame("robotHead");
	Assets.characterTextures.robot.headTopTexture 	= PIXI.Texture.fromFrame("robotHeadTop");
	Assets.characterTextures.robot.headBotTexture 	= PIXI.Texture.fromFrame("robotHeadBot");
	Assets.characterTextures.robot.eye1Texture 	= PIXI.Texture.fromFrame("robotEye1");
	Assets.characterTextures.robot.eye2Texture 	= PIXI.Texture.fromFrame("robotEye2");
	Assets.characterTextures.robot.shadowTexture 	= PIXI.Texture.fromFrame("robotShadow");

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


    Assets.mouthTextures.womanMouth1Texture 	= PIXI.Texture.fromFrame("womanMouth1");
    Assets.mouthTextures.womanTalkTexture = [];
    for(var i = 10; i <= 18; i++){
        Assets.mouthTextures.womanTalkTexture.push(PIXI.Texture.fromFrame('womanMouth' + i));
    }
    for(var i = 17; i >= 11; i--){
        Assets.mouthTextures.womanTalkTexture.push(PIXI.Texture.fromFrame('womanMouth' + i));
    }

} // end loadMouthTextures


Assets.loadAssets = loadAssets;
Assets.loadTextures = loadTextures;

module.exports = exports = Assets;