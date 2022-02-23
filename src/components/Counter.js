import React, { Component } from 'react';
//rce ti snipet class components


class Counter extends Component {
//rconst snipet text for constructor body
    constructor(props) {
        super(props)
    
        this.state = {
            count:0
        }
    }
    increment(){
        //comment multiple linge shift alt a
/*         this.setState({
        count:this.state.count+1
        },
        ()=>{
        console.log("callback value",this.state.count)
        }) */

        this.setState((prevState)=>({
            count:prevState.count+1
        }))
    }
//react group multiple setstate into one single update for better performance
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }

    render() {
    return(
    <div>
        count -{this.state.count}
        <button onClick={()=>{
            this.incrementFive()
        }}>counteur</button>
    </div>
    );
    }
}

export default Counter;

/* setstate
always use setstate and never modifiy the state directaly
the only case when u can modify the state directally is the constructor

code has to be executed after state has been updated ? place that code in the call back 
function which is the arguement to the setstate method 

when u have to update state based on previous state value , pass in a function as an argument 
instead of the regular object 
*/