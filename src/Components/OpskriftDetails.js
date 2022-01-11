import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {Container,Row,Col} from 'react-bootstrap';

const OpskriftDetails = ({ opskrift }) => {

    console.log(opskrift);

    if (opskrift){
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <h3>Ingredienser</h3>
                    {opskrift.ingredienser.map((ingrediens) => {
                        <p>{ingrediens}</p>
                    })}

                    <h3>fremgangsmåde</h3>
                    {opskrift.fremgangsmåde}
                    </Col>
                    <Col>
                            <img style={{width: 400}} src={opskrift.billede}/>
                        <h5>Tilberedningstid: {opskrift.tid} Minutter</h5>
                        <button className = "badge badge-dark"> 
                            <Link to="/list">Tilbage til Listen</Link>
                        </button>
                    </Col>
                </Row>

            </Container>
            
        </div>

    );}
    return null;
}

const mapStateToProps = (state) => {
    return { opskrift : state.selectedItem };
}


export default connect(mapStateToProps)(OpskriftDetails);
