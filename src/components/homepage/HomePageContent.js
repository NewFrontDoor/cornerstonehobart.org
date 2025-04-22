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
              <SiteNotification showNotification={true} content="Please note that THIS Sunday, the 27th of April 2025, Cornerstone will be meeting at the Polish Club instead of our usual location. The address is 20 New Town Rd, New Town 7008" onClose = {(bool)=>{return !bool}}/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomePageContent;
