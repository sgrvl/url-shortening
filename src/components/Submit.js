import React, { Component } from "react";

class Submit extends Component {
	state = {
		url: "",
		short: "",
	};

	getShort = (u) => {
		if (u.hashid !== undefined) {
			this.setState({ short: u });
		}
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
			.then((data) => this.getShort(data))
			.catch((error) => console.log(error));
	};

	handleInput = (event) => {
		this.setState({ url: event.target.value });
	};

	handleSubmit = (event) => {
		this.handleFetch(this.state.url);
		event.preventDefault();
		setTimeout(() => {
			const short = this.state.short;
			if (short.url !== undefined) {
				localStorage.setItem(short.url, `https://rel.ink/${short.hashid}`);
			}
			this.setState({
				url: "",
			});
		}, 750);
	};

	componentDidMount() {
		Object.entries(localStorage).map((key, value) => console.log(key, value));
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						onChange={this.handleInput}
						value={this.state.url}
						placeholder="Shorthen a link here..."
					/>
					<button type="submit">Submit</button>
				</form>
				<div>
					{Object.entries(localStorage).map((value, key) => {
						return (
							<div key={key}>
								<span>{value[0]}</span>
								<a href={value[1]} target="_blank" rel="noopener noreferrer">
									{value[1]}
								</a>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Submit;
