import { MovieData } from "../../MovieData.tsx/Data";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { IMovieTypes } from "../../../types";
export default function Movies() {
  const Movies = MovieData;

  return (
    <>
      <div className="d-flex flex-wrap align-items-center justify-content-center -2">
        {Movies.map((Movie: IMovieTypes) => (
          <MovieCard key={Movie.id} {...Movie} />
        ))}
      </div>
    </>
  );
}
