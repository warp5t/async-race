import {
  start_ID,
  stop_ID
} from "./createTrack";
import {
  stpStrtDriveEngine
} from "./serverRequest";
import {
  arrWrapSvg
} from "./animation";
import {
  arrShipBool
} from "./serverRequest";

export const correctPixels = 80;
export const arrShipAnim: Array < NodeJS.Timeout > = [];

export function setListStartShip() {
  const startBtn = document.getElementById(`${start_ID}`) as HTMLButtonElement;
  const idBtn: string = startBtn.id;
  const id = Number(idBtn.slice(6, idBtn.length));

  const shipAnimating = function (velocity: number): void {
    const earth = document.querySelector('.wrap-image-earth') as HTMLDivElement;
    arrWrapSvg[id - 1].style.width = earth.offsetWidth + 'px';
    const anim: NodeJS.Timeout = setInterval(() => {
      const leftPx = parseInt(window.getComputedStyle(arrWrapSvg[id - 1], null).left);
      arrWrapSvg[id - 1].style.left = (leftPx + velocity) + 'px';
      const coordEarth = Math.trunc(earth.getBoundingClientRect().x);
      const coordShip = parseInt(window.getComputedStyle(arrWrapSvg[id - 1], null).left);
      if (coordEarth <= coordShip + correctPixels) {
        clearInterval(anim);
        arrShipBool[id - 1] = true;
        const ship = arrWrapSvg[id - 1].firstChild as HTMLOrSVGImageElement;
        ship.classList.add('landing-animation');
      }
    }, 32);
    arrShipAnim[id - 1] = anim;
  };

  arrShipAnim.push(arrShipAnim[id - 1]); // Add a placeholder for the ship animation

  startBtn.addEventListener('click', () => {
    console.log(id, ' id startStopShip');
    if (arrShipBool[id - 1] === undefined || arrShipBool[id - 1] === true) {
      stpStrtDriveEngine(id, 'started', shipAnimating);
      stpStrtDriveEngine(id, 'drive');
    }
  });
}


export function setListStopShip() {
  const stopBtn = document.getElementById(`${stop_ID}`) as HTMLButtonElement;
  const idBtn: string = stopBtn.id;
  const id = Number(idBtn.slice(5, idBtn.length));

  stopBtn.addEventListener('click', () => {
    stpStrtDriveEngine(id, 'stopped');
    console.log(id, ' - id');
    
    const ship = arrWrapSvg[id - 1].firstChild as HTMLOrSVGImageElement;
        ship.classList.remove('landing-animation');
  });
}

// const arr = [];
// const checkFunction = function() {
//   setInterval(() => {
//     console.log('check startStopShip')
//   }, 1000)
// } 
// arr.push(checkFunction);
// arr[0]();