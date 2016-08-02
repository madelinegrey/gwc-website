//hi mtv welcome to my jquery crib
//sry there isn't much here
//i just moved in

//this makes things happen when you click on the triangle that triggers the dropdown
$(".triangle").click(function() {
  //when you click it, the dropdown menu
  //is made sure that it's not on display
  $(".dropdown-menu").css("display", "none");
  //then the dropdown slides to the left
  $(".dropdown").animate({left: '-250px'});
  //and makes way for the dropdown menu
  //to fade in *oooo ahhhh*
  $(".dropdown-menu").delay(500).fadeIn('slow');
  $(".dropdown-menu").css("display", "center");
});

//kk this just make sure that if you click elsewhere it'll adjust
$(document).click(function() {
  //so the dropdown will stop it's animation
  $(".dropdown").stop();
  //and it will slide back to its original position
  $(".dropdown").animate({left: '0%'});
  //and the menu will fade away quickly
  $(".dropdown-menu").fadeOut('fast');
});

//this is for the hopper button on the dropdown menu
$("#hopper-btn").click(function() {
  //the lovelace content grid will go away
  $("#lovelace").css("display", "none");
  //the hopper content will come in
  $("#hopper").css("display", "block");
  //the dropdown menu fades away
  $(".dropdown-menu").fadeOut("fast");
  //and the dropdown slides back to orig pos
  $(".dropdown").animate({left: '0%'});
  $(".txt-span").text("Hopper");
});

//same thing here but vice versa
$("#lovelace-btn").click(function() {
  $("#hopper").css("display", "none");
  $("#lovelace").css("display", "block");
  $(".txt-span").text("Lovelace");
  $(".dropdown-menu").fadeOut("slow");
  $(".dropdown").animate({left: '0%'});
});

//this just makes smooth scrolling for the menu
$(".go-to").click(function() {
  $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});
