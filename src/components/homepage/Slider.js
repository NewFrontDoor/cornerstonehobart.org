/* eslint-disable */
import React, { Component } from "react";
import _ from "lodash";
import congregation from "../../assets/Congregation.jpg";

/*
const slides = [{"src": "",
                    "alt": "Welcome to xyz church",
                    "caption": null},
                    {"src": "",
                    "alt": "",
                    "caption":
                      {"header": ""
                       "description": ""
                       "linkText" : ""
                       "href": "#"
                      }}
                  ];
*/

const slides = [
	{
		src: congregation,
		alt: "",
		caption: {
			header: "Welcome to Cornerstone"
		}
	}
];

class Slider extends Component {
	render() {
		var slideshow = slides.map((slide) => {
			if (slide.caption !== null) {
				return (
					<li key={_.uniqueId()}>
						<figure>
							<img className="img-responsive img-full-width" src={slide.src} width="1440" height="900" />
							<figcaption className="overlay overlay-30 text-center">
								<div className="highlighted-slider-2-content">
									{slide.caption.header ? <h1 className="slider-title">{slide.caption.header}</h1> : <h1></h1>}
									{slide.caption.description ? (
										<p className="slider-description">{slide.caption.description}</p>
									) : (
										<p></p>
									)}
									{slide.caption.linkText ? (
										<a href={slide.caption.href} className="btn btn-default">
											{slide.caption.linkText}
										</a>
									) : (
										<section></section>
									)}
								</div>
							</figcaption>
						</figure>
					</li>
				);
			} else {
				return (
					<li key={_.uniqueId()}>
						<figure>
							<a href="#">
								<img
									className="img-responsive img-full-width"
									src={slide.src}
									width="1440"
									height="600"
									alt={slide.alt}
									title={slide.alt}
								/>{" "}
							</a>
						</figure>
					</li>
				);
			}
		});
		return (
			<section>
				<div id="highlighted-2-region" className="highlighted region-0 block-0 bg-color-grayLight1 text-color-light">
					<div className="region region-highlighted-2">
						<div id="block-views-front-page-slider-block" className="block block-views">
							<div className="content">
								<div className="view view-front-page-slider view-id-front_page_slider view-display-id-block">
									<div className="view-content">
										<div className="highlighted-slider-2">
											<div className="flex-bullet-slider">
												<ul className="slides">
													{/*{slideshow}*/}

													<img
														className="img-responsive img-full-width"
														style={{ pointerEvents: "none" }}
														src={congregation}
														width="1440"
														height="900"
													/>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Slider;
