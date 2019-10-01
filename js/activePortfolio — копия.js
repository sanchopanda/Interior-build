activePortfolio();

function activePortfolio() {
  var item = Array.from(document.querySelectorAll(".portfolio__item"));
  var tabPanels =  Array.from(document.querySelectorAll(".portfolio__tab"));

  for (let el of item) {
    el.onclick = function(){
      var activeItem = document.querySelector(".portfolio__item--active");
      var activeTab = document.querySelector(".portfolio__tab--active");

      activeItem.classList.toggle("portfolio__item--active");
      el.classList.toggle("portfolio__item--active");

      var index = item.indexOf(el);

      var tab = tabPanels.filter(el => el.getAttribute("data-index") == index);

      activeTab.classList.toggle("portfolio__tab--active");
      tab[0].classList.toggle("portfolio__tab--active");
    };
  }
};




