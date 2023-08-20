import {countUFO} from './createTrack'
import {lastPage, enumPermiss} from './switchPages';
 //import {subwrapFieldRace} from './createTrack'

const contaierTrack = document.querySelector('.container-track') as HTMLDivElement;
let containerTrackHeight: number;
const fieldRace = document.querySelector('.field-race') as HTMLDivElement;
export let maxHeightField: number;

//import { lastPage } from './switchPages';

export function fixHeight() {
  enumPermiss()
  containerTrackHeight = contaierTrack.offsetHeight;
  console.log(countUFO, ' - countUFO,', lastPage, ' - lastPage, ', ' ||| fixHeight ||| ')
  if(countUFO >= 7 && lastPage === false) {
    maxHeightField = containerTrackHeight * 7;
    fieldRace.style.height = maxHeightField + 'px';
  } else if (countUFO <= 7 && lastPage === true) {
    fieldRace.style.height = (containerTrackHeight * countUFO) + 'px';
  } else if(countUFO > 7 && lastPage === true) {
    const ammountItems = countUFO % 7;
    fieldRace.style.height = (containerTrackHeight * ammountItems) + 'px';
  }
}

document.addEventListener('DOMContentLoaded',fixHeight)