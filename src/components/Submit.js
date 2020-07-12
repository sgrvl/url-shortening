import React, { Component } from "react";

class Submit extends Component {
	state = {
		url: "",
		short: "",
		store: [],
	};

	handleFetch = (url) => {
		fetch("https://rel.ink/api/links/", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				url: url,
			}),
		})
			.then((response) => response.json())
			.then((data) =>
				this.setState({
					short: `https://rel.ink/${data.hashid}`,
				})
			);
	};

	handleInput = (event) => {
		this.setState({ url: event.target.value });
	};

	handleSubmit = (event) => {
		this.handleFetch(this.state.url);
		event.preventDefault();
		setTimeout(() => {
			this.setState({ store: this.state.store.concat(this.state.short) });
		}, 500);
		this.setState({ url: "" });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						onChange={this.handleInput}
						value={this.state.url}
					/>
					<button type="submit">Submit</button>
				</form>
				<div>
					{this.state.store.map((link, index) => {
						return (
							<div key={index}>
								<a href={link}>{link}</a>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Submit;
