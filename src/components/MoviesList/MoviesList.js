import { Component } from "react";
import MovieCard from "./Moviecard/MovieCard";
import './MoviesList.css';

class MoviesList extends Component { 
  constructor({allMovies}) {
    super();
    this.allMovies = allMovies; 
    // this.state = {
    //   movieInFocus: 1
    // }
  }

  handleChange = (direction) => {
    // this.setState((prevState) => ({ movieInFocus: [prevState] + [direction] }))
    // console.log(this.state.movieInFocus)
    // this.state.movieInFocus.scrollIntoView()
    document.getElementById("scrollbar").scrollBy(direction,0)
  }

  render(){
    return (
      <div className="overlay">
        <div className="list-buttons">
          <button className="left-button" onClick={() => {this.handleChange(-1000)}}><span className="material-symbols-outlined">arrow_back_ios</span></button>
          <button className="right-button" onClick={() => {this.handleChange(1000)}}><span className="material-symbols-outlined">arrow_forward_ios</span></button>
        </div>
        <div className='moviesList' id="scrollbar">{this.allMovies.map(movie => <MovieCard movie={movie} key={movie.id} />)}</div>
      </div>
    )
  }
}

export default MoviesList;