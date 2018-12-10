<template>
  <div class='life-piece-wrap'>
    <canvas id='piece-canvas'></canvas>
  </div>
</template>

<script>
import Ball from '~/assets/js/ball.js';

export default {
  mounted() {
    /*
    Copyright (c) 2013 dissimulate at codepen

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the 'Software'),
    to deal in the Software without restriction, including without limitation
    the rights to use, copy, modify, merge, publish, distribute, sublicense,
    and/or sell copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included
    in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS
    OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    IN THE SOFTWARE.
    */

    var NUM_BALLS = 13,
        DAMPING = 0.7,
        MOUSE_SIZE = 50,
        SPEED = 1;

    var canvas, ctx, TWO_PI = Math.PI * 2, balls = [], mouse = {down:false,x:0,y:0};

    let self = this;
    this.bottomBoundary = 600;

    window.requestAnimFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };

    var resolveCollisions = function(ip) {

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
    };

    var checkWalls = function() {

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

            } else if (ball.y + ball.radius > self.bottomBoundary) {

                var vel_y = ball.py - ball.y;
                ball.y = self.bottomBoundary - ball.radius;
                ball.py = ball.y - vel_y * DAMPING;

            }
        }
    };

    var update = function() {

        //var time = new Date().getTime();

        var iter = 6;

        var delta = SPEED / iter;

        while (iter--) {

            var i = balls.length;

            while (i--) {

                balls[i].applyForce(delta);
                balls[i].verlet();
            }

            resolveCollisions();
            checkWalls();

            var i = balls.length;
            while (i--) balls[i].verlet();

            resolveCollisions(1);
            checkWalls();
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'rgba(27,155,244,0.3)';

        var i = balls.length;
        while (i--) balls[i].draw(ctx);

        if (mouse.down) {

            ctx.fillStyle   = 'rgba(0,0,0,0.1)';
            ctx.strokeStyle = 'rgba(0,0,0,0.2)';

            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, MOUSE_SIZE, 0, TWO_PI);
            ctx.fill();
            ctx.stroke();
        }

        requestAnimFrame(update);

        //console.log(new Date().getTime() - time);
    };

    var addBall = function(x, y, r) {

        var x = x || Math.random() * (canvas.width - 60) + 30,
            y = y || Math.random() * (canvas.height - 60) + 30,
            r = r || 10 + Math.random() * 20,
            s = true,
            i = balls.length;

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

        if (s) balls.push(new Ball(x, y, r));
    };

    window.onload = function() {

        canvas = document.getElementById('piece-canvas');
        ctx = canvas.getContext('2d');

        canvas.width = 414;
        canvas.height = 600 * 2;

        while (NUM_BALLS--) addBall();

        canvas.onmousedown = function(e) {

            if (e.which == 1) {

                addBall(mouse.x, mouse.y);

            } else if (e.which == 3) {

                mouse.down = true;
                document.body.style.cursor = 'none';
            }

            e.preventDefault();
        };

        canvas.onmouseup = function(e) {

            if (e.which == 3) {

                mouse.down = false;
                document.body.style.cursor = 'default';
            }

            e.preventDefault();
        };

        canvas.onmousemove = function(e) {

            var rect = this.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        canvas.onmouseout = function(e) {

            mouse.down = false;
            document.body.style.cursor = 'default';
        };

        canvas.oncontextmenu = function(e) {

            e.preventDefault();
            return false;
        };

        update();
    };
  },
  methods: {
    openPanel() {
      let canvas = document.getElementById('piece-canvas');
      canvas.style.display = `block`;

      let wrap = document.querySelector('.life-piece-wrap');
      wrap.style.opacity = 1;
    },
    closePanel() {

      // TweenMax.to('.important-item', 0.3, {opacity: 0,
      //   onComplete: ()=>{
      //     if(this.tl) {
      //       this.tl.pause(0, true);
      //     }
      //   }
      // });
      let wrap = document.querySelector('.life-piece-wrap');
      wrap.style.opacity = 0;
    },
    breakPanel() {

    },
    slidePanel() {
      let canvas = document.getElementById('piece-canvas');

      canvas.style.transform = `translateY(-50%)`;

      this.bottomBoundary = 600 * 2;
    },
    unslidePanel() {
      let canvas = document.getElementById('piece-canvas');

      canvas.style.transform = ``;

      this.bottomBoundary = 600;
    },
  }
}
</script>

<style lang='scss'>
.life-piece-wrap {

  // display: none;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s;

  #piece-canvas {
    transition: all 0.5s;
  }

  .slide {
    position: relative;
    top: 30%;
  }

  .important {
    &-item {
      position: absolute;
      background: $brand;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      transform: scale(0);
      opacity: 0;

      &.money {
        top: 48px;
        left: 64px;
        width: 90px;
        height: 90px;
      }

      &.honor {
        top: 330px;
        left: 170px;
        width: 90px;
        height: 90px;
      }

      &.acknowledge {
        top: 299px;
        left: 20px;
        width: 110px;
        height: 110px;
      }

      &.sex {
        top: 230px;
        left: 120px;
        width: 80px;
        height: 80px;
      }

      &.realization {
        top: 77px;
        left: 230px;
        width: 80px;
        height: 80px;
      }

      &.happiness {
        top: 190px;
        left: 60px;
        width: 50px;
        height: 50px;
      }

      &.pleasure {
        top: 172px;
        left: 195px;
        width: 65px;
        height: 65px;
      }
    }

    &-title {
      display: inline-block;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      text-align: center;
      color: $white;
    }
  }
}
</style>
