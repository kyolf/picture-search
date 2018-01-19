import React from 'react';

export default class SearchBar extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    
  }

  render() {
    return (
      <div>
        <form onSubmit={(e)=> this.onSubmit(e)}>
          <input type="text" placeholder="Search for image"
                ref={input => this.textInput = input}/>
          <button type='submit'>Search</button>
        </form>
      </div>
    );
  }
}