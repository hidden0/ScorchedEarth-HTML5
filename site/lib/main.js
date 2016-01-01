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

Scorch.Init();
