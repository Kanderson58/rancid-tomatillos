import './MovieCard.css';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const MovieCard = ({chooseMovie, movie}) => {
  return (
    <Link to={`/${movie.id}`}>
      <div className='movieCard' tabIndex='0' onClick={() => chooseMovie(movie)}>
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
  chooseMovie: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired
  }).isRequired
};
