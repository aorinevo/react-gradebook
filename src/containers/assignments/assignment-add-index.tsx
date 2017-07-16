import { Component } from 'react';
import * as React from 'react';
import AddAssignmentForm from '../../components/forms/assignment/add-assignment-form';
import Header from '../../components/forms/common/header/header';

class AssignmentEditIndex extends Component<any,any> {
  
  render() {
    return (
      <div className="container">
        <Header text="Add Assignment" />
        <AddAssignmentForm gbid={this.props.match.params.id}/>
      </div>
    );
  }
}

export default AssignmentEditIndex;