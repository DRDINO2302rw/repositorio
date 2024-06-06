// Array de objetos con la información de las canciones
const songs = [
    {
    title: "ThxSoMch - CAROLINE",
    file: "musica/ThxSoMch - CAROLINE (Official Music Video) - ThxSoMch.mp3",
    cover: "imgs/recort.jpg"
    },
    {
    title: "get lucky- daft punk",
    file: "musica/Daft Punk - Get Lucky (Official Audio) ft. Pharrell Williams, Nile Rodgers - DaftPunkVEVO.mp3",
    cover: "imgs/recort2.jpg"
    },
    {
        title: "Capital cities - safe and sound",
        file: "musica/Capital Cities - Safe And Sound - CapitalCitiesVEVO.mp3",
        cover: "imgs/recort3.jpg"
        },
        {
            title: "M83 'Ciudad de Medianoche'",
            file: "musica/M83 'Midnight City' Official video - M83.mp3",
            cover: "imgs/recort4.jpg"
            },
            
        {title: "It Was A Good Day",
        file: "musica/Ice Cube - It Was A Good Day -- Sub Español & Lyrics (320).mp3",
        cover: "imgs/recort5c.jpg"},

        {title:"Young Turks",
            file: "musica/Young Turks - GTA San Andreas (Legendado) (320).mp3",
            cover: "imgs/recort6.jpg"
        },

        {title:"Dark Red",
            file: "musica/Dark Red (320).mp3",
            cover: "imgs/recort7.jpg"
        },

        {title:"Homage",
            file: "musica/Homage (320).mp3",
            cover: "imgs/recort8.jpg"
        },
        
        {title:"hotel ugly-Shut up My Moms Calling",
            file: "musica/Hotel Ugly - Shut up My Moms Calling (Español) (Lyrics) (320).mp3",
            cover: "imgs/recort9.jpg"
        },

        {title:"Ice Cube - You Know How We Do It",
            file: "musica/Ice Cube - You Know How We Do It (320).mp3",
            cover: "imgs/recort10.jpg"
        },

        {title:"NBSPLV - The lost soul down X Lost soul ",
            file: "musica/NBSPLV - The lost soul down X Lost soul  (ChainsawMan Girls) (320).mp3",
            cover: "imgs/recort11.jpg"
        },

        {title:"Videoclub - Amour Plastique slowed",
            file: "musica/Napoleon Song _No hay nada que podamos hacer_ _ Videoclub - Amour Plastique slowed (Sub. español) (320).mp3",
            cover: "imgs/recort12.jpg"
        },

        {title:"Amor libre - nach",
            file: "musica/Amor Libre (320).mp3",
            cover: "imgs/recort13.jpg"
        },

        {title:"Marcelo D2 Claudia - Desabafo Deixa Eu Dizer",
            file: "musica/Marcelo D2 Claudia - Desabafo Deixa Eu Dizer (320).mp3",
            cover: "imgs/recort14.jpg"
        },

        {title:"the drums - money ",
            file: "musica/the drums - money (doomer wave ) (320).mp3",
            cover: "imgs/recort15.jpg"
        },

        {title:"Pase lo que Pase - rapper school" ,
            file: "musica/_Pase lo que Pase_ - Rapper School - Videoclip (Oficial) (320).mp3",
            cover: "imgs/recort16.jpg"
        },

        {title:"EYEDRESS - JEALOUS",
            file: "musica/EYEDRESS - JEALOUS (OFFICIAL VIDEO) (320).mp3",
            cover: "imgs/recort17.png"
        },

        {title:"My kind of woman// Mac DeMarco",
            file: "musica/My kind of woman-- Mac DeMarco♡ (sub español). (320).mp3",
            cover: "imgs/recort18.jpg"
        },

        {title:"ThxSoMch - Hate.",
            file: "musica/ThxSoMch - Hate. (Official Music Video) (320).mp3",
            cover: "imgs/recort19.jpg"
        },

        {title:"JAWNY - Honeypie",
            file: "musica/JAWNY - Honeypie (Official Video) (320).mp3",
            cover: "imgs/recort20.jpg"
        },

        {title:"Men At Work - Who Can It Be Now?",
            file: "musica/Men At Work - Who Can It Be Now_ (Video Version) (320).mp3",
            cover: "imgs/recort21.jpg"
        },

        {title:"El Rayo - Tengo la vida perdida",
            file: "musica/El Rayo - Tengo la vida perdida 【LETRA】 (320).mp3",
            cover: "imgs/recort22.jpg"
        },

        {title:"LA UNIÓN - Lobo Hombre en París",
            file: "musica/LA UNIÓN - Lobo Hombre en París (1984) (320).mp3",
            cover: "imgs/recort23.jpg"
        },

        {title:"i like the way you kiss me; Artemas",
            file: "musica/i like the way you kiss me; Artemas (Subtitulos al Español + Original Lyrics) AMV (320).mp3",
            cover: "imgs/recort24.jpg"
        },

        {title:"No Se' / La Cinta Rosa",
            file: "musica/No Se' - La Cinta Rosa (320).mp3",
            cover: "imgs/recort25.jpg"
        },

        {title:"Tren Al Sur · Los Prisioneros",
            file: "musica/Los Prisioneros - Tren Al Sur (Audio) (320).mp3",
            cover: "imgs/recort26.jpg"
        },

        {title:"ThxSoMch - Keep It Tucked ",
            file: "musica/ThxSoMch - Keep It Tucked (Official Audio) (320).mp3",
            cover: "imgs/recort27.jpg"
        },

        {title:"WTF 2 - Ugovhb ",
            file: "musica/WTF 2 - Ugovhb (Sub Español + Português) (320).mp3",
            cover: "imgs/recort28.jpg"
        },

        {title:"Bee Gees - Stayin' Alive",
            file: "musica/Bee Gees - Stayin' Alive (Slowed + Reverb) (320).mp3",
            cover: "imgs/recort29.jpg"
        },

        {title:"WARNING x DREAM SPACE",
            file: "musica/WARNING x DREAM SPACE _ 𝙍𝙤𝙘𝙠𝙮 + 𝙄𝙥𝙥𝙤🔥🥊  __ [P4nMusic PHONK MASHUP] (320).mp3",
            cover: "imgs/recort30.jpg"
        },
    
    // Agrega más canciones aquí
];


