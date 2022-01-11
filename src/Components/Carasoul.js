import React from 'react'
import {Carousel} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchAll} from '../actions';

class Carasoul extends React.Component     
{
    componentDidMount(){
        this.props.fetchAll();
    }
    renderItem() {
      return this.props.opskrifter.map(opskrift =>{
        return <Carousel.Item key={opskrift.id.toString()}>
                  <img  className="d-block w-100" src={opskrift.billede} />
                  <Carousel.Caption>
                    <h5>{opskrift.navn}</h5>
                    <p>{(opskrift.fremgangsmåde).slice(0,50) + "..."}</p>
                  </Carousel.Caption>
                </Carousel.Item>
      })
    }
      
    render(){
        return(
            <Carousel>
               {this.renderItem()}
              </Carousel>
            
        );
    }
    
}

const mapStateToProps = (state) => {return { opskrifter: state.opskrifter};}

export default connect(mapStateToProps ,{fetchAll})(Carasoul);

