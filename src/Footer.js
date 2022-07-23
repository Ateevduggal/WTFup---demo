import React from "react";
import { icons, links, explore, contact } from "./Data";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row whole4">
        <div className="col-4 mt-2 text-center">
          <span className="navbar-brand text-white">WTF</span>
          <div className="d-flex justify-content-center mt-4 pt-3">
            {icons.map((Val) => {
              const { icon, color, link } = Val;
              return (
                <>
                  <span className="icon mx-3">
                    <a href={`${link}`} target="_blank">
                      <i
                        className={`${icon} fs-2`}
                        style={{ color: `${color}` }}
                      ></i>
                    </a>
                  </span>
                </>
              );
            })}
          </div>
        </div>
        <div className="col-3">
          <p className="fw-bold text-white fs-4">Quick Links</p>
          {links.map((Val) => {
            const { name, link } = Val;
            return (
              <>
                <p>
                  <a
                    href={`${link}`}
                    className="text-white text-decoration-none"
                  >
                    {name}
                  </a>
                </p>
              </>
            );
          })}
        </div>
        <div className="col-2">
          <p className="fw-bold text-white fs-4">Explore</p>
          {explore.map((Val) => {
            const { name, link } = Val;
            return (
              <>
                <p>
                  <a
                    href={`${link}`}
                    className="text-white text-decoration-none"
                  >
                    {name}
                  </a>
                </p>
              </>
            );
          })}
        </div>
        <div className="col-3">
          <p className="fw-bold text-white fs-4">Contact</p>
          {contact.map((Val) => {
            const { icon, text, link } = Val;
            return (
              <>
                <span className="d-flex">
                  <i className={`${icon}`}></i>
                  <p className="text-white mx-4 fs-6">{text}</p>
                  <a
                    href={`mailto: ${link}`}
                    className="text-white text-decoration-none fs-6"
                  >
                    {link}
                  </a>
                </span>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
