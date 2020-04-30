import express from 'express'
import cors from 'cors'
import {renderToString} from 'react-dom/server'
import App from '../../shared/App'
import React from 'react'
import serialize from 'serialize-javascript'
import {matchPath, StaticRouter, Redirect } from 'react-router-dom'
import routes from '../../shared/routes'


const app = express()

app.use(cors())

app.use(express.static('public'))

app.get('*', (req, res, next) => {
    const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}
    const name = 'Tyler'
    const markup = renderToString(
        <StaticRouter location={req.url} context={{}}>
            <App data={name}/>
        </StaticRouter>
        
    )
    res.send(`
    <!DOCTYPE>
    <html>
        <head>
            <title>SYLVIE ROCHE</title>
          
           
            <script src='/bundle.js' defer></script>
            <script>window.__INITIAL_DATA__=${serialize(name)}</script>
        </head>
        <body>
            <div id='root'>
                ${markup}
                
            </div>
            <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
          

    <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.2.1/jquery.fancybox.js"></script>
    <script> 


    $.fancybox.defaults.loop = true;
    $.fancybox.defaults.btnTpl.zoom ='<button class="fancybox-button fancybox-zoom "><div class="zoom"><span class="zoom-inner">'+
    '<img src="http://sylvieroche.com/webdev1/wp-content/uploads/2020/04/zoom.png">'+
    '</span></div></button><span class="zoommobile"></span>';
    
    // Choose what buttons to display by default
    $.fancybox.defaults.buttons = [
      'zoom',
      'share',
      'close',
        
    ];
    $( '[data-fancybox]' ).fancybox({
      
      onInit : function( instance ) {
    
        // Make zoom icon clickable
        instance.$refs.toolbar.find('.zoommobile').on('click', function() {
    
          if ( instance.isScaledDown() ) {
            instance.scaleToActual();
    
          } else {
            instance.scaleToFit();
          }
    
        });
                      $( ".fancybox-zoom" ).click(function() {
      $( ".zoommobile" ).click();
      //alert('zoom');
    });
    
      },
        'beforeLoad': function(){
        $(".fancybox-button--arrow_left").append('<svg version="1.2"  x="0px" y="0px" viewBox="0 0 449.3 800" ><polygon fill="#000" points="14,400 224.6,204.4 435.2,8.9 435.2,400 435.2,791.1 224.6,595.6 "/></svg>');
                     $(".fancybox-button--arrow_right").append('<svg version="1.2" x="0px" y="0px" viewBox="0 0 449.3 800" ><polygon fill="#000" points="435.2,400 224.6,204.4 14,8.9 14,400 14,791.1 224.6,595.6 "/></svg>');
            $('#fancybox-wrap, #fancybox-outer, #fancybox-content').css('width', 'auto');
            
                  $(".fancybox-caption").append('<a  data-fancybox-fullscreen class="button-fullscreen" href="javascript:;"><img src="http://sylvieroche.com/webdev1/wp-content/uploads/2020/04/AC3MSC10.png"></a>');
      },
        
        afterLoad : function( instance1, current ) {
            
            if ( instance1.group.length > 1 && current.$content ) {
        
    
                
              
            }
    
    
          }
     
    });
   
    $('.fancybox-button--arrow_left').children(':nth-child(1)').remove();

flexFont = function () {
    var divs = document.getElementsByClassName("flexFont");
    for(var i = 0; i < divs.length; i++) {
        var relFontsize = divs[i].offsetWidth*0.17;
        divs[i].style.fontSize = relFontsize+'px';
    }
};

$(window).on('load resize', function () {
  const mq =window.matchMedia("(min-width: 501px)");
	  winH = $(window).height();
    winW = $(window).width();
    final = (535*((winH-240)/2043.0));
  if (mq.matches) {
  $('.photo-main').css('width',  final);
  $('.photo-main').css('opacity', 1);
}else{
  $('.photo-main').css('width',  '50%');
	  $('.photo-main').css('margin-bottom',  '2%');
  $('.photo-main').css('opacity', 1);
}
	 flexFont();
});

    </script>
    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="/__/firebase/7.14.2/firebase-app.js"></script>
    
    <!-- TODO: Add SDKs for Firebase products that you want to use
         https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="/__/firebase/7.14.2/firebase-analytics.js"></script>
    
    <!-- Initialize Firebase -->
    <script src="/__/firebase/init.js"></script>
        </body>
    </html>
    `)
})

app.listen(3000, () => {
    console.log('Sirvour kism3 f 3000')
})

//    <script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>

// <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />