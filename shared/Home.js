import React from 'react';
import routes from './routes2';
import { Route, Switch } from 'react-router-dom';
import RodeoGallery from './nestedComponents/RodeoGallery'
import CoutureGallery from './nestedComponents/CoutureGallery'
import TessGallery from './nestedComponents/TessGallery'
import silvieMain from './assets/images/silvie-main.jpg'
import Footer from './Footer'


export default class Home extends React.Component {


    render() {
      var divStyle = {
        fontSize : '20px'
      }
      var fontSize = {
        fontSize:'16px'
    }
        return(

         <div>
  
          <div class="container">
          <div class="h100">
            <div class="photo-main">
              <div class="warrp">
                
                <img src={silvieMain} alt="" />
                <div class="caption-main" style={divStyle}>
        <h1 class="hasTitle">SILVIE ROCHE</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container main">
      <div class="text-center " style={fontSize}>
        <h2 class="hasTitleP"> - Portfolios -</h2>
      </div>
      <div class="parent_grid mt100 ">
        <RodeoGallery />
        <CoutureGallery />
        <TessGallery />
        </div>
        </div>
        <Footer />

<Switch>
 {routes.map(({path, exact, component : C, ...rest}) => (
     <Route 
        key={path}
        path={path}
        exact={exact}
        render={(props) => (
            <C {...props} {... rest} />
        )}
     />
 ))}
 </Switch>
        </div>
        )
    }

}