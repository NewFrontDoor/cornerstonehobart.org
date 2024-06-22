import React, { Component } from "react";

class WomensMinistry extends Component {
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
									<h1>Women's Ministry</h1>
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
																	Proverbs 31:30
																	<br />
																	<em>
																		" Charm is deceptive, and beauty is fleeting; but a woman who fears the Lord is to
																		be praised."
																	</em>
																</strong>
															</p>
															<p className="ministry-text">
																We advertise and encourage participation in several Women&apos;s events throughout the
																year, including:
															</p>
															<ul style={{ listStyle: "none", lineHeight: "35px" }}>
																<li>
																	<a href="https://twbcsouth.com" rel="noreferrer noopener" target="_blank">
																		Tasmanian Women&apos;s Bible Conference (South)
																	</a>
																</li>
																<li>
																	<a href="https://www.equip.org.au/" rel="noreferrer noopener" target="_blank">
																		EQUIP Women
																	</a>
																</li>
																<li>
																	<a
																		href="https://www.facebook.com/WWATasmania"
																		rel="noreferrer noopener"
																		target="_blank"
																	>
																		Women&apos;s Weekend Away
																	</a>
																</li>
															</ul>
															<p className="ministry-text">
																Please see <a href="/events">our calendar</a> for details of upcoming Women&apos;s
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

export default WomensMinistry;
