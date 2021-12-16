const songList = [
    {
    title:`Dumb Blonde`,
    artist:`Avril Lavigne`,
    duration:`03:35`,
    album:`Head Above Water`,
    genre:`pop`,
    songSrc: `/music/coversblonde.mp3`,
    imgSrc: `../img/covers/img1.png`
},
{
    title:`Bomb`,
    artist:`AleXa`,
    duration:`03:23`,
    album:`Bomb (Single)`,
    genre:`kpop`,
    songSrc: `/music/bomb.mp3`,
    imgSrc: `../img/covers/img2.png`
},
{
    title:`Butter`,
    artist:`BTS`,
    duration:`02:45`,
    album:`Butter (Single)`,
    genre:`kpop`,
    songSrc: `/music/butter.mp3`,
    imgSrc: `../img/covers/img3.png`
},
{
    title:`Dog Days Are Over`,
    artist:`Florence & the Machines`,
    duration:`03:45`,
    album:`Lungs`,
    genre:`alternative`,
    songSrc: `/music/dog.mp3`,
    imgSrc: `../img/covers/img4.jpg`
},
{
    title:`Fire`,
    artist:`2NE1`,
    duration:`03:44`,
    album:`Debut (Single)`,
    genre:`kpop`,
    songSrc: `/music/fire.mp3`,
    imgSrc: `../img/covers/img5.jpg`
},
{
    title:`Go!!!`,
    artist:`FLOW`,
    duration:`04:05`,
    album:`Naruto Soundtrack`,
    genre:`anime`,
    songSrc: `/music/go.mp3`,
    imgSrc: `../img/covers/img6.jpg`
},
{
    title:`Icy`,
    artist:`ITZY`,
    duration:`03:20`,
    album:`IT'z ICY`,
    genre:`kpop`,
    songSrc: `/music/icy.mp3`,
    imgSrc: `../img/covers/img7.jpg`
},
{
    title:`Kings & Queens`,
    artist:`Ava Max`,
    duration:`02:40`,
    album:`Heaven & Hell`,
    genre:`pop`,
    songSrc: `/music/kings-queens.mp3`,
    imgSrc: `../img/covers/img8.jpg`
},
{
    title:`Maria`,
    artist:`Hwasa`,
    duration:`03:21`,
    album:`Mria`,
    genre:`kpop`,
    songSrc: `/music/marias.mp3`,
    imgSrc: `../img/covers/img9.jpg`
},
{
    title:`Sour Candy`,
    artist:`Lady Gaga`,
    duration:`03:21`,
    album:`Chromatica`,
    genre:`pop`,
    songSrc: `/music/sour-candy.mp3`,
    imgSrc: `../img/covers/img10.jpeg`
},
]

const playingTitle = document.getElementById(`playingTitle`)


//show Array as a list of songs
const addSong = function(song) {
	document.getElementById(`song-list`).innerHTML += `
    <li class="song">
		<h3 class="title"><b>${song.title}</b> - ${song.artist}</h3>
        
		<h5 class="duration">${song.duration}</h5>
	</li>
    `
}


let playingIndex = 0

addSong(songList[playingIndex])


// Play and pause music while changing the image src
songList.forEach(addSong)

const playOrpause = document.getElementById(`playPause`)
const nextSong = document.getElementById(`nextBtn`)
const prevSong = document.getElementById(`prevBtn`)

const kpopCat = document.getElementById(`kpop`)
const kpop = []

const musicPlaying = new Audio(`/music/blonde.mp3`)


playOrpause.addEventListener(`click`, function(event){
    if (musicPlaying.paused) {
    musicPlaying.play();
    document.getElementById(`playPause`).src=`img/buttons/play-arrow.svg`;

    playingTitle.innerText = `${song.title}`
    
    } 
    else {
    musicPlaying.pause();
    document.getElementById(`playPause`).src=`img/buttons/pause.svg`;
    }
}) 

/////Filter
const titleSearch = document.getElementById(search);

const searchSong = function(e) {
    e.preventDefault();
    // Check the form's values, do some stuff...
    const nameSearch = document.getElementById('input-search').value

    // Clear out the existing results
    document.querySelector(#song-list).innerHTML = ``
  
    songList
      .filter(song => song.title.toUpperCase().includes(nameSearch.toUpperCase()))
      .forEach(addSong)
  }

titleSearch.addEventListener(`submit`, searchSong)