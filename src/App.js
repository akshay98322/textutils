import './App.css';
import React,{ useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';


function App() {
  const [mode, setMode] = useState(false);
  return (
    <>
    <Navbar title="TextUtils" aboutText="About" mode={mode}/>
    <div className="container my-3">
      <TextForm heading="Enter the text to analize" />
      {/* <About/> */}
    </div>    
    </>
  );
}

export default App;
