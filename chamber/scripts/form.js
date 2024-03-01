const pwd = document.querySelector("#password");
const pwd2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

pwd2.addEventListener("focusout", checkSame);

function checkSame() {
    if(pwd.value !== pwd2.value) {
        message.textContent = "*Passwords doesn't match!";
        message.style.display = "block";
        message.style.color = "red";

        pwd2.style.background = "#fff0f3";
        pwd2.value = "";
        pwd.value = "";
        pwd.focus();
    } else {
        message.style.display = "none";
        pwd2.style.background = "#fff";
    }
}

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}