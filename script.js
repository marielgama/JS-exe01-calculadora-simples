
const executar = () => {
    const a = document.getElementById("v1");
    const b = document.getElementById("v2");
    let oper = document.getElementById("oper");
    let operSelecionado = oper.options[oper.selectedIndex].value;
   // let resultado = (oper==0)?somar(a,b):(oper==1)?subtrair(a,b):(oper==2)?multiplicar(a,b):(oper==3)?dividir(a,b):exponencial(a,b);
    let resultado = ''
    if (operSelecionado=='somar') {
        resultado = Number (v1.value) + Number (v2.value);
    } else if (operSelecionado=='subtrair') {
        resultado = Number (v1.value) - Number (v2.value);
    } else if (operSelecionado=='multiplicar') {
        resultado = Number (v1.value) * Number (v2.value);
    } else if (operSelecionado=='dividir') {
        resultado = Number (v1.value) / Number (v2.value);
    } else if (operSelecionado=='exponencial') {
        resultado = Number (v1.value) ** Number (v2.value);
    }

    /*
    switch (operSelecionado ) {
        case ('somar') : {
            resultado = Number (v1.value) + Number (v2.value);
            break;
        }
        case ('subtrair') : {
            resultado = Number (v1.value) - Number (v2.value);
            break;
        }
        case ('multiplicar') : {
            resultado = Number (v1.value) * Number (v2.value);
            break;
        }
        case ('dividir') : {
            resultado = Number (v1.value) / Number (v2.value);
            break;
        }
        case ('exponencial') : {
            resultado = Number (v1.value) ** Number (v2.value);
            break;
        } 
        */

    document.getElementById("resp").innerHTML = `O Resultado da operação é ${resultado}`;

    }  
