import "jquery"

$('.search').keyup(function(e){
  if(e.keyCode == 13)
  {
      console.log(e.target.value)
  }
});

$('.sign').click(function () {
  document.getElementById("signDropdown").classList.toggle("show");
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.sign')) {
    var dropdowns = document.getElementsByClassName("signDropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
