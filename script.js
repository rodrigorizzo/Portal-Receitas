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
  
    if(value.length > 2){
    value = value.substring(0, 2) + ':' + value.substring(2, 4);
    }


    this.value = value.substring(0, 5);

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
        preparo: document.querySelector("#NRModoPreparo").value,
        tempo: document.querySelector("#NRTempoPreparo").value,
        classificacao: document.querySelector("#NRClassificacao").value,
        dificuldade: document.querySelector("#NRDificuldade").value,
        categorias: categorias
    };

/*     validarReceita(novaReceita);
 */    salvarReceita(novaReceita);
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

    preparo.textContent = receita.preparo;

    receita.ingredientes.forEach(ingrediente => {
        criarItemLista(ingrediente, ingredientes, "receita__ingrediente-item")
    })


    //Como o usuário não é obrigado a inserir categorias é preciso checar se não é null
    if (receita.categorias != null) {
        receita.categorias.forEach(categoria => {
            criarItemLista(categoria, categorias, "receita__categoria")
        })
    }

    criarItemLista(receita.tempo, destaque, "receita__item receita__tempo")
    criarItemLista(receita.dificuldade, destaque, "receita__item receita__dificuldade")


    let estrela = "⭐"
    criarItemLista(estrela.repeat(receita.classificacao), destaque, "receita__item receita__classificacao")

    let leaveFuncao = () => {
        setTimeout(teste, "500");
        clone.removeEventListener('mouseleave', leaveFuncao);
    };

    let teste = () => { infoEscondida.className = "receita__principal u--esconder" }

    mostrarBtn.addEventListener('click', () => {
        infoEscondida.className = infoEscondida.className.includes("u--esconder") ? "receita__principal" : "receita__principal u--esconder";
        receitaCaixa.addEventListener('mouseleave', leaveFuncao);
    })

    excluirBtn.addEventListener('click', () => deletarReceita(receita.id));


    container.appendChild(clone);
}

function criarItemLista(conteudo, parente, classe) {
    const li = document.createElement('li');
    li.textContent = conteudo;
    li.className = classe;
    parente.appendChild(li)
}

function deletarReceita(id) {
    console.log("deletou")
    let receitasGravadas = obterReceitas();
    receitasGravadas = receitasGravadas.filter(receita => receita.id != id);
    localStorage.setItem('receitas', JSON.stringify(receitasGravadas));
    document.querySelector('#receitasSection').replaceChildren();
    carregarReceitas();
}


