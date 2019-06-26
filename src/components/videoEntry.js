import React from 'react';
import Watched from './Watched';
import InfoPanel from './InfoPanel';

class VideoEntry extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 
      watched: true,
      showPanel: false,
      info: `${props.video.title}`
    };
    this.toggleWatched = this.toggleWatched.bind(this);
    this.toggleInfoPanel = this.toggleInfoPanel.bind(this);
  }

  toggleWatched () {
    this.setState( state => ({
      watched: !state.watched
    }));
    console.log(this.state.watched);
    const movieToUpdate = this.props.video.title;
    this.props.handleWatchedToggle(movieToUpdate);
  }

  toggleInfoPanel () {
    this.setState( state => ({
      watched: state.watched,
      showPanel: !state.showPanel
    }));
  }

  render () {
    const PanelShow = this.state.showPanel;
    return PanelShow ? (
    <div className="video-entry" >
      <span onClick={this.toggleInfoPanel} className="title">
        {this.props.video.title}
        <InfoPanel info={this.state.info}/>
      </span>
        <Watched toggleWatched={this.toggleWatched} watched={this.state.watched}/>
        <hr></hr>
    </div>
    ) : (
      <div className="video-entry" >
      <span onClick={this.toggleInfoPanel} className="title">
        {this.props.video.title}
      </span>
        <Watched toggleWatched={this.toggleWatched} watched={this.state.watched}/>
        <hr></hr>
    </div>
    )
  }
}

export default VideoEntry;