import React, { useEffect, useState } from "react";
import fetchFromAPI from "../utils/fetchFromAPI";

const Onclick = ({ edit }) => {
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   console.log(edit);
  //   fetchFromAPI(`shows`).then((data) => {
  //     let response = data.data;
  //     const sortedMovies = sortMovieByGenre(response);
  //     setMovies(sortedMovies);
  //   });
  // }, []);

  // const sortMovieByGenre = (movies) => {
  //   const sortedmovies = movies.sort((a, b) => {
  //     if (a.genres === edit) {
  //       return 1;
  //     } else if (b.genres === edit) {
  //       return -1;
  //     } else {
  //       return 0;
  //     }
  //   });
  //   console.log(sortedmovies);
  //   return sortedmovies;
  // };
  console.log(edit);
  return <div></div>;
};

export default Onclick;
