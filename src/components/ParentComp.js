import React, { Component,PureComponent } from 'react'
import RegularComp from "./RegularComp"
import PureComp from "./PureComp"
import MemoComp from "./MemoComp"
class ParentComp extends PureComponent {
//if parent dont re render the children also dont 
constructor(props) {
  super(props)

  this.state = {
     name:"manel"
  }
}

componentDidMount(){
    setInterval(()=>{

      this.setState({
        name:"manel"
      })
    },2000)
}

  render() {
    console.log("***********parent comp rendre **********")
    return (
      <div>
      ParentComp
      {/* <RegularComp name={this.state.name}></RegularComp>
      <PureComp name={this.state.name}> </PureComp> */}
      <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp