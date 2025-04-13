import React, { useState } from 'react'
function React_19th_From_HandlingAdv() {
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [userErr,setUserErr]=useState(false);
    const [passErr,setPassErr]=useState(false);

  function loginHandle(e)
    {
        if(user.length<3 || password.length<3)
        {
            alert("type correct values")
        }
        else
        {
            alert("all good :)")
        }

        e.preventDefault()
    }
    function userHandler(e){
        let item=e.target.value;
        if(item.length<3 )
        {
           setUserErr(true)
        }
        else
        {
            setUserErr(false)
        }
        setUser(item)
    }
    function passwordHandler(e){
        let item=e.target.value;
        if(item.length<3 )
        {
           setPassErr(true)
        }
        else
        {
            setPassErr(false)
        }
        setPassword(item)

    }
    return (
        <div className='container' >
            <h1>Login</h1>
           <form onSubmit={loginHandle}>
           <input type="text" className='form-control' placeholder="Enter User Id" onChange={userHandler} />{userErr?<span>User Not Valid</span>:""}
            <br /> <br />
            <input type="password" className='form-control' placeholder="Enter User Password" onChange={passwordHandler}/>{passErr?<span>Password Not Valid</span>:""}

            <br /> <br />
            <button type="submit" className='btn btn-primary'  >Login</button>
           </form>
        </div>
    )
}

export default React_19th_From_HandlingAdv;