import { Component } from 'react';
import * as React from 'react';

interface props {
  text: string
}

export default class Header extends Component<props,any> {
  render() {
    return (
      <div>
        {this.props.text}
      </div>
    );
  }
}

