import React, { Component } from 'react';
import GradebookBody from './gradebook-body';
import GradebookThead from './gradebook-thead';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchGradebook } from '../actions';

export class GradebookIndex extends Component {
  componentDidMount( ){
    this.props.fetchGradebook();
  }
  
  render() {
    const { assignments, students, cells } = this.props.gradebook;
    if( !assignments ){
      return null;
    }
    return (
      <div>
        <h1>Gradebook 
          <Link className="btn btn-primary" style={{'float': 'right', 'marginTop': '5px'}} to="/">
            Add Student
          </Link>
        </h1>
        <table className="table table-bordered table-striped table-hover">  
          <GradebookThead assignments={ assignments }/>
			    <GradebookBody students={ students } cells={ cells }/>
  		  </table>
      </div>
    );
  }
}

function mapStateToProps( state ){
  return { gradebook: state.gradebook };
}

export default connect( mapStateToProps, { fetchGradebook })( GradebookIndex );