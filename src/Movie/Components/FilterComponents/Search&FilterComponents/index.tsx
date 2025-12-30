export default function SearchFilter({
  Title = "Bollywod Hits",
  searchText,
  setSearchText,
  searchlenght,
}: any) {
  
  // const filteredMovies = MovieData.filter((movie: any) => {
  //   const searchLower = searchText.toLowerCase();

  //   const matchesSearch =
  //     !searchLower ||
  //     movie.title.toLowerCase().includes(searchLower) ||
  //     movie.description.toLowerCase().includes(searchLower) ||
  //     movie.genre?.some((g: string) => g.toLowerCase().includes(searchLower)) ||
  //     movie.language.toLowerCase().includes(searchLower) ||
  //     String(movie.release_year).toLowerCase().includes(searchLower) ||
  //     movie.cast?.some((c: string) => c.toLowerCase().includes(searchLower));

  //   // const matchesYear= !searchLower || movie.year

  //   const matchesGenre =
  //     selectedGenre === "all" ||
  //     movie.genre?.some((g: string) => g.toLowerCase().includes(selectedGenre));

  //   return matchesSearch && matchesGenre;
  // });

  // const searchlenght = filteredMovies.length;

  return (
    <>
      <div className="mt-3 container flex-column align-items-center text-white p-0">
        <div className="m-0">
          <h1 style={{ color: "yellow" }}>{Title}</h1>
        </div>
        <div className="container p-0 justify-content-center">
          <input
            className="form-control w-50 w-lg-50 w-sm-25"
            type="text"
            placeholder="Search here"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <p className="mt-1">
          Found {searchlenght} result{searchlenght !== 1 ? "s" : ""} for "
          {searchText}"
        </p>
      </div>
    </>
  );
}
