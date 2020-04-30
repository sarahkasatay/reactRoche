import React from 'react';
import RodeoGallery from './nestedComponents/RodeoGallery'
import CoutureGallery from './nestedComponents/CoutureGallery'
import TessGallery from './nestedComponents/TessGallery'
import Footer from './Footer'


export default class Portfolio extends React.Component {

    render() {
  
        return(
   
          <div class="container">
            
          <div class="h100 has120">
  		</div>
            
            <div class="container main">
      
      <div class="parent_grid mt100 ">
      <RodeoGallery />
        <CoutureGallery />
        <TessGallery />

        </div>
        </div>

        <Footer />


              </div>

        )
    }


}