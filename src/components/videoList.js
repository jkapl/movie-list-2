import React from 'react';
import VideoEntry from './VideoEntry';

class VideoList extends React.Component {
  constructor(props) {
    super(props)  
    this.state = { watchedTab : false };
    this.showWatched = this.showWatched.bind(this); 
    this.showNotWatched = this.showNotWatched.bind(this); 
  }  

  showWatched() {
    this.setState({watchedTab:true});
    console.log(this.state.watchedTab);
  }

  showNotWatched() {
    this.setState({watchedTab:false});
    console.log(this.state.watchedTab);
  }

  render () {
    let watched =  this.state.watchedTab;
    return (watched) ? 
     (
    <div className="video-list">
      <div>
        <span onClick={this.showWatched}>Watched   ||</span>
        <span onClick={this.showNotWatched}>   To Watch</span>
        <h2>stuff i watched</h2>
      </div>
      <ul>
      { this.props.videos.map( (video)=> { 
        if (video.watched) { 
          return (
        <VideoEntry key={video.title}
                    video={video}
                    handleWatchedToggle={this.props.handleWatchedToggle}/>
          )
      }})}
      </ul>
    </div>
  ) :
  (
    <div className="video-list">
      <div>
        <span onClick={this.showWatched}>Watched   ||</span>
        <span onClick={this.showNotWatched}>   To Watch</span>
        <h2>stuff I haven't watched</h2>
      </div>
      <ul>
      { this.props.videos.map( (video)=> {
        if (!video.watched) {
          return (
        <VideoEntry key={video.title}
                    video={video}
                    handleWatchedToggle={this.props.handleWatchedToggle}/>
          )
      }})}
      </ul>
    </div>  
  )
  }
}


export default VideoList;