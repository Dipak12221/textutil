import React,{useState} from 'react';


export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("UpperCase was Clicked!!" + text);
        let newText=text.toUpperCase();
        setText(newText);
       props.showAlert("Converted to Upper Case","Sucessfully");
    }
    const handleLowClick=()=>{
      // console.log("UpperCase was Clicked!!" + text);
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lower Case","Sucessfully");
    }
    const handleClearClick=()=>{
      // console.log("UpperCase was Clicked!!" + text);
      setText("");
      props.showAlert("Clear Text","Sucessfully");
    }
   const handleCopy=()=>
   {
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to Clipboard","Sucessfully");
   }
   const handleExtraSpace=()=>
   {
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Space","Sucessfully");
    
   }
    const handleOnChange=(event)=>{
        // console.log("on Change");
        setText(event.target.value);
    }
        
    
    const [text, setText] = useState("");
    
    // text = "newText";// Worong way to change text
    // setText("newText");//Right way to change text
  return (
    <>
    <div className='container'  style={{color : props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} id="myBox" style={{backgroundColor : props.mode === 'dark'?'grey':'white',color: props.mode === 'dark'?'white':'black'}}onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>

    </div>
    <div className="container my-3" style={{color : props.mode === 'dark'?'white':'black'}}>
      <h2>Your text summary..</h2>
      <p>{text.split(" ").length} word and {text.length} char</p>
      <p>{0.008*text.split(" ").length }Minutes Reads</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here!"}</p>

    </div>
    </>
  );
}