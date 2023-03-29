import './App.css';
import { Component } from 'react';
import MoviesList from '../MoviesList/MoviesList';
import Header from '../Header/Header';
import MovieDetails from '../MovieDetails/MovieDetails';
import { getAllMovies, getMovieById } from '../../apiCalls';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      filteredMovies: [],
      selectedMovie: null,
      error: null,
      searchError: null,
      activeSearch: false
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

  onSearch = (search) => {
    !search ? this.setState({activeSearch: false}) : this.setState({activeSearch: true})

    const filteredMovies = this.state.allMovies.filter(movie => {
      return movie.title.toLowerCase().includes(search.toLowerCase())
    });

    this.setState({ filteredMovies: filteredMovies });

    if (!filteredMovies.length) {
      this.setState({ searchError: 'No movies found with the given search query.' });
    } else {
      this.setState({ searchError: null });
    }
  };

  clearSearch = () => {
    this.setState({activeSearch: false, filteredMovies: this.state.allMovies, searchError: null});
  }

  render() {
    const singleMovie = this.state.selectedMovie

    return (
      <div className="App">

      <Header onSearch={this.onSearch} clearSearch={this.clearSearch} selectedMovie={singleMovie} />

      {this.state.error && <p className='error'>Sorry, there was an error loading your page!  {this.state.error}</p>}

      {this.state.searchError && <p className='error'>{this.state.searchError}</p>}

      <Route exact path="/">
        {!singleMovie && !this.state.error && this.state.filteredMovies.length > 0 && <MoviesList allMovies={this.state.filteredMovies} chooseMovie={this.chooseMovie} />}
      </Route>

      <Route path="/movie/:id">
        {singleMovie && !this.state.error && <MovieDetails 
          title={singleMovie.title}
          average_rating={singleMovie.average_rating}
          overview= {singleMovie.overview}
          genres={singleMovie.genres}
          budget={singleMovie.budget}
          revenue={singleMovie.revenue}
          runtime={singleMovie.runtime}
          tagline={singleMovie.tagline}
          backdrop_path={singleMovie.backdrop_path}
          poster_path={singleMovie.poster_path}
          chooseMovie={this.chooseMovie} 
          activeSearch={this.state.activeSearch}
          singleMovie={singleMovie ? true : false}
        />}
      </Route>
    </div>
    )
  };
}

export default App;