import React, { Component } from "react";
import HelloMessage from "./HelloMessage";

class ReduxExample extends Component {
 state = { 
  tech : "React"
}
render() {
  return <HelloMessage tech={this.state.tech}/>
}
}

export default ReduxExample;