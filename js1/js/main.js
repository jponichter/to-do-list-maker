
function point() {
    let valueOfInput = document.getElementById("input").value;
    let path = document.getElementById('list');
    let id = document.getElementsByClassName('to-do').length + 1;
    path.innerHTML += '<div id="div' + id + '\" class="pure-u-20-24 to-do">' + valueOfInput +
    '<button class="delete" onclick=\"return this.parentNode.remove();\"><i class=\"fas fa-window-close fa-2x\"></i></button></div>';
    document.getElementById("input").value = '';
}

document.getElementById('btn').addEventListener('click', point);
document.getElementById('input').addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        point()
    }
});

function setMaxLength() {
    var input = document.getElementById("input");
    input.maxLength = 28;
}

document.getElementById('input').addEventListener('click', setMaxLength);

