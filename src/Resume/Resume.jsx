import React from "react";
import "./Resume.css";

export default function Resume() {
	const menuItemHandler = (event) => {
		// menu logic
		document
			.querySelector(".menu__item--active")
			.classList.remove("menu__item--active");

		event.target.classList.add("menu__item--active");

		// content logic
		document
			.querySelector(".resume-content--show")
			.classList.remove("resume-content--show");

		let itemContentId = event.target.getAttribute("item-content-id");
		document.querySelector(itemContentId).classList.add("resume-content--show");
	};
	return (
		<div className="resume">
			<div className="container skew-reset">
				<div className="section-header resume-header">
					<h3 className="section-title">Resume</h3>
					<p className="section-title_sub">Our Formal Bio Details</p>
					<div className="section-line"></div>
				</div>
				<div className="row resume-wrapper">
					<div className="col-3">
						<div className="resume-menu h-full">
							<div
								className="menu__item menu__item--active"
								item-content-id="#education"
								onClick={(event) => menuItemHandler(event)}
							>
								<img
									className="menu__icon"
									src="./images/icons/usergraduate-icon.svg"
									alt="logo"
								/>
								Education
								{/* <span className="menu__title"></span> */}
							</div>
							<div
								className="menu__item"
								item-content-id="#seo-skill"
								onClick={(event) => menuItemHandler(event)}
							>
								<img
									className="menu__icon"
									src="./images/icons/history-icon.svg"
									alt="logo"
								/>
								SEO Skills
								{/* <span className="menu__title"></span> */}
							</div>
							<div
								className="menu__item"
								item-content-id="#designer-skill"
								onClick={(event) => menuItemHandler(event)}
							>
								<img
									className="menu__icon"
									src="./images/icons/laptopcode-icon.svg"
									alt="logo"
								/>
								Designer Skill
								{/* <span className="menu__title"></span> */}
							</div>
							<div
								className="menu__item"
								item-content-id="#work-history"
								onClick={(event) => menuItemHandler(event)}
							>
								<img
									className="menu__icon"
									src="./images/icons/chartbar-icon.svg"
									alt="logo"
								/>
								Work History
								{/* <span className="menu__title"></span> */}
							</div>
							<div
								className="menu__item"
								item-content-id="#programming"
								onClick={(event) => menuItemHandler(event)}
							>
								<img
									className="menu__icon"
									src="./images/icons/mapgallery-icon.svg"
									alt="logo"
								/>
								Programming
								{/* <span className="menu__title"></span> */}
							</div>
						</div>
					</div>
					<div className="col-8 content-wrapper">
						<div className="resume-content resume-content--show" id="education">
							<div className="content-box">
								<div className="content-header">
									<h4 className="content-header__title">education</h4>
									<span className="content-header__label">2018-2024</span>
								</div>
								<h5 className="content-caption__title">
									Bsc in Computer Engineer
								</h5>
								<p className="content-caption__text">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
									beatae harum facere debitis. Nisi beatae harum facere debitis.
								</p>
							</div>
							<div className="content-box">
								<div className="content-header">
									<h4 className="content-header__title">education</h4>
									<span className="content-header__label">2018-2024</span>
								</div>
								<h5 className="content-caption__title">
									Bsc in Computer Engineer
								</h5>
								<p className="content-caption__text">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
									beatae harum facere debitis. Nisi beatae harum facere debitis.
								</p>
							</div>
							<div className="content-box">
								<div className="content-header">
									<h4 className="content-header__title">education</h4>
									<span className="content-header__label">2018-2024</span>
								</div>
								<h5 className="content-caption__title">
									Bsc in Computer Engineer
								</h5>
								<p className="content-caption__text">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
									beatae harum facere debitis. Nisi beatae harum facere debitis.
								</p>
							</div>
						</div>
						<div className="resume-content" id="seo-skill">
							<div className="content-box">
								<div className="content-header">
									<h4 className="content-header__title">seo-skill</h4>
									<span className="content-header__label">2018-2024</span>
								</div>
								<h5 className="content-caption__title">
									Bsc in Computer Engineer
								</h5>
								<p className="content-caption__text">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
									beatae harum facere debitis. Nisi beatae harum facere debitis.
								</p>
							</div>
							<div className="content-box">
								<div className="content-header">
									<h4 className="content-header__title">seo-skill</h4>
									<span className="content-header__label">2018-2024</span>
								</div>
								<h5 className="content-caption__title">
									Bsc in Computer Engineer
								</h5>
								<p className="content-caption__text">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
									beatae harum facere debitis. Nisi beatae harum facere debitis.
								</p>
							</div>
						</div>
						<div className="resume-content" id="designer-skill">
							<div className="content-box">
								<div className="content-header">
									<h4 className="content-header__title">designer-skill</h4>
									<span className="content-header__label">2018-2024</span>
								</div>
								<h5 className="content-caption__title">
									Bsc in Computer Engineer
								</h5>
								<p className="content-caption__text">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
									beatae harum facere debitis. Nisi beatae harum facere debitis.
								</p>
							</div>
							<div className="content-box">
								<div className="content-header">
									<h4 className="content-header__title">designer-skill</h4>
									<span className="content-header__label">2018-2024</span>
								</div>
								<h5 className="content-caption__title">
									Bsc in Computer Engineer
								</h5>
								<p className="content-caption__text">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
									beatae harum facere debitis. Nisi beatae harum facere debitis.
								</p>
							</div>
						</div>
						<div className="resume-content" id="work-history">
							<div className="content-box">
								<div className="content-header">
									<h4 className="content-header__title">work-history</h4>
									<span className="content-header__label">2018-2024</span>
								</div>
								<h5 className="content-caption__title">
									Bsc in Computer Engineer
								</h5>
								<p className="content-caption__text">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
									beatae harum facere debitis. Nisi beatae harum facere debitis.
								</p>
							</div>
						</div>
						<div className="resume-content" id="programming">
			
							<div className="content-box">
								<div className="content-header">
									<h4 className="content-header__title">programming</h4>
									<span className="content-header__label">2018-2024</span>
								</div>
								<h5 className="content-caption__title">
									Bsc in Computer Engineer
								</h5>
								<p className="content-caption__text">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
									beatae harum facere debitis. Nisi beatae harum facere debitis.
								</p>
							</div>
							<div className="content-box">
								<div className="content-header">
									<h4 className="content-header__title">programming</h4>
									<span className="content-header__label">2018-2024</span>
								</div>
								<h5 className="content-caption__title">
									Bsc in Computer Engineer
								</h5>
								<p className="content-caption__text">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
									beatae harum facere debitis. Nisi beatae harum facere debitis.
								</p>
							</div>
							<div className="content-box">
								<div className="content-header">
									<h4 className="content-header__title">programming</h4>
									<span className="content-header__label">2018-2024</span>
								</div>
								<h5 className="content-caption__title">
									Bsc in Computer Engineer
								</h5>
								<p className="content-caption__text">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
									beatae harum facere debitis. Nisi beatae harum facere debitis.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
