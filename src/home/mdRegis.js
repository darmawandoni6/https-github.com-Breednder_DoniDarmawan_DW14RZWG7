import React, { useState } from "react";
import { Modal, Form, Container, Row, Col } from "react-bootstrap";

function MdRegis() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className="warna-button" onClick={handleShow}>
        Register
      </button>

      <Modal show={show} onHide={handleClose} className="modal-height">
        <Modal.Body className="scrol">
          <Container>
            <Row>
              <Col xs></Col>
              <Col xs={{ order: 1 }}>
                {" "}
                <h1>Register</h1>
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
              <Form.Control type="text" placeholder="Brender" />
              <br />
              <Form.Control type="text" placeholder="Email" />
              <br />
              <Form.Control type="Password" placeholder="Password" />
              <br />
              <Form.Control type="text" placeholder="Phone Breeder" />
              <br />
              <Form.Control type="text" placeholder="Adsress Breeder" />
              <br />
              <Form.Control type="text" placeholder="Name Pet" />
              <br />
              <Form.Control type="text" placeholder="Gender Pet" />
              <br />
              <Form.Control type="text" placeholder="Spesies Pet" />
              <br />
              <Form.Control type="Number" placeholder="Age Pet" />
            </Form.Group>
          </div>
          <div>
            <button className="warna-button btn-modal" onClick={handleClose}>
              Register
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MdRegis;
