import React from 'react';
import {connect} from 'react-redux';

import {searchForImages} from './search-bar-action.js';

import wordList from 'word-list-json';

export class SearchBar extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    let word = this.textInput.value;
    this.textInput.value = '';
    
    if(word === '') {
      alert('Empty Input');
    }

    if(wordList.includes(word.toLowerCase())) {
      this.props.dispatch(searchForImages(word));
    }
    else {
      this.checkForNonLetter(word);
    }
  }

  checkForNonLetter(word) {
    let newWord = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for(let i = 0; i < word.length; i++) {
      if(alphabet.includes(word.charAt(i))) {
        newWord += word.charAt(i);
      }
    }
    console.log(newWord);
    if(wordList.includes(newWord)) {
      this.props.dispatch(searchForImages(newWord));
    }
    else {
      //this.checkForVowels(newWord);
    }
  }

  checkForVowels(word) {
    
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
