import React from 'react';
import SearchBar from './SearchBar';
import './../styles/App.css';

class App extends React.Component {
    onSearchTermSubmit = (searchTerm) => {
        console.log(searchTerm);
    }

    render() {
        return(
            <div className="ui container app">
                <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
            </div>
        );
    }
}

export default App;
