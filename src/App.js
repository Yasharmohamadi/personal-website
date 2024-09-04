import React from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";

export default function App() {
	return (
		<div className="app">
			<Header />
			<main className="main">
				<Home />
				<About />
			</main>
		</div>
	);
}
