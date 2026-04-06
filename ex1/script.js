const bntResultado = document.querySelector("#bntResultado")

bntResultado.addEventListener("click", ()=>{

    const num1 = document.querySelector("#num1").valueAsNumber
    const num2 = document.querySelector("#num2").valueAsNumber
    const operacao = document.querySelector("#operacao").value

    let resultado = undefined;
    switch (operacao) {
    case "soma":
        resultado = num1 + num2;
        break;
    case "subtracao":
        resultado = num1 - num2;
        break;
    case "multiplicacao":
        resultado = num1 * num2;
        break;
    case "divisao":
        resultado = num1 / num2;
        break;
    default:
        resultado = null;
    }

    document.querySelector(".resultado").style.display = 'block';
    document.querySelector("#resultado").innerHTML = resultado;
})