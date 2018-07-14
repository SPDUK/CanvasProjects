import React, { Component } from 'react';

import './snake.css';

// directions
class Snake extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      highScore: 0,
      play: true,
      hard: false
    };
  }

  componentDidMount() {
    // set up the event listeners for controls
    // update the state with the new direction
    this.startGame();
  }

  startGame() {
    const canv = document.getElementById('gc');
    if (window.innerWidth < 400) {
      canv.width = 300;
      canv.height = 300;
    } else if (window.innerWidth < 600) {
      canv.width = 400;
      canv.height = 400;
    } else {
      canv.width = 600;
      canv.height = 600;
    }
    const ctx = canv.getContext('2d');
    const gs = 20;
    const tc = canv.width / 20;
    let ax = 10;
    let ay = 10;
    let xv = 0;
    let yv = 0;
    let px = 5;
    let py = 5;
    const trail = [];
    let tail = 5;
    let lastPress;
    const keyPush = evt => {
      if (lastPress === 37 && evt.keyCode === 39) {
        return;
      }
      if (lastPress === 38 && evt.keyCode === 40) {
        return;
      }
      if (lastPress === 39 && evt.keyCode === 37) {
        return;
      }
      if (lastPress === 40 && evt.keyCode === 38) {
        return;
      }
      lastPress = evt.keyCode;

      switch (evt.keyCode) {
        case 37:
          xv = -1;
          yv = 0;
          break;
        case 38:
          xv = 0;
          yv = -1;
          break;
        case 39:
          xv = 1;
          yv = 0;
          break;
        case 40:
          xv = 0;
          yv = 1;
          break;
        default:
          break;
      }
    };
    // focus the canvas so the controls work and we can throw away the listener if page changes
    canv.setAttribute('tabindex', '0');
    canv.focus();
    canv.addEventListener('keydown', keyPush);

    const game = () => {
      // if the game is paused, do nothing
      if (!this.state.play) {
        return;
      }

      px += xv;
      py += yv;
      if (px < 0) {
        px = tc - 1;
      }
      if (px > tc - 1) {
        px = 0;
      }
      if (py < 0) {
        py = tc - 1;
      }
      if (py > tc - 1) {
        py = 0;
      }
      ctx.fillStyle = '#212121';
      ctx.fillRect(0, 0, canv.width, canv.height);
      ctx.fillStyle = '#9FFF98';

      for (let i = 0; i < trail.length; i += 1) {
        ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
        if (trail[i].x === px && trail[i].y === py) {
          if (this.state.score > 0) {
            if (this.state.score > this.state.highScore) {
              this.setState({
                highScore: this.state.score
              });
            }
            this.setState({
              score: 0,
              play: false
            });
          }
          tail = 5;
        }
      }
      trail.push({ x: px, y: py });
      while (trail.length > tail) {
        trail.shift();
      }

      if (ax === px && ay === py) {
        if (this.state.hard) {
          tail += 5;
          this.setState({
            score: this.state.score + 400
          });
        }
        tail += 1;
        this.setState({
          score: this.state.score + 100
        });
        ax = Math.floor(Math.random() * tc);
        ay = Math.floor(Math.random() * tc);
      }
      ctx.fillStyle = '#FF6C6C';
      ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
    };
    setInterval(game, 1000 / 15);
  }
  render() {
    if (!this.state.play) {
      document.body.style.cursor = 'pointer';
    } else {
      document.body.style.cursor = 'default';
    }
    return (
      // eslint-disable-next-line
      <div 
        onClick={() => {
          this.setState({
            play: true
          });
          const canv = document.getElementById('gc');
          canv.setAttribute('tabindex', '0');
          canv.focus();
        }}
        className="container snake"
        id="snake"
      >
        <h3 className="snake-score is-size-3">Score: {this.state.score}</h3>
        <h5 className="snake-score is-size-5">
          HighScore: {this.state.highScore}
        </h5>
        {!this.state.play ? (
          <article className="message is-danger snake-message">
            <div className="message-header">
              <p className="has-text-weight-bold">You Lost!</p>
              <button className="delete" aria-label="delete" />
            </div>
            <div className="message-body">
              <p className="has-text-weight-semibold">
                Current High Score: {this.state.highScore}
              </p>
              <p>Click anywhere to play again.</p>
            </div>
          </article>
        ) : null}
        <div className="snake-canvas">
          <canvas id="gc" className="snake-canvas" />
        </div>
        <div className="snake-controls">
          {/* eslint-disable-next-line */}
          <div
            onClick={() => {
              this.setState({
                hard: !this.state.hard
              });
            }}
            className="snake-controls-difficulty"
          >
            {!this.state.hard ? (
              <span className="button is-danger">Try Hard Mode!</span>
            ) : (
              <span className="button is-success">Back to easy mode</span>
            )}
          </div>

          <p>
            Use the <span>Arrow Keys</span> to control the snake. 🐍
          </p>
          <p>The game will start when you press any arrow key.</p>
          <p>
            You will<span> not</span> lose if you touch the walls
          </p>
        </div>
      </div>
    );
  }
}

export default Snake;
