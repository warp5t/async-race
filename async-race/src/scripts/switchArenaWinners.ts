const raceArena = document.querySelector('.race-arena') as HTMLDivElement;
const winnersDesk = document.querySelector('.winners-desk') as HTMLDivElement;
winnersDesk.classList.add('hide-block')

export function switchArenaWinn() {

winnersDesk.classList.toggle('show-winner')
raceArena.classList.toggle('hide-arena')

}
// switchArenaWinn()