/*!
 This is JavaScript added by lockey
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';
//var nickname = 'Hello, Halo, Hi.'
//$('#nickname').html(nickname)
// class helper functions from bonzo https://github.com/ded/bonzo
setInterval(
  function welcome(){
  var timeNow = Date()
  var timeSplit = timeNow.split(" ")
  var hms = timeSplit[4]
  var timeStr = timeSplit[0]+" "+timeSplit[1]+" "+ timeSplit[2]+" "+timeSplit[3]+" "+hms
  var hour = hms.slice(0,2)
  var gretting = timeStr+' AM. '
  if (hour >= 9 && hour <12){
    gretting = timeStr+' Later AM. '
  }
  
  if (hour >= 12 && hour <14){
    gretting = timeStr+' Middle Day. '
  }
  
  if (hour >= 14 && hour <16){
    gretting = timeStr+' PM. '
  }

  if (hour >= 16 && hour <19){
    gretting = timeStr+' Later PM. '
  }
 
  if (hour >= 19 && hour <20){
    gretting = timeStr+' Good Evening. '
  }

  if (hour >= 20 && hour <23){
    gretting = timeStr+' Good Night. '
  }

  if (hour >= 23 && hour <24){
    gretting = timeStr+' Later Night. '
  }
  
  if (hour >= 24 && hour <6){
    gretting = timeStr+' Dream Time. '
  }

  $('#gretting').html(gretting)
},1000)
$('#Personal').click(function(){
  $('#page-content1').fadeIn(500)
})
})( window );
