import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GradebookTbody from '../../components/gradebook/gradebook-tbody';
import GradebookThead from '../../components/gradebook/gradebook-thead';
import GradebookTh from '../../components/gradebook/gradebook-th';
import AddStudentModal from '../../components/gradebook/add-student-modal';
import AddAssignmentModal from '../../components/gradebook/add-assignment-modal';
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
          <button type="button" className="btn btn-primary" data-toggle="modal" style={{float: 'right'}} data-target="#add-assignment-modal">
            Add Assignment
          </button>
          <button type="button" className="btn btn-primary" data-toggle="modal" style={{float: 'right'}} data-target="#add-student-modal">
            Add Student
          </button>
        </h1>
        <table className="table table-bordered table-striped table-hover">  
          <GradebookThead assignments={ assignments }/>
			    <GradebookTbody students={ students } cells={ cells }/>
  		  </table>
        <AddAssignmentModal />
        <AddStudentModal />
      </div>
    );
  }
}

function mapStateToProps( state ){
  return { gradebook: state.gradebook };
}

function mapDispatchToProps( dispatch ){
  return { fetchGradebook: (id)=> dispatch(fetchGradebook(id))}
}

export default connect( mapStateToProps, mapDispatchToProps )( GradebookIndex );