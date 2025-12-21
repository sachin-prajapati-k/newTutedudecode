import { MovieData } from "../../MovieData.tsx/Data";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { IMovieTypes } from "../../../types";
import SearchFilter from "../../Components/Search&filterButtons";
export default function Movies() {
  const Movies = MovieData;

  return (
    <>
      <SearchFilter />
      <div className="d-flex flex-wrap align-items-center justify-content-center row-col-2">
        {Movies.map((Movie: IMovieTypes) => (
          <MovieCard key={Movie.id} {...Movie} />
        ))}
      </div>
    </>
  );
}
