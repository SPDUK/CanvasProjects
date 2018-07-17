import React, { Component } from 'react';
import anime from 'animejs';
import './fakeloading.css';
import { Link, withRouter } from 'react-router-dom';

class FakeLoading extends Component {
  constructor() {
    super();
    this.state = {
      finished: false
    };
  }
  componentDidMount = () => {
    // when loading is finished it will call this function and push to the projects homepage
    const loadingFinished = () => {
      this.props.history.push('/projects');
    };

    const loadingBar = anime.timeline();
    loadingBar
      .add({
        targets: '.fakeloading-bar-inner',
        width: 320,
        loop: false,
        easing: 'linear',
        duration: 1500,
        borderRadius: 10,
        backgroundColor: 'rgba(31, 31, 31, 0.7)'
      })
      .add({
        targets: '.fakeloading-bar-inner',
        borderRadius: '100%',
        width: 50,
        translateX: 160,
        duration: 600,
        backgroundColor: 'rgba(0,0,0,0)',
        borderTop: '1px solid rgba(250, 250, 255, 0.4)'
      })
      .add({
        targets: '.fakeloading-bar-inner',
        width: 50,
        loop: false,
        translateX: 160,
        borderTop: '5px solid rgb(250, 255, 255)',
        rotate: 2880,
        duration: 2000,
        easing: 'easeInQuad',
        opacity: 1
      })
      .add({
        targets: '.fakeloading-bar-inner',
        borderTop: '50px solid rgb(250, 255, 255)',
        opacity: 0,
        duration: 3
      })
      .add({
        targets: '.fakeloading-bar-inner',
        borderTop: '50px solid rgb(250, 255, 255)',
        backgroundColor: '#e9e9e9',
        easing: 'easeInCubic',
        translateX: 160,
        duration: 300,
        scale: 70,
        opacity: 1,
        complete(anim) {
          loadingFinished();
        }
      });

    const loadingText = anime.timeline();
    loadingText
      .add({
        duration: 1500,
        targets: '#num',
        easing: 'easeInQuad',
        innerHTML: '100%',
        round: 1,
        color: 'rgb(230,230,230)'
      })
      .add({
        duration: 50,
        targets: '#num',
        opacity: 0.3,
        color: 'rgb(0,0,0)'
      })
      .add({
        duration: 500,
        fontWeight: 700,
        targets: '#num',
        opacity: 1,
        color: 'rgb(250, 250, 255)',
        scale: 3
      })
      .add({
        duration: 20,
        targets: '#num',
        opacity: 0,
        scale: 1
      })
      .add({
        duration: 300,
        targets: '#num',
        opacity: 0,
        scale: 1
      });
  };

  render() {
    return (
      <div className="fakeloading">
        <div className="fakeloading-bar">
          <div className="fakeloading-bar-inner">
            <span id="num">1</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FakeLoading);
