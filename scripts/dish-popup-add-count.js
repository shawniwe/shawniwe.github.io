let plus = document.querySelector(".dish-popup__settings-button-plus");
let minus = document.querySelector(".dish-popup__settings-button-minus");
let input = document.querySelector(".dish-popup__settings-dish-count");

plus.onclick = function() {
    input.value++;
};

minus.onclick = function() {
    if(input.value != 1) {
        input.value--;
    }
};