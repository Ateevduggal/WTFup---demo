import React, { useState, useEffect } from "react";

const Hero = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div id="whole">
      <nav
        className={
          navbar
            ? "navbar default navbar-expand-lg navbar-dark p-0 fixed-top"
            : "navbar navbar-expand-lg navbar-dark p-0 fixed-top"
        }
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="https://wtfup.me/">
            WTF
          </a>
          <div className="navbar-nav ms-auto">
            <a
              className="mx-3 nav-link"
              style={{ color: "white", opacity: 0.6 }}
              href="#"
            >
              Fitness
            </a>
            <a
              className="mx-3 nav-link"
              style={{ color: "white", opacity: 0.6 }}
              href="#"
            >
              Nutrition
            </a>
            <a className="mx-3 nav-link active" href="#">
              Gyms
            </a>
            <a
              className="mx-3 nav-link"
              style={{ color: "white", opacity: 0.6 }}
              href="#"
            >
              Become WTF Partner
            </a>
            <a
              className="mx-3 nav-link"
              style={{ color: "white", opacity: 0.6 }}
              href="#"
            >
              About Us
            </a>
          </div>
          <button className="btn px-3 py-1">Log In</button>
        </div>
      </nav>
    </div>
  );
};

export default Hero;
