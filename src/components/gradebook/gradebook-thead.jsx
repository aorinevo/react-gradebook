import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GradebookTh from './gradebook-th';

class GradebookThead extends Component {
  
  renderTableHeaders() {
    let assignments = this.props.assignments;
    assignments = assignments.map( (assignment, index) => <GradebookTh key={index} assignment={assignment} /> );
    assignments.unshift(<th key={-4}></th>,<th key={-3}>Fist Name</th>, <th key={-2}>Last Name</th>, <th key={-1}>Login</th>);
    return assignments;
  }
  
  render() {    
    return (
      <thead>	
        <tr>
          {this.renderTableHeaders()}
        </tr>
      </thead>
    )
  }
}

export default GradebookThead;