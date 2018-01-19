import React from 'react';
import SearchBar from '../search-bar/search-bar.js';
import ShowPictures from '../show-pictures/show-pictures.js';

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <h1>Image Searcher</h1>
        <SearchBar />
        <ShowPictures />
      </main>
    );
  }
}


