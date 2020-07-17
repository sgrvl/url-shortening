import React, { Component } from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import RoundButton from "../RoundButton/RoundButton";
import "./Navbar.sass";
import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";

class Navbar extends Component {
	state = {
		burger: false,
	};

	render() {
		return (
			<div className="Navbar-Wrap" name="top">
				<div className="Navbar">
					<Logo className="Logo" style={{ fill: "#34313D" }} />
					<div className="Navbar-Links">
						<ul>
							<li>
								<a href="/">Features</a>
							</li>
							<li>
								<a href="/">Pricing</a>
							</li>
							<li>
								<a href="/">Resources</a>
							</li>
						</ul>
						<div>
							<a href="/">Login</a>
							<RoundButton value="Sign Up" />
						</div>
					</div>
					<div
						className="Burger-wrap"
						onClick={() => this.setState({ burger: !this.state.burger })}
					>
						<Burger className="Burger" open={this.state.burger} />
					</div>

					<Menu open={this.state.burger} />
				</div>
			</div>
		);
	}
}

export default Navbar;
