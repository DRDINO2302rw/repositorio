// Cargar las canciones desde el archivo JSON
async function loadSongs() {
    try {
        const response = await fetch('songs.json');
        const songs = await response.json();
        console.log("Canciones cargadas:", songs);
        localStorage.setItem('songs', JSON.stringify(songs));
        return songs;
    } catch (error) {
        console.error('Error al cargar las canciones:', error);
    }
}

// Obtener la lista de canciones de localStorage
function getSongsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('songs')) || [];
}

// Mostrar sugerencias
function showSuggestions(songs) {
    let suggestionsDiv = document.getElementById('suggestions');
    suggestionsDiv.innerHTML = '';

    songs.forEach((song, index) => {
        let div = document.createElement('div');
        div.className = 'suggestion-item';
        div.textContent = song.title;
        div.addEventListener('click', () => {
            document.getElementById('searchBar').value = song.title;
            clearSuggestions();
            playSongInCustomPlayer(song); // Reproduce la canción seleccionada en el reproductor personalizado
        });
        suggestionsDiv.appendChild(div);
    });

    suggestionsDiv.style.display = 'block';
}


// Filtrar canciones en base a la búsqueda
document.getElementById('searchBar').addEventListener('input', function() {
    let query = this.value.toLowerCase();
    console.log("Texto de búsqueda:", query);
    if (query.length > 2) { // Empieza a buscar después de 3 caracteres
        const songs = getSongsFromLocalStorage();
        const filteredSongs = songs.filter(song => 
            song.name.toLowerCase().includes(query) || 
            song.artist.toLowerCase().includes(query)
        );
        console.log("Canciones filtradas:", filteredSongs);
        showSuggestions(filteredSongs);
    } else {
        document.getElementById('suggestions').innerHTML = '';
        document.getElementById('suggestions').style.display = 'none'; // Ocultar sugerencias si la búsqueda es corta
    }
});

// Cargar las canciones al inicio
loadSongs();

