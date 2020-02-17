import React, { Component } from "react";
import { Card } from "react-bootstrap";
import AddPet from "./mdlPremium";
import { Link } from "react-router-dom";

import "./style-profile.css";

class ProfileRight extends Component {
  render() {
    return (
      <div className="col-right">
        <AddPet />
        <div className="picture-profile">
          <Card className="card-pict">
            <Card.Img src={require("../asset/pp.jpg")} alt="xxx" />
            <Card.ImgOverlay>
              <Card.Text className="hr-header">
                <div className="hr1"></div>
                <div className="hr2"></div>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
          <div className="picture-detail">
            <div className="picture-name">
              <h1>Kucing</h1>
              <h2>Cat</h2>
            </div>
            <div className="ket">
              <div className="pct-detail">
                <img src={require("../asset/akun.png")} alt="xxx" />{" "}
              </div>
              <div className="pct-detail-ket">
                <p>Breeder : Egi Ginting</p>
              </div>
            </div>
            <div className="ket">
              <div className="pct-detail">
                <img src={require("../asset/lokasi.png")} alt="xxx" />{" "}
              </div>
              <div className="pct-detail-ket">
                <p>10 Kilometer dari sini</p>
              </div>
            </div>
            <div className="ket">
              <div className="pct-detail">
                <img src={require("../asset/gender.png")} alt="xxx" />{" "}
              </div>
              <div className="pct-detail-ket">
                <p>Adult</p>
              </div>
            </div>
            <div className="ket">
              <div className="pct-detail">
                <img src={require("../asset/phone.png")} alt="xxx" />{" "}
              </div>
              <div className="pct-detail-ket">
                <p>081263715449</p>
              </div>
            </div>
            <div className="about-profile">
              <h1>About</h1>
              <p>
                Test about Test about Test about Test about Test about Test
                about Test about Test about
              </p>
            </div>
          </div>
          <Link to="/edit-profile">
            <div className="card-btn">
              <button className="btn-edit">Edit</button>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default ProfileRight;
