import Button from "react-bootstrap/esm/Button";
import { IMovieTypes, IRating } from "../../../types";
import "./MovieCard.d.css";

export default function MovieCard({ ...MovieData }: IMovieTypes) {
  const {
    title,
    release_year,
    genre,
    imdb_rating,
    popularity,
    description,
    poster_url,
    language,
    watch_url,
    trailer_url,
  } = MovieData;
  const handleClick = () => {
    return trailer_url;
  };
  const ratingValue = imdb_rating ?? popularity;
  const ratingScale: any = imdb_rating ? "IMDB_Rating" : "Popularity";
  const buttonColor = (
    value: string | number | undefined,
    ratingScale: IRating
  ): string => {
    const rating = Number(value);

    if (Number.isNaN(rating)) return "gray";
    if (rating >= 10) return "green";
    if (rating > 8) return "lightgreen";
    if (rating > 4) return "orange";

    return "red";
  };

  return (
    <>
      <div
        className=" m-sm-2 m-lg-5 col-lg-2 mt-3 col-xm-3  "
        onClick={handleClick}
      >
        <div className="card card-box h-100">
          <a
            href={watch_url}
            style={{ textDecoration: "none" }}
            target="blank"
            rel="noopener noreferrer"
          >
            <div className="card-header fs-5 fw-bold " style={{color:'orange'}}>{title}</div>
            <div className="card-img-top poster-img m-0">
              {poster_url ? (
                <img src={poster_url} alt="Poster" className="Movie-img" />
              ) : (
                ""
              )}
            </div>
          </a>
          <div className="card-body justify-content-center pt-0">
            <span>
              {language} ({genre?.join(", ")})
            </span>
            <p>{release_year}</p>
            <p className="card-text description">{description}</p>
            <div className="text-center mt-auto">
              <Button
                className="rating"
                style={{
                  backgroundColor: buttonColor(ratingValue, ratingScale),
                  color: "black",
                }}
                onClick={() => window.open(trailer_url, "_blank")}
              >
                {ratingScale}: {ratingValue} / 10
              </Button>
            </div>
          </div>
        </div>
        <div className="card-footer"></div>
      </div>
    </>
  );
}
