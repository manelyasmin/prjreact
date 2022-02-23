import React, { Component } from 'react'

class Form extends Component {


  constructor(props) {
    super(props)
  
    this.state = {
       username:"",
       comments:"",
       topic:"react"
    }
  }
  handleUserNameChange=(event)=>{
    this.setState({
      username:event.target.value
    })
  }
  handleCommentsChange=(event)=>{
   this.setState({
     comments:event.target.value
   }) 
  }
  handleTopicChanges=(event)=>{
    this.setState({
      topic:event.target.value
    })
  }
  handleSubmit=event=>{
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()
  }
  render() {
    return (
     
     
    <form onSubmit={this.handleSubmit}>
       <div>
         <label>username</label>
         <input type="text" value={this.state.username} onChange={
           this.handleUserNameChange
         }></input>
       </div>
     

       <div>
         <label>comments</label>
         <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
       </div>


       <div>
         <label>topic</label>
         <select value={this.state.topic} onChange={this.handleTopicChanges}>
           <option value="react">react</option>
           <option value="angular">angular</option>
           <option value="vue">vue</option>
         </select>
       </div>

       <button type="submit" >submit</button>
     </form>

      )
  }
}

export default Form
