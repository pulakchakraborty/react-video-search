import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import './../styles/App.css';
import youtube from './../apis/youtube';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    onSearchTermSubmit = async (searchTerm) => {
        const responseData = await youtube.get('/search', {
            params: {
                q: searchTerm
            }
        });

        this.setState({ videos: responseData.data.items });
        console.log(this.state.videos);
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return(
            <div className="ui container app">
                <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
                <div className="ui grid">
                    <div className="row">
                        <div className="ten wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="six wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
