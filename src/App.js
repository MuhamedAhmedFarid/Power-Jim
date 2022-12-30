import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contect from './pages/contect/Contect'
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";
import NoFound from "./pages/noFound/NoFound";
import Gellery from './pages/gellery/Gellery'
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      
    <Routes>
      <Route index element={<Home />} /> 
      <Route path="about" element={<About />} />
      <Route path="contect" element={<Contect />} />
      <Route path="gellery" element={<Gellery />} />
      <Route path="plans" element={<Plans />} />
      <Route path="noFound" element={<NoFound />} />  
      <Route path="trainers" element={<Trainers />} /> 
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
