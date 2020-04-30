import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const images = [
  'http://sylvieroche.com/webdev/wp-content/uploads/2020/03/image-1-1.jpg',
  'http://sylvieroche.com/webdev/wp-content/uploads/2020/03/image-2-1.jpg',
  'http://sylvieroche.com/webdev/wp-content/uploads/2020/03/image-3-1.jpg',
  'http://sylvieroche.com/webdev/wp-content/uploads/2020/03/image-4-1.jpg',
  'http://sylvieroche.com/webdev/wp-content/uploads/2020/03/image-5-1.jpg',
  'http://sylvieroche.com/webdev/wp-content/uploads/2020/03/image-6-1.jpg',
];


export default class AmeRusseGallery extends React.Component {

  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
  render() {
    const { photoIndex, isOpen } = this.state;
 return (
     

    
             
     
                <div class="item">
        <figure class="main-photo  ">
            <a onClick={() => this.setState({ isOpen: true })} >
              <div class="has">
                <img src="http://sylvieroche.com/webdev/wp-content/uploads/2020/03/1-1-1.jpg" alt="" />
              </div>
              <div class="figcaption">
                <h3>L’âme Russe</h3>
                <h4 class="first-child">L’âme Russe</h4>
              </div>
            </a>
          </figure>
          <div class="main-caption">
            <h2 class="hasTitleItem">L’âme Russe</h2>
          </div>
 
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
       </div>
       
     
    );
  }

}