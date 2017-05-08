import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import clstat from '../../fixtures/json/instructor-course-list';
import CoursesThead from './courses-thead';
import CoursesBody from './courses-body';

export class CoursesIndex extends Component {
  
  render() {
    return (
      <div>
        <h1>Courses
          <Link className="btn btn-primary" style={{'float': 'right', 'marginTop': '5px'}} to="/">
            Add Course
          </Link>
        </h1>
        <table className="table table-bordered table-striped table-hover">  
          <CoursesThead />
			    <CoursesBody courses={clstat['course_list']}/>
  		  </table>
      </div>
    );
  }
}

export default CoursesIndex;