// ========== JSON EXAMPLE ==========

const text = '[{"name": "John Doe","age": 30,"isStudent": false,"hobbies": ["reading", "coding"]},{"name": "Santiago","age": 23,"isStudent": true,"hobbies": ["playing sports", "coding"]}]';   

const data = JSON.parse(text);

data.forEach(obj => {
    const p = document.createElement("p");
    p.textContent = `My name is ${obj.name}, I am ${obj.age} years old and my hobbies are ${obj.hobbies[0]} and ${obj.hobbies[1]}`;
    
    document.querySelector("#example").appendChild(p);
});



const JSONArray =  [
    {
        "name": "John Doe",
        "age": 30,
        "isStudent": false,
        "hobbies": ["reading", "coding"]
    },
    
    {
        "name": "Santiago",
        "age": 23,
        "isStudent": true,
        "hobbies": ["sports", "coding"],
        "favoriteMovie": {
            "title": "Star Wars: Episode III - Revenge of the Sith",
            "year": 2005,
            "genre": ["Action", "Adventure", "Fantasy", "Sci-Fi"] 
        }
    }
];   

const JSONString = JSON.stringify(JSONArray);

document.querySelector("#example2").textContent = JSONString;




