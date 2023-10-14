import {countPages} from "./switchPages";
// import {countUFO} from "./createTrack";
import { stpStrtDriveEngine } from "./serverRequest";
import { arrWrapSvg } from "./animation";
import { arrShipAnim } from "./startStopShip";
import { arrShipBool } from "./serverRequest";

const raceBtn = document.getElementById('RACE') as HTMLDivElement;

raceBtn.addEventListener('click', () => {
	// console.log(countPages, ' - countPages , raceMode');
	// console.log(countUFO, ' - countUFO, raceMode');

	const initCount = (((countPages + 1) * 7) - 7) + 1;
	for (let id = initCount; id <= initCount + 6; id++) {
		// console.log(initCount, ' - initCount');
		
		const shipAnimating = function (velocity: number): void {
			const earth = document.querySelector('.wrap-image-earth') as HTMLDivElement;
			const anim: NodeJS.Timeout = setInterval(() => {
				const leftPx = parseInt(window.getComputedStyle(arrWrapSvg[id - 1], null).left);
				arrWrapSvg[id - 1].style.left = (leftPx + velocity) + 'px';
				const coordEarth = Math.trunc(earth.getBoundingClientRect().x);
				const coordShip = parseInt(window.getComputedStyle(arrWrapSvg[id - 1], null).left);
				if (coordEarth <= coordShip + 50) {
					clearInterval(anim);
					arrShipBool[id -1] = true;
				}
			}, 32);
			arrShipAnim[id] = anim;
		};
	
		arrShipAnim.push(arrShipAnim[id - 1]); // Add a placeholder for the ship animation
	
			console.log(id, ' id startStopShip');
			if(arrShipBool[id - 1] === undefined || arrShipBool[id - 1] === true) {
			stpStrtDriveEngine(id, 'started', shipAnimating);
			stpStrtDriveEngine(id, 'drive');
			}
	}
})