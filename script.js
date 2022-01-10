// console.log("hello");
let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
context.fillStyle = "red";

context.lineWidth = 4;
context.beginPath();
context.rect(100, 100, 400, 400);

context.heightPath();
context.arc(300, 300, 100, 0, Math.Pi * 20);
