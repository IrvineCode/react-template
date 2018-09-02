import React from 'react';
import { firestore } from '../utils/firebase';

const Movie = (props) => {

  console.log(props.movie.data());

  const movie = props.movie;
  const data = movie.data();

  return <div style={{
    borderBottom: '5px solid dodgerblue'
  }}>
      <div>{movie.id}</div>
      <div>{data.title}</div>
      <div>{(data.pts / data.numReviewers).toFixed(1)}</div>
    </div>;
};

class Main extends React.Component {
	constructor() {
		super();

		this.state = {
			movies: []
		};
	}
	async componentDidMount() {
		let data = await firestore.collection('movies').get();
		this.setState({
			movies: data.docs
		});
	}
	render() {
		return (
			<div>
				Main
				{this.state.movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
			</div>
		);
	}
}

export default Main;
