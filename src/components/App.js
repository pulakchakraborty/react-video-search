import React from 'react';
import SearchBar from './SearchBar';
import './../styles/App.css';
import youtube from './../apis/youtube';

class App extends React.Component {
    state = { videos: [] };

    onSearchTermSubmit = async (searchTerm) => {
        const responseData = await youtube.get('/search', {
            params: {
                q: searchTerm
            }
        });

        this.setState({ videos: responseData.data.items });
        console.log(this.state.videos);
    };

    render() {
        return(
            <div className="ui container app">
                <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
            </div>
        );
    }
}

export default App;
