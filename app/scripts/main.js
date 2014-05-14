'use Strict';


$('.button').click(function() {
	$('.click').css('background-color', 'yellow');
});


$('.button-dbl').dblclick(function() {
	$('.double').css('background-color', 'green');
});
 

$('.button-fade').click(function() {
	$('.fade').fadeOut('slow', function() {
	});
});


$('.button-slideup').click(function() {
	$('.slideup').slideUp('slow', function() {
	});
});


$('.button-slidedown').click(function() {
	$('.slidedown').slideDown('slow', function() {
	});
});


$('.button-toggle').click(function() {
	$('.toggle').toggle('fast', function() {
	});
});

var para = $('.button-detach').click(function() {
	if (para) {
    	para.appendTo('detach');
    	para = null;
  	} else {
    	para = $('.para').detach();
	}
});


var first, last;

$('.button-timestamp').click(function(time) {
	if (first) {
    	last = time.timeStamp - first;
    $('.timestamp').append("It's been " + last + " milliseconds!  ");
}
	first = time.timeStamp;
});

$('.button-event-type').click(function(click) {
	alert(click.type);
});


$('.button-animate').click(function() {
	$('.animate').animate({
    	opacity: 0.1,
    	width: "100px",
    	height: "100px"
  	}, 
5000, function() {
  });
});

//these two appear before and after the obj + margins
$('.button-beaf').click(function() {
	$('.beaf').before("<p>Hello!</p>");
});

$('.button-beaf').click(function() {
	$('.beaf').after("<p>Good bye!</p>");
});



