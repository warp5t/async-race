import {countUFO} from './createTrack'
 //import {subwrapFieldRace} from './createTrack'

const contaierTrack = document.querySelector('.container-track') as HTMLDivElement;
let containerTrackHeight: number;
const fieldRace = document.querySelector('.field-race') as HTMLDivElement;
export let maxHeightField: number;

export function fixHeight() {
  containerTrackHeight = contaierTrack.offsetHeight;

  if(countUFO >= 7) {
    maxHeightField = containerTrackHeight * 7;
    fieldRace.style.height = maxHeightField + 'px';
  } else if (countUFO < 7) {
    fieldRace.style.height = (containerTrackHeight * countUFO) + 'px';
  }
  console.log(countUFO, '- count UFO')
}

document.addEventListener('DOMContentLoaded',fixHeight)