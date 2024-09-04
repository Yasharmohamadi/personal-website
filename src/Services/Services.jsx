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
			<div className="container services-container">
				<div className="section-header">
					<h3 className="section-title">Services</h3>
					<p className="section-title_sub">What We Provide You?</p>
					<div className="section-line"></div>
				</div>
				<div className="row services-wrapper">
					{services.map((service) => (
						<div className="col-lg-4" key={service.id}>
							<div className="service-wrapper">
								<div className="service-icon-wrapper">
                                    <img className="service-icon" src={service.icon} />
                                </div>
								<h4 className="service-title">{service.title}</h4>
								<p className="service-description">{service.description}</p>
								<div className="service-shape"></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
