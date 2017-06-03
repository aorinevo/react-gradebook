import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

function getId(){
  return this.props.match.params.id;
}

function handelSubmit(){
  console.log('test');
}

const AddStudentForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">   
      <div className="form-group">
        <Field component="input" type="hidden" name="id" value=""/>  
        <label htmlFor="firstname" className="col-sm-4 control-label">First Name:</label>
        <div className="col-sm-6">
          <Field
            className="form-control"
            id="first_name"
            name="first_name"
            value=""
            component="input"
            type="text"
          />
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="lastname" className="col-sm-4 control-label">Last Name:</label>
        <div className="col-sm-6">
          <Field
            className="form-control"
            id="last_name"
            name="last_name"
            value=""
            component="input"
            type="text"
          />
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="lastname" className="col-sm-4 control-label">Last Name:</label>
        <div className="col-sm-6">
          <Field
            className="form-control"
            id="user_login"
            name="id-exists"
            value=""
            component="input"
            type="text"
          />
        </div>
        <Field component="input" type="hidden" name="gbid" value={props.gbid} />		
      </div>
      <Link className="btn btn-default" to={`/gradebook/${props.gbid}`}>Close</Link>
      <Link className="btn btn-primary" to={`/gradebook/${props.gbid}`}>Save</Link>
    </form>
  );
};

/* Example Payload to send as param to createStudent action.
{
  "first_name": "asdf",
  "last_name": "asdf",
  "id-exists": "",
  "gbid": "3",
  "selected": false,
  "user_login": null
}
*/

// TODO - Add validation.

export default reduxForm({
  form: 'add-student', // a unique identifier for this form
})(AddStudentForm);