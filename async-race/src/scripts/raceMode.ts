import { countPages } from "./switchPages";

const raceBtn = document.getElementById('RACE') as HTMLDivElement;

raceBtn.addEventListener('click', () => {
    console.log(countPages, ' - countPages , raceMode');
    
})