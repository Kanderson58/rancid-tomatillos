import './MovieCard.css';

const MovieCard = ({movie}) => {
  return (
    <div className='movieCard'>
      <img src={movie.poster_path} />
      <div className='overlay'>
        <h2 className='title'>{movie.title}</h2>
        <p className='date'>{movie.release_date.slice(0, 4)}</p>
      </div>
    </div>
  )
}

export default MovieCard;
