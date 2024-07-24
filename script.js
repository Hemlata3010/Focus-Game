
"use strict"; /*catch common coding errors and prevents the use of some potentially problematic features. */
let timer = 60;
let score = 0;
let rn; /*store the random number that needs to be matched */

function incScore() {
	score += 10;
	document.querySelector("#scoreBox")
		.textContent = score;
};

function getNewHit(){
	rn = Math.floor(Math.random()*10);
	document.querySelector("#hitBox")
		.textContent = rn;
};

function make_Bubble() {
	let clutter = '';
	for (let i = 1; i <= 48; i++) {
		let random_Numbers = Math.floor(Math.random()*10);
		clutter += `<div class="bubble">${random_Numbers}</div>`;
	}

	document.querySelector
		(".panel_Bottom").innerHTML
		= clutter;
}

function runTimer() {
	let timer2 = setInterval(() => {
		if (timer > 0) {
			timer--;
		document.querySelector
			("#timerGame").textContent
			= timer;
		}
		else {
			clearInterval(timer2);
			document.querySelector
				(".panel_Bottom").innerHTML
				=`<h1>GAME OVER!</h1><p>Your Score is ${score}</p><p><b>DONT FORGET THAT YOU CAN PUT YOUR SCORE IN THE COMMENT BOX!</b></p><br /><button onclick="start();">Restart</button>`;
		}
	}, 1000);
}

document.querySelector(".panel_Bottom").addEventListener("click", (dets) => {
	let clickedNum = Number(dets.target.textContent);
	if(clickedNum === rn) {
		incScore();
		make_Bubble();
		getNewHit();
	}
});

function start() {
	document.querySelector(".panel_Bottom").innerHTML = '<h1>About Game</h1><p>You have to hit the number that is showing in the [hit] box. GOOD LUCK 💪👏,You have Only 60 seconds ☠️👽</p><br /><button id="start" style="font-size: 20px; font-weight: super-bold;">Start</button>';
	document.getElementById("timerGame")
		.textContent = "60";
	timer = 60;
	score = 0;
	document.getElementById("start").onclick = () => {
		document.querySelector("#scoreBox")
			.textContent = score;
		runTimer();
		make_Bubble();
		getNewHit();
	}
}

start();
		