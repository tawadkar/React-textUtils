
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState } from 'react';
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";*/

function App() {
  const [mode,setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert,setAlert] =  useState(null)

  const toggleMode =() =>{

    if(mode ==='light'){

      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been Enabled","success");
     // document.title = 'AITA - Dark Mode';
     /*setInterval(()=>{
      document.title = 'Text Utils Amazing Mode';
     },2000);

     setInterval(()=>{
      document.title = 'Install TextUtils now';
     },1500);*/

    }
    else{

      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","success");
      //document.title = 'AITA - Light Mode';

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
    {/*<Router>*/}
    <Navbar title ="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/> 
    <Alert alert={alert}/>
    <div className="container my-3">
   {/*<Switch>*/}
      {/* ./users--->component 1
      //users/home--->compenent 2*/}
         {/*<Route exact path="/about">
            <About/>
      </Route>*/}
         {/*<Route exact path="/">*/}
            <Textform showAlert={showAlert} heading="Enter Text to Analyze below" mode={mode} />
         {/*</Route>*/}
   {/*</Switch>*/}
    </div>
   {/*</Router>*/}
   </>
    
  );
}

export default App;
