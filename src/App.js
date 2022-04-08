import './App.css';
import React,{ useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
// } from "react-router-dom";

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type})
    setTimeout(() => {
      setAlert(null)
    }, 1000)
  }
  const togleMode = () => {
    if (mode === "light"){
        setMode("dark");
        document.body.style.backgroundColor = "#ddd";
        showAlert("Dark Mode Enabled", "success")
    } else {
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Light Mode Enabled", "success")
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" aboutText="About" mode={mode} togleMode={togleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Switch>
      <Route exact path="/about"> */}
        {/* <About mode={mode}/> */}
      {/* </Route>
      <Route exact path="/"> */}
      <TextForm heading="Enter the text to analize" mode={mode} showAlert={showAlert}/>
      {/* </Route>
    </Switch>       */}
    </div>    
    {/* </Router> */}
    </>
  );
}

export default App;
