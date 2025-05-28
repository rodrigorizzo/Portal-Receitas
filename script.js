
localStorage.clear();

/* __________________________ Eventos __________________________ */

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
        ingredientes: document.querySelector("#NRIngredientes").value
                            .split(',')
                            .map(i => i.trim())
                            .filter(i => i.lenght > 0),
        preparo: document.querySelector("#NRModoPreparo").value,
        catergorias: categorias
    };

    salvarReceita(novaReceita);
    mostrarReceitas(novaReceita);
}

function salvarReceita(receita) {
    const receitadasGravadas = obterReceitas();
    receitadasGravadas.push(receita);
    localStorage.setItem('receitas', JSON.stringify(receitadasGravadas));

}

function obterReceitas() {
    return JSON.parse(localStorage.getItem('receitas') || '[]');
}

function carregarReceitas() {
    const receitadasGravadas = obterReceitas();
    receitadasGravadas.forEach(i => { mostrarReceitas(i) });
}

function mostrarReceitas(receita) {
    console.log(receita)
    const container = document.querySelector("#receitasSection");
    const template = document.querySelector("#receitaModelo");
    const clone = document.importNode(template.content, true);

    const titulo = clone.querySelector(".receita__h3");
    const ingredientes = clone.querySelector(".receita__ingredientes");
    const preparo = clone.querySelector(".receita__preparo");
    const categorias = clone.querySelector(".receita__categoria");
    const destaque = clone.querySelector(".receita__destaques")
    const excluirBtn = clone.querySelector(".button")

    titulo.textContent = receita.titulo;

    preparo.textContent = receita.preparo;

    receita.ingredientes.forEach(ingrediente => {
        const li = document.createElement('li');
        li.textContent = ingrediente;
        ingredientes.appendChild(li)
    })

    categorias.textContent = receita.categorias;

    excluirBtn.addEventListener('click', () => console.log("deletarReceita(receita.id)"));

    container.appendChild(clone);
}

function deletarReceitas(id) {

}


