import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props)

    this.state = { 
      value: '' 
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    let { value } = event.target;
    this.setState({ value });
  }

  handleSubmit(event) {
    console.log('submitted:', this.state.value);
    this.props.handleSearch(this.state.value);
    event.preventDefault();
  }

  render () {
   return (
    <form className='search-form' onSubmit={this.handleSubmit}>
      <label> 
        Search:
        <input type="text" onChange={this.handleChange} value={this.state.value}  />
      </label>
      <input type="submit" value="Submit" />
    </form>
   )
  }
}


export default Search;