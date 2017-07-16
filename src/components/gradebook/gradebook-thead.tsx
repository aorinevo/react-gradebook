import { Component } from 'react';
import * as React from 'react';
import GradebookTh from './gradebook-th';

class GradebookThead extends Component<any,any> {
  
  renderTableHeaders() {
    let assignments = this.props.assignments;
    assignments = assignments.map( (assignment: object, index: number):any => <GradebookTh key={index} assignment={assignment} /> );
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