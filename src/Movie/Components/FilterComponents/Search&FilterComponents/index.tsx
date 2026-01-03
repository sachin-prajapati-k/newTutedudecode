import { FormControl } from "react-bootstrap";
import { useFilter } from "../FilterContext";

export default function SearchFilter({
  Title = "Bollywod Hits",
  searchText,
  setSearchText,
  searchlenght,
  setSort,
}: any) {
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
          <FormControl as="select">
            <option onClick={() => setSort("genre")}>hello</option>
            <option>key</option>
          </FormControl>
        </div>
        <p className="mt-1">
          {searchText
            ? `Found ${searchlenght}  ${
                searchlenght !== 1 ? "results" : "result"
              } for "${searchText}"`
            : ""}
        </p>
      </div>
    </>
  );
}
