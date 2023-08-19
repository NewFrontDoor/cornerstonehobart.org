import React, { Component } from "react";

//import Male from "../../../assets/people/Male.png";
//import Female from "../../../assets/people/Female.png";
import simonImg from "../../../assets/people/Boonstra,Simon.png";
import derrickImg from "../../../assets/people/Clack,Derrick.png";
import libbyImg from "../../../assets/people/Dilger,Libby.png";
import amyImg from "../../../assets/people/Glynn,Amy.png";
import janeImg from "../../../assets/people/Maarseveen,Jane.png";
import desImg from "../../../assets/people/Richardson,Des.png";
import nathanielImg from "../../../assets/people/Richardson,Nathaniel.png";
import trishImg from "../../../assets/people/Smith,Trish.png";
import davidImg from "../../../assets/people/VanEmmerik,David.png";
import markImg from "../../../assets/people/Mark Powell.jpg";
import bevanImg from "../../../assets/people/Bevan van Rooyen.jpg";
import jaccoImg from "../../../assets/people/Jacco Vonk.jpg";
import robynImg from "../../../assets/people/Robyn van Rooyen.jpg";
import geraldImg from "../../../assets/people/Gerald Coombe.jpg";
import Person from "../../models/Person";

class OurPeople extends Component {
	render() {
		return (
			<section>
				<div
					id="top-content-region"
					className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1"
				>
					<div className="container">
						<div className="row">
							<div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
								<div id="page-title-block" className="page-title block">
									<h1>Our People</h1>
								</div>
							</div>

							<div
								id="top-content-right-region"
								className="top-content-right col-xs-12 col-md-6 text-right text-center-sm"
							>
								<div id="page-breadcrumbs-block" className="page-breadcrumbs block">
									<div className="breadcrumbs">
										<a href="/">Home</a>
										<span className="delimiter">›</span>
										<span title="" className="nolink">
											Visit Us
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="content-region">
					<div className="container">
						<div className="row">
							<div id="main-content-region" className="main-content col-xs-12">
								<div className="region region-content">
									<div id="block-system-main" className="block block-system">
										<div className="content">
											<div className="node node-page clearfix">
												<div className="content">
													<div className="row">
														<div className="col-md-12">
															<h2 className="header-lightBlue text-center">Elders</h2>
															<p className="text-center">
																<strong>
																	Contact:{" "}
																	<a href="mailto:elders@cornerstonehobart.com">elders@cornerstonehobart.com</a>
																</strong>
															</p>
															<br />
															<Person name="Simon Boonstra" title="Elder" image={simonImg} />
															<Person name="Derrick Clack" title="Elder" image={derrickImg} />
															<Person name="Mark Powell" title="Pastor (Teaching Elder)" image={markImg} />
															<Person name="Des Richardson" title="Elder" image={desImg} />
															<Person name="Nathaniel Richardson" title="Elder" image={nathanielImg} />
															<Person name="Jacco Vonk" title="Elder" image={jaccoImg} />
														</div>
													</div>
													<div className="row">
														<div className="col-md-12">
															<h2 className="header-lightBlue text-center">Deacons</h2>
															<Person name="Amy Glynn" title="Deacon" image={amyImg} />
															<Person name="Jane Maarseveen" title="Deacon" image={janeImg} />
															<Person name="Trish Smith" title="Deacon" image={trishImg} />
															<Person name="David Van Emmerik" title="Deacon" image={davidImg} />
															<Person name="Bevan Van Rooyen" title="Deacon" image={bevanImg} />
														</div>
													</div>

													<div className="row">
														<div className="col-md-12">
															<h2 className="header-lightBlue text-center">Board of Management</h2>
															<p className="text-center">
																<strong>
																	Contact: <a href="mailto:bom@cornerstonehobart.com">bom@cornerstonehobart.com</a>
																</strong>
															</p>

															<p className="text-center  padding-bottom-15">
																<strong>Cornerstone Elders are ex officio members of the Board of Management</strong>
															</p>

															<Person name="Gerald Coombe" title="" image={geraldImg} />
															<Person name="Libby Dilger" title="" image={libbyImg} />
															<Person name="David Van Emmerik" title="Secretary" image={davidImg} />
															<Person name="Robyn Van Rooyen " title="Treasurer" image={robynImg} />
															<Person name="Jacco Vonk" title="" image={jaccoImg} />
														</div>
													</div>

													<div className="row">
														<div className="col-md-12">
															<h2 className="header-lightBlue text-center">Church Staff</h2>

															<div className="row">
																<Person name="Mark Powell" title="Pastor (Teaching Elder)" image={markImg} />
																<Person name="Libby Dilger" title="Administrator" image={libbyImg} />
															</div>
														</div>
													</div>
													<br />
													<br />
												</div>
											</div>
										</div>
									</div>
								</div>{" "}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default OurPeople;
