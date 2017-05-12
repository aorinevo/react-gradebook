import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GradebookTh from './gradebook-th';

class GradebookThead extends Component {
  
  renderTableHeaders() {
    let assignments = this.props.assignments;
    assignments = assignments.map( assignment => <GradebookTh assignment={assignment} /> );
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