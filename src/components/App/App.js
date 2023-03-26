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
      searchQuery: '',
      searchError: null
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

  // setState is asynchronous
  // this.state.searchQuery in the filter was using the previous value instead of the updated value
  // can use a callback fn in set state to wait for the search query and THEN filter
  // onChange and onClick is redundant 
  // what if we just kept on change and then made the button clear and reset the search?
  onChange = (event) => {
    const searchQuery = event.target.value;
    this.setState({ searchQuery }, () => {
      const filteredMovies = this.state.allMovies.filter(movie => {
        return movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      });
      this.setState({ filteredMovies: filteredMovies });

      if (filteredMovies.length === 0) {
        this.setState({ filteredMovies: [], searchError: "No movies found with the given search query." });
      } else {
        this.setState({ filteredMovies: filteredMovies, searchError: null });
      }
    });
  }

  // if we consolidated to just onChange
  onChange = (event) => {
    const searchQuery = event.target.value;
    const filteredMovies = this.state.allMovies.filter(movie => {
      return movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    });
  
    if (filteredMovies.length === 0) {
      this.setState({ filteredMovies: [], searchError: "No movies found with the given search query." });
    } else {
      this.setState({ filteredMovies: filteredMovies, searchError: null });
    }
    
    this.setState({ searchQuery: searchQuery });
  };
  

  onSearchClick = () => {
    const searchQuery = this.state.searchQuery;
    const filteredMovies = this.state.allMovies.filter(movie => {
      return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
  
    if (filteredMovies.length === 0) {
      this.setState({ filteredMovies: [], searchError: "No movies found with the given search query." });
    } else {
      this.setState({ filteredMovies: filteredMovies, searchError: null });
    }
  };

  // onClearClick = () => {
  //   this.setState({ searchQuery: '', filteredMovies: this.state.allMovies, searchError: null });
  // };
  

  render() {
    return (
      <div className="App">
        <Header value={this.searchQuery} onChange={this.onChange} onSearchClick={this.onSearchClick} />
        {this.state.error && <p className="error">Sorry, there was an error loading your page!  {this.state.error}</p>}
        {this.state.searchError && <p className="error">{this.state.searchError}</p>}
        {!this.state.selectedMovie && !this.state.error && this.state.filteredMovies.length > 0 && <MoviesList allMovies={this.state.filteredMovies} chooseMovie={this.chooseMovie} />}
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