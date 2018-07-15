import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProjectCard extends Component {
  render() {
    return (
      <Link to={this.props.link}>
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={this.props.imageURL} alt={this.props.name} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left" />
              <div className="media-content">
                <p className="title is-4">{this.props.name}</p>
              </div>
            </div>
            <div className="content">{this.props.desc}</div>
          </div>
        </div>
      </Link>
    );
  }
}
