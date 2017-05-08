import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AssignmentTh from './assignment-th';

class GradebookThead extends Component {
  
  renderTableHeaders() {
    let assignments = this.props.assignments;
    assignments = assignments.map( assignment => <AssignmentTh assignment={assignment} /> );
    assignments.unshift(<th></th>,<th>Fist Name</th>, <th>Last Name</th>, <th>Login</th>);
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