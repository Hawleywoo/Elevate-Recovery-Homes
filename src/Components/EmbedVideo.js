import React from 'react'
import ReactPlayer from 'react-player/youtube'

function EmbedVideo({ videoId }) {
    return (
        <div className="player-wrapper">
            <ReactPlayer 
                url="https://www.youtube.com/watch?v=ABkF3MSxoQg"
                className="react-player"
                playing
                width="100%"
                height="100%"
                controls={false} 
            />
        </div>
    )
}

export default EmbedVideo
