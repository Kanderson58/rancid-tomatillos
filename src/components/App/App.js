import './App.css';
import { Component } from 'react';
import movieData from '../../data/data';
import MoviesList from '../MoviesList/MoviesList';
import Header from '../Header/Header';
import MovieDetails from '../MovieDetails/MovieDetails';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: movieData.movies,
      selectedMovie: null
    }
  }

  chooseMovie = (movie) => {
    this.setState({ selectedMovie: movie })
  }

  render() {
    return (
      <div className="App">
        <Header />
        {!this.state.selectedMovie && <MoviesList allMovies={this.state.allMovies} chooseMovie={this.chooseMovie} />}
        {this.state.selectedMovie && <MovieDetails selectedMovie={this.state.selectedMovie} chooseMovie={this.chooseMovie} />}
      </div>
    )
  };
}

export default App;