import React, { Component } from 'react';

class Gravity extends Component {
  componentDidMount() {
    this.createCanvas();
    window.addEventListener('resize', this.resizeCanvas);
  }

  // eslint-disable-next-line
  createCanvas() {
    // utils
    function randomIntFromRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function randomColor(colors) {
      return colors[Math.floor(Math.random() * colors.length)];
    }

    const canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 58;

    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };

    const colors = ['#9f2bff', '#ec9bff', '#2b1eb5', '#604096'];

    // Event Listeners
    canvas.addEventListener('mousemove', event => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });

    // Objects
    function Particle(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.radians = Math.random() * Math.PI * 2;
      this.velocity = 0.05;
      this.distanceFromCenter = randomIntFromRange(50, 120);
      this.lastMouse = { x, y };

      this.update = () => {
        const lastPoint = { x: this.x, y: this.y };
        // move points over time
        this.radians += this.velocity;

        // drag effects
        this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05;
        this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05;

        // circular movement
        this.x =
          this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter;
        this.y =
          this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;
        this.draw(lastPoint);
      };
      this.draw = lastPoint => {
        c.beginPath();
        c.strokeStyle = this.color;
        c.lineWidth = this.radius;
        c.moveTo(lastPoint.x, lastPoint.y);
        c.lineTo(this.x, this.y);
        c.stroke();
        c.closePath();
      };
    }

    // Implementation
    let particles;
    function init() {
      particles = [];
      console.log('rezis');
      for (let i = 0; i < 50; i += 1) {
        const radius = Math.random() * 2 + 1;
        particles.push(
          new Particle(
            canvas.width / 2,
            canvas.height / 2,
            radius,
            randomColor(colors)
          )
        );
      }
    }
    canvas.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);
      c.fillStyle = 'rgba(255, 255, 255, 0.03)';
      c.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
      });
    }

    init();
    animate();
  }
  // eslint-disable-next-line
  resizeCanvas() {
    const canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeCanvas);
  }
  render() {
    return <canvas style={{ cursor: 'none' }} />;
  }
}

export default Gravity;
