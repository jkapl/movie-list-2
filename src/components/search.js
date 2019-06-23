import React from 'react';

const Search = (props)=> (
  //pass down handleSearch function from app
  //grab event target and pass to handleSearch
  <form>
    <label>
    <input type='text' name='search'></input>
    </label>
    <input type='submit' value='submit' onClick={(e) => {props.handleSearch(e.target.value)}}></input>
  </form> 
)

export default Search;