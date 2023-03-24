import './App.css';
import { Component } from 'react';
import MoviesList from '../MoviesList/MoviesList';
import Header from '../Header/Header';
import MovieDetails from '../MovieDetails/MovieDetails';
import { getAllMovies, getMovieById } from '../../apiCalls';


class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      selectedMovie: null,
      error: null
    }
  }

  componentDidMount = () => {
    getAllMovies().then(movies => {
      this.setState({ allMovies: movies });
    });
  }

  chooseMovie = (movie) => {
    if (movie) {
      getMovieById(movie.id).then(movieData => {
        this.setState({ selectedMovie: movieData });
      }).catch(error => {
        this.setState({ error: error.message });
      });
    } else {
      this.setState({ selectedMovie: null });
    }
  }


  render() {
    return (
      <div className="App">
        <Header />
        {this.state.error && <p className="error">{this.state.error}</p>}
        {!this.state.selectedMovie && <MoviesList allMovies={this.state.allMovies} chooseMovie={this.chooseMovie} />}
        {this.state.selectedMovie && <MovieDetails selectedMovie={this.state.selectedMovie} chooseMovie={this.chooseMovie} />}
      </div>
    )
  };
}

export default App;