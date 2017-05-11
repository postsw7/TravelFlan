import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Modals from '../Modals/Modals';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSignin: false,
      showSignup: false,
      showForgetPwd: false,
      showPromo: true
    }
  }

  openSignin () {
    this.setState({
      showSignin: true
    })
  }

  closeSignin () {
    this.setState({
      showSignin: false
    })
  }

  openSignup () {
    this.setState({
      showSignup: true
    })
  }

  closeSignup () {
    this.setState({
      showSignup: false
    })
  }

  openForgetPwd () {
    this.setState({
      showForgetPwd: true
    })
  }

  closeForgetPwd () {
    this.setState({
      showForgetPwd: false
    })
  }

  closePromo () {
    this.setState({
      showPromo: false
    })
  }

  render() {
    return (
      <div className="App modal-container">
        <Nav
          openSignin={this.openSignin.bind(this)}
          openSignup={this.openSignup.bind(this)}
        />
        <Main />
        <Footer />
        <Modals
          showSignin={this.state.showSignin}
          openSignin={this.openSignin.bind(this)}
          closeSignin={this.closeSignin.bind(this)}
          showSignup={this.state.showSignup}
          openSignup={this.openSignup.bind(this)}
          closeSignup={this.closeSignup.bind(this)}
          showForgetPwd={this.state.showForgetPwd}
          openForgetPwd={this.openForgetPwd.bind(this)}
          closeForgetPwd={this.closeForgetPwd.bind(this)}
          showPromo={this.state.showPromo}
          closePromo={this.closePromo.bind(this)}
        />
      </div>
    );
  }
}

export default App;
