import React, { Component } from 'react';
import GradebookTbody from './gradebook-tbody';
import GradebookThead from './gradebook-thead';
import GradebookTh from './gradebook-th';
import AddStudent from './add-student';
import AddAssignment from './add-assignment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchGradebook } from '../../actions';

export class GradebookIndex extends Component {
  componentDidMount( ){
    this.props.fetchGradebook( this.props.match.params.id );
  }
  
  render() {        
    if( this.props.gradebook.status != 200 ){
      return null;
    }
    const { data: {assignments, students, cells} } = this.props.gradebook;
    return (
      <div className="container">
        <h1>Gradebook 
          <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" style={{float: 'right'}}data-target="#add-assignment-modal">
            Add Assignment
          </button>
          <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" style={{float: 'right'}}data-target="#add-student-modal">
            Add Student
          </button>
        </h1>
        <table className="table table-bordered table-striped table-hover">  
          <GradebookThead assignments={ assignments }/>
			    <GradebookTbody students={ students } cells={ cells }/>
  		  </table>
        <AddAssignment />
        <AddStudent />
      </div>
    );
  }
}

function mapStateToProps( state ){
  return { gradebook: state.gradebook };
}

export default connect( mapStateToProps, { fetchGradebook })( GradebookIndex );