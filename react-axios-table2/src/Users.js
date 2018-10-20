// Users.js

import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';

class Users extends Component {
  state = {
    users: [],
      
    columns: [
    {
      dataField: 'id',
      text: 'ID'
    },
    {
      dataField: 'name',
      text: 'Name'
    }, 
    {
      dataField: 'username',
      text: 'Username',
      sort: true
    }, 
    {
      dataField: 'email',
      text: 'Email',
      sort: true
    }, 
    {
      dataField: 'address.street',
      text: 'Street',
      sort: true
    }
]
  } 

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
          console.log(res);
          const users = res.data;
        this.setState({ users });
      })
  }

  

//   render() {
//     return (
        
//       <div className="container" style={{ marginTop: 50 }}>
//         <BootstrapTable 
//         striped
//         hover
//         keyField='id' 
//         data={ this.state.users } 
//         columns={ this.state.columns }
        
//         />
//       </div>
//     );
//   }

//   render() {
//       if(this.state.users)
//       {
//           const user = this.state.users[0];
//           console.log(user)
//           return <p>Loading...</p>}
//       return(
//           <table>
//             <thead>
//                 <tr>
//                     <th>ID</th>
//                     <th>NAME</th>
//                     <th>USERNAME</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>{this.state.users.values}</td>
//                     <td></td>
//                     <td></td>
//                 </tr>

//             </tbody>
//         </table>
//       )
//   }
  
  
  render() {
    return (
      <div className="" style={{ marginTop: 50 }}>
        <BootstrapTable 
        striped
        hover
        keyField='id' 
        data={ this.state.users } 
        columns={ this.state.columns } />
      </div>
    );
  }
}

export default Users;