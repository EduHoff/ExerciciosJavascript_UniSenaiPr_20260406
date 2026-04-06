const bntResultado = document.querySelector("#bntResultado")

bntResultado.addEventListener("click", ()=>{

    const peso = document.querySelector("#peso").valueAsNumber
    const altura = document.querySelector("#altura").valueAsNumber

    const imc = peso / altura**2

    let displayImc = undefined;
    if(imc < 18.5){
        displayImc = "Abaixo do peso"
    }else if(imc > 18.5 && imc < 24.9){
        displayImc = "Normal"
    }else if(imc > 25 && imc < 29.9){
        displayImc = "Sobrepeso"
    }else{
        displayImc = "Obesidade"
    }

    document.querySelector("#resultado").style.display = 'block';
    document.querySelector("#displayImc").style.display = 'block';

    document.querySelector("#resultado").innerHTML = `IMC: ${imc.toFixed(2)}`;
    document.querySelector("#displayImc").innerHTML = displayImc;
})