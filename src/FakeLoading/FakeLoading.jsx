import React, { Component } from 'react';
import anime from 'animejs';
import './fakeloading.css';

export default class FakeLoading extends Component {
  componentDidMount = () => {
    const functionBasedDuration = anime.timeline();
    functionBasedDuration
      .add({
        targets: '.fakeloading-bar-inner',
        width: 500,
        loop: false,
        easing: 'easeInQuart',
        duration: 3000,
        borderRadius: 50,
        backgroundColor: '[rgb(255, 9, 9), rgb(134, 142, 255]'
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
        duration: 1000
      })
      .add({
        targets: '.fakeloading-bar-inner',
        borderRadius: '100%',
        translateX: 250,
        scale: 5
      });
  };

  render() {
    return (
      <div className="fakeloading">
        <div className="fakeloading-bar">
          <div className="fakeloading-bar-inner" />
        </div>
      </div>
    );
  }
}
