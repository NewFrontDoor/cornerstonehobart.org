/* eslint-disable */
import React, { Component } from "react";
import logo from "../assets/Cornerstone-Logo.svg";

class Navigation extends Component {
	render() {
		return (
			<header className="header-1 region-0 block-0">
				<div className="container">
					<div className="row">
						<div id="logo-region" className="logo col-xs-12 col-md-3 text-center-sm">
							<a href="/">
								<img src={logo} alt="Home" className="logo" />
							</a>
						</div>{" "}
						{/* /logo-region */}
						<div id="menu-region" className="col-xs-12 col-md-9">
							<div className="region region-header">
								<div className="block block-menu hidden-md hidden-lg">
									<div className="content">
										<nav className="navbar nestor-main-menu" role="navigation">
											{/* Menu button for mobile display */}
											<div className="navbar-header">
												<button
													type="button"
													className="navbar-toggle"
													data-toggle="collapse"
													data-target=".nav-collapse"
												>
													MENU
												</button>
											</div>
										</nav>
									</div>
								</div>
								<div className="block block-tb-megamenu">
									<div className="content">
										<div className="tb-megamenu tb-megamenu-main-menu">
											{/*Full Menu Collapsed
                        <button data-target=".nav-collapse" data-toggle="collapse" className="btn btn-navbar tb-megamenu-button" type="button"><i className="fa fa-reorder"></i></button>
                      */}

											<div className="nav-collapse  always-show">
												<ul className="tb-megamenu-nav nav level-0 items-5">
													<li className="tb-megamenu-item level-1 mega dropdown">
														<a href="javascript:void(0)" className="dropdown-toggle" title="Visit Us">
															Visit Us<span className="caret"></span>
														</a>
														<div
															style={{ width: "750px" }}
															className="tb-megamenu-submenu dropdown-menu mega-dropdown-menu nav-child"
														>
															<div className="mega-dropdown-inner">
																<div className="tb-megamenu-row row-fluid">
																	<div className="tb-megamenu-column span3  mega-col-nav">
																		<div className="tb-megamenu-column-inner mega-inner clearfix">
																			<div className="tb-megamenu-block tb-block tb-megamenu-block">
																				<div className="block-inner">
																					<div className="block block-block">
																						<div className="content">
																							<h3>Welcome to Cornerstone Presbyterian Church...</h3>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="tb-megamenu-column span3  mega-col-nav">
																		<div className="tb-megamenu-column-inner mega-inner clearfix">
																			<ul className="tb-megamenu-subnav mega-nav level-1 items-4">
																				<li className="tb-megamenu-item level-2 mega">
																					<a href="#" title="AboutUs">
																						About Us
																					</a>
																				</li>
																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/WhatWeBelieve">What We Believe</a>
																				</li>

																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/OurVision">Our Vision</a>
																				</li>

																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/OurPeople">Our People</a>
																				</li>
																			</ul>
																		</div>
																	</div>

																	<div className="tb-megamenu-column span3  mega-col-nav">
																		<div className="tb-megamenu-column-inner mega-inner clearfix">
																			<ul className="tb-megamenu-subnav mega-nav level-1 items-4">
																				<li className="tb-megamenu-item level-2 mega">
																					<a href="#" title="Visit Us">
																						Visit Us
																					</a>
																				</li>

																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/WorshipServices">Worship Services</a>
																				</li>

																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/Parking">Parking</a>
																				</li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</li>
													<li className="tb-megamenu-item level-1 mega dropdown">
														<a href="javascript:void(0)" className="dropdown-toggle" title="Visit Us">
															Get Involved<span className="caret"></span>
														</a>
														<div
															style={{ width: "750px" }}
															className="tb-megamenu-submenu dropdown-menu mega-dropdown-menu nav-child"
														>
															<div className="mega-dropdown-inner">
																<div className="tb-megamenu-row row-fluid">
																	<div className="tb-megamenu-column span3  mega-col-nav">
																		<div className="tb-megamenu-column-inner mega-inner clearfix">
																			<div className="tb-megamenu-block tb-block tb-megamenu-block">
																				<div className="block-inner">
																					<div className="block block-block">
																						<div className="content">
																							<h3>Ministries you can get involved with...</h3>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="tb-megamenu-column span3  mega-col-nav">
																		<div className="tb-megamenu-column-inner mega-inner clearfix">
																			<ul className="tb-megamenu-subnav mega-nav level-1 items-4">
																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/PrayerMeetings">Prayer Meetings</a>
																				</li>
																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/GrowthGroups">Growth Groups</a>
																				</li>
																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/MensMinistry">Men's Ministry</a>
																				</li>
																			</ul>
																		</div>
																	</div>

																	<div className="tb-megamenu-column span4  mega-col-nav">
																		<div className="tb-megamenu-column-inner mega-inner clearfix">
																			<ul className="tb-megamenu-subnav mega-nav level-1 items-4">
																				{/*}<li className="tb-megamenu-item level-2 mega">
                                            <a href="/YoungAdults" >Young Adults</a>
                                          </li>*/}
																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/WomensMinistry">Women's Ministry</a>
																				</li>
																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/YouthDiscipleship">Youth Discipleship</a>
																				</li>

																				{/*<li className="tb-megamenu-item level-2 mega">
                                          <a href="/WomensWeekendAway" >Women's Weekend Away</a>
                                        </li>*/}
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</li>

													<li className="tb-megamenu-item level-1 mega dropdown">
														<a href="javascript:void(0)" className="dropdown-toggle" title="Resources">
															Resources<span className="caret"></span>
														</a>
														<div
															data-width=""
															className="tb-megamenu-submenu dropdown-menu mega-dropdown-menu nav-child"
														>
															<div className="mega-dropdown-inner">
																<div className="tb-megamenu-row row-fluid">
																	<div className="tb-megamenu-column span3  mega-col-nav">
																		<div className="tb-megamenu-column-inner mega-inner clearfix">
																			<div
																				data-type="block"
																				data-block="block--56"
																				className="tb-megamenu-block tb-block tb-megamenu-block"
																			>
																				<div className="block-inner">
																					<div className="block block-block">
																						<div className="content">
																							<h3>Please use any of our resources that you find useful...</h3>{" "}
																						</div>
																					</div>{" "}
																				</div>
																			</div>
																		</div>
																	</div>

																	<div className="tb-megamenu-column span3  mega-col-nav">
																		<div className="tb-megamenu-column-inner mega-inner clearfix">
																			<ul className="tb-megamenu-subnav mega-nav level-1 items-3">
																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/Sermons" title="Sermons">
																						Sermons
																					</a>
																				</li>
																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/SystematicTheologyCourse">Systematic Theology Course</a>
																				</li>
																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/BibleCourses">Bible Courses</a>
																				</li>
																			</ul>
																		</div>
																	</div>

																	<div className="tb-megamenu-column span4  mega-col-nav">
																		<div className="tb-megamenu-column-inner mega-inner clearfix">
																			<ul className="tb-megamenu-subnav mega-nav level-1 items-5">
																				<li className="tb-megamenu-item level-2 mega">
																					<a href="/WestminsterConfession">Westminster Confession of Faith</a>
																				</li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</li>

													<li className="tb-megamenu-item level-1 mega">
														<a href="/Events">Calendar</a>
													</li>

													<li className="tb-megamenu-item level-1 mega">
														<a href="/SupportUs">Support Us</a>
													</li>

													<li className="tb-megamenu-item level-1 mega">
														<a href="/ContactUs" title="Contact Us">
															Contact Us
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>{" "}
							</div>
						</div>{" "}
						{/* /menu-region */}
					</div>{" "}
					{/* /row */}
				</div>{" "}
				{/* /container */}
			</header>
		);
	}
}

export default Navigation;
