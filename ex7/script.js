const bntResultado = document.querySelector("#bntResultado")

bntResultado.addEventListener("click", ()=>{

    const num = document.querySelector("#num").valueAsNumber


    let tabuadaHtml = `<h3>Tabuada do ${num}:</h3><br>`;

    for (let i = 1; i <= 10; i++) {
        let conta = num * i;
        tabuadaHtml += `${num} x ${i} = ${conta} <br>`;
    }


    document.querySelector("#resultado").style.display = 'block';
    document.querySelector("#resultado").innerHTML = tabuadaHtml;


})