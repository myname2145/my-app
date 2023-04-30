

import Form from "./components/Form";
import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";

function App() {
  const [cmode, setMode] = useState("Dark");
  const [mode,setmode] = useState({ color:'black',background:'white'});
  const togglemode=()=>
  {if(mode.color==='black')
  {setmode({color:'white',background:'#01051a'}); document.querySelector("body").style.background='#01051a';setMode("Light"); showAlert("Dark Mode is Enable","success");}
  else{setmode({color:'black',background:'white'}); document.querySelector("body").style.background='white';setMode("Dark");showAlert("Light Mode is Enable","success");}};
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{setAlert({msg:message,type:type}); setTimeout(()=>setAlert(null),1500)};
return (
  <>
    <Navbar title="Home" about="Help" darkmode={togglemode} cmode={cmode} />
     <Alert Alert={alert}/>
     <Form coloured={mode} heading="Enter the text to analyze" showAlert={showAlert}/> 
  </>
)

}
export default App;
