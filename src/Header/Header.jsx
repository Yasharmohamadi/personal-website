import React, { useState } from "react";
import "./Header.css";

export default function Header() {
	const [navOpen, setNavOpen] = useState(false);

	const navOpenHandler = () => {
		setNavOpen(!navOpen);
	};

	return (
		<div className="header">
			<div className="container">
				<nav className="nav">
					<h1 className="header_title">RoninDevs.</h1>
					<ul className={
							navOpen
								? "header_list header_list--open"
								: "header_list"
						}>
						<li>
							<a href="#" className="list_item--active">
								Home
							</a>
						</li>
						<li>
							<a href="#">About Us</a>
						</li>
						<li>
							<a href="#">Resume</a>
						</li>
						<li>
							<a href="#">Services</a>
						</li>
						<li>
							<a href="#">Pricing</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
					<div
						onClick={navOpenHandler}
						className={
							navOpen
								? "nav-icon-toggle nav-icon-toggle--open"
								: "nav-icon-toggle"
						}
					>
						<div className="nav-icon-line"></div>
					</div>
				</nav>
			</div>
		</div>
	);
}
