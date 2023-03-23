import MovieCard from "./Moviecard/MovieCard";
import './MoviesList.css';

const MoviesList = ({allMovies}) => {
  return (
    <div className='moviesList'>
      {allMovies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
    </div>
  )
}

export default MoviesList;