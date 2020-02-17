import React, { Component } from "react";
import { Link } from "react-router-dom";
import CardMatch from "./card-match";
import { Card } from "react-bootstrap";
import "./style-beranda.css";
import db from "../data/db.json";

class Beranda extends Component {
  render() {
    console.log(db);
    return (
      <div>
        <div className="col-left">
          <div className="header-profile">
            <Link to="/profil">
              <div className="col1">
                <img src={require("../asset/pp.jpg")} alt="xxx" />
              </div>
            </Link>
            <div className="col2">
              <h1>Kucing</h1>
            </div>
          </div>
          <div className="match">
            <h1>Match</h1>
            <hr />
          </div>
          <div className="conten-match">
            {db.listImages.map(dataImage => {
              return (
                // <div className="conten1">
                //   <img src={dataImage.img} alt="xxx" />
                // </div>
                <Card className="conten1">
                  <Card.Img src={dataImage.img} alt="xxx" />
                  <Card.ImgOverlay className="pos-img">
                    <Card.Text className="label-name">
                      <p>{dataImage.name}</p>
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
              );
            })}
          </div>
        </div>
        <div className="col-right">
          <CardMatch />
        </div>
      </div>
    );
  }
}

export default Beranda;
