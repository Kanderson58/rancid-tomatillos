import './App.css';
import { Component } from 'react';
import movieData from '../../data/data';
import MoviesList from '../MoviesList/MoviesList';
import Header from '../Header/Header';


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
        <Header />
        <MoviesList allMovies={this.state.allMovies} />
      </div>
    )
  };
}

export default App;