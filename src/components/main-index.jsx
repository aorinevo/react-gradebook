import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CourseRow from './course-row';

export class CoursesIndex extends Component {
  
  render() {
    return (
      <div>
        <h1>Courses 
          <Link className="btn btn-primary" style={{'float': 'right', 'marginTop': '5px'}} to="/courses">
            Add New
          </Link>
        </h1>
        <table className="table table-bordered table-striped table-hover">  
  			<thead>
  				<tr>		
  					<th></th>
  					<th className="course-column-id">ID</th>
  					<th className="course-column-name">Course</th>
  					<th className="course-column-school">School</th>
  					<th className="course-column-semester">Semester</th>
  					<th className="course-column-year">Year</th>
  				</tr>
  			</thead>
  			<tbody className="angb-course-list-tbody">	
            <CourseRow data={[123,"Calculus I","BCC","Fall",2017]}/>
  			</tbody>
  		</table>
      </div>
    );
  }
}

export default CoursesIndex;