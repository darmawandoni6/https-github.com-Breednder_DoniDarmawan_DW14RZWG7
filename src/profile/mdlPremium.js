import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";

function MdlPremium() {
  const [state, setState] = useState({
    showModalPayment: false,
    showModalKonfrim: false,
    pay: false
  });

  const handleCloseModPay = () => {
    setState({
      ...state,
      showModalPayment: false
    });
  };

  const handleSubmitPay = () => {
    setState({
      ...state,
      showModalPayment: false,
      showModalKonfrim: true
    });
    setTimeout(() => {
      setState({
        ...state,
        pay: true
      });
    }, 3000);
  };

  const handleShowModPay = () =>
    setState({
      ...state,
      showModalPayment: true
    });

  const handleCloseModCon = () =>
    setState({
      ...state,
      showModalKonfrim: false
    });

  return (
    <>
      {state.pay ? <Redirect to="/add-pet" /> : ""}
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <button className="add-Pet" onClick={handleShowModPay}>
        Add Pet
      </button>

      <Modal show={state.showModalPayment} onHide={handleCloseModPay}>
        <div className="mdPremium">
          <div className="mdheader">
            <Modal.Body>
              <div>
                <h2 className="mdClose" onClick={handleCloseModPay}>
                  X
                </h2>
              </div>
              <h1 className="mdheaderPremium">Premium</h1>
            </Modal.Body>
          </div>
          {/* <Form> */}
          <div className="mdIsi">
            <p>
              Upgrade Breednder mu dan nikmati fitur-fitur PRO. <br />
              <br />
              Breednder : 0981312323
            </p>
          </div>

          <div className="mdInputRek">
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                className="input-mdl-rek"
                type="text"
                placeholder="No.Rek Kamu"
              />
            </Form.Group>
          </div>
          <div className="mdInputBukti">
            <div className="input-box">
              <img src={require("../asset/camera.png")} alt="xxx" />
              <p>Upload Bukti Transfer</p>
            </div>
          </div>
          <div className="input-btn">
            <button onClick={handleSubmitPay}>Kirim</button>
          </div>
          {/* </Form> */}
        </div>
      </Modal>

      <Modal show={state.showModalKonfrim} onHide={handleCloseModCon}>
        <Modal.Body>
          <p>Tes</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MdlPremium;
