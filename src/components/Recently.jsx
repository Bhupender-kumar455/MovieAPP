import React, { useState } from "react";
import clip from "../assets/background.mp4";

import "./Recently.css";
const Recently = ({ data, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const renderItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return data.slice(startIndex, endIndex).map((item) => (
      <div key={item.id} className="movie">
        {loading ? (
          <p>Loading</p>
        ) : (
          <img className="movie-image" src={item.image.medium} />
        )}
        <div className="movie-detail">
          <a href={item.url}>{item.name}</a>
        </div>
      </div>
    ));
  };

  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          className="paginationButton"
          key={i}
          onClick={() => handleClick(i)}
          disabled={currentPage === i}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="recently-parent">
      <div className="movie-parent">{renderItems()}</div>
      <div className="pagination">{renderPagination()}</div>
      <h3
        style={{
          textAlign: "center",
          marginTop: "20px",
          color: "#dddddd",
        }}
      >
        Trending{" "}
        <span
          style={{
            color: "#7047bc",
          }}
        >
          Today
        </span>
      </h3>
      <video autoPlay muted loop className="videoParent">
        <source src={clip} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Recently;
