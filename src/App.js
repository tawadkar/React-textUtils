
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';

function App() {
  const [mode,setMode] = useState('light'); //Whether dark mode is enabled or not

  const toggleMode =() =>{

    if(mode ==='light'){

      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{

      setMode('light');
      document.body.style.backgroundColor='white';
    }

  }
  return (
    <>
   
    <Navbar title ="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/> 
   
   {/*<Navbar/>*/}

    <div className="container my-3">
       <Textform heading="Enter Text to Analyze below" mode={mode} />
       {/*<About></About>*/}
    </div>
   
   </>
    
  );
}

export default App;
