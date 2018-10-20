import React, { Component } from "react";
import HelloMessage from "./HelloMessage";
import reducer from "./reducers";
import { createStore } from "redux";  

const initialState = { tech: "React" };
const store = createStore(reducer, initialState);

class ReduxStatePropsExample extends Component {
 render() {
   return <HelloMessage technology={store.getState().tech}/>
 }
 }

export default ReduxStatePropsExample;