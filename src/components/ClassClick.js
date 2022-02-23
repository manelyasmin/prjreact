import React, { Component } from 'react';

class ClassClick extends Component {
clickHandler(){
console.log("clicked the buuton from classClick ")
  }
  render() {
    return (
    <div>
    <button onClick={this.clickHandler}>click me</button>
    </div>);
  }
}

export default ClassClick;
