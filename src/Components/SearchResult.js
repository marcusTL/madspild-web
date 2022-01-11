import React, { Component } from 'react';

class SearchResult extends Component {
  onOpskriftSelect = (opskrift) => {
    this.props.onSelectedItem(opskrift);
  }
  render() {
     if (this.props.SearchOpskrifter){
       return (   
            <div>
              <div>
                <h2>Opskrifter Resultat:</h2>
                <ul>{this.props.SearchOpskrifter.map(opskrift => { 
                    return  (<li key={opskrift.navn} onClick={() => this.onOpskriftSelect(opskrift)}>
                                  <div>{(opskrift.navn)}</div> 
                            </li>) })
                  
                }           
              </ul>        
            </div>
            </div> 
      );
    }
    return null
  }
}

export default SearchResult;
