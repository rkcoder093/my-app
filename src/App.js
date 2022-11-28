// import logo from './logo.svg';

import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';


function App() {
  const [Mode, setMode] = useState('light');

  const [alert, setalert] = useState(null)

  const showAlert=(message, type)=>{
    setalert({
      msg :message,
      type: type
    })
    setTimeout(()=>{
      setalert(null)
    },1000)
  

  }
  const toggleMode =()=>{
    if (Mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor='gray';
      showAlert("Dark Mode Enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled", "success");


    }
  }
  return (
   <>
 <Navbar title="TextUtil" about="Abbout" mode={Mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
 <div className="container">
 <TextForm showAlert={showAlert} heading="enter the text to analyze"  mode={Mode}/>
 {/* <About/> */}
 </div>
 
   </>
  );
}

export default App;
