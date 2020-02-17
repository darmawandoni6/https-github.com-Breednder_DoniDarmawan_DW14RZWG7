import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./style-beranda.css";

class CardMatch extends Component {
  render() {
    return (
      <div className="match-view">
        <Card className="card-height">
          <Card.Img src={require("../asset/pp.jpg")} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Text className="card-posisi">
              <div className="h-card">
                <b>Header</b>
              </div>
              <div className="style-icon">
                <img src={require("../asset/akun-putih.png")} alt="Card" />
                Breder : Egi ginting <br />
                <img src={require("../asset/lokasi-putih.png")} alt="Card" /> 10
                Km dari sini
                <img
                  src={require("../asset/info.png")}
                  alt="Card"
                  className="float-right"
                />{" "}
              </div>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <div className="match-icon">
          <div className="isi-sudut">
            <img src={require("../asset/isi-1.png")} alt="xxx" />
          </div>
          <div className="isi-tengah">
            <img src={require("../asset/isi-2.png")} alt="xxx" />
          </div>
          <div className="isi-tengah">
            <img src={require("../asset/isi-3.png")} alt="xxx" />
          </div>
          <div className="isi-sudut">
            <img src={require("../asset/isi-4.png")} alt="xxx" />
          </div>
        </div>
      </div>
    );
  }
}
export default CardMatch;
