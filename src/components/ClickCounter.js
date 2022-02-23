import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'
class ClickCounter extends Component {
 
  render() {
   
      const {count,incrementCount}=this.props
    return (
      <div>
                
          <button onClick={incrementCount}> click {count} tiems </button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter)