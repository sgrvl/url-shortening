import React from "react";
import "./App.sass";
import Submit from "../Submit/Submit";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Header />
			<Submit />
		</div>
	);
}

export default App;
