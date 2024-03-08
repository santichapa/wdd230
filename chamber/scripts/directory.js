const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();

    // console.table(data.prophets); // to check the data 
    displayMembers(data.members);
}

getMemberData();

const displayMembers = (members) => {
    prophets.forEach(m => {
        const card = document.createElement("section");
        const name = document.createElement("h2");
        const image = document.createElement("img");

        name.textContent = m.name

        image.setAttribute("src", m.img);
        image.setAttribute("alt", `The brand icon of ${m.name}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "200");
        image.setAttribute("height", "auto");
        
        card.appendChild(name);
        card.appendChild(image);
        cards.appendChild(card);
    });
}