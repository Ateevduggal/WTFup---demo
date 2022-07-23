import React, { useEffect, useState } from "react";
import Gym from "./Gym.jpg";
const List = () => {
  const [data, setData] = useState([]);
  const fetchApi = async () => {
    const data = await fetch(
      `https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231`
    );
    const dataJ = await data.json();
    setData(dataJ.data);
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div>
      {data.map((Val) => {
        const {
          gym_name,
          address1,
          address2,
          distance_text,
          duration_text,
          city,
        } = Val;
        return (
          <>
            <div className="d-flex my-3" style={{ backgroundColor: "#131313" }}>
              <img src={Gym} alt={gym_name} id="img" />
              <div className="text-white col-6 ms-5 py-3">
                <p className="fs-4 fw-bold p-0">{gym_name}</p>
                <div className="fs-6">
                  {address2}, {address1}, {city}
                </div>
                <div className="fs-6 my-2">
                  <i class="fa-solid fa-location-arrow bg-transparent text-success fs-5 mx-2"></i>
                  {duration_text}/ {distance_text}
                </div>
                <div className="d-flex justify-content-between mt-5">
                  <p className="pt-3 text-warning fs-5">3600 for 3 months</p>
                  <button
                    className="text-white fs-5 px-2 border-0"
                    style={{ backgroundColor: "#920909" }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default List;
