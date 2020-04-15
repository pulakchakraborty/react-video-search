import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedVideoList = videos.map((video) => {
        return(
            <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
        );
    });

    return(
        <div>
            <div>The search has returned {videos.length} videos</div>
            <div>{renderedVideoList}</div>
        </div>
    );
}

export default VideoList;
