import React, { Component } from "react";

class MensMinistry extends Component {
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
									<h1>Men&apos;s Ministry</h1>
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
									<div id="block-system-main" className="block block-system">
										<div className="content">
											<div className="node node-page clearfix">
												<div className="content">
													<div className="row">
														<div className="col-xs-12">
															<p className="ministry-text">
																<strong>
																	Proverbs 29:23
																	<br />
																	<em>" A man's pride brings him low, but a man of lowly spirit gains honor"</em>
																</strong>
															</p>
															<p className="ministry-text">
																Our men meet together for fellowship and for mutual support in their roles as leaders in
																their families and within the Church. Men’s breakfasts and other events are held
																throughout the year.
															</p>
															<p className="ministry-text">
																Please see <a href="/events">our calendar</a> for details of upcoming Men&apos;s
																Ministry event dates and times.
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
				</div>
			</section>
		);
	}
}

export default MensMinistry;
