import React, { useState } from 'react'

export default function React_17th_Handle_Form() {
    const [name, setName] = useState('');
    const [tnc, setTnc] = useState(false)
    const [interest, setInerest] = useState('')
    function getDataForm(e){
        e.preventDefault();
        alert(name, tnc, interest);
    }
    return (
        <>
            <div className='container' >
                <h1>Handle Form</h1>
                <form onSubmit={getDataForm} >
                    <input type='text'  placeholder='Enter Name' className='form-control' onChange={(e)=>setName(e.target.value)}  /><br/><br/>
                    <select onChange={(e)=>setInerest(e.target.value)} className='form-control' >
                        <option>Select Option </option>
                        <option >Marvel</option>
                        <option >DC</option>
                    </select><br/><br/>
                    <input type='checkbox' onChange={(e)=>setTnc(e.target.checked)} />I Accept Terms And Conditions<br/><br/>
                    <button type='submit' className='btn btn-primary' >Submit</button><br/><br/>
                </form>
            </div>

        </>
    )
}
