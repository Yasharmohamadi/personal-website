import React from "react";
import "./Contact.css";

export default function Contact() {
	return (
		<div className="contact">
			<div className="section-header">
				<h3 className="section-title">Contact Us</h3>
				<p className="section-title_sub">Let's Keep in Touch</p>
				<div className="section-line"></div>
			</div>
			<div className="contact-wrapper">
				<div className="container">
					<div className="contact-container">
						<div className="contact-location-wrapper">
							<div className="contact-location">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="26"
									height="35.999"
									viewBox="0 0 26 35.999"
									className="contact-location__icon"
								>
									<path
										id="map_pin"
										data-name="map pin"
										d="M634,7348a13.034,13.034,0,0,0-13,13.038c0,8.921,11.634,22.019,12.129,22.572a1.168,1.168,0,0,0,1.742,0c.5-.553,12.129-13.65,12.129-22.572A13.034,13.034,0,0,0,634,7348Zm0,19.6a6.559,6.559,0,1,1,6.541-6.559A6.557,6.557,0,0,1,634,7367.6Z"
										transform="translate(-621 -7348)"
										fill="#1a4f94"
									/>
								</svg>
							</div>
						</div>
						<div className="contact-form">
							<h4 className="contact-form__title">Get in Touch</h4>
							<input
								className="contact-form__input"
								type="text"
								placeholder="Your Name"
							/>
							<input
								className="contact-form__input"
								type="text"
								placeholder="Your Email Address"
							/>
							<input
								className="contact-form__input"
								type="text"
								placeholder="Subject"
							/>
							<textarea
								className="contact-form__input contact-form__textarea"
								type="text"
								placeholder="Enter Your Message"
                                rows={5}
							/>
							<button className="app-btn btn_blue">Send</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
