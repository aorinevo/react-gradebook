import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CourseListTr from './course-list-tr';

class CourseListTbody extends Component {
  
  renderRow() {
    let courses = this.props.courses;
    courses = courses.map( course => <CourseListTr course={course} /> );
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

export default CourseListTbody;