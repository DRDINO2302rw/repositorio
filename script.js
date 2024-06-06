// Obtener los elementos del DOM
const audioPlayer = document.getElementById('audio-player');
const coverImage = document.getElementById('cover-image');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.getElementById('progress-container');

// Lista de canciones con sus URLs y carátulas
const tracks = [
    {
        songUrl: 'musica/ThxSoMch - CAROLINE (Official Music Video) - ThxSoMch.mp3',
        coverUrl: 'caratulas/caroline.jpg'
    },
    {
        songUrl: 'musica/Daft Punk - Get Lucky (Official Audio) ft. Pharrell Williams, Nile Rodgers - DaftPunkVEVO.mp3',
        coverUrl: 'caratulas/get_lucky.jpg'
    },
    {
        title: "Capital cities - safe and sound",
        file: "musica/Capital Cities - Safe And Sound - CapitalCitiesVEVO.mp3",
        cover: "imgs/recort3.jpg"
        }
    // Añade más canciones aquí
];

// Índice de la canción actual
let currentTrackIndex = 0;

// Funciones de control de reproducción
function playSong() {
    const track = tracks[currentTrackIndex];
    audioPlayer.src = track.songUrl;
    coverImage.src = track.coverUrl;
    audioPlayer.play();
}

function pauseTrack() {
    audioPlayer.pause();
}

function stopTrack() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    playSong();
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    playSong();
}

   // Actualiza la barra de progreso cuando el tiempo de reproducción de la canción cambia
    audioPlayer.addEventListener('timeupdate', updateProgress);

function updateProgress() {
       const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.style.width = percentage + '%';
}

   // Establecer el tiempo de reproducción al hacer clic en la barra

    progressContainer.addEventListener('click', setProgress);

    function setProgress(e) {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
       audioPlayer.currentTime = (clickX / width) * duration;
}

// Eventos para los botones de control
document.getElementById('play-btn').addEventListener('click', playSong);
document.getElementById('pause-btn').addEventListener('click', pauseTrack);
document.getElementById('next-btn').addEventListener('click', nextTrack);
document.getElementById('prev-btn').addEventListener('click', prevTrack);

// Eventos para la barra de progreso
audioPlayer.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);




