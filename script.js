/* __________________________ Variáveis __________________________ */

/* DOM */
const novaReceita = [
    document.querySelector("#NRTitulo"),
    document.querySelector("#NRTempoPreparo"),
    document.querySelector("#NRIngredientes"),
    document.querySelector("#NRModoPreparo")
]

for (let i = 1; i < 10; i++) {
     novaReceita.push(document.querySelector(`#NRCat${i}`))
}



const NRBotao = document.querySelector("#NRBotao")
const mostrarBotao = document.querySelector("#MostrarReceitas")

/* Section onde posso inserir as receitas inseridas do usuário */
const receitasSalvas = document.querySelector("#receitasSalvas")

let numReceitas = 0

/* localStorage.clear(); */

/* __________________________ Eventos __________________________ */

NRBotao.addEventListener("click", adicionarReceita)

mostrarBotao.addEventListener("click", mostrarReceitas)

/* __________________________ Funções __________________________ */

function adicionarReceita() {
    let receita = [];

    novaReceita.forEach((elemento) => {
        let conteudo = elemento.checked || elemento.getAttribute("type") != "checkbox"? elemento.value : ""
        receita.push(conteudo)
        
    }
    )
    localStorage.setItem(`Receita ${numReceitas}`, receita)
    console.log(typeof receita)
    numReceitas++
}

function mostrarReceitas() {
    for (let i = 0; i < localStorage.length; i++) {
        let container = document.createElement("article")

        /* Tags para cada input: título, tempo de preparo, ingredientes, modo de preparo e categorias */
        let elementosArray = ["h3", "p", "p", "p", "span"]
        let classArray = []

        let receitaString = localStorage.getItem(localStorage.key(i))
        let receitaArray = receitaString.split(",")

        for (let j = 0; j < receitaArray.length; j++) {
            let tagTipo
            switch (j) {
                case 0:
                    tagTipo = "h3"
                default:
                    tagTipo = "p"
            }
            let item = document.createElement(tagTipo)

            let textoItem = `${receitaArray[j]}`
            item.append(textoItem)
            container.appendChild(item)
        }

        receitasSalvas.appendChild(container)
    }
}


