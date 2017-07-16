import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

function createFormGroup( htmlFor:string, label:string, id: string, name: string, component:string,type:string){
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

const DeleteCourseForm = ({ handleSubmit, pristine, reset, submitting }: {handleSubmit?: any, pristine?: any, reset?: any, submitting?: any}) => {
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <div className="form-group">
        <input type="hidden" name="id" value="" />
        <label htmlFor="course_name" className="col-sm-3 control-label">Course Name:</label>
        <div className="col-sm-7">
          <Field
            className="form-control"
            id="course_name"
            name="name"
            value=""
            component="input"
            type="text"
          />
        </div>
      </div>
      {createFormGroup( 'course_school', 'School:', 'course_school', 'school', 'input', 'text')}
      {createFormGroup( 'course_semester', 'Semester:', 'course_semester', 'semester', 'input', 'text')}
      {createFormGroup( 'course_year', 'Year:', 'course_year', 'year', 'input', 'number')}
      <div>
        <Link className="btn btn-default" to="/courses">Close</Link>
        <Link className="btn btn-primary" to="/courses">Save</Link>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'delete-course', 
})(DeleteCourseForm);