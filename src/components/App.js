import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: 'hercules',
      movie: 'beauty beast'
    }
  }

  render() {
    return(
    <div>
      <h1>hello world!</h1>
    </div>
    )
  }
}


export default App; 