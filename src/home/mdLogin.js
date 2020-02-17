import React, { useState } from "react";
import { Modal, Form, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function MdLogin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className="float-right warna-button" onClick={handleShow}>
        Login
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs></Col>
              <Col xs={{ order: 1 }}>
                {" "}
                <h1>Login</h1>
              </Col>
              <Col xs={{ order: 12 }}>
                <span className="float-right pointer" onClick={handleClose}>
                  X
                </span>
              </Col>
            </Row>
          </Container>
          <div>
            <Form.Group>
              <Form.Control type="text" placeholder="Email" />
              <br />
              <Form.Control type="Password" placeholder="Password" />
            </Form.Group>
          </div>
          <div>
            <Link to="/index">
              <button className="warna-button btn-modal" onClick={handleClose}>
                Login
              </button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MdLogin;
