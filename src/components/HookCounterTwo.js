import React,{useState} from 'react'

function HookCounterTwo() {
    const initialCount=0
    const [count,setCount]=useState(initialCount)
  return (
    <div>
        count:{count}
        <button onClick={()=>setCount(initialCount)}>Rest</button>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <button onClick={()=>setCount(count-1)}>decrement </button>
    </div>
  )
}

export default HookCounterTwo