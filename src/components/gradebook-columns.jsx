import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GradebookColumns extends Component {
  renderDropDown( item ){
    return (
  		<div className="btn-group">
  			<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
  				{item} <span className="caret"></span>
  			</button>
  			<ul className="dropdown-menu" role="menu">
  				<li className="course-submenu-view"><Link to="/gradebook">Statistics</Link></li>	
  				<li className="course-submenu-edit"><Link to="#">Edit</Link></li>							
  				<li className="course-submenu-delete"><Link to="#"><span className="text-danger">Delete</span></Link></li>
				</ul>
  		</div>
    );
  }
  
  renderColumns() {
    var self = this;
    let { data, offset } = this.props;
    if( offset ){
      for( var i = 1; i <= offset; i++){
        data.unshift('');
      }
    }
    data = data.map( item => <td>{self.renderDropDown(item)}</td> );    
    return data;
  }
  
  render() {
    return (
      <tr>
        {this.renderColumns()}
      </tr>
    )
  }
}

export default GradebookColumns;