import React, { Component } from 'react';
import './App.css';

class Button extends Component {
    constructor(){

        super();
        this.state = {
            counter : 0,
        }

    }

    incrementCounter() 
    {
      //  debugger;
       this.setState({counter:this.state.counter+1});
       console.log("inc called",this.state.counter);

   }

  decrementCounter() {
    this.setState({counter:this.state.counter-1});
    console.log("dec called",this.state.counter);
}

    render() {
        console.log("render called");
        return(
      <div> 
          <center>
          <div>
          <button id= "plusBox" className = "divBox" onClick={()=>this.incrementCounter()}> +</button>
          <button id = "minusBox" className = "divBox" onClick={()=>this.decrementCounter()}> - </button></div> </center>
         <center> <div className ="divBox">{this.state.counter}</div></center>
      </div>
    );}
}
export default Button;
