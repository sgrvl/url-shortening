import React from "react";
import "./App.sass";
import Submit from "./components/Submit/Submit";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<h1>URL Shortener</h1>
			<Submit />
		</div>
	);
}

export default App;
