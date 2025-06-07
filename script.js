/* localStorage.clear();  */




/* __________________________ Eventos __________________________ */

// Carregar receitas ao iniciar
document.addEventListener('DOMContentLoaded', carregarReceitas);

// Evento submit do formulário
document.getElementById('formReceita').addEventListener('submit', function (e) {
    e.preventDefault();
    gerenciarForm();
    this.reset();
});

// Formulário de tempo

document.getElementById('NRTempoPreparo').addEventListener('input', function () {
    let value = this.value.replace(/\D/g, '');

    if (value.length > 2) {
        value = value.substring(0, 2) + ':' + value.substring(2, 4);
    }


    this.value = value.substring(0, 5);

})

//Botão de recarregar
document.getElementById("recarregarBtn").addEventListener("click", () => {
    console.log("Recarregar funcionou")
    document.getElementById("receitasSection").replaceChildren();
    carregarReceitas();
})

//Botão Limpar

document.getElementById("NRLimparBtn").addEventListener("click", function () {
    document.querySelector("#NRTitulo").value = "";
    document.querySelector("#NRIngredientes").value = "";
    document.querySelector("#NRModoPreparo").value = "";
    document.querySelector("#NRTempoPreparo").value = "";
    document.querySelector("#NRClassificacao").value = "";
    document.querySelector("#NRDificuldade").value = "";

    for (let i = 1; i <= 10; i++) {
        let checkbox = `#NRCat${i}`;
        document.querySelector(checkbox).checked = false;
    }

})




/* __________________________ Funções __________________________ */


//Gerenciar formulários
function gerenciarForm() {
    let categorias = [];

    for (let i = 1; i <= 10; i++) {
        const checkbox = document.querySelector(`#NRCat${i}`);

        if (checkbox.checked) categorias.push(checkbox.value);
    }

    const novaReceita = {
        id: Date.now(),
        titulo: document.querySelector("#NRTitulo").value,
        ingredientes: document.querySelector("#NRIngredientes").value.split(',').map(i => i.trim()),
        preparo: document.querySelector("#NRModoPreparo").value.split('\n').map(i => i.trim()),
        tempo: document.querySelector("#NRTempoPreparo").value,
        classificacao: document.querySelector("#NRClassificacao").value,
        dificuldade: document.querySelector("#NRDificuldade").value,
        categorias: categorias
    };

    salvarReceita(novaReceita);
    mostrarReceitas(novaReceita);
}

function validarReceita(receita) {

}

function salvarReceita(receita) {
    const receitasGravadas = obterReceitas();
    receitasGravadas.push(receita);
    localStorage.setItem('receitas', JSON.stringify(receitasGravadas));

}

function obterReceitas() {
    return JSON.parse(localStorage.getItem('receitas') || '[]');
}

function carregarReceitas() {
    const receitasGravadas = obterReceitas();
    receitasGravadas.forEach(i => { mostrarReceitas(i) });
}

function mostrarReceitas(receita) {

    const container = document.querySelector("#receitasSection");
    const template = document.querySelector("#receitaModelo");
    const clone = document.importNode(template.content, true);

    const receitaCaixa = clone.querySelector(".receita__container");
    const titulo = clone.querySelector(".receita__titulo");
    const ingredientes = clone.querySelector(".receita__lista-ingredientes");
    const preparo = clone.querySelector(".receita__preparo");
    const categorias = clone.querySelector(".receita__lista-categorias");
    const destaque = clone.querySelector(".receita__destaques")
    const excluirBtn = clone.querySelector(".button")
    const mostrarBtn = clone.querySelector(".receita__mostrar-btn")
    const infoEscondida = clone.querySelector(".receita__principal")

    titulo.textContent = receita.titulo;




    receita.preparo.forEach(paragrafo => {
        criarItemLista(paragrafo, preparo, "receita_paragrafo", "p")
    })





    receita.ingredientes.forEach(ingrediente => {
        criarItemLista(ingrediente, ingredientes, "receita__ingrediente-item", "li")
    })



    //Como o usuário não é obrigado a inserir categorias é preciso checar se não é null
    if (receita.categorias != null) {
        receita.categorias.forEach(categoria => {
            criarItemLista(categoria, categorias, "receita__categoria", "li")
        })
    }

    let tempoString = receita.tempo.startsWith("00:") ? receita.tempo.substring(3, 5) + " min." : receita.tempo;
    criarItemLista(tempoString, destaque, "receita__item receita__tempo", "li")


    criarItemLista(receita.dificuldade, destaque, "receita__item receita__dificuldade", "li")

    let estrelas = document.createElement("li")


    for (let i = Number(receita.classificacao); i > 0; i--) {
        let estrela = document.createElement("img");
        estrela.setAttribute("src", "imagens/icone-estrela.svg");
        estrela.className = "u__icone";
        estrelas.appendChild(estrela);
    }
    estrelas.className = "receita__item";
    destaque.appendChild(estrelas);

    /*     criarItemLista(estrela.repeat(receita.classificacao), destaque, "receita__item receita__classificacao", "li")
     */


    let leaveFuncao = () => {
        setTimeout(classEsconder, "500");
        mostrarBtn.querySelector("#iconeMostrarBtn").setAttribute("src", "imagens/icone-mostrar.svg")
        clone.removeEventListener('mouseleave', leaveFuncao);
    };

    let classEsconder = () => { infoEscondida.className = "receita__principal u--esconder" }

    mostrarBtn.addEventListener('click', () => {
        infoEscondida.className = infoEscondida.className.includes("u--esconder") ? "receita__principal" : "receita__principal u--esconder";
        receitaCaixa.addEventListener('mouseleave', leaveFuncao);
        mostrarBtn.querySelector("#iconeMostrarBtn").setAttribute("src", "imagens/icone-esconder.svg")
    })

    excluirBtn.addEventListener('click', () => deletarReceita(receita.id));


    container.appendChild(clone);
}

function criarItemLista(conteudo, parente, classe, tag) {
    const item = document.createElement(tag);
    item.textContent = conteudo;
    item.className = classe;
    parente.appendChild(item)
}

function deletarReceita(id) {
    console.log("deletou")
    let receitasGravadas = obterReceitas();
    receitasGravadas = receitasGravadas.filter(receita => receita.id != id);
    localStorage.setItem('receitas', JSON.stringify(receitasGravadas));
    document.querySelector('#receitasSection').replaceChildren();
    carregarReceitas();
}


