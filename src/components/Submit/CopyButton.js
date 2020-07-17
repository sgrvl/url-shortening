import React, { Component } from "react";
import "./Submit.sass";
import { CopyToClipboard } from "react-copy-to-clipboard";

class CopyButton extends Component {
	state = {
		copied: false,
	};

	handleCopy = () => {
		this.setState({ copied: true });
		setTimeout(() => {
			this.setState({ copied: false });
		}, 1250);
	};

	render() {
		return (
			<CopyToClipboard text={this.props.value}>
				<button
					className={
						this.state.copied ? "Links-Copy button-active" : "Links-Copy"
					}
					onClick={this.handleCopy}
				>
					{this.state.copied ? "Copied!" : "Copy"}
				</button>
			</CopyToClipboard>
		);
	}
}

export default CopyButton;
