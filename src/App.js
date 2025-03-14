import { useState } from 'react';
import './App.css';
import Navbar from './Component/Nav/Navbar';

import Home from './Component/Pages/Home'
import About from './Component/Pages/About'
import Services from './Component/Pages/Services'
import ContactUs from './Component/Pages/ContactUs'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Alert from './Component/Alert';


function App() {

  // Light & Dark Mode 
  const [mode, setMode] = useState('light');

  // Alert Box 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=> {
      setAlert(null);
    }, 2500);
  };

  const removeBosyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
  }

  const toggleMode = (cls) => {
    console.log(cls);
    removeBosyClasses();
    document.body.classList.add('bg-'+cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode Has Been Enabled", "success : ");
      document.title = 'Text - Dark Mode';

      // setInterval(()=>{
      //   document.title = "TextUtils Is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);

    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enabled", "success : ");
      document.title = "Text - Light Mode";
    }
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar title="Jenish Movaliya" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                heding="Enter The Text To Analyze Below"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/services" element={<Services mode={mode} />} />
          <Route exact path="/contactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
