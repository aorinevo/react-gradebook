import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddAssignmentForm from '../../components/gradebook/add-assignment-form';
import Header from '../../components/forms/common/header/header';

class AssignmentEditIndex extends Component {
  
  render() {
    return (
      <div className="container">
        <Header text="Add Assignment" />
        <AddAssignmentForm gbid={this.props.match.params.id}/>
      </div>
    );
  }
}

export default AssignmentEditIndex;
// function mapStateToProps( state ){
//   return { courses: state.courses };
// }
// 
// function mapDispatchToProps( dispatch ){
//   return { fetchCourses: ()=> dispatch(fetchCourses()) }
// }
// 
// export default connect( mapStateToProps, mapDispatchToProps )( CourseListIndex );