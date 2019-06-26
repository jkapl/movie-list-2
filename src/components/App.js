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
    this.handleWatchedToggle = this.handleWatchedToggle.bind(this);
  }

  handleSearch (query) {
    let { videos } = this.state;
    let queryLength = query.length;
    let matches = [];
    for (let i = 0; i < videos.length; i++) {
      if (query === videos[i].title.slice(0, queryLength)) {
        matches.push({
          title: videos[i].title,
          watched: videos[i].watched
        })
      }
    }
    if (matches.length > 0) {
      this.setState({
        videos: matches
      });
      return;
    }
  }

  handleAddTitle (title) {
    let newTitle = { title }
    // https://api.themoviedb.org/3/search/movie?api_key=f0b044cf0270d9dd2b84a8964f53f059&language=en-US&query=braveheart&page=1&include_adult=false
    this.setState( (state) => ({
      videos: state.videos.concat(newTitle)
    }));
  }

  handleWatchedToggle (movie) {
    const state = [...this.state.videos];
    for (var i = 0; i<state.length; i++) {
      if (state[i].title === movie) {
        state[i].watched = !state[i].watched;
      }
    }
    this.setState({videos:state});
  }
  

  render() {
    return (
    <>
      <h1>Movie List</h1>
      <hr></hr>
      <Search handleSearch={this.handleSearch}/>
      <UserInput handleAddTitle={this.handleAddTitle}/>
      <VideoList videos={this.state.videos} 
                 handleWatchedToggle={this.handleWatchedToggle}/>
    </>
    )
  }
}


export default App; 