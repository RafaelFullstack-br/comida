// Seleciona o botão de receitas salvas e de adicionar receitas
const btnAdicionarReceita = document.getElementById('btn-adicionar-receita');

// Adiciona um evento de clique ao botão de receitas salvas


// Seleciona o container das receitas
const receitasLista = document.getElementById('receitas-lista');

// Função para criar uma nova receita e adicioná-la à lista
function adicionarReceita(nomeReceita) {
    const novaReceita = document.createElement('div');
    novaReceita.classList.add('receita');
    novaReceita.setAttribute('data-receita-id', receitasLista.children.length + 1);

    novaReceita.innerHTML = `
        <h2>${nomeReceita}</h2>
        <p>Uma nova receita deliciosa!</p>
        <button class="btn-remover">Remover</button>
    `;

    // Adiciona evento de clique para remover a receita
    novaReceita.querySelector('.btn-remover').addEventListener('click', function() {
        novaReceita.remove();
        alert(`Receita "${nomeReceita}" removida.`);
    });

    // Adiciona evento de clique para exibir o ID da receita
    novaReceita.addEventListener('click', function() {
        alert(`Você clicou na receita ID: ${novaReceita.getAttribute('data-receita-id')}`);
    });

    receitasLista.appendChild(novaReceita);
}

// Adiciona um evento de clique ao botão de adicionar receita
btnAdicionarReceita.addEventListener('click', function() {
    const nomeReceita = prompt('Digite o nome da receita:');
    if (nomeReceita) {
        adicionarReceita(nomeReceita);
        alert(`Receita "${nomeReceita}" adicionada com sucesso!`);
    } else {
        alert('Nome da receita não pode estar vazio.');
    }
});

// Seleciona todas as divs de receitas existentes
const receitas = document.querySelectorAll('.receita');

// Adiciona um evento de clique a cada receita já existente e seus botões de remoção
receitas.forEach(receita => {
    receita.addEventListener('click', function() {
        const receitaId = this.getAttribute('data-receita-id');
        alert(`Você clicou na receita ID: ${receitaId}`);
    });

    // Adiciona evento de clique para remover receita
    receita.querySelector('.btn-remover').addEventListener('click', function(event) {
        receita.remove();
        alert(`Receita removida.`);
        event.stopPropagation(); // Evita que o clique no botão remova também a ação da receita
    });
});
