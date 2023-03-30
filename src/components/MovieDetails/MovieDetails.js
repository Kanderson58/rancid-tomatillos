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
    }
  }

  componentDidMount = () => {
    getMovieById(this.props.chosenMovie.id)
      .then(data => this.setState({ movieDetails: data.movie, isLoading: false }));
  }
    
  render() {
    const movieDetails = this.state;


    return (
      <div className="overlay-single-movie">
        <img src={movieDetails.backdrop_path} className="backdrop" alt={movieDetails.title}/>
        <div className="movie-info">
          <img src={movieDetails.poster_path} className="movie-poster" alt={movieDetails.title} />
          <div className="details">
            <h2>{movieDetails.title} {movieDetails.tagline && <em>- "<span>{movieDetails.tagline}</span>"</em>}</h2>
            <ul>
              {movieDetails.overview && <li><span className="category">Overview:</span> {movieDetails.overview}</li>}
              {movieDetails.genres && <li><span className="category">Genres:</span> {movieDetails.genres.map((genre, index) => index ? ", " + genre : genre)}</li>}
              {movieDetails.budget ? <li><span className="category">Budget:</span> ${movieDetails.budget.toLocaleString()}</li>: null}
              {movieDetails.revenue ? <li><span className="category">Revenue:</span> ${movieDetails.revenue.toLocaleString()}</li>: null}
              {movieDetails.runtime ? <li><span className="category">Runtime:</span> {movieDetails.runtime} minutes</li>: null}
              <li><span className="category">Rating:</span> {Math.round(movieDetails.average_rating)}/10</li>
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