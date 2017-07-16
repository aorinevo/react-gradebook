import { Component } from 'react';
import * as React from 'react';

class GradebookTh extends Component<any,any> {
  
  render() {
    return (
      <th>
        <div className="btn-group">
      		<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
        		{this.props.assignment.assign_name}<span className="caret"></span>
      		</button>
      		<ul className="dropdown-menu" role="menu">	
            <li className="assign-submenu-stats"><a href="#">Statistics</a></li>
            <li className="assign-submenu-details"><a href="#">Details</a></li>  					
            <li className="assign-submenu-right"><a href="#">Shift Right</a></li>	
    				<li className="assign-submenu-sort"><a href="#">Sort</a></li>  					
    				<li className="assign-submenu-edit"><a href="#">Edit</a></li>
    				<li className="assign-submenu-delete"><a href="#"><span className="text-danger">Delete</span></a></li>
      		</ul>
      	</div>
      </th>
    )
  }
}

export default GradebookTh;