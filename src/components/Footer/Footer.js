import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Footer.css';

class Footer extends Component {
  render () {
    return (
      <div>
        <div id="footer">
          <Grid>
            <Row>
              <Col xs={12} sm={12} md={4} lg={3}>
                <Row>
                  <Col xs={4} sm={3} md={12} lg={12}>
                    <h5>Contact us</h5>
                  </Col>
                  <Col xs={8} sm={9} md={12} lg={12}>
                    <p>Email: cs@freedtour.com</p>
                    <p>Telephone (Hong Kong): + (852) 8193-1353</p>
                    <p>Phone (Korea): + (82) 707-847-6185</p>
                    <p>WHATSAPP: + (852) 6726-1798</p>
                    <p>Room 1205-1208, 12 / F, Cyberport, Hong Kong</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} sm={12} md={3} lg={3}>
                <Row>
                  <Col xs={4} sm={3} md={12} lg={12}>
                    <h5>On the music tour</h5>
                  </Col>
                  <Col xs={8} sm={9} md={12} lg={12}>
                    <p>about us</p>
                    <p>Travel blog</p>
                    <p>join us</p>
                    <p>Partner</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} sm={12} md={3} lg={3}>
                <Row>
                  <Col xs={4} sm={3} md={12} lg={12}>
                    <h5>Terms of Service</h5>
                  </Col>
                  <Col xs={8} sm={9} md={12} lg={12}>
                    <p>Privacy Policy</p>
                    <p>Terms of use</p>
                    <p>Cancellation policy</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} sm={12} md={2} lg={3}>
                <Row>
                  <Col xs={4} sm={3} md={12} lg={12}>
                    <h5>Help</h5>
                  </Col>
                  <Col xs={8} sm={9} md={12} lg={12}>
                    <p>common probelm</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
          <hr/>
          <div className="sns-icon">
            <Grid>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Row><font>FreeDtour TravelFlan's online travel self-service platform, is committed to providing you with one-stop travel services.</font></Row>
                <Row>
                  <div className="footer-icons">
                    <a href="https://www.facebook.com/freedtour" target="_blank">
                      <i className="fa fa-facebook fa-lg" aria-hidden="true"></i>
                    </a>
                    <a href="https://instagram.com/freedtour/" target="_blank">
                      <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
                    </a>
                    <a href="skype:freedtour?call">
                      <i className="fa fa-skype fa-lg" aria-hidden="true"></i>
                    </a>
                  </div>
                </Row>
              </Col>
            </Grid>
          </div>
        </div>
        <div className="copyRight">
          <font>© 2014 - 2015 freeD Group Limited. All Rights Reserved.
          </font>
        </div>
      </div>
    );
  }
}

export default Footer;
