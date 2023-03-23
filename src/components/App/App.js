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
      allMovies: [],
      selectedMovie: null,
      error: null
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => this.setState({allMovies: data.movies}))
  }

  chooseMovie = (movie) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movie.id}`)
    .then(response => {
      if(response.ok) {
        return response.json()}
        else {
          console.log(response)
        }
      })
    .then(data => this.setState({selectedMovie: data.movie}))
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