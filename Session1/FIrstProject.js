function HandleButtonClick() {

    var inp = document.getElementById('inp');
    var valueOfInp = inp.value;
    alert('The Value Of Inp is ' + valueOfInp);
    inp.value = '';
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