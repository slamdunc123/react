// Users4.js

import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import BootstrapTable from 'react-bootstrap-table-next';
// import axios from 'axios';

import paginationFactory from 'react-bootstrap-table2-paginator';

function imageFormatter(cell, row){
    return (<img style={{width:100}} src={cell}/>)
  }

class UFCFighters extends React.Component {
  state = {
    users: [],
      
    columns: [
    // {
    //   dataField: 'id',
    //   text: 'ID'
    // }
    // ,
    {
      dataField: 'first_name',
      text: 'First Name'
    }, 
    {
      dataField: 'last_name',
      text: 'Last Name',
      sort: true
    }
    , 
    {
      dataField: 'weight_class',
      text: 'Weight Class',
      sort: true
    }
    , 
    {
      dataField: 'thumbnail',
      text: 'Photo',
      sort: true,
      formatter: imageFormatter
    }
    // , 
    // {
    //   dataField: 'picture.large',
    //   text: 'Photo',
    //   sort: true,
    //   formatter: imageFormatter
    // }
]
  } 

  componentDidMount() {
        fetch(`http://ufc-data-api.ufc.com/api/v1/us/fighters/`)
          .then(res => {
              console.log(res);
              return res.json();
            })
            .then(data=>{
              const users = data;
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
        columns={ this.state.columns } 
        pagination={ paginationFactory() } />
      </div>
    );
  }
}

export default UFCFighters;