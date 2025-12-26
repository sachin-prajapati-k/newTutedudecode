import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "../Movie/Pages/MoviePage";
import MovieHomePage from "../Movie/Pages/HomePage";
import NavBar from "../Movie/Components/Navbar";
import WebSeries from "../Movie/Pages/WebSeriesHomePag";
import TvShows from "../Movie/Pages/TvShowsPage";

export default function MyRouting() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MovieHomePage />} />
        <Route path="/home" element={<MovieHomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/web-series" element={<WebSeries />} />
        <Route path="/tv-shows" element={<TvShows />} />
      </Routes>
    </Router>
  );
}
