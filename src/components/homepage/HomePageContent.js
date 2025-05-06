import React, { Component } from 'react';

import LatestSermon from './LatestSermon';
import WhereToFindUs from './WhereToFindUs';
import UpcomingEvents from './UpcomingEventsElvanto';
import SiteNotification from '../SiteNotification';

class HomePageContent extends Component {
  render() {
    return (
      <section>
        <div className="content-2 bg-color-white text-color-default" >
          <div className="container">
            <div className="row">
              <LatestSermon />
              <WhereToFindUs />
              <UpcomingEvents />
              <SiteNotification showNotification = {true} content={"Please note upcoming venue changes. We will be meeting at the Polish Club this Sunday the 11th of May. Address is: 20 New Town Rd, New Town 7008."} onClose={(state)=>{state = !state}}/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomePageContent;
