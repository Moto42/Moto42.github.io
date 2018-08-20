const defaultVideos = [
		"DLTZctTG6cE",
		"tKdcjJoXeEY",
		"su6_bKJJk74",
		"MU4HMhic6AU",
		"_rbfCbCLpOA",
		"FGXDKrUoVrw",
		"8HlqSrCazqo",
		"6xncCLKC7gY",
		"ctlEBHDROAw",
		"XF7b_MNEIAg",
		"DzlH5SDGoyA",
		"K8_ad8b1ziw",
		"yr_Rpk9HR1g",
		"rZt0avHRR00",
		"K1Y6PchDYfw",
		"UiyDmqO59QE",
		"YooKkyikXw0",
		"YWdD206eSv0",
		"1SBxsv_T_Jw",
		"LGRycUpBLS4",
		"blpe_sGnnP4",
		"Fc1P-AEaEp8",
		"e-zjGzCxpuc",
		"Mg3zesVdhSY",
		"t6eqpmTLOtI",
		"HukDKlVVq-8",
		"BG-x6tLqMg0",
		"SIHnBBzJKuo",
		"WJq4jWSQNd8",
		"R97TsVDC1BY",
		"84zY33QZO5o",
		"sFBhR4QcBtE",
		"VTO5yiN1b-I",
		"RB2GboGOuTI",
		"2bdEx7fto_w",
		"pUjh9Id6Id8",
		"jk6GFU4Sv4s",
		"QFVratN53wc",
		"vLfAtCbE_Jc",
		"ofV_iFBw2YE",
		"mK2fNG26xFg",
		"s4LyaNgzy6U",
		"kfchvCyHmsc",
		"xe3Ou9xBAlI",
		"2mNB_VG_shc",
	];



const soundBoard = document.querySelector('#soundBoard');

const cardDeck = [];

let buttonsActive = false; 

const playerFrame = document.querySelector('#playerFrame');


class Card {

	constructor(videoID,thumb=1) {

		this.element = document.createElement('div');

		this.element.classList.add('card',);
		
		this.videoID = videoID;

		this.soundButton = new SoundButton(this.videoID, thumb);

		this.element.appendChild(this.soundButton.img);

	}
}



function killButton(vID) {
	//Find button with that vID in the cardDeck
		//Remove the button from the DOM
		//Remove it's card from the deck
	//if cookies are enabled
		//Check if that was a default vid
			//if yes: add it the the removed vids cookie.
				//update cookie on user machine
			//find it's listing in the userVids cookie and remove it
				//update cookie on user machine
}


function parseIDFromString(cardString) {
	if(cardString.includes("&")) {
		return cardString.slice(0,cardString.indexOf('&'));
	}
	else {
		return cardString;
	}
}


function parseThumbNumFromString(cardString) {
	if(cardString.includes("&")) {
		return cardString.slice(-1);
	}
	else {
		return 1;
	}
}


var player;

function onYouTubeIframeAPIReady(){
	buttonsActive = true;
	player = new YT.Player('playerFrame', {
		events:{
			'onReady' : onPlayerReady,
			'onStateChange' : onPlayerStateChange,
		}
	});

}

function onPlayerReady(){
	
	return "Plyaer ready";
}

function onPlayerStateChange(event){

	switch (event.data){

		case -1:
			buttonsActive = false;
			player.getIframe().classList.remove('hidden');
			break;

		case 0:
			buttonsActive = true;
			player.getIframe().classList.add('hidden');
			break;

		case 1:
			break;

		case 3:
			break;

		default:
			console.log(event.data);
			buttonsActive = true;
			player.getIframe().classList.add('hidden');
	}

}


class SoundButton {

	constructor(videoID,thumb=1){

		let that = this;

		this.videoID = videoID;

		this.videoURL = `https://www.youtube.com/embed/${videoID}?autoplay=1&controls=0`;

		this.thumbURL = this.getThumbnail(videoID, thumb);

		this.img = document.createElement('img');

		this.img.src = this.thumbURL;

		this.img.addEventListener('click', function(){ that.play()} );
	}


	getThumbnail(videoID, thumbNum) {

		if  (typeof thumbNum === 'number'&& thumbNum >= 1 && thumbNum <= 3) { }
		else {thumbNum = 1;}

		return `https://img.youtube.com/vi/${videoID}/${thumbNum}.jpg`;
	}


	play() {
		if (buttonsActive === false){return false;}
		player.loadVideoById(this.videoID); // point that window to this.videoURL;
	}
}



function intializeSoundboard() {

	defaultVideos.forEach(cardFromString);
}


function cardFromString(cardString,i) {
	let videoID = parseIDFromString(cardString);

	let thumbNum= parseThumbNumFromString(cardString);

	cardDeck.push( new Card(videoID, thumbNum));

	soundBoard.appendChild(cardDeck[i].element);


	return videoID;
}

intializeSoundboard();


