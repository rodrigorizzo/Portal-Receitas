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
        tempo: document.querySelector("#NRTempoPreparo").value,
        ingredientes: document.querySelector("#NRIngredientes").value.split(',').map(i => i.trim()),
        preparo: document.querySelector("#NRModoPreparo").value,
        categorias: categorias
    };

    salvarReceita(novaReceita);
    mostrarReceitas(novaReceita);
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

    const titulo = clone.querySelector(".receita__titulo");
    const ingredientes = clone.querySelector(".receita__lista-ingredientes");
    const preparo = clone.querySelector(".receita__preparo");
    const categorias = clone.querySelector(".receita__lista-categorias");
    const destaque = clone.querySelector(".receita__destaques")
    const excluirBtn = clone.querySelector(".button")

    titulo.textContent = receita.titulo;

    preparo.textContent = receita.preparo;

    receita.ingredientes.forEach(ingrediente => {
        const li = document.createElement('li');
        li.textContent = ingrediente;
        ingredientes.appendChild(li)
    })


    //Como o usuário não é obrigado a inserir categorias é preciso checar se não é null
    if (receita.categorias != null) {
        receita.categorias.forEach(categoria => {
            const li = document.createElement('li');
            li.textContent = categoria;
            li.className = "receita__categoria";
            categorias.appendChild(li)
        })
    }


    excluirBtn.addEventListener('click', () => deletarReceita(receita.id));

    container.appendChild(clone);
}

function deletarReceita(id) {
    console.log("deletou")
    let receitasGravadas = obterReceitas();
    receitasGravadas = receitasGravadas.filter(receita => receita.id != id);
    localStorage.setItem('receitas', JSON.stringify(receitasGravadas));
    document.querySelector('#receitasSection').innerHTML = '';
    carregarReceitas();
}


