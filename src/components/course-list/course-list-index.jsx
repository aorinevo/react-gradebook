import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CourseListThead from './course-list-thead';
import CourseListTbody from './course-list-tbody';
import { connect } from 'react-redux';
import AddCourseModal from './add-course-modal';
import { fetchCourses } from '../../actions';

export class CourseListIndex extends Component {
  componentDidMount( ){
    this.props.fetchCourses();
  }
  
  render() {
    if( !this.props.courses ){
      return null;
    }
    return (
      <div className="container">
        <h1>Courses
        <button type="button" className="btn btn-primary" data-toggle="modal" style={{float: 'right'}}data-target="#base-modal">
          Add Course
        </button>
        </h1>
        <table className="table table-bordered table-striped table-hover">  
          <CourseListThead />
			    <CourseListTbody courses={this.props.courses}/>
  		  </table>
        <AddCourseModal />
      </div>
    );
  }
}

function mapStateToProps( state ){
  return { courses: state.courses };
}

export default connect( mapStateToProps, { fetchCourses })( CourseListIndex );