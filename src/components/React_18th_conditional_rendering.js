import React,{useState} from 'react'

export default function React_18th_conditional_rendering() {
    const [logedIn, setLoggedIn] = useState(2);
  return (
    <div>{
        logedIn==1?<h1>Welcome User1</h1>:logedIn==2?<h1>Welocme User2</h1>:<h1>welcome Guest</h1>
    }
    </div>
  )
}
