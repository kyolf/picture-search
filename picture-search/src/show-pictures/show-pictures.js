import React from 'react';
import {connect} from 'react-redux';
import { link } from 'fs';

export class ShowPicture{
  renderPictures() {
    let pictureList = '';
    for(let i = 0; i < 10; i++) {
      pictureList.push(
        `<aside key=${i}>
          <img src="${imageList[i].display_sizes[0].uri} alt=${imageList[i].title}"/>
          <p>${imageList[i].title}</p>
        </aside>`)
    }
  }
  
  render() {
    return (
      <div>
        {this.renderPictures()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  imageList: state.search.imageList
});

export default connect(mapStateToProps)(SearchBar);