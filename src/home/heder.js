import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Mdlogin from "./mdLogin";

class Header extends Component {
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
      <div>
        <Container>
          <Row className="header-margin">
            <Col sm={8}>
              <h1>CatLoverApp</h1>
            </Col>
            <Col sm={4}>
              <Mdlogin />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Header;
