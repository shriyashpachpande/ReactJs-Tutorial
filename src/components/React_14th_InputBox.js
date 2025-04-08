import React, { useState } from 'react'

export default function React_14th_InputBox() {
    const [data, setData] = useState(null)
    const [print, setPrint] = useState(false)
    function changeEvent(event) {
        setData(event.target.value)
    }
    return (
        <div>
            <input type='text' onChange={changeEvent} />
            <button onClick={() => setPrint(true)}>Print Data</button>
           {
            print ?(
                <h3>{data}</h3>
            ) :(
                <h3>null</h3>
            )
           }
        </div>
    )
}
