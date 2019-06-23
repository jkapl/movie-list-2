import React from 'react';
import ReactDOM from 'react-dom';
import VideoList from './VideoList';
import Search from './Search';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = [
      {title: 'Mean Girls'},
      {title: 'Hackers'},
      {title: 'The Grey'},
      {title: 'Sunshine'},
      {title: 'Ex Machina'},
    ];

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch (e) {
    alert(e);
  }
  

  render() {
    return (
    <div>
        <h1>hello world!</h1>
      <div>
        <VideoList videos={this.state}/>
      </div>
      <div>
        <Search handleSearch={this.handleSearch}/>
      </div>
    </div>
    )
  }
}


export default App; 