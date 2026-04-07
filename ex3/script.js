const bntResultado = document.querySelector("#bntResultado")

bntResultado.addEventListener("click", ()=>{

    const peso = document.querySelector("#peso").valueAsNumber
    const altura = document.querySelector("#altura").valueAsNumber

    if (isNaN(peso) || isNaN(altura)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const imc = peso / altura**2


    document.querySelector("#resultado").style.display = 'block';
    document.querySelector("#resultado").innerHTML = `IMC: ${imc.toFixed(2)}`;
})