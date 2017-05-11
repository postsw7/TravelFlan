import React, { Component } from 'react';
import { Carousel, Dropdown, MenuItem } from 'react-bootstrap';
import './Main.css';
import SeasonLimit from '../SeasonLimit/SeasonLimit';
import Itinerary from '../Itinerary/Itinerary';
import GroupTour from '../GroupTour/GroupTour';
import Destination from '../Destination/Destination';
import AdBanner from '../AdBanner/AdBanner';
import PromiseComponent from '../Promise/Promise';
import bannerOne from '../../img/banner_001.jpg';
import bannerTwo from '../../img/banner_002.jpg';
import bannerThree from '../../img/banner_003.jpg';
import bannerFour from '../../img/banner_004.jpg';
import bannerFive from '../../img/banner_005.jpg';

class Main extends Component {
  render () {
    return (
      <div id="main">
        <Carousel id="bannerShow" indicators={false}>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={bannerOne}/>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={bannerTwo}/>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={bannerThree}/>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={bannerFour}/>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={bannerFive}/>
          </Carousel.Item>
        </Carousel>
        <div className="carousel-caption inside">
          <h1>Free ‧ Enjoyment experience</h1>
          <p>Book a fun trip, attractions tickets and a variety of novelty experience</p>
          <Dropdown id="dropdownMenu">
            <Dropdown.Toggle>
              <p>Choose a <br/>destination</p>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <MenuItem href="http://www.freedtour.com/zh-TW/city/tokyo" target="_blank">Tokyo</MenuItem>
              <MenuItem href="http://www.freedtour.com/zh-TW/city/kyoto" target="_blank">Kyoto</MenuItem>
              <MenuItem href="http://www.freedtour.com/zh-TW/city/osaka" target="_blank">Osaka</MenuItem>
              <MenuItem href="http://www.freedtour.com/zh-TW/city/okinawa" target="_blank">Okinawa</MenuItem>
              <MenuItem href="http://www.freedtour.com/zh-TW/city/hokkaido" target="_blank">Hokkaido</MenuItem>
              <MenuItem href="http://www.freedtour.com/zh-TW/city/seoul" target="_blank">Seoul</MenuItem>
              <MenuItem href="http://www.freedtour.com/zh-TW/city/busan" target="_blank">Busan</MenuItem>
              <MenuItem href="http://www.freedtour.com/zh-TW/city/nagoya" target="_blank">Nagoya</MenuItem>
              <MenuItem href="http://www.freedtour.com/zh-TW/city/kyushu" target="_blank">Kyushu</MenuItem>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="flowClearance"></div>
        <SeasonLimit />
        <Itinerary />
        <hr/>
        <GroupTour />
        <Destination />
        <AdBanner />
        <PromiseComponent />
      </div>
    );
  }
}

export default Main;
