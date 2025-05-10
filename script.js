/* DOM */

/* Nova Receita = NR */

const novaReceita = [
    document.querySelector("#NRTitulo"),
    document.querySelector("#NRTempoPreparo"),
    document.querySelector("#NRIngredientes"),
    document.querySelector("#NRModoPreparo"),
    document.querySelector("#NRCategoria")
]

const NRBotao = document.querySelector("#NRBotao")
const mostrarBotao = document.querySelector("#MostrarReceitas")

/* Section onde posso inserir as receitas inseridas do usuário */
const receitasSalvas = document.querySelector("#receitasSalvas")


/* Outras variáveis */
let numReceitas = 0

/* localStorage.clear();
 */

/* Eventos */
NRBotao.addEventListener("click", adicionarReceita)

mostrarBotao.addEventListener("click", mostrarReceitas)

/* Funções */

function adicionarReceita() {
    let receita = [];

    novaReceita.forEach((elemento) => {
        receita.push(elemento.value)
    }
    )
    localStorage.setItem(`Receita ${numReceitas}`, receita)
    numReceitas++
}

function mostrarReceitas() {
    for (let i = 0; i < localStorage.length; i++) {
        let lista = document.createElement("ul")
        let receitaString = localStorage.getItem(localStorage.key(i))
        let receitaArray = receitaString.split(",")

        for (let j = 0; j < receitaArray.length; j++ ) {
            let item = document.createElement("li")
            let textoItem = `${receitaArray[j]}`
            item.append(textoItem)
            lista.appendChild(item)
        }

        receitasSalvas.appendChild(lista)
    }
}