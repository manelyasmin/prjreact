import React, { Component } from 'react'

class LifcecycleB extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      name:"manel"
   }
   console.log("lifcylB constructor")
 }

 
 static getDerivedStateFromProps(props,state){
     console.log("lifB getdriv")
     return null 
 }
 
 componentDidMount(){
     console.log("lifceB did mout")
 }


 shouldComponentUpdate(){
  console.log("lifB should")
  return true 
}
getSnapshotBeforeUpdate(){
  console.log("B snap")
  return null
}

componentDidUpdate(){
  console.log("B did update")
}
    render() {
      console.log("lifecycleB render")
    return (
      <div>
LifecycleA 

      </div>
    )
  }
}

export default LifcecycleB