console.log(document.title)
document.querySelector('h1').textContent='GAME'
let elemento = document.createElement('h1')
elemento.textContent = 'Bruno Rodrigues'
document.body.appendChild(elemento)

let botao = document.querySelector('button')
botao.addEventListener('click', somaUm)

function somaUm(){
    console.log('Clicou')
    let elementoH3 = document.querySelector('h3')
    let valor = parseInt(elementoH3.textContent)
    let novoValor = valor + 1
    elementoH3.textContent = novoValor

    let r = parseInt(Math.random() * 256)
    let g = parseInt(Math.random() * 256)
    let b = parseInt(Math.random() * 256)

    if (novoValor > valor){
        elementoH3.style.color = `rgb(${r},${g},${b})`
    }
}