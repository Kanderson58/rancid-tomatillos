import MovieCard from "./Moviecard/MovieCard";
import './MoviesList.css';
import PropTypes from 'prop-types';
import Footer from "../MovieDetails/Footer/Footer";

const MoviesList = ({allMovies, chooseMovie}) => {
  return (
    <div className='moviesList'>
      {allMovies.map(movie => <MovieCard key={movie.id} movie={movie} chooseMovie={chooseMovie} />)}
    </div>
  )
}

export default MoviesList;

MoviesList.propTypes = {
  allMovies: PropTypes.array.isRequired,
  chooseMovie: PropTypes.func.isRequired
};
