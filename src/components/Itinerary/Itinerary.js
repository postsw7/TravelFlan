import React, { Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Itinerary.css';

class Itinerary extends Component {
  render () {
    return (
      <div className="thingsTodo">
        <Grid>
          <div className="slogan">
            <h3 className="desHeader">Popular itinerary</h3>
            <p className="desMsg">Professional traveler for you to explore and promote around the new and interesting journey</p>
          </div>
          <Row>
            <Col lg={4} md={4} sm={6} xs={12} className="tours">
              <a href="http://www.freedtour.com/zh-TW/activity/241" target="_blank" title="Tokyo Street Tide Play Live Edition Mario Kart (Mario Racing)">
                <div className="tourDetail detailOne">
                  <div className="tourName">
                    <h3>
                      Tokyo street tide play live version Mario Kart (Mario Racing)
                    </h3>
                  </div>
                  <div className="tourPrice">
                    <p className="notdiscounted">
                      HKD 762
                    </p>
                    <span className="discounted">
                      HKD 600
                    </span>
                  </div>
                  <div className="tourLocationIcon">
                    <i className="fa fa-map-marker"></i>
                    <span> Tokyo</span>
                  </div>
                </div>
              </a>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12} className="tours">
              <a href="http://www.freedtour.com/zh-TW/activity/91" target="_blank" title="Peach / grape any pick and eat Fuji mountain cable car tour">
                <div className="tourDetail detailTwo">
                  <div className="tourName">
                    <h3>
                      Peaches / grapes any pick and eat and Mount Fuji
                    </h3>
                  </div>
                  <div className="tourPrice">
                    <p className="notdiscounted">
                      HKD 1163
                    </p>
                    <span className="discounted">
                      HKD 915
                    </span>
                  </div>
                  <div className="tourLocationIcon">
                    <i className="fa fa-map-marker"></i>
                    <span> Tokyo</span>
                  </div>
                </div>
              </a>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12} className="tours">
              <a href="http://www.freedtour.com/zh-TW/activity/591" target="_blank" title="Haneda Airport, Shinagawa Station ⇒ Da Fuji, Kawaguchi Lake area 6: 00 ~ 7: 00 departure, Keihin Express Bus One-way ticket">
                <div className="tourDetail detailThree">
                  <div className="tourName">
                    <h3>
                      Haneda Airport; Shinagawa Station => Da Fu
                    </h3>
                  </div>
                  <div className="tourPrice">
                    <p className="notdiscounted">
                      HKD 197
                    </p>
                    <span className="discounted">
                      HKD 155
                    </span>
                  </div>
                  <div className="tourLocationIcon">
                    <i className="fa fa-map-marker"></i>
                    <span> Tokyo</span>
                  </div>
                </div>
              </a>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12} className="tours">
              <a href="http://www.freedtour.com/zh-TW/activity/588" target="_blank" title="Fuji Mountain Paragliding Paragliding Experience a day tour">
                <div className="tourDetail detailFour">
                  <div className="tourName">
                    <h3>
                      Mt. Fuji mountain foggy plateau paraglider experience one
                    </h3>
                  </div>
                  <div className="tourPrice">
                    <p className="notdiscounted">
                      HKD 761
                    </p>
                    <span className="discounted">
                      HKD 599
                    </span>
                  </div>
                  <div className="tourLocationIcon">
                    <i className="fa fa-map-marker"></i>
                    <span> Tokyo</span>
                  </div>
                </div>
              </a>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12} className="tours">
              <a href="http://www.freedtour.com/zh-TW/activity/586" target="_blank" title="Hot off-road car experience Yang Ping fun day group">
                <div className="tourDetail detailFive">
                  <div className="tourName">
                    <h3>
                      Hot off-road car experience Yang Ping fun one
                    </h3>
                  </div>
                  <div className="tourPrice">
                    <p className="notdiscounted">
                      HKD 877
                    </p>
                    <span className="discounted">
                      HKD 690
                    </span>
                  </div>
                  <div className="tourLocationIcon">
                    <i className="fa fa-map-marker"></i>
                    <span> Seoul</span>
                  </div>
                </div>
              </a>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12} className="tours">
              <a href="http://www.freedtour.com/zh-TW/activity/585" target="_blank" title="[Summer will eat] Apple watermelon Quanzhou Han village day group">
                <div className="tourDetail detailSix">
                  <div className="tourName">
                    <h3>
                      [Summer will eat] Apple watermelon statewide
                    </h3>
                  </div>
                  <div className="tourPrice">
                    <p className="notdiscounted">
                      HKD 761
                    </p>
                    <span className="discounted">
                      HKD 599
                    </span>
                  </div>
                  <div className="tourLocationIcon">
                    <i className="fa fa-map-marker"></i>
                    <span> Seoul</span>
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

export default Itinerary;
