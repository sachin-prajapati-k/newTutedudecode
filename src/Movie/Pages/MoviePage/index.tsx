import { useState } from "react";
import { MovieData } from "../../MovieData.tsx/MovieData";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { IMovieTypes } from "../../../types";
import SearchFilter from "../../Components/FilterComponents/Search&FilterComponents";
import GenreFilter from "../../Components/FilterComponents/Search&FilterComponents/GenreFilter";

export default function Movies() {
 


  return (
    <>
      <div className="d-flex flex-wrap align-items-center justify-content-center  row-col-2">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((Movie: IMovieTypes) => (
            <MovieCard key={Movie.id} {...Movie} />
          ))
        ) : (
          <div className="text-center mt-4 " style={{ color: "rosybrown" }}>
            <h1>No movies found</h1>
            <h2>Please adjust your search</h2>
          </div>
        )}
      </div>
    </>
  );
}
