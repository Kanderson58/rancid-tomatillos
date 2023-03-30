import './App.css';
import { Component } from 'react';
import MoviesList from '../MoviesList/MoviesList';
import Header from '../Header/Header';
import MovieDetails from '../MovieDetails/MovieDetails';
import SearchBar from '../Header/SearchBar/SearchBar';
import Error from '../Error/Error';
import { getAllMovies } from '../../apiCalls';
import { Route, Switch } from 'react-router-dom';

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

        {this.state.searchError && <p className='error'>{this.state.searchError}</p>}

        {this.state.error && <Error error={this.state.error} chooseMovie={this.chooseMovie} />}

        <Switch>
          <Route exact path="/" render={() => 
            <MoviesList chooseMovie={this.chooseMovie} allMovies={this.state.filteredMovies} />}
          />

          <Route exact path="/:id" render={({match}) =>  {
            const chosenMovie = this.state.allMovies.find(movie => movie.id == match.params.id)
            return <MovieDetails chooseMovie={this.chooseMovie} chosenMovie={chosenMovie} selectedMovieID={match.params.id} />}}
          />

          <Route path='/' render={() => <Error error={this.state.error} chooseMovie={this.chooseMovie}/> }/>
        </Switch>
      </div>
    )
  };
}

export default App;