import "./MovieDetails.css";
import Footer from "./Footer/Footer";

const MovieDetails = ({selectedMovie, chooseMovie}) => {
  return (
    <div className="overlay-single-movie">
      <img src={selectedMovie.backdrop_path} className="backdrop"/>
      <div className="movie-info">
        <img src={selectedMovie.poster_path} class="movie-poster" />
        <div className="details">
          <h2>{selectedMovie.title} - {Math.round(selectedMovie.average_rating)}/10</h2>
          <ul>
            {selectedMovie.overview && <li>Overview: {selectedMovie.overview}</li>}
            {selectedMovie.genres && <li>Genres: {selectedMovie.genres}</li>}
            {selectedMovie.budget && <li>Budget: {selectedMovie.budget}</li>}
            {selectedMovie.revenue && <li>Revenue: {selectedMovie.revenue}</li>}
            {selectedMovie.runtime && <li>Runtime: {selectedMovie.runtime}</li>}
            {selectedMovie.tagline && <li>Tagline: {selectedMovie.tagline}</li>}
          </ul>
        </div>
      </div>
      <Footer chooseMovie={chooseMovie} />
    </div>
  )
}

export default MovieDetails;