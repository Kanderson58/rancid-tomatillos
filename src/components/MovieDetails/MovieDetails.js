import "./MovieDetails.css";
import Footer from "./Footer/Footer";
import PropTypes from 'prop-types';
import { getMovieById } from "../../apiCalls";
import { Component } from "react";

class MovieDetails extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: {},
      loading: true
    }
  }

  componentDidMount = () => {
    getMovieById(this.props.selectedMovieID)
    .then(data => this.setState({ movieDetails: data.movie, loading: false}));
  }

  render() {
    const movie = this.state.movieDetails;

    if(this.state.loading) {
      return (<p>Loading...</p>)
    }

    return (
    <div className="overlay-single-movie">
      <img src={movie.backdrop_path} className="backdrop" alt={movie.title}/>
      <div className="movie-info">
        <img src={movie.poster_path} className="movie-poster" alt={movie.title} />
        <div className="details">
          <h2>{movie.title} {movie.tagline && <em>- "<span>{movie.tagline}</span>"</em>}</h2>
          <ul>
            {movie.overview && <li><span className="category">Overview:</span> {movie.overview}</li>}
            {movie.genres && <li><span className="category">Genres:</span> {movie.genres.map((genre, index) => index ? ", " + genre : genre)}</li>}
            {movie.budget ? <li><span className="category">Budget:</span> ${movie.budget.toLocaleString()}</li>: null}
            {movie.revenue ? <li><span className="category">Revenue:</span> ${movie.revenue.toLocaleString()}</li>: null}
            {movie.runtime ? <li><span className="category">Runtime:</span> {movie.runtime} minutes</li>: null}
            {movie.rating ? <li><span className="category">Rating:</span> {Math.round(movie.average_rating)}/10</li> : null}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
    )
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  chosenMovie: PropTypes.shape({
    average_rating: PropTypes.number,
    backdrop_path: PropTypes.string,
    id: PropTypes.number,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string
  }).isRequired
}