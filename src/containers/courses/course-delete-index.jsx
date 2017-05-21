import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DeleteCourseForm from '../../components/course-list/delete-course-form';
import Header from '../../components/forms/common/header/header';

class CourseDeleteIndex extends Component {
  
  render() {
    return (
      <div className="container">
        <Header text="Delete Course"/>
        <DeleteCourseForm />
      </div>
    );
  }
}

export default CourseDeleteIndex;
// function mapStateToProps( state ){
//   return { courses: state.courses };
// }
// 
// function mapDispatchToProps( dispatch ){
//   return { fetchCourses: ()=> dispatch(fetchCourses()) }
// }
// 
// export default connect( mapStateToProps, mapDispatchToProps )( CourseListIndex );