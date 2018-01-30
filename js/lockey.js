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

  $('#gretting').html(timeStr)
},1000)
$('#Personal').click(function(){
  $('#page-content1').fadeIn(500)
})
})( window );
