import "./index.css";

export default function NavBar() {
  return (
    <>
      <div className="container-fluid bg-purple-custom d-flex align-items-center justify-content-between h-100 p-3">
        <div className="site-brand align-items-center d-flex gap-2">
          <div>Logo</div>
          <div className="brand-name">BrandName</div>
        </div>
        <div className=" gap-2 row border me-4 ">
          <div className="col-auto border">Home</div>
          <div className="col-auto border">Movies</div>
          <div className="col-auto border">Songs</div>
          <div className="col-auto border">Web Series</div>
        </div>
      </div>
    </>
  );
}
