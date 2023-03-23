import './MovieCard.css';

const MovieCard = ({movie}) => {
  return (
    <div className='movieCard'>
      <figure>
        <img src={movie.poster_path} alt={movie.title} />
        <figcaption className='title'>{movie.title} - ({movie.release_date})</figcaption>
      </figure>
    </div>
  )
}

export default MovieCard;