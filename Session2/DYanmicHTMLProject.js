function DrawCalculator() {
    const MetaData = [['1', '2', '3', '4'], ['5', '6', '7', '8'], ['9', '0','.'],['+', '-'], ['/', '*', '=']];

    let canvas = document.getElementById('canvas');


    let table = document.createElement("table");
    table.border = 1;
    table.className='CalcTable';

    let tr = document.createElement('tr');
    table.appendChild(tr);

    let td = document.createElement('td');
    td.colSpan = 4;
    tr.appendChild(td);
    let inp = document.createElement('input');
    td.appendChild(inp)


    for(let row = 0 ;row < MetaData.length ; row++){
        tr = document.createElement('tr');
        table.appendChild(tr);
        for(let col = 0 ; col < MetaData[row].length;col++){
            let td = document.createElement('td');

            if(MetaData[row].length < 4 && col  == MetaData[row].length-1){
                td.colSpan = 5 - MetaData[row].length;
            }

            tr.appendChild(td);

            let btn = document.createElement('button');
            btn.innerText = MetaData[row][col];
            td.appendChild(btn)

            //Add Button Event

            btn.onclick = function (){

                 HandleButtonClick(btn.innerText,inp);
            };


        }

    }


    canvas.appendChild(table);
    //Stop Spin
    canvas.classList.remove("spin");

}

function HandleButtonClick(txt,inp){



    if(txt == '='){

        inp.value = eval(inp.value);

    }else{

        inp.value += txt;

    }

}













