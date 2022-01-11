import React from 'react'
import {Container,Row,Col,Card, Button} from 'react-bootstrap';
import { fetchAll, selectItem } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Opskriftslist extends React.Component {
  componentDidMount(){
      this.props.fetchAll();
  }
  
  renderCard() {
    return this.props.opskrifter.map(opskrift =>{
      return <Card key={opskrift.id.toString()}>
        <Card.Img variant="top" src={opskrift.billede} />
        <Card.Body>
          <Card.Title>{opskrift.navn}</Card.Title>
          <Link to={`/OpskriftDetails/${opskrift.navn}`}>
            <Button key={opskrift.navn} onClick={() => this.props.selectItem(opskrift)} 
            variant="primary">Se Opskrift</Button>
          </Link>
          
        </Card.Body>
      </Card>
    })
  }
  render(){
    return (
      <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2"/>
          <Col md="auto">
            <Row xs={1} md={3} className='g-4'>
              {this.renderCard()}

            </Row>
          </Col>
          <Col xs lg="2"/>
        </Row>
      </Container>
    </div>

    );
  }

}

const mapStateToProps = (state) => {return { opskrifter: state.opskrifter,
  selectItem: selectItem};}

const mapDispatchToProps = {selectItem: selectItem} 

export default connect(mapStateToProps ,{fetchAll,selectItem})(Opskriftslist);