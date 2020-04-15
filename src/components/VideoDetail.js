import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return(
            <div>Loading . . . .</div>
        );
    }

    return(
        <div>From VideoDetail Component: {video.snippet.title}</div>
    );
}

export default VideoDetail;
