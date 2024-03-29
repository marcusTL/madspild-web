import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

const OpskriftDetails = props => {

    if (props.opskrift){
        return (
            <div>
                <Container>
                <Row>
                    <Col>
                    <h3>Ingredienser</h3>
                    {/* The problem was syntax related, too many curly brackets. */}
                    {props.opskrift.ingredienser.map(ing => <p key={ing}>{ing}</p>)}
             
                    <h3>Fremgangsmåde</h3>
                    {props.opskrift.fremgangsmaade}
                    </Col>
                    <Col>
                            <img style={{width: 400}} src={props.opskrift.billede}/>
                        <h5>Tilberedningstid: {props.opskrift.tid} Minutter</h5>
                    </Col>
                </Row>

            </Container>
            </div>
        );
    }
    return null;
}




export default OpskriftDetails;
