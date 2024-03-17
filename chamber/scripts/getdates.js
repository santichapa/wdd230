document.getElementById("currentdate").innerText = new Date().getFullYear();

// document.querySelector("#lastModified").innerHTML = `Last modified: ${document.lastModified}`;

// const recordDateTime = document.querySelector("#recorddt");

// recordDateTime.value = Date.now();

// localStorage.setItem("recordDateTime-ls", recordDateTime);

const btn = document.querySelector("#banner-button"); 

btn.addEventListener("click", () => {
    document.querySelector(".banner").classList.add("hide");
});

function checkMeetingDay() {
    const d = new Date();
    let day = d.getDay();
    if (day > 0 && day < 4) {
        document.querySelector(".banner").classList.remove("hide");
    }
}

checkMeetingDay();
