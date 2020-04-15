import React from 'react';

const VideoList = props => {
    return(
        <div>
            <div>The search has returned {props.videos.length} videos</div>
        </div>
    );
}

export default VideoList;
