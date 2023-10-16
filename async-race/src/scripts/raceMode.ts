import {
	countPages
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
export const arrTimeEnd: Array < number > = [];
export const arrTimeDifference: Array < number > = [];


raceBtn.addEventListener('click', () => {
	let winnerIndicator = false;
	// console.log(countPages, ' - countPages , raceMode');
	// console.log(countUFO, ' - countUFO, raceMode');

	const initCount = (((countPages + 1) * 7) - 7) + 1;
	for (let id = initCount; id <= initCount + 6; id++) {
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

		console.log(id, ' id startStopShip');
		if (arrShipBool[id - 1] === undefined || arrShipBool[id - 1] === true) {
			stpStrtDriveEngine(id, 'started', shipAnimating);
			stpStrtDriveEngine(id, 'drive');
		}
	}
})