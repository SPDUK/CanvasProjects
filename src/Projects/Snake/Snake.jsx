import React, { Component } from 'react';

// import ReactAux from '../../Hoc/ReactAux/ReactAux';
import './snake.css';

// directions

class Snake extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      highScore: 0,
      play: true
    };
  }

  componentDidMount() {
    // set up the event listeners for controls
    // update the state with the new direction
    const canv = document.getElementById('gc');
    if (window.innerWidth < 400) {
      canv.width = 300;
      canv.height = 300;
    }
    const ctx = canv.getContext('2d');
    const gs = 20;
    const tc = canv.width / 20;
    let ax = 15;
    let ay = 15;
    let xv = 0;
    let yv = 0;
    let px = 10;
    let py = 10;
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
          console.log('hmm');
      }
    };
    document.addEventListener('keydown', keyPush);

    const game = () => {
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
        }}
        className="container snake"
        id="snake"
      >
        <h1 className="snake-score is-size-3">Score: {this.state.score}</h1>
        {!this.state.play ? (
          <article className="message is-danger snake-message">
            <div className="message-header">
              <p className="has-text-weight-bold">You Lost!</p>
              <button className="delete" aria-label="delete" />
            </div>
            <div className="message-body">
              <p className="has-text-weight-semibold">
                Current HighScore: {this.state.highScore}
              </p>
              <p>Click anywhere to play again.</p>
            </div>
          </article>
        ) : null}
        <div className="snake-canvas">
          <canvas id="gc" className="snake-canvas" width="400" height="400" />
        </div>
        <div className="snake-controls">
          <p>
            Use the <span>Arrow Keys</span> to control the snake. 🐍
          </p>
          <p>
            You <span>can</span> wrap around.
          </p>
        </div>
      </div>
    );
  }
}

export default Snake;
