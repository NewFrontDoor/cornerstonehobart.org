import React, { Component } from 'react';

import quarryYouthLogo from '../../../assets/quarryYouthLogo.png';

import FacebookFeed from './QuarryFacebookFeed';

class QuarryYouth extends Component {
  render() {
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Youth Group</h1>
                </div>
              </div>

              <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                  <div className="breadcrumbs">
                    <a href="/">Home</a>
                    <span className="delimiter">›</span>
                    <span title="" className="nolink">Get Involved</span>
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
                  <div className="content">
                    <div className="node node-page clearfix">
                      <div className="content">
                        <div className="row">

                          <div className="col-md-8 col-xs-12">
                            <img className="quarry-logo" src={quarryYouthLogo} alt="" />
                            <h3 className="header-lightBlue" style={{ marginTop: "0" }}>Quarry Youth</h3>

                            <p><strong>A Youth Group for students in Grade 6-12</strong><br /><br />

                              At Quarry, we're passionate about equipping our youth to be able to know God's word, so they can apply it to their lives.
                                We want to equip them to engage well with those around them from a biblical worldview. <br /><br />

                              Our motto is: <strong>Win, Build, Send.</strong><br />
                              We want to <strong>Win</strong> the youth to Christ, <strong>Build</strong> them up in their faith and equip them to live as Christians to be <strong>Sent</strong> out to reach those in their community.<br /><br />

                              <strong>Time:</strong><br />
                              Friday Night @ 5:30-7:30pm<br />
                              <strong>Location</strong><br />
                              <a href="https://goo.gl/maps/ejALw5wWuCx" rel="noopener noreferrer">Hope Christian Centre, 25 Tasma St. Hobart</a><br /><br />



                              <strong>Contact leader</strong><br />
                              Email: <a href="mailto:youth@cornerstonehobart.com">youth@cornerstonehobart.com</a><br />
                              Facebook: <a href="https://www.facebook.com/QuarryYouth"> /QuarryYouth</a>

                            </p>


                          </div>

                          <div className="col-md-3 col-xs-12" style={{ marginTop: "20px" }}>
                            <FacebookFeed />
                          </div>


                        </div>




                      </div>
                    </div>
                  </div>  </div>



              </div>




            </div>
          </div>
        </div>
      </section >
    );
  }
}

export default QuarryYouth;
