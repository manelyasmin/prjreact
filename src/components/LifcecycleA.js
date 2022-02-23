import React, { Component } from 'react'
import LifcecycleB from './LifeCycleB'

class LifcecycleA extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      name:"manel"
   }
   console.log("lifcyl constructor")
 }

 
 static getDerivedStateFromProps(props,state){
     console.log("lif getdriv")
     return null 
 }
 
 componentDidMount(){
     console.log("lifceA did mout")
 }

shouldComponentUpdate(){
  console.log("lifAA should")
  return true 
}
getSnapshotBeforeUpdate(){
  console.log("a snap")
  return null
}

componentDidUpdate(){
  console.log("A did update")
}

changeState=()=>{
  this.setState({
    name:"i dont know what i m doing"
  })

}

    render() {
      console.log("lifecycleA render")
    return (
      <div>

<button onClick={this.changeState}>change state </button>
<LifcecycleB></LifcecycleB>
      </div>
    )
  }
}

export default LifcecycleA