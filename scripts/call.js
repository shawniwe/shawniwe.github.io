let callBtn = document.querySelector(".header__menu-phonecall a");
let number = document.querySelector(".phone-number");

number.onchange = function() {
    console.log(number.value);
    callBtn.href = "tel:" + number.value;
}