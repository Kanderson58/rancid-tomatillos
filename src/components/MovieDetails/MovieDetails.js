import "./MovieDetails.css";
import Footer from "./Footer/Footer";
import PropTypes from 'prop-types';
import { getMovieById } from "../../apiCalls";
import { Component } from "react";

class MovieDetails extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: {}
    }
  }

  componentDidMount = () => {
    getMovieById(this.props.chosenMovie.id)
      .then(data => this.setState({ movieDetails: data.movie}))
  }
    
  render() {
    return (
    <div className="overlay-single-movie">
      <img src={this.state.movieDetails.backdrop_path} className="backdrop" alt={this.state.movieDetails.title}/>
      <div className="movie-info">
        <img src={this.state.movieDetails.poster_path} className="movie-poster" alt={this.state.movieDetails.title} />
        <div className="details">
          <h2>{this.state.movieDetails.title} {this.state.movieDetails.tagline && <em>- "<span>{this.state.movieDetails.tagline}</span>"</em>}</h2>
          <ul>
            {this.state.movieDetails.overview && <li><span className="category">Overview:</span> {this.state.movieDetails.overview}</li>}
            {this.state.movieDetails.genres && <li><span className="category">Genres:</span> {this.state.movieDetails.genres.map((genre, index) => index ? ", " + genre : genre)}</li>}
            {this.state.movieDetails.budget ? <li><span className="category">Budget:</span> ${this.state.movieDetails.budget.toLocaleString()}</li>: null}
            {this.state.movieDetails.revenue ? <li><span className="category">Revenue:</span> ${this.state.movieDetails.revenue.toLocaleString()}</li>: null}
            {this.state.movieDetails.runtime ? <li><span className="category">Runtime:</span> {this.state.movieDetails.runtime} minutes</li>: null}
            <li><span className="category">Rating:</span> {Math.round(this.state.movieDetails.average_rating)}/10</li>
          </ul>
        </div>
      </div>
      <Footer chooseMovie={this.props.chooseMovie} activeSearch={this.props.activeSearch} singleMovie={this.props.singleMovie} />
    </div>
    )
  }
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