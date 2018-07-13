import React, { Component } from 'react';

import './bouncingballs.css';

class BouncingBalls extends Component {
  componentDidMount() {
    this.createCanvas();
  }
  // eslint-disable-next-line
  createCanvas() {
    const canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const c = canvas.getContext('2d');

    const mouse = {
      x: undefined,
      y: undefined
    };
    const maxRadius = 80;
    const colors = ['#E74C3C', '#2C3E50', '#FF9130', '#3498DB', '#2980B9'];

    window.addEventListener('mousemove', e => {
      mouse.x = e.x;
      mouse.y = e.y;
    });
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });

    function Circle(x, y, dx, dy, radius) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.minRadius = radius;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
      };

      this.update = function() {
        if (
          this.x + this.radius > window.innerWidth ||
          this.x - this.radius < 0
        ) {
          this.dx = -this.dx;
        }
        if (
          this.y + this.radius > window.innerHeight ||
          this.y - this.radius < 0
        ) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        // interactivity mouseover
        if (
          mouse.x - this.x < 60 &&
          mouse.x - this.x > -60 &&
          mouse.y - this.y < 60 &&
          mouse.y - this.y > -60
        ) {
          if (this.radius < maxRadius) {
            this.radius += 1;
          }
        } else if (this.radius > this.minRadius) {
          this.radius -= 1;
        }

        this.draw();
      };
    }

    let circles = [];
    for (let i = 0; i < 300; i += 1) {
      const radius = Math.random() * 10 + 3;
      const x = Math.random() * (window.innerWidth - radius * 2) + radius;
      const y = Math.random() * (window.innerHeight - radius * 2) + radius;
      // velocity (how fast it moves)
      const dx = (Math.random() - 0.5) * 3;
      const dy = (Math.random() - 0.5) * 3;
      circles.push(new Circle(x, y, dx, dy, radius));
    }

    const init = () => {
      circles = [];
      for (let i = 0; i < 100; i += 1) {
        const radius = Math.random() * 10 + 3;
        const x = Math.random() * (window.innerWidth - radius * 2) + radius;
        const y = Math.random() * (window.innerHeight - radius * 2) + radius;
        // velocity (how fast it moves)
        const dx = (Math.random() - 0.5) * 3;
        const dy = (Math.random() - 0.5) * 3;
        circles.push(new Circle(x, y, dx, dy, radius));
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      // // circle.draw();
      c.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = 0; i < circles.length; i += 1) {
        circles[i].update();
      }
    };
    animate();
  }
  render() {
    return <canvas className="bouncingballs" />;
  }
}

export default BouncingBalls;
