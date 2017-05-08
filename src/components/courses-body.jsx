import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CoursesRow from './courses-row';

class CoursesBody extends Component {
  
  renderRow() {
    let courses = this.props.courses;
    courses = courses.map( course => <CoursesRow course={course} /> );
    return courses;
  }
  
  render() {    
    return (
      <tbody className="angb-course-list-tbody">	
        {this.renderRow()}
      </tbody>
    )
  }
}

export default CoursesBody;