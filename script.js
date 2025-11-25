let fields = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
];

let currentShape = "circle";

function init() {
    render();
}

function render() {
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

    fields[index] = currentShape;

    if (currentShape === "circle") {
        cell.innerHTML = generateCircleSVG();
        currentShape = "star";
    } else {
        cell.innerHTML = generateStarSVG();
        currentShape = "circle";
    }

    cell.onclick = null;
}

function generateCircleSVG() {
    return `<img src="./assets/icons/circle.svg" class="icon">`;
}

function generateStarSVG() {
    return `<img src="./assets/icons/star.svg" class="icon">`;
}

init();