import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import "./style-beranda.css";

class HeaderLeft extends Component {
  render() {
    return (
      <Row className="left-design">
        <Col sm={3} className="profile-img">
          <div className="profile-size">
            <img src={require("../asset/pp.jpg")} alt="xxx" />
          </div>
        </Col>
        <Col sm={9} className="profile-name">
          <h1>Kucing</h1>
        </Col>
      </Row>
    );
  }
}

export default HeaderLeft;
