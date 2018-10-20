import React from 'react';

class StateExample extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         header: "Header from state...", //string
         content: "Content from state...", //string
         name: 'John',
         age: 27, //number
         veg: ['apple','banana','carrot'], //array
         car: {doors:4, windows:6, roof:1}, //object
         date: new Date()//function
      } 
   }
   // functions and setState() goes here
   incrementAge = ()  => {
        this.setState({age: this.state.age + 1})
    }

    decrementAge = ()  => {
        this.setState({age: this.state.age - 1})
    }

    changeName = () => {
        this.setState({name: 'Barry'})
    }

    changeNameBack = () => {
        this.setState({name: 'John'})
    }


   render() { //logic goes here
       let name = this.state.name;
       let age = this.state.age;
    //    let newAge = this.setState({age: 30});
      return (
         <div>
            <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
            <h2>{name + "'s age is " + age}</h2>
            <h2>{this.state.veg[1]}</h2>
            <h2>{this.state.car.windows}</h2>
            <h2>{this.state.date.toLocaleTimeString()}</h2>
            <button onClick={this.incrementAge}>Age + 1</button>
            <button onClick={this.decrementAge}>Age - 1</button><br/>
            <button onClick={this.changeName}>Change Name</button>
            <button onClick={this.changeNameBack}>Change Name Back</button>

         </div>
      );
   }
}
export default StateExample;