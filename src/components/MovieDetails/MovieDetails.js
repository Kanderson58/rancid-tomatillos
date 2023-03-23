import "./MovieDetails.css";
import Footer from "./Footer/Footer";

const MovieDetails = ({selectedMovie, chooseMovie}) => {
  return (
    <div className="overlay-single-movie">
      <img src={selectedMovie.backdrop_path} className="backdrop"/>
      <div className="movie-info">
        <img src={selectedMovie.poster_path} className="movie-poster" />
        <div className="details">
          <h2>{selectedMovie.title} - {Math.round(selectedMovie.average_rating)}/10</h2>
          <ul>
            {selectedMovie.overview ? <li><span className="category">Overview:</span> {selectedMovie.overview}</li> : null}
            {selectedMovie.genres ? <li><span className="category">Genres:</span> {selectedMovie.genres.map((genre, index) => index ? ", " + genre : genre)}</li>: null}
            {selectedMovie.budget ? <li><span className="category">Budget:</span> ${selectedMovie.budget.toLocaleString()}</li>: null}
            {selectedMovie.revenue ? <li><span className="category">Revenue:</span> ${selectedMovie.revenue.toLocaleString()}</li>: null}
            {selectedMovie.runtime ? <li><span className="category">Runtime:</span> {selectedMovie.runtime} minutes</li>: null}
            {selectedMovie.tagline ? <li><span className="category">Tagline:</span> {selectedMovie.tagline}</li>: null}
          </ul>
        </div>
      </div>
      <Footer chooseMovie={chooseMovie} />
    </div>
  )
}

export default MovieDetails;