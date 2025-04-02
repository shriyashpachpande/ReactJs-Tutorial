import React ,{useState} from 'react'

export default function TextForm(props){
    const [text,setText] = useState("Enter text")

    const handleOnClick = ()=>{
        console.log("You Press the Button of UpperCase")
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        console.log("HandleOnChange is cliked")
        setText(event.target.value)
    }
    return(
        <div>
            <h1>{props.heading}</h1>
            <div className='mb=3'>
                <textarea className='form-control' id='myBox' rows='8' value={text}  onChange={handleOnChange}>

                </textarea>
            </div>
            <button className='btn btn-primary my-3' onClick={handleOnClick} >Convert to Uppercase</button>
        </div>
    );
}