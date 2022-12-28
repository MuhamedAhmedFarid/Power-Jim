import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contect from "./pages/contect/Contect";
import Plans from "./pages/plans/Plans";
import Traners from "./pages/traniers/Trainers";
import NoFound from "./pages/noFound/NoFound";
import Gellery from "./pages/gellery/Gellery";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Home />
      <About />
      <Contect />
      <Plans />
      <Traners />
      <NoFound />
      <Gellery />
    </BrowserRouter>
  );
}

export default App;
