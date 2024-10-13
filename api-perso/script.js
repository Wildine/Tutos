async function fetchCharacters() {
    try {
        // Remplacer par les IDs des personnages que tu souhaites récupérer
        const characterIds = [1, 2, 3, 4, 5]; // Exemple d'IDs
        const charactersContainer = document.getElementById('charactersContainer');

        for (const characterId of characterIds) {
            const response = await fetch(`https://api.jikan.moe/v4/characters/${characterId}`);
            const data = await response.json();

            if (data.data) {
                const character = data.data;

                // Créer une carte pour le personnage
                const characterCard = document.createElement('div');
                characterCard.classList.add('character-card');
                characterCard.innerHTML = `
                    <h3>${character.name}</h3>
                    <img src="${character.images.jpg.image_url}" alt="${character.name}" />
                    <div class="description">${character.about ? character.about : 'Description non disponible'}</div>
                `;

                // Événement au clic pour afficher la description
                characterCard.addEventListener('click', () => {
                    const descriptionDiv = characterCard.querySelector('.description');
                    descriptionDiv.style.display = descriptionDiv.style.display === 'none' || descriptionDiv.style.display === '' ? 'block' : 'none';
                });

                charactersContainer.appendChild(characterCard);
            } else {
                charactersContainer.innerHTML += `<div>Personnage non trouvé pour ID ${characterId}</div>`;
            }
        }
    } catch (error) {
        document.getElementById('charactersContainer').innerHTML = 'Erreur lors de la récupération des données';
        console.error('Erreur:', error);
    }
}

// Appeler la fonction pour récupérer les personnages
fetchCharacters();