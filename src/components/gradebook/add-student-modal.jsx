import React, { Component } from 'react';
import AddStudentForm from './add-student-form';

class AddStudentModal extends Component {
  render() {
    return (
      <div id="add-student-modal" className="modal fade in" >
      	<div className="modal-dialog">
      		<div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              <h4 className="modal-title" id="myModalLabel">Create Student</h4>
            </div>
            <div className="modal-body">
      			  <AddStudentForm />
            </div>
      		</div>
      	</div>
      </div>
    );
  }
}
export default AddStudentModal;