import {
    start_ID,
    stop_ID
} from "./createTrack";
import { stpStrtDriveEngine } from "./serverRequest";

export function setListStartShip() {
    const startBtn = document.getElementById(`${start_ID}`) as HTMLButtonElement;
    startBtn.addEventListener('click', () => {
        const idBtn: string = startBtn.id;
        console.log(idBtn)
        const id = idBtn.slice(6, idBtn.length);
        console.log(id, ' - start_ID, startStopShip')
        stpStrtDriveEngine(Number(id), 'started')
        stpStrtDriveEngine(Number(id), 'drive')
    })
}

export function setListStopShip() {
    const stopBtn = document.getElementById(`${stop_ID}`) as HTMLButtonElement;
    stopBtn.addEventListener('click', () => {
        const idBtn: string = stopBtn.id;
        const id = idBtn.slice(5, idBtn.length);
        console.log(id, ' - stop_ID, startStopShip')
        stpStrtDriveEngine(Number(id),'stopped')
    })
}