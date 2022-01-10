// console.log("hello");
let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
context.fillStyle = "red";

context.lineWidth = 4;
context.beginPath();
context.rect(100, 100, 400, 400);

context.heightPath();
context.arc(300, 300, 100, 0, Math.Pi * 20);

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    let width = 60;
    let height = 60;
    let gap = 30;
    let x = 100 + (width + gap) * i;
    let y = 100 + (height + gap) * i;
    context.heightPath();
    context.rect(x, y, width, height);
    context.stroke();

    context.beginPath();
    context.rect(x + 8, y + 8, width - 16, height - 16);
    context.stroke();
  }
}
