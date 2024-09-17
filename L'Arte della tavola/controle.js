
        const tableBody = document.getElementById('recipeTable');
        const formPopup = document.getElementById('recipeForm');
        const body = document.body;

        function openForm() {
            formPopup.style.display = 'block';
            body.classList.add('modal-open');
        }

        function closeForm() {
            formPopup.style.display = 'none';
            body.classList.remove('modal-open');
            document.getElementById('recipeForm').reset(); // Limpa o formulário ao fechar
        }

        function addReceita() {
            const titulo = document.getElementById('titulo').value;
            const modalidade = document.getElementById('modalidade').value;
            const ingredientes = document.getElementById('ingredientes').value;
            const modoPreparo = document.getElementById('modoPreparo').value;
            const tempoPreparo = document.getElementById('tempoPreparo').value;
            const porcoes = document.getElementById('porcoes').value;
            const calorias = document.getElementById('calorias').value;
            const curtidas = document.getElementById('curtidas').value;
            const cpfUsuario = document.getElementById('cpfUsuario').value;
            const nomeUsuario = document.getElementById('nomeUsuario').value;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${titulo}</td>
                <td>${modalidade}</td>
                <td>${ingredientes}</td>
                <td>${modoPreparo}</td>
                <td>${tempoPreparo}</td>
                <td>${porcoes}</td>
                <td>${calorias}</td>
                <td>${curtidas}</td>
                <td>${cpfUsuario}</td>
                <td>${nomeUsuario}</td>
                <td><button onclick="deleteReceita(this)">Excluir</button></td>
            `;

            // Remover mensagem de "Nenhuma receita adicionada" se houver
            const noData = document.querySelector('.no-data');
            if (noData) {
                noData.remove();
            }

            // Adiciona a linha à tabela
            tableBody.appendChild(row);

            // Fechar o formulário e limpar os campos
            closeForm();
        }

        function deleteReceita(button) {
            // Remove a linha da tabela
            button.closest('tr').remove();

            // Verifica se a tabela está vazia, se sim, exibe a mensagem de "Nenhuma receita adicionada"
            if (tableBody.rows.length === 0) {
                const noDataRow = document.createElement('tr');
                noDataRow.classList.add('no-data');
                noDataRow.innerHTML = '<td colspan="11">Nenhuma receita adicionada</td>';
                tableBody.appendChild(noDataRow);
            }
        }

