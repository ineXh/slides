var width = 0;
var height = 0;
var dim = 0;
var stageWidth = 0;
var stageHeight = 0;
var time = {t:0, dt: 0, count: 0};
var lastTime = startTime = 0;

var worldRenderer = null;
var loader = null;
var loaded = false;
var resources = null;
var stage0 = null;
var stage = null;

// Modules
var updateQueue = null;

// Objects
//var balls = [];
var message = null;
var voices = null;
