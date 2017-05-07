import React, { Component } from 'react';

export class GradebookIndex extends Component {
  
  render() {
    return (
      <div>
        <h1>GradebookIndex</h1>
        <table>
          <thead>
            <tr>
              <th>Student</th><th>ID</th><th>HW1</th><th>HW2</th>
            </tr>
            <tr>
              <td>Aori Nevo</td><td>123</td><td>83</td><td>84</td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default GradebookIndex;