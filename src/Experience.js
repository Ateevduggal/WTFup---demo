import React from "react";
import { data } from "./Data";

const Experience = () => {
  return (
    <div className="container-fluid">
      <div className="row whole3">
        <div className="col-md-5 text-center">
          <h1 className="display-4 my-3 text-white">
            WTF Fitness <br /> Experience?
          </h1>
          <div className="d-flex justify-content-center">
            <div className="rect me-4"></div>
            <h2 style={{ color: "#f5d5d5" }} className="mt-2">
              @ your regular <br /> gym cost?
            </h2>
          </div>
        </div>
        <div className="col-md-7 d-flex justify-content-evenly align-items-end mb-4">
          {data.map((Val) => {
            const { icon, text } = Val;
            return (
              <>
                <div className="card pt-3">
                  <span>
                    <i className={`fa-solid ${icon}`}></i>
                  </span>
                  <div className="card-body">
                    <p className="card-text">{text}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
