import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import Carasoul from './Carasoul.js';

const Frontpage = () =>     
{
  
  return(
    <div>
      <Container>
        <Row className="justify-content-md-center">
        <Col xs lg="2"/>
        <Col md="auto">
        <Row className="justify-content-md-center">
          <Col >
          <h3>Hvad er denne hjemmeside</h3>
          lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
          containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
          including versions of Lorem Ipsum.
          </Col>
          
          <Col>
          <h3>Madspild hvad, hvorfor?</h3>
          lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
          containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
          including versions of Lorem Ipsum.
          </Col>
          </Row>

          <Row className="text-center"  md="2">
            <Carasoul/>
          </Row>
  
        </Col>
        <Col xs lg="2"/>
          </Row>
      </Container>
    </div>
  );
  }

export default Frontpage


