const raceArena = document.querySelector('.race-arena') as HTMLDivElement;
const winnersDesk = document.querySelector('.winners-desk') as HTMLDivElement;
winnersDesk.classList.add('hidder-block')

export function switchArenaWinn() {

winnersDesk.classList.toggle('unhidder-block')
raceArena.classList.toggle('hidder-block')

}