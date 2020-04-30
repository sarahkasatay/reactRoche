import React from 'react';
import routes from './routes';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
//import './assets/css/index.css'



class App extends React.Component {
      componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "./assets/js/script.js";
    //For head
   //document.head.appendChild(script);

    // For body
    document.body.appendChild(script);
  }
    render() {
        return(
            <div className="warrp">


                <Nav />

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
export default App