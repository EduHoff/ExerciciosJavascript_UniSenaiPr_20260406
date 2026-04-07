const bntResultado = document.querySelector("#bntResultado")

bntResultado.addEventListener("click", ()=>{

    const preco = document.querySelector("#preco").valueAsNumber

    if (isNaN(preco)) {
        alert("Por favor, digite um número antes de continuar.");
        return;
    }

    let desconto = 0;
    if(preco >= 100 && preco < 299){
        desconto = 0.1
    }else if(preco > 300){
        desconto = 0.2
    }

    let preco_final = preco * (1 - desconto)

    document.querySelector("#resultado").style.display = 'block';
    document.querySelector("#resultado").innerHTML = `R$${preco_final.toFixed(2)} (desconto: ${desconto*100}%)`;
})