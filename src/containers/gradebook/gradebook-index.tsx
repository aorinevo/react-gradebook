import { Component } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GradebookTbody from '../../components/gradebook/gradebook-tbody';
import GradebookThead from '../../components/gradebook/gradebook-thead';

import { fetchGradebook } from '../../actions';

export class GradebookIndex extends Component<any,any> {
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
          <Link className="btn btn-primary" style={{float: 'right'}} to={`/`}>
            Courses
          </Link>
          <Link className="btn btn-primary" style={{float: 'right'}} to={`/gradebook/${this.props.match.params.id}/assignment/add`}>
            Add Assignment
          </Link>
          <Link className="btn btn-primary" style={{float: 'right'}} to={`/gradebook/${this.props.match.params.id}/student/add`}>
            Add Student
          </Link>
        </h1>
        <table className="table table-bordered table-striped table-hover">  
          <GradebookThead assignments={ assignments }/>
			    <GradebookTbody students={ students } cells={ cells }/>
  		  </table>
      </div>
    );
  }
}

function mapStateToProps( {gradebook}: {gradebook: object} ): object{
  return { gradebook };
}

function mapDispatchToProps( dispatch: any ){
  return { fetchGradebook: (id: number)=> dispatch(fetchGradebook(id))}
}

export default connect( mapStateToProps, mapDispatchToProps )( GradebookIndex );