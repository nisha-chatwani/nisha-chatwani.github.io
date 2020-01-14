// Get the modal
var modal1 = document.getElementById('modal-prosum');
var modal2 = document.getElementById('modal-boeing');
var modal3 = document.getElementById('modal-lab');
var modal4 = document.getElementById('modal-cais');
var modal5 = document.getElementById('modal-scope');
var modal6 = document.getElementById('modal-soccer');

// Get the button that opens the modal
var btn1 = document.getElementById("img-prosum");
var btn1a = document.getElementsByClassName("exp")[0];
var btn2 = document.getElementById("img-boeing");
var btn2a = document.getElementsByClassName("exp")[1];
var btn3 = document.getElementById('img-lab');
var btn3a = document.getElementsByClassName("exp")[2];
var btn4 = document.getElementById('img-cais');
var btn4a = document.getElementsByClassName("exp")[3];
var btn5 = document.getElementById('img-scope');
var btn5a = document.getElementsByClassName("exp")[4];
var btn6 = document.getElementById('img-soccer');
var btn6a = document.getElementsByClassName("exp")[5];

//Get the button that closes the modal
var closebtn1 = document.getElementById("close-button1");
var closebtn2 = document.getElementById("close-button2");
var closebtn3 = document.getElementById("close-button3");
var closebtn4 = document.getElementById("close-button4");
var closebtn5 = document.getElementById("close-button5");
var closebtn6 = document.getElementById("close-button6");

// Get the <span> element that closes the modal
var span1 = document.getElementById("close1");
var span2 = document.getElementById("close2");
var span3 = document.getElementById("close3");
var span4 = document.getElementById("close4");
var span5 = document.getElementById("close5");
var span6 = document.getElementById("close6");

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}
btn1a.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn2a.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}
btn3a.onclick = function() {
  modal3.style.display = "block";
}
btn4.onclick = function() {
  modal4.style.display = "block";
}
btn4a.onclick = function() {
  modal4.style.display = "block";
}
btn5.onclick = function() {
  modal5.style.display = "block";
}
btn5a.onclick = function() {
  modal5.style.display = "block";
}
btn6.onclick = function() {
  modal6.style.display = "block";
}
btn6a.onclick = function() {
  modal6.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
span4.onclick = function() {
  modal4.style.display = "none";
}
span5.onclick = function() {
  modal5.style.display = "none";
}
span6.onclick = function() {
  modal6.style.display = "none";
}

//Wnen the user clicks on the close button, close the modal
closebtn1.onclick = function() {
  modal1.style.display = "none";
}
closebtn2.onclick = function() {
  modal2.style.display = "none";
}
closebtn3.onclick = function() {
  modal3.style.display = "none";
}
closebtn4.onclick = function() {
  modal4.style.display = "none";
}
closebtn5.onclick = function() {
  modal5.style.display = "none";
}
closebtn6.onclick = function() {
  modal6.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//When ever the modal is shown the below code will execute.
$(".modal").on("shown.bs.modal", function()  {
  var urlReplace = "#" + $(this).attr('id'); 
  history.pushState(null, null, urlReplace); 
});

// This code gets executed when the back button is clicked, hide any/open modals.
$(window).on('popstate', function() { 
  $(".modal").modal('hide');
});