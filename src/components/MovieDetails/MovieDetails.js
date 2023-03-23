import "./MovieDetails.css";
import Footer from "./Footer/Footer";
import PropTypes from 'prop-types';

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

MovieDetails.propTypes = {
  selectedMovie: PropTypes.shape({
    backdrop_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    average_rating: PropTypes.number.isRequired,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    budget: PropTypes.number,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
    tagline: PropTypes.string,
  }).isRequired,
  chooseMovie: PropTypes.func.isRequired
}