document.addEventListener('DOMContentLoaded', function () {
    let currentTrackIndex = 0;

    function loadSong(songIndex) {
        const song = songs[songIndex];
        const audioPlayer = document.getElementById('audio-player');
        const coverImage = document.querySelector('.cover-image');
        const songTitle = document.querySelector('.song-title');

        if (audioPlayer && coverImage && songTitle) {
            audioPlayer.src = song.file;
            coverImage.src = song.cover;
            songTitle.textContent = song.title;

            // Depuración: Verificar que la canción y la portada se han actualizado
            console.log(`Cargando canción: ${song.title}`);
        } else {
            console.error('No se pudieron encontrar todos los elementos necesarios en el DOM.');
        }
    }

    // Carga la primera canción al iniciar
    loadSong(currentTrackIndex);

    // Agrega funcionalidad a los botones para cambiar de canción
    document.getElementById('next-btn').addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex + 1) % songs.length;
        loadSong(currentTrackIndex);
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex - 1 + songs.length) % songs.length;
        loadSong(currentTrackIndex);
    });

    // Agrega funcionalidad para cambiar de canción cuando termine la actual
    document.getElementById('audio-player').addEventListener('ended', () => {
        currentTrackIndex = (currentTrackIndex + 1) % songs.length;
        loadSong(currentTrackIndex);
    });

    // Agrega funcionalidad a los botones de play y pause
    document.getElementById('play-btn').addEventListener('click', () => {
        document.getElementById('audio-player').play();
    });

    document.getElementById('pause-btn').addEventListener('click', () => {
        document.getElementById('audio-player').pause();
    });
});
