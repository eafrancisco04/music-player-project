const songList = [
    {
    title:`Dumb Blonde`,
    artist:`Avril Lavigne`,
    duration:`03:35`,
    album:`Head Above Water`,
    genre:`pop`,
    songSrc: `https://github.com/flames04/music-player-project/raw/master/music/blonde.mp3`,
    imgSrc: `./img/covers/img1.png`
},
{
    title:`Bomb`,
    artist:`AleXa`,
    duration:`03:23`,
    album:`Bomb (Single)`,
    genre:`kpop`,
    songSrc: `https://github.com/flames04/music-player-project/raw/master/music/bomb.mp3`,
    imgSrc: `./img/covers/img2.png`
},
{
    title:`Butter`,
    artist:`BTS`,
    duration:`02:45`,
    album:`Butter (Single)`,
    genre:`kpop`,
    songSrc: `https://github.com/flames04/music-player-project/raw/master/music/butter.mp3`,
    imgSrc: `./img/covers/img3.png`
},
{
    title:`Dog Days Are Over`,
    artist:`Florence & the Machines`,
    duration:`03:45`,
    album:`Lungs`,
    genre:`alternative`,
    songSrc: `https://github.com/flames04/music-player-project/raw/master/music/dog.mp3`,
    imgSrc: `./img/covers/img4.jpg`
},
{
    title:`Fire`,
    artist:`2NE1`,
    duration:`03:44`,
    album:`Debut (Single)`,
    genre:`kpop`,
    songSrc: `https://github.com/flames04/music-player-project/raw/master/music/fire.mp3`,
    imgSrc: `./img/covers/img5.jpg`
},
{
    title:`Go!!!`,
    artist:`FLOW`,
    duration:`04:05`,
    album:`Naruto Soundtrack`,
    genre:`anime`,
    songSrc: `https://github.com/flames04/music-player-project/raw/master/music/go.mp3`,
    imgSrc: `./img/covers/img6.jpg`
},
{
    title:`Icy`,
    artist:`ITZY`,
    duration:`03:20`,
    album:`IT'z ICY`,
    genre:`kpop`,
    songSrc: `https://github.com/flames04/music-player-project/raw/master/music/icy.mp3`,
    imgSrc: `./img/covers/img7.jpg`
},
{
    title:`Kings & Queens`,
    artist:`Ava Max`,
    duration:`02:40`,
    album:`Heaven & Hell`,
    genre:`pop`,
    songSrc: `https://github.com/flames04/music-player-project/raw/master/music/kings-queens.mp3`,
    imgSrc: `./img/covers/img8.jpg`
},
{
    title:`Maria`,
    artist:`Hwasa`,
    duration:`03:21`,
    album:`Mria`,
    genre:`kpop`,
    songSrc: `https://github.com/flames04/music-player-project/raw/master/music/music/maria.mp3`,
    imgSrc: `./img/covers/img9.jpg`
},
{
    title:`Sour Candy`,
    artist:`Lady Gaga`,
    duration:`03:21`,
    album:`Chromatica`,
    genre:`pop`,
    songSrc: `https://github.com/flames04/music-player-project/raw/master/music/sour-candy.mp3`,
    imgSrc: `./img/covers/img10.jpeg`
},
]
const getEl = (selector) => document.getElementById(selector)

const playingTitle = getEl(`playingTitle`)
const artistPlaying = getEl(`artistPlaying`)
const songSrc = getEl(`audio`)
const coverPlaying = getEl(`cover`)
const playOrpause = getEl(`playPause`)
const nextSong = getEl(`nextBtn`)
const prevSong = getEl(`prevBtn`)
const volume = getEl(`volume`)
const replaySong = getEl(`replayBtn`)

let playingIndex = 0


const musicPlaying = new Audio()
musicPlaying.src = songList[playingIndex].songSrc
coverPlaying.src = songList[playingIndex].imgSrc


//// Play and pause song on Index
playOrpause.addEventListener(`click`, function(){
    if (musicPlaying.paused) {
    musicPlaying.play();
    document.getElementById(`playPause`).src=`img/buttons/pause.svg`;
    
    } 
    else {
    musicPlaying.pause();
    document.getElementById(`playPause`).src=`img/buttons/play-arrow.svg`;
    }

}) 

//// Previous button
prevBtn.addEventListener(`click`, function() {

    if (playingIndex < 0){
    playingIndex = songList.length - 1
    } else {
    musicPlaying.src = songList[playingIndex].songSrc
    }
    playingTitle.innerText = `${songList[playingIndex].title}`
    artistPlaying.innerText = `${songList[playingIndex].artist}`
    musicPlaying.src = songList[playingIndex].songSrc
    coverPlaying.src = songList[playingIndex].imgSrc

    musicPlaying.play();
    
  })


  ////Next button
nextBtn.addEventListener(`click`, function() {
    playingIndex ++

    if (playingIndex > songList.length){
    playingIndex = 0
    } else {
    musicPlaying.src = songList[playingIndex].songSrc
    }
    playingTitle.innerText = `${songList[playingIndex].title}`
    artistPlaying.innerText = `${songList[playingIndex].artist}`
    musicPlaying.src = songList[playingIndex].songSrc
    coverPlaying.src = songList[playingIndex].imgSrc

    musicPlaying.play();
  })

/////Repeat button
replayBtn.addEventListener(`click`, function(){
    musicPlaying.currentTime = 0
}) 

////Display Array as list of songs
const addSong = function(song) {
	document.getElementById(`song-list`).innerHTML += `
    <li id="song">
		<h3 class="title">${song.title} - <i>${song.artist}</i></h3>
		<h5 class="duration">${song.duration}</h5>
	</li>
    `
}

////Make songs playable on click

const allSongs = getEl(`song`)


songList.forEach(addSong)

/////Filter by typing
const titleSearch = document.getElementById(`search`);

const searchSong = function(event) {
    event.preventDefault();
    
    const nameSearch = document.getElementById('input-search').value

    // Clear out the existing results
    document.getElementById(`song-list`).innerHTML = ``
  
    songList
      .filter(song => song.title.toUpperCase().includes(nameSearch.toUpperCase()))
      .forEach(addSong)
  }

titleSearch.addEventListener(`submit`, searchSong)

////ADjust volume

volume.addEventListener(`input`, function(event){

    musicPlaying.volume = volume.value

})
