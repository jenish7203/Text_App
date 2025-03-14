import './App.css';
import Navbar from './Component/Nav/Navbar';

import Home from './Component/Pages/Home'
import About from './Component/Pages/About'
import Services from './Component/Pages/Services'
import ContactUs from './Component/Pages/ContactUs'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Navbar title="Jenish Movaliya - Patel"/>

          <Routes>
            <Route path='/' element={<Home heding="Enter The Text To Analyze Below"/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/contactUs' element={<ContactUs/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
