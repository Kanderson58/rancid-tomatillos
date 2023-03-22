import './App.css';
import { Component } from 'react';
import movieData from '../../data/data';
import MoviesList from '../MoviesList/MoviesList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: movieData.movies,
      selectedMovie: null
    }
  }

  render() {
    return (
      <div className="App">
        <MoviesList allMovies={this.state.allMovies} />
      </div>
    )
  };
}

export default App;