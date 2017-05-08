import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CoursesThead from './courses-thead';
import CoursesBody from './courses-body';
import { connect } from 'react-redux';
import { fetchCourses } from '../actions';

export class CoursesIndex extends Component {
  componentDidMount( ){
    this.props.fetchCourses();
  }
  
  render() {
    if( !this.props.courses ){
      return null;
    }
    return (
      <div>
        <h1>Courses
          <Link className="btn btn-primary" style={{'float': 'right', 'marginTop': '5px'}} to="/">
            Add Course
          </Link>
        </h1>
        <table className="table table-bordered table-striped table-hover">  
          <CoursesThead />
			    <CoursesBody courses={this.props.courses}/>
  		  </table>
      </div>
    );
  }
}

function mapStateToProps( state ){
  return { courses: state.courses };
}

export default connect( mapStateToProps, { fetchCourses })( CoursesIndex );