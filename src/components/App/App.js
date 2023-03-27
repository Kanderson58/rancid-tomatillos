import './App.css';
import { Component } from 'react';
import MoviesList from '../MoviesList/MoviesList';
import Header from '../Header/Header';
import MovieDetails from '../MovieDetails/MovieDetails';
import { getAllMovies, getMovieById } from '../../apiCalls';

// when we have a movie selected, hide the searchbar
// add a way to navigate back home other than manually clearing search?

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

  render() {
    return (
      <div className="App">
        <Header onSearch={this.onSearch}/>

        {this.state.error && <p className='error'>Sorry, there was an error loading your page!  {this.state.error}</p>}

        {this.state.searchError && <p className='error'>{this.state.searchError}</p>}

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
          activeSearch={this.state.activeSearch}
          singleMovie={this.state.selectedMovie ? true : false}
          />}
      </div>
    )
  };
}

export default App;