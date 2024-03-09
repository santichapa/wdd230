const url = "https://santichapa.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector("#cards");

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data.members);
}

getMemberData();

const displayMembers = (members) => {
    members.forEach(m => {
        const card = document.createElement("section");
        const name = document.createElement("h3");
        const image = document.createElement("img");
        const info = document.createElement("div");
        
        info.textContent = `📞${m.phone} ✉️${m.email} | 📍${m.address}`
        name.textContent = m.name

        image.setAttribute("src", m.img);
        image.setAttribute("alt", `The brand icon of ${m.name}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "200");
        image.setAttribute("height", "auto");

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(info);
        cards.appendChild(card);
    });
}


const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

listButton.addEventListener("click", () => {
    cards.classList.add("list");
});

gridButton.addEventListener("click", () => {
    cards.classList.remove("list");
});
