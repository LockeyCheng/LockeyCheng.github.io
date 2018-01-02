/*!
 This is JavaScript added by lockey
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo
function welcome(){
  var nickname = 'Hello, Halo, Hi.'
  $('#nickname').html(nickname)
  var t = new Date()
  var hour =t.getHours()
  var gretting = 'Good Morning !'
  if (hour >= 9 && hour <12){
    gretting = 'Good Later Morning !'
  }
  
  if (hour >= 12 && hour <14){
    gretting = 'Good Middle Day !'
  }
  
  if (hour >= 14 && hour <18){
    gretting = 'Good Afternoon !'
  }
 
  if (hour >= 18 && hour <20){
    gretting = 'Good Evening !'
  }

  if (hour >= 20 && hour <23){
    gretting = 'Good Night !'
  }

  if (hour >= 23 && hour <24){
    gretting = 'Good Later Night !'
  }
  
  if (hour >= 24 && hour <6){
    gretting = 'Nice Dream !'
  }

  $('#gretting').html(gretting)
}
welcome()
})( window );
