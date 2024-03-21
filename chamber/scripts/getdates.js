document.getElementById("currentdate").innerText = new Date().getFullYear();

// document.querySelector("#lastModified").innerHTML = `Last modified: ${document.lastModified}`;

// const recordDateTime = document.querySelector("#recorddt");

// recordDateTime.value = Date.now();

// localStorage.setItem("recordDateTime-ls", recordDateTime);

const btn = document.getElementById("banner-button"); 

btn?.addEventListener("click", () => {
    if (btn != null) {
        document.querySelector(".banner").classList.add("hide");
        document.querySelector(".banner"). classList.toggle(".banner");
    }
});

function checkMeetingDay() {
    const d = new Date();
    let day = d.getDay();
    if (day > 0 && day < 4) {
        document.querySelector(".banner").classList.remove("hide");
    }
}

checkMeetingDay();