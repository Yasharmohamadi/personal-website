import React from "react";
import "./Pricing.css";

export default function Pricing() {
	return (
		<div className="pricing">
			<div className="container">
				<div className="section-header">
					<h3 className="section-title">Pricing</h3>
					<p className="section-title_sub">What We Provide You?</p>
					<div className="section-line"></div>
				</div>
				<div className="row pricing-wrapper">
					<div className="col-12 col-lg-4">
						<div className="pricing-item">
							<div className="pricing-item-header">
								<h4 className="pricing-item-header__title">Basic</h4>
								<p className="pricing-item-header__price">$70</p>
								<p className="pricing-item-header__text">Only PSD Design</p>
							</div>
							<ul className="pricing-item-body__list">
								<li className="pricing-item-body__list-item">Graphic Design</li>
								<li className="pricing-item-body__list-item">Web Design</li>
								<li className="pricing-item-body__list-item">Ui/Ux Design</li>
								<li className="pricing-item-body__list-item">HTML & CSS</li>
								<li className="pricing-item-body__list-item">SEO Optimize</li>
							</ul>
							<button className="app-btn btn_blue">Choose Plan</button>
						</div>
					</div>
					<div className="col-12 col-lg-4">
						<div className="pricing-item">
							<div className="pricing-item-header">
								<h4 className="pricing-item-header__title">Standard</h4>
								<p className="pricing-item-header__price">$100</p>
								<p className="pricing-item-header__text">Only PSD Design</p>
							</div>
							<ul className="pricing-item-body__list">
								<li className="pricing-item-body__list-item">Graphic Design</li>
								<li className="pricing-item-body__list-item">Web Design</li>
								<li className="pricing-item-body__list-item">Ui/Ux Design</li>
								<li className="pricing-item-body__list-item">HTML & CSS</li>
								<li className="pricing-item-body__list-item">SEO Optimize</li>
							</ul>
							<button className="app-btn btn_blue">Choose Plan</button>
						</div>
					</div>
					<div className="col-12 col-lg-4">
						<div className="pricing-item">
							<div className="pricing-item-header">
								<h4 className="pricing-item-header__title">Premium</h4>
								<p className="pricing-item-header__price">$150</p>
								<p className="pricing-item-header__text">Only PSD Design</p>
							</div>
							<ul className="pricing-item-body__list">
								<li className="pricing-item-body__list-item">Graphic Design</li>
								<li className="pricing-item-body__list-item">Web Design</li>
								<li className="pricing-item-body__list-item">Ui/Ux Design</li>
								<li className="pricing-item-body__list-item">HTML & CSS</li>
								<li className="pricing-item-body__list-item">SEO Optimize</li>
							</ul>
							<button className="app-btn btn_blue ">Choose Plan</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
