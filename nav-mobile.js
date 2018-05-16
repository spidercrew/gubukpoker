//<![CDATA[
$(function(){ // document ready
   if ($('#sticky').length) { // make sure "#sticky" element exists
      var el = $('#sticky');
      var stickyTop = $('#sticky').offset().top; // returns number
      var stickyHeight = $('#sticky').height();

      $(window).scroll(function(){ // scroll event
          var limit = $('#footer').offset().top - stickyHeight - 5;

          var windowTop = $(window).scrollTop(); // returns number

          if (stickyTop < windowTop){
             el.css({ position: 'fixed', top: 5 });
          }
          else {
             el.css('position','static');
          }

          if (limit < windowTop) {
          var diff = limit - windowTop;
          el.css({top: diff});
          }
        });
   }
});
//
var ww=document.body.clientWidth;$(document).ready(function(){$(".nav li a").each(function(){if($(this).next().length>0){$(this).addClass("parent")}});$(".toggleMenu").click(function(e){e.preventDefault();$(this).toggleClass("active");$(".nav").toggle()});adjustMenu()});$(window).bind("resize orientationchange",function(){ww=document.body.clientWidth;adjustMenu()});var adjustMenu=function(){if(ww<768){$(".toggleMenu").css("display","inline-block");if(!$(".toggleMenu").hasClass("active")){$(".nav").hide()}else{$(".nav").show()}$(".nav li").unbind("mouseenter mouseleave");$(".nav li a.parent").unbind("click").bind("click",function(e){e.preventDefault();$(this).parent("li").toggleClass("hover")})}else if(ww>=768){$(".toggleMenu").css("display","none");$(".nav").show();$(".nav li").removeClass("hover");$(".nav li a").unbind("click");$(".nav li").unbind("mouseenter mouseleave").bind("mouseenter mouseleave",function(){$(this).toggleClass("hover")})}}
//]]>
