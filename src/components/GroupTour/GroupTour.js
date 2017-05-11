import React, { Component } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './GroupTour.css';

class GroupTour extends Component {
  render () {
    return (
      <div className="groupTour">
        <Carousel slide={false} indicators={false}>
          <Carousel.Item>
            <div className="fill">
            </div>
            <Carousel.Caption>
              <div className="textCenter">
                <h1>
                  From the music tour small package group
                </h1>
                <h4>
                  Self-composition group, professional tour guide for you to arrange the special trip, flexible time shuttle, so you play yourself.
                </h4>
              </div>
              <br/>
              <Button href="http://www.freedtour.com/group-tour/itinerary" target="_blank">
                Register now
              </Button>
            </Carousel.Caption>
            <div className="mask">
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default GroupTour;
