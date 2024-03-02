document.getElementById("currentdate").innerText = new Date().getFullYear();

document.querySelector("#lastModified").innerHTML = `Last modified: ${document.lastModified}`;

const recordDateTime = document.querySelector("#recorddt");

recordDateTime.value = Date.now();

localStorage.setItem("recordDateTime-ls", recordDateTime);