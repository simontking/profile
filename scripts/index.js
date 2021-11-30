$(document).ready(function(){

  $("#buttonhome").click(function(){
    clearAll()
    showSection("#landing");
  })
  $("#buttonskills").click(function(){
    clearAll()
    showSection("#skills");
  })
  $("#buttonhobbies").click(function(){
    clearAll()
    showSection("#hobbies");
  })
  $("#buttondogs").click(function(){
    clearAll()
    showSection("#dogs");
  })

});

function clearAll(){
  $("button").prop('disabled', true);
  $("#landing").fadeOut(1000);
  $("#skills").fadeOut(1000);
  $("#hobbies").fadeOut(1000);
  $("#dogs").fadeOut(1000);
}

function showSection(selector){
  $(selector).fadeIn(3000);
  $("button").prop('disabled', false);
}
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
