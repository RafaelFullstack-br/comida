ocument.addEventListener('DOMContentLoaded', () => {
    const savedRecipes = document.getElementById('saved-recipes');
    const addRecipeButton = document.getElementById('add-recipe');

    // Função para adicionar uma nova receita
    function addRecipe(recipeName) {
        const li = document.createElement('li');
        li.textContent = recipeName;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remover';
        deleteButton.onclick = () => {
            li.remove();
        };

        li.onclick = () => {
            document.querySelectorAll('#saved-recipes li').forEach(item => item.classList.remove('highlight'));
            li.classList.add('highlight');
        };

        li.appendChild(deleteButton);
        savedRecipes.appendChild(li);
    }

    // Exemplo de receitas salvas inicialmente
    const initialRecipes = ['Bolo de Chocolate', 'Mousse de Limão', 'Lasanha de Frango'];
    initialRecipes.forEach(recipe => addRecipe(recipe));

    // Evento para adicionar uma receita ao clicar no botão "Adicionar Receita"
    addRecipeButton.addEventListener('click', () => {
        const newRecipe = prompt('Digite o nome da nova receita:');
        if (newRecipe) {
            addRecipe(newRecipe);
        }
    });
});
