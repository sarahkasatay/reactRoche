import React from 'react';
import cover from '../assets/images/covercouture.png'
import title from '../assets/images/titlecouture.jpg'
import coutureOne from '../assets/images/coutre1.jpg'
import coutureTwo from '../assets/images/couture2.jpg'
import coutureThree from '../assets/images/couture3.jpg'

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
            <a href={title} data-fancybox="images-2">
              <div class="has">
                <img src={cover} alt="" />
              </div>
              <div class="figcaption">
                <h3>Haute Couture</h3>
              </div>
            </a>
          </figure>
          <div class="main-caption">
            <h2 class="hasTitleItem">Haute Couture</h2>
          </div>
        
            </div>
             <div style={displayNone}><a href={coutureOne} data-fancybox="images-2">
             </a>
             <a href={coutureTwo} data-fancybox="images-2">
             </a>
             <a href={coutureThree} data-fancybox="images-2">
             </a>
            
           </div>
           </div>
        )
    }

}