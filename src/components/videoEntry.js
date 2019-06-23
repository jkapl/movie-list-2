import React from 'react';
import Watched from './Watched';

class VideoEntry extends React.Component {
  constructor (props) {
    super(props);
    this.state = {watched: true};

    this.toggleWatched = this.toggleWatched.bind(this);
  }

  toggleWatched () {
    this.setState((state) => ({
      watched: !state.watched
    }));
  }

  render () {
    return (
    <div className="VideoEntry" onClick={this.toggleWatched}>
      {this.props.video.title}
      <div>
        <Watched watched={this.state.watched}/>
      </div>
    </div>
    )
  }
}

export default VideoEntry;