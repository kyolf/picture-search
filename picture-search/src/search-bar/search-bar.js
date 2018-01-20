import React from 'react';
import {connect} from 'react-redux';

import {searchForImages} from './search-bar-action.js';

export class SearchBar extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    this.props.dispatch(searchForImages(this.textInput.value))
  }

  render() {
    return (
      <section className="search-container">
        <form onSubmit={(e)=> this.onSubmit(e)}>
          <input type="text" placeholder="Search for image"
                ref={input => this.textInput = input}/>
          <button type='submit'>Search</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(SearchBar);
