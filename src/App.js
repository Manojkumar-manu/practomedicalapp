import React from "react";
import { Footer } from "./Components/Footer/Footer";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Homepage from "./Components/home/Homepage";
import { Navbar } from "./Components/Navbar/Navbar";
import { Finddoctors } from './Components/Finddoctors/Finddoctors';
import Videoconsult from './Components/Videoconsult/Videoconsult';
import Testlabslider from "./Components/LabTest/SliderImage/Testlabslider";
import SliderImage from "./Components/Medicines/SliderImage/SliderImage";
import Login from "./Components/Login/Login";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/findDoctors" element={<Finddoctors/>} />
        <Route path="/VideoConsult" element={<Videoconsult />} />
        <Route path="/medicine" element={<SliderImage/> } />
        <Route path="/labtest" element={<Testlabslider />} />
        <Route path="/login" element={<Login/> } />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
