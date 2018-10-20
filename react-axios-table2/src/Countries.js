// Users4.js

import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

import paginationFactory from 'react-bootstrap-table2-paginator';
// import axios from 'axios';

function imageFormatter(cell, row){
    return (<img style={{width:100}} src={cell}/>)
  }

class Countries extends React.Component {
  state = {
    users: [],
      
    columns: [
    // {
    //   dataField: 'id',
    //   text: 'ID'
    // }
    // ,
    {
      dataField: 'name',
      text: 'Country'
    }
    , 
    {
      dataField: 'capital',
      text: 'Capital',
      sort: true,
      filter: textFilter()
    }, 
    {
      dataField: 'flag',
      text: 'Flag',
      formatter: imageFormatter,
      sort: true
    }
    // , 
    // {
    //   dataField: 'location.street',
    //   text: 'Street',
    //   sort: true
    // }
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
        fetch(`https://restcountries.eu/rest/v2/all`)
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
        keyField='population' 
        data={ this.state.users } 
        columns={ this.state.columns }
        filter={ filterFactory() } 
        pagination={ paginationFactory() } 
        />
        
      </div>
    );
  }
}

export default Countries;