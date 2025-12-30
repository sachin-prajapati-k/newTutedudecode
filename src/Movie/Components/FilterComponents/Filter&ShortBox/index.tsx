import { useFilter } from "../FilterContext";
import SearchFilter from "../Search&FilterComponents";
import GenreFilter from "../Search&FilterComponents/GenreFilter";

export default function FilterBox() {
  const { search, setSearch, genre, setGenre, genres } = useFilter();
  return (
    <>
      <SearchFilter value={search} setSearchText={setSearch} />
      <GenreFilter genres={genres} handleFilterButton={setGenre} />
    </>
  );
}
