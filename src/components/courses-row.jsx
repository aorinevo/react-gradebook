import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class CoursesRow extends Component {
  renderDropDown(id){
    return (
      <td>
        <DropdownButton key={id}>
          <MenuItem eventKey="1" href="/gradebook/1">View</MenuItem>
          <MenuItem eventKey="2" href="#">Edit</MenuItem>
          <MenuItem eventKey="3" href="#">Export to CSV</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4" href="#"><span className="text-danger">Delete</span></MenuItem>
        </DropdownButton>
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

export default CoursesRow;