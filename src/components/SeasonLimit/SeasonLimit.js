import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './SeasonLimit.css';

class SeasonLimit extends Component {
  render () {
    return (
      <div className="suggested textcenter">
        <Grid>
          <h3 className="desHeader">Season limit</h3>
          <hr/>
          <Row>
            <Col lg={4} md={4} sm={4} xs={12}>
              <a href="http://www.freedtour.com/spring-summer-Korea" target="_blank">
                <div className="sugg-l kr_bg">
                  <h3 className="catgy-title">
                    Korean spring and summer day group
                  </h3>
                </div>
              </a>
            </Col>
            <Col lg={4} md={4} sm={4} xs={12}>
              <a href="http://www.freedtour.com/spring-summer-japan" target="_blank">
                <div className="sugg-l jp_bg">
                  <h3 className="catgy-title">Japan selected cherry blossoms day group</h3>
                </div>
              </a>
            </Col>
            <Col lg={4} md={4} sm={4} xs={12}>
              <a href="http://www.freedtour.com/fuji-mountain" target="_blank">
                <div className="sugg-l fuji_bg">
                  <h3 className="catgy-title">Mount Fuji selected day group</h3>
                </div>
              </a>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default SeasonLimit;
