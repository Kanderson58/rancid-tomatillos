import "./MovieDetails.css";
import Footer from "./Footer/Footer";
import PropTypes from 'prop-types';


const MovieDetails = ({title, average_rating, overview, genres, budget, revenue, runtime, tagline, backdrop_path, poster_path, chooseMovie, activeSearch, singleMovie}) => {
  return (
    <div className="overlay-single-movie">
      <img src={backdrop_path} className="backdrop" alt={title}/>
      <div className="movie-info">
        <img src={poster_path} className="movie-poster" alt={title} />
        <div className="details">
          <h2>{title} - {Math.round(average_rating)}/10</h2>
          <ul>
            {overview && <li><span className="category">Overview:</span> {overview}</li>}
            {genres && <li><span className="category">Genres:</span> {genres.map((genre, index) => index ? ", " + genre : genre)}</li>}
            {budget ? <li><span className="category">Budget:</span> ${budget.toLocaleString()}</li>: null}
            {revenue ? <li><span className="category">Revenue:</span> ${revenue.toLocaleString()}</li>: null}
            {runtime ? <li><span className="category">Runtime:</span> {runtime} minutes</li>: null}
            {tagline && <li><span className="category">Tagline:</span> {tagline}</li>}
          </ul>
        </div>
      </div>
      <Footer chooseMovie={chooseMovie} activeSearch={activeSearch} singleMovie={singleMovie} />
    </div>
  )
}

export default MovieDetails;

MovieDetails.propTypes = {
  backdrop_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  average_rating: PropTypes.number.isRequired,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  budget: PropTypes.number,
  revenue: PropTypes.number,
  runtime: PropTypes.number,
  tagline: PropTypes.string,
  chooseMovie: PropTypes.func.isRequired
}