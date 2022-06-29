const musics = [
    {
        music: "Sweet Child O' Mine",
        artist : "Guns N' Roses",
    },
    {
        music : "0308",
        artist : "보수동쿨러",
    },
    {
        music : "Comfortably Numb",
        artist : "Pink Floyd",
    },
    {
        music : "Smells Like Teen Spirit",
        artist : "Nirvana",
    },
    {
        music : "Lithium",
        artist : "Nirvana",
    },
    {
        music : "Blinding Lights",
        artist : "The weekend",
    },
    {
        music : "Giorgio by Moroder",
        artist : "Daft Funk",
    },
    {
        music : "Only Shallow",
        artist : "My Bloody Valentine",
    },
    {
        music : "비 오는 거리에서 춤을 추자",
        artist : "김뜻돌",
    },
    {
        music : "Immigrant Song",
        artist : "Led Zeppelin",
    },
    {
        music : "Stairway to Heaven",
        artist : "Led Zeppelin",
    },
    {
        music : "Champagne Supernova",
        artist : "Oasis",
    },
    {
        music : "Graduation",
        artist : "Hyukoh(혁오)",
    },
    {
        music : "The Pretender",
        artist : "Foo Fighters",   
    },
    {
        music : "Paranoid Android",
        artist : "Radiohead",
    },
    {
        music : "Karma Police",
        artist : "Radiohead",
    },
    {
        music : "Back in Black",
        artist : "AC/DC",
    },
    {
        music : "Thunderstruck",
        artist : "AC/DC",
    },
    {
        music : "Highway to Hell",
        artist : "AC/DC",
    },
    {
        music : "Welcome to the Jungle",
        artist : "Guns N' Roses",
    },
    {
        music : "Paradise City",
        artist : "Guns N' Roses",
    },
    {
        music : "The Wave(파도)",
        artist : "SESO/NEON(새소년)",
    }
]

const music = document.querySelector("#music span:first-child");
const artist = document.querySelector("#music span:last-child");

const todaysMusic = musics[Math.floor(Math.random() * musics.length)];

music.innerText = todaysMusic.music;
artist.innerText = todaysMusic.artist;