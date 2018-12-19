'use strict'

var GRAVITY = 0.6,
    TWO_PI = Math.PI * 2;

class Ball {
  constructor(x, y, radius, title, color) {
    this.x = x;
    this.y = y;

    this.px = x;
    this.py = y;

    this.fx = 0;
    this.fy = 0;

    this.radius = radius;
    this.title = title || '꿈';
    this.color = color || '#fff';
  }

  applyForce(delta) {
    delta *= delta;

    this.fy += GRAVITY;

    this.x += this.fx * delta;
    this.y += this.fy * delta;

    this.fx = this.fy = 0;
  }

  verlet() {
    // 새로운 좌표
    var nx = (this.x * 2) - this.px;
    var ny = (this.y * 2) - this.py;

    // 이전 좌표 저장
    this.px = this.x;
    this.py = this.y;

    // 좌표 갱신
    this.x = nx;
    this.y = ny;
  }

  textWrap(ctx, text, x, y, maxWidth, lineHeight = 20) {
    var words = text.split(' ');
    var line = '';
    var lines = [];

    for(var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = ctx.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        line = words[n] + ' ';
        lines.push(line);
      }
      else {
        line = testLine;
        lines.push(line);
      }
    }

    for (var i = 0; i < lines.length; i++) {
      let py = y - ((lines.length - 1) * (lineHeight / 2)) + (lineHeight * i);
      ctx.fillText(lines[i], x, py);
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, TWO_PI);
    ctx.fill();
    ctx.font = `bold ${this.radius * 0.4}px NotoSans`;
    ctx.fillStyle = this.color === '#FBBC05' ? 'black' : 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    // ctx.fillText(this.title, this.x, this.y);
    this.textWrap(ctx, this.title, this.x, this.y, this.radius);
  }
}

export default Ball;
