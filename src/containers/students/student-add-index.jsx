import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddStudentForm from '../../components/forms/student/add-student-form';
import Header from '../../components/forms/common/header/header';

class StudentEditIndex extends Component {
  
  render() {
    return (
      <div className="container">
        <Header text="Add Student" />
        <AddStudentForm gbid={this.props.match.params.id}/>
      </div>
    );
  }
}

export default StudentEditIndex;
// function mapStateToProps( state ){
//   return { courses: state.courses };
// }
// 
// function mapDispatchToProps( dispatch ){
//   return { fetchCourses: ()=> dispatch(fetchCourses()) }
// }
// 
// export default connect( mapStateToProps, mapDispatchToProps )( CourseListIndex );