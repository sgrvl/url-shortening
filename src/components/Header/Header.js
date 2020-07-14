import React from "react";
import "./Header.sass";
import RoundButton from "../RoundButton/RoundButton";
import { ReactComponent as Working } from "../images/illustration-working.svg";

const Header = () => {
	return (
		<div className="Header-Wrap">
			<div className="Header">
				<div className="Header-Text">
					<h1>More than just shorter links</h1>
					<p>
						Build your brand's recognition and get detailed insights on how your
						links are performing.
					</p>
					<RoundButton value="Get Started" className="Header-Button" />
				</div>
				<Working className="Header-img" />
			</div>
		</div>
	);
};

export default Header;
