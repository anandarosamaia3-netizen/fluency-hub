// Aguarda o HTML carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // Busca o arquivo JSON
    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('idiomas-container');
            
            // Passa por cada idioma no JSON e cria um "cartão" de vidro para ele
            data.languages.forEach(idioma => {
                
                // Cria o elemento HTML do cartão
                const card = document.createElement('div');
                card.classList.add('glass-card', 'idioma-card');
                
                // Preenche o cartão com os dados do JSON
                card.innerHTML = `
                    <h3>${idioma.name}</h3>
                    <p><strong>Desafios:</strong> ${idioma.main_challenges.join(', ')}</p>
                    <br>
                    <p><strong>Aulas Base:</strong> ${idioma.modules.base_lessons.length} disponíveis</p>
                    <p><strong>Imersão:</strong> ${idioma.modules.immersion.length} disponíveis</p>
                `;
                
                // Adiciona o cartão na tela
                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Erro ao carregar os módulos:", error);
        });
});
