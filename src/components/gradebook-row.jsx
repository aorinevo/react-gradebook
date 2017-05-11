import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class GradebookRow extends Component {
  renderDropDown(){
    return (
      <td>
    		<div className="btn-group">
    			<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
    				<span className="caret"></span>
    			</button>
    			<ul className="dropdown-menu" role="menu">
    				<li className="course-submenu-view"><Link to="/gradebook">Statistics</Link></li>	
    				<li className="course-submenu-edit"><Link to="#">Edit</Link></li>							
    				<li className="course-submenu-delete"><Link to="#"><span className="text-danger">Delete</span></Link></li>
					</ul>
    		</div>
    	</td>
    );
  }
  
  renderRow() {
    const { first_name, last_name, user_login } = this.props.student;
    let data = this.props.cells.map( item => <td key={item.id}>{item.assign_points_earned}</td> );
    data.unshift(this.renderDropDown(),<td>{first_name}</td>, <td>{last_name}</td>, <td>{user_login}</td>);
    return data;
  }
  
  render() {    
    return (
      <tr>
        {this.renderRow()}
      </tr>
    )
  }
}

export default GradebookRow;