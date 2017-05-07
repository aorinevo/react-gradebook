import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CourseRow extends Component {
  renderDropDown(){
    return (
      <td>
    		<div className="btn-group">
    			<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
    				<span className="caret"></span>
    			</button>
    			<ul className="dropdown-menu" role="menu">
    				<li className="course-submenu-view"><Link to="/gradebook/3">View</Link></li>	
    				<li className="course-submenu-edit"><Link to="#">Edit</Link></li>
    				<li className="course-submenu-export2csv"><Link to="#">Export to CSV</Link></li>								
    				<li className="course-submenu-delete"><Link to="#"><span className="text-danger">Delete</span></Link></li>
					</ul>
    		</div>
    	</td>
    );
  }
  
  renderRow() {
    let { data, offset } = this.props;
    if( offset ){
      for( var i = 1; i <= offset; i++){
        data.unshift('');
      }
    }
    data = data.map( item => <td>{item}</td> );
    data.unshift(this.renderDropDown());
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

export default CourseRow;