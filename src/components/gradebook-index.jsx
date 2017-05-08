import React, { Component } from 'react';
import GradebookBody from './gradebook-body';
import GradebookThead from './gradebook-thead';
import { Link } from 'react-router-dom';
import gbdata from '../../fixtures/json/intructor-gradebook-data.js';

console.log(gbdata);
export class GradebookIndex extends Component {
  
  render() {
    return (
      <div>
        <h1>Gradebook 
          <Link className="btn btn-primary" style={{'float': 'right', 'marginTop': '5px'}} to="/">
            Add Student
          </Link>
        </h1>
        <table className="table table-bordered table-striped table-hover">  
          <GradebookThead assignments={gbdata.assignments}/>
			    <GradebookBody students={gbdata.students} cells={gbdata.cells}/>
  		  </table>
      </div>
    );
  }
}

export default GradebookIndex;