/* eslint-disable */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Popup from "reactjs-popup";

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

								<h5 className="text-center">
									<p>
										Due to the Greek Festival this weekend, Cornerstone Church Service for Sunday 26/2/2023 will be held
										in the Italian Hall, 77 Federal Street North Hobart.
									</p>
									<p>Federal Street will be closed from Argyle Street to Thomas Street.</p>
									<p>Access to the Italian Hall will be from the Elizabeth Street end of Federal Street.</p>
								</h5>
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
