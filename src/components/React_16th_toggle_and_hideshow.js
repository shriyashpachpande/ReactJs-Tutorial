import React,{useState} from 'react'

export default function React_16th_toggle_and_hideshow() {
    const [status,setStatus]=useState(true)
  return (
    <div>
      
      <button onClick={()=>setStatus(false)}>Hide</button>
      <button onClick={()=>setStatus(true)}>Show</button>
      <button onClick={()=>setStatus(!status)}>Toggle</button>
      {
        status ?(
            <h3>Yash</h3>
        ):(
            null
        )
      }
    </div>
  )
}
