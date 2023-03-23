import './MovieCard.css';

const MovieCard = ({movie, chooseMovie}) => {
  return (
    <div className='movieCard' onClick={() => {chooseMovie(movie)}}>
      <img src={movie.poster_path} />
      <div className='overlay'>
        <h2 className='title'>{movie.title}</h2>
        <p className='date'>{movie.release_date.slice(0, 4)}</p>
      </div>
    </div>
  )
}

export default MovieCard;
