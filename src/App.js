
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState } from 'react';

function App() {
  const [mode,setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert,setAlert] =  useState(null)

  const toggleMode =() =>{

    if(mode ==='light'){

      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been Enabled","success");
    }
    else{

      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","success");
    }

  }

  const showAlert=(message,type)=>{

   setAlert({

    msg:message,
    type:type

   })

   setTimeout(() =>{
    setAlert(null);

   },3000);

  }
  return (
    <>
   
    <Navbar title ="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/> 
    <Alert alert={alert}/>

    <div className="container my-3">
       <Textform showAlert={showAlert} heading="Enter Text to Analyze below" mode={mode} />
       {/*<About></About>*/}
    </div>
   
   </>
    
  );
}

export default App;
