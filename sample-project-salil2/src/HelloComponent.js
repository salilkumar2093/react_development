import React, { Component } from 'react';

class HelloComponent extends Component {
  render() {
    return (
      <div>
       Hello {this.props.name} 
      </div>
    );
  }
}

export default HelloComponent;
