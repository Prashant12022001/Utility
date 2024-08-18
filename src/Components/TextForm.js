import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handleLowClick=()=>{
        let newText= text.toLowerCase();
        setText(newText);
    }
    const handleClearClick=()=>{
        let newText= "";
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const [text, setText] = useState('');
  return (
    <>
    <div>
        <h1>{props.title}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" />
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick} >ChangeToUppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLowClick} >ChangeToLowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear</button>
  <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
    <div className="container my-2">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>

    </div>
    </>
  )
}
