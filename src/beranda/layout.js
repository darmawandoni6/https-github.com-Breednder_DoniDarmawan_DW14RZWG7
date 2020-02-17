  
import React from 'react';
import { Container } from 'react-bootstrap';

export const Layout = (props) => (
  <div  className="bg-image">
    <Container>
      {props.children}
    </Container>
  </div>
)