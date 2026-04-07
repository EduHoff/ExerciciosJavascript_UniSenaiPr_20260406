const bntResultado = document.querySelector("#bntResultado")

bntResultado.addEventListener("click", ()=>{

    const opcao = document.querySelector("#opcao").valueAsNumber

    let dia_semana = undefined;
    switch (opcao) {
    case 1:
        dia_semana = "Domingo"
        break;
    case 2:
        dia_semana = "Segunda-feira"
        break;
    case 3:
        dia_semana = "Terça-feira"
        break;
    case 4:
        dia_semana = "Quarta-feira"
        break;
    case 5:
        dia_semana = "Quinta-feira"
        break;
    case 6:
        dia_semana = "Sexta-feira"
        break;
    case 7:
        dia_semana = "Sábado"
        break;
    default:
        dia_semana = "Opção inválida!";
    }

    document.querySelector("#resultado").style.display = 'block';
    document.querySelector("#resultado").innerHTML = dia_semana;
})