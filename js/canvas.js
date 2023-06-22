const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let amplitud = 10;
let speed = 0.01;
let points = [];

let cw = (canvas.width = 1000),
  cx = cw / 2;
let ch = (canvas.height = 1000),
  cy = ch / 2;
ctx.fillStyle = "#a789a8a2";
ctx.strokeStyle = "transparent";


let corners = [];
let n = 15;
let r = cx - amplitud;
for (var i = 0; i < n; i++) {
  corners.push([
    cx + r * Math.cos((2 * Math.PI * i) / n),
    cy + r * Math.sin((2 * Math.PI * i) / n),
  ]);
}

class Point {
  constructor(x, y, hv) {
    this.cx = x;
    this.cy = y;
    this.a = Math.random() * 2 * Math.PI;
    this.hv = hv;

    this.update();
  }

  update() {
    this.a += speed;

    if (this.hv == 0) {
      this.x = this.cx;
      this.y = this.cy + amplitud * Math.cos(this.a);
    } else {
      this.x = this.cx + amplitud * Math.cos(this.a);
      this.y = this.cy;
    }
  }
}

function divide(n, a, b) {
  for (var i = 0; i <= n; i++) {
    let p = {
      x: ((b[0] - a[0]) * i) / n + a[0],
      y: ((b[1] - a[1]) * i) / n + a[1],
      hv: b[1] - a[1],
    };
    points.push(new Point(p.x, p.y, p.hv));
  }
}

for (let i = 0; i < corners.length; i++) {
  let currentCorner = corners[i];
  let nextCorner = corners[(i + 1) % corners.length];
  divide(10, currentCorner, nextCorner);
  points.pop();
}

function drawCurves() {
  let p = {};
  p.x = (points[points.length - 1].x + points[0].x) / 2;
  p.y = (points[points.length - 1].y + points[0].y) / 2;
  ctx.beginPath();
  ctx.moveTo(p.x, p.y);
  for (var i = 0; i < points.length - 1; i++) {
    let mp = {};
    mp.x = (points[i].x + points[i + 1].x) / 2;
    mp.y = (points[i].y + points[i + 1].y) / 2;
    ctx.quadraticCurveTo(points[i].x, points[i].y, mp.x, mp.y);
  }

  ctx.quadraticCurveTo(
    points[points.length - 1].x,
    points[points.length - 1].y,
    p.x,
    p.y
  );
  ctx.stroke();
  ctx.fill();
}

function Draw() {
  window.requestAnimationFrame(Draw);
  ctx.clearRect(0, 0, cw, ch);
  points.map((p) => {
    p.update();
  });
  drawCurves();
}

Draw();
