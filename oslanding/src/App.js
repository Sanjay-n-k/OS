import React from 'react'
import OptimumSyncPage from './main'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ContactPage from "./ContactPage"
import AboutPage from "./components/AboutPage"
function App() {
  return (
    // <div>App</div>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<OptimumSyncPage/>}/>
    <Route path="/contact" element={<ContactPage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    </Routes></BrowserRouter>
  )
}
export default App