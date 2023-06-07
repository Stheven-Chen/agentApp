import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import Application from './pages/application';
import Commision from './pages/commision';

const App: React.FC = () =>{
  return(
   <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/application" element={<Application/>}/>
        <Route path="/commision" element={<Commision/>}/>
        
      </Routes>
   </Router>
  )
}

export default App;