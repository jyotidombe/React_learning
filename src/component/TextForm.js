import React, {useState} from 'react'

export default function TextForm(props) {
  const [age, setAge] = useState(42);

  function increment() {
    setAge(a => a + 1);// Updater function
  }

  function handleUpperCase(){
    console.log("button is cliked");
    let newTxt = text.toUpperCase();
    setText(newTxt);
  }

  function handleLowerCase(){
    console.log("button is cliked");
    let newTxt = text.toLowerCase();
    setText(newTxt);
  }

  function handleChange(event){
    console.log("on change");
    setText(event.target.value);
  }

  const [text,setText] = useState('Enter text to change here');
  return (
    <div>
        <h2 className="section-title">1. Age Incrementer</h2>
        <div>
          <p><strong>Your age:</strong> <span id="age">{age}</span></p>
          <button className="btn btn-sm btn-success me-2" onClick={() => {
            increment();
            increment();
            increment();
          }}>+3</button>
          <button className="btn btn-sm btn-danger" onClick={() => {
            increment();
          }}>+1</button>
        </div>
        
        <h2 className="section-title">2. Text Analyzer</h2>
        <p>{props.heading}</p>
        <div className="mb-3">
            <textarea type="address" className="form-control" id="myAdd" rows='4' value={text} onChange={handleChange}/>
            <p className="mt-2" id="summary">{text.split(' ').length} words and {text.length} characters</p>
        </div>
        <button className="btn btn-primary me-2" onClick={handleUpperCase}>Convert to Uppercase</button>
        <button className="btn btn-primary" onClick={handleLowerCase}>Convert to Lowercase</button>
    </div>
  )
}
