import React from 'react';
import SearchBar from './SearchBar';
import './../styles/App.css';

class App extends React.Component {
    render() {
        return(
            <div className="ui container app">
                <SearchBar />
            </div>
        );
    }
}

export default App;
