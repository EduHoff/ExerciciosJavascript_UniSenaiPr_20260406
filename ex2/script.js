const bntResultado = document.querySelector("#bntResultado")

bntResultado.addEventListener("click", ()=>{

    const celsius  = document.querySelector("#celsius").valueAsNumber

    if (isNaN(celsius)) {
        alert("Por favor, digite um número antes de continuar.");
        return;
    }

    const fahrenheit = celsius * 1.8 + 32;
    const kelvin = celsius + 273.15;

    const divF = document.querySelector("#resultadoF");
    const divK = document.querySelector("#resultadoK");

    divF.style.display = 'block';
    divK.style.display = 'block';

    divF.innerHTML = `Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    divK.innerHTML = `Kelvin: ${kelvin.toFixed(2)}K`;
})