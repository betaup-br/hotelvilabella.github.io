$(function(){
  $("head").load("head.html");
  $("header").load("header.html"); 
  $("footer").load("footer.html"); 
});

window.addEventListener("load", function(){
    setTimeout(function(){
    $("body").fadeIn();
  }, 150); 
});
