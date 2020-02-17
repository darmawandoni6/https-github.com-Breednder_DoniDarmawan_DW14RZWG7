import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style-profile.css";

class ProfilePP extends Component {
  render() {
    return (
      <div>
        <div className="col-left">
          <div className="header-profile">
            <Link to="/index">
              <div className="col11">
                <img src={require("../asset/back.png")} alt="xxx" />
              </div>
            </Link>
            <div className="col22">
              <img src={require("../asset/pp.jpg")} alt="xxx" />
            </div>
            <div className="col33">
              <h1>Profile Pet</h1>
            </div>
          </div>
          <div className="match2 ">
            <h3>Account Settings</h3>
          </div>
          <div className="email">
            <p className="flot">Email</p>
            <p className="flot2">darmawandoni@gmail.com</p>
          </div>
          <div className="phone br border-p">
            <p className="flot">Phone</p>
            <p className="flot2">081263715449</p>
          </div>

          <div className="match2 ">
            <h3>Discovery Settings</h3>
          </div>
          <div className="account2 ">
            <div className="flot">Maximum Distance</div>
            <div className="flot2">10 Km</div>
          </div>
          <div className="input-range">
            <input type="range" />
          </div>
          <div>
            <Form.Group
              controlId="exampleForm.ControlSelect1"
              className="input-ket"
            >
              <Form.Label>Age</Form.Label>
              <Form.Control as="select">
                <option>Adult</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </div>
          <div>
            <Form.Group
              controlId="exampleForm.ControlSelect1"
              className="input-ket"
            >
              <Form.Label>Species</Form.Label>
              <Form.Control as="select">
                <option>Cat</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </div>
          <di>
            <Link to="/">
              <button className="btn-logout">Log Out</button>
            </Link>
          </di>
        </div>
      </div>
    );
  }
}

export default ProfilePP;
