
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

function printPage() {
    var content = document.getElementById('list').innerHTML;
    var mywindow = window.open('', 'Print', 'height=600,width=800');

    mywindow.document.write('<html><head><title>Print</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write(content);
    mywindow.document.write('</body></html>');

    mywindow.document.close();
    mywindow.focus()
    mywindow.print();
    mywindow.close();
    return true;
}

document.getElementById('button-print').addEventListener('click', printPage);
