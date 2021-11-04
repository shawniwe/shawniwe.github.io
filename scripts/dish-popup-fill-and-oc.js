let popupWindow = document.querySelector(".popup-window");
let closeBtn = popupWindow.querySelector(".dish-popup__close-btn");

let cards = document.querySelectorAll(".menu-dish__item").forEach(x => {
   let button = x.querySelector(".menu-dish__details");
   button.onclick = function() {
        popupWindow.classList.toggle("popup-window--hidden");
        input.value = 1;

        document.body.style.overflowY = "hidden";
        
        let popup = popupWindow.querySelector(".dish-popup");
        popup.querySelector("img").src = x.querySelector(".menu-dish__dish-image").src;
        popup.querySelector(".dish-popup__header").textContent = x.querySelector(".menu-font").textContent;
        popup.querySelector(".dish-popup__description").textContent = x.querySelector(".menu-font__mini").textContent;
   }
});

closeBtn.onclick = function() {
    closePopup();
};

function closePopup() {
    popupWindow.classList.toggle("popup-window--hidden");
    document.body.style.overflowY = "scroll";
}