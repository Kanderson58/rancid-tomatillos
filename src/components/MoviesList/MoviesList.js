import MovieCard from './Moviecard/MovieCard';
import './MoviesList.css';
import PropTypes from 'prop-types';

const MoviesList = ({chooseMovie, allMovies}) => {
  return (
    <div className='moviesList'>
      {allMovies.map(movie => <MovieCard chooseMovie={chooseMovie} key={movie.id} movie={movie} />)}
    </div>
  )
}

export default MoviesList;

MoviesList.propTypes = {
  chooseMovie: PropTypes.func.isRequired,
  allMovies: PropTypes.array.isRequired,
};