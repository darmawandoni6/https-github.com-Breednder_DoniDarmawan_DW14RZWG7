import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import "./style-beranda.css";

class IsiGambar extends Component {
  render() {
    return (
      <Row>
        <Row>
          <Col sm={4}>
            <div className="img-match">
              <img src={require("../asset/pp.jpg")} alt="xxx" />
            </div>
          </Col>
          <Col sm={4}>
            <div className="img-match">
              <img src={require("../asset/pp.jpg")} alt="xxx" />
            </div>
          </Col>
          <Col sm={4}>
            <div className="img-match">
              <img src={require("../asset/pp.jpg")} alt="xxx" />
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={4}>
            <div className="img-match">
              <img src={require("../asset/pp.jpg")} alt="xxx" />
            </div>
          </Col>
          <Col sm={4}>
            <div className="img-match">
              <img src={require("../asset/pp.jpg")} alt="xxx" />
            </div>
          </Col>
          <Col sm={4}>
            <div className="img-match">
              <img src={require("../asset/pp.jpg")} alt="xxx" />
            </div>
          </Col>
        </Row>
      </Row>
    );
  }
}

export default IsiGambar;
