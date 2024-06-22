/* eslint-disable */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Popup from "reactjs-popup";
import venueImage from "../assets/UpcomingServices.png";

class SiteNotification extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return this.props.showNotification ? (
			<section className="site-notification">
				<Popup modal defaultOpen={true} closeOnDocumentClick={false} onClose={() => this.props.onClose()}>
					{(close) => (
						<div className="notification-popup">
							<span>
								<a className="close" onClick={close}>
									Close &times;
								</a>
								{this.props.content}

								<div className="header">
									<h3>Welcome to Cornerstone Hobart</h3>
								</div>

								{/* <h5 className="text-center">Please note upcoming venue changes</h5> */}
								<div className="text-center" style={{ paddingTop: "1em", paddingBottom: "1em" }}>
									<img src={venueImage} className="text-center" style={{ maxWidth: "100%" }} />
								</div>
							</span>
						</div>
					)}
				</Popup>
			</section>
		) : (
			""
		);
	}
}

export default SiteNotification;
