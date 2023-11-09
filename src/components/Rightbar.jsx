import React, { useState } from "react";
import "./Rightbar.css";
const Rightbar = ({ data }) => {
  return (
    <>
      {data &&
        data.map((item, index) => {
          return (
            <div key={item.id} className="rightMovie-parent">
              <div className="rightMovie">
                <h2
                  style={{
                    color: "#7147bc",
                    padding: "0 5px 0 0",
                    textDecoration: "double",
                  }}
                >
                  {index + 1}
                </h2>
                <img className="rightMovie-image" src={item.image.medium} />
                <div className="rightMovie-detail">
                  <h6>{item.name}</h6>
                  <a href={item.url}>Go watch</a>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Rightbar;
