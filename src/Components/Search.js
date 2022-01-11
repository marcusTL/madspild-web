import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import SearchBar from './SearchBar';
import SearchResults from './SearchResult';
import SearchDetails from './SearchDetails';
import axios from 'axios';

class Search extends React.Component {
  state = {
    opskrifter: null,
    selectedItem: null
  }

  onSearchSubmit = async (term) =>{
    /* const response = await axios.get('https://madspildrestapi.azurewebsites.net/api/Opskrifts/q?' + term) */
    const response = await axios.get('https://madspildrestapi.azurewebsites.net/api/Opskrifts/' + term)
    this.setState({opskrifter: response.data});
    this.setState({selecteItem: null});
  }

  onSelectedItemCallBack = (opskrift) =>{
    this.setState({selectedItem : opskrift})
  }

  render(){
   return (
    <div>
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="2"/>
        <Col md="auto">
          <SearchBar onSearchOpskrift={this.onSearchSubmit}/>
          <SearchResults SearchOpskrifter={this.state.opskrifter} onSelectedItem={this.onSelectedItemCallBack}/>
        </Col>
        <Col md="auto">
          <SearchDetails opskrift={this.state.selectedItem}/>
        </Col>
        <Col xs lg="2"/>
        </Row>
    </Container>
        
      </div>
    );
  }
}


export default Search