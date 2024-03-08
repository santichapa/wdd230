const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();

    // console.table(data.prophets); // to check the data 
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach(p => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");

        fullName.textContent = `${p.name} ${p.lastname}`;

        portrait.setAttribute("src", p.imageurl);
        portrait.setAttribute("alt", `A picture of ${p.name} ${p.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "300");
        portrait.setAttribute("height", "auto");
        
        card.appendChild(fullName);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}