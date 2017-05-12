import React, { Component } from 'react';

class AddStudent extends Component {
  render() {
    return (
      <div>        
        <div id="add-student-modal" className="modal fade in">
        	<div className="modal-dialog">
        		<div className="modal-content">
        			<div className="modal-header">
        				<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
        				<h4 className="modal-title" id="myModalLabel">Create Student</h4>
        			</div>
        			<div className="modal-body">
            			<form id="edit-student-form" className="form-horizontal">     
        					<div className="form-group">     			 
        				        <input type="hidden" name="id" value=""/>         
        				        <label for="firstname" className="col-sm-4 control-label">First Name:</label>
        						<div className="col-sm-6">					        
        				        	<input type="text" className="form-control" id="first_name" name="first_name" value=""/>
        				        </div>	
        				    </div>
        					<div className="form-group"> 				        
        				        <label for="lastname" className="col-sm-4 control-label">Last Name:</label>
        						<div className="col-sm-6">					        
        				        	<input type="text" className="form-control" id="last_name" name="last_name" value=""/>
        				        </div>	
        				    </div>
        				    
        					<div className="form-group"> 				    
        				        <label for="user_login" className="col-sm-4 control-label">User Login:</label>
        				        <div className="ui-front col-sm-6"><input className="form-control" type="text" name="id-exists" id="user_login"/></div> 
        				        <input type="hidden" name="gbid" value="3"/>				        
        				    </div>
        				    
        				        <div>
        				        
        				        	if student exists in the wordpress database, use the students user_login to add. Otherwise a new record will be created for this student.
        				        	Add to course ? 
        				        
        				        </div>			        
            			</form>
        			</div>
        			<div className="modal-footer">
        				<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        				<button type="button" id="edit-student-save" data-dismiss="modal" className="btn btn-primary">Save</button>
        			</div>
        		</div>		
        	</div>
        </div>
      </div>
    );
  }
}
export default AddStudent;
