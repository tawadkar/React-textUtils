import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function formatName(user){
  return user.firstName+ ' '+user.lastName;

}

const user = {
firstName: 'Tanmay',
lastName:'Wadkar'

};
<h1>Hello, {formatName(user)}!</h1>



/*function getGreetings(user){
 if(user){
   return <h1>Hello, {formatName(user)}!</h1>

 }
   return <h1>Hello,Stranger.</h1>
 
}
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);*/




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
