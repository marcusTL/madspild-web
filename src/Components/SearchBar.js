import React from 'react';


class SearchBar extends React.Component {
    state = {
        name: '',
        tid: 0,
        ingredienser: [],
        term: ''
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state.term);

        this.props.onSearchOpskrift(this.state.term);
    }

    render(){
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} role="search">
                <div className="field">
                    <label>Navn</label>
                    <input type="Text" value={this.state.name} onChange={(e)=>this.setState({ name: e.target.value})}/>
                
                    <label>Tilberedningstid</label>
                    <input type="number" value={this.state.tid} onChange={(e)=>this.setState({ tid: e.target.value})}/>
                    <button className="btn btn-primary" onClick={this.onFormSubmit}>Search</button>
                </div>
                <div>
                    <h3>Ingredienser</h3>
                    <input type="text" value={this.state.ingredienser} onChange={(e)=>this.setState({ ingredienser: e.target.value})}/>
                </div>
            </form>
        </div>
        );
    }
    
}

export default SearchBar;