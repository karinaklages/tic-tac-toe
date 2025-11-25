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

function init() {
    render();
}

function render() {
    let html = "<table>";

    for (let row = 0; row < 3; row++) {
        html += "<tr>";

        for (let col = 0; col < 3; col++) {
            let index = row * 3 + col;
            let value = fields[index];
            let symbol = "";
            if (value === "circle") symbol = "O";
            if (value === "cross") symbol = "+";
            html += `<td>${symbol}</td>`;
        }
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("content").innerHTML = html;
}

render();
