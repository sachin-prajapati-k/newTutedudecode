import { MovieData } from "../../MovieData.tsx/Data";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { IMovieTypes } from "../../../types";
import SearchFilter from "../../Components/Search&filterButtons";
import { useState, useMemo } from "react";
export default function Movies() {
  const [searchText, setSearchText] = useState("");
  const [Movies, setMovies] = useState(MovieData);

  const filteredMovies = useMemo(() => {
    if (!searchText.trim()) {
      return Movies;
    }
    return Movies.filter((movie: any) => {
      const searchLower = searchText.toLowerCase();
      return (
        movie.title.toLowerCase().includes(searchLower) ||
        movie.description.toLowerCase().includes(searchLower) ||
        movie.genre.some((g: string) =>
          g.toLowerCase().includes(searchLower)
        ) ||
        movie.language.toLowerCase().includes(searchLower) ||
        movie.cast.some((c: string) => c.toLowerCase().includes(searchLower))
      );
    });
  }, [Movies, searchText]);
  setMovies(filteredMovies);
  return (
    <>
      <SearchFilter searchText={searchText} setSearchText={setSearchText} />
      <div className="d-flex flex-wrap align-items-center justify-content-center row-col-2">
        {filteredMovies.map((Movie: IMovieTypes) => (
          <MovieCard key={Movie.id} {...Movie} />
        ))}
      </div>
    </>
  );
}
