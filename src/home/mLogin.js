import React, { Component } from 'react';
import { Modal,Button,Form } from 'react-bootstrap';

import '../stayle.css';

class mLogin extends Component{
  render(){
      return(
        <div className="modal-set">
                    <Modal show={this.state.modalLogin} onHide={this.hideLogin}>
                            <div className="modal-set">
                                <h1>Login</h1>
                            </div>
                        <div className="modal-set">
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="email" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                        <Form.Control type="password" placeholder="password" />
                                        <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <br/>
                                <Button onClick={this.hideLogin} className="btn-modal">Close</Button>
                            </Form>
                        </div>
                    </Modal>
                </div>
      )
  }
}

export default mLogin;