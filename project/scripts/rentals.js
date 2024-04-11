const url = "https://santichapa.github.io/wdd230/project/data/rentals.json";
const cards = document.querySelector("#cards");

async function getRentalData() {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data); // to check the data 
    displayRentals(data.vehicles);
}

getRentalData();

const displayRentals = (rentals) => {
    rentals.forEach(r => {
        const card = document.createElement("section");
        const photo = document.createElement("img");
        const modelName = document.createElement("h3");
        const category = document.createElement("p");
        const capacity = document.createElement("p");
        const heading = document.createElement("h4");
        const dayPrice = document.createElement("p");
        const halfDayPrice = document.createElement("p");


        modelName.textContent = r.modelName;
        category.innerHTML = `<strong>Category: </strong> ${r.category}`;
        capacity.innerHTML = `<strong>Capacity: </strong> ${r.capacity}`;
        heading.innerHTML = `Rental Prices*`;
        dayPrice.innerHTML = `<strong>All Day:</strong> $${r.reservation.fullday} ($${r.walkin.fullday})`;
        halfDayPrice.innerHTML = `<strong>Half Day (3hs):</strong> $${r.reservation.halfday} ($${r.walkin.halfday})`;


        photo.setAttribute("src", `images/${r.imageurl}.webp`);
        photo.setAttribute("alt", `A photo of a ${r.modelName}`);
        photo.setAttribute("loading", "lazy");
        photo.setAttribute("width", "250");
        photo.setAttribute("height", "auto");
        
        card.appendChild(photo);
        card.appendChild(modelName);
        card.appendChild(category);
        card.appendChild(capacity);
        card.appendChild(heading);
        card.appendChild(dayPrice);
        card.appendChild(halfDayPrice);
        cards.appendChild(card);
    });
}