import React, { Component } from 'react';
import { Modal, Button, Table, OverlayTrigger,
  Tooltip, FormGroup, FormControl, Checkbox,
  ControlLabel, Row, Col, Carousel } from 'react-bootstrap';
import './Modals.css';
import userIcon from '../../img/user-icon.png';
import promoOne from '../../img/summer_tour_campaign.jpg';
import promoTwo from '../../img/summer_tour_campaign_jpy.jpg';

class Modals extends Component {
  render () {
    const tooltip = (
      <Tooltip id="signupTooltip">
        Please fill out this field
      </Tooltip>
    );

    function FieldGroup ({ id, label, help, ...props }) {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
        </FormGroup>
      );
    };

    return (
      <div>
        <Modal show={this.props.showSignin} onHide={this.props.closeSignin}>
          <Modal.Body id="loginModal">
            <Button bsClass="close" onClick={() => { this.props.closeSignin() }}>
              <span aria-hidden={true}>x</span>
              <span className="sr-only">Close</span>
            </Button>
            <Table>
              <tbody>
                <tr>
                  <td className="hidden-xs tips-section">
                    <div>
                      <h1>
                        Since the tour
                        Korean spring and summer itinerary!
                      </h1>
                    </div>
                  </td>
                  <td>
                    <form>
                      <div className="main-section">
                        <div className="profile">
                          <img src={userIcon} alt="Avatar" />
                        </div>
                        <div className="login-field">
                          <FieldGroup
                            id="username"
                            type="email"
                            label="Email Address"
                            placeholder="電郵地址"
                          />
                          <FieldGroup
                            id="password"
                            type="password"
                            label="Password"
                            placeholder="密碼"
                          />
                          <FormGroup className="pull-right">
                            <ControlLabel>
                              <font>auto login </font>
                              <Checkbox inline></Checkbox>
                              <span></span>
                            </ControlLabel>
                          </FormGroup>
                          <FormGroup>
                            <Row >
                              <Col lg={6} md={6} sm={6} xs={12} className="btns">
                                <Button id="user-login">
                                  <font>Sign In</font>
                                </Button>
                              </Col>
                              <Col lg={6} md={6} sm={6} xs={12} className="btns">
                                <Button id="fb-login" bsStyle="primary">
                                  <i className="fa fa-facebook-square fa-lg"></i>
                                  <font> Facebook Login</font>
                                </Button>
                              </Col>
                            </Row>
                          </FormGroup>
                          <FormGroup>
                            <Row>
                              <Col lg={6} md={6} sm={6} xs={6} className="col">
                                <h5>
                                  <span id="signUp" onClick={() => { this.props.openSignup(); this.props.closeSignin() }}>
                                    <i className="fa fa-user-plus"></i>
                                    <font> Sign up</font>
                                  </span>
                                </h5>
                              </Col>
                              <Col lg={6} md={6} sm={6} xs={6} className="col">
                                  <h5>
                                  <span id="forgotPwd" onClick={() => { this.props.openForgetPwd(); this.props.closeSignin() }}>
                                    Forgot Password?
                                  </span>
                                </h5>
                              </Col>
                            </Row>
                          </FormGroup>
                        </div>
                      </div>
                    </form>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
        </Modal>
        <Modal show={this.props.showSignup} onHide={this.props.closeSignup}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div id="login-panel">
              <form>
                <OverlayTrigger placement="bottom" overlay={tooltip}>
                <FieldGroup
                  id="signupEmail"
                  type="email"
                  label="Email Address"
                  placeholder="電郵地址"
                />
                </OverlayTrigger>
                <OverlayTrigger placement="bottom" overlay={tooltip}>
                <FieldGroup
                  id="signupPwd"
                  type="password"
                  label="Password"
                  placeholder="密碼"
                />
                </OverlayTrigger>
                <OverlayTrigger placement="bottom" overlay={tooltip}>
                <FieldGroup
                  id="signupConfirmPwd"
                  label="Confrim Password"
                  type="password"
                  placeholder="確認密碼"
                />
                </OverlayTrigger>
                <FormGroup>
                  <Button id="user-login">
                    Sign Up
                  </Button>
                </FormGroup>
              </form>
              <Button id="fb-login" bsStyle="primary">
                <i className="fa fa-facebook-square fa-lg"></i>
                <font> Facebook Login</font>
              </Button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Row>
              <Col md={12} sm={12} xs={12}>
                <h5>
                  <span id="login" onClick={() => { this.props.openSignin(); this.props.closeSignup() }}>
                    Login
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                  <span id="forgotPwd" onClick={() => { this.props.openForgetPwd(); this.props.closeSignup() }}>
                    Forgot Password?
                  </span>
                </h5>
              </Col>
            </Row>
          </Modal.Footer>
        </Modal>
        <Modal show={this.props.showForgetPwd} onHide={this.props.closeForgetPwd}>
          <Modal.Header closeButton>
            <Modal.Title>Forget Password?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Please fill in the email address registered at registration to reset your password</h5>
            <form>
              <FormGroup controlId="forgotEmail">
                <FormControl type="password" placeholder="電郵地址">
                </FormControl>
              </FormGroup>
              <FormGroup>
                <Button id="resetPwd" bsStyle="primary">
                  Reset Password
                </Button>
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Row>
              <Col md={12} sm={12} xs={12}>
                <h5>
                  <span id="signUp" onClick={() => { this.props.openSignup(); this.props.closeForgetPwd() }}>
                    <i className="fa fa-user-plus"></i>
                    <font> Sign up</font>
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                  <span id="login" onClick={() => { this.props.openSignin(); this.props.closeForgetPwd() }}>
                    Login
                  </span>
                </h5>
              </Col>
            </Row>
          </Modal.Footer>
        </Modal>
        <Modal show={this.props.showPromo} onHide={this.props.closePromo} className="promoModal">
          <Modal.Body className="promo">
            <Button bsClass="close" onClick={() => { this.props.closePromo() }}>
              <span aria-hidden={true}>x</span>
              <span className="sr-only">Close</span>
            </Button>
            <Carousel>
              <Carousel.Item>
                <img src={promoOne} alt="Summer Tour Campaign"/>
              </Carousel.Item>
              <Carousel.Item>
                <img src={promoTwo} alt="Summer Tour Campaign Japan"/>
              </Carousel.Item>
            </Carousel>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Modals;
