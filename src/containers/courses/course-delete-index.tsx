import { Component } from 'react';
import * as React from 'react';
import DeleteCourseForm from '../../components/forms/course/delete-course-form';
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