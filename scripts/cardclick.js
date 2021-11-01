let card = document.querySelectorAll(".delivery__item"); 

card.forEach(x => x.onmouseenter = function() {
    if(!x.getAttribute("selected")) {   
        x.classList.toggle("delivery__item--selected");   
        x.innerHTML += '<a href="#" class="delivery__details">Подробнее <img class="arrow_icon" src="img/arrow_icon.svg"></a>';     
        x.setAttribute("selected", true);
    }
});

card.forEach(x => x.onmouseleave = function() {
    x.classList.toggle("delivery__item--selected");
    x.querySelectorAll(".delivery__details").forEach(x => x.remove())
    x.removeAttribute("selected");
});