import {
  start_ID,
  stop_ID
} from "./createTrack";
import {
  stpStrtDriveEngine
} from "./serverRequest";
import { arrWrapSvg } from "./animation";
const arrShipAnim: Array<NodeJS.Timeout> = [];

export function setListStartShip() {
  const startBtn = document.getElementById(`${start_ID}`) as HTMLButtonElement;
  
  const idBtn: string = startBtn.id;
  const id = Number(idBtn.slice(6, idBtn.length));
  
  const shipAnimating = function(): void {
    const earth = document.querySelector('.wrap-image-earth') as HTMLDivElement;
    const anim: NodeJS.Timeout = setInterval(() => {
      const leftPx = parseInt(window.getComputedStyle(arrWrapSvg[id-1], null).left);
      arrWrapSvg[id-1].style.left = (leftPx + 10) + 'px';
      const coordEarth = Math.trunc(earth.getBoundingClientRect().x);
      const coordShip = parseInt(window.getComputedStyle(arrWrapSvg[id-1], null).left);
      console.log(coordShip, ' -------------------============== ------------------------= ====- --------');
      if (coordEarth <= coordShip + 55) {
        clearInterval(anim);
      }
    }, 60);
    arrShipAnim[id-1] = anim;
  };
  
  arrShipAnim.push(arrShipAnim[id-1]); // Add a placeholder for the ship animation
  
  startBtn.addEventListener('click', () => {
    stpStrtDriveEngine(id, 'started');
    stpStrtDriveEngine(id, 'drive');
    shipAnimating();
  });
}

export function setListStopShip() {
  const stopBtn = document.getElementById(`${stop_ID}`) as HTMLButtonElement;
  
  stopBtn.addEventListener('click', () => {
    const idBtn: string = stopBtn.id;
    const id = Number(idBtn.slice(5, idBtn.length));
    console.log(id, ' - stop_ID, startStopShip');
    stpStrtDriveEngine(id, 'stopped');
    clearInterval(arrShipAnim[id-1]);
    console.log(arrShipAnim, ' - arrShip');
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