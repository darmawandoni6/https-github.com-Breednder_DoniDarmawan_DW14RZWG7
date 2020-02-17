import React, { Component } from "react";
import { Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

class EditRight extends Component {
  render() {
    return (
      <div className="col-right add-profil-grid">
        <div className="picture-add-profile">
          <div className="add-image-profile">
            <div className="add-image">
              <Card className="imageAdd">
                <Card.Img src={require("../asset/pp.jpg")} alt="xxx" />
                <Card.ImgOverlay>
                  <Card.Text className="posisi">
                    <img src={require("../asset/add.png")} alt="xxx" />
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
            <div className="add-image">
              <Card className="imageAdd">
                <Card.ImgOverlay>
                  <Card.Text className="posisi">
                    <img src={require("../asset/add.png")} alt="xxx" />
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
            <div className="add-image">
              <Card className="imageAdd">
                <Card.ImgOverlay>
                  <Card.Text className="posisi">
                    <img src={require("../asset/add.png")} alt="xxx" />
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
            <div className="add-image">
              <Card className="imageAdd">
                <Card.ImgOverlay>
                  <Card.Text className="posisi">
                    <img src={require("../asset/add.png")} alt="xxx" />
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
            <div className="add-image">
              <Card className="imageAdd">
                <Card.ImgOverlay>
                  <Card.Text className="posisi">
                    <img src={require("../asset/add.png")} alt="xxx" />
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
            <div className="add-image">
              <Card className="imageAdd">
                <Card.ImgOverlay>
                  <Card.Text className="posisi">
                    <img src={require("../asset/add.png")} alt="xxx" />
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
            <div className="add-image">
              <Card className="imageAdd">
                <Card.ImgOverlay>
                  <Card.Text className="posisi">
                    <img src={require("../asset/add.png")} alt="xxx" />
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
            <div className="add-image">
              <Card className="imageAdd">
                <Card.ImgOverlay>
                  <Card.Text className="posisi">
                    <img src={require("../asset/add.png")} alt="xxx" />
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
            <div className="add-image">
              <Card className="imageAdd">
                <Card.ImgOverlay>
                  <Card.Text className="posisi">
                    <img src={require("../asset/add.png")} alt="xxx" />
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
          </div>
          <div className="add-edit-profile">
            <Form.Group>
              <Form.Label>
                {" "}
                <h4>Name Pet</h4>
              </Form.Label>
              <Form.Control type="text" placeholder="Name Pet" value="Kucing" />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                {" "}
                <h4>Breder</h4>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Breeder"
                value="Egi Cmiiw"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                {" "}
                <h4>Gender</h4>
              </Form.Label>
              <Form.Control type="text" placeholder="Gender" value="Male" />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                {" "}
                <h4>Age</h4>
              </Form.Label>
              <Form.Control type="text" placeholder="Adult" value="Adult" />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                {" "}
                <h4>About</h4>
              </Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
          </div>
          <Link to="/profil">
            <div className="add-edit-btnSave">
              <button>Save</button>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default EditRight;
