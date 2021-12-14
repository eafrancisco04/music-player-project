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
    imgSrc: `../img/img1.png`
},
{
    title:`Dog Days Are Over`,
    artist:`Florence & the Machines`,
    duration:`03:45`,
    album:`Lungs`,
    genre:`alternative`,
    songSrc: `/music/dog.mp3`,
},
{
    title:`Fire`,
    artist:`2NE1`,
    duration:`03:44`,
    album:`Debut (Single)`,
    genre:`kpop`,
    songSrc: `/music/fire.mp3`,
},
{
    title:`Go!!!`,
    artist:`FLOW`,
    duration:`04:05`,
    album:`Haikyuu Soundtrack`,
    genre:`anime`,
    songSrc: `/music/go.mp3`,
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

// LOOP:
// Iterate over each item within the Array, calling a function and passing it the value as an argument
songList.forEach(addSong)