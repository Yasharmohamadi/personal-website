import React, { useState } from "react";
import "./Header.css";

export default function Header() {
	const [navOpen, setNavOpen] = useState(false);

	const navOpenHandler = () => {
		setNavOpen(!navOpen);
	};

	const menuItemClickHandler = (event) => {
		event.preventDefault();
		console.log(event.target);

		document
			.querySelector(".list_item--active")
			.classList.remove("list_item--active");

		event.target.classList.add("list_item--active");
	};

	return (
		<div className="header">
			<div className="container">
				<nav className="nav">
					<h1 className="header_title">RoninDevs.</h1>
					<ul
						className={
							navOpen ? "header_list header_list--open" : "header_list"
						}
					>
						<li onClick={(event) => menuItemClickHandler(event)}>
							<a href="#" className="list_item list_item--active">
								Home
							</a>
						</li>
						<li onClick={(event) => menuItemClickHandler(event)}>
							<a href="#" className="list_item">
								About Us
							</a>
						</li>
						<li onClick={(event) => menuItemClickHandler(event)}>
							<a href="#" className="list_item">
								Resume
							</a>
						</li>
						<li onClick={(event) => menuItemClickHandler(event)}>
							<a href="#" className="list_item">
								Services
							</a>
						</li>
						<li onClick={(event) => menuItemClickHandler(event)}>
							<a href="#" className="list_item">
								Pricing
							</a>
						</li>
						<li onClick={(event) => menuItemClickHandler(event)}>
							<a href="#" className="list_item">
								Contact
							</a>
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
