import React from 'react';
import {connect} from 'react-redux';
import { changeOverlay } from './show-pictures-action.js';


export class ShowPictures extends React.Component{
  showOverlay(e, img, title) {
    e.preventDefault();
    this.props.dispatch(changeOverlay(img, title, true));
  }

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
                    alt={`${imgList[i].title}`}
                    onClick={(e) => this.showOverlay(e, imgList[i].display_sizes[0].uri, imgList[i].title)} />
                <p>{imgList[i].title}</p>
              </aside>;
      })
    }
  }
  
  render() {
    return (
      <div>
        {this.props.picOverlay === true ? 
          <div className="overlay-img">
            <img src={`${this.props.picSrc}`} 
                 alt={`${this.props.picTitle}`} />
            <p>{this.props.picTitle}</p>
            <p onClick={(e) => this.closeOverlay(e)}>X</p>
          </div>: null}
        {this.renderPictures()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  imageList: state.search.imageList,
  picOverlay: state.picture.hasOverlay,
  picSrc: state.picture.img,
  picTitle: state.picture.title
});

export default connect(mapStateToProps)(ShowPictures);