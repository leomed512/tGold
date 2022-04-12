//Variables for the Connect Wallet button popup message

var popUp = document.getElementById("popup");
var button = document.getElementById("stakingBtn");
var span = document.getElementsByClassName("close")[0];

button.onclick = function() {
    popUp.style.display = "block";
  }

span.onclick = function() {
popUp.style.display = "none";
}

window.onclick = function(event) {
    if (!event.target.matches('.image-button')) {
        var dropdowns = document.getElementsByClassName("menu__nav-bar");
        var i;
  
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    if (event.target == popUp) {
        popUp.style.display = "none";
      }
}