import {countUFO} from './createTrack'

 //import {subwrapFieldRace} from './createTrack'

const contaierTrack = document.querySelector('.container-track') as HTMLDivElement;
let containerTrackHeight: number;
const fieldRace = document.querySelector('.field-race') as HTMLDivElement;
export let maxHeightField: number;

//import { lastPage } from './switchPages';

export function fixHeight() {
  containerTrackHeight = contaierTrack.offsetHeight;

  if(countUFO >= 7) {
    maxHeightField = containerTrackHeight * 7;
    fieldRace.style.height = maxHeightField + 'px';
  } else if (countUFO < 7) {
    fieldRace.style.height = (containerTrackHeight * countUFO) + 'px';
  }

  // if(lastPage && countUFO % 7 !== 0) {
  //   console.log('last page - ', lastPage)
  //   fieldRace.style.height = (containerTrackHeight * (countUFO % 7)) + 'px';
  // }
  console.log(countUFO, '- count UFO')
}

document.addEventListener('DOMContentLoaded',fixHeight)