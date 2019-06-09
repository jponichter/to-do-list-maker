
function point() {
    let valueOfInput = document.getElementById("input").value;
    let path = document.getElementById('list');
    path.innerHTML += '<div class="pure-u-20-24 to-do">' + valueOfInput + '</div>';
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