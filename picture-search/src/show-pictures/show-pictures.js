import React from 'react';
import {connect} from 'react-redux';
import { changeOverlay } from './show-pictures-action.js';


export class ShowPictures extends React.Component{
  showOverlay(e, img, title) {
    e.preventDefault();
    this.props.dispatch(changeOverlay(img, title, true));
  }

  closeOverlay(e) {
    e.preventDefault();
    this.props.dispatch(changeOverlay(null, null, false));
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
        return <aside key={i} className="ten-img-container"> 
                <img src={`${imgList[i].display_sizes[0].uri}`} 
                    alt={`${imgList[i].title}`}
                    className="ten-img"
                    onClick={(e) => this.showOverlay(e, imgList[i].display_sizes[0].uri, imgList[i].title)} />
                <p>{imgList[i].title}</p>
              </aside>;
      })
    }
  }
  
  render() {
    return (
      <section className="img-container">
        {this.props.picOverlay === true ? 
          <aside className="bg-overlay">
            <div className="overlay-img-container">
              <img src={`${this.props.picSrc}`} 
                    alt={`${this.props.picTitle}`} />
              <p className="overlay-img-title">{this.props.picTitle}</p>
              <p className="overlay-img-close"
                  onClick={(e) => this.closeOverlay(e)}>X</p>
            </div>
          </aside>
          : null}
        {this.renderPictures()}
      </section>
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