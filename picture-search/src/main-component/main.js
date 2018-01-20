import React from 'react';
import SearchBar from '../search-bar/search-bar.js';
import ShowPictures from '../show-pictures/show-pictures.js';

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <section className="title-search-container">
          <h1>Image Searcher</h1>
          <SearchBar />
        </section>
        <ShowPictures />
      </main>
    );
  }
}


