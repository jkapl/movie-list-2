import React from 'react';
import VideoEntry from './VideoEntry';

const VideoList = (props) => (
  <div>
    <ul>
    {props.videos.map( (video)=> 
      <VideoEntry video={video}/>
    )}
    </ul>
  </div>
  )

export default VideoList;