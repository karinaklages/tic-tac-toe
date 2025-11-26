// Variables

let fields = [
    null, null, null,
    null, null, null,
    null, null, null
];

const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]        
];

let currentShape = "circle";
let gameOver = false;


// Functions 

function init() {
    renderTable();
}

function renderTable() {
    let html = "<table>";
    for (let row = 0; row < 3; row++) {
        html += "<tr>";
        for (let col = 0; col < 3; col++) {
            let index = row * 3 + col;
            html += `<td onclick="handleClick(${index}, this)"></td>`;
        }
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("content").innerHTML = html;
}

function handleClick(index, cell) {
    if (gameOver || fields[index]) return;
    fields[index] = currentShape;
    if (currentShape === "circle") {
        cell.innerHTML = generateCircleSVG();
        currentShape = "star";
    } else {
        cell.innerHTML = generateStarSVG();
        currentShape = "circle";
    }
    cell.onclick = null;
    checkWinner();
}

function generateCircleSVG() {
    return `<img src="./assets/icons/circle.svg" class="icon">`;
}

function generateStarSVG() {
    return `<img src="./assets/icons/star.svg" class="icon">`;
}

function checkWinner() {
for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (
            fields[a] &&
            fields[a] === fields[b] &&
            fields[a] === fields[c]
        ) {
            showWinner(pattern, fields[a]);
            gameOverHandler();
            return;
        }
    }
    CheckFullTable()
}

function CheckFullTable() {
    if (fields.every(field => field !== null)) {
        gameOverHandler();
    }
}

function showWinner(pattern, winner) {
    const table = document.querySelector("#content table");
    if (!table) return;
    const cells = Array.from(table.getElementsByTagName("td"));
    for (let idx of pattern) {
        if (winner === "circle") {
            cells[idx].innerHTML = generateCircleWinnerSVG();
        } else {
            cells[idx].innerHTML = generateStarWinnerSVG();
        }
    }
}

function generateCircleWinnerSVG() {
    return `<img src="./assets/icons/circle-winner.svg" class="icon">`;
}

function generateStarWinnerSVG() {
    return `<img src="./assets/icons/star-winner.svg" class="icon">`;
}

function clearGame() {
    fields = [
        null, null, null,
        null, null, null,
        null, null, null
    ];
    currentShape = "circle";
    renderTable();
}

function gameOverHandler() {
    if (!gameOver) {
        gameOver = true;
        setTimeout(() => {
            clearGame();
            gameOver = false;
        }, 150);
    }
}

init();