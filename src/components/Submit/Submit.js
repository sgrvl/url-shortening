import React, { Component } from "react";
import "./Submit.sass";
import { TextField } from "@material-ui/core";
import CopyButton from "./CopyButton";

class Submit extends Component {
	state = {
		url: "",
		short: "",
		error: false,
	};

	handleInput = (event) => {
		this.setState({ url: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const getShort = (u) => {
			if (u.hashid) {
				this.setState({ short: u, error: false });
			} else {
				this.setState({ error: true });
			}
		};

		const toLocalStorage = () => {
			const short = this.state.short;
			if (short.url !== undefined) {
				localStorage.setItem(short.url, `https://rel.ink/${short.hashid}`);
			}
			this.setState({
				url: "",
			});
		};

		async function postFetch(url) {
			let response = await fetch("https://rel.ink/api/links/", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					url: url,
				}),
			});

			await response.json().then((data) => getShort(data));

			toLocalStorage();
		}

		postFetch(this.state.url);
	};

	render() {
		return (
			<div className="Submit">
				<form onSubmit={this.handleSubmit}>
					<div className="White-bg" />
					<TextField
						className={this.state.error ? "Error" : "NoError"}
						variant="outlined"
						onChange={this.handleInput}
						value={this.state.url}
						placeholder="Shorthen a link here..."
						error={this.state.error}
						helperText={this.state.error ? "Please add a link" : null}
						fullWidth
					/>
					<button type="submit">Shorten It!</button>
				</form>
				<div className="Links">
					{Object.entries(localStorage).map((value, key) => {
						return (
							<div className="Links-wrap" key={key}>
								<div className="Links-wrap_first">
									<span>{value[0]}</span>
									<a href={value[1]} target="_blank" rel="noopener noreferrer">
										{value[1]}
									</a>
								</div>
								<CopyButton value={value[1]} />
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Submit;
