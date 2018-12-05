'use strict'

var GRAVITY = 0.6,
    TWO_PI = Math.PI * 2;

class Ball {
  constructor(x, y, radius, title) {
    this.x = x;
    this.y = y;

    this.px = x;
    this.py = y;

    this.fx = 0;
    this.fy = 0;

    this.radius = radius;
    this.title = title;
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

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = '#de5458';
    ctx.arc(this.x, this.y, this.radius, 0, TWO_PI);
    ctx.fill();
    ctx.font = '10px Comic Sans MS';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText(this.title, this.x, this.y);
  }
}

export default Ball;
