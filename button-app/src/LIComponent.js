import React, {Component} from 'react';

class LIComponent extends Component{
    render(){
        console.log(this);
        return (
<li>
{this.props.anupam}
    </li>         
        );
    }
}
export default LIComponent;