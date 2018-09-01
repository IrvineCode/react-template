import React from 'react';
import './movieList.css';

const Movie = (props) => {
	return (
		<div className="Movie">
			<div>
				{props.movie.name} ({props.movie.up - props.movie.down})
			</div>
			<button onClick={() => props.upvote(props.movie.id)}>
				<i className="far fa-thumbs-up" />
			</button>
			<button onClick={() => props.upvote(props.movie.id, false)}>
				<i className="far fa-thumbs-down" />
			</button>
		</div>
	);
};

const MovieList = (props) => {
	return <div>{props.movies.map((movie) => <Movie key={movie.id} movie={movie} upvote={props.upvote} />)}</div>;
};

export { MovieList, Movie };
