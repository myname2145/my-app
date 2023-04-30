import React, {useState} from 'react';
export default function Form(props){
    const [text, setText] = useState("");
    const upcase=()=> {let newtext = text.toUpperCase(); 
        setText(newtext); 
        props.showAlert("Text is converted to upperCase","success");}
    const onch=(event)=>setText(event.target.value);
    const locase=()=>{let newtext = text.toLowerCase(); setText(newtext);props.showAlert("Text is converted to lowerCase","success");}
    const cleart=()=>{setText("");props.showAlert("All text is cleared","success");}
    const removespa=()=>{ let newtext2 = text.split(/[ ]+/); setText(newtext2.join(" "));props.showAlert("Extra spaces removed","success");}
    const copytext=()=>{var ctext = document.querySelector('#textarea1'); ctext.select(); navigator.clipboard.writeText(ctext.value); props.showAlert("Text is copied","success");}
    
    return(
        <>
            
            <div className="container" style={props.coloured}>
            <h3 className="my-3">Enter the text to analyze</h3>
            <div className="mb-7">
            <textarea className="form-control" style={props.coloured} id="textarea1" rows="10" value={text} onChange={onch}></textarea>
            </div>
            <button disabled={text.length===0} type="button" className="btn btn-primary my-3" onClick={upcase}>Convert to Uppercase</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary my-3 mx-2" onClick={locase}>Convert to Lowercase</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary my-3 mx-2" onClick={removespa}>Remove Extra Spaces</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary my-3 mx-2" onClick={copytext}>Copy Text</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary my-3 mx-1" onClick={cleart}>Clear Text</button>
            <div className="count"><h3>Your text summary</h3></div>
            <p>{text.trim().split(/\s+/).filter((element)=>{return(element.length!==0)}).length} Words and {text.length} Character's</p>
            <div className="preview"><h4>Preview</h4></div>
            <p>{(text.length)>0?text:"Enter your text in above text box for preview here"}</p>
            </div>
            
        </>
    )
}