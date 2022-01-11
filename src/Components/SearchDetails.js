import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

const OpskriftDetails = props => {
    console.log("Test-SearchDetails");
    if (props.opskrift){
        return (
            <div>
                <Container>
                <Row>
                    <Col>
                    <h3>Ingredienser</h3>
                    {props.opskrift.ingredienser}
                    {/* {props.opskrift.ingredienser.map((ingrediens) => {
                        <p>{ingrediens}</p>
                    })} */}

                    <h3>fremgangsmåde</h3>
                    {props.opskrift.fremgangsmåde}
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
