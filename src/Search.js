import React from "react";
import List from "./List";

const Search = () => {
  return (
    <div className="container-fluid">
      <div className="row" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="d-flex justify-content-center">
          <div class="d-flex align-items-center border border-2 border-light col-10 mt-5 py-2 px-3">
            <span>
              <i className="fas fa-search"></i>
            </span>
            <input
              type="search"
              class="form-control border-0"
              style={{ backgroundColor: "transparent" }}
              placeholder="Search gym name here..."
              aria-label="Search"
            />
            <button
              className="ms-auto py-2 px-3 mx-2"
              style={{ backgroundColor: "#920909" }}
            >
              <i class="fa-solid fa-location-dot fs-4 text-white"></i>
            </button>
            <button
              className="ms-auto py-1 px-4 fw-bold fs-5 text-white"
              style={{ backgroundColor: "#920909" }}
            >
              Clear
            </button>
          </div>
        </div>
        <div className="row my-5 ">
          <div className="col-md-3 ms-5">
            <h1 className="text-white">Filters</h1>
            <h5 className="my-3 text-white">Location</h5>
            <div
              class="d-flex align-items-center border border-2 border-secondary col-10 my-4 py-2 px-3"
              style={{ backgroundColor: "#2e2e2e" }}
            >
              <span>
                <i className="fas fa-search"></i>
              </span>
              <input
                type="search"
                id="form1"
                class="form-control border-0 text-white"
                style={{ backgroundColor: "transparent" }}
                placeholder="Enter location"
                aria-label="Search"
              />
            </div>
            <h5 className="my-3 text-white">Price</h5>
            <div className="d-flex justify-content-around col-10">
              <div
                class="border border-2 border-secondary col-5 mt-2 py-2 px-3"
                style={{ backgroundColor: "#2e2e2e" }}
              >
                <input
                  type="search"
                  id="form1"
                  class="form-control border-0"
                  style={{ backgroundColor: "transparent" }}
                  placeholder="Min"
                  aria-label="Search"
                />
              </div>
              <div
                class="border border-2 border-secondary col-5 mt-2 py-2 px-3"
                style={{ backgroundColor: "#2e2e2e" }}
              >
                <input
                  type="search"
                  id="form1"
                  class="form-control border-0"
                  style={{ backgroundColor: "transparent" }}
                  placeholder="Max"
                  aria-label="Search"
                />
              </div>
            </div>
            <h5 className="my-3 text-white mt-4">Cities</h5>
            <select
              className="form-control-lg col-10 text-white border border-secondary border-2"
              id="select"
              style={{ backgroundColor: "#2e2e2e" }}
            >
              <option disabled>Select City</option>
              <option value="NeD">New Delhi</option>
              <option value="Nd">Noida</option>
              <option value="Gd">Gaziabad</option>
              <option value="De">Delhi</option>
            </select>
          </div>
          <div className="col-md-8">
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
