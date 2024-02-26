const emojis = [
    '🐱',
    '🐱',
    '🐶',
    '🐶',
    '🐵',
    '🐵',
    '🐷',
    '🐷',
    '🐻',
    '🐻',
    '🐭',
    '🐭',
    '🐼',
    '🐼',
    '🐸',
    '🐸',
];

let opemCards = [];
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1 ));

for(let i=0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "iten";
    box.innerHTML = shuffleEmojis[i];
    document.querySelector(".game").appendChild(box)


}


