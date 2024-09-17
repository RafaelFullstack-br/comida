// Informações de usuários para exemplo
const usuarios = {
    1: {
        nome: 'João Silva',
        email: 'joao@email.com',
        denuncias: [
            'Denúncia sobre comportamento inadequado.',
            'Spam de mensagens.'
        ]
    },
    2: {
        nome: 'Maria Souza',
        email: 'maria@email.com',
        denuncias: [
            'Denúncia sobre venda de produtos falsificados.'
        ]
    },
    3: {
        nome: 'Carlos Pereira',
        email: 'carlos@email.com',
        denuncias: [
            'Denúncia sobre conteúdo impróprio.',
            'Comportamento ofensivo.'
        ]
    },
    4: {
        nome: 'Fernanda Lima',
        email: 'fernanda@email.com',
        denuncias: [
            'Denúncia sobre fraude.'
        ]
    },
    5: {
        nome: 'Lucas Araújo',
        email: 'lucas@email.com',
        denuncias: [
            'Denúncia sobre uso de linguagem ofensiva.',
            'Spam frequente.'
        ]
    }
};

// Seleciona os modais e botões de fechar
const modalInfoUsuario = document.getElementById('modal-info-usuario');
const modalDenuncias = document.getElementById('modal-denuncias');
const spanCloseInfo = modalInfoUsuario.querySelector('.close');
const spanCloseDenuncias = modalDenuncias.querySelector('.close');

// Função para abrir o modal com informações do usuário
function abrirInfoUsuario(usuarioId) {
    const usuario = usuarios[usuarioId];
    document.getElementById('usuario-id').textContent = usuarioId;
    document.getElementById('usuario-nome').textContent = usuario.nome;
    document.getElementById('usuario-email').textContent = usuario.email;

    modalInfoUsuario.style.display = 'flex';
}

// Função para abrir o modal com as denúncias do usuário
function abrirDenuncias(usuarioId) {
    const usuario = usuarios[usuarioId];
    const listaDenuncias = document.getElementById('lista-denuncias');
    listaDenuncias.innerHTML = ''; // Limpa a lista anterior

    usuario.denuncias.forEach(denuncia => {
        const li = document.createElement('li');
        li.textContent = denuncia;
        listaDenuncias.appendChild(li);
    });

    modalDenuncias.style.display = 'flex';
}

// Fecha os modais ao clicar no botão de fechar
spanCloseInfo.onclick = function() {
    modalInfoUsuario.style.display = 'none';
};

spanCloseDenuncias.onclick = function() {
    modalDenuncias.style.display = 'none';
};

// Adiciona eventos de clique para os botões "Ver Informações" e "Ver Denúncias"
document.querySelectorAll('.btn-info').forEach(button => {
    button.addEventListener('click', function() {
        const usuarioId = this.getAttribute('data-usuario-id');
        abrirInfoUsuario(usuarioId);
    });
});

document.querySelectorAll('.btn-denuncias').forEach(button => {
    button.addEventListener('click', function() {
        const usuarioId = this.getAttribute('data-usuario-id');
        abrirDenuncias(usuarioId);
    });
});

