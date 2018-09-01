import React from 'react';
import './addForm.css';

class AddForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
	}
	handleChange(event) {
		this.setState({
			text: event.target.value
		});
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.addMovie(this.state.text);
    this.setState({text: ''});
  }
	render() {
		return (
			<form className="AddForm" onSubmit={this.onSubmit.bind(this)}>
        <input type="text" placeholder="name" value={this.state.text} 
              onChange={this.handleChange.bind(this)} />
				<button>ADD</button>
			</form>
		);
	}
}

export { AddForm };
