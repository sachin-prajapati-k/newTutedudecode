import { useFilter } from "../../Components/FilterComponents/FilterContext";
import MovieCard from "../../Components/MovieCard/MovieCard";

export default function Songs() {
  const { filterData } = useFilter();
  return (
    <>
      <div className="d-flex flex-wrap align-items-center justify-content-center  row-col-2">
        {filterData.map((item: any) => (
          <MovieCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
