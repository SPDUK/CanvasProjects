import React, { Component } from 'react';
import anime from 'animejs';
import './fakeloading.css';

export default class FakeLoading extends Component {
  componentDidMount = () => {
    const loadingBar = anime.timeline();
    loadingBar
      .add({
        targets: '.fakeloading-bar-inner',
        width: 500,
        loop: false,
        easing: 'easeInQuart',
        duration: 1000,
        borderRadius: 50,
        backgroundColor: 'rgb(255, 179, 107)'
      })
      .add({
        targets: '.fakeloading-bar-inner',
        borderRadius: '100%',
        width: 50,
        translateX: 500
      })
      .add({
        targets: '.fakeloading-bar-inner',
        width: 50,
        loop: false,
        translateX: 250,
        easing: 'easeInQuart',
        backgroundColor: 'rgb(167, 90, 255)'
      })

      .add({
        targets: '.fakeloading-bar-inner',
        easing: 'easeInQuart',
        translateX: 250,
        duration: 500,
        scale: 70,
        backgroundColor: '#57a5ff'
      });

    const loadingText = anime.timeline();
    loadingText
      .add({
        duration: 1300,
        targets: '#num',
        easing: 'easeInQuart',
        innerHTML: 100,
        round: 1
      })
      .add({
        targets: '#num',
        opacity: 0
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
