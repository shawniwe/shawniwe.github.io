let callBtn = document.querySelector(".header__menu-phonecall a");
let number = document.querySelector(".phone-number");
let numbersBlock = document.querySelector(".header__menu-picknumber");
let numbers = numbersBlock.querySelectorAll(".header__menu-picknumber-item");
let closeButton = document.querySelector(".header__menu-picknumber .button-orange");

console.log(numbersBlock);
console.log(numbers);

let isVisible = true;
let isCursorOnNumbers = false;

number.onmouseenter = function() {
    numbersBlock.classList.remove("header__menu-picknumber--hidden");
    isVisible = true;
}

number.onmouseleave = function () {
    setTimeout(() => {
        if(!isCursorOnNumbers && isVisible) {
            numbersBlock.classList.add("header__menu-picknumber--hidden");
            isVisible = false;
    
            console.log('visible: ' + isVisible);
            console.log('on numbers: ' + isCursorOnNumbers);
        }
    }, 100);
}

numbersBlock.onmouseenter = function () {
    isCursorOnNumbers = true;
}

numbersBlock.onmouseleave = function() {
    if(isVisible && isCursorOnNumbers) {
        numbersBlock.classList.add("header__menu-picknumber--hidden");
        isVisible = false;
        isCursorOnNumbers = false;
    }
}

numbers.forEach(x => x.onclick = function() {
    callBtn.href = "tel:" + x.innerText;
    number.innerText = x.querySelector(".header__menu-picknumber-item-number").innerText;

    numbers.forEach(x => x.classList.remove("header__menu-picknumber-item--selected"));

    x.classList.add("header__menu-picknumber-item--selected");
});