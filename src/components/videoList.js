import React from 'react';
import VideoEntry from './VideoEntry';

const VideoList = (props) => (
  <div className="video-list">
    <ul>
    { props.videos.map( (video)=> 
      <VideoEntry video={video}/>
    )}
    </ul>
  </div>
  )

export default VideoList;