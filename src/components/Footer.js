import React, { Component } from 'react';
import ElvantoLogo from '../assets/elvanto-icon-white.svg'

class Footer extends Component {
  render() {
    return (
      <section>
        {/* Footer Columns region */}

        <div id="footer-columns-region" className="footer-columns region-30 block-30 bg-color-grayDark2 text-color-light">
          <div className="container">
            <div className="row">

              <div id="footer-first-column-region" className="footer-first-column col-xs-12 col-md-4">
                <div className="region region-footer-first-column">

                  <div className="block block-block">


                    <div className="content">
                      <div className="footer-address text-center">
                        <i className="icon ion-ios7-location-outline size-32 margin-bottom-20"></i>
                        <p>
                          <a href="https://goo.gl/maps/PAtkKDuPaQYGRUj7A" target="_blank" rel="noreferrer noopener">Cornerstone Presbyterian Church</a><br />
                          67 Federal St, North Hobart TAS 7000<br />
                          PO Box 4742, Bathurst Street PO, Hobart 7000
                        </p>
                      </div> {/* /footer-address */}  </div>
                  </div>  </div>
              </div> {/* /footer-first-column-region */}

              <div id="footer-second-column-region" className="footer-second-column col-xs-12 col-md-4">
                <div className="region region-footer-second-column">

                  <div id="block-block-8" className="block block-block">


                    <div className="content">
                      <div className="footer-mail text-center">
                        <i className="icon ion-ios7-email-outline size-32 margin-bottom-20"></i>
                        <p><a href="mailto:admin@cornerstonehobart.com">admin@cornerstonehobart.com</a><br />
                          <a href="mailto:pastor@cornerstonehobart.com">pastor@cornerstonehobart.com</a><br/>
                          <a href="mailto:elders@cornerstonehobart.com">elders@cornerstonehobart.com</a></p>


                      </div> {/* /footer-mail */}  </div>
                  </div>  </div>
              </div> {/* /footer-second-column-region */}

              <div id="footer-third-column-region" className="footer-third-column col-xs-12 col-md-4">
                <div className="region region-footer-third-column">

                  <div className="block block-block">


                    <div className="content">
                      <div className="footer-phone text-center">
                        <i className="icon ion-social-facebook-outline size-32 margin-bottom-20"></i>
                        <i className="icon ion-social-rss-outline size-32 margin-bottom-20" style={{ marginLeft: "10px" }}></i>
                        <a href="https://cornerstonehobart.elvanto.com.au/login" target="_blank" rel="noreferrer noopener"><img style={{ height: "24px", width: "24px", marginLeft: "7px", verticalAlign: "baseline" }} src={ElvantoLogo} alt="" /></a>
                        <p><a href="https://www.facebook.com/cornerstonehobart/">facebook.com/CornerstoneHobart</a><br />
                          <a href="https://itunes.apple.com/au/podcast/cornerstone-presbyterian-church/id1447574546?mt=2" target="_blank" rel="noreferrer noopener">Subscribe to Our Podcast</a><br/>
                          <a href="https://www.youtube.com/c/CornerstoneChurchHobart" target="_blank" rel="noreferrer noopener">YouTube Channel</a>
                          </p>
                      </div>  </div>
                  </div>  </div>
              </div> {/* /footer-third-column-region */}


            </div> {/* /row */}
          </div> {/* /container */}
        </div> {/* /footer-columns-region */}

        {/* /Footer Columns region */}

        {/* Footer region */}

        <footer className="region-10 block-10 bg-color-grayDark1 text-color-light">
          <div className="container">
            <div className="row">

              <div id="footer-left-region" className="footer-left region-bottom-sm-0 text-center-sm footer_left col-xs-12 col-md-6">
                <div className="region region-footer-left">

                  <div id="block-block-10" className="block block-block">


                    <div className="content">
                      <div className="copyright">
                        <p>Website built and maintained by <a href="http://newfrontdoor.org">New Front Door</a></p>
                      </div> {/* /copyright */}  </div>
                  </div>  </div>
              </div> {/* /footer-left-region */}

              <div id="footer-right-region" className="footer-right region-top-sm-0 text-right text-center-sm footer_right col-xs-12 col-md-6">
                <div className="region region-footer-right">

                  <div className="block block-block">


                    <div className="content">
                      <div className="social-networks-footer">
                        <a href="https://www.facebook.com/NewFrontDoorIT/"><i className="icon ion-social-facebook"></i></a>
                        <a href="https://twitter.com/NewFrontDoorIT"><i className="icon ion-social-twitter"></i></a>
                        <a href="mailto:contactus@newfrontdoor.org"><i className="icon ion-email"></i></a>
                      </div> {/* /social-networks-footer */}  </div>
                  </div>  </div>
              </div> {/* /footer-right-region */}

            </div> {/* /row */}
          </div> {/* /container */}
        </footer>

        {/* /Footer region */}

        {/* Back to top button  */}
        <div id="back-to-top">
          <i className="ion-ios7-arrow-up"></i>
        </div>
        {/* End of Back to top button */}
      </section>
    );
  }
}

export default Footer;
