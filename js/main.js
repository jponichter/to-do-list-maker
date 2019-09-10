
function point() {
    let valueOfInput = document.getElementById("input").value;
    let path = document.getElementById('list');

    if (valueOfInput.length !== 0) {
        path.innerHTML += '<li id="div' + '\" class="to-do">' + valueOfInput +
            '<button class="delete" onclick=\"return this.parentNode.remove();\"><i class=\"fas fa-window-close fa-2x\"></i></button></li>';
        document.getElementById("input").value = '';
    } 
}

document.getElementById('btn').addEventListener('click', point);
document.getElementById('input').addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        point()
    }
});

function setMaxLength() {
    var input = document.getElementById("input");
    input.maxLength = 22;
}

document.getElementById('input').addEventListener('click', setMaxLength);

/* PRINT BUTTON
function printPage() {
    window.print();
}

document.getElementById('button-print').addEventListener('click', printPage);
*/
