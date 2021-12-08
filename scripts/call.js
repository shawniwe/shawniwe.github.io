let callBtn = document.querySelector(".header__menu-phonecall a");
let number = document.querySelector(".phone-number");
let numbersBlock = document.querySelector(".header__menu-picknumber");
let numbers = numbersBlock.querySelectorAll(".header__menu-picknumber-item");
let closeButton = document.querySelector(".header__menu-picknumber .button-orange");

console.log(numbersBlock);
console.log(numbers);

number.onclick = function() {
    numbersBlock.classList.toggle("header__menu-picknumber--hidden");
}

numbers.forEach(x => x.onclick = function() {
    callBtn.href = "tel:" + x.innerText;
    number.innerText = x.innerText;

    numbers.forEach(x => x.classList.remove("header__menu-picknumber-item--selected"));

    x.classList.add("header__menu-picknumber-item--selected");
});

closeButton.onclick = function() {
    numbersBlock.classList.toggle("header__menu-picknumber--hidden");
}