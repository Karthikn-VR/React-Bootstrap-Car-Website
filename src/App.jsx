import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import CarHomepage from "./components/CarHomepage/CarHomepage";
import Models from "./Models";
import AboutUs from "./components/AboutUs/AboutUs";
import  CarCollections from "./components/CarCollectionspage/CarCollection"
import './App.css'
import Login from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CarHomepage key="home" />} />
        <Route path="/aboutus" element={<AboutUs key="about" />} />
        <Route path="/CarModels" element={<Models key="models" />} />
        <Route path="/collections" element={<CarCollections key="collections" />} />
        <Route path="/login" element={<Login key="login" />} />
     </Routes>

    </BrowserRouter>

  );
}

export default App;
