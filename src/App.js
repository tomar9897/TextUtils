
import React, {useState} from 'react'
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/navbar';
import About from './components/About';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); //whether mode dark or light
  const [alert, setAlert] = useState(null);

  const showAlert= (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
  }

 const toggleMode = (cls)=>{
  removeBodyClasses();
  document.body.classList.add('bg-'+cls)
  if(mode=== 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'white';     //#3e3a4a---- in case of use of darkmode enable
    showAlert("Dark mode is enabled", "success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode is enabled", "success");
  }
 }
  return (
    <>
     <Router>
    <Navbar textfile="ClipBoard" mode={mode} toggleMode={toggleMode}/>
    <div className='container'>
     <Alert alert={alert}/>
    {/* <About/> */}
    
    <Routes>
          <Route path="/about" element={<About mode={mode} />}>
            </Route>
          <Route path="/" element={<Textform heading="Enter Your Text Here" mode={mode}/>}>
          </Route>
    </Routes>
    
    {/* <Textform heading="Enter Your Text Here" mode={mode}/> */}
     
    </div>
    </Router>
   
    
    
    
    </>
  );
}

export default App;

