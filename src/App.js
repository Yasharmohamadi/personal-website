import React from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Pricing from "./Pricing/Pricing";
import Contact from "./Contact/Contact";

export default function App() {
	return (
		<div className="app">
			<Header />
			<main className="main">
				<Home />
				<About />
				<Services />
				<Resume />
				<Pricing />
				<Contact />
			</main>
		</div>
	);
}
