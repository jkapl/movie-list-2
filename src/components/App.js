import React from 'react';
import ReactDOM from 'react-dom';
import VideoList from './VideoList';
import Search from './Search';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {videos : [
      {title: 'Mean Girls'},
      {title: 'Hackers'},
      {title: 'The Grey'},
      {title: 'Sunshine'},
      {title: 'Ex Machina'}
     ]
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch (query) {
    let videosArr = this.state.videos;
    for (var i=0; i<videosArr.length; i++) {
      if (query === videosArr[i].title) {
        this.setState({videos: [{title: query}]});
        return;
      }
    }
    console.log('not found');
  }
  

  render() {
    return (
    <div>
        <h1>hello world!</h1>
      <div>
        <VideoList videos={this.state.videos}/>
      </div>
      <div>
        <Search handleSearch={this.handleSearch}/>
      </div>
    </div>
    )
  }
}


export default App; 