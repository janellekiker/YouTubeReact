import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        {/* We want to keep this on every page */}
        <Navbar />
        {/* These are out different paths to different webpages */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        {/* We want to keep this on every page */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
