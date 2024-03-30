let array = [1, 2, 3, 4, 5, 6, 7, "B", "e", "A"];

let random = array[Math.floor(Math.random() * array.length)];


let arrayRandom = [];
for (let i = 0; i < 6; i++) {
    arrayRandom.push(array[Math.floor(Math.random() * array.length)]);
}
document.body.style.backgroundColor = `#${arrayRandom.join("")}`;
