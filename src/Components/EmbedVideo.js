import React from 'react'
import ReactPlayer from 'react-player/lazy'
// [{src: videoId, type: 'video/mp4'}]

function EmbedVideo({ videoId }) {
    return (
        <div className="player-wrapper">
            <ReactPlayer 
                url={`${videoId}`}
                className="react-player"
                width="100%"
                height="100%"
                controls={true} 
            />
        </div>
    )
}


export default EmbedVideo
