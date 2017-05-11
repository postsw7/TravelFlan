import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Destination.css';
import tokyoBg from '../../img/tokyo_bg.jpg';
import kyotoBg from '../../img/kyoto_bg.jpg';
import osakaBg from '../../img/osaka_bg.jpg';
import okinawaBg from '../../img/okinawa_bg.jpg';
import nagoyaBg from '../../img/nagoya_bg.jpg';
import seoulBg from '../../img/seoul_bg.jpg';
import kyushuBg from '../../img/kyushu_bg.jpg';
import busanBg from '../../img/busan_bg.jpg';

class Destination extends Component {
  render () {
    return (
      <div className="hotDestination">
        <Grid>
          <div className="slogan">
            <h3 className="desHeader">
              <font>The most popular destination</font>
            </h3>
            <p className="desMsg">
              Explore the latest and most fun activities, add travel fun
            </p>
          </div>
          <Row>
            <Col lg={3} md={3} sm={6} xs={6} className="col">
              <a href="http://www.freedtour.com/zh-TW/city/tokyo" target="_blank">
                <div className="desPhoto">
                  <img className="img-responsive" src={tokyoBg} alt="tokyoBg"/>
                  <div className="overlay">
                    <h1 className="showOverlay">
                      Tokyo<br/>
                      <div className="cntry">
                        Japan
                      </div>
                    </h1>
                  </div>
                </div>
              </a>
            </Col>
            <Col lg={3} md={3} sm={6} xs={6} className="col">
              <a href="http://www.freedtour.com/zh-TW/city/kyoto" target="_blank">
                <div className="desPhoto">
                  <img className="img-responsive" src={kyotoBg} alt="kyotoBg"/>
                  <div className="overlay">
                    <h1 className="showOverlay">
                      Kyoto<br/>
                      <div className="cntry">
                        Japan
                      </div>
                    </h1>
                  </div>
                </div>
              </a>
            </Col>
            <Col lg={3} md={3} sm={6} xs={6} className="col">
              <a href="http://www.freedtour.com/zh-TW/city/osaka" target="_blank">
                <div className="desPhoto">
                  <img className="img-responsive" src={osakaBg} alt="osakaBg"/>
                  <div className="overlay">
                    <h1 className="showOverlay">
                      Osaka<br/>
                      <div className="cntry">
                        Japan
                      </div>
                    </h1>
                  </div>
                </div>
              </a>
            </Col>
            <Col lg={3} md={3} sm={6} xs={6} className="col">
              <a href="http://www.freedtour.com/zh-TW/city/okinawa" target="_blank">
                <div className="desPhoto">
                  <img className="img-responsive" src={okinawaBg} alt="okinsawaBg"/>
                  <div className="overlay">
                    <h1 className="showOverlay">
                      Okinawa<br/>
                      <div className="cntry">
                        Japan
                      </div>
                    </h1>
                  </div>
                </div>
              </a>
            </Col>
            <Col lg={3} md={3} sm={6} xs={6} className="col">
              <a href="http://www.freedtour.com/zh-TW/city/nagoya" target="_blank">
                <div className="desPhoto">
                  <img className="img-responsive" src={nagoyaBg} alt="nagoyaBg"/>
                  <div className="overlay">
                    <h1 className="showOverlay">
                      Nagoya<br/>
                      <div className="cntry">
                        Japan
                      </div>
                    </h1>
                  </div>
                </div>
              </a>
            </Col>
            <Col lg={3} md={3} sm={6} xs={6} className="col">
              <a href="http://www.freedtour.com/zh-TW/city/seoul" target="_blank">
                <div className="desPhoto">
                  <img className="img-responsive" src={seoulBg} alt="seoulBg"/>
                  <div className="overlay">
                    <h1 className="showOverlay">
                      Seoul<br/>
                      <div className="cntry">
                        Korea
                      </div>
                    </h1>
                  </div>
                </div>
              </a>
            </Col>
            <Col lg={3} md={3} sm={6} xs={6} className="col">
              <a href="http://www.freedtour.com/zh-TW/city/kyushu" target="_blank">
                <div className="desPhoto">
                  <img className="img-responsive" src={kyushuBg} alt="kyushuBg"/>
                  <div className="overlay">
                    <h1 className="showOverlay">
                      Kyushu<br/>
                      <div className="cntry">
                        Japan
                      </div>
                    </h1>
                  </div>
                </div>
              </a>
            </Col>
            <Col lg={3} md={3} sm={6} xs={6} className="col">
              <a href="http://www.freedtour.com/zh-TW/city/busan" target="_blank">
                <div className="desPhoto">
                  <img className="img-responsive" src={busanBg} alt="busanBg"/>
                  <div className="overlay">
                    <h1 className="showOverlay">
                      Busan<br/>
                      <div className="cntry">
                        Korea
                      </div>
                    </h1>
                  </div>
                </div>
              </a>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Destination;
