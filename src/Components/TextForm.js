import React, {useState}from 'react';

export default function Form(props) {
    const [text , setText] = useState("");
    // text = "new text "; //wrong way to set the text on the state
// setText:("me"); //correct way to set text on the state
const handleupClick=()=>{
    console.log("clicked")
    let newText = text.toUpperCase()
    setText(newText )
    props.showAlert("converted to upper case!","success ")
}
const handleloClick=()=>{
    console.log("clicked")
    let newText = text.toLowerCase()
    setText(newText )
    props.showAlert("converted to lower case", "success ")

}
const handleonChange=(event)=>{
    console.log("changed")
    setText(event.target.value)
}
  return (
    <>
    <div className='container'  style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          style={{backgroundCOlor: props.mode === 'dark'?'grey':'white'}  }
          className="form-control"
          id="myBox"
          rows="3" value={text} onChange={handleonChange}
        ></textarea>
      </div>
      <button className="btn btn.primary mx-1 my-1" onClick={handleupClick}>Convert to UpperCase</button>
      <button className="btn btn.primary mx-1 my-1" onClick={handleloClick}>Convert to LowerCase</button>

    </div>
    <div className='container my-2' style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>your text sumarry</h2>
        <p>{text.split(" ").filter(item => {
          return item.length!==0;
        }).length} words and {text.length} character</p>
        <p>{0.008*text.split(" ").length} minuts to read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter your text to priview"}</p>

    </div>
    </>
  );
}
