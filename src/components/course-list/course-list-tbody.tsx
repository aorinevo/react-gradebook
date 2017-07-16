import { Component } from 'react';
import * as React from 'react';
//import { Link } from 'react-router-dom';
import CourseListTr from './course-list-tr';


class CourseListTbody extends Component<any,any> {
  
  renderRow({courses = []}) {    
    return courses.map( (course: object, index: number, courses: object[]) => {
      <CourseListTr key={index} course={course} /> 
    });
  }
  
  render() {    
    return (
      <tbody className="angb-course-list-tbody">	
        {this.renderRow(this.props)}
      </tbody>
    )
  }
}

export default CourseListTbody;