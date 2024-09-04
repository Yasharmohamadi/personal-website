import React, { useState } from "react";
import "./Services.css";

export default function Services() {
	const [services, setServices] = useState([
		{
			id: 1,
			title: "Web Design",
			icon: "./images/icons/webdesign-svg.svg",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minus in.",
		},
		{
			id: 2,
			title: "Interface Design",
			icon: "./images/icons/interface-svg.svg",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minus in.",
		},
		{
			id: 3,
			title: "Web Development",
			icon: "./images/icons/development-svg.svg",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minus in.",
		},
		{
			id: 4,
			title: "Ux Design",
			icon: "./images/icons/uxdesign-svg.svg",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minus in.",
		},
		{
			id: 5,
			title: "Motion Graphic",
			icon: "./images/icons/motion-svg.svg",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minus in.",
		},
		{
			id: 6,
			title: "SEO",
			icon: "./images/icons/seo-svg.svg",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minus in.",
		},
	]);

	return (
		<div className="services">
			<div className="container">
				<div className="section-header">
					<h3 className="section-title">Services</h3>
					<p className="section-title_sub">What We Provide You?</p>
					<div className="section-line"></div>
				</div>
				<div className="row services-wrapper">
					{services.map((service) => (
						<div className="col-12 col-md-6 col-lg-6 col-xl-4" key={service.id}>
							<div className="service-wrapper">
								<div className="service-icon-wrapper">
									<img className="service-icon" src={service.icon} />
								</div>
								<h4 className="service-title">{service.title}</h4>
								<p className="service-description">{service.description}</p>
								<svg
                                    className="service-shape"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 369.92 223.59"
                                    >
									<path
										id="shape"
										d="M1249.08,2700.557s15.007-66.794,51.8-54.34,43.02,57.737,121.7,13.585,95.662-58.3,124.531-23.774S1619,2601.5,1619,2601.5v223.59H1249.08Z"
										transform="translate(-1249.08 -2601.498)"
										fill="#fff"
									/>
								</svg>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
