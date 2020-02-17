  
import React from 'react';
import { Container } from 'react-bootstrap';

export const Layout = (props) => (
  <div  className="img-gradient">
    <Container>
      {props.children}
    </Container>
  </div>
)