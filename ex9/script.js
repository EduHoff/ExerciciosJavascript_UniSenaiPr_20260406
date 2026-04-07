const bntResultado = document.querySelector("#bntResultado")
const count_index = document.querySelector("#count_index")
const inputNum = document.querySelector("#num")
const array = []

bntResultado.addEventListener("click", () => {
    
    if (isNaN(inputNum.valueAsNumber)) {
        alert("Por favor, digite um número antes de continuar.");
        return;
    }
    
    const num = inputNum.valueAsNumber

    array.push(num)
    
    if (array.length === 5) {
        const media = array.reduce((a, b) => a + b, 0) / array.length
        const maior = Math.max(...array)
        const menor = Math.min(...array)

        document.querySelector("#resultado").style.display = 'block';
        document.querySelector("#resultado").innerHTML = `
            <p>Média: ${media.toFixed(2)}</p>
            <p>Maior Nota: ${maior}</p>
            <p>Menor Nota: ${menor}</p>
        `
        bntResultado.disabled = true
        return 
    }

    count_index.textContent = array.length + 1
})