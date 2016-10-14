$(function(){
  //select the first iframe that has a src that starts with "//www.youtube"
  var firstIframe = document.querySelector('iframe[src^="https://www.youtube"]');
  //get the current source
  var src = firstIframe.src;
  //update the src with "autoplay=1"
  var newSrc = src+'?autoplay=1';
  //change iframe's src
  firstIframe.src = newSrc;

  $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });

  // If you want to keep full screen on window resize
  $(window).resize(function(){
    $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
  });
});
