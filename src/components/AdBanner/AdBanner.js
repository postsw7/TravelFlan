import React, { Component  } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './AdBanner.css';
import matchaBanner from '../../img/matcha_banner.jpg';
import tfBanner from '../../img/tf_banner.jpg';
import freeDtourBanner from '../../img/freeDtour_banner.png';
import vloveKpopBanner from '../../img/vlovekpop_ad_square.gif';
import freeDtourBigBanner from '../../img/freeDtour_Big.png';

class AdBanner extends Component {
  render () {
    return (
      <div>
        <div className="advBanner">
          <Grid>
            <Row>
              <Col lg={12} xsHidden>
                <a href="https://bit.ly/2oqgXsr" target="_blank">
                  <img src={tfBanner} alt="tfBanner"/>
                </a>
              </Col>
            </Row>
          </Grid>
        </div>
        <div className="advBanner">
          <Grid>
            <Row>
              <Col lg={12} lgHidden mdHidden smHidden>
                <a href="https://goo.gl/24ZmQV" target="_blank">
                  <img src={vloveKpopBanner} alt="vloveKpopBanner"/>
                </a>
              </Col>
            </Row>
          </Grid>
        </div>
        <br/>
        <div className="advBanner">
          <Grid>
            <Row>
              <Col lg={12} xsHidden>
                <a href="http://mcha-tw.com/" target="_blank">
                  <img src={matchaBanner} alt="matchaBanner"/>
                </a>
              </Col>
            </Row>
          </Grid>
        </div>
        <br/>
        <div className="advBanner">
          <Grid>
            <Row>
              <Col lg={12} xsHidden>
                <a href="http://www.mapple.co.jp/digjapan/tw/?utm_source=tw_FD&utm_medium=bn_01&utm_campaign=DiGTWFD" target="_blank">
                  <img src={freeDtourBanner} alt="freeDtourBanner"/>
                </a>
              </Col>
            </Row>
          </Grid>
        </div>
        <div className="advBanner">
          <Grid>
            <Row>
              <Col lg={12} lgHidden mdHidden smHidden>
                <a href="http://www.mapple.co.jp/digjapan/tw/?utm_source=tw_FD&utm_medium=bn_01&utm_campaign=DiGTWFD" target="_blank">
                  <img src={freeDtourBigBanner} alt="freeDtourBigBanner"/>
                </a>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default AdBanner;
