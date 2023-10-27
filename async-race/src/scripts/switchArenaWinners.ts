const raceArena = document.querySelector('.race-arena') as HTMLDivElement;
const winnersDesk = document.querySelector('.winner-mode') as HTMLDivElement;
const toShipBtn = document.getElementById('toShipBtn') as HTMLButtonElement;
export const toWinnerBtn = document.getElementById('toWinnerBtn') as HTMLButtonElement;
winnersDesk.classList.add('hide-block')

export function switchArenaWinn() {
winnersDesk.classList.toggle('show-winner')
raceArena.classList.toggle('hide-arena')
}

toShipBtn.addEventListener('click', () => {
    toShipBtn.disabled = true;
    toWinnerBtn.disabled = false;  
    switchArenaWinn() 
})

toWinnerBtn.addEventListener('click', () => {
    toShipBtn.disabled = false;
    toWinnerBtn.disabled = true; 
    switchArenaWinn()
})