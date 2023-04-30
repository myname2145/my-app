import React, {useState} from 'react';
export default function About(){
    const [mystyle, setmystyle] = useState({color:'black',background:'white'});
    const [text, settext] = useState("Enable Dark Mode");
   const toggleStyle=()=>{ if(mystyle.background==='white'){ setmystyle({color:'white',background:'black'}); document.querySelector('body').style.background='black'; settext("Disable Dark Mode");}
   else{setmystyle({color:'black',background:'white'}); document.querySelector('body').style.background='white'; settext("Enable Dark Mode");}}  
return(
    <>
<div>
<div className="container my-3" style={mystyle}>
    <h2>Steps</h2>
      <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={mystyle}>
         #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={mystyle}>Insert or type your paragraph or text</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={mystyle}>
         #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={mystyle}>Click on any button according to your need given in below of your text area in blue color</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={mystyle}>
         #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={mystyle}>You can see your input text detail like total words and character and how many time become to read your input text</div>
    </div>
  </div>
</div>
<button className='btn btn-primary my-3' onClick={toggleStyle}>{text}</button>
</div>
  </div>  
</>   
)
}