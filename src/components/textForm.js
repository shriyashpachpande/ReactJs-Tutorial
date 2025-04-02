import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text")

    const handleUpClick = () => {
        console.log("You Press the Button of UpperCase")
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        let newtext = text.toLowerCase()
        setText(newtext)
    }

    const handleOnChange = (event) => {
        console.log("HandleOnChange is cliked")
        setText(event.target.value)
    }
    return (
        <>
            <div className='container '>
                <h1>{props.heading}</h1>
                <div className='mb=3'>
                    <textarea className='form-control' id='myBox' rows='8' value={text} onChange={handleOnChange}>

                    </textarea>
                </div>
                <button className='btn btn-primary my-3 mx-3 ' onClick={handleUpClick} >Convert to Uppercase</button>
                <button className='btn btn-primary my-3 ' onClick={handleLoClick} >Convert to LowerCase</button>
            </div>
            <div className='container' my-5 >
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words & {text.trim().length} character</p>
                <p>{0.008*text.split(" ").length}Minutes Read</p>
                <p>Preview</p>
                <p>{text}</p>
            </div>
        </>
    );
}
