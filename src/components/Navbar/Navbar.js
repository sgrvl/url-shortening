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
			<div className="Navbar-Wrap">
				<div className="Navbar">
					<Logo className="Logo" />
					<div className="Navbar-Links">
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
						<div>
							<a href="null">Login</a>
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
