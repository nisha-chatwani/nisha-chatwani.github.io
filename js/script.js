$(document).ready(function(){
$('#slides').superslides({

animation: 'fade' ,
play: 5000,
pagination: false

});

});

var typed = new Typed(".typed", {
strings: ["I am a Software Engineer", "I am a leader", "I am curious"],
smartBackspace: true,
typeSpeed: 70,
backSpeed: 35,
loop: true,
startDelay: 1000,
showCursor: false
});