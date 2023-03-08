import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* We want to keep this on every page */}
        <Navbar />
        {/* These are out different paths to different webpages */}
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
        {/* We want to keep this on every page */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
