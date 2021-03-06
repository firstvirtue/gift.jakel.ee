'use strict'

import Ball from '~/assets/js/ball.js';
import util from '~/assets/js/util.js';

var NUM_BALLS = 16,
    DAMPING = 0.7,
    MOUSE_SIZE = 50,
    SPEED = 1;

var canvas, ctx, TWO_PI = Math.PI * 2, balls = [], mouse = {down:false,x:0,y:0};

class LifePiece {
  constructor(cnvs) {
    // let self = this;
    this.isBoundary = false;
    this.bottomBoundary = window.innerHeight;
    this.timeout;
    this.pieces = [
      {name: '쾌락'},
      {name: '행복'},
      {name: '자아실현'},
      {name: '연애'},
      {name: '돈'},

      {name: '명예'},
      {name: '다른 사람에게 인정받음'},
      {name: '꿈'},
      {name: '결혼'},
      {name: '행복한 가정'},

      {name: '즐거움'},
      {name: '관계'},
      {name: '친구'},
      {name: '자아실현'},
      {name: '직업'},

      {name: '인기'},
    ];

    window.requestAnimFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };

        canvas = cnvs;
        ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight * 2 + 300;

        this.init();
        this.update();
  }

  resolveCollisions(ip) {
    var i = balls.length;

    while (i--) {

        var ball_1 = balls[i];

        if (mouse.down) {

            var diff_x = ball_1.x - mouse.x;
            var diff_y = ball_1.y - mouse.y;
            var dist = Math.sqrt(diff_x * diff_x + diff_y * diff_y);
            var real_dist = dist - (ball_1.radius + MOUSE_SIZE);

            if (real_dist < 0) {

                var depth_x = diff_x * (real_dist / dist);
                var depth_y = diff_y * (real_dist / dist);

                ball_1.x -= depth_x * 0.005;
                ball_1.y -= depth_y * 0.005;
            }
        }

        var n = balls.length;

        while (n--) {

            if (n == i) continue;

            var ball_2 = balls[n];

            var diff_x = ball_1.x - ball_2.x;
            var diff_y = ball_1.y - ball_2.y;

            var length    = diff_x * diff_x + diff_y * diff_y;
            var dist      = Math.sqrt(length);
            var real_dist = dist - (ball_1.radius + ball_2.radius);

            if (real_dist < 0) {

                var vel_x1 = ball_1.x - ball_1.px;
                var vel_y1 = ball_1.y - ball_1.py;
                var vel_x2 = ball_2.x - ball_2.px;
                var vel_y2 = ball_2.y - ball_2.py;

                var depth_x = diff_x * (real_dist / dist);
                var depth_y = diff_y * (real_dist / dist);

                ball_1.x -= depth_x * 0.5;
                ball_1.y -= depth_y * 0.5;

                ball_2.x += depth_x * 0.5;
                ball_2.y += depth_y * 0.5;

                if (ip) {

                    var pr1 = DAMPING * (diff_x*vel_x1+diff_y*vel_y1) / length,
                        pr2 = DAMPING * (diff_x*vel_x2+diff_y*vel_y2) / length;

                    vel_x1 += pr2 * diff_x - pr1 * diff_x;
                    vel_x2 += pr1 * diff_x - pr2 * diff_x;

                    vel_y1 += pr2 * diff_y - pr1 * diff_y;
                    vel_y2 += pr1 * diff_y - pr2 * diff_y;

                    ball_1.px = ball_1.x - vel_x1;
                    ball_1.py = ball_1.y - vel_y1;

                    ball_2.px = ball_2.x - vel_x2;
                    ball_2.py = ball_2.y - vel_y2;
                }
            }
        }
    }
  }

  checkWalls() {

      var i = balls.length;

      while (i--) {

          var ball = balls[i];

          if (ball.x < ball.radius) {

              var vel_x = ball.px - ball.x;
              ball.x = ball.radius;
              ball.px = ball.x - vel_x * DAMPING;

          } else if (ball.x + ball.radius > canvas.width) {

              var vel_x = ball.px - ball.x;
              ball.x = canvas.width - ball.radius;
              ball.px = ball.x - vel_x * DAMPING;
          }

          if (ball.y < ball.radius) {

              var vel_y = ball.py - ball.y;
              ball.y = ball.radius;
              ball.py = ball.y - vel_y * DAMPING;

          } else if (ball.y + ball.radius > this.bottomBoundary) {

              var vel_y = ball.py - ball.y;
              ball.y = this.bottomBoundary - ball.radius;
              ball.py = ball.y - vel_y * DAMPING;

          }
      }
  }

  update() {

      //var time = new Date().getTime();

      var iter = 6;

      var delta = SPEED / iter;

      while (iter--) {

          var i = balls.length;

          while (i--) {

              balls[i].applyForce(delta);
              balls[i].verlet();
          }

          this.resolveCollisions();
          this.checkWalls();

          var i = balls.length;
          while (i--) balls[i].verlet();

          this.resolveCollisions(1);
          this.checkWalls();
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(27,155,244,0.3)';

      var i = balls.length;
      while (i--) balls[i].draw(ctx);

      if(this.isBoundary) {
        ctx.beginPath();
        ctx.moveTo(10, this.bottomBoundary);
        ctx.lineTo(window.innerWidth - 10, this.bottomBoundary);
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#de5458';
        ctx.stroke();
      }

      // if (mouse.down) {
      //
      //     ctx.fillStyle   = 'rgba(0,0,0,0.1)';
      //     ctx.strokeStyle = 'rgba(0,0,0,0.2)';
      //
      //     ctx.beginPath();
      //     ctx.arc(mouse.x, mouse.y, MOUSE_SIZE, 0, TWO_PI);
      //     ctx.fill();
      //     ctx.stroke();
      // }

      this.animId = requestAnimFrame(this.update.bind(this));

      //console.log(new Date().getTime() - time);
  }

  addBall(title, x, y, r) {
      let w = window.innerWidth / 14;
      var x = x || Math.random() * (canvas.width - 60) + 30,
          // y = y || Math.random() * (canvas.height - 60) + 30,
          y = 150,
          // r = r || 30 + Math.random() * 30,
          r = r || w + Math.random() * w,
          s = true,
          i = balls.length,
          colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'],
          color = colors[Math.floor(Math.random() * colors.length)];

      while (i--) {

          var ball = balls[i];
          var diff_x = ball.x - x;
          var diff_y = ball.y - y;
          var dist = Math.sqrt(diff_x * diff_x + diff_y * diff_y);

          if (dist < ball.radius + r) {
              s = false;
              break;
          }
      }

      if (s) balls.push(new Ball(x, y, r, title, color));
  }

  unload() {
    window.cancelAnimationFrame(this.animId);
  }

  async addBallsSequence(limit = 0) {

    let item = this.pieces[--NUM_BALLS];
    if(item) {
      // let self = this;
      await util.wait(200);

      this.addBall(item.name);

      if(limit < NUM_BALLS) {
        this.addBallsSequence(limit);
      }
    }
  }

  init() {
    // [NOTE] 최초 추가
    this.addBallsSequence(NUM_BALLS - 5);
  }

  addBallsAll() {

  }

  slide() {
    let self = this;
    this.isBoundary = true;
    this.bottomBoundary = (window.innerHeight * 2) - (window.innerHeight * 0.1);

    canvas.style.transform = `translateY(-50%)`;

    clearTimeout(this.timeout);
    this.timeout = setTimeout(function(){
      self.bottomBoundary = (window.innerHeight * 2) + (window.innerHeight * 0.8);
    }, 4000);
  }

  unslide() {
    this.isBoundary = false;
    this.bottomBoundary = window.innerHeight;

    canvas.style.transform = ``;

    clearTimeout(this.timeout);
  }
}

export default LifePiece;
