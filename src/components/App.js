import React from 'react';
import ReactDOM from 'react-dom';
import VideoList from './VideoList';

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
  }
  

  render() {
    return (
    <div>
        <h1>hello world!</h1>
      <div>
        <VideoList videos={this.state}/>
      </div>
    </div>
    )
  }
}


export default App; 