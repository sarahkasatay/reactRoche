import React from 'react';
import cover from '../assets/images/covertess.png'
import title from '../assets/images/titletess.jpg'
import tessOne from '../assets/images/tess1.jpg'
import tessTwo from '../assets/images/tess2.jpg'
import tessThree from '../assets/images/tess3.jpg'

export default class Gallery extends React.Component {


    render() {
        var displayNone = {
            display : 'none'
          }
        var fontSize = {
            fontSize:'16px'
        }
        return(
            <div>
                <div class="item">
          <figure class="main-photo  ">
            <a href={title} data-fancybox="images-3">
              <div class="has">
                <img src={cover} alt="" />
              </div>
              <div class="figcaption">
                <h3>Tess</h3>
              </div>
            </a>
          </figure>
          <div class="main-caption">
            <h2 class="hasTitleItem">Tess</h2>
          </div>
        
            </div>
             <div style={displayNone}><a href={tessOne} data-fancybox="images-3">
             </a>
             <a href={tessTwo} data-fancybox="images-3">
             </a>
             <a href={tessThree} data-fancybox="images-3">
             </a>
            
           </div>
           </div>
        )
    }

}