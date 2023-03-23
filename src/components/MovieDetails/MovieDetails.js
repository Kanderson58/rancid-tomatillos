import "./MovieDetails.css";
import Footer from "./Footer/Footer";

const MovieDetails = ({selectedMovie, chooseMovie}) => {
  return (
    <div className="overlay-single-movie">
      <img src={selectedMovie.backdrop_path} className="backdrop"/>
      <div className="movie-info">
        <h2>{selectedMovie.title} - {selectedMovie.average_rating}</h2>
        <ul>
          {selectedMovie.overview && <li>Overview: {selectedMovie.overview}</li>}
          {selectedMovie.genres && <li>Genres: {selectedMovie.genres}</li>}
          {selectedMovie.budget && <li>Budget: {selectedMovie.budget}</li>}
          {selectedMovie.revenue && <li>Revenue: {selectedMovie.revenue}</li>}
          {selectedMovie.runtime && <li>Runtime: {selectedMovie.runtime}</li>}
          {selectedMovie.tagline && <li>Tagline: {selectedMovie.tagline}</li>}
        </ul>
      </div>
      <Footer chooseMovie={chooseMovie} />
    </div>
  )
}

export default MovieDetails;