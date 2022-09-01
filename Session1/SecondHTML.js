function HandleLoading() {



    var canvas = document.getElementById('canvas');
    const MetaData = [['1', '2', '3', '4'], ['5', '6', '7', '8'], ['9', '0', '+', '-'], ['/', '*', '=']];


    let html = '<table class="CalcTable">';


    html += '<tr><td colspan="4"><input readonly id="inp"> </td></tr>';


    for (var row = 0; row < MetaData.length; row++) {
        html += '<tr>';
        for (var col = 0; col < MetaData[row].length; col++) {
            if(MetaData[row].length < 4 && col == MetaData[row].length - 1){
                html += '<td colspan="' + (5 - MetaData[row].length) + '">';
            }else{
                html += '<td>';
            }
            html += '<button onmouseleave="HandleMouseLeave(this)" onmouseenter="HanldeMouseEnter(this)" onclick="HandleCalcButtonClick(this.innerText)">' + MetaData[row][col] + '</button>';
            html += '</td>';
        }

        html += '</tr>';
    }

    html += '</table>';


    canvas.outerHTML = html;

}

function HandleCalcButtonClick(number) {


    var inp = document.getElementById('inp');

    if (number == '=') {
        debugger;
        inp.value = eval(inp.value);
    } else {
        inp.value += number;
    }


}

//border: solid red 1px;
function HanldeMouseEnter(btn){
    btn.style.border = 'solid red 1px';
}
function HandleMouseLeave(btn){
    btn.style.border = '';
}