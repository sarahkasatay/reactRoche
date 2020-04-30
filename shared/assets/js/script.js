
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
    final = (1235*((winH-240)/2043.0));
  if (mq.matches) {
  $('.photo-main').css('width',  final);
  $('.photo-main').css('opacity', 1);
}else{
  $('.photo-main').css('width',  '71%');
      $('.photo-main').css('margin-bottom',  '2%');
  $('.photo-main').css('opacity', 1);
}
     flexFont();
});

