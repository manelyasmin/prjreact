import React, {useState} from 'react'

function HookCounter() {
    const[count,setCount]=useState(10)
  return (
    <div>

        <button onClick={()=>setCount(count+1)}>count {count}</button>
    </div>
  )
}

export default HookCounter


/**rules of hooks
 * 
 * only call hooks at the top level =>dont call hooks inside loops,conditions,or nested functions
 * only call hooks from react functions ,hooks dont not called from class
 * 
 */