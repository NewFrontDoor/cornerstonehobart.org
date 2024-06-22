import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; //eslint-disable-line
import OtherPageContent from "./OtherPageContent";

import GrowthGroups from "./pages/GetInvolved/GrowthGroups";
import MensMinistry from "./pages/GetInvolved/MensMinistry";
import YouthDiscipleship from "./pages/GetInvolved/YouthDiscipleship";
import WomensMinistry from "./pages/GetInvolved/WomensMinistry";
//import YoungAdults from './pages/GetInvolved/YoungAdults';
import PrayerMeetings from "./pages/GetInvolved/PrayerMeetings";

import Sermons from "./pages/Resources/Sermons";
import AllSermonsInfinite from "./pages/Resources/AllSermonsInfinite";
import SermonPage from "./pages/Resources/SermonPage";
import SermonSeriesPage from "./pages/Resources/SermonSeriesPage";
import SystematicTheologyOverview from "./pages/Resources/SystematicTheologyOverview";
import WestminsterConfession from "./pages/Resources/WestminsterConfession";

import OurPeople from "./pages/VisitUs/OurPeople";
import OurVision from "./pages/VisitUs/OurVision";
import Parking from "./pages/VisitUs/Parking";
import WhatWeBelieve from "./pages/VisitUs/WhatWeBelieve";
import WorshipServices from "./pages/VisitUs/WorshipServices";

import ContactUs from "./pages/ContactUs";
import Events from "./pages/Events/EventsElvanto";
import WWF from "./pages/Events/WWF";
import SupportUs from "./pages/SupportUs";
import WomensWeekendAway from "./pages/GetInvolved/WomensWeekendAway";
import BibleCourses from "./pages/Resources/BibleCourses";
//import MensCalendar from './pages/Events/MensCalendar';

class OtherPageWrapper extends Component {
	render() {
		return (
			<section>
				<Switch>
					<Route exact path="/GrowthGroups" component={GrowthGroups} />
					<Route exact path="/MensMinistry" component={MensMinistry} />
					<Route exact path="/YouthDiscipleship" component={YouthDiscipleship} />
					<Route exact path="/WomensMinistry" component={WomensMinistry} />
					<Route exact path="/WomensWeekendAway" component={WomensWeekendAway} />
					{/*<Route exact path="/YoungAdults" component={YoungAdults} />*/}
					<Route exact path="/PrayerMeetings" component={PrayerMeetings} />

					<Route exact path="/AllSermons" component={AllSermonsInfinite} />
					<Route exact path="/Sermons" component={Sermons} />
					<Route exact path="/node/:nid" component={SermonPage} />
					<Route exact path="/sermon/:nid" component={SermonPage} />
					<Route exact path="/sermon/:nid/:title" component={SermonPage} />
					<Route exact path="/series/:nid" component={SermonSeriesPage} />
					<Route exact path="/series/:nid/:title" component={SermonSeriesPage} />
					<Route exact path="/node/:nid/:title" component={SermonPage} />
					<Route exact path="/SystematicTheologyCourse" component={SystematicTheologyOverview} />
					<Route exact path="/BibleCourses" component={BibleCourses} />
					<Route exact path="/WestminsterConfession" component={WestminsterConfession} />

					<Route exact path="/OurPeople" component={OurPeople} />
					<Route exact path="/OurVision" component={OurVision} />
					<Route exact path="/Parking" component={Parking} />
					<Route exact path="/WhatWeBelieve" component={WhatWeBelieve} />
					<Route exact path="/WorshipServices" component={WorshipServices} />

					<Route exact path="/ContactUs" component={ContactUs} />
					<Route exact path="/Events" component={Events} />
					{/*Temp event page*/}
					<Route exact path="/event/WomensWinterFestival" component={WWF} />

					<Route exact path="/SupportUs" component={SupportUs} />

					<Route path="/*" component={OtherPageContent} />
				</Switch>
			</section>
		);
	}
}

export default OtherPageWrapper;
