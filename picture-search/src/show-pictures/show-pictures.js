import React from 'react';
import {connect} from 'react-redux';
import { link } from 'fs';

export class ShowPictures extends React.Component{
  renderPictures() {
    console.log(this.props.imageList);
    let imgList = this.props.imageList.images;
    console.log(imgList);
    let limitTenImgs = [];
    if(typeof imgList !== "undefined" && imgList.length !== 0){
      for(let i = 0; i < 10; i++) {
        console.log('hi', imgList[i]);
        limitTenImgs.push(imgList[i]);
      }
    }
    console.log(limitTenImgs);
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
    console.log('kek');
    // let pictureList = [];
    // let imgList = this.props.imageList;
    // for(let i = 0; i < 10; i++) {
    //   pictureList.push(
    //     `<aside key=${i}>
    //       <img src="${imgList[i].display_sizes[0].uri} alt=${imgList[i].title}"/>
    //       <p>${imgList[i].title}</p>
    //     </aside>`)
    // }
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