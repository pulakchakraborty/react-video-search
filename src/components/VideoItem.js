import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    return(
        <div onClick={() => onVideoSelect(video)}>
            <div>
                Title: {video.snippet.title}
            </div>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}></img>
        </div>
    );
}

export default VideoItem
