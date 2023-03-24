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
      filteredMovies: [],
      selectedMovie: null,
      error: null,
      searchQuery: ''
    }
  }

  componentDidMount = () => {
    getAllMovies()
      .then(movies => { this.setState({ allMovies: movies.movies, filteredMovies: movies.movies })})
      .catch(error => {this.setState({ error: error.toString() })});
  }

  chooseMovie = (movie) => {
    if (movie) {
      getMovieById(movie.id)
        .then(movieData => {this.setState({ selectedMovie: movieData.movie })})
        .catch(error => {this.setState({ error: error.toString() })});
    } else {
      this.setState({ selectedMovie: null });
    }
  }

  onChange = (event) => {
    this.setState({searchQuery: event.target.value})
    const filteredMovies = this.state.allMovies.filter(movie => {
      return movie.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    })
    this.setState({filteredMovies: filteredMovies})
    console.log(filteredMovies)
  }

  render() {
    return (
      <div className="App">
        <Header value={this.searchQuery} onChange={this.onChange}/>
        {this.state.error && <p className="error">Sorry, there was an error loading your page!  {this.state.error}</p>}
        {!this.state.selectedMovie && !this.state.error && <MoviesList allMovies={this.state.filteredMovies} chooseMovie={this.chooseMovie} />}
        {this.state.selectedMovie && !this.state.error && <MovieDetails 
          title={this.state.selectedMovie.title}
          average_rating={this.state.selectedMovie.average_rating}
          overview= {this.state.selectedMovie.overview}
          genres={this.state.selectedMovie.genres}
          budget={this.state.selectedMovie.budget}
          revenue={this.state.selectedMovie.revenue}
          runtime={this.state.selectedMovie.runtime}
          tagline={this.state.selectedMovie.tagline}
          backdrop_path={this.state.selectedMovie.backdrop_path}
          poster_path={this.state.selectedMovie.poster_path}
          chooseMovie={this.chooseMovie} 
          />}
      </div>
    )
  };
}

export default App;