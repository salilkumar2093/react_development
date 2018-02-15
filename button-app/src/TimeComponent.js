import React, {Component} from 'react';

class TimeComponent extends Component{
    displayTime(){
setInterval(()=>new Date().toUTCString,1000);
    }
    render(){
        console.log(this);
        return (
<div>
    {this.displayTime}
    </div>       
        );
    }
}
export default TimeComponent;