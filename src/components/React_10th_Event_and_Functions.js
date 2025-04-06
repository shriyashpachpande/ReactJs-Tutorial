import React ,{useState} from 'react'

export default function React_10th_Event_and_Functions() {
    function apple(){
        alert(text)
    }
    function change(event){
        setText(event.target.value)

    }
    const [text,setText] = useState('Heloe')
    return (
    <div>
      <h1>Hello {text}</h1>
      <input type='password' onChange={change} value={text} />
      <button onClick={apple} className='btn btn-primary' >Click Me</button>
    </div>
  )
}
