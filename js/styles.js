// Smooth scrolling using jQuery easing

$(document).ready(function(){

  $("a").on('touchstart click', function(event) {

    if (this.hash !== "") {
    
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1800, function(){
   
        window.location.hash = hash;
      });
    } 
  });
});
