import { useFilter } from "../FilterContext";
import SearchFilter from "../Search&FilterComponents";
import GenreFilter from "../Search&FilterComponents/GenreFilter";
import songs from "../../../../assests/songs.mp3";
export default function FilterBox() {
  const { search, setSearch, setGenre, searchlenght, genres, sort, setSort } =
    useFilter();
  return (
    <>
      <audio controls src={songs} />

      <SearchFilter
        searchText={search}
        setSearchText={setSearch}
        searchlenght={searchlenght}
        sort={sort}
        setSort={setSort}
      />
      <GenreFilter genres={genres} handleFilterButton={setGenre} />
    </>
  );
}
