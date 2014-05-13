'use Strict';


$('.button').click(function() {
	$('.click').css('background-color', 'yellow');
});


$('.button-dbl').dblclick(function() {
	$('.double').css('background-color', 'green');
});
 

$('.button-fade').click(function() {
  $('.fade').fadeOut( "slow", function() {
  });
});


$('.button-slideup').click(function() {
  $('.slideup').slideUp( "slow", function() {
  });
});