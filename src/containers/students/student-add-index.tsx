import { Component } from 'react';
import * as React from 'react';
import AddStudentForm from '../../components/forms/student/add-student-form';
import Header from '../../components/forms/common/header/header';

class StudentEditIndex extends Component<any,any> {
  
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