import React, { Component } from "react";
import "./RoundButton.sass";

class RoundButton extends Component {
	render() {
		return <button className="button">{this.props.value}</button>;
	}
}

export default RoundButton;
