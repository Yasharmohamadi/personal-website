import React, { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
	const [navOpen, setNavOpen] = useState(false);

	const navOpenHandler = () => {
		setNavOpen(!navOpen);
	};

	const menuItemClickHandler = (event) => {
		event.preventDefault();

		document
			.querySelector(".list_item--active")
			.classList.remove("list_item--active");

		event.target.classList.add("list_item--active");

		let itemName = event.target.getAttribute("data-name");
		// console.log(itemName);
		let itemSectionOffsetTop = document.querySelector(`.${itemName}`).offsetTop;
		// console.log(itemSectionOffsetTop);

		window.scrollTo({
			top: itemSectionOffsetTop - 140,
			behavior: "smooth",
		});

		///////////////////////////////////////////////////////////////////////
	};

	useEffect(() => {
		const observer = new IntersectionObserver(observeHandler, {
			threshold: 0.5,
		});

		function observeHandler(allSections) {
			allSections.map((section) => {
				if (section.isIntersecting) {
					let sectionClassName = section.target.className;

					document
						.querySelector(".list_item--active")
						.classList.remove("list_item--active");
					document
						.querySelectorAll(`.list_item[data-name=${sectionClassName}]`)[0]
						.classList.add("list_item--active");
				}
				// let allMenuItem = document.querySelectorAll(".list_item");

				// allMenuItem.forEach((item) => {
				// 	let itemDataName = item.getAttribute("data-name");
				// 	if (sectionClassName === itemDataName) {

				// 			item.classList.add("list_item--active");
				// 	}
				// });
			});
		}

		document.querySelectorAll("main > div").forEach((section) => {
			observer.observe(section);
		});
	}, []);

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
							<a
								href="#"
								data-name="home"
								className="list_item list_item--active"
							>
								Home
							</a>
						</li>
						<li onClick={(event) => menuItemClickHandler(event)}>
							<a href="#" data-name="about" className="list_item">
								About Us
							</a>
						</li>
						<li onClick={(event) => menuItemClickHandler(event)}>
							<a href="#" data-name="services" className="list_item">
								Services
							</a>
						</li>
						<li onClick={(event) => menuItemClickHandler(event)}>
							<a href="#" data-name="resume" className="list_item">
								Resume
							</a>
						</li>
						<li onClick={(event) => menuItemClickHandler(event)}>
							<a href="#" data-name="pricing" className="list_item">
								Pricing
							</a>
						</li>
						<li onClick={(event) => menuItemClickHandler(event)}>
							<a href="#" data-name="contact" className="list_item">
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
