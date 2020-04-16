import React from 'react';
import './../styles/VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => {
    return(
        <div className="video-item item"
            onClick={() => onVideoSelect(video)}>
            <img className="ui image"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}></img>
            <div className="content">
                {video.snippet.title}
            </div>
        </div>
    );
}

export default VideoItem
