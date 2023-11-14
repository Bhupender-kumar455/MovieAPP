import React, { useState } from "react";
import "./Carousel.css";

function Carousel({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        <ul className="carousel-list">
          {data.map((item, index) => (
            <li
              style={{
                textAlign: "center",
              }}
              key={index}
              className={`carousel-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div className="card">
                <img src={item.image.original} alt="movie banner" />
                <div className="card-image-description">
                  <h1>{item.name}</h1>
                  <p>
                    <strong>Genres:</strong> {item.genres}
                  </p>
                  <p className="summary">{item.summary.slice(0, 400)}</p>
                  <a
                    href={item.url}
                    style={{ textDecoration: "none", marginBottom: "20px" }}
                  >
                    Wanna watch?
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button className="btn btn-prev" onClick={handlePrev}>
        <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555">
          <path d="M10.605 12.727 5.656 7.776l4.949-4.948L7.777 0 0 7.776l7.777 7.779 2.828-2.828z" />
        </svg>
      </button>
      <button className="btn btn-next" onClick={handleNext}>
        <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555">
          <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
        </svg>
      </button>
    </div>
  );
}

export default Carousel;
