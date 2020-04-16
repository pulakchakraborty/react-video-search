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

    connectionIssue = false;

    componentDidMount() {
        this.onSearchTermSubmit('Necrodeity');
    }

    onSearchTermSubmit = async (searchTerm) => {
        try {
            const responseData = await youtube.get('/search', {
                params: {
                    q: searchTerm
                }
            });

            this.setState({
                videos: responseData.data.items,
                selectedVideo: responseData.data.items[0]
            });
            console.log(this.state.videos);
        } catch(e) {
            console.log(e);
            this.connectionIssue = true;
        }
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    renderContent = ()  => {
        if (this.connectionIssue) {
            return(
                <div>
                    OOPS!!!!! Something went wrong!!!!
                </div>
            );
        } else {
            return(
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
            );
        }
    }

    render() {
        return(
            <div className="ui container app">
                <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
                {this.renderContent()}
            </div>
        );
    }
}

export default App;
