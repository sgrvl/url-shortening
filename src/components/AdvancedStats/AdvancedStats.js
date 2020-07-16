import React, { Component } from "react";
import "./AdvancedStats.sass";
import { ReactComponent as IconBrand } from "../images/icon-brand-recognition.svg";
import { ReactComponent as IconDetail } from "../images/icon-detailed-records.svg";
import { ReactComponent as IconCustom } from "../images/icon-fully-customizable.svg";

class AdvancedStats extends Component {
	render() {
		const cards = {
			1: {
				image: <IconBrand />,
				title: "Brand Recognition",
				content:
					"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
			},
			2: {
				image: <IconDetail />,
				title: "Detailed Records",
				content:
					"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
			},
			3: {
				image: <IconCustom />,
				title: "Fully Customizable",
				content:
					"Improve brand awareness and content discoverability through customizable links, superchargin audience engagement.",
			},
		};
		return (
			<div className="Advanced">
				<div className="Advanced-Head">
					<h2>Advanced Statistics</h2>
					<p>
						Track how your links are performing across the web with our advanced
						statistics dashboard.
					</p>
				</div>

				<div className="Advanced-Cards">
					{Object.values(cards).map((item, index) => {
						return (
							<div className="Card" key={`Card ${index}`}>
								<div className="Card-Img">{item.image}</div>
								<h3>{item.title}</h3>
								<p>{item.content}</p>
							</div>
						);
					})}
					<div className="Advanced-Cards-Decoration" />
				</div>
			</div>
		);
	}
}

export default AdvancedStats;
