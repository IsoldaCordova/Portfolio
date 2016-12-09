
// pasar mouse cambia de color iconos de footer
$(document).ready(function(){
    $('.last').mouseenter(function(){
      $(this).css({'background-color':'#666699','border-radius':'50%'});
    }); 
     $('.last').mouseleave(function(){
      $(this).css('background-color','transparent');
    });   
});
