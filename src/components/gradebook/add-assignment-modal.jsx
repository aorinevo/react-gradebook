import React, { Component } from 'react';
import AddAssignmentForm from './add-assignment-form';

class AddCourseModal extends Component {
  render() {
    return (
      <div id="add-assignment-modal" className="modal fade in" >
      	<div className="modal-dialog">
      		<div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              <h4 className="modal-title" id="myModalLabel">Create Assignment</h4>
            </div>
            <div className="modal-body">
      			  <AddAssignmentForm />
            </div>
      		</div>
      	</div>
      </div>
    );
  }
}
export default AddCourseModal;