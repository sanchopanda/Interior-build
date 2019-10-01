activeServices();

function activeServices() {
  var item = Array.from(document.querySelectorAll(".services__item "));
  var tabPanels =  Array.from(document.querySelectorAll(".services__tab"));

  for (let el of item) {
    el.onclick = function(){
      var activeItem = document.querySelector(".services__item--active");
      var activeTab = document.querySelector(".services__tab--active");

      activeItem.classList.toggle("services__item--active");
      el.classList.toggle("services__item--active");

      var index = item.indexOf(el);

      var tab = tabPanels.filter(el => el.getAttribute("data-index") == index);

      activeTab.classList.toggle("services__tab--active");
      tab[0].classList.toggle("services__tab--active");
    };
  }
};




