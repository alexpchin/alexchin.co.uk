$(function(){
  setInterval(createEmoji, 200);
});

function createEmoji(){
  var $emoji = $("<div class='emoji'>✊</div>"),
      $body  = $('body'),
      width  = $body.innerWidth(),
      random = Math.floor(Math.random()*10),
      direction = (random > 5) ? -width : width;

  $body.prepend($emoji);

  return animateEmoji($emoji, direction);
}

function animateEmoji(element, direction){
  var heightFromTop = Math.floor(Math.random()*200),
      fontSize      = 45,
      duration      = 2000;

  element.animate({
    fontSize: fontSize,
    left: direction,
    'top': heightFromTop,
  },{
    duration: duration,
    easing: "swing"
  });
}