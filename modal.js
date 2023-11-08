// objetivo 1.
// quando o usuário clicar no item sera aberta uma modal

// objetivo 2 
// quando o usuario selecionar o produto aparecerar as especificações do produto.
// quantidade a um valor 
console.log("teste")
const spanValor =document.getElementById('valor')
const diminuirValor =document.getElementById('diminuir')
const aumentarValor =document.getElementById('aumentar')
const quantValor =document.getElementById('quantidade')
const adicionarValor =document.getElementById('adicionar')

let valor = 0

const atualizarValor = () => {
    spanValor.textContent = valor
    quantValor.textContent = valor 
}

aumentarValor.addEventListener("click",() =>{
    valor++
    atualizarValor()
})
diminuirValor.addEventListener("click",() =>{
    if(valor > 0){
        valor--
    atualizarValor()
    }
    
})
atualizarValor()

const divClick =document.querySelector(".conteudo-pai")
const modal=document.querySelector(".modal")
const closeModal=document.querySelector(".fechar-modal")

divClick.addEventListener('click', () =>{
    modal.style.display="block"
})
closeModal.addEventListener('click', () => {
    modal.style.display="none"
})

window.addEventListener('click', function(event){
 if(event.target===modal){
    modal.style.display="none"
 }
})