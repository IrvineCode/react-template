import React, { Component } from 'react';
import './App.css';
import { listMovies } from './utils/db';
import { Loading } from './components/loading';
import { MovieList, Movie } from './components/movieList';
import { AddForm } from './components/addForm';

class App extends Component {
	constructor() {
		super();

		this.state = {
			movies: []
    };
	}
	componentDidMount() {
		listMovies().then((movies) => {
			this.setState({
				movies: movies
			});
		});
  }
  upvote(id, isUp = true) {
    let movies = [...this.state.movies];
    movies.forEach((movie) => {
      if (movie.id === id) {
        if (isUp) movie.up++;
        else movie.down++;
      }
    });

    this.setState({ movies: movies });
  }
  addMovie(name) {
    let movie = {
      id: this.state.movies.length + 1,
      name: name,
      up: 0,
      down: 0
    };
    this.setState({
      movies: [...this.state.movies, movie]
    })
  }
	render() {
		return (
			<div>
        <h1>Featured...</h1>
        { 
          this.state.movies.length > 0 && 
          <Movie movie={this.state.movies[0]} upvote={this.upvote.bind(this)} />
        }

				<h1>Reviews...</h1>
				{this.state.movies.length === 0 && <Loading />}
				<MovieList movies={this.state.movies} upvote={this.upvote.bind(this)} />

        <AddForm addMovie={this.addMovie.bind(this)} />
			</div>
		);
	}
}

export default App;
