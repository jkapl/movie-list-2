import React from 'react';

class UserInput extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {value: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({value : event.target.value});
    console.log(this.state.value);
  }

  handleSubmit (event) {
    //call props.addTitle with value title 
    console.log('submitted ' + this.state.value);
    this.props.handleAddTitle(this.state.value);
    event.preventDefault();
  }
  render () {
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Add movie:
              <input type="text" onChange={this.handleChange} value={this.state.value}></input>
          </label>
          <input type="submit" value="Submit"/>
        </form>
    )
  }
}

export default UserInput;