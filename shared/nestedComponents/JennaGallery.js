import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const images = [
  'http://sylvieroche.com/webdev/wp-content/uploads/2020/03/image-1-2.jpg',
  'http://sylvieroche.com/webdev/wp-content/uploads/2020/03/image-3-2.jpg',
  'http://sylvieroche.com/webdev/wp-content/uploads/2020/03/image-3-2.jpg',
  'http://sylvieroche.com/webdev/wp-content/uploads/2020/03/image-5-2.jpg',
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
                <img src="http://sylvieroche.com/webdev/wp-content/uploads/2020/04/Capture-d’écran-2020-04-06-à-16.46.22.png" alt="" />
              </div>
              <div class="figcaption">
                <h3>Jenna</h3>
                <h4 class="first-child">Jenna</h4>
              </div>
            </a>
          </figure>
          <div class="main-caption">
            <h2 class="hasTitleItem">Jenna</h2>
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