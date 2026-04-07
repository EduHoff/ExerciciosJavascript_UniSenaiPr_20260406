const bntResultado = document.querySelector("#bntResultado")

let num_secreto = undefined;
let countTentativas = 0;

function gerarNumSecreto(){
    num_secreto = Math.floor(Math.random() * 10) + 1;
}

window.addEventListener("load", gerarNumSecreto())

bntResultado.addEventListener("click", ()=>{

    const num = document.querySelector("#num").valueAsNumber

    if (isNaN(num)) {
        alert("Por favor, digite um número antes de continuar.");
        return;
    }

    let msg = undefined
    
    countTentativas += 1;

    if(num > num_secreto){
        msg = `Número secreto é menor! (tentativa ${countTentativas})`
    }else if(num < num_secreto){
        msg = `Número secreto é maior! (tentativa ${countTentativas})`
    }else{
        msg = `Acertou! Número secreto é ${num_secreto} (tentativa ${countTentativas})`
    }
   
    document.querySelector("#resultado").style.display = 'block';
    document.querySelector("#resultado").innerHTML = msg;

    if(num == num_secreto){
        gerarNumSecreto();
        countTentativas = 0;
    }

})