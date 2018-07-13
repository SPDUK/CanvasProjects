import React, { Component } from 'react';
import './gravity.css';

class Gravity extends Component {
  componentDidMount() {
    this.createCanvas();
  }

  createCanvas() {
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
    function Object(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
    }

    Object.prototype.update = function() {
      this.draw();
    };

    Object.prototype.draw = function() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
    };

    // Implementation
    let objects;
    function init() {
      objects = [];

      for (let i = 0; i < 400; i++) {
        // objects.push();
      }
    }

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);

      c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y);
      // objects.forEach(object => {
      //  object.update();
      // });
    }

    init();
    animate();
  }
  render() {
    return <canvas />;
  }
}

export default Gravity;
