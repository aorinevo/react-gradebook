import React, { Component } from 'react';

class AddCourse extends Component {
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
				<form id="edit-course-form" className="form-horizontal"> 
					<div className="form-group">     
						<input type="hidden" name="id" value="" />        
						<label for="course_name" className="col-sm-3 control-label">Course Name:</label>
						<div className="col-sm-7">
							<input type="text" id="course_name" className="form-control" name="name" value="" />
						</div>
					</div>
					<div className="form-group">     					
						<label for="course_school" className="col-sm-3 control-label">School:</label>
						<div className="col-sm-7">						
							<input type="text" id="course_school" className="form-control" name="school" value="" />
						</div>	
					</div>	
					<div className="form-group">     						
						<label for="course_semester" className="col-sm-3 control-label">Semester:</label>
						<div className="col-sm-7">						
							<input type="text" id="course_semester" className="form-control" name="semester" value="" />
						</div>
					</div>						
					<div className="form-group">     						
						<label for="course_year" className="col-sm-3 control-label">Year:</label>
						<div className="col-sm-7">						
							<input type="text" id="course_year" className="form-control" name="year" value="" />
						</div>
					</div>					
				</form>
			</div>
			<div className="modal-footer">
				<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
				<button type="button" id="edit-course-save" data-dismiss="modal" className="btn btn-primary">Save</button>
			</div>
		</div>
	</div>
</div>
      </div>
    );
  }
}
export default AddCourse;