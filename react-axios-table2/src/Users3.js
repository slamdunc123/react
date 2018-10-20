// Users3.js

import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import BootstrapTable from 'react-bootstrap-table-next';
// import axios from 'axios';

function imageFormatter(cell, row){
    return (<img style={{width:100}} src={cell}/>)
  }

class Users3 extends React.Component {
  state = {
    users: [],
      
    columns: [
    {
      dataField: 'id.value',
      text: 'ID'
    }
    ,
    {
      dataField: 'name.first',
      text: 'Name'
    }, 
    {
      dataField: 'login.username',
      text: 'Username',
      sort: true
    }, 
    {
      dataField: 'email',
      text: 'Email',
      sort: true
    }, 
    {
      dataField: 'location.street',
      text: 'Street',
      sort: true
    }
    , 
    {
      dataField: 'picture.large',
      text: 'Photo',
      sort: true,
      formatter: imageFormatter
    }
]
  } 

  componentDidMount() {
        fetch(`https://randomuser.me/api/?results=5`)
          .then(res => {
              console.log(res);
              return res.json();
            })
            .then(data=>{
              const users = data.results;
              console.log(users);
              this.setState({ users });
          })
      }

//   componentDidMount() {
//     axios.get(`https://randomuser.me/api/?results=5`)
//       .then(res => {
//           console.log(res);
//           const users = res.data.results;
//         this.setState({ users });
//       })
//   }
  
  render() {
    return (
      <div className="container" style={{ marginTop: 50 }}>
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

export default Users3;