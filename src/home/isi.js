import React, { Component } from "react";
import Regis from "./mdRegis";

class Isi extends Component {
  constructor() {
    super();
    this.state = {
      tampil: false
    };
  }
  showLogin = () => {
    this.setState({ tampil: true });
  };
  hideLogin = () => {
    this.setState({ tampil: false });
  };
  render() {
    return (
      <div className="center">
        <div>
          <h1 className="size-conten">
            <p>
              Swipe <b>Right.</b>
            </p>
            <p>
              Make Your Pet <b>Happy</b>
            </p>
          </h1>
          <p>
            by clickung enter, your agree to <u>our terms</u>. Lear how
            processyour data in <br />
            our <u>Privacy Policy</u> and <u>Cookie Policy</u>
          </p>
          {/* <button  className="warna-button" onClick={this.showLogin} >Register</button> */}
          <Regis />
        </div>
      </div>
    );
  }
}

export default Isi;
