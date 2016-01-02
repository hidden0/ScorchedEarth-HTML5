// Create the canvas
var canvas = document.createElement("canvas");

// Global vars
var windowWidth = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var windowHeight = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

canvas.width = windowWidth;
canvas.height = windowHeight;
document.body.appendChild(canvas);

var Scorch = { }; // game obj
Scorch.Ui = { }; // Ui obj
var FPS=30; // framerate

// Update
Scorch.Update = function () {
	windowWidth = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	windowHeight = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;
};
// Render
Scorch.Render = function () {
	Scorch.ctx.fillStyle = "#000000";
	Scorch.ctx.fillRect(0, 0, windowWidth, windowHeight);
	Scorch.Ui.button();
};
// Game Loop
Scorch.Game = function () {

};
// Init
Scorch.Init = function () {
	Scorch.ctx = canvas.getContext("2d");
	setInterval(function() {
      Scorch.Update();
      Scorch.Render();
    }, 1000/FPS);
};

// Button Object
Scorch.Ui.button = function () {
	var btnHeight=20;
	var btnWidth=120;
	var xpos=450;
	var ypos=20;
	var pad=5;
	var outerBtnHeight=btnHeight+(pad*2);
	var outerBtnWidth=btnWidth+(pad*2);
	var outsideXpos = xpos-pad;
	var outsideYpos = ypos-pad;
	
	// Build out the background with 4 trapezoids
	Scorch.ctx.beginPath();
	Scorch.ctx.moveTo(outsideXpos,outsideYpos); //top left
	Scorch.ctx.lineTo((outsideXpos+outerBtnWidth),outsideYpos); //line to top right
	Scorch.ctx.lineTo((outsideXpos+outerBtnWidth-pad-1),(outsideYpos+pad+1)); //line to top right indent
	Scorch.ctx.lineTo((outsideXpos+pad+1),(outsideYpos+pad+1)); //top left indent
	Scorch.ctx.fillStyle = "#ead6e1";
	Scorch.ctx.fill(); // fill it
	
	Scorch.ctx.beginPath();
	Scorch.ctx.moveTo(outsideXpos,outsideYpos); //top left
	Scorch.ctx.lineTo(outsideXpos,(outsideYpos+outerBtnHeight)); // bottom left
	Scorch.ctx.lineTo((outsideXpos+pad+1),(outsideYpos+outerBtnHeight-pad-1)); //line to bot left indent
	Scorch.ctx.lineTo((outsideXpos+pad+1),(outsideYpos+pad+1)); //top left indent
	Scorch.ctx.fillStyle = "#f5fff7";
	Scorch.ctx.fill(); // fill it
	
	Scorch.ctx.beginPath();
	Scorch.ctx.moveTo((outsideXpos+outerBtnWidth),outsideYpos); //top right
	Scorch.ctx.lineTo((outsideXpos+outerBtnWidth),(outsideYpos+outerBtnHeight)); // bottom right
	Scorch.ctx.lineTo((outsideXpos+outerBtnWidth-pad-1),(outsideYpos+outerBtnHeight-pad-1)); //line to bot right indent
	Scorch.ctx.lineTo((outsideXpos+outerBtnWidth-pad-1),(outsideYpos+pad+1)); //top left indent
	Scorch.ctx.fillStyle = "#141414";
	Scorch.ctx.fill(); // fill it

	Scorch.ctx.beginPath();
	Scorch.ctx.moveTo(outsideXpos,(outsideYpos+outerBtnHeight)); // bottom left
	Scorch.ctx.lineTo((outsideXpos+outerBtnWidth),(outsideYpos+outerBtnHeight)); // bottom right
	Scorch.ctx.lineTo((outsideXpos+outerBtnWidth-pad-1),(outsideYpos+outerBtnHeight-pad-1)); //line to bot right indent
	Scorch.ctx.lineTo((outsideXpos+pad+1),(outsideYpos+outerBtnHeight-pad-1)); //line to bot left indent
	Scorch.ctx.fillStyle = "#3c3c3c";
	Scorch.ctx.fill(); // fill it
	
	Scorch.ctx.fillStyle = "#b4b4b4";
	Scorch.ctx.fillRect(xpos, ypos, btnWidth, btnHeight);
	
	Scorch.ctx.font="18px Courier";
	Scorch.ctx.fillStyle = "#000000";
	Scorch.ctx.fillText("Sound: On",xpos+5,ypos+16);
};
Scorch.Init();
