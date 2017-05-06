import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class CoursesIndex extends Component {
  
  render() {
    return (
      <div>
        <Link className="btn btn-primary" to="/courses">
          Add a Post
        </Link>
        <h1>Mainasdfasdf</h1>
      </div>
    );
  }
}

export default CoursesIndex;