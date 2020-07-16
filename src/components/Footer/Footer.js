import React from "react";
import RoundButton from "../RoundButton/RoundButton";
import { ReactComponent as Logo } from "../images/logo.svg";
import "./Footer.sass";
import { ReactComponent as Insta } from "../images/icon-instagram.svg";
import { ReactComponent as Pinterest } from "../images/icon-pinterest.svg";
import { ReactComponent as Facebook } from "../images/icon-facebook.svg";
import { ReactComponent as Twitter } from "../images/icon-twitter.svg";

const Footer = () => {
	return (
		<div className="Footer">
			<div className="toes">
				<h2>Boost your links today</h2>
				<RoundButton value="Get Started" />
			</div>
			<div className="foot">
				<ul className="foot-ul_big">
					<Logo
						className="Logo"
						style={{ fill: "white" }}
						onClick={() => window.scrollTo(0, 0)}
					/>
					<ul>
						<li className="foot-title">Features</li>
						<li>Link shortening</li>
						<li>Branded Links</li>
						<li>Analytics</li>
					</ul>
					<ul>
						<li className="foot-title">Resources</li>
						<li>Blog</li>
						<li>Developers</li>
						<li>Support</li>
					</ul>
					<ul>
						<li className="foot-title">Company</li>
						<li>About</li>
						<li>Our Team</li>
						<li>Careers</li>
						<li>Contact</li>
					</ul>
					<ul className="foot-social">
						<li>
							<Facebook />
						</li>
						<li>
							<Twitter />
						</li>
						<li>
							<Pinterest />
						</li>
						<li>
							<Insta />
						</li>
					</ul>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
