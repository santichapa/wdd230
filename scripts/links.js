const baseURL = "https://santichapa.github.io/wdd230/";
const linksURL = "https://santichapa.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();

    displayLinks(data.lessons);
}

getLinks();

function displayLinks(weeks) {
    const list = document.createElement("ul");

    weeks.forEach(w => {
        const lesson = document.createElement("li");
        const activities = [];
        

        w.links.forEach(link => {
            const a = `<a href="${link.url}">${link.title}</a>`;
            activities.push(a);
        });

        let text = activities.join(" | ")
        lesson.innerHTML = `Week ${w.lesson}: ${text}`;
        list.appendChild(lesson);
    });

    document.querySelector("#activities").appendChild(list);
}