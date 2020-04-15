import React from 'react';

const VideoItem = ({video}) => {
    return(
        <div>
            <div>
            Title: {video.snippet.title}
            </div>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}></img>
        </div>
    );
}

export default VideoItem
