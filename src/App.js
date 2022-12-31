import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";
import NoFound from "./pages/noFound/NoFound";
import Gallery from './pages/gallery/Gallery';

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      
    <Routes>
      <Route index element={<Home />} /> 
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact/>} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="plans" element={<Plans />} />
      <Route path="noFound" element={<NoFound />} />  
      <Route path="trainers" element={<Trainers/>} />  
     
      
    </Routes>
    
    <Footer/>
    
    </BrowserRouter>
  );
}

export default App;
