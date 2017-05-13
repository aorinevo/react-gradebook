import React from 'react';
import { Field, reduxForm } from 'redux-form';

function createFormGroup( htmlFor, label, id, name, component,type){
  return (
    <div className="form-group">
      <label htmlFor={htmlFor} className="col-sm-3 control-label">{label}</label>
      <div className="col-sm-7">
        <Field
          className="form-control"
          id={id}
          name={name}
          value=""
          component={component}
          type={type}
        />
      </div>
    </div>
  );
}

const AddAssignmentForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <div className="form-group">
        <input type="hidden" name="id" value=""/>  
        <label htmlFor="assign_name" className="col-sm-3 control-label">Title:</label>
        <div className="col-sm-7">
          <Field
            className="form-control"
            id="assign_name"
            name="assign_name"
            value=""
            component="input"
            type="text"
          />
        </div>
      </div>
      {createFormGroup( "assign-date-datepicker", "Date Assigned:", "assign_date", "assign_date", "input", "text")}
      {createFormGroup( "assign-due-datepicker", "Date Due:", "assign_due", "assign_due", "input", "text")}
      {createFormGroup( "assign_category", "Category:", "assign_category", "assign_category", "input", "text")}
      <div className="form-group">
        <label htmlFor="assign_visibility_options" className="col-sm-4 control-label">Visibility:</label>
        <div className="col-sm-6">
          <Field className="form-control" id="assign_visibility_options" name="assign_visibility_options" component="select">
            <option></option>
            <option value="Students">Students</option>
            <option value="Instructor">Instructor</option>
          </Field>
        </div>
      </div>	
      <Field type="hidden" component="text" name="gbid" value="3"/>
      <div>
        Add to course 3?            			
      </div>
      <div>
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" id="edit-course-save" data-dismiss="modal" className="btn btn-primary">Save</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'add-assignment', // a unique identifier for this form
})(AddAssignmentForm);