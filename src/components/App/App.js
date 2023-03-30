import './App.css';
import { Component } from 'react';
import MoviesList from '../MoviesList/MoviesList';
import Header from '../Header/Header';
import MovieDetails from '../MovieDetails/MovieDetails';
import SearchBar from '../Header/SearchBar/SearchBar';
import { getAllMovies } from '../../apiCalls';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      filteredMovies: [],
      selectedMovie: {},
      error: '',
      searchError: '',
      activeSearch: false
    }
  }

  componentDidMount = () => {
    getAllMovies()
      .then(movies => { this.setState({ allMovies: movies.movies, filteredMovies: movies.movies })})
      .catch(error => {this.setState({ error: error.toString() })});
  }

  chooseMovie = (movie) => {
    this.setState({selectedMovie: movie, filteredMovies: this.state.allMovies})
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
    return (
      <div className="App">
        <Header onSearch={this.onSearch} clearSearch={this.clearSearch} selectedMovie={this.state.selectedMovie} chooseMovie={this.chooseMovie} />

        <Route exact path ='/' render={() => <SearchBar onSearch={this.onSearch} clearSearch={this.clearSearch} selectedMovie={this.state.selectedMovie} chooseMovie={this.chooseMovie} />}/>

        {this.state.error && <p className='error'>Sorry, there was an error loading your page!  {this.state.error}</p>}

        {this.state.searchError && <p className='error'>{this.state.searchError}</p>}

        <Route exact path="/" render={() => 
          <MoviesList chooseMovie={this.chooseMovie} allMovies={this.state.filteredMovies} />}
        />

        <Route path="/:id" render={({match}) =>  {
          const chosenMovie = this.state.allMovies.find(movie => movie.id == match.params.id)
          return <MovieDetails chooseMovie={this.chooseMovie} chosenMovie={chosenMovie} selectedMovieID={match.params.id} />}}
        />

      </div>
    )
  };
}

export default App;