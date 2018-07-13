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

    // c.fillStyle = '#fa31b3';
    // c.fillRect(100, 100, 100, 100);

    // c.fillStyle = '#3333cc';
    // c.fillRect(250, 100, 100, 100);

    // // line
    // c.beginPath();
    // c.moveTo(50, 300);
    // c.lineTo(100, 600);
    // c.lineTo(100, 400);
    // c.lineTo(50, 300);
    // c.lineTo(100, 200);
    // c.strokeStyle = '#fa34a3';
    // c.stroke();

    // // arc / circle
    // for (let i = 0; i < 50; i += 1) {
    //   const x = Math.random() * window.innerWidth;
    //   const y = Math.random() * window.innerHeight;
    //   c.beginPath();
    //   c.arc(x, y, 30, 0, Math.PI * 2, false);
    //   c.strokeStyle = 'blue';
    //   c.stroke();
    // }

    function Circle(x, y, dx, dy, radius) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;

      this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, 30, 0, Math.PI * 2, false);
        c.strokeStyle = 'blue';
        c.stroke();
        c.fillStyle = '#ff5151';
        c.fill();
      };

      this.update = () => {
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
        this.draw();
      };
    }

    const circles = [];
    for (let i = 0; i < 10; i += 1) {
      const radius = 30;
      const x = Math.random() * (window.innerWidth - radius * 2) + radius;
      const y = Math.random() * (window.innerHeight - radius * 2) + radius;
      // velocity (how fast it moves)
      const dx = (Math.random() - 0.5) * 20;
      const dy = (Math.random() - 0.5) * 20;
      circles.push(new Circle(x, y, dx, dy, 30));
    }

    console.log(circles);
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
