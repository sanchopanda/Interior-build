adaptiveMenu();

function adaptiveMenu() {
  var toggle = document.querySelector(".toggle");
  var nav = document.querySelector(".main-nav");
  toggle.addEventListener("click", function(event){
      event.preventDefault();
      toggle.classList.toggle("toggle--close");
      nav.classList.toggle("main-nav--open");
  });
};


