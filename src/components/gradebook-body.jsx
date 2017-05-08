import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GradebookRow from './gradebook-row';

class GradebookBody extends Component {
  
  renderRow() {
    let self = this;
    let students = this.props.students;
    students = students.map( student => <GradebookRow student={student} cells={self.filterCellsByStudentId(student.id)} /> );
    return students;
  }
  
  filterCellsByStudentId( id ) {
    let { cells } = this.props;
    console.log(cells.filter( cell => cell.uid === id ));
    return cells.filter( cell => cell.uid === id );
  }
  
  render() {    
    return (
      <tbody className="angb-course-list-tbody">	
        {this.renderRow()}
      </tbody>
    )
  }
}

export default GradebookBody;