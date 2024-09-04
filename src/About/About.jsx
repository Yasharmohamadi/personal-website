import React from "react";
import "./About.css";

export default function About() {
	return (
		<div className="about">
			<div className="container">
				<div className="about-wrapper">
					<div className="section-header">
						<h3 className="section-title">About Us</h3>
						<p className="section-title_sub">Why Choose Us?</p>
						<div className="section-line"></div>
					</div>
					<div className="about-main">
						<div className="about-img-box">
                            <img className="about-img" src="./images/about-us-man.jpg" alt="ronin"/>
                        </div>
						<div className="about-content">
							<h4 className="content-title">
								Why Choose <span>Ronin Web Developers</span> ?
							</h4>
							<p className="content-caption">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Doloremque minus in similique eius voluptatibus, tempora porro
								quibusdam? Enim fugit, eligendi magnam culpa facilis, autem quam
								facere labore in eos dolore. Lorem ipsum dolor, sit amet
								consectetur adipisicing elit. Repellat inventore dolores omnis,
								accusanorrupti nam magnam nisi voluptate iure officiis assumenda
								nemo neque distinctio? Similique, saepe laudantium.
							</p>
							<h5 className="content-list-title">Here is Few Features:</h5>
							<ul className="content-list">
								<li className="content-list-item">
									User Interface Design (Ui)
								</li>
								<li className="content-list-item">
									User Interface Design (Ux)
								</li>
								<li className="content-list-item">Visual Commination Design</li>
								<li className="content-list-item">Interaction Design</li>
								<li className="content-list-item">Supper Support</li>
							</ul>
							<div className="about-btns">
								<button className="app-btn btn_blue">Send Message</button>
								<button className="app-btn btn_white">Get Resumes</button>
							</div>
						</div>
						{/* <div className="row">
							<div className="col-lg-6">
							</div>
							<div className="col-lg-6">
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
}
