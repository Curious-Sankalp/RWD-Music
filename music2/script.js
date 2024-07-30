const songs = [
    { title: 'Channa Mereya', artist: 'Arijit Singh', src: 'song1.mp3', albumArt: 'img2.jpg' },
    { title: 'Shape of You', artist: 'Ed sheeran', src: 'song.mp3', albumArt: 'images.jpeg' },
    { title: 'Heeriye Remix', artist: 'Arijit Singh & DJ Chetas', src: 'song2.mp3', albumArt: 'img1.jpg' },
    { title: 'Soulmate', artist: 'Badshah & Arijit', src: 'song3.mp3', albumArt: 'img3.jpg' },
    { title: 'Tere Pyaar Mein', artist: 'Arijit Singh', src: 'song4.mp3', albumArt: 'img4.jpeg' },
    { title: 'Phir Aur Kya Chahiye', artist: 'Various Artist', src: 'song5.mp3', albumArt: 'img5.avif' },
    { title: 'Way Down We Go', artist: 'KALEO', src: 'song6.mp3', albumArt: 'img6.jpg' },
    { title: 'The Nights', artist: 'AVICII', src: 'song7.mp3', albumArt: 'img7.jpg' },
];

let currentSongIndex = 0;
const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');
const albumArt = document.getElementById('albumArt');
const songTitle = document.getElementById('songTitle');
const artistName = document.getElementById('artistName');
const playlist = document.getElementById('playlist');

function loadSong(index) {
    const song = songs[index];
    audioSource.src = song.src;
    albumArt.src = song.albumArt;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    audioPlayer.load();
    audioPlayer.play();
}

function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
}

function loadPlaylist() {
    playlist.innerHTML = '';
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist}`;
        li.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
        });
        playlist.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadPlaylist();
    loadSong(currentSongIndex);
});
