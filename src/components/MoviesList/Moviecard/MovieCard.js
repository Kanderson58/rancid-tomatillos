import './MovieCard.css';


const MovieCard = ({movie}) => {
  return (
    <div className='movieCard'>
      <img src={movie.poster_path} />
    </div>
  )
}

export default MovieCard;