import './MovieCard.css';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const MovieCard = ({movie, chooseMovie}) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      chooseMovie(movie);
    }
  };

  return (
    <Link to={`/movie/${movie.id}`} >
    <div className='movieCard' onClick={() => {chooseMovie(movie)}} tabIndex='0' onKeyDown={handleKeyPress}>
      <img src={movie.poster_path} alt={movie.title}/>
      <div className='overlay'>
        <h2 className='title'>{movie.title}</h2>
        <p className='date'>{movie.release_date.slice(0, 4)}</p>
      </div>
    </div>
    </Link>
  )
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired
  }).isRequired,
  chooseMovie: PropTypes.func.isRequired
};
