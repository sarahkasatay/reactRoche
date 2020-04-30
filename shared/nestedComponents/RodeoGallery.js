import React from 'react';
import cover from '../assets/images/rodeocover.jpg'
import title from '../assets/images/title.jpg'
import rodeoOne from '../assets/images/rodeo1.jpg'
import rodeoTwo from '../assets/images/rodeo2.jpg'
import rodeoThree from '../assets/images/rodeo3.jpg'

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
            <a href={title} data-fancybox="images-1">
              <div class="has">
                <img src={cover} alt="" />
              </div>
              <div class="figcaption">
                                    <h3>Rodeo Colorado</h3>
                                    					
               </div>
            </a>
          </figure>
          <div class="main-caption">
            <h2 class="hasTitleItem">Rodeo Colorado</h2>
          </div>
        
            </div>
             <div style={displayNone}><a href={rodeoOne} data-fancybox="images-1">
             </a>
             <a href={rodeoTwo} data-fancybox="images-1">
             </a>
             <a href={rodeoThree} data-fancybox="images-1">
             </a>
            
           </div>
           </div>
        )
    }

}