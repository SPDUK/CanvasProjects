import React, { Component } from 'react';
import './gravity.css';

class Gravity extends Component {
  componentDidMount() {
    this.createCanvas();
  }

  createCanvas() {
    // utils
    function randomIntFromRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function randomColor(colors) {
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function distance(x1, y1, x2, y2) {
      const xDist = x2 - x1;
      const yDist = y2 - y1;

      return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
    }

    console.log(this);
    const canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };

    const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

    // Event Listeners
    window.addEventListener('mousemove', event => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      init();
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

      this.update = () => {
        const lastPoint = { x: this.x, y: this.y };
        // move points over time
        this.radians += this.velocity;
        // circular movement
        this.x = x + Math.cos(this.radians) * this.distanceFromCenter;
        this.y = y + Math.sin(this.radians) * this.distanceFromCenter;
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

      for (let i = 0; i < 30; i += 1) {
        particles.push(
          new Particle(canvas.width / 2, canvas.height / 2, 5, 'blue')
        );
      }
      console.log(particles);
    }

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);
      c.fillStyle = 'rgba(255, 255, 255, 0.05)';
      c.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
      });
    }

    init();
    animate();
  }
  render() {
    return <canvas />;
  }
}

export default Gravity;
