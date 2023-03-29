import MovieCard from "./Moviecard/MovieCard";
import './MoviesList.css';
import PropTypes from 'prop-types';

const MoviesList = ({allMovies}) => {
  return (
    <div className='moviesList'>
      {allMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  )
}

export default MoviesList;

MoviesList.propTypes = {
  allMovies: PropTypes.array.isRequired,
};