import { Component } from 'react';
import * as React from 'react';
import AddCourseForm from '../../components/forms/course/add-course-form';
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