import { MovieData } from "../../MovieData.tsx/MovieData";
import { TVShowsData } from "../../MovieData.tsx/TvShowsData";
import { WebSeriesData } from "../../MovieData.tsx/WebSeriesData";
import SearchFilter from "../Search&FilterComponents";
import GenreFilter from "../Search&FilterComponents/GenreFilter";

export default function FilterBox({ filterData }: any) {
  const GiveData = (value: number) => {
    switch (value) {
      case 1:
        return { MovieData };
      case 2:
        return { WebSeriesData };
      case 3:
        return { TVShowsData };
    }
  };
  return (
    <>
      <SearchFilter />
      <GenreFilter />
    </>
  );
}
