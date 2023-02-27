import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "mineral-ui/themes";

import configuration from "./config/config.js"; //eslint-disable-line
import Navigation from "./components/Navigation";
import HomePageWrapper from "./components/homepage/HomePageWrapper";
import OtherPageWrapper from "./components/OtherPageWrapper";
import Footer from "./components/Footer";

import "./assets/css/mediaelement/mediaelementplayer.min.css";

import "./assets/css/simplenews/simplenews.css";
import "./assets/css/alignmentstyles.css";

import "./assets/css/font-awesome/font-awesome.min.css";

import "./assets/css/tb_megamenu/bootstrap.css";
import "./assets/css/tb_megamenu/base.css";
import "./assets/css/tb_megamenu/default.css";
import "./assets/css/tb_megamenu/compatibility.css";

import "./assets/nestor/css/bootstrap.min.css";
import "./assets/nestor/css/ionicons.min.css";
import "./assets/nestor/css/flexslider.css";
import "./assets/nestor/css/style.css";

import "./assets/css/fontyourface/font.css";

import "./assets/nestor/css/color/blue.css";

import "./assets/css/custom.css";
import "./assets/css/events.css";
import "./assets/css/notification.css";

//import SiteNotification from "./components/SiteNotification";

const notificationID = "2023greekfestival";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { showNotification: localStorage.getItem(notificationID) || true };
	}

	componentDidMount() {
		const showNotification = localStorage.getItem(notificationID);
		this.setState({ showNotification: !showNotification });
	}

	onNotificationClose = () => {
		this.setState({ showNotification: false });
		//set localstorage to only show notification once if desired
		//localStorage.setItem(notificationID, false);
	};

	render() {
		return (
			<ThemeProvider>
				<Router>
					<div className="App">
						<Route path="*" component={Navigation} />
						<Route exact path="/" component={HomePageWrapper} />
						<Route path="/:path" component={OtherPageWrapper} />

						{/* <Route
							exact
							path={"/"}
							component={() => (
								<SiteNotification showNotification={this.state.showNotification} onClose={this.onNotificationClose} />
							)}
						/> */}

						<Route path="*" component={Footer} />
					</div>
				</Router>
			</ThemeProvider>
		);
	}
}

export default App;
