import React from "react";


const Navbar = () => {
  return (
    <React.StrictMode>
      <div className="header" id="home">
        <div className="logo">
        <a href="/">
          <img src={require("../images/logo.png")} alt="logo" />
          </a><a href="/"><h1>Palh</h1></a>
        </div>
        <div className="pages">
          <ul>
            <li>
              <a href="#aboutpage">about</a>
            </li>
            <li>
              <a href="#coursespage">courses</a>
            </li>
            <li>
              <a href="#registrationpage">registration</a>
            </li>
          </ul>
        </div>
        <div className="searchbox">
          <input placeholder="Search"></input>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Navbar;
