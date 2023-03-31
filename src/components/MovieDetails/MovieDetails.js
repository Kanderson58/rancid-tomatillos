import "./MovieDetails.css";
import PropTypes from 'prop-types';
import Error from "../Error/Error";
import Footer from "./Footer/Footer";
import { getMovieById } from "../../apiCalls";
import { Component } from "react";

class MovieDetails extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: {},
      loading: true,
      error: ''
    }
  }

  componentDidMount() {
    getMovieById(this.props.selectedMovieID)
    .then(data => {
      const { movie } = data;
      this.setState({ 
        movieDetails: movie, 
        loading: false 
      });
    })
    .catch(error => {
      this.setState({ error: error.toString() });
    });
  }

  renderLoading() {
    return (
      <p className="loading">Loading...</p>
    );
  }

  renderError() {
    return (
      <Error error={this.state.error} chooseMovie={this.props.chooseMovie}/>
    );
  }

  renderMovieDetails() {
    const { movieDetails } = this.state;

    return (
      <div className="overlay-single-movie">
        <img src={movieDetails.backdrop_path} className="backdrop" alt={movieDetails.title}/>
        <div className="movie-info">
          <img src={movieDetails.poster_path} className="movie-poster" alt={movieDetails.title} />
          <div className="details">
            <h2>{movieDetails.title} {movieDetails.tagline && <em>- "<span>{movieDetails.tagline}</span>"</em>}</h2>
            <ul>
              {movieDetails.average_rating ? <li><span className="category">Rating:</span> {movieDetails.average_rating}/10</li> : null}
              {movieDetails.overview && <li><span className="category">Overview:</span> {movieDetails.overview}</li>}
              {movieDetails.genres && <li><span className="category">Genres:</span> {movieDetails.genres.map((genre, index) => index ? ", " + genre : genre)}</li>}
              {movieDetails.budget ? <li><span className="category">Budget:</span> ${movieDetails.budget.toLocaleString()}</li>: null}
              {movieDetails.revenue ? <li><span className="category">Revenue:</span> ${movieDetails.revenue.toLocaleString()}</li>: null}
              {movieDetails.runtime ? <li><span className="category">Runtime:</span> {movieDetails.runtime} minutes</li>: null}
            </ul>
          </div>
        </div>
        <Footer chooseMovie={this.props.chooseMovie} />
      </div>
    );
  }

  render() {
    if (this.state.loading && !this.state.error) {
      return this.renderLoading();
    } else if (this.state.error) {
      return this.renderError();
    } else {
      return this.renderMovieDetails();
    }
  }
}

MovieDetails.propTypes = {
  chosenMovie: PropTypes.shape({
    average_rating: PropTypes.number,
    backdrop_path: PropTypes.string,
    id: PropTypes.number,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string
  }).isRequired
};

export default MovieDetails;
