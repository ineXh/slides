var Assets = require('./Assets.js');

var Helper = function(){};
module.exports = exports = Helper;

Helper.debugDraw = function(container){
    window.debugSprite = new PIXI.Sprite(Assets.textures.circleTexture);
    debugSprite.anchor.x = 0.5;
    debugSprite.anchor.y = 0.5;
    debugSprite.scale.set(20 / debugSprite.width);
    debugSprite.tint = 0xFF0000;
    container.addChild(debugSprite);

    window.debugSprite2 = new PIXI.Sprite(Assets.textures.circleTexture);
    debugSprite2.anchor.x = 0.5;
    debugSprite2.anchor.y = 0.5;
    debugSprite2.scale.set(20 / debugSprite2.width);
    debugSprite2.tint = 0x00FF00;
    container.addChild(debugSprite2);

    window.debugSprite3 = new PIXI.Sprite(Assets.textures.circleTexture);
    debugSprite3.anchor.x = 0.5;
    debugSprite3.anchor.y = 0.5;
    debugSprite3.scale.set(20 / debugSprite3.width);
    debugSprite3.tint = 0x0000FF;
    container.addChild(debugSprite3);
}

Helper.buttonCreate = function(texture, x, y, width){
    var button = new PIXI.Sprite(texture);
    button.anchor.x = 0.5;
    button.anchor.y = 0.5;
    button.position.x = x;
    button.position.y = y;
    //console.log(button.width)
    button.scale.set( width / button.width);
    return button;
}

Helper.spriteListener = function(sprite, touchdown, touchmove, touchup, touchupoutside, releaseoutside){
    //console.log('sprite_listener')
    sprite.interactive = true;
    if(touchdown != null || touchdown != undefined) {
            sprite.on('mousedown'        , touchdown.bind(this))
    }
    if(touchdown != null || touchdown != undefined)     sprite.on('touchstart'       , touchdown.bind(this))
    if(touchmove != null || touchmove != undefined) sprite.on('mousemove'        , touchmove.bind(this))
    if(touchmove != null || touchmove != undefined) sprite.on('touchmove'        , touchmove.bind(this))
    if(touchup != null || touchup != undefined)     sprite.on('mouseup'          , touchup.bind(this))
    if(touchup != null || touchup != undefined)     sprite.on('touchend'         , touchup.bind(this))
    if(touchupoutside != null || touchupoutside != undefined) sprite.on('mouseupoutside'   , touchup.bind(this))
    if(touchupoutside != null || touchupoutside != undefined) sprite.on('touchendoutside'  , touchup.bind(this))
} // end spriteListener

Helper.spriteListenerRemove = function(sprite){
    sprite.interactive = false;
    if(sprite._events == undefined) return;
    if(sprite._events.mousedown){
      sprite._events.mousedown.length = 0;
      sprite._events.mousedown = null;
    }
    if(sprite._events.touchstart){
        sprite._events.touchstart.length = 0;
        sprite._events.touchstart = null;
    }
    if(sprite._events.mousemove){
        sprite._events.mousemove.length = 0;
        sprite._events.mousemove = null;
    }
    if(sprite._events.touchmove){
        sprite._events.touchmove.length = 0;
        sprite._events.touchmove = null;
    }
    if(sprite._events.mouseup){
        sprite._events.mouseup.length = 0;
        sprite._events.mouseup = null;
    }
    if(sprite._events.touchend){
        sprite._events.touchend.length = 0;
        sprite._events.touchend = null;
    }
    if(sprite._events.mouseupoutside){
        sprite._events.mouseupoutside.length = 0;
        sprite._events.mouseupoutside = null;
    }
    if(sprite._events.touchendoutside){
        sprite._events.touchendoutside.length = 0;
        sprite._events.touchendoutside = null;
    }
} // end spriteListenerRemove