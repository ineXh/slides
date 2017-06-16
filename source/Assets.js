var constants = require('./Constants.js');
var PIXI = require('pixi.js');

var Assets = function(){};
Assets.textures = {};

var loadAssets = function(cb){
	PIXI.loader
	.add('bunny', "assets/misc/bunny.png")
	.add('school', "assets/background/school.png")
	.load(cb.bind(this));

} // end loadAssets

var loadTextures = function(){
	Assets.textures = {};
	Assets.textures.bunnyTexture = PIXI.Texture.fromFrame("bunny");
	Assets.textures.schoolTexture = PIXI.Texture.fromFrame("school");
}

Assets.loadAssets = loadAssets;
Assets.loadTextures = loadTextures;

module.exports = exports = Assets;