import { useState } from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { IMovieTypes } from "../../../types";
import SearchFilter from "../../Components/FilterComponents/Search&FilterComponents";
import GenreFilter from "../../Components/FilterComponents/Search&FilterComponents/GenreFilter";
import { TVShowsData } from "../../MovieData.tsx/TvShowsData";

export default function TvShows() {
  const [searchText, setSearchText] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");

  const genres = [
    "All",
    ...new Set(TVShowsData.flatMap((item: any) => item.genre ?? [])),
  ];

  const handleFilterButton = (searchGenre: string) => {
    if (searchGenre === "all") {
      setSelectedGenre("all");
    } else {
      setSelectedGenre(searchGenre);
    }
  };

  const filteredTvShows = TVShowsData.filter((shows: any) => {
    const searchLower = searchText.toLowerCase();

    const matchesSearch =
      !searchLower ||
      shows.title.toLowerCase().includes(searchLower) ||
      shows.description.toLowerCase().includes(searchLower) ||
      shows.genre?.some((g: string) => g.toLowerCase().includes(searchLower)) ||
      shows.language.toLowerCase().includes(searchLower) ||
      String(shows.release_year).toLowerCase().includes(searchLower) ||
      shows.cast?.some((c: string) => c.toLowerCase().includes(searchLower));

    // const matchesYear= !searchLower || movie.year

    const matchesGenre =
      selectedGenre === "all" ||
      shows.genre?.some((g: string) => g.toLowerCase().includes(selectedGenre));

    return matchesSearch && matchesGenre;
  });

  const searchlenght = filteredTvShows.length;

  return (
    <>
      <SearchFilter
        searchText={searchText}
        setSearchText={setSearchText}
        searchlenght={searchlenght}
      />
      <GenreFilter handleFilterButton={handleFilterButton} genres={genres} />
      <div className="d-flex flex-wrap align-items-center justify-content-center  row-col-2">
        {filteredTvShows.length > 0 ? (
          filteredTvShows.map((Shows: IMovieTypes) => (
            <MovieCard key={Shows.id} {...Shows} />
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
