import React,{useState} from 'react'


export default function Textform(props) {

   const handleUpClick=()=> {
     console.log("Uppercase was clicked" + text);
     let newText = text.toUpperCase();
     setText(newText)
     props.showAlert("Converted to Upper Case!","success")
     let wordcount = text.length;
    

   }

   const handleLoClick=()=> {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)

  }

  const handleClearText=()=> {
    console.log("Lowercase was clicked" + text);
    let newText = '';
    setText(newText)

  }
  const handleCopyText=()=> {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);

  }

   const handleOnChange=(event)=> {
    console.log("On Change");
    setText(event.target.value)
  }

    const [text,setText] = useState('');
    //text="new text"; wronng way
    //setText=("new Text") Correct way
    return (
        <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyText}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview!"}</p>
    </div>

    </>


    );
}
