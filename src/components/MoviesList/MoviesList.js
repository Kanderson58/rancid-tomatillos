import MovieCard from "./Moviecard/MovieCard";
import './MoviesList.css';

const MoviesList = ({allMovies, chooseMovie}) => {
  return (
    <div className='moviesList'>
      {allMovies.map(movie => <MovieCard key={movie.id} movie={movie} chooseMovie={chooseMovie} />)}
    </div>
  )
}

export default MoviesList;