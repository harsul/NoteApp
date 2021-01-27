$(function(){

  'use strict';

  // object-fit fallback
  Modernizr.on('object-fit', function( result ) {
    if (!result) {
     $('.object-fit-cover').each(function(){
       $(this).css('visibility', 'hidden');
       var imgUrl = $(this).attr('src');
       $(this).parent().css('background-image', 'url(' + imgUrl + ')');
       $(this).parent().css('background-size', 'cover');
       $(this).parent().css('background-position', 'center center');
     });
    }
  });

});
