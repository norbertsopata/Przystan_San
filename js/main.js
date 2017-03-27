


var menuItem = document.querySelectorAll('.menu-item');
var menuItemHref = document.querySelectorAll('.menu-item a');


$(document).ready(function() {

    $('.logo').click(function(){
        $('html, body').animate({
        scrollTop:0
      }, 1000);
        return false;
    });

var scrollDownTarget = $(".section").eq(1);

$(".scroll-down-section").click(function(){
  $('html, body').animate({
          scrollTop: scrollDownTarget.offset().top -100
        }, 1000);
});


});

$('#offer-item').click(function(){
var hostname = window.location.hostname;
 window.location.href = '/v2/oferta/';
});


//Smoort scrolling inspired by CSS-Trick//fa

$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top -100
      }, 1000);
      return false;
    }
  }
});




$(window).scroll(function(){
 onScrollHandle();
 scrollToTop()
});



function onScrollHandle(){
var triggerPosition = $(document).scrollTop() + 300;

$('.main--nav > ul > li > #scroll-item').each(function(){
var item = $(this);
var itemSection = $(item.attr('href'));


if (itemSection.position().top <= triggerPosition && triggerPosition <= itemSection.position().top + itemSection.height() ){
  $('.main--nav > ul > li').removeClass("active");
  item.parent().addClass("active");} 
  else{
    item.removeClass("active");
  }
});

};



  $("#scroll-top").click(function(){
        $('html , body').animate({
          scrollTop:0
        }, 1000);
          return false;
      });



function scrollToTop(){

  $(window).scroll(function(){
    var triggerPosition = $(this).scrollTop();
    
    if(triggerPosition >= 600 && $(window).width() >= 479){
      $("#scroll-top").fadeIn(200);

    } else {
      $("#scroll-top").fadeOut(200);
    }

  });
}


var mobileTrigger = $("#mobile-toggle");
var mobileMenu = $(".mobile-menu-content");



 mobileTrigger.click(function(){
      mobileMenu.toggleClass("visible");
    });

 $('.mobile-menu-content > ul > li > a').click(function(){
    mobileMenu.removeClass("visible");
 });
