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
										Cornerstone Church Sunday Service is usually held at 10am in the Hellenic Hall, 67 Federal Street,
										North Hobart.
									</p>
									<p>
										<u>UPCOMING EXCEPTIONS</u>
									</p>
									<p>
										SUNDAY 22 OCTOBER — This is our Church Camp weekend. Our Sunday service will be held at 10am at Blue
										Lagoon Christian Camp, 41-55 Bally Rd, Dodges Ferry.
									</p>
									<p>
										SUNDAY 29 OCTOBER — Reformation Day Service. This will be held at St John’s Presbyterian Church, 188
										Macquarie St, Hobart
									</p>
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
