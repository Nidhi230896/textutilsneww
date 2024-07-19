// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');  // Whether dark mode is enabled or not
  const [alert, setAlert] = useState (null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtilis - Dark Mode';
      // setTimeout(() => {
      //   document.title = 'TextUtils is Amazing Mode'
      // }, 4000);
      // setTimeout(() => {
      //   document.title = 'Install TextUtils Now'
      // }, 2000);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtilis - Light Mode';
    }
  }
  return (
    <>
    <Router>
      {/* {<Navbar title="TextUtils" aboutText="About TextUtils" />} */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar /> */}
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          {/* /users --> Component 1
          /users/home --> Component 2 */}
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
