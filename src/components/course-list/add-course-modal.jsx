import React, { Component } from 'react';
import AddCourseForm from './add-course-form';

class AddCourseModal extends Component {
  render() {
    return (
      <div>
        <div id="base-modal" className="modal fade in" >
        	<div className="modal-dialog">
        		<div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 className="modal-title" id="myModalLabel">Create Course</h4>
              </div>
              <div className="modal-body">
        			  <AddCourseForm />
              </div>
        		</div>
        	</div>
        </div>
      </div>
    );
  }
}
export default AddCourseModal;