import { Component } from 'react';
import * as React from 'react';
import GradebookTr from './gradebook-tr';

class GradebookTbody extends Component<any,any> {  
  renderRow() {
    let self = this;
    let students = this.props.students;
    students = students.map( (student: any, index: number):any => <GradebookTr key={index} student={student} cells={self.filterCellsByStudentId(student.id)} /> );
    return students;
  }
  
  filterCellsByStudentId( id: number ) {
    let { cells } = this.props;
    return cells.filter( (cell: any) => cell.uid === id );
  }
  
  render() {    
    return (
      <tbody className="angb-course-list-tbody">	
        {this.renderRow()}
      </tbody>
    )
  }
}

export default GradebookTbody;