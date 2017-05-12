import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CourseListTr extends Component {
  renderDropDown(id){
    return (
      <td>
        <div className="btn-group">
         	<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
         		<span className="caret"></span>
         	</button>
         	<ul className="dropdown-menu" role="menu">
         		<li className="course-submenu-view"><Link to="/gradebook/1">View</Link></li>	
         		<li className="course-submenu-edit"><Link to="#">Edit</Link></li>
         		<li className="course-submenu-export2csv"><Link to="#">Export to CSV</Link></li>								
         		<li className="course-submenu-delete"><Link to="#"><span className="text-danger">Delete</span></Link></li>
         	</ul>
         </div>
    	</td>
    );
  }
  
  render() {    
    const { id, name, school, semester, year } = this.props.course;
    return (
      <tr key={id}>
        {this.renderDropDown(id)}<td>{id}</td><td>{name}</td><td>{school}</td><td>{semester}</td><td>{year}</td>
      </tr>
    )
  }
}

export default CourseListTr;