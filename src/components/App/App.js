import React from "react";
import "./App.sass";
import Submit from "../Submit/Submit";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AdvancedStats from "../AdvancedStats/AdvancedStats";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Header />
			<Submit />
			<AdvancedStats />
			<Footer />
		</div>
	);
}

export default App;
