import React, { Component } from "react";
import "./Menu.sass";

class Menu extends Component {
	render() {
		return (
			<div className={this.props.open ? "Menu Open" : "Menu Close"}>
				<ul>
					<li>
						<a href="null">Features</a>
					</li>
					<li>
						<a href="null">Pricing</a>
					</li>
					<li>
						<a href="null">Resources</a>
					</li>
				</ul>
				<hr />
				<div className="Links">
					<a href="null">Login</a>
					<button className="Links-button">Sign Up</button>
				</div>
			</div>
		);
	}
}

export default Menu;
