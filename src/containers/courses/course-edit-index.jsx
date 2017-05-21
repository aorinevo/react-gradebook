import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddCourseForm from '../../components/course-list/add-course-form';
import Header from '../../components/forms/common/header/header';

class CourseEditIndex extends Component {
  
  render() {
    return (
      <div className="container">
        <Header text="Add Course" />
        <AddCourseForm />
      </div>
    );
  }
}

export default CourseEditIndex;
// function mapStateToProps( state ){
//   return { courses: state.courses };
// }
// 
// function mapDispatchToProps( dispatch ){
//   return { fetchCourses: ()=> dispatch(fetchCourses()) }
// }
// 
// export default connect( mapStateToProps, mapDispatchToProps )( CourseListIndex );