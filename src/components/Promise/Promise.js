import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Promise.css';
import pricingIcon from '../../img/pricing-icon.png';
import securityIcon from '../../img/security-icon.png';
import tourGuideIcon from '../../img/tour-guide-icon.png';
import customerServiceIcon from '../../img/customer-service-icon.png';

class PromiseComponent extends Component {
  render () {
    return (
      <div className="promise">
        <Grid>
          <Row>
            <h1>Why choose us?</h1>
            <Col className="tileIcon" lg={3} md={6} sm={6} xs={12}>
              <div className="tile-icon-wrap">
                <img width={90} height={90} alt="pricing-icon" src={pricingIcon} />
              </div>
              <h4>Best price guarantee</h4>
              <p>We make reservations through our website and we make sure you get the best price guarantee</p>
            </Col><Col className="tileIcon" lg={3} md={6} sm={6} xs={12}>
              <div className="tile-icon-wrap">
                <img width={90} height={90} alt="tour-guide-icon" src={tourGuideIcon} />
              </div>
              <h4>Professional local tour guide</h4>
              <p>Every trip will be led by a professional local guide, so you have fun and rest assured</p>
            </Col><Col className="tileIcon" lg={3} md={6} sm={6} xs={12}>
              <div className="tile-icon-wrap">
                <img width={90} height={90} alt="customer-service-icon" src={customerServiceIcon} />
              </div>
              <h4>Travel consultants team</h4>
              <p>Our team of professional travel consultants will answer your questions on your booking trip or on tour</p>
            </Col><Col className="tileIcon" lg={3} md={6} sm={6} xs={12}>
              <div className="tile-icon-wrap">
                <img width={90} height={90} alt="security-icon" src={securityIcon} />
              </div>
              <h4>Simple and secure booking</h4>
              <p>The booking process is very safe and simple, we provide a secure online payment system, so that you are more at ease</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
};

export default PromiseComponent;
