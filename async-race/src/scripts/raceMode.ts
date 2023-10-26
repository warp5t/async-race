import {
	countPages,
	lastPage
} from "./switchPages";
// import {countUFO} from "./createTrack";
import {
	arrWrapSvg
} from "./animation";
import {
	arrShipAnim
} from "./startStopShip";
import { Winner } from "./serverRequest";

import {
	createWinner,
	getWinner,
	updateWinner,
	arrTimeStart,
	arrShipBool,
	stpStrtDriveEngine
} from "./serverRequest";



const raceBtn = document.getElementById('RACE') as HTMLDivElement;
const resetRaveBtn = document.getElementById('RESET') as HTMLButtonElement;
export const arrTimeEnd: Array < number > = [];
export const arrTimeDifference: Array < number > = [];

// document.addEventListener('keydown', (event) => {
// 	const name = event.key;
// 	const code = event.code;
// 	console.log(name,code);
// 	if(event.key === 's'){
// 		let winnerIndicator = false;

// 	const initCount = (((countPages + 1) * 7) - 7) + 1;
// 	for (let id = initCount; id <= initCount + 6; id++) {
// 		const shipAnimating = function (velocity: number): void {
// 			const earth = document.querySelector('.wrap-image-earth') as HTMLDivElement;
// 			const anim: NodeJS.Timeout = setInterval(() => {
// 				const leftPx = parseInt(window.getComputedStyle(arrWrapSvg[id - 1], null).left);
// 				arrWrapSvg[id - 1].style.left = (leftPx + velocity) + 'px';
// 				const coordEarth = Math.trunc(earth.getBoundingClientRect().x);
// 				const coordShip = parseInt(window.getComputedStyle(arrWrapSvg[id - 1], null).left);
// 				if (coordEarth <= coordShip + 50) {
// 					clearInterval(anim);
// 					arrShipBool[id - 1] = true;
// 					if (winnerIndicator === false) {
// 						arrTimeEnd[id - 1] = Date.now();
// 						const prevTime = arrTimeDifference[id -1];
// 						arrTimeDifference[id - 1] = (arrTimeEnd[id - 1] - arrTimeStart[id - 1]) / 1000;
// 						winnerIndicator = true;
// 						(async () => {
// 							const winner: Winner = await getWinner(id);
// 							if (winner.persistance === false) {
// 								createWinner(id, 1, arrTimeDifference[id - 1])
// 							} else {
// 								if(arrTimeDifference[id] >= prevTime) {
// 									updateWinner(id, winner.wins+1, prevTime)
// 								} else {
// 									updateWinner(id,winner.wins+1, arrTimeDifference[id -1])
// 								}
// 							}
// 						})()
// 					}


// 				}
// 			}, 32);
// 			arrShipAnim[id - 1] = anim;
// 		};

// 		arrShipAnim.push(arrShipAnim[id - 1]);

// 		console.log(id, ' id startStopShip');
// 		if (arrShipBool[id - 1] === undefined || arrShipBool[id - 1] === true) {
// 			stpStrtDriveEngine(id, 'started', shipAnimating);
// 			stpStrtDriveEngine(id, 'drive');
// 		}
// 	}
// 	}
	
//   }, false);
let initCount = 0;
let lastDiffer = 0;
let remainDiff = 0;  
let lengthContainer = 0;
let collectionTracks: NodeListOf<HTMLDivElement>;
function correctInitIndex() {
initCount = 0;
lastDiffer = 0;
remainDiff = 0;  
lengthContainer = 0;
	const ammountShip = 7;
	const containerTracks = document.getElementById('containerTracks') as HTMLDivElement;
	collectionTracks = Array.from(containerTracks.children) as unknown as NodeListOf<HTMLDivElement>;
	lengthContainer = collectionTracks.length;
	
	if (lastPage && countPages > 0) {
		const preLast = (countPages + 1) * ammountShip;
		const preDiffer = preLast - collectionTracks.length;
		lastDiffer = ammountShip - preDiffer; 
		initCount = collectionTracks.length;
		remainDiff = 1;
	} else {
		lastDiffer = 6;
		initCount = ((countPages + 1) * ammountShip) - 1;
	}
}

raceBtn.addEventListener('click', () => {
	console.log('raceBtn');
	correctInitIndex()
	let winnerIndicator = false;
	for (let i = lengthContainer - initCount - 1 + remainDiff; i < (lengthContainer - initCount) + (lastDiffer); i++) {
		const id = Number(collectionTracks[i].id.slice(6, collectionTracks[i].id.length))
		console.log(id, ' - id');
		const shipAnimating = function (velocity: number): void {
			const earth = document.querySelector('.wrap-image-earth') as HTMLDivElement;
			const anim: NodeJS.Timeout = setInterval(() => {
				const leftPx = parseInt(window.getComputedStyle(arrWrapSvg[id - 1], null).left);
				arrWrapSvg[id - 1].style.left = (leftPx + velocity) + 'px';
				const coordEarth = Math.trunc(earth.getBoundingClientRect().x);
				const coordShip = parseInt(window.getComputedStyle(arrWrapSvg[id - 1], null).left);
				if (coordEarth <= coordShip + 50) {
					clearInterval(anim);
					arrShipBool[id - 1] = true;
					if (winnerIndicator === false) {
						arrTimeEnd[id - 1] = Date.now();
						const prevTime = arrTimeDifference[id -1];
						arrTimeDifference[id - 1] = (arrTimeEnd[id - 1] - arrTimeStart[id - 1]) / 1000;
						winnerIndicator = true;
						(async () => {
							const winner: Winner = await getWinner(id);
							if (winner.persistance === false) {
								createWinner(id, 1, arrTimeDifference[id - 1])
							} else {
								if(arrTimeDifference[id] >= prevTime) {
									updateWinner(id, winner.wins+1, prevTime)
								} else {
									updateWinner(id,winner.wins+1, arrTimeDifference[id -1])
								}
							}
						})()
					}
				}
			}, 32);
			arrShipAnim[id - 1] = anim;
		};
		arrShipAnim.push(arrShipAnim[id - 1]);
		if (arrShipBool[id - 1] === undefined || arrShipBool[id - 1] === true) {
			stpStrtDriveEngine(id, 'started', shipAnimating);
			stpStrtDriveEngine(id, 'drive');
		}
	}
})

resetRaveBtn.addEventListener('click', () => {
	console.log('RESET');
	correctInitIndex()
	for (let i = lengthContainer - initCount - 1 + remainDiff; i < (lengthContainer - initCount) + (lastDiffer); i++) { 
		const id = Number(collectionTracks[i].id.slice(6, collectionTracks[i].id.length))
		stpStrtDriveEngine(id, 'stopped');
	}
})