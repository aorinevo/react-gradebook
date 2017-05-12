import React, { Component } from 'react';

class AddAssignment extends Component {
  render() {
    return (
      <div>        
        <div id="add-assignment-modal" className="modal fade in">
        	<div className="modal-dialog">
        		<div className="modal-content">
        			<div className="modal-header">
        				<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
        				<h4 className="modal-title" id="myModalLabel">Create Assignment</h4>
        			</div>
        			<div className="modal-body">
        				<form id="edit-assignment-form" className="form-horizontal">     
        					<div className="form-group">    				 
        				        <input type="hidden" name="id" value=""/>  
        				        <label for="assign_name" className="col-sm-4 control-label">Title:</label>
        						<div className="col-sm-6">				        
        				        	<input type="text" id="assign_name" className="form-control" name="assign_name" value=""/>
        				        </div>
        					</div>
        					<div className="form-group">
        				        <label for="assign-date-datepicker" className="col-sm-4 control-label">Date Assigned:</label>
        						<div className="col-sm-6">				        
        				        	<input type="text" className="form-control hasDatepicker" name="assign_date" id="assign-date-datepicker"/>        				    
        				        </div>	
        					</div>
        					<div className="form-group">
        				        <label for="assign-due-datepicker" className="col-sm-4 control-label">Date Due:</label>
        						<div className="col-sm-6">				        
        					        <input type="text" className="form-control hasDatepicker" name="assign_due" id="assign-due-datepicker" value=""/>
        					    </div>    
        					</div>
        					<div className="form-group">					
        				        <label for="assign_category" className="col-sm-4 control-label">Category:</label>
        						<div className="col-sm-6">				        
        				        	<input type="text" id="assign_category" className="form-control" name="assign_category" value=""/>		        
        				        </div>	
        					</div>	
        				    <div className="form-group">
        				    	<label for="assign_visibility_options" className="col-sm-4 control-label">Visibility:</label>
        				    	<div className="col-sm-6">
        							<select className="form-control" id="assign_visibility_options" name="assign_visibility_options">
        								<option value="Students">Students</option>
        								<option value="Instructor">Instructor</option>
        							</select>					
         						</div>	 						
         					</div>	
        					<input type="hidden" name="gbid" value="3"/>	 											
            			</form>    		
        				<div>
        					Add to course 3?            			
        				</div>
        			</div>
        			<div className="modal-footer">
        				<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        				<button type="button" id="edit-assignment-save" className="btn btn-primary">Save</button>
        			</div>
        		</div>
        	</div>
        </div>
      </div>
    );
  }
}
export default AddAssignment;
