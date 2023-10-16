const raceArena = document.querySelector('.race-arena') as HTMLDivElement;
const winnersDesk = document.querySelector('.winners-desk') as HTMLDivElement;
const toShipBtn = document.getElementById('toShipBtn') as HTMLButtonElement;
const toWinnerBtn = document.getElementById('toWinnerBtn') as HTMLButtonElement;
winnersDesk.classList.add('hide-block')

export function switchArenaWinn() {

winnersDesk.classList.toggle('show-winner')
raceArena.classList.toggle('hide-arena')

}
// switchArenaWinn()

toShipBtn.addEventListener('click', () => {
    console.log('TO SHIPS');
    toShipBtn.disabled = true;
    toWinnerBtn.disabled = false;  
    switchArenaWinn() 
})

toWinnerBtn.addEventListener('click', () => {
    console.log('TO WINNER');
    toShipBtn.disabled = false;
    toWinnerBtn.disabled = true; 
    switchArenaWinn()
})