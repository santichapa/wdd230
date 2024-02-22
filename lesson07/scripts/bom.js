const b = document.querySelector("button");
const input = document.querySelector("#favchap");
const ul = document.querySelector("#list");
const chaptersArray = getChapterList() || [];


b.addEventListener("click", () => {
    if (input.value != "")
    {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChaptersList();

        input.value = "";
        input.focus();
    }
    else {
        input.focus();
    }
});


chaptersArray.forEach((chapter) => {chapter});

function displayList(item) {
    const li = document.createElement("li");
    const del = document.createElement("button");
        
    li.textContent = item;
    del.textContent = "❌";

    li.appendChild(del);
    ul.appendChild(li);
    
    del.addEventListener("click", () => {
        ul.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChaptersList() {
    localStorage.setItem("BOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("BOMList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.lenght - 1);
    chaptersArray = chaptersArray.filter((item) => {item !== chapter});
    setChaptersList();
}


