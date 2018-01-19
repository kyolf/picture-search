import React from 'react';
import {connect} from 'react-redux';
import { link } from 'fs';

export class ShowPictures extends React.Component{
  renderPictures() {
    console.log(this.props.imageList);
    let imgList = this.props.imageList;
    let limitTenImgs = imgList.filter((el,index) => index < 10);
    console.log(limitTenImgs);
    return limitTenImgs.map((el, i) => {
      return <aside key={i}> 
               <img src={`${imgList[i].display_sizes[0].uri}`} 
                   alt={`${imgList[i].title}`} />
               <p>{imgList[i].title}</p>
             </aside>;
    })
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