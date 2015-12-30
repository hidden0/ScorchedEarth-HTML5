// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

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