# RecipeHub

O **RecipeHub** é uma aplicação web simples e eficaz, desenvolvida para ajudar você a gerenciar suas receitas favoritas. Construído puramente com HTML, CSS e JavaScript, ele permite que você adicione novas receitas com detalhes como título, ingredientes, passos de preparo, tempo, classificação, dificuldade e categorias. Todas as suas receitas são armazenadas localmente no seu navegador, proporcionando uma experiência personalizada e conveniente.

-----

## Funcionalidades

  * **Adicione Novas Receitas:** Insira e salve facilmente suas receitas favoritas através de um formulário amigável.
  * **Informações Detalhadas:** Inclua título, tempo de preparo, nível de dificuldade, classificação por estrelas, ingredientes (separados por vírgula), passos de preparo (com múltiplas linhas) e diversas categorias.
  * **Armazenamento Local:** Todas as suas receitas são salvas diretamente no `localStorage` do seu navegador, o que significa que elas persistem mesmo após fechar a aba ou o navegador.
  * **Exibição Dinâmica:** Visualize suas receitas salvas em um layout de grade organizado.
  * **Expandir/Contrair Detalhes:** Alterne entre uma visualização resumida e os detalhes completos para cada receita.
  * **Excluir Receitas:** Remova receitas que você não precisa mais.
  * **Validação de Formulário:** Validação básica no lado do cliente para garantir que os detalhes essenciais da receita sejam fornecidos.
  * **Design Responsivo:** Adapta-se a vários tamanhos de tela, desde desktops até dispositivos móveis.
  * **Interface Intuitiva:** Design limpo com feedback visual claro.

-----

## Tecnologias Utilizadas

  * **HTML5:** Para a estrutura semântica da aplicação.
  * **CSS3:** Para estilização, layout (Flexbox e Grid) e design responsivo. Utiliza Variáveis CSS para consistência e segue uma convenção de nomenclatura de classes BEM-like.
  * **JavaScript (Vanilla JS):** Para todas as funcionalidades interativas, incluindo manipulação de formulários, manipulação do DOM, gerenciamento de armazenamento local e renderização dinâmica de conteúdo.

-----

## Como Usar

Para executar este projeto localmente, siga estes passos simples:

1.  **Clone o repositório (ou faça o download dos arquivos):**
    ```bash
    git clone https://github.com/rodrigorizzo/Portal-Receitas.git
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd Portal-Receitas
    ```
3.  **Abra o arquivo `index.html`:**
    Simplesmente abra o arquivo `index.html` no seu navegador web preferido. Todas as funcionalidades são executadas no lado do cliente.

-----

## Utilização da Aplicação

1.  **Adicionar uma Receita:**

      * Clique em "Adicionar Receita" no cabeçalho ou role para a seção "Adicionar nova receita".
      * Preencha os campos obrigatórios (Título, Ingredientes, Modo de Preparo).
      * Os ingredientes devem ser separados por vírgulas (ex: "farinha, açúcar, ovos").
      * Os passos de preparo podem ter várias linhas.
      * Selecione o Tempo, Classificação (estrelas), Dificuldade e as Categorias aplicáveis.
      * Clique em "Enviar" para salvar sua receita.

2.  **Visualizar Receitas:**

      * As receitas que você adicionar aparecerão na seção "Minhas Receitas".
      * Clique no botão "Mostrar" no cartão da receita para visualizar todos os ingredientes e passos de preparo. Clique novamente para ocultar.
      * As receitas são salvas automaticamente no armazenamento local do seu navegador.

3.  **Gerenciar Receitas:**

      * Para excluir uma receita, clique no ícone da lixeira no cartão da receita expandido.
      * Para recarregar a lista de receitas (por exemplo, se você limpou manualmente o armazenamento local ou deseja re-renderizar), clique no botão "Recarregar" no cabeçalho.

-----

## Estrutura do Projeto

```
Portal-Receitas/
├── index.html          # Arquivo HTML principal da aplicação
├── style.css           # Todos os estilos CSS personalizados
├── script.js           # Todas as funcionalidades JavaScript
└── imagens/            # Diretório para imagens e ícones do projeto
    ├── icone-chef.svg
    ├── icone-esconder.svg
    ├── icone-estrela.svg
    ├── icone-lixeira.svg
    ├── icone-mostrar.svg
    ├── icone-tempo.svg
    └── ingredientes-fundo.png
```

-----

## Melhorias Futuras (Potenciais)

  * Funcionalidade de busca e filtro para as receitas.
  * Edição de receitas existentes.
  * Ordenação de receitas por nome, tempo ou classificação.
  * Recurso de exportar/importar receitas.
  * Melhoria da responsividade de formulários em telas muito pequenas.

-----

## Contribuição

Sinta-se à vontade para fazer um fork do repositório, propor melhorias e enviar pull requests. Toda contribuição é bem-vinda\!

-----

## Licença



-----

**Desenvolvido por Rodrigo Rizzo Simões © 2025**

-----

Espero que este `README.md` em português atenda perfeitamente às suas expectativas\! Me diga se gostaria de mais alguma alteração ou detalhe.
