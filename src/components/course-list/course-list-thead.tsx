import { Component } from 'react';
import * as React from 'react';

class CourseListThead extends Component<any,any> {
  render() {
    return (
      <thead>
        <tr>
          <td></td><td>ID</td><td>Course</td><td>School</td><td>Semester</td><td>Year</td>
        </tr>
      </thead>
    );
  }
}

export default CourseListThead;