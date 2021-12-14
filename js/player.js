const songList = [
    {
    title:`Dumb Blonde`,
    artist:`Avril Lavigne`,
    duration:`03:35`,
    album:`Head Above Water`,
    genre:`pop`,
    songSrc: `/music/blonde.mp3`,
    imgSrc: `../img/img1.png`
},
{
    title:`Bomb`,
    artist:`AleXa`,
    duration:`03:23`,
    album:`Bomb (Single)`,
    genre:`kpop`,
    songSrc: `/music/bomb.mp3`,
    imgSrc: `../img/img2.png`
},
{
    title:`Butter`,
    artist:`BTS`,
    duration:`02:45`,
    album:`Butter (Single)`,
    genre:`kpop`,
    songSrc: `/music/butter.mp3`,
    imgSrc: `../img/img3.png`
},
{
    title:`Dog Days Are Over`,
    artist:`Florence & the Machines`,
    duration:`03:45`,
    album:`Lungs`,
    genre:`alternative`,
    songSrc: `/music/dog.mp3`,
    imgSrc: `../img/img4.png`
},
{
    title:`Fire`,
    artist:`2NE1`,
    duration:`03:44`,
    album:`Debut (Single)`,
    genre:`kpop`,
    songSrc: `/music/fire.mp3`,
    imgSrc: `../img/img5.png`
},
{
    title:`Go!!!`,
    artist:`FLOW`,
    duration:`04:05`,
    album:`Haikyuu Soundtrack`,
    genre:`anime`,
    songSrc: `/music/go.mp3`,
    imgSrc: `../img/img6.png`
},
{
    title:`Icy`,
    artist:`ITZY`,
    duration:`03:20`,
    album:`IT'z ICY`,
    genre:`kpop`,
    songSrc: `/music/icy.mp3`,
    imgSrc: `../img/img7.png`
},
{
    title:`Icy`,
    artist:`ITZY`,
    duration:`03:20`,
    album:`IT'z ICY`,
    genre:`kpop`,
    songSrc: `/music/icy.mp3`,
    imgSrc: `../img/img8.png`
}
]

//show Array as a list of songs
const addSong = function(song) {
	// Concatinate to the existing string
	document.getElementById(`song-list`).innerHTML += `
    <li class="song">
		<h3 class="title"><b>${song.title}</b> - ${song.artist}</h3>
        
		<h5 class="duration">${song.duration}</h5>
	</li>
    `
}

// Play and pause music while changing the image src
songList.forEach(addSong)

const playOrpause = document.getElementById(`playPause`)

const musicPlaying = new Audio(`/music/blonde.mp3`)

playOrpause.addEventListener(`click`, function(event){
    if (musicPlaying.paused) {
    musicPlaying.play();
    document.getElementById(`playPause`).src=`img/play-arrow.svg`;
    } 
    else {
    musicPlaying.pause();
    document.getElementById(`playPause`).src=`img/pause.svg`;
    }
}) 

