import React from "react";
import "./Home.css";

export default function Home() {
	return (
		<div className="home">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-12 col-lg-7">
						<div className="home-contents">
							<h3 className="home-welcome">
								Hello, We Are <span>Ronin Developers !</span>
							</h3>
							<h2 className="home-title">Web Designers</h2>
							<p className="home-skills">
								Front-End / Back-End / Ui & Ux / SEO / . . .
							</p>
							<div className="home-btns">
								<button className="app-btn btn_blue">Send Message</button>
								<button className="app-btn btn_white">Get Resumes</button>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-5">
						<div className="home-avatar"></div>
					</div>
				</div>
			</div>

		</div>
	);
}
