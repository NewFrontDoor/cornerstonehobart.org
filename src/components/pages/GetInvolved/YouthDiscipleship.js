import React, { Component } from "react";

class YouthDiscipleship extends Component {
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
									<h1>Youth Discipleship</h1>
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
											Get Involved
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
									<div className="content">
										<div className="node node-page clearfix">
											<div className="content">
												<div className="row">
													<div className="col-xs-12">
														<p className="ministry-text">
															<strong>
																Proverbs 1:8
																<br />
																<em>
																	" Listen, my son, to your father&apos;s instruction and do not forsake your
																	mother&apos;s teaching."
																</em>
															</strong>
														</p>
														<p className="ministry-text">
															For Youth Discipleship enquiries, please email{" "}
															<a href="mailto:pastor@cornerstonehobart.com">pastor@cornerstonehobart.com</a>.
														</p>
													</div>
												</div>
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

export default YouthDiscipleship;
