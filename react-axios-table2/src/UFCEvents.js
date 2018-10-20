// Users4.js

import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import BootstrapTable from 'react-bootstrap-table-next';
// import axios from 'axios';

function imageFormatter(cell, row){
    return (<img style={{width:100}} src={cell}/>)
  }

class UFCEvents extends React.Component {
  state = {
    users: [],
      
    columns: [
    // {
    //   dataField: 'id',
    //   text: 'ID'
    // }
    // ,
    {
      dataField: 'event_date',
      text: 'Date',
      sort: true
    }
    , 
    {
      dataField: 'base_title',
      text: 'Title',
      sort: true
    }, 
    {
      dataField: 'title_tag_line',
      text: 'Tag Line',
      sort: true
    }
    , 
    {
      dataField: 'feature_image',
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
        fetch(`http://ufc-data-api.ufc.com/api/v1/us/events/`)
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
        columns={ this.state.columns } />
      </div>
    );
  }
}

export default UFCEvents;