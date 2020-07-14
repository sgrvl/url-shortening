import React, { Component } from "react";
import "./Burger.sass";

class Burger extends Component {
	render() {
		return (
			<div className="Burger">
				<div className={this.props.open ? "bar bar-1-close" : "bar"} />
				<div className={this.props.open ? "bar bar-2-close" : "bar"} />
				<div className={this.props.open ? "bar bar-3-close" : "bar"} />
			</div>
		);
	}
}

export default Burger;

//{this.props.open ?
