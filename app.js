$('document').ready(function(){

  let show = $('.show');
  let hide = $('.hide');
  let toggle = $('.toggle');
  let box = $('.box');
  let stop = $('.stop');
  

  show.on('click', function(){
   box.show('slow');
  });


  hide.on('click', function(){
    box.hide( 'slow');
  });


  toggle.on('click', function(){
    box.fadeToggle();
  });


  stop.on('click', function(){
    box.stop('slow');
  });

  let h1 = $('h1');
  let p = $('p');
  let a = $('a');


  $(h1).click(function(){
    $(this).hide();
  });

  $(a).click(function(){
    $(h1).toggle();
  });

  $('.nill-1').mouseenter(function(){
    alert("mouseenter");
  });

  $('.nill-2').mouseleave(function(){
    alert("mouseleave");
  });

  $('.abc h2').on('click',function(){
    $('.about-box').slideToggle();
  });


  let question = $('.qns');

  question.on('click', function(){
 
    if ($(this).hasClass(`active`)){
      $(this).removeClass(`active`)
    } else{
      question.removeClass(`active`)
      $(this).addClass(`active`)
    }

    $('p').slideDown();

  });
   

});