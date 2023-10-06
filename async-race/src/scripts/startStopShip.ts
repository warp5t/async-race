import { start_ID, stop_ID } from "./createTrack";

export function setListStartShip() {
    const startBtn = document.getElementById(`${start_ID}`) as HTMLButtonElement;
    startBtn.addEventListener('click', () => {
        console.log(startBtn.id, ' - start_ID, startStopShip')
    })
}

export function setListStopShip() {
    const stopBtn = document.getElementById(`${stop_ID}`) as HTMLButtonElement;
    stopBtn.addEventListener('click', () => {
        console.log(stopBtn.id, ' - stop_ID, startStopShip')
    })
}
