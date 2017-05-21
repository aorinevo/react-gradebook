import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div>
        {this.props.text}
      </div>
    );
  }
}

