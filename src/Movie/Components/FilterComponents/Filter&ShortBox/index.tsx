import { useFilter } from "../FilterContext";
import SearchFilter from "../Search&FilterComponents";
import GenreFilter from "../Search&FilterComponents/GenreFilter";

export default function FilterBox() {
  const {search,setSearch,category,setCategory,genre,setGenre,genres}=useFilter()
  return (
    <>
      <SearchFilter value={search} onChange={setSearch} />
      <GenreFilter genres={genres}  />
    </>
  );
}
