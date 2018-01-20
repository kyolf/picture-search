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
    
    if(wordList.includes(newWord)) {
      this.props.dispatch(searchForImages(newWord));
    }
    else {
      this.checkForVowels(newWord);
    }
  }

  checkForVowels(word) {
    let vowels = 'aeiou';
    let realWords = [];
    for(let i = 0; i < word.length; i++) {
      if(vowels.includes(word.charAt(i))){
        for(let j = 0; j < vowels.length; j ++) {
          let newWord = word.slice(0, i) + vowels.charAt(j) + word.slice(i+1);
          
          if(wordList.includes(newWord)) {
            realWords.push(newWord);
          }
        }
      }
    }

    if(realWords.length !== 0) {
      this.props.dispatch(searchForImages(realWords[0]));
    }
    else {
      alert('No Words Found!');
    }
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
