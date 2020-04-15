import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    const renderedVideoList = videos.map((video) => {
        return(
            <VideoItem />
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
