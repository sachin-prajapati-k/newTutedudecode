export default function SearchFilter({
  Title = "Bollywod Hits",
  searchText,
  setSearchText,
  searchlenght,
}: any) {
  return (
    <>
      <div
        className="mt-2 p-0 container flex-column align-items-center  "
        style={{ color: "yellow" }}
      >
        <div className="m-0">
          <h1>{Title}</h1>
        </div>
        <div className="container p-0 justify-content-center">
          <input
            className="form-control w-50 w-lg-50 w-sm-25 input-box"
            type="text"
            placeholder="Searh here"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <p className="mt-1 ">
          Founded {searchlenght} results for "{searchText}"
        </p>
      </div>
    </>
  );
}
