import React from 'react';
import {connect} from 'react-redux';
import { link } from 'fs';

export class ShowPictures extends React.Component{
  renderPictures() {
    let imgList = this.props.imageList.images;
    let limitTenImgs = [];

    if(typeof imgList !== "undefined" && imgList.length !== 0){
      for(let i = 0; i < 10; i++) {
        limitTenImgs.push(imgList[i]);
      }
    }

    if(limitTenImgs.length !== 0) {
      return limitTenImgs.map((el, i) => {
        return <aside key={i}> 
                <img src={`${imgList[i].display_sizes[0].uri}`} 
                    alt={`${imgList[i].title}`} />
                <p>{imgList[i].title}</p>
              </aside>;
      })
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

export default connect(mapStateToProps)(ShowPictures);