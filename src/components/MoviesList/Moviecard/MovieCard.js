import './MovieCard.css';

const MovieCard = ({movie}) => {
  return (
    <div className='movieCard'>
      <figure className='card'>
        <figcaption className='title'><span className='overlay-cap'>{movie.title} <div className='date'>({movie.release_date.substr(0,4)})</div></span></figcaption>
        <img src={movie.poster_path} alt={movie.title} />
      </figure>
    </div>
  )
}

export default MovieCard;