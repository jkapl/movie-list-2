import React from 'react';

//  const Search = (props)=> (
//   //pass down handleSearch function from app
//   //grab event target and pass to handleSearch
//   <form>
//       <input type='text' name='search'></input>
//       <input type='submit' value='submit' onClick={(e) => {props.handleSearch(e)}}></input>
//   </form> 
// )

class Search extends React.Component {
  constructor(props){
    super(props)

  this.state = {value:''};

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value})
    console.log(this.state.value);
  }

  handleSubmit(event) {
    console.log('submitted ' + this.state.value);
    this.props.handleSearch(this.state.value);
    event.preventDefault();
  }

  render () {
   return (
    <form onSubmit={this.handleSubmit}>
      <label> 
        Search:
        <input type="text" onChange={this.handleChange} value={this.state.value}  />
      </label>
      <input type='submit' value='Submit' />
    </form>
   )
  }

}


export default Search;