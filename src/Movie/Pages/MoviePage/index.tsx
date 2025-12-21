import { MovieData } from "../../MovieData.tsx/Data";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { IMovieTypes } from "../../../types";
import SearchFilter from "../../Components/Search&filterButtons";
import { useState } from "react";
export default function Movies() {
  const [searchText, setSearchText] = useState("");
  const [Movies, setMovies] = useState(MovieData);

  const filteredData = Movies.filter((movie: any) => {
    const searchLower = searchText.toLowerCase();
    return (
      movie.title.toLowerCase().includes(searchLower) ||
      movie.description.toLowerCase().includes(searchLower) ||
      movie.genre.some((g: string) => g.toLowerCase().includes(searchLower)) ||
      movie.language.toLowerCase().includes(searchLower) ||
      movie.cast.some((c: string) => c.toLowerCase().includes(searchLower))
    );
  });
  const searchlenght = filteredData.length;

  return (
    <>
      <SearchFilter
        searchText={searchText}
        setSearchText={setSearchText}
        searchlenght={searchlenght}
      />
      <div className="d-flex flex-wrap align-items-center justify-content-center row-col-2">
        {filteredData.map((Movie: IMovieTypes) => (
          <MovieCard key={Movie.id} {...Movie} />
        ))}
      </div>
    </>
  );
}
