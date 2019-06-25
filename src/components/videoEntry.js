import React from 'react';
import Watched from './Watched';

class VideoEntry extends React.Component {
  constructor (props) {
    super(props);
    this.state = { watched: true };
    this.toggleWatched = this.toggleWatched.bind(this);
  }

  toggleWatched () {
    this.setState( state => ({
      watched: !state.watched
    }));
    const movieToUpdate = this.props.video.title;
    this.props.handleWatchedToggle(movieToUpdate);
  }

  render () {
    return (
    <div className="video-entry" onClick={this.toggleWatched}>
      <span className="title">
        {this.props.video.title}
      </span>
        <Watched watched={this.state.watched}/>
        <hr></hr>
    </div>
    )
  }
}

export default VideoEntry;