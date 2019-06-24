import React from 'react';
import VideoList from './VideoList';
import Search from './Search';
import UserInput from './UserInput';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos : []
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddTitle = this.handleAddTitle.bind(this);
  }

  handleSearch (query) {
    let { videos } = this.state;
    let queryLength = query.length;
    let matches = [];
    for (let i = 0; i < videos.length; i++) {
      if (query === videos[i].title.slice(0, queryLength)) {
        matches.push({
          title: videos[i].title
        })
      }
    }
    if (matches.length > 0) {
      this.setState({
        videos: matches
      });
      return;
    }
    console.log('not found');
  }

  handleAddTitle (title) {
    let newTitle = { title }
    this.setState( (state) => ({
      videos: state.videos.concat(newTitle)
    }));
    console.log(this.state.videos)
  }
  

  render() {
    return (
    <>
      <h1>Movie List</h1>
      <hr></hr>
      <Search handleSearch={this.handleSearch}/>
      <UserInput handleAddTitle={this.handleAddTitle}/>
      <VideoList videos={this.state.videos}/>
    </>
    )
  }
}


export default App; 