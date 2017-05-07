import React, { Component } from 'react';
import GradebookRow from './gradebook-row';
import GradebookColumns from './gradebook-columns';
import { Link } from 'react-router-dom';

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
  			<thead>
          <GradebookColumns data={['','First Name', 'Last Name', 'Login', 'HW1', 'HW2']}/>
  			</thead>
  			<tbody className="angb-course-list-tbody">	
          <GradebookRow data={["Aori","Nevo","admin",80, 81]}/>
  			</tbody>
  		</table>
      </div>
    );
  }
}

export default GradebookIndex;