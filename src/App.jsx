import React from "react";
import Navbar from "./components/Navbar";
import Home from './components/Home'
import About from './components/About'
import Courses from './components/Courses'
import Registration from './components/Registration'
import Footer from './components/Footer'

const App = () => {
  return (
    <React.StrictMode>
      <Navbar />
      <Home />
      <About />
      <Courses />
      <Registration />
      <Footer />
    </React.StrictMode>
  );
};

export default App;
